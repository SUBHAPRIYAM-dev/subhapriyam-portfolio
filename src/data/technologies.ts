export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud & DevOps";
  level: "Expert" | "Advanced" | "Proficient";
  description: string;
  iconName: string;
  featured: boolean;
  position3D?: [number, number, number];
}

export const technologiesData: Technology[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    level: "Expert",
    description: "Building responsive single-page applications, custom hook architectures, and state-driven dynamic user interfaces.",
    iconName: "Atom",
    featured: true,
    position3D: [-2.2, 1.2, 0.5]
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Expert",
    description: "Enforcing strict type safety, domain modeling, compile-time error prevention, and clean interface abstraction.",
    iconName: "Code2",
    featured: true,
    position3D: [-1.5, 2.0, -0.2]
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Expert",
    description: "ES6+ asynchronous programming, event loop mechanics, DOM manipulation, and functional patterns.",
    iconName: "FileCode",
    featured: true,
    position3D: [-2.8, -0.5, 0.8]
  },
  {
    name: "Vite",
    category: "Frontend",
    level: "Advanced",
    description: "Lightning-fast HMR dev server configuration, ESbuild bundling, and production build optimization.",
    iconName: "Zap",
    featured: true,
    position3D: [-1.2, -1.8, 0.2]
  },
  {
    name: "Angular",
    category: "Frontend",
    level: "Proficient",
    description: "Component-driven architecture, RxJS reactive state streams, dependency injection, and enterprise modules.",
    iconName: "Layers",
    featured: false,
    position3D: [-3.2, 0.8, -0.6]
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "Expert",
    description: "High-throughput asynchronous event-driven server runtimes, microservices, and streaming I/O.",
    iconName: "Server",
    featured: true,
    position3D: [2.0, 1.5, 0.4]
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Expert",
    description: "RESTful routing, custom authentication middleware, rate limiting, and centralized error handling.",
    iconName: "Cpu",
    featured: true,
    position3D: [1.2, 2.2, -0.3]
  },
  {
    name: "Java",
    category: "Backend",
    level: "Advanced",
    description: "Object-oriented software development, multithreading, memory management, and enterprise backend engineering.",
    iconName: "Coffee",
    featured: true,
    position3D: [2.6, -0.2, 0.6]
  },
  {
    name: "Spring Boot",
    category: "Backend",
    level: "Advanced",
    description: "Enterprise Java services, Spring Security, REST controller design, dependency injection, and microservices.",
    iconName: "ShieldCheck",
    featured: true,
    position3D: [1.8, -1.6, 0.1]
  },
  {
    name: "Hibernate",
    category: "Backend",
    level: "Proficient",
    description: "Object-Relational Mapping (ORM), entity lifecycle, lazy loading optimization, and Criteria queries.",
    iconName: "Database",
    featured: false,
    position3D: [3.0, 0.8, -0.8]
  },
  {
    name: "PHP",
    category: "Backend",
    level: "Proficient",
    description: "Server-side scripting, traditional web applications, database integration, and legacy service maintenance.",
    iconName: "Terminal",
    featured: false,
    position3D: [2.5, -2.2, -0.4]
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Expert",
    description: "Designing RESTful API contracts, OpenAPI specs, JSON responses, status codes, and API security.",
    iconName: "Network",
    featured: true,
    position3D: [0.0, 2.6, 0.8]
  },

  // Databases
  {
    name: "MySQL",
    category: "Database",
    level: "Expert",
    description: "Relational database schema design, ACID transactions, complex SQL queries, indexes, and performance tuning.",
    iconName: "HardDrive",
    featured: true,
    position3D: [-0.8, -2.5, 0.6]
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Advanced",
    description: "NoSQL document stores, aggregation pipelines, schema indexing, and Mongoose ORM models.",
    iconName: "Boxes",
    featured: true,
    position3D: [0.6, -2.6, -0.2]
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "Cloud & DevOps",
    level: "Advanced",
    description: "Amazon Web Services (EC2, S3, EKS, ECR, IAM, CloudFront) for scalable cloud hosting and deployment.",
    iconName: "Cloud",
    featured: true,
    position3D: [0.0, -3.2, 0.0]
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    level: "Advanced",
    description: "Containerizing application environments, writing multi-stage Dockerfiles, and Docker Compose orchestration.",
    iconName: "Container",
    featured: true,
    position3D: [-1.8, -2.8, -0.5]
  },
  {
    name: "Kubernetes",
    category: "Cloud & DevOps",
    level: "Advanced",
    description: "Container orchestration, manifests (Deployments, Services, Ingress), rolling updates, and cluster management.",
    iconName: "Box",
    featured: true,
    position3D: [1.6, -2.9, 0.7]
  },
  {
    name: "GitHub Actions",
    category: "Cloud & DevOps",
    level: "Advanced",
    description: "Writing continuous integration workflows, automated testing, container builds, and deployment triggers.",
    iconName: "GitBranch",
    featured: true,
    position3D: [-0.2, 3.2, -0.4]
  },
  {
    name: "CI/CD",
    category: "Cloud & DevOps",
    level: "Advanced",
    description: "End-to-end continuous integration & automated deployment strategy for production stability.",
    iconName: "Repeat",
    featured: true,
    position3D: [0.8, 3.0, 0.3]
  }
];
