# MOAST Dance School 💜🩷🩵

> **Motion of Art, Style & Taste**

[**English**](README.md) | [**Português**](README.pt.md)

Official web platform repository for **MOAST Dance School** — a premier dance academy in Portugal specializing in Hip-Hop, Breaking, Contemporary, Kizomba, and advanced artistic training programs.

The application adopts a **neo-brutalist** visual identity, pairing modern aesthetics with high technical performance powered by **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**. The user interface is natively developed in **European Portuguese** (`pt-PT`), while maintaining code architecture in **English** to comply with international software engineering standards.

---

## Platform Features

| Feature | Description |
| --- | --- |
| **Class Catalog** | Dynamic directory with continuous video previews, color-coded segmentation, and skill level badges |
| **Interactive Schedule Grid** | Real-time filtering system by studio (Studio 1, Studio 2, Grémio) with smooth transitions |
| **Classes of the Day Hub** | Homepage module featuring time synchronization and automated daily pagination |
| **Faculty Directory** | Instructor profiles with cut-out graphic styling, identity badges, style tags, and biographies |
| **Merchandising Showcase & Pricing** | Horizontal-scrolling polaroid gallery, promotional trailer integration, and tuition/pricing tables |
| **Registration Center** | Integrated conversion flows for trial classes and new student enrollments by location |
| **Institutional Manifesto** | Dedicated space detailing the school's methodology, core values, and history |
| **Contacts & Geolocation** | Operational details, direct communication channels (Phone, Email, Social Media), and interactive maps |
| **Fluid Navigation** | Seamless page transitions powered by Framer Motion's `AnimatePresence` |
| **Fully Responsive Design** | Cross-device optimization featuring a dedicated mobile navigation drawer |
| **Error Handling (404)** | Custom 404 page styled strictly within brand guidelines |

---

## Tech Stack

| Component | Technology | Purpose |
| --- | --- | --- |
| **Core UI** | [React 19](https://react.dev/) | Primary component-based UI library |
| **Build & Tooling** | [Vite 8](https://vite.dev/) | High-performance build tool and local HMR dev server |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS framework |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Declarative transitions and state animations |
| **Routing** | [React Router 7](https://reactrouter.com/) | Client-side routing management (`HashRouter`) |
| **CSS Processing** | [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) | Cross-browser compatibility |
| **Code Quality** | [ESLint 10](https://eslint.org/) | Static code analysis and standard enforcement (Flat Config) |
| **Deployment** | [gh-pages](https://github.com/tschaub/gh-pages) | Continuous deployment pipeline |

---

## Design System (Neo-Brutalism)

The MOAST visual identity is grounded in bold, high-contrast design principles:

* **Typography:** Brand display headings set in **TAN Buster** (`@font-face` display serif); body copy in **Futura** for optimal readability.
* **Structured Borders:** Consistent visual contrast using `border-[3px] border-moast-black`.
* **Hard Offset Shadows:** Layered depth with `shadow-brutalist` (4px) and `shadow-brutalist-lg` (8px).
* **Dynamic Textures:** Visual noise overlay applied via SVG `feTurbulence` filter (`bg-noise`).
* **Accent Elements:** Badges and polaroid frames featuring deliberate rotations (`rotate-[-2deg]`).

**Institutional Color Palette:**

| Token | Hex Value | Primary Usage |
| --- | --- | --- |
| `moast-off-white` | `#f5f5f5` | Page backgrounds and neutral contrast areas |
| `moast-magenta` | `#DA86D4` | Primary brand accent / Highlights |
| `moast-dark-magenta` | `#985A7C` | Depth elements and dark contrast |
| `moast-pink` | `#FFBFD5` | Secondary backgrounds and tags |
| `moast-dark-pink` | `#ff2a6d` | CTAs, urgency alerts, and key badges |
| `moast-teal` | `#70ECDF` | Secondary accent / Technical level tags |
| `moast-black` | `#111111` | Primary typography, structural borders, and offset shadows |

---

## Development & Setup

### Prerequisites

* **Node.js** >= 18 (LTS version recommended)
* **npm** >= 9 (or equivalent package manager)

### Installation

```bash
# 1. Clone the repository
git clone [https://github.com/moast-dance-school/moast-dance-school.git](https://github.com/moast-dance-school/moast-dance-school.git)
cd moast-dance-school

# 2. Install production and development dependencies
npm install

# 3. Start the local development server
npm run dev
```

Visit [http://localhost:5173] to view the application locally.

## Available Scripts

* `npm run dev` — Starts the local dev server with Hot Module Replacement (HMR).
* `npm run build` — Compiles production-ready assets into the ./dist directory.
* `npm run preview` — Locally previews the compiled production build.
* `npm run lint` — Runs static analysis with ESLint across all .js and .jsx files.
* `npm run deploy` — Builds and publishes the latest version to GitHub Pages.

---

## Project Structure

```bash
moast-dance-school/
├── index.html                     # Application entry point (lang="pt")
├── vite.config.js                 # Vite tooling configuration
├── tailwind.config.js             # Design tokens: colors, typography, shadows, noise
├── postcss.config.js              # CSS pipeline configuration
├── eslint.config.js               # Code standards and linting rules (Flat Config)
├── public/                        # Static assets (favicons, manifest)
└── src/
    ├── main.jsx                   # React application mount point
    ├── App.jsx                    # Root routing and global providers
    ├── index.css                  # Global styles and Tailwind layers
    ├── assets/
    │   ├── fonts/                 # Custom web fonts
    │   ├── images/                # Brand identity, cutouts, and graphic assets
    │   ├── videos/                # Promotional media and hero background videos
    │   ├── classes/               # Class preview video assets
    │   ├── merch/                 # Product and merchandising photography
    │   └── pdfs/                  # Institutional PDFs, calendar, and regulations
    ├── components/
    │   ├── pages/                 # View-level page components
    │   │   ├── LandingPage.jsx    # Home page
    │   │   ├── MoastPage.jsx      # Institutional manifesto and methodology
    │   │   ├── Classes.jsx        # Class directory
    │   │   ├── Teachers.jsx       # Faculty directory
    │   │   ├── SchedulePage.jsx   # Interactive studio schedule
    │   │   ├── PricingPage.jsx    # Merch showcase and tuition pricing
    │   │   ├── RegistrationPage.jsx # Admissions and enrollment portal
    │   │   ├── ContactPage.jsx    # Contact details and map integration
    │   │   └── NotFoundPage.jsx   # 404 error page
    │   └── ui/                    # Reusable interface primitives
    │       ├── Navbar.jsx         # Persistent top navigation and mobile drawer
    │       ├── Footer.jsx         # Site footer and legal documentation links
    │       ├── Hero.jsx           # Main impact hero component
    │       ├── PageHero.jsx       # Standardized page header component
    │       ├── ClassesToday.jsx   # Daily schedule module
    │       ├── AboutMoast.jsx     # Institutional introduction block
    │       ├── BrutalistButton.jsx # Modular themed button primitive
    │       └── Icons.jsx          # Inline SVG icon library
    ├── constants/
    │   ├── navigation.js          # Navigation link tree and global constants
    │   └── dates.js               # Date formatting and localized helper functions
    └── data/
        ├── classes.js             # Classes and schedule data source
        ├── teachers.js            # Faculty information database
        └── merch.js               # Official merchandise product catalog
```

## Route Mapping

| Route | Component | Purpose |
| --- | --- | --- |
| `/` | `LandingPage` | Institutional overview, today's schedule, and school summary |
| `/moast` | `MoastPage` | Brand philosophy, core pillars, and teaching methodology |
| `/aulas` | `Classes` | Complete directory of classes, skill levels, and age groups |
| `/professores` | `Teachers` | Instructor biographies and credentials |
| `/horarios` | `SchedulePage` | Weekly schedule filterable by studio |
| `/precario` | `PricingPage` | Current fee schedule and official apparel merchandise |
| `/contactos` | `ContactPage` | Support channels, inquiry form, and geographic coordinates |
| `/inscricoes` | `RegistrationPage` | Official registration forms and trial class bookings |
| `*` | `NotFoundPage` | Fallback page for undefined routes |

---

## Content Maintenance & Updates

To update the school's operational data without altering UI components, directly edit the files located in `src/data/`:

* **Add/Edit Dance Styles & Classes:** Update the array of objects in `src/data/classes.js`.
* **Update Instructors:** Modify the entries in `src/data/teachers.js`.
* **Manage Product Catalog:** Add merchandise items and prices in `src/data/merch.js`.
* **Official Documents:** Replace files in `src/assets/pdfs/` while preserving the file name references in `src/components/ui/Footer.jsx`.

---

## Support & Contacts

For technical inquiries regarding the digital infrastructure or general institutional questions:

* Email: <geral@moastdanceschool.pt>
* Website: TBA
* Instagram: [@_moastdanceschool](https://www.instagram.com/_moastdanceschool/)

---

## Intellectual Property & Terms

© MOAST Dance School. All rights reserved.

The source code, design elements, registered trademarks, multimedia assets, and associated materials in this repository are the exclusive property of **MOAST Dance School**. Any copying, reproduction, redistribution, or commercial exploitation of this project without prior written permission from the copyright owner is strictly prohibited.

---
