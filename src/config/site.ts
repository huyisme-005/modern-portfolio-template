// 🎯 CUSTOMIZATION: Update all your personal information here
// This is the main configuration file for your portfolio

export const siteConfig = {
  // Basic Information
  name: "Huy Le",
  title: "Software Engineering Intern",
  description:
    "Portfolio website showcasing my work in Software Development, Frontend, Backend, Fullstack, and AI Engineering.",

  // Contact Information
  contact: {
    email: "hl9082@rit.edu",
    personalEmail: "legiahuy050104@gmail.com",
    linkedin: "https://linkedin.com/in/huy-g-le",
    github: "https://github.com/huyisme-005",
  },

  // Hero Section
  hero: {
    headline: "Hi, I'm Huy Le",
    subtitle: "I help companies build better products with code and AI.",
    description:
      "A Computer Science student driven by the mission to support society with greater goods. Always looking forward to learning and going beyond the code to solve the most pressing issues.",
    ctaText: "View My Work",
    ctaLink: "#projects",
  },

  // About Section
  about: {
    title: "About Me",
    content: `I'm a Computer Science student at Rochester Institute of Technology, passionate about building impactful software solutions. My expertise spans fullstack development, AI engineering, and cloud technologies. I thrive in collaborative environments and am always eager to learn and tackle new challenges.`,
    highlights: [
      "Software Engineering Intern at PlatiHUB Co Ltd. & Paralgl",
      "Fullstack, AI, and Cloud Development",
      "Bachelor's of Science at RIT",
      "Driven by social impact and continuous learning",
    ],
  },

  // Skills Section
  skills: [
    {
      category: "Technical Skills",
      items: [
        "Python",
        "Java",
        "C/C++",
        "React",
        "Angular",
        "AWS",
        "AI Copilot",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Teamwork",
        "Communication",
        "Problem Solving",
        "Adaptability",
        "Continuous Learning",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Next.js",
        "Spring Boot",
        "Docker",
        "Tailwind CSS",
        "Genkit",
        "Zod",
        "Vercel",
        "AWS DynamoDB",
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "La Musique",
      description:
        "La Musique is an adaptive song-writing application designed to be your creative music partner. It leverages Google Gemini AI API to generate song lyrics and fitting melodies based on user-provided themes, details, and a selected emotion. It also detects the genres of the input audios. The app allows users to write music without artistic background.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Genkit", "Zod", "Vercel"],
      link: "#",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
      achievements: [
        "Built interactive stage with Next.js & React, making song creation more dynamic and smoother by 50%",
        "Crafted stunning, responsive visuals with ShadCN & Tailwind CSS",
        "Integrated Genkit with Google Gemini for lyrics, melodies, and genre detection (≥70% confidence)",
        "Ensured code quality and precise data with TypeScript & Zod",
      ],
    },
    {
      title: "U-fund project",
      description:
        "U-fund is made to help manage and support the variety of needs for a non-profit organization. Through the website, Managers can list what they need, and helpers can fund the needs they want to support.",
      technologies: ["Angular", "Spring Boot", "Java", "JUnit", "Docker"],
      link: "#",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
      achievements: [
        "Built SPA with Angular",
        "Enhanced website background by 40% with HTML and CSS",
        "Facilitated development and deployment with Spring Boot by 30%",
        "Increased test coverage to 90% with JUnit",
        "Containerized app and enhanced security by 60% with Docker",
        "Secured user data with mock-up JSON storage",
      ],
    },
    {
      title: "ReWear",
      description:
        "Help users shop sustainably by finding affordable second-hand fashion, connecting them with local clothing swaps, and building communities where they can share wardrobes and track their fashion impact.",
      technologies: ["React", "Next.js", "AWS DynamoDB", "JavaScript", "Python", "Google Form"],
      link: "#",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
      achievements: [
        "Gathered 14 early adopters via Google Form Survey",
        "Built a landing page with React",
        "Created a data storage with AWS DynamoDB for users' accounts",
      ],
    },
  ],

  // Experience Timeline
  experience: [
    {
      title: "Fullstack Developer Intern",
      company: "PlatiHUB Co Ltd.",
      period: "June 2024 - August 2024",
      description:
        "Built and deployed the frontend of a dynamic web application with React.js. Improved UI aesthetics and responsiveness with HTML and CSS by 40%. Created email aliases for staff with Zoho credentials using JavaScript. Improved API security with Spring Boot by 30%.",
      achievements: [
        "Built and deployed frontend with React.js",
        "Improved UI aesthetics and responsiveness by 40%",
        "Created 3+ email aliases for staff with Zoho credentials",
        "Improved API security with Spring Boot by 30%",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Paralgl",
      period: "May 2025 - August 2025",
      description:
        "Develop and maintain frontend applications using Next.js. Build and optimize backend services and APIs with Django. Manage containerization and deployment workflows with Docker. Collaborate with cross-functional teams to design scalable, secure, and maintainable full-stack solutions. Integrate AI-powered services and APIs into the product ecosystem.",
      achievements: [
        "Developed and maintained frontend with Next.js",
        "Built and optimized backend services with Django",
        "Managed containerization and deployment with Docker",
        "Integrated AI-powered services and APIs",
        "Contributed to architectural decisions and best practices",
      ],
    },
  ],

  // Education
  education: {
    degree: "Bachelor's of Science",
    field: "Computer Science",
    university: "Rochester Institute of Technology",
    location: "Rochester, NY, USA",
  },

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Startup",
      content:
        "YOUR_NAME is an exceptional product manager who consistently delivers results. Their strategic thinking and user-focused approach have been invaluable to our company's growth.",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
    },
    {
      name: "Michael Chen",
      role: "Engineering Manager",
      company: "Software Company",
      content:
        "Working with YOUR_NAME has been a pleasure. They have a deep understanding of both technical and business requirements, making them an excellent bridge between teams.",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      content:
        "YOUR_NAME's user-centered approach and attention to detail have helped us create products that truly resonate with our users. They're a true collaborator and leader.",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
    },
  ],

  // Theme Colors (Optional - for advanced customization)
  theme: {
    primary: "#000000",
    secondary: "#666666",
    accent: "#ffffff",
    background: "#ffffff",
    text: "#000000",
  },
};

// 🎯 CUSTOMIZATION: Update these values with your actual information
// Replace all placeholder text with your real data
// This file is imported throughout the application to maintain consistency
