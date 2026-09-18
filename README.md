# StudioToHub

A deployment acceleration toolkit for Google AI Studio developers who want to turn fast prototypes into polished, GitHub Pages-ready Vite apps without the usual static hosting headaches.

Live demo:

- [Open the app](https://mlspyshop.github.io/StudioToHub/)

## Why Google Developers use StudioToHub

StudioToHub solves a real production problem: AI-generated Vite apps often work locally but break when deployed to GitHub Pages because of absolute asset paths. This project turns that fragile workflow into a repeatable, confidence-building deployment standard.

Built for developers working in:

- Google AI Studio
- Vite + React
- GitHub Pages hosting
- Static frontends that need reliable browser asset loading

The result is faster shipping, fewer broken deployments, and a clearer path from prototype to published web app.

## What this product does

StudioToHub packages a tested deployment blueprint for a 4-step release flow:

1. Download the official specification PDF
2. Upload it to Google AI Studio
3. Copy and send the master directive prompt
4. Configure GitHub Pages and deploy

It explains the root cause of the common deployment failure—absolute asset paths—and gives the exact fix: relative base paths, static build discipline, and GitHub Pages-friendly project configuration.

## The sales advantage

If your team is building fast with AI-assisted generation, the biggest hidden cost is deployment reliability.

StudioToHub gives you:

- A faster path from AI-generated app to published app
- A predictable GitHub Pages deployment workflow
- Clear documentation for developers and teams
- Reduced time spent debugging broken asset references
- A reusable standard for shipping static frontends with confidence

This is not just a demo. It is a repeatable deployment framework designed for modern AI-assisted software workflows.

## Built for the modern developer stack

StudioToHub is designed for the ecosystem developers actually use:

- Vite for modern frontend builds
- React for rapid UI iteration
- GitHub Pages for simple static hosting
- Google AI Studio for fast AI-assisted app generation

## Architecture

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
- documents GitHub Pages setup for production publishing
- provides a copyable prompt for AI Studio
- includes a specification viewer and downloadable PDF export

## Related links

- [Open the live app](https://mlspyshop.github.io/StudioToHub/)
- [Package configuration](./package.json)
- [Source app](./src/App.tsx)
