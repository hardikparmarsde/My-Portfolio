# Hardik Parmar — Portfolio

Modern, responsive personal portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Project structure

- `src/data/profile.js`: Resume + projects data (single source of truth)
- `src/components/`: Reusable UI components (Navbar, Reveal, ProjectCard, Loader)
- `src/sections/`: Page sections (Hero, About, Skills, Projects, Experience, Contact, Footer)
- `public/projects/`: Project screenshots used in the Projects section

## Customize

- **Content**: edit `src/data/profile.js`
- **Theme / styles**: edit `tailwind.config.js` and `src/index.css`
- **SEO meta tags**: edit `public/index.html`
