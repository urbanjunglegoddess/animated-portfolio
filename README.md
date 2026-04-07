# Animated Portfolio — Omegea Hunter

A visually immersive front-end developer portfolio featuring video backgrounds, animated text gradients, and interactive project showcases. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

**Live site:** [Urban Jungle Goddess Portfolio](https://omegea.github.io/animated-portfolio/)

---

## Features

- **Galaxy video background** — full-screen looping video with `mix-blend-mode: overlay`
- **Black hole hero animation** — layered video that composites over the hero section
- **Animated text gradients** — CSS `@keyframes` cycling through a custom color palette (lunar ash, moody purple, sunset orange, satin sheen gold)
- **Interactive project cards** — videos paused by default, playing on hover via JavaScript
- **Scroll indicator** — animated down-arrow built purely in CSS
- **Tech stack slider** — auto-scrolling infinite carousel with pause-on-hover
- **Custom typography** — hand-picked fonts (Aquoos 3D, Rubik Glitch, Space Mono, Omega Sans Bold, and more) loaded from local font files
- **Responsive layout** — media queries in `responsive.css`

---

## Sections

| Section | Description |
| --- | --- |
| **Hero** | Full-viewport intro with animated heading and a floating video element |
| **Info Cards** | Grid layout with bio, tech stack, globe video, and passion statement |
| **My Projects** | Project showcase cards with hover-to-play video previews |
| **Skills** | Centered brain graphic flanked by Designer/Coder write-ups and an icon slider |

---

## Project Structure

```text
animated-portfolio/
├── index.html
├── css/
│   ├── style.css        # Layout, components, and CSS variables
│   ├── animation.css    # Keyframes and gradient utility classes
│   └── responsive.css   # Media queries
├── js/
│   ├── app.js           # Project video hover interaction
│   └── animation.js     # (reserved for future animations)
└── assets/
    ├── fonts/           # Local font files (.ttf)
    ├── images/          # Grid card images, logo, skills brain graphic
    └── videos/          # galaxy.mp4, blackhole.mp4, hero-video.mp4, glob.mp4, project1-3.mp4
```

---

## Getting Started

No build step needed. Open `index.html` directly in a browser, or use any static file server:

```bash
# VS Code Live Server extension — right-click index.html → "Open with Live Server"

# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

> **Note:** Browsers block auto-play for videos with audio. All videos use the `muted` attribute to ensure auto-play works without user interaction.

---

## Design System

### Colors

| Name | Hex |
| --- | --- |
| Void Black | `#0A0A0A` |
| Lunar Ash | `#E8E6E1` |
| Moody Purple | `#3A2465` |
| Forest Green | `#1E3A2A` |
| Sunset Orange | `#D3541A` |
| Satin Sheen Gold | `#CC912D` |

### Gradient Utility Classes

| Class | Usage |
| --- | --- |
| `.white-color-center-gradient` | Animated gradient text on light backgrounds |
| `.white-all-gradient` | Full 6-color sweep on light backgrounds |
| `.black-color-center-gradient` | Animated gradient text on dark backgrounds |
| `.black-all-gradient` | Full 6-color sweep on dark backgrounds |

### Typography

| Variable | Font |
| --- | --- |
| `--font-display` | Aquoos 3D |
| `--font-heading` | Rubik Glitch / JabbingDemoTexture |
| `--font-primary` | Space Mono |
| `--font-body` | Omega Sans Bold |
| `--font-accent` | District |
| `--font-special` | Spectra Volt |

---

## Deployment (GitHub Pages)

1. Push to the `main` branch
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. The site will be live at `https://<your-username>.github.io/animated-portfolio/`

> All asset paths in this project use **relative paths** (e.g. `assets/videos/galaxy.mp4`) so they resolve correctly under the `/animated-portfolio/` subpath on GitHub Pages.

---

## Roadmap

- [ ] Holographic button effect
- [ ] Improve gradient animations (smoother color transitions)
- [ ] Fill in real project links and descriptions
- [ ] Add contact form or mailto link to Contact Me buttons
- [ ] Complete mobile responsive breakpoints
- [ ] Add favicon

---

## License

© 2025 Urban Jungle Goddess. All rights reserved.
