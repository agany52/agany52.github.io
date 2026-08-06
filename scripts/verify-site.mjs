import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const dist = root.pathname.replace(/^\/(.:\/)/, '$1');
const failures = [];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

if (!existsSync(dist)) {
  throw new Error('dist/ does not exist. Run npm run build first.');
}

const required = [
  'index.html',
  '404.html',
  'projects/operational-capacity-analysis/index.html',
  'projects/heart-disease-risk-prediction/index.html',
  'projects/sega-portfolio-analysis/index.html',
  'resume/Alec_Gany_Healthcare_Analytics_Resume.pdf',
  'robots.txt',
  'sitemap-index.xml',
  'favicon.png',
  'images/og.png',
];

for (const file of required) {
  if (!existsSync(join(dist, file))) failures.push(`Missing required output: ${file}`);
}

const htmlFiles = walk(dist).filter((file) => extname(file) === '.html');
const titles = new Set();
const descriptions = new Set();

for (const file of htmlFiles) {
  const label = relative(dist, file).replaceAll('\\', '/');
  const html = readFileSync(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/s)?.[1]?.trim();
  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  const imageTags = html.match(/<img\b[^>]*>/g) ?? [];

  if (!title) failures.push(`${label}: missing title`);
  else if (titles.has(title)) failures.push(`${label}: duplicate title "${title}"`);
  else titles.add(title);

  if (!description) failures.push(`${label}: missing meta description`);
  else if (descriptions.has(description) && label !== '404.html') failures.push(`${label}: duplicate meta description`);
  else descriptions.add(description);

  if (h1Count !== 1) failures.push(`${label}: expected exactly one h1, found ${h1Count}`);
  if (!/<link rel="canonical" href="https?:\/\//.test(html)) failures.push(`${label}: missing absolute canonical URL`);
  if (/href="#"/.test(html)) failures.push(`${label}: contains placeholder href="#"`);
  if (/placeholder|lorem ipsum|â€|Â·|ðŸ/i.test(html)) failures.push(`${label}: contains placeholder or mojibake text`);

  for (const tag of imageTags) {
    if (!/\salt="[^"]+"/.test(tag)) failures.push(`${label}: image is missing non-empty alt text`);
    if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) failures.push(`${label}: image is missing width or height`);
  }

  const externalTargets = html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? [];
  for (const tag of externalTargets) {
    if (!/rel="[^"]*noopener[^"]*noreferrer[^"]*"/.test(tag)) failures.push(`${label}: external target lacks noopener noreferrer`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files and ${required.length} required outputs.`);

