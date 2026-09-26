# Briefing

A separate publishing site for long-form market, policy, technology and knowledge briefings.

## Stack

- Astro
- Vue 3 interactive islands
- TypeScript
- Markdown content collections
- remark-math + KaTeX
- GitHub Actions + GitHub Pages

## Local development

    npm install
    npm run dev

## Build

    npm run build

The production base path is `/briefing`, targeting:

    https://majortomman.github.io/briefing/

## Content

- `src/content/alerts`: immediate major-event alerts
- `src/content/daily`: daily market/policy/finance/technology briefings
- `src/content/knowledge`: bilingual knowledge briefings

Each article remains plain Markdown with LaTeX math, while Astro renders it to static HTML.
