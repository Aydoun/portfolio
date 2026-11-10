# portfolio

Personal site and online resume of Mohamed Amine Aydoun, built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

- `src/data/resume.ts`: all resume content (profile, experience, skills, languages, education)
- `src/content/blog/`: blog posts as Markdown. `draft: true` hides a post from production builds.
- `src/pages/play/`: games and experiments. Register each one in `src/pages/play/index.astro`.
- `src/styles/global.css`: design tokens (colours, fonts) for light and dark themes
