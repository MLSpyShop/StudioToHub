# StudioToHub

Deploy AI-generated Vite apps to GitHub Pages with confidence.

A developer-first deployment toolkit for teams building in Google AI Studio and shipping static frontends with predictable, production-ready asset handling.

Live demo:

- [Open the app](https://mlspyshop.github.io/StudioToHub/)

## Why this project exists

AI-generated frontend apps are fast to create, but they often fail when published to GitHub Pages. The most common issue is not app logic or React code — it is the static hosting configuration. Generated Vite apps frequently ship with absolute asset paths that work in local development but break in GitHub Pages deployments.

StudioToHub exists to remove that uncertainty.

It gives developers a clear, repeatable deployment standard for taking a Google AI Studio-generated project and turning it into a reliable GitHub Pages site without the usual trial-and-error debugging cycle.

## Built for Google Developers and AI-assisted workflows

StudioToHub is designed for the modern developer workflow:

- Google AI Studio for rapid prototyping
- Vite + React for fast UI building
- GitHub Pages for lightweight static hosting
- AI-assisted generation with production deployment discipline

This project exists for one reason: to make AI-generated apps easier to publish, trust, and scale.

## The problem we solve

When a static site is deployed to GitHub Pages, asset paths must be treated carefully. A common Vite setup uses absolute paths that are valid during local development but fail in production static hosting. The result is broken CSS, missing JS bundles, and 404 asset errors that look like a code problem even when the real issue is deployment configuration.

StudioToHub makes this transparent and fixes it with a proven pattern:

- relative asset paths
- GitHub Pages-friendly build configuration
- deployment guidance based on real production constraints
- a repeatable process for shipping without guesswork

## What StudioToHub includes

This project packages a practical deployment framework for a 4-step release flow:

1. Download the official specification PDF
2. Upload it to Google AI Studio
3. Copy and send the master directive prompt
4. Configure GitHub Pages and deploy

It also includes:

- a clear explanation of the asset path issue
- a GitHub Pages deployment workflow
- a deploy-ready prompt for AI Studio
- a specification viewer and PDF export experience
- a cleaner path from prototype to published app

## Why teams adopt it

For product teams and developers shipping AI-generated frontends, time-to-publish matters. The hidden cost of broken deployments is not just a few minutes of debugging — it is delayed launches, lost confidence, and friction between prototype and production.

StudioToHub helps teams:

- ship faster with fewer deployment blockers
- reduce time spent debugging static hosting issues
- standardize AI-generated app publishing workflows
- increase confidence in GitHub Pages deployments

## Product snapshot

StudioToHub is a deployment acceleration toolkit for static web apps built with AI-assisted generation pipelines.

It is built to answer a simple question:

How do we take a working AI-generated Vite app and publish it reliably to GitHub Pages?

The answer is a repeatable workflow, proof of the fix, and a deployment standard developers can trust.

## Project structure

- `index.html` — app entry point
- `src/main.tsx` — React bootstrap
- `src/App.tsx` — main app shell
- `src/components/` — workflow UI, modal, and navigation sections
- `src/data/` — specification metadata and prompt content
- `src/utils/` — PDF generation and helper utilities

## Quick start

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Why it matters

The app turns a fragile, manual deployment process into a repeatable AI-assisted workflow:

- fixes asset 404 issues through `base: './'`
- documents GitHub Pages publishing setup
- provides a copyable prompt for AI Studio
- includes a specification viewer and downloadable PDF export

## Related links

- [Open the live app](https://mlspyshop.github.io/StudioToHub/)
- [Package configuration](./package.json)
- [Source app](./src/App.tsx)
