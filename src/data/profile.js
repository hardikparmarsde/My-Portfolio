export const profile = {
  name: 'Hardik Parmar',
  title: 'Frontend Engineer',
  location: 'Gandhinagar, Gujarat',
  email: 'hardikparmar7001@gmail.com',
  phone: '8347937087',
  links: {
    linkedin: 'https://linkedin.com/in/hardik-parmar-9a51b3183',
    github: 'https://github.com/hardikparmarsde',
  },
  summary: [
    'Frontend Engineer with 3+ years of experience delivering enterprise SaaS in React.js and Next.js — dashboards, role-based access control, billing, data-heavy tables, and real-time monitoring UIs.',
    'Comfortable across the stack: Node.js / Express / MongoDB on the backend, Electron for cross-platform desktop, and MQTT / Socket.IO for real-time device control.',
    'Currently exploring AI-first product UI — shipped RepoCrawler, an open-source AI contributor-onboarding tool for GitHub repositories, in production.',
  ],

  about: {
    paragraphs: [
      'Frontend Engineer with 3+ years at Rapidise Inc., owning frontend delivery of 15+ production modules on a globally-deployed enterprise SaaS surveillance platform — dashboards, device configuration, billing, role-based access control, and live video.',
      'My core stack is React.js, Next.js, and TypeScript, with Redux Toolkit, TanStack Query, React Hook Form, Material UI, Tailwind CSS, and React Flow. I translate Figma designs into pixel-perfect production UIs and think carefully about loading, empty, error, and streaming states.',
      'I also contribute backend when the feature needs it — REST endpoints in Node.js / Express, MongoDB query optimization, JWT / RBAC middleware, and Puppeteer-based PDF pipelines. I built and ship a cross-platform Electron desktop app (Windows / macOS / Linux) for wellness-pod audio control.',
      'Outside the day job, I am building RepoCrawler — an open-source AI tool that generates personalised contributor onboarding plans for any GitHub repository. It is where I iterate on AI-UI patterns: streaming responses, cited outputs, confidence states, and cost-controlled LLM pipelines.',
    ],

    focusAreas: [
      {
        title: 'Frontend Engineering at Scale',
        description:
          'Shipping React.js and Next.js applications with reusable component architectures, design-system discipline, and pixel-accurate Figma translation.',
      },
      {
        title: 'AI-First Product UI',
        description:
          'Designing interfaces for AI output — citations, confidence states, "no match" handling, and streaming responses — with provider-agnostic LLM pipelines (Claude / Gemini).',
      },
      {
        title: 'Real-Time & Cross-Platform',
        description:
          'MQTT, Socket.IO, and WebSocket-driven monitoring UIs; Electron desktop apps built for Windows / macOS / Linux with offline support.',
      },
    ],

    stats: [
      { value: '3+', label: 'Years Experience' },
      { value: '15+', label: 'Production Modules' },
      { value: '10+', label: 'Projects Delivered' },
    ],
  },

  skills: [
    {
      category: 'Frontend',
      items: [
        'React.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Material UI',
        'Ant Design',
        'Shadcn UI',
      ],
    },
    {
      category: 'State Management',
      items: ['Redux Toolkit', 'Zustand', 'Context API'],
    },
    {
      category: 'Forms & Validation',
      items: ['React Hook Form', 'Yup', 'Zod'],
    },
    {
      category: 'Data Fetching',
      items: ['TanStack Query', 'Axios', 'React Query'],
    },
    {
      category: 'Backend & Realtime',
      items: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'MQTT',
        'Socket.IO',
        'WebSockets',
        'REST APIs',
      ],
    },
    {
      category: 'AI / LLM',
      items: [
        'Claude API',
        'Gemini API',
        'Prompt Caching',
        'RAG patterns',
        'Model Routing',
        'Drizzle ORM',
        'PostgreSQL (pgvector)',
      ],
    },
    {
      category: 'Desktop & Document',
      items: [
        'Electron.js',
        'electron-vite',
        'electron-builder',
        'Puppeteer',
        'Chrome-headless',
        'SheetJS',
      ],
    },
    {
      category: 'Tools & Workflow',
      items: [
        'Git',
        'GitHub',
        'GitLab',
        'Postman',
        'Figma',
        'Jira',
        'Agile / Scrum',
        'Linux',
        'Vercel',
      ],
    },
  ],
  experience: [
    {
      role: 'Software Development Engineer',
      company: 'Rapidise Inc.',
      period: '08/2023 - Present',
      bullets: [
        'Owned frontend delivery of 15+ production modules on a globally-deployed enterprise SaaS platform — dashboards, sites & users management, billing with plan-based tiers, notifications, role-based access control & multi-tier permission groups, live video viewer, and device configuration — translating Figma designs into pixel-perfect production UIs (React.js, Next.js, Redux Toolkit, Material UI).',
        'Built real-time dashboards with live-updating charts, KPI cards, filterable admin tables, and multi-step flows for customer, site, storage, and billing views.',
        'Built a visual drag-and-drop automation designer for configuring on-device rules, schedules, and audio-message triggers.',
        'Delivered configuration UI for a globally-deployed surveillance platform — AI event pipelines (face detection, LPR, perimeter detection), real-time video streaming, device maintenance, and live playback with timeline scrubbing — integrating complex network configurations (IPv4 / IPv6, DDNS, streaming protocols).',
        'Contributed backend: REST API endpoints (Node.js / Express), MongoDB query optimization, and JWT / RBAC middleware on a production multi-tenant SaaS platform.',
        'Built an automated document generation pipeline using Puppeteer and Chrome-headless rendering — multi-section PDF reports from dynamic HTML templates, reducing turnaround from hours to seconds.',
        'Engineered an xlsx report generator (SheetJS) for operational readiness matrices, automating data aggregation and formatting across multiple modules.',
        'Building a cross-platform Electron + React desktop app (Windows / macOS / Linux) for wellness-pod operators to control on-device audio hardware — playlists, playback, volume, and audio output switching — with offline support and signed installers for all three OSes.',
        'Contributed to a real-time IoT platform integrating MQTT, Socket.IO, and WebSockets for live device control, telemetry, and remote configuration.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Zignuts Technolab',
      period: '12/2022 - 05/2023',
      bullets: [
        'Delivered the customer booking flow and partner-garage dashboard for a Dubai-based premium car maintenance platform (Next.js, Ant Design).',
        'Built mobile-responsive UI with dedicated focus on iOS / Safari for a mobile-first user base, and integrated the Careem Pay payment gateway into the checkout flow.',
        'Translated Figma designs into production UI in close collaboration with designers and backend engineers to hit tight release deadlines.',
      ],
    },
  ],
  education: [
    {
      program: "Bachelor's of Engineering (Computer Engineering)",
      institute: 'Shankersinh Vaghela Bapu Institute of Technology',
      year: '2022',
      location: 'Gandhinagar, Gujarat',
      score: '6.92 CGPA',
    },
    {
      program: 'Diploma (Computer Engineering)',
      institute: 'N.B. Patel Polytechnic',
      year: '2019',
      location: 'Mehsana, Gujarat',
      score: '8.13 CGPA',
    },
  ],
  projects: [
    {
      title: 'RepoCrawler — AI Contributor Onboarding for GitHub',
      description:
        'An open-source AI tool that turns any GitHub repo into a personalised contributor onboarding plan in under a minute. Fans out to GitHub for issues, PRs, CONTRIBUTING, and maintainer activity, then uses Gemini / Claude via a provider-agnostic LLM layer to score issues by skill match, generate a codebase map with difficulty tags, extract project conventions, and recommend a "first PR" tailored to the user\'s skill profile. Ships with streaming server actions, a user-weighted match-scoring algorithm, per-user daily rate limits, and a nightly eval harness that benchmarks precision@3 against a 10-repo gold set.',
      tech: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'NextAuth.js v5',
        'Drizzle ORM',
        'PostgreSQL (pgvector)',
        'Server Actions',
        'Gemini API',
        'Claude API',
        'GitHub API (Octokit)',
        'Playwright',
        'GitHub Actions',
      ],
      links: {
        live: 'https://repocrawler.vercel.app',
        source: 'https://github.com/hardikparmarsde/repocrawler',
      },
      images: [
        '/projects/repocrawler-1.png',
        '/projects/repocrawler-2.png',
        '/projects/repocrawler-3.png',
        '/projects/repocrawler-4.png',
      ],
    },
    {
      title: 'LinkSphere — Social Media App',
      description:
        'A full-stack social media app with JWT authentication, post feed with image uploads, encrypted persistence, and light / dark theme support. Backend is an Express + MongoDB API with rate-limited endpoints and Cloudinary-backed media storage.',
      tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Express', 'JWT', 'MongoDB', 'Cloudinary'],
      links: {
        live: 'https://social-media-app-ochre-gamma.vercel.app/',
        source: 'https://github.com/hardikparmarsde/social-media-app',
        backend: 'https://github.com/hardikparmarsde/social-media-api',
      },
      images: ['/projects/linksphere-1.png', '/projects/linksphere-2.png', '/projects/linksphere-3.png'],
    },
  ],
};
