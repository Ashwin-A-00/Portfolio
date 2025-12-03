// Portfolio Data - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Alex Chen",
  firstName: "Alex",
  lastName: "Chen",
  roles: ["Full Stack Developer", "Software Engineer", "UI/UX Designer"],
  tagline: "Building digital products with precision and purpose.",
  bio: "Senior software engineer focused on creating performant, accessible web applications.",
  email: "hello@alexchen.dev",
  location: "San Francisco, CA",
  availability: "Available for freelance",
  resumeUrl: "#",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
  },
};

export const aboutData = {
  summary: `I'm a software engineer with over 5 years of experience building products for startups and enterprises. I specialize in frontend development with React and TypeScript, and I'm passionate about creating seamless user experiences.`,
  
  details: `My approach combines technical excellence with design sensibility. I believe great software is invisible—it just works. Currently, I'm focused on building scalable design systems and improving developer experience at scale.`,
  
  values: [
    { title: "Clean Code", description: "Writing maintainable, well-documented code" },
    { title: "Performance", description: "Optimizing for speed and efficiency" },
    { title: "Accessibility", description: "Building inclusive experiences for all" },
    { title: "Collaboration", description: "Working effectively across teams" },
  ],
  
  education: [
    {
      degree: "M.S. Computer Science",
      school: "Stanford University",
      year: "2020",
    },
    {
      degree: "B.S. Software Engineering", 
      school: "UC Berkeley",
      year: "2018",
    },
  ],
};

export const skillsData = {
  technical: [
    { name: "TypeScript", level: 95 },
    { name: "React / Next.js", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 82 },
    { name: "PostgreSQL", level: 80 },
    { name: "AWS / Cloud", level: 78 },
  ],
  tools: ["Git", "Docker", "Figma", "VS Code", "Linear", "Vercel"],
  interests: ["System Design", "Performance Optimization", "Design Systems", "Open Source"],
};

export const projectsData = [
  {
    id: 1,
    title: "Nexus Platform",
    subtitle: "Enterprise SaaS",
    description: "A comprehensive analytics platform processing 10M+ events daily. Built with React, TypeScript, and real-time data visualization.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    metrics: "10M+ events/day",
    year: "2024",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Atlas Design System",
    subtitle: "Component Library",
    description: "Scalable design system powering 12 products with 200+ components. Reduced development time by 40% across teams.",
    tech: ["React", "Storybook", "Tailwind CSS", "Radix UI"],
    metrics: "200+ components",
    year: "2023",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Quantum API",
    subtitle: "Developer Tools",
    description: "High-performance REST API serving 1M+ requests with <50ms latency. Features automatic scaling and comprehensive monitoring.",
    tech: ["Node.js", "Express", "Redis", "Docker", "AWS"],
    metrics: "<50ms latency",
    year: "2023",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "Insight Analytics",
    subtitle: "Data Visualization",
    description: "Real-time dashboard for business intelligence with custom charts and automated reporting features.",
    tech: ["Next.js", "D3.js", "Prisma", "Vercel"],
    metrics: "50+ integrations",
    year: "2022",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechCorp",
    duration: "2022 — Present",
    description: "Leading frontend architecture for enterprise products. Shipped features impacting 500K+ users.",
    highlights: ["Led migration to TypeScript", "40% performance improvement", "Mentoring 4 engineers"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "StartupXYZ",
    duration: "2020 — 2022",
    description: "Full-stack development from MVP to 100K users. Built core product features and infrastructure.",
    highlights: ["0 to 100K users", "Real-time collaboration", "Payment integration"],
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "BigTech Co.",
    duration: "2019",
    description: "Contributed to internal developer tools used by thousands of engineers.",
    highlights: ["Shipped to 2000+ devs", "Return offer received"],
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
