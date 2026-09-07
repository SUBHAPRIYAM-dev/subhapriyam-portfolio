export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  bio: string;
  aboutStatement: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
  capabilities: string[];
  philosophies: {
    title: string;
    description: string;
  }[];
}

export const personalData: PersonalInfo = {
  name: "Subhapriyam Dash",
  role: "Full Stack Developer",
  headline: "I build modern digital experiences, scalable applications, and production-ready systems across the full stack.",
  bio: "Full Stack Developer specializing in modern frontend architecture, robust backend APIs, database design, and cloud infrastructure deployment.",
  aboutStatement: "From interface to infrastructure, I build applications that are designed to work in the real world.",
  location: "India",
  email: "subhapriyamdash@example.com",
  github: "https://github.com/SUBHAPRIYAM-dev",
  linkedin: "https://linkedin.com/in/subhapriyam",
  resumeUrl: "#",
  avatarUrl: "/images/profile/subhapriyam.jpg",
  capabilities: [
    "FRONTEND ARCHITECTURE",
    "BACKEND APIS",
    "DATABASE DESIGN",
    "CLOUD DEPLOYMENT",
    "CONTAINER ORCHESTRATION",
    "SYSTEM DESIGN"
  ],
  philosophies: [
    {
      title: "Architecture",
      description: "Building clean, maintainable, and modular codebases designed to scale with product growth."
    },
    {
      title: "Performance",
      description: "Optimizing execution speed, asset delivery, render loops, and query responses for sub-second responsiveness."
    },
    {
      title: "Scalability",
      description: "Designing decoupled microservices, resilient containerized setups, and cloud infrastructure."
    },
    {
      title: "Security",
      description: "Enforcing strict authorization, data encryption, API rate limiting, and safe credential handling."
    },
    {
      title: "Automation",
      description: "Implementing continuous integration & automated pipeline deployments with GitHub Actions and Docker."
    },
    {
      title: "User Experience",
      description: "Crafting intuitive, accessible, visually stunning interfaces with motion and tactile feedback."
    }
  ]
};
