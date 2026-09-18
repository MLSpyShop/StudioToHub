# StudioToHub

StudioToHub is a Vite + React app that packages a deterministic deployment standard for taking apps built in Google AI Studio and publishing them to GitHub Pages with the correct static asset configuration.

You can open the deployed app here:

- [Open the app](https://mlspyshop.github.io/StudioToHub/)

## What this project does

This project is a branded specification and workflow helper for a 4-step deployment pipeline:

1. Download the official specification PDF
2. Upload it to Google AI Studio
3. Copy and send the master directive prompt
4. Configure GitHub Pages and deploy

The app explains why AI Studio-generated Vite apps often break on GitHub Pages because of absolute asset paths, and then provides the exact fix: using relative Vite base paths, plus a deployment workflow that makes the static site reliable.

## Project structure

- `index.html` — app entry point
- `src/main.tsx` — React bootstrap
- `src/App.tsx` — main app shell
- `src/components/` — UI sections for the workflow guide, modal, and header
- `src/data/` — specification metadata and generated prompt content
- `src/utils/` — PDF generation helpers

## Local development

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Why the app exists

The app turns a fragile manual deployment process into a repeatable AI-assisted workflow:

- fixes asset 404 issues through `base: './'`
- documents the GitHub Pages publishing setup
- provides a copyable prompt for AI Studio
- includes a specification viewer and downloadable PDF export

## Related links

- [Deployed app](https://mlspyshop.github.io/StudioToHub/)
- [Package configuration](./package.json)
- [Source app](./src/App.tsx)
