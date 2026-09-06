export interface ExperienceItem {
  year: string;
  period: string;
  role: string;
  focus: string;
  description: string;
  keySkills: string[];
  type: "Development" | "Cloud" | "Data" | "Milestone";
}

export const experienceData: ExperienceItem[] = [
  {
    year: "2026",
    period: "PRESENT",
    role: "Full Stack Development & System Design",
    focus: "Enterprise Application Engineering",
    description: "Architecting end-to-end web applications, microservices, and distributed cloud integrations. Combining robust Java Spring Boot and Node.js backends with high-performance React frontends.",
    keySkills: ["React", "TypeScript", "Spring Boot", "System Design", "REST APIs"],
    type: "Development"
  },
  {
    year: "2025",
    period: "ADVANCED FOCUS",
    role: "Cloud Infrastructure & DevOps Integration",
    focus: "Container Orchestration & Automated CI/CD",
    description: "Building scalable containerized deployment pipelines using Docker, Kubernetes (AWS EKS), and GitHub Actions CI/CD to automate testing, image registration, and cloud delivery.",
    keySkills: ["Docker", "Kubernetes", "AWS EKS", "GitHub Actions", "CI/CD"],
    type: "Cloud"
  },
  {
    year: "2024",
    period: "SPECIALIZATION",
    role: "Informatica & Data Engineering",
    focus: "Data Transformation & Relational Modeling",
    description: "Developing data processing pipelines, ETL transformations, relational MySQL schemas, and database query optimizations for high data integrity.",
    keySkills: ["Informatica", "SQL / MySQL", "ETL Pipelines", "Data Modeling", "MongoDB"],
    type: "Data"
  },
  {
    year: "2023",
    period: "CORE MASTERY",
    role: "Full Stack MERN Architecture",
    focus: "Single Page Applications & Web Services",
    description: "Mastered the JavaScript ecosystem across client and server. Designed complex state-driven React interfaces and Node.js/Express backend APIs.",
    keySkills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
    type: "Development"
  },
  {
    year: "2022",
    period: "FOUNDATION",
    role: "Project Building & Software Fundamentals",
    focus: "Object-Oriented Programming & Web Engineering",
    description: "Built initial full-stack web applications and software systems, mastering object-oriented Java programming, database connectivity, and REST API design.",
    keySkills: ["Java", "PHP", "HTML/CSS", "Git", "OOP Concepts"],
    type: "Milestone"
  }
];
