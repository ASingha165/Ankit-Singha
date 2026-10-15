export interface SiteConfig {
  name: string;
  role: string;
  title: string;
  headline: {
    line1: string;
    line2Prefix: string;
    line2Gradient: string;
  };
  intro: string;
  statusBadge: string;
  subBadge: string;
  location: string;
  university: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  resumeUrl: string;
  avatarUrl: string;
  logoUrl: string;
  navItems: {
    label: string;
    href: string;
    path: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Ankit Singha",
  role: "AI & Software Systems Engineer",
  title: "Ankit Singha — Personal Developer Portfolio | AI & Systems Engineer",
  headline: {
    line1: "Building Intelligent Systems.",
    line2Prefix: "Engineering ",
    line2Gradient: "What Comes Next.",
  },
  intro:
    "I'm Ankit Singha, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I build software applications, intelligent systems, and technology-driven solutions that turn ideas into practical products.",
  statusBadge: "OPEN TO INTERNSHIPS & COLLABORATIONS",
  subBadge: "CS & AI/ML UNDERGRADUATE",
  location: "Kolkata, India",
  university: "Brainware University",
  githubUsername: "ASingha165",
  githubUrl: "https://github.com/ASingha165",
  // Configurable LinkedIn URL (defaults to user's profile path or placeholder if unconfigured)
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/ankit-singha-67475a358",
  email: "singhaankit165@gmail.com",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/profile.jpg",
  logoUrl: "/images/logo.png",
  navItems: [
    { label: "Home", href: "#hero", path: "home" },
    { label: "About", href: "#about", path: "about" },
    { label: "Skills", href: "#skills", path: "skills" },
    { label: "Projects", href: "#projects", path: "projects" },
    { label: "GitHub", href: "#github", path: "github" },
    { label: "Certifications", href: "#milestones", path: "milestones" },
    { label: "Contact", href: "#contact", path: "contact" },
  ],
};
