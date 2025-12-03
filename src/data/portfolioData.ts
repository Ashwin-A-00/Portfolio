// Portfolio Data - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Ashwin A",
  firstName: "Ashwin",
  lastName: "Arun",
  roles: ["Frontend Developer", "AI / ML Engineer Intern", "Frontend Developer"],
  tagline: "Coding Ideas into Reality.",
  bio: "Frontend developer passionate about creating performant and user-friendly web applications with React and AI.",
  email: "Ashwin.a.nair7@gmail.com",
  location: "Kochi, Kerala",
  availability: "Available for freelance",
  resumeUrl: "#",
  social: {
    github: "https://github.com/Ashwin-A-00",
    linkedin: "https://www.linkedin.com/in/ashwin-a-3251b5359/",
  },
};

export const aboutData = {
  summary: `I’m an aspiring software engineer and frontend developer, building interactive and scalable web applications with React, Tailwind, and AI-powered projects. I’m passionate about creating seamless user experiences through clean code and modern design.`,
  
  details: `My approach combines technical proficiency with a passion for intuitive design. I believe great software feels effortless—it just works. Currently, I’m focused on building interactive, modular web applications, creating engaging user experiences, and exploring AI/ML-powered projects to add smart functionality at scale.`,
  
  values: [
    { title: "Clean Code", description: "Writing maintainable, well-documented code" },
    { title: "Performance", description: "Optimizing for speed and efficiency" },
    { title: "Accessibility", description: "Building inclusive experiences for all" },
    { title: "Collaboration", description: "Working effectively across teams" },
  ],
  
  education: [
     {
    degree: "B.Tech in Information Technology",
    school: "Cochin University of Science and Technology (CUSAT)",
    year: "2027",
  },
    {
      degree: "CBSE 12th standard", 
      school: "Campion school",
      year: "2023",
    },
  ],
};

export const skillsData = {
  technical: [
    { name: "React.js / Next.js", level: 95 },
    { name: "JavaScript / TypeScript", level: 92 },
    { name: "Python", level: 85 },
    { name: "HTML / CSS / Tailwind", level: 90 },
    { name: "Node.js / Express", level: 80 },
    { name: "MongoDB / Firebase", level: 78 },
  ],
  tools: ["Git & GitHub", "VS Code", "Figma", "Framer Motion", "Vercel", "Postman"],
  interests: ["AI & Machine Learning", "Computer Vision", "Frontend Architecture", "Interactive UI/UX", "Open Source Projects"],
};

export const projectsData = [
  {
    id: 1,
    title: "StudyVerse",
    subtitle: "Student Resource Sharing Platform",
    description: "A full-stack platform developed as a 2nd-year college project to upload, share, and bookmark study resources. Built with React and MongoDB with dynamic search and rating features.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    metrics: "50+ resources uploaded, 100+ interactions",
    year: "2024",
    liveUrl: "https://studyverse-grove.vercel.app/",
    githubUrl: "https://github.com/Ashwin-A-00/studyverse-grove",
    featured: true,
  },
  {
    id: 2,
    title: "Sign Language Detection",
    subtitle: "Machine Learning Internship Project",
    description: "Developed a hand gesture recognition model using MediaPipe and OpenCV to detect sign language gestures. Implemented real-time predictions for practical usability.",
    tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Pandas"],
    metrics: "Real-time detection with 90%+ accuracy",
    year: "2025",
    liveUrl: "https://github.com/Ashwin-A-00/sign-language-detection",
    githubUrl: "https://github.com/Ashwin-A-00/sign-language-detection",
    featured: true,
  },
  {
    id: 3,
    title: "TEDxCUSAT Website",
    subtitle: "Frontend Development",
    description: "Built a model of TEDxCUSAT 2025 website to join the frontend team. Designed responsive layouts, interactive sections, countdown, carousels, and modular components using React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    metrics: "Fully responsive, interactive sections for speakers, sponsors, and countdowns",
    year: "2025",
    liveUrl: "https://tedx-indol.vercel.app/",
    githubUrl: "https://github.com/Ashwin-A-00/TEDx",
    featured: true,
  },
  {
    id: 4,
    title: "Trivify App",
    subtitle: "12-Hour Hackathon Project",
    description: "Developed a trivia quiz app in a 12-hour hackathon. Implemented interactive quizzes, scoring, and animated UI using React and traditional CSS for fast deployment.",
    tech: ["React", "CSS", "JavaScript", "Framer Motion"],
    metrics: "Completed full app in 12 hours, interactive quizzes and scoring system",
    year: "2025",
    liveUrl: "https://trivify-app.vercel.app/",
    githubUrl: "https://github.com/Ashwin-A-00/TRIVIFY_App",
    featured: true,
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "TEDxCUSAT",
    duration: "2025 — Present",
    description: "Contributing to the frontend team for the TEDxCUSAT 2025 website. Developed responsive layouts, interactive components, and animated UI sections using React, Tailwind CSS, and Framer Motion.",
    highlights: [
      "Built modular and reusable React components for the website",
      "Implemented interactive speaker carousel and countdown sections",
      "Optimized performance and responsiveness across devices"
    ],
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "Qbiqon",
    duration: "2025",
    description: "Developed a hand gesture-based sign language detection system using computer vision and machine learning techniques.",
    highlights: [
      "Built real-time gesture recognition model with MediaPipe and OpenCV",
      "Achieved 90%+ accuracy on test dataset",
      "Implemented live demo for practical usability and testing"
    ],
  },
  {
    id: 3,
    role: "Flutter Mobile App Developer Intern",
    company: "Keltron",
    duration: "2024",
    description: "Worked on developing cross-platform mobile applications using Flutter, focusing on UI implementation and state management.",
    highlights: [
      "Developed interactive mobile UI components with Flutter",
      "Implemented state management for scalable mobile features",
      "Collaborated with backend team to integrate APIs seamlessly"
    ],
  },
];


export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
