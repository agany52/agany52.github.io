# Alec Gany — Healthcare Analytics Portfolio

A fast, static Astro portfolio for healthcare analytics and applied data-science roles. The site includes a recruiter-focused home page, three detailed case studies, a downloadable résumé, responsive images, structured metadata, and an automated GitHub Pages deployment workflow.

## Local development

Use Node.js 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Astro prints the local preview URL. The production checks are:

```bash
npm run check
npm run build
npm run test:site
```

Browser-based accessibility and responsive checks require Playwright's Chromium browser and a running preview:

```bash
npx playwright install chromium
npm run preview
```

In another terminal:

```bash
npm run test:a11y
npm run test:responsive
```

## Editing content

Flagship case studies live in `src/content/projects/`. Each Markdown file stores the project summary, question, data scope, method, findings, recommendation, limitations, tools, visuals, and source links separately from page layout.

- Edit homepage narrative and experience copy in `src/pages/index.astro`.
- Edit shared navigation, footer, metadata, and visual styles in `src/components/`, `src/layouts/`, and `src/styles/global.css`.
- Add approved local images to `src/assets/images/` so Astro can generate responsive formats.
- Replace the public résumé at `public/resume/Alec_Gany_Healthcare_Analytics_Resume.pdf` without changing its filename.
- Keep operational-capacity visuals synthetic or safely aggregated unless publication rights are explicitly confirmed.

After any content change, run `npm run check && npm run build`.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` deploys pushes to `main` and can also be run manually.

1. Create a GitHub repository and push this project to its `main` branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push to `main` or run **Deploy to GitHub Pages** from the Actions tab.

The workflow automatically detects the correct base path:

- Repository `agany52.github.io`: deploys at `/`.
- Any other repository name: deploys at `/<repository-name>`.

The same behavior can be tested locally:

```bash
SITE_URL=https://agany52.github.io BASE_PATH=/portfolio-repository npm run build
```

PowerShell equivalent:

```powershell
$env:SITE_URL='https://agany52.github.io'
$env:BASE_PATH='/portfolio-repository'
npm run build
```

## Adding a custom domain later

1. Add `public/CNAME` containing only the custom hostname, such as `portfolio.example.com`.
2. Add the GitHub Actions repository variable `SITE_URL` with the full HTTPS origin, such as `https://portfolio.example.com`.
3. Add the repository variable `BASE_PATH` with `/`.
4. Configure the domain's DNS records following GitHub Pages documentation, then rerun the deployment workflow.

## Source and publication notes

See `docs/ASSET_SOURCES.md` for image provenance and `docs/REPOSITORY_LINK_AUDIT.md` for the exact public project paths used by the site. No analytics, advertising, or third-party tracking scripts are included.

