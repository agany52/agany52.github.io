import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const baseURL = process.env.SITE_TEST_URL ?? 'http://127.0.0.1:4321';
const widths = [320, 375, 768, 1024, 1440];
const routes = [
  { path: '/', name: 'home' },
  { path: '/projects/operational-capacity-analysis/', name: 'operations' },
  { path: '/projects/heart-disease-risk-prediction/', name: 'heart' },
  { path: '/projects/sega-portfolio-analysis/', name: 'sega' },
];

mkdirSync('test-results/responsive', { recursive: true });
const browser = await chromium.launch({ headless: true });
const failures = [];

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });

  for (const route of routes) {
    await page.goto(new URL(route.path, baseURL).href, { waitUntil: 'networkidle' });
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < pageHeight; y += 700) {
      await page.evaluate((scrollTop) => window.scrollTo(0, scrollTop), y);
      await page.waitForTimeout(25);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(50);

    const layout = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      h1Visible: Boolean(document.querySelector('h1')?.getBoundingClientRect().height),
      headerVisible: Boolean(document.querySelector('[data-site-header]')?.getBoundingClientRect().height),
      brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    }));

    if (layout.scrollWidth > layout.clientWidth) failures.push(`${route.path} @ ${width}px: horizontal overflow ${layout.scrollWidth - layout.clientWidth}px`);
    if (!layout.h1Visible) failures.push(`${route.path} @ ${width}px: h1 is not visible`);
    if (!layout.headerVisible) failures.push(`${route.path} @ ${width}px: header is not visible`);
    if (layout.brokenImages.length) failures.push(`${route.path} @ ${width}px: ${layout.brokenImages.length} image(s) failed to load`);

    await page.screenshot({
      path: `test-results/responsive/${route.name}-${width}.png`,
      fullPage: true,
    });
  }

  await page.close();
}

await browser.close();

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Responsive checks passed at ${widths.join(', ')}px across ${routes.length} routes.`);
