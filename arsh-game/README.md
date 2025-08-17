# Adventures of Arsh

Adventures of Arsh is a small React + Vite playground that demonstrates an animated dashboard that links to three mini‑game stubs. SVG assets are imported as React components and animated with GSAP. Global state such as unlocked nodes and SFX settings is handled with [`zustand`](https://github.com/pmndrs/zustand) and persisted to `localStorage`.

## Getting started

```bash
npm create vite@latest arsh-game -- --template react-ts
cd arsh-game
npm i react-router-dom gsap zustand howler
npm i -D vite-plugin-svgr @types/howler
```

The repository already contains the generated project and the additional configuration for SVG imports and routing.

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

A GitHub Actions workflow can be added to automatically build and deploy the `dist` folder to GitHub Pages. When deploying to `username.github.io/repo`, ensure the `base` option in `vite.config.ts` matches the repository name (`/Arsh-s-Adventure/`).

## Features

- Animated dashboard with hover/focus glow and hero idle animation
- Keyboard‑accessible panels (arrow navigation + enter/space via native button)
- Lazy‑loaded routes for `Mind`, `Body`, and `Spirit` mini‑game stubs
- Sound effects on hover and click using Howler with persistent toggle via zustand
- `prefers-reduced-motion` respected for users who disable animations

## Extending

- Flesh out each mini‑game inside the `#game` div in their respective route components
- Replace placeholder audio and background assets in `public/`
- Implement additional settings (low effects, reset progress, etc.)
- Integrate a real game engine (PixiJS/Phaser) inside the mini‑game stubs

