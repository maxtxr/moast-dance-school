# MOAST Dance School

[**English**](README.md) | [**Português**](README.pt.md)

> **Motion of Art, Style & Taste**

A neo-brutalist website for **MOAST Dance School** — built with React 19, Vite, Tailwind CSS, and Framer Motion. The UI is rendered in **European Portuguese** for its users, while the codebase follows clean **English** naming conventions.

---

## About

MOAST is a dance school based in Portugal, offering classes from Hip-Hop and Breaking to Contemporary, Kizomba, and specialised training programmes. This website serves as the school's digital home, providing:

- A full **class catalogue** with looping video previews and category filters.
- An interactive **weekly schedule** filterable by studio (Estúdio 1, Estúdio 2, Grémio).
- A **merch showcase** combining a horizontal polaroid gallery with an integrated video trailer and a pricing table.
- A **registration hub** linking to external Google Forms for trial classes and enrolment.
- A **school manifesto** page detailing the MOAST philosophy (Motion, Art, Style, Taste).
- A **contact page** with Google Maps embeds for both locations and social media links.
- A **"Today's Classes"** section on the landing page that dynamically shows the current day's schedule.

The design leans fully into the **neo-brutalist** aesthetic: bold TAN Buster typography, thick black borders, hard offset shadows, noise textures, and a vibrant palette of magenta, teal, and pink.

---

## Features

- **Responsive Class Schedule** — Full-week grid layout on desktop, grouped by day on mobile. Switch between studios (Estúdio 1, Estúdio 2, Grémio) with animated tab transitions.
- **Class Catalogue** — All classes displayed with category colour codes, level badges, teacher info, days of the week, and looping background videos with hover effects.
- **Today's Classes** — A dynamic homepage section that filters the current weekday's classes, with paginated navigation.
- **Teachers Section** — Individual teacher profiles with cutout images, nickname badges, colour-coded class tags, and biographical text.
- **Merch & Pricing** — Horizontal-scroll polaroid photo gallery (with an embedded auto-play video trailer), followed by a two-column pricing table with brutalist lift animations.
- **Registration Hub** — Three action cards linking to Google Forms for trial classes and enrolments at both locations.
- **Moast Page** — A full-screen school philosophy page featuring a manifesto, four pillar cards (Motion, Art, Style, Taste), a numbered method section ("O Nosso Método"), and a large polaroid-style video showcase with hover rotation.
- **Contact Page** — Phone, email, social links (Instagram & Facebook with inline SVGs), and two locations displayed with address info boxes and embedded Google Maps (grayscale, brutalist-bordered).
- **Animated Page Transitions** — Route-level enter/exit animations via Framer Motion and `AnimatePresence`.
- **404 Page** — A custom not-found page that stays true to the brutalist language.
- **Mobile Menu** — Animated slide-down navigation overlay for small screens.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vite.dev/) | Build tool and dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Declarative animations |
| [React Router 7](https://reactrouter.com/) | Client-side routing |

---

## UI & Design System

### Neo-Brutalist Approach

Every visual decision reinforces the brutalist ethos:

- **Typography** — Display headings use **TAN Buster** (loaded via `@font-face`), a chunky serif typeface. Body copy uses **Futura**, applied through the Tailwind font-family configuration.
- **Thick black borders** (`border-[3px]`) on cards, buttons, sections, and media containers.
- **Hard offset shadows** — `shadow-[4px_4px_0_0_#000]` and `shadow-[8px_8px_0_0_#000]` create a "stamped" physical feel. Defined as `shadow-brutalist` and `shadow-brutalist-lg` in the Tailwind config.
- **Rotated badges** (`rotate-[-2deg]`) that introduce deliberate imperfection.
- **Noise texture overlays** — Applied via an SVG `feTurbulence` filter as a `background-image`, layered throughout the UI on hero sections, cards, and page headers.
- **Uppercase, bold typography** across almost all visible text.
- **Polaroid-style media** — Class video thumbnails and merch gallery items are rendered as polaroid cards with white borders, drop shadows, and occasional rotation offsets.

### Colour Palette

| Token | Hex |
| --- | --- |
| `moast-off-white` | `#f5f5f5` |
| `moast-magenta` | `#DA86D4` |
| `moast-dark-magenta` | `#985A7C` |
| `moast-pink` | `#FFBFD5` |
| `moast-light-pink` | `#FEBFD4` |
| `moast-dark-pink` | `#ff2a6d` |
| `moast-teal` | `#70ECDF` |
| `moast-black` | `#111111` |

Colours, shadows, fonts, and the noise pattern are all defined in `tailwind.config.js` under `theme.extend`, making them available as utility classes throughout the project.

---

## Getting Started

### Prerequisites

- **Node.js** >= 18 (tested on current LTS)
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

Open [http://localhost:5173](http://localhost:5173) in your browser. The app will reload automatically when you make changes to source files.

### Production Build

```bash
npm run build     # outputs to ./dist
npm run preview   # serve the production build locally
```

### Linting

```bash
npm run lint
```

Runs ESLint across all JavaScript and JSX files.

---

## Project Structure

```bash
moast-dance-school/
├── index.html                    # Vite entry point (lang="pt")
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Theme: colours, fonts, shadows, noise
├── postcss.config.js             # PostCSS with Autoprefixer
├── eslint.config.js              # ESLint flat config
├── public/                       # Static assets (served as-is)
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Router + animated routes
    ├── index.css                 # Global styles & Tailwind layers
    ├── assets/
    │   ├── fonts/                # TAN-BUSTER-Regular.ttf
    │   ├── images/               # Logos, cutouts, graffiti overlay
    │   ├── videos/               # Hero, moast page & class videos
    │   ├── classes/              # Per-class demonstration videos
    │   ├── merch/                # Product photos & merch trailer
    │   └── pdfs/                 # Season rules & calendar PDFs
    ├── components/
    │   ├── LandingPage.jsx       # Home — Hero + ClassesToday + About
    │   ├── MoastPage.jsx         # /moast — manifesto, pillars, video
    │   ├── Classes.jsx           # /aulas — full class catalogue
    │   ├── Teachers.jsx          # /professores — teacher profiles
    │   ├── SchedulePage.jsx      # /horarios — weekly schedule grid
    │   ├── PricingPage.jsx       # /precario — merch gallery + table
    │   ├── ContactPage.jsx       # /contactos — info, maps, social
    │   ├── RegistrationPage.jsx  # /inscricoes — Google Form cards
    │   ├── NotFoundPage.jsx      # 404 page
    │   ├── Navbar.jsx            # Sticky nav with mobile overlay
    │   ├── Footer.jsx            # Site footer with PDF links
    │   ├── PageHero.jsx          # Reusable page header
    │   ├── Hero.jsx              # Landing hero (video bg)
    │   ├── ClassesToday.jsx      # Today's classes section
    │   ├── AboutMoast.jsx        # "MOAST?" landing section
    │   ├── BrutalistCard.jsx     # Card, badge & button primitives
    │   └── Icons.jsx             # Inline SVG icons
    ├── constants/
    │   ├── navigation.js         # Nav links & season labels
    │   └── dates.js              # Date formatting helpers (PT)
    └── data/
        ├── classes.js            # Full class schedule dataset
        ├── teachers.js           # Teacher profiles dataset
        └── merch.js              # Merch items dataset
```

---

## Routes

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

---

## Localisation

The **user-facing interface** is entirely in **European Portuguese** (`lang="pt"`). All visible text — headings, button labels, form links, descriptions, and alt tags — remains in Portuguese. The **internal code** (component names, variable names, file names, prop keys, data field names) follows **English** conventions for maximum accessibility to international developers.

---

## License

All rights reserved. This project is the property of MOAST Dance School. Redistribution or commercial use without permission is not permitted.
