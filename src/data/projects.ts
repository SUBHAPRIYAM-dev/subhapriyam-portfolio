export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  architectureOverview: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    number: "01",
    title: "Ecommerce Platform",
    category: "Full Stack Web Application",
    shortDescription: "End-to-end modern e-commerce solution with dynamic product inventory, secure checkout, orders workflow, and comprehensive administrative portal.",
    fullDescription: "A high-performance full-stack e-commerce engine designed for seamless shopping experiences. Integrates real-time cart state management, user authentication, automated invoice generation, order fulfillment pipelines, and an administrative dashboard for inventory and sales reporting.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "REST API", "Tailwind CSS"],
    features: [
      "JWT-based Secure Authentication & Role Access",
      "Dynamic Product Management & Catalog Filtering",
      "Real-time Persistent Shopping Cart & Checkout Flow",
      "Order Tracking & Transaction History",
      "Admin Analytics Dashboard for Sales & Inventory"
    ],
    highlights: [
      "Relational MySQL Schema for Normalized Product & Order Data",
      "RESTful API endpoints with validation & error handling middleware",
      "Optimized client state using custom React hooks"
    ],
    architectureOverview: "Client (React + Vite) → Express REST API Server → MySQL Relational Database. Designed with clean MVC separation and token-based state management.",
    githubUrl: "https://github.com/SUBHAPRIYAM-dev",
    liveUrl: "https://example.com",
    featured: true,
    accentColor: "#38bdf8"
  },
  {
    id: "movie-picture-pipeline",
    number: "02",
    title: "Movie Picture Pipeline",
    category: "Cloud Infrastructure & Microservices",
    shortDescription: "Automated media processing and distribution pipeline with containerized Python microservices, AWS EKS Kubernetes cluster, and GitHub Actions CI/CD.",
    fullDescription: "An enterprise-grade cloud-native media processing pipeline. Leverages containerized Python Flask services for frame extraction, thumbnail processing, and cloud storage syncing. Automated deployment is orchestrated through GitHub Actions pipelines building to Amazon ECR and deploying to AWS EKS.",
    technologies: ["React", "TypeScript", "Python", "Flask", "Docker", "Kubernetes", "AWS EKS", "Amazon ECR", "GitHub Actions"],
    features: [
      "Automated Media Processing & Frame Extraction",
      "GitHub Actions CI/CD for Automated Image Builds",
      "Amazon ECR Container Registry Synchronization",
      "AWS EKS Kubernetes Cluster Orchestration",
      "Real-time Container Health & Status Dashboard"
    ],
    highlights: [
      "Fully Automated CI/CD Pipeline from Commit to EKS Deployment",
      "Containerized Isolation with Optimized Multi-Stage Dockerfiles",
      "Scalable Kubernetes Deployments with Auto-Scaling & Load Balancing"
    ],
    architectureOverview: "GitHub Actions CI/CD → Docker Image Build → Amazon ECR Registry → AWS EKS Kubernetes Cluster with React + TS Monitoring UI.",
    githubUrl: "https://github.com/SUBHAPRIYAM-dev",
    liveUrl: "https://example.com",
    featured: true,
    accentColor: "#a855f7"
  },
  {
    id: "attendance-management-system",
    number: "03",
    title: "Attendance Management System",
    category: "Enterprise Web & Hardware Integration",
    shortDescription: "Contactless QR-code based attendance tracking platform powered by Java Spring Boot backend, Hibernate ORM, and MySQL database.",
    fullDescription: "A contactless attendance automation platform created to eliminate manual roll calls. Generates dynamic time-bound QR codes for instant student check-ins. The Spring Boot backend processes check-ins concurrently while generating automated compliance reports and attendance heatmaps.",
    technologies: ["React", "Spring Boot", "Java", "Hibernate", "MySQL", "QR Code Engine", "REST API"],
    features: [
      "Dynamic Time-Bound QR Code Generation & Verification",
      "Instant Contactless Attendance Scan & Validation",
      "Spring Boot RESTful Middleware & Hibernate ORM",
      "Automated Compliance & Absentees Alert System",
      "Exportable Monthly PDF & Excel Attendance Reports"
    ],
    highlights: [
      "Robust Spring Security & Token Authorization",
      "High-throughput MySQL query optimization with Hibernate indexing",
      "Responsive QR scanner interface compatible with mobile cameras"
    ],
    architectureOverview: "React Mobile/Desktop Client → Spring Boot REST API → Hibernate JPA Layer → MySQL Database. Integrated with real-time QR generation & decode libraries.",
    githubUrl: "https://github.com/SUBHAPRIYAM-dev",
    liveUrl: "https://example.com",
    featured: true,
    accentColor: "#34d399"
  },
  {
    id: "student-lms",
    number: "04",
    title: "Student Learning Management System",
    category: "EdTech Platform",
    shortDescription: "Comprehensive learning management system supporting course catalog delivery, student enrollment, assignment submissions, and instructor grading.",
    fullDescription: "A modern educational platform built for universities and training programs. Features role-based views for Students, Instructors, and System Administrators. Enables course curriculum publishing, assignment file submissions, automated gradebook updates, and discussion boards.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "REST API", "Tailwind CSS"],
    features: [
      "Role-Based Dashboards for Students, Instructors & Admins",
      "Interactive Course Curriculum & Video Content Delivery",
      "Assignment Upload & Digital Gradebook System",
      "Student Enrollment & Course Progress Tracker",
      "Admin Control Panel for User & Course Management"
    ],
    highlights: [
      "Clean modular API design for fast course data fetching",
      "Responsive React interface with dark-mode aesthetic",
      "Secure file upload pipeline & data validation"
    ],
    architectureOverview: "React SPA UI → Node.js/Express Backend Services → MySQL Storage. Features file storage management and token-authenticated session control.",
    githubUrl: "https://github.com/SUBHAPRIYAM-dev",
    liveUrl: "https://example.com",
    featured: true,
    accentColor: "#f43f5e"
  }
];
