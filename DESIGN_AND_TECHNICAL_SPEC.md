# DESIGN AND TECHNICAL SPEC

## Design principle

The site should feel like a polished healthcare-analytics portfolio, not a generic developer template and not a gaming fan page.

## Visual language

- editorial spacing
- clear hierarchy
- strong typography
- rounded cards used sparingly
- real charts/screenshots framed cleanly
- subtle grid, line, or data-point motifs
- restrained motion
- no neon cyberpunk styling
- no obvious Sonic imagery, rings, checkerboards, or character references

A faint sense of speed or motion is acceptable through directional lines, staggered chart marks, or transitions, but it should be invisible as a gaming reference to most recruiters.

## Typography

Prefer an open-source pairing such as:

- Headings: Space Grotesk, Manrope, or Plus Jakarta Sans
- Body: Inter, DM Sans, or Source Sans 3

Use system fallbacks and avoid loading many font weights.

## Layout

- max content width around 1180-1240px
- readable body width around 65-75 characters on case-study pages
- generous desktop whitespace
- compact but breathable mobile spacing
- headshot cropped consistently, with responsive image sizes

## Project images

Use the live Carrd site as the source map for existing visuals:

- Heart disease: `https://alecgany.carrd.co/assets/images/image02.jpg?v=ae893822`
- Sega visual 1: `https://alecgany.carrd.co/assets/images/image05.jpg?v=ae893822`
- Sega visual 2: `https://alecgany.carrd.co/assets/images/image06.jpg?v=ae893822`
- Operations visual 1: `https://alecgany.carrd.co/assets/images/image04.jpg?v=ae893822`
- Operations visual 2: `https://alecgany.carrd.co/assets/images/image03.jpg?v=ae893822`
- Operations visual 3: `https://alecgany.carrd.co/assets/images/image07.jpg?v=ae893822`

Download and store local optimized copies in the site repository. Do not hotlink production assets from Carrd.

If higher-resolution originals exist inside GitHub, prefer those. Record the source of each image in the repository documentation.

## Case-study visuals

- Include concise captions explaining what each chart demonstrates.
- Avoid screenshots so small that text becomes unreadable.
- Provide click-to-expand behavior only if it remains accessible.
- Do not use decorative charts with invented data.

## Suggested components

- Header/Nav
- Hero
- ProofPoint row
- ProjectCard
- ExperienceTimeline
- SkillGroup
- AdditionalWorkCard
- CaseStudyHero
- FindingCallout
- LimitationBox
- ImageFigure
- Footer

## Content architecture

Store project case-study content separately from page components. Each project entry should include:

- slug
- title
- category
- short summary
- executive summary
- question
- scope/data
- methodology
- findings
- recommendation
- limitations
- tools
- image list with alt text and captions
- code URL
- featured order

## Deployment configuration

Prepare for GitHub Pages with an Actions workflow. Ensure Astro `site` and `base` configuration can be changed easily when the final repository name is known.
