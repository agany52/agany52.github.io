import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';

const baseURL = process.env.SITE_TEST_URL ?? 'http://127.0.0.1:4321';
const routes = [
  '/',
  '/projects/operational-capacity-analysis/',
  '/projects/heart-disease-risk-prediction/',
  '/projects/sega-portfolio-analysis/',
  '/404.html',
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();
const failures = [];

for (const route of routes) {
  const response = await page.goto(new URL(route, baseURL).href, { waitUntil: 'networkidle' });
  if (!response?.ok()) failures.push(`${route}: HTTP ${response?.status() ?? 'no response'}`);

  const results = await new AxeBuilder({ page }).analyze();
  for (const violation of results.violations) {
    failures.push(`${route}: ${violation.id} (${violation.impact}) — ${violation.help}`);
  }

  await page.keyboard.press('Tab');
  const focusVisible = await page.evaluate(() => document.activeElement?.classList.contains('skip-link'));
  if (!focusVisible) failures.push(`${route}: skip link was not the first keyboard focus target`);
}

await context.close();
await browser.close();

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Accessibility checks passed for ${routes.length} routes.`);
