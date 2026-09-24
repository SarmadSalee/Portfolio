# Sarmad Saleem — Portfolio

A modern, single-page portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. It showcases software engineering work across SaaS products, enterprise systems, and AI automation — with animated case studies, an interactive AI Lab section, and a fully responsive layout.

## ✨ Features

- **Hero** — personal intro with live availability badge, tech badges, and key stats
- **About** — bio and background
- **Skills** — categorized skill matrix (Frontend, Backend, AI, Cloud, Tools)
- **Case Studies** — clickable project cards with modals showing overview, problem, solution, architecture, tech stack, and results. Cards support custom logos and background screenshots
- **AI Lab** — showcase of AI/ML capabilities (RAG, agents, embeddings, LLM apps)
- **Services** — B2B SaaS, Flutter, REST APIs, real-time systems, cloud, WordPress
- **Experience** — detailed work history with achievements and technologies
- **Testimonials** — client and peer feedback
- **Currently Building** — live/in-progress/planned project tracker
- **Contact** — get in touch section
- **Dark/light theme**, smooth scrolling (Lenis), and Framer Motion animations throughout

## 🧱 Tech Stack

| Layer       | Technologies                                                        |
| ----------- | ------------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19, TypeScript                       |
| Styling     | Tailwind CSS 4, tailwind-merge, clsx                                |
| Animation   | Framer Motion, GSAP, Lenis                                          |
| 3D          | Three.js, @react-three/fiber, @react-three/drei                     |
| Icons       | react-icons, lucide-react                                           |
| Misc        | MongoDB (lead storage), Nodemailer (optional email), ESLint        |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (Next.js 16 requirement)
- npm

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd portfolio

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Contact form configuration

Copy `.env.example` to `.env.local` and set `MONGODB_URI` to the supplied MongoDB connection string. Leads are stored in the `portfolio.leads` collection by default; set `MONGODB_DB` to use another database name. SMTP variables are optional: when configured, the owner notification and visitor confirmation emails are also sent after the lead is stored.

## 📜 Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `npm run dev`    | Start the development server                 |
| `npm run build`  | Create an optimized production build         |
| `npm run start`  | Serve the production build locally           |
| `npm run lint`   | Run ESLint                                   |

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind theme
│   ├── layout.tsx           # Root layout, fonts, metadata/SEO
│   └── page.tsx             # Home page (assembles all sections)
├── components/
│   ├── layout/              # Navbar, Footer, SmoothScroll
│   ├── providers/           # ThemeProvider
│   └── sections/            # Hero, About, Skills, Projects, AILab,
│                            # Services, Experience, Testimonials,
│                            # GitHubSection, CurrentlyBuilding, Contact
├── data/
│   └── portfolio.ts         # All content (projects, skills, experience, etc.)
├── lib/
│   └── utils.ts             # Shared helpers (cn, etc.)
└── types/
    └── index.ts             # TypeScript interfaces
```

## ✏️ Customizing Content

Most content lives in a single data file: **`src/data/portfolio.ts`**.

- **Projects / Case Studies** — edit the `projects` array. Each entry supports optional `logo` and `image` fields (paths under `/public`) that override the default gradient mockup:
  ```ts
  {
    id: "maxerp",
    title: "MAXERP",
    // ...
    logo: "/maxerp-logo.png",                          // card logo
    image: "/Screenshot 2026-08-10 131616.png",        // card background image
    screenshots: ["/Screenshot 2026-08-10 131616.png"],
  }
  ```
- **Skills, Experience, Services, Testimonials, Stats** — edit the corresponding exported arrays.
- **Navigation links** — edit `navLinks`.
- **Profile image** — replace `public/profile.png`.

## 🚢 Deployment

The project is fully static-exportable via Next.js and works with any hosting provider that supports Node.js (Vercel, Netlify, AWS Amplify, etc.).

**Vercel (recommended):**

```bash
npm i -g vercel
vercel
```

Or connect the repository directly in the Vercel dashboard — no extra configuration needed.

## 📄 License

Private project. All content © Sarmad Saleem.
