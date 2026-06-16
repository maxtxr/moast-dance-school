# 🏫 MOAST Dance School

> **Motion of Art, Style & Taste** 🔥

[**English**](README.md) | [**Português**](README.pt.md)

A bold, neo-brutalist website for **MOAST Dance School** — a Portuguese dance academy offering everything from Hip-Hop and Breaking to Contemporary, Kizomba, and specialised training programmes. Built with **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

The UI speaks **European Portuguese** (`pt-PT`) to its users; the codebase stays clean with **English** naming conventions for developer accessibility.

---

## ✨ Features

| Feature | Description |
| --- | --- |
| **🕺 Class Catalogue** | Full catalogue with looping video previews, category colour coding, and level badges |
| **📅 Weekly Schedule** | Interactive grid filterable by studio (Estúdio 1, Estúdio 2, Grémio) with animated tab transitions |
| **🔮 Today's Classes** | Dynamic homepage section showing the current day's schedule with pagination |
| **👩‍🏫 Teacher Profiles** | Individual cards with cutout images, nickname badges, colour-coded class tags, and bios |
| **🛍️ Merch & Pricing** | Horizontal-scroll polaroid gallery with embedded auto-play trailer + pricing table |
| **📝 Registration Hub** | Google Form CTAs for trial classes and enrolment at both locations |
| **📖 School Manifesto** | Full-screen philosophy page with pillar cards, method section, and polaroid video showcase |
| **📍 Contact & Maps** | Phone, email, socials (Instagram/Facebook), and grayscale Google Maps embeds |
| **🌀 Page Transitions** | Route-level enter/exit animations via Framer Motion `AnimatePresence` |
| **📱 Mobile Menu** | Animated slide-down navigation overlay for small screens |
| **🚫 Custom 404** | A not-found page that stays true to the brutalist language |

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [**React 19**](https://react.dev/) | UI library |
| [**Vite 8**](https://vite.dev/) | Build tool & dev server (HMR) |
| [**Tailwind CSS 3**](https://tailwindcss.com/) | Utility-first CSS framework |
| [**Framer Motion 12**](https://www.framer.com/motion/) | Declarative animations & page transitions |
| [**React Router 7**](https://reactrouter.com/) | Client-side routing (HashRouter for GitHub Pages) |
| [**PostCSS**](https://postcss.org/) + **Autoprefixer** | CSS processing pipeline |
| [**ESLint 10**](https://eslint.org/) | Code linting (flat config) |
| [**gh-pages**](https://github.com/tschaub/gh-pages) | GitHub Pages deployment |

### 🎨 Design System

A **neo-brutalist** aesthetic runs throughout:

- **Typography** — Display headings in **TAN Buster** (chunky serif `@font-face`), body copy in **Futura**
- **Thick black borders** (`border-[3px]`) on cards, buttons, sections, and media
- **Hard offset shadows** — `shadow-brutalist` (4px) and `shadow-brutalist-lg` (8px) for a stamped, physical feel
- **Rotated badges** (`rotate-[-2deg]`) adding deliberate imperfection
- **Noise texture** — SVG `feTurbulence` filter layered as `bg-noise`
- **Polaroid frames** — White-bordered media with drop shadow and rotation
- **Colour palette**:

| Token | Hex |
| --- | --- |
| `moast-off-white` | `#f5f5f5` |
| `moast-magenta` | `#DA86D4` |
| `moast-dark-magenta` | `#985A7C` |
| `moast-pink` | `#FFBFD5` |
| `moast-light-pink` | `#FEBFD4` |
| `moast-dark-pink` | `#ff2a6d` |
| `moast-teal` | `#70ECDF` |
| `moast-purple` | `#7c3aed` |
| `moast-black` | `#111111` |

All tokens, fonts, shadows, and the noise pattern are configured in `tailwind.config.js` under `theme.extend`.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18 (LTS recommended)
- **npm** >= 9 (or your preferred package manager)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/moast-dance-school.git
cd moast-dance-school

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the app hot-reloads on source changes.

### Production Build

```bash
npm run build      # outputs to ./dist
npm run preview    # serve the production build locally
```

### Linting

```bash
npm run lint       # ESLint across all JS/JSX files
```

---

## 📁 Project Structure

```bash
moast-dance-school/
├── index.html                     # Vite entry point (lang="pt")
├── vite.config.js                 # Vite config (base: /moast-dance-school)
├── tailwind.config.js             # Theme: colours, fonts, shadows, noise
├── postcss.config.js              # PostCSS + Autoprefixer
├── eslint.config.js               # ESLint flat config
├── public/                        # Static assets (favicon, icons)
└── src/
    ├── main.jsx                   # React root
    ├── App.jsx                    # HashRouter + animated routes
    ├── index.css                  # Tailwind layers & global styles
    ├── assets/
    │   ├── fonts/                 # TAN-BUSTER-Regular.ttf
    │   ├── images/                # Logos, cutouts, graffiti overlay
    │   ├── videos/                # Hero & promo videos
    │   ├── classes/               # Per-class demo videos (20)
    │   ├── merch/                 # Product photos & trailer
    │   └── pdfs/                  # Season calendar & rules
    ├── components/
    │   ├── pages/                 # Route-level page components
    │   │   ├── LandingPage.jsx    # /
    │   │   ├── MoastPage.jsx      # /moast
    │   │   ├── Classes.jsx        # /aulas
    │   │   ├── Teachers.jsx       # /professores
    │   │   ├── SchedulePage.jsx   # /horarios
    │   │   ├── PricingPage.jsx    # /precario
    │   │   ├── RegistrationPage.jsx # /inscricoes
    │   │   ├── ContactPage.jsx    # /contactos
    │   │   └── NotFoundPage.jsx   # 404
    │   └── ui/                    # Shared UI primitives
    │       ├── Navbar.jsx         # Sticky nav + mobile overlay
    │       ├── Footer.jsx         # Footer with PDF links
    │       ├── Hero.jsx           # Landing hero section
    │       ├── PageHero.jsx       # Reusable page header
    │       ├── ClassesToday.jsx   # Today's classes
    │       ├── AboutMoast.jsx     # "MOAST?" landing section
    │       ├── BrutalistButton.jsx # Reusable button/link
    │       └── Icons.jsx          # Inline SVG icons
    ├── constants/
    │   ├── navigation.js          # Nav links & season labels
    │   └── dates.js               # PT date formatting utilities
    └── data/
        ├── classes.js             # 32+ weekly class entries
        ├── teachers.js            # 13 teacher profiles
        └── merch.js               # 9 merch items
```

---

## 🗺️ Routes

| Path | Page | Description |
| --- | --- | --- |
| `/` | LandingPage | Hero, Today's Classes, About |
| `/moast` | MoastPage | School philosophy & method |
| `/aulas` | Classes | Full class catalogue |
| `/professores` | Teachers | Teacher profiles |
| `/horarios` | SchedulePage | Weekly schedule by studio |
| `/precario` | PricingPage | Merch gallery & pricing |
| `/contactos` | ContactPage | Contact info & maps |
| `/inscricoes` | RegistrationPage | Registration CTAs |
| `*` | NotFoundPage | 404 fallback |

Page transitions use `AnimatePresence` with `LazyMotion` (Framer Motion) for smooth enter/exit animations.

---

## 🌐 Localisation

The **user-facing interface** is entirely in **European Portuguese** (`lang="pt"`). All visible text — headings, labels, descriptions, links, and alt tags — is in Portuguese. The **internal codebase** (component names, variables, filenames, props, data fields) follows **English** conventions for maximum developer accessibility.

---

## 📝 Academic Context

This project was developed as part of an academic assignment for a **Web Development / Design** course.

- **Student:** Bruna Rossa
- **Course:** Degree in Informatics Engineering
- **Institution:** Polytechnic Institute of Setúbal
- **Year:** 2025/2026

---

## 📄 License

All rights reserved. This project is the property of MOAST Dance School. Redistribution or commercial use without permission is not permitted.
