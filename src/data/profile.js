export const profile = {
  name: 'Hardik Parmar',
  title: 'Frontend Developer',
  location: 'Gandhinagar, Gujarat',
  email: 'hardikparmar7001@gmail.com',
  phone: '8347937087',
  links: {
    linkedin: 'https://linkedin.com/in/hardik-parmar-9a51b3183',
    github: 'https://github.com/hardikparmarsde',
  },
  summary: [
    'Frontend Developer with experience building modern, responsive web applications using React.js, Next.js, Tailwind CSS, and Material UI.',
    'Worked closely with backend teams and delivered real-time features using Node.js, MQTT, and Socket.IO.',
    'Built SEO pages using Next.js and implemented payment flows using Careem Pay.',
  ],
  about: {
    // tagline: 'Building fast, clean, and real-time web experiences.',
    paragraphs: [
      'Frontend Developer focused on building modern, responsive web applications with React.js and Next.js, using Tailwind CSS and Material UI for clean, consistent UI systems.',
      'I collaborate closely with backend teams to deliver real-time experiences using Node.js, MQTT, and Socket.IO—shipping dashboards that reflect live device/telemetry data and keeping UIs performant under frequent updates.',
      'I’ve also worked on CCTV camera configuration modules for live streaming workflows, built SEO-friendly pages in Next.js, and implemented payment flows using Careem Pay.',
      'In internal tooling, I built a device borrow/return app using QR codes to replace manual paper-based entries—making the process faster and more traceable.',
    ],
    focusAreas: [
      {
        title: 'Web app development',
        description: 'Responsive UI, routing, state management, and reusable component systems.',
      },
      {
        title: 'Real-time systems',
        description: 'MQTT + Socket.IO driven screens that update reliably with live data.',
      },
      {
        title: 'Internal tools',
        description: 'Process automation like QR-based device borrowing/returns to replace manual workflows.',
      },
    ],
    stats: [
      { value: '2+', label: 'Years experience' },
      { value: '10+', label: 'Projects shipped' },
      { value: '3+', label: 'Domains' },
    ],
  },
  skills: [
    {
      category: 'Frontend',
      items: [
        'React.js',
        'Next.js',
        'Angular',
        'JavaScript',
        'Redux',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Material UI',
        'Ant Design',
        'Bootstrap',
      ],
    },
    {
      category: 'Backend & Realtime',
      items: ['Node.js', 'Socket.IO', 'MQTT', 'JWT', 'Express'],
    },
    {
      category: 'Data & CS',
      items: ['MongoDB'],
    },
    {
      category: 'Desktop',
      items: ['Electron.js'],
    },
  ],
  experience: [
    {
      role: 'Software Development Engineer',
      company: 'Rapidise inc',
      period: '08/2023 - Present',
      bullets: [
        'Developed modern, responsive web applications using React.js, Next.js, Tailwind CSS, and Material UI.',
        'Collaborated with backend teams and integrated real-time features using Node.js, MQTT, and Socket.IO.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Zignuts Technololab',
      period: '01/2022 - 05/2023',
      bullets: [
        'Worked on both frontend and backend part of the project.',
        'Designed landing page for the project.',
        'Built SEO pages using Next.js to improve website reach on search engines.',
        'Worked on payments of the project with Careem Pay (a Saudi Arabian payment gateway).',
        'Worked primarily on Next.js to provide frontend solutions.',
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
      title: 'Pocket Notes',
      description:
        'A notes app with group-based organization, color-coded groups, and an end-to-end encrypted notes experience.',
      tech: ['React.js', 'JavaScript', 'CSS'],
      links: {
        live: 'https://react-notes-app-eta-henna.vercel.app/',
      },
      images: ['/projects/pocket-notes-1.png', '/projects/pocket-notes-2.png', '/projects/pocket-notes-3.png'],
    },
    {
      title: 'Rock Paper Scissors',
      description: 'A Rock–Paper–Scissors web game with score tracking and a clean, playful UI.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://hardikparmarsde.github.io/rock-paper-scissors/',
      },
      images: [
        '/projects/rock-paper-scissors-1.png',
        '/projects/rock-paper-scissors-2.png',
        '/projects/rock-paper-scissors-3.png',
      ],
    },
    {
      title: 'LinkSphere — Social Media App',
      description:
        'A full-stack social media app with authentication, a posts feed, image uploads, and light/dark theme support.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'Express', 'JWT', 'MongoDB'],
      links: {
        live: 'https://social-media-app-ochre-gamma.vercel.app/',
        source: 'https://github.com/hardikparmarsde/social-media-app',
        backend: 'https://github.com/hardikparmarsde/social-media-api',
      },
      images: ['/projects/linksphere-1.png', '/projects/linksphere-2.png', '/projects/linksphere-3.png'],
    },
  ],
};

