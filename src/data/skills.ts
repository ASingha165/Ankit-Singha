export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  accent: "primary" | "secondary" | "tertiary";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    iconName: "Code",
    accent: "primary",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    iconName: "Globe",
    accent: "secondary",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    iconName: "Server",
    accent: "tertiary",
    skills: ["Spring Boot", "FastAPI", "REST APIs", "Microservices"],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Database",
    accent: "primary",
    skills: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    id: "ai-data",
    title: "AI & Machine Learning",
    iconName: "Brain",
    accent: "secondary",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Data Analysis",
      "Geospatial Analysis",
    ],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    iconName: "Wrench",
    accent: "tertiary",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Docker"],
  },
];
