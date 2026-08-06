# CODEX MASTER PROMPT

Build and prepare for deployment a polished public portfolio website for **Alec Gany**, targeting **healthcare analytics and applied data science** roles.

You have been given a content brief, design/technical specification, copy draft, asset manifest, QA checklist, a rough static mockup, a professional headshot, and a general resume. Treat the mockup as art direction and information architecture only. Rebuild the site cleanly rather than patching the mockup into production.

## Primary objective

A recruiter should understand within 10-15 seconds that Alec combines:

- a B.S. in Applied Mathematics
- healthcare technology experience at Epic
- frontline healthcare operations and training experience at the American Red Cross
- practical analytics and machine-learning projects using SQL, Python, Power BI, DAX, and Excel

The site should make the career transition feel coherent, intentional, and credible.

## Recommended stack

Use **Astro** as a static site generator, with TypeScript where useful and plain CSS or scoped Astro styles. Do not add React, a database, authentication, a CMS, or a heavy UI framework unless there is a compelling reason. Keep client-side JavaScript minimal.

Structure project case studies as Markdown/MDX or Astro content collections so Alec can edit copy without touching layout code.

## Required pages

1. Home
2. Operational Capacity Analysis case study
3. Heart Disease Risk Prediction case study
4. Sega Portfolio Analysis case study
5. Optional 404 page

The home page must include:

- sticky but unobtrusive navigation
- hero with Alec's headshot
- concise professional positioning
- three flagship project cards
- experience bridge: Red Cross, Epic, Applied Mathematics degree
- skills/toolkit section grounded in evidence
- Additional Work cards for PS Weather API, 608 Scout, and GIS Projects
- about section
- resume download
- contact links

## Flagship project order

1. Operational Capacity Analysis: lead healthcare-operations project
2. Heart Disease Risk Prediction: lead applied-data-science project
3. Sega Portfolio Analysis: broader strategic analytics example

## Content accuracy rules

- Never invent achievements, business outcomes, clients, users, deployment results, revenue impact, or clinical validity.
- Replace “Business Impact” with “Decision Relevance,” “Key Findings,” or “Recommended Action” unless a recommendation was actually implemented and measured.
- Heart-disease results must be described as performance on a held-out test set, not clinical validation.
- Do not say the model “ensures” patient detection or “keeps patients safe.”
- Operational data must be anonymized. Do not name the exact Red Cross site. Do not publish donor-identifiable information, private staffing details, or proprietary data.
- Where publication rights are uncertain, recreate visuals using synthetic data that preserves the analytical lesson without reproducing internal values.
- Preserve limitations prominently on each case-study page.

## Visual direction

Professional, modern, calm, and analytical. Healthcare credibility comes first. Use restrained visual energy rather than obvious gaming references.

Suggested palette:

- deep navy: #102238
- teal: #176B87
- soft blue: #DCEFF7
- warm off-white: #F7F9FC
- muted slate: #66758A
- optional lime accent used sparingly: #C9F06B

Use the headshot at a moderate size in the hero or near the top of the page. Do not make it a full-screen portrait.

Use real project screenshots from Alec's existing Carrd site where appropriate. If image quality is insufficient, locate the source images inside the GitHub repository or ask Alec for originals. Do not upscale small screenshots aggressively or substitute fake charts without labeling them as illustrative.

## Navigation and links

Use direct links to the exact project notebook/folder when resolved. Do not send users to a repository root when a direct deep link is available.

Primary external links:

- GitHub profile: https://github.com/agany52
- LinkedIn: https://linkedin.com/in/alec-gany
- Email: mailto:agany524@gmail.com
- Current portfolio reference: https://alecgany.carrd.co

The resume button should download `Alec_Gany_Healthcare_Analytics_Resume.pdf`.

Do not show Alec's phone number directly on the website. It may remain inside the downloadable resume.

## Repository inspection

Inspect `https://github.com/agany52/Python-Machine-Learning-Projects` and identify the exact paths for the operational-capacity, heart-disease, and Sega projects. Also inspect `https://github.com/agany52/heart-disease-predictor` and decide whether it is a cleaner direct destination for the heart-disease case study.

Additional Work repositories:

- https://github.com/agany52/PS-Weather-API
- https://github.com/agany52/608-Scout
- https://github.com/agany52/GIS-Projects

If the flagship repository lacks clear READMEs or deep-linkable structure, create a documented recommendation but do not silently reorganize Alec's separate project repository unless explicitly authorized.

## Technical requirements

- responsive from 320px mobile through large desktop
- semantic HTML and logical heading order
- keyboard-accessible navigation and controls
- visible focus states
- WCAG AA color contrast
- meaningful alt text
- `prefers-reduced-motion` support
- no autoplay media
- optimized images with width/height to reduce layout shift
- no third-party tracking by default
- strong Core Web Vitals target
- metadata, canonical URLs, Open Graph/Twitter cards, favicon, sitemap, robots.txt
- clean 404 page
- no broken or placeholder links at launch
- print-friendly case-study pages if practical

## Testing and verification

Before declaring the build complete:

- run the production build
- run lint/type checks
- test all routes and links
- test keyboard navigation
- test mobile layout at 320px, 375px, 768px, 1024px, and desktop
- check contrast and alt text
- inspect for overflow, clipping, and cumulative layout shift
- run Lighthouse or an equivalent audit where available
- confirm the site can deploy to GitHub Pages

## Deployment

Prepare GitHub Pages deployment using GitHub Actions. Include clear README instructions for local development, content editing, deployment, and adding a custom domain later.

Use a GitHub Pages-compatible base path during development if the repository is not named `agany52.github.io`. If deploying to another host is materially simpler, explain the tradeoff, but keep the build host-portable.

## Definition of done

The project is done when:

- the production site builds without errors
- the content is accurate and restrained
- the three flagship case-study pages are complete
- Additional Work is visible but secondary
- the headshot and resume are integrated
- all external links work
- operational information is anonymized
- the site is responsive and accessible
- deployment instructions and workflow are included
- no placeholder text, fake metrics, or dead buttons remain
