# Production QA Report

Completed August 5, 2026.

## Build and content

- `npm install` completed successfully with 0 reported vulnerabilities.
- `astro check` completed with 0 errors, warnings, or hints.
- Production static build completed successfully for all five pages.
- Required output verification passed for the home page, three case studies, 404 page, résumé, robots file, sitemap, favicon, and social image.
- A separate build using `/portfolio-test` confirmed GitHub Pages base-path handling for navigation, generated assets, and the résumé download.
- Public profile and project URLs used by the site returned HTTP 200 during launch review.

## Accessibility

- Axe scans passed on the home page, all three case studies, and the 404 page.
- Keyboard focus begins with the skip link, focus indicators are visible, and the mobile navigation uses a native keyboard-focusable disclosure control.
- Every production image has non-empty alternative text plus intrinsic width and height.
- Case-study visuals include captions, each case study has a limitations section, and reduced-motion preferences are respected.
- Lighthouse accessibility score: 100.

## Responsive and visual review

- Automated responsive checks passed at 320, 375, 768, 1024, and 1440 pixels across the home page and all three case studies.
- No horizontal overflow or broken responsive images were detected after lazy assets were loaded.
- Manual browser review confirmed the desktop hero, 320-pixel mobile hero, mobile menu, and case-study layouts.
- Browser QA identified and resolved a two-pixel desktop overflow and a mobile-menu positioning issue.
- Project-card visual frames now use matched heights so adjacent case-study headlines align, and the desktop hero exposes all primary calls to action within a 900-pixel viewport.

## Performance and SEO

- Lighthouse performance: 100.
- Lighthouse best practices: 100.
- Lighthouse SEO: 100.
- Unique titles, descriptions, canonical URLs, Open Graph/X metadata, JSON-LD, responsive images, sitemap, robots file, and a 404 page are present.
- No analytics, advertising, autoplay media, or third-party tracking scripts are included.

## Publication safeguards

- Operational-capacity charts use clearly labeled synthetic values; the collected source screenshots with real operational values are not shipped.
- The Sega platform-mix visual is a publication-ready HTML/CSS reconstruction grounded in the public notebook's exact final counts rather than a relabeled or approximated screenshot.
- The exact operations site is not named, and no donor-identifiable or private staffing data is published.
- The heart-disease case study repeatedly identifies results as held-out test-set performance and not clinical validation.
- The operational project is absent from the linked public repositories, so the site does not invent a code URL or link to a repository root.
- Image provenance and public-source notes are recorded in `docs/ASSET_SOURCES.md`.
