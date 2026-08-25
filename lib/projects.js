export const projects = [
  {
    id: "petheaven",
    title: "PetHeaven",
    description:
      "A full-stack pet adoption platform where users can browse, list, and adopt pets. My first full-stack project.",
    fullDescription:
      "PetHeaven is a full-stack pet adoption platform that connects pet lovers with animals in need of a home. Users can browse available pets by category, list their own pets for adoption, and complete the adoption process end-to-end. Built as my first full-stack project, it taught me the fundamentals of building a complete MERN application — from designing MongoDB schemas and building RESTful Express APIs to crafting a responsive React frontend with Tailwind CSS. Key features include user authentication, pet CRUD operations, image uploads, and a clean, accessible UI.",
    image: "/projects/paw-heaven (1).png",
    gallery: ["/projects/paw-heaven (2).png", "/projects/paw-heaven (3).png"],
    techStack: ["Next.js", "MongoDB", "Better Auth", "Google OAuth"],
    category: ["fullstack"],
    frameworks: ["Next.js"],
    githubUrl: "https://github.com/rahinhaque/Petheaven-frontend",
    liveUrl: "https://paw-heaven-beige.vercel.app/",
    featured: false,
  },
  {
    id: "qurbanihat",
    title: "QurbaniHat — Livestock Booking Platform",
    description:
      "A livestock selling and booking platform for Qurbani animals.",
    fullDescription:
      "QurbaniHat is a specialized marketplace for buying and booking livestock animals for Qurbani. The platform allows sellers to list their animals with details and pricing, while buyers can browse, filter, and book animals in advance. Built to solve a real-world seasonal need, it features a responsive product catalog, user registration and login, booking management, and an admin dashboard for overseeing listings. This project deepened my understanding of full-stack development with the MERN stack and taught me how to design domain-specific features for a niche audience.",
    image: "/projects/qurbanirhat (1).png",
    gallery: [
      "/projects/qurbanirhat (2).png",
      "/projects/qurbanirhat (3).png",
      "/projects/qurbanirhat (4).png",
    ],
    techStack: ["Next.js", "Better Auth", "MongoDB", "Google OAuth"],
    category: ["fullstack"],
    frameworks: ["Next.js"],
    githubUrl:
      "https://github.com/rahinhaque/QurbaniHat-Livestock-Booking-Platform",
    liveUrl:
      "https://qurbani-hat-livestock-booking-platf-ten.vercel.app/",
    featured: false,
  },
  {
    id: "resellhub",
    title: "ReSellHub",
    description:
      "A full-stack marketplace with role-based authentication, Stripe payments, JWT security, and Google login.",
    fullDescription:
      "ReSellHub is a full-featured second-hand marketplace that supports three user roles — buyer, seller, and admin — each with distinct capabilities. Buyers can browse and purchase items, sellers can list and manage their products, and admins have oversight of the entire platform. The project implements secure JWT-based authentication alongside Google OAuth login, Stripe integration for payment processing, and role-based route protection on both the client and server. Building ReSellHub was a pivotal project that pushed me to understand authentication flows, payment integrations, and the architectural decisions required for multi-role applications.",
    image: "/projects/resell-Hub (1).png",
    gallery: ["/projects/resell-Hub (2).png", "/projects/resell-Hub (3).png"],
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Better Auth",
      "Google OAuth",
    ],
    category: ["fullstack"],
    frameworks: ["Next.js"],
    githubUrl: "https://github.com/rahinhaque/ReSellHub-Client",
    liveUrl: "https://re-sell-hub-client-omega.vercel.app/",
    featured: true,
  },
  {
    id: "job-application-tracker",
    title: "Job Application Tracker",
    description:
      "A Kanban-style job application tracker with drag-and-drop, built while learning TypeScript and Next.js API routes.",
    fullDescription:
      "The Job Application Tracker is a Kanban-style board application that helps job seekers organize and track their applications through different stages — from initial application to interview to offer. Featuring drag-and-drop functionality for moving cards between columns, it provides a visual overview of where each application stands. This was my first project using TypeScript and Next.js API routes, making it an important milestone in my learning journey. The project taught me static typing, server-side API design, and how to build interactive UIs with drag-and-drop libraries.",
    image: null, // TODO: add screenshot
    gallery: [],
    techStack: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "TypeScript",
      "shadcn/ui",
      "Better Auth",
    ],
    category: ["fullstack"],
    frameworks: ["Next.js"],
    githubUrl: "https://github.com/rahinhaque/job-application-tracker-",
    liveUrl: "https://job-application-tracker-qc3e.vercel.app/",
    featured: false,
  },
  {
    id: "ai-applications-langchain",
    title: "AI Applications with LangChain",
    description:
      "A personal assistant chatbot powered by Gemini API — my first project integrating AI into an application.",
    fullDescription:
      "AI Applications with LangChain is a personal assistant chatbot that leverages the Gemini API through LangChain to provide intelligent, context-aware responses. This project marks my first exploration into the world of AI-integrated applications. It features a clean chat interface, conversation history management, and the ability to handle various prompts and tasks. Building this project introduced me to prompt engineering, LLM integration patterns, and how to seamlessly weave AI capabilities into a traditional web application stack.",
    image: "/projects/ai-application-langchain.png",
    gallery: [],
    techStack: ["React", "Vite", "LangChain", "Gemini"],
    category: ["backend"],
    frameworks: ["React"],
    githubUrl:
      "https://github.com/rahinhaque/AI-Applications-With-LangChain",
    liveUrl: "https://ai-applications-with-lang-chain.vercel.app/",
    featured: false,
  },
  {
    id: "sellhub",
    title: "SellHub",
    description:
      "A full-stack e-commerce marketplace with AI-powered features, built with Next.js, Express, and a Python/CrewAI microservice.",
    fullDescription:
      "SellHub is a full-stack e-commerce marketplace featuring a Next.js 16 frontend with App Router and Turbopack, a TypeScript Express.js backend connected to MongoDB Atlas, and a separate Python FastAPI microservice using CrewAI multi-agent orchestration powered by Groq's Llama 3.3 70B model for AI-driven features. Authentication is handled via better-auth with MongoDB as the adapter. Product data is sourced from the Platzi Fake Store API, proxied through the Express backend during development.",
    image: "/projects/Sellhub (1).png",
    gallery: [
      "/projects/Sellhub (2).png",
      "/projects/Sellhub (3).png",
      "/projects/Sellhub (4).png",
      "/projects/Sellhub (5).png",
      "/projects/Sellhub (6).png",
      "/projects/Sellhub(7).png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "FastAPI",
      "CrewAI",
    ],
    category: ["frontend", "fullstack"],
    frameworks: ["Next.js"],
    githubUrl: "https://github.com/rahinhaque/Sellhub-frontend",
    liveUrl: "https://sellhub-frontend.vercel.app",
    featured: true,
  },
  {
    id: "sellhub-backend",
    title: "SellHub — Backend API",
    description:
      "The Express.js + TypeScript REST API powering SellHub, connected to MongoDB Atlas and proxying product data from the Platzi Fake Store API.",
    fullDescription:
      "This is the backend service for SellHub, built with Express.js and TypeScript, connecting to MongoDB Atlas via the native driver. It handles authentication data (via better-auth's MongoDB adapter), core business logic, and proxies product data from the Platzi Fake Store API (api.escuelajs.co) during development. Deployed as a standalone service on Render.",
    image: null,
    gallery: [],
    techStack: ["Express.js", "TypeScript", "MongoDB"],
    category: ["backend"],
    frameworks: [],
    githubUrl: "https://github.com/rahinhaque/ai-powered-sellhub-server",
    liveUrl: null,
    featured: false,
  },
  {
    id: "sellhub-ai-features",
    title: "SellHub — AI Features",
    description:
      "A Python FastAPI microservice using CrewAI multi-agent orchestration and Groq's Llama 3.3 70B model to power AI-driven features in SellHub.",
    fullDescription:
      "This is a standalone AI microservice for SellHub, built with Python and FastAPI. It uses CrewAI for multi-agent orchestration and Groq's API (running Llama 3.3 70B) as the underlying LLM to power intelligent, AI-driven features within the marketplace. Deployed as a separate service on Render, independent from the main backend API.",
    image: null,
    gallery: [],
    techStack: ["Python", "FastAPI", "CrewAI", "Groq API"],
    category: ["backend"],
    frameworks: [],
    githubUrl: "https://github.com/rahinhaque/Sellhub-Ai-features",
    liveUrl: null,
    featured: false,
  },
  {
    id: "dragon-news",
    title: "Dragon News",
    description:
      "A modern, responsive news portal built with Next.js delivering breaking news, category browsing, and secure authentication.",
    fullDescription:
      "Dragon News is a modern, responsive news portal that aggregates and displays news articles across multiple categories. Built with Next.js, it offers server-side rendering for fast page loads, category-based browsing for easy content discovery, and secure authentication supporting both email/password and social login methods. The project provided hands-on experience with Next.js App Router, server-side data fetching, authentication flows, and building a performant, SEO-friendly content platform. The responsive design ensures a seamless reading experience across all devices.",
    image: "/projects/dragon-news (1).png",
    gallery: ["/projects/dragon-news (2).png", "/projects/dragon-news (3).png"],
    techStack: ["Next.js"],
    category: ["frontend"],
    frameworks: ["Next.js"],
    githubUrl: "https://github.com/rahinhaque/dragon-news-next-project",
    liveUrl: "https://dragon-news-next-project-lime.vercel.app/",
    featured: false,
  },
  {
    id: "basic-portfolio-prisma-postgresql",
    title: "Basic Portfolio with Prisma & PostgreSQL",
    description:
      "A full-stack portfolio project built with Next.js, TypeScript, Prisma, and PostgreSQL, featuring better-auth authentication.",
    fullDescription:
      "This project explores a different backend stack than my usual MongoDB setup — using Prisma ORM with a PostgreSQL database instead. Built with Next.js and TypeScript, it uses better-auth for authentication, backed by PostgreSQL as the data layer via Prisma's type-safe query client.",
    image: "/projects/postgresql.png",
    gallery: ["/projects/postgresql.png(2).png", "/projects/postgresql.png(3).png"],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better Auth"],
    category: ["frontend", "fullstack", "backend"],
    frameworks: ["Next.js"],
    githubUrl:
      "https://github.com/rahinhaque/Basic-portfolio-with-prisma-and-postgresql",
    liveUrl:
      "https://basic-portfolio-with-prisma-and-pos-opal.vercel.app",
    featured: true,
  },
];
