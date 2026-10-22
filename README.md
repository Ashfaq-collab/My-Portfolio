# Mohammed Ashfaq — Developer Portfolio

A responsive, frontend-only portfolio built with React, Vite, semantic HTML, and custom CSS. It presents Mohammed Ashfaq’s background, skills, education, and Code Snippet Manager project.

## Requirements

- Node.js 18+ and npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Deploy

This is a static frontend; no backend or environment variables are required.

- **Vercel:** Import the repository, use `npm run build` as the build command, and `dist` as the output directory. Vercel detects Vite automatically.
- **Netlify:** Import the repository, use `npm run build` as the build command, and `dist` as the publish directory.
- **Render:** Create a Static Site, connect the repository, use `npm install && npm run build` as the build command, and `dist` as the publish directory.

## Updating project content

Project details and skill groups live in `src/data/portfolio.js`. Add a project object to the exported `projects` array to create another featured card. The contact links and profile details are in the relevant component files under `src/components/`.

The external font is loaded from Google Fonts; system sans-serif fallbacks are provided by the browser if it is unavailable.
