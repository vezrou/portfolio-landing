# Portfolio Landing

A small React/Vite portfolio used to demonstrate project-aware AI assistance.

## Why this repo is useful for SALVAL

The project intentionally contains reusable patterns that an assistant should detect before generating new code:

- Shared `Button`, `Card`, `SectionHeading`, `ProjectCard` and `Stat` components.
- Centralized CSS design tokens in `src/styles/tokens.css`.
- Responsive layout conventions in `src/styles/portfolio.css`.
- Reusable data in `src/data/projects.js`.
- A custom React hook in `src/hooks/useDocumentTitle.js`.
- Reduced-motion handling in global styles.

## Demo prompt ideas

Try asking SALVAL:

> Add a services section with three service cards and a CTA. Reuse the existing project patterns instead of creating duplicate styles or components.

Then follow with:

> Add a featured case study section, but do not create a new card component if the project already has one that can be reused.

The interesting behavior is not how much code is generated. It is whether the assistant identifies what already exists and produces the smallest consistent change.

## Run locally

```bash
npm install
npm run dev
```
