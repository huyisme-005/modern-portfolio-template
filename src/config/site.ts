// 🎯 CUSTOMIZATION: Update all your personal information here
// This is the main configuration file for your portfolio

export const siteConfig = {
  // Basic Information
  name: "Huy Le",
  title: "Computer Science Student",
  description:
    "Portfolio website showcasing my work in Software Engineering and Computer Science",

  // Contact Information
  contact: {
    email: "hl9082@rit.com",
    phone: "+1 (404)-203-9864",
    linkedin: "https://linkedin.com/in/huy-g-le",
    github: "https://github.com/huyisme-005",
  },


  // Hero Section
  hero: {
    headline: "Hi, I'm Huy Le",
    subtitle: "I help companies build better products",
    description:
      "Computer Science student with expertise in fullstack development, AI Development, and an eagerness to go above and beyond.",
    ctaText: "View My Work",
    ctaLink: "#projects",
  },

  // About Section
  about: {
    title: "About Me",
    content: `I'm a passionate product manager with over 5 years of experience in the tech industry. 
    I specialize in user experience design, business strategy, and team leadership. 
    My approach combines data-driven insights with creative problem-solving to deliver products that users love and businesses value.`,
    highlights: [
      "5+ years in product management",
      "Led teams of 10+ people",
      "Increased user engagement by 40%",
      "Launched 3 successful products",
    ],
  },

  // Skills Section
  skills: [
    {
      category: "Technical Skills",
      items: [
        "Product Strategy",
        "User Research",
        "Data Analysis",
        "A/B Testing",
        "Agile/Scrum",
        "Figma",
        "SQL",
        "Python",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Team Leadership",
        "Stakeholder Management",
        "Communication",
        "Problem Solving",
        "Strategic Thinking",
        "User Empathy",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Slack",
        "Discord",
        "Trello",
        "ClickUp",
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      title: "E-commerce Platform Redesign",
      description:
        "Led the complete redesign of a major e-commerce platform, resulting in 40% increase in conversion rate and 25% improvement in user satisfaction scores.",
      technologies: ["User Research", "UX Design", "A/B Testing", "Analytics"],
      link: "https://your-project.com",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
    },
    {
      title: "Mobile App Launch",
      description:
        "Successfully launched a mobile app from concept to 100K+ downloads, managing cross-functional teams and stakeholder relationships.",
      technologies: [
        "Product Strategy",
        "Team Leadership",
        "Go-to-Market",
        "User Acquisition",
      ],
      link: "https://your-project.com",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Built a comprehensive analytics dashboard that improved decision-making speed by 60% and provided actionable insights to stakeholders.",
      technologies: ["Data Analysis", "SQL", "Python", "Data Visualization"],
      link: "https://your-project.com",
      image: "/images/placeholders/pm_happy_hour_logo.jpeg",
    },
  ],

  // Experience Timeline
  experience: [
    {
      title: "Senior Product Manager",
      company: "Tech Company Inc.",
      period: "2023 - Present",
      description:
        "Leading product strategy and development for the company's flagship product, managing a team of 8 product managers and designers.",
      achievements: [
        "Increased user engagement by 40% through feature optimization",
        "Launched 3 major product features with 95% user satisfaction",
        "Reduced customer churn by 25% through improved onboarding",
      ],
    },
    {
      title: "Product Manager",
      company: "Startup XYZ",
      period: "2021 - 2023",
      description:
        "Managed product development lifecycle for a B2B SaaS platform, working closely with engineering and design teams.",
      achievements: [
        "Led the development of 5 core product features",
        "Improved customer retention by 30%",
        "Established product analytics and user research processes",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Enterprise Corp",
      period: "2019 - 2021",
      description:
        "Supported senior product managers in feature development and user research for enterprise software solutions.",
      achievements: [
        "Conducted user research with 200+ customers",
        "Managed 3 product features from concept to launch",
        "Improved team productivity by 20% through process optimization",
      ],
    },
  ],

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
