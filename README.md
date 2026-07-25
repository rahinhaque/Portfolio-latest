# Rahin Haque — Portfolio

My personal portfolio website built with Next.js, featuring an interactive 3D particle background, multi-theme system, smooth animations, and a contact form with email delivery.

**Live:** [rahinhaque.dev](https://portfolio-seven-weld-psi.vercel.app/)

## Tech Stack

### Core

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework — App Router, SSR, API routes |
| **React 19** | UI library |
| **TypeScript** | Type safety |

### Styling

| Technology | Purpose |
|------------|---------|
| **Tailwind CSS v4** | Utility-first CSS with custom theme variables |
| **Framer Motion** | Scroll-triggered animations, page transitions, micro-interactions |

### 3D & Visual

| Technology | Purpose |
|------------|---------|
| **Three.js** | 3D rendering engine |
| **React Three Fiber** | React renderer for Three.js |
| **React Three Drei** | Helper components for R3F |

### Icons

| Technology | Purpose |
|------------|---------|
| **React Icons** | Brand icons (SiGitHub, FaLinkedin, etc.) |
| **Lucide React** | UI icons (ArrowRight, Mail, Send, etc.) |

### Backend & Services

| Technology | Purpose |
|------------|---------|
| **Next.js API Routes** | Server-side contact form handler |
| **Nodemailer** | Gmail SMTP email delivery |

### Dev Tools

| Technology | Purpose |
|------------|---------|
| **ESLint** | Code linting |
| **PostCSS** | CSS processing for Tailwind |
| **Geist Font** | Optimized typography (sans + mono) |
| **NextJS Toploader** | Page transition progress bar |

## Features

- **3D Particle Background** — Floating particle field powered by Three.js with mouse parallax, demand-mode rendering, and automatic CSS fallback for mobile
- **3 Themes × Dark/Light** — Modern (Indigo), Dev Dark (Emerald), Warm (Amber) with persistent preferences via localStorage and OS dark mode detection
- **Custom Cursor** — Dual-element cursor (dot + spring-eased ring) with hover detection, disabled on touch devices
- **Animated Loading Screen** — Count-up intro overlay with gradient progress bar, session-gated to play once per visit
- **Scroll Animations** — Every section animates into view using Framer Motion's `whileInView`
- **Responsive Design** — Mobile-first layouts with hamburger nav and touch-friendly interactions
- **Contact Form** — Server-validated form with honeypot spam protection, email delivery via Gmail SMTP
- **Marquee Skill Badges** — Auto-scrolling tech stack display with brand-colored badges and pause-on-hover
- **Blog & Projects Pages** — Dedicated routes with dynamic project detail pages

## Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.js    # Contact form API (Nodemailer)
│   ├── blog/                   # Blog listing page
│   ├── project/                # Projects listing + [id] detail pages
│   ├── layout.tsx              # Root layout (navbar, theme, 3D bg, cursor)
│   ├── page.tsx                # Home page (Hero → About → Skills → Projects → Contact)
│   └── globals.css             # Theme system, animations, Tailwind config
├── components/
│   ├── Hero.jsx                # Landing section with photo + stats
│   ├── About.jsx               # Story, tools, progress bars, glance cards
│   ├── Education.jsx           # Academic background + aspirations
│   ├── Skills.jsx              # Categorized skill badges with marquee
│   ├── FeaturedProjects.jsx    # Homepage project grid
│   ├── FeaturedBlog.jsx        # Homepage blog preview
│   ├── Contact.jsx             # Contact form + details
│   ├── Navbar.jsx              # Sticky nav with route active state
│   ├── Footer.jsx              # CTA banner + 4-column footer
│   ├── ThreeBackground.jsx     # Canvas-based 3D particle field
│   ├── CustomCursor.jsx        # Dot + ring cursor
│   ├── LoadingScreen.jsx       # Count-up intro overlay
│   ├── ThemeProvider.jsx       # Theme context + localStorage sync
│   ├── ThemeSwitcher.jsx       # Color swatches + dark mode toggle
│   └── ui/marquee.jsx          # Auto-scrolling marquee component
├── lib/
│   ├── projects.js             # Project data + descriptions
│   ├── skills.js               # Skill categories + metadata
│   └── blogs.js                # Blog post entries
└── public/                     # Static assets (images, favicon)
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords)

### Installation

```bash
git clone https://github.com/rahinhaque/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Copy the example and fill in your credentials:

```bash
cp .env.example .env.local
```

```env
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

## Deployment

This project is deployed on **Vercel**. Push to the `main` branch for automatic deployments.

```bash
vercel deploy
```

## License

MIT
