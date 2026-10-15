import { getAcademicProgress, evaluateMilestoneState } from "../lib/date-utils";

export interface Milestone {
  id: string;
  categoryTag: string;
  tagColor: "primary" | "secondary" | "tertiary" | "white";
  date: string;
  title: string;
  description: string;
  highlight: string;
  highlightIcon: "verified" | "bolt" | "schema" | "school" | "award";
  certificateImage?: string;
  issuer?: string;
  startDate?: string;
  completionDate?: string;
  targetDate?: string;
  status?: "completed" | "in-progress" | "upcoming" | "overdue";
  isConfirmed?: boolean;
}

export const rawMilestones: Milestone[] = [
  {
    id: "google-ambassador-2026",
    categoryTag: "GOOGLE PROGRAM // PRODUCT TRIAL",
    tagColor: "primary",
    startDate: "2026-09-01",
    completionDate: "2026-09-25",
    date: "September 2026",
    title: "Google Student Ambassador Program — Build Your Fest Stall Edition",
    description:
      "Actively participated in the Product Trial organized under the Google Student Ambassador Program 2026, bringing an innovative brand concept to reality utilizing Google Gemini and Nano Banana.",
    highlight: "Google Student Ambassador Program 2026",
    highlightIcon: "award",
    certificateImage: "/images/certificates/google-student-ambassador.jpg",
    issuer: "Google Student Ambassador Program",
    status: "completed",
  },
  {
    id: "production-deployments",
    categoryTag: "PRODUCTION DEPLOYMENT",
    tagColor: "primary",
    startDate: "2024-10-01",
    completionDate: "2025-01-15",
    date: "2025",
    title: "CareerPilot-AI & Detoura Cloud Deployments",
    description:
      "Engineered and launched experimental machine learning pipelines and full-stack frontends onto the Vercel Edge Network with live domain routing, high availability, and verified CI/CD workflows.",
    highlight: "Cloud Infrastructure: Vercel Edge Network",
    highlightIcon: "verified",
    status: "completed",
  },
  {
    id: "mygov-legacy-quiz",
    categoryTag: "NATIONAL CITIZEN INITIATIVE",
    tagColor: "secondary",
    startDate: "2024-09-01",
    completionDate: "2024-09-28",
    date: "2024",
    title: "Shaheed Bhagat Singh — The Legacy Initiative (MyGov)",
    description:
      "Awarded Certificate of Participation by MyGov (Government of India) in recognition of historical inquiry and active civil engagement.",
    highlight: "MyGov India // Ministry of Electronics & IT",
    highlightIcon: "award",
    certificateImage: "/images/certificates/shaheed-bhagat-singh.jpg",
    issuer: "MyGov India",
    status: "completed",
  },
  {
    id: "hackathon-sprints",
    categoryTag: "HACKATHON SPRINT",
    tagColor: "secondary",
    startDate: "2024-08-01",
    completionDate: "2025-02-15",
    date: "2024 – 2025",
    title: "Rapid Prototyping & Applied AI Hackathon Cycles",
    description:
      "Built and pitched practical intelligent systems under fast-paced sprint constraints, translating architectural blueprints into validated proofs of concept.",
    highlight: "Fast-cycle ideation, state management, and API design",
    highlightIcon: "bolt",
    status: "completed",
  },
  {
    id: "systems-architecture",
    categoryTag: "SYSTEMS ARCHITECTURE",
    tagColor: "tertiary",
    startDate: "2024-06-01",
    completionDate: "2024-11-30",
    date: "2024",
    title: "Backend Engineering & Microservice Architecture",
    description:
      "Implemented modular Spring Boot backends, handling ACID relational database transactions, schema normalizations, and integrating Firebase authentication and real-time data persistence.",
    highlight: "REST APIs, Relational DBs & Persistence",
    highlightIcon: "schema",
    status: "completed",
  },
  {
    id: "academic-degree",
    categoryTag: "ACADEMIC FOUNDATION",
    tagColor: "white",
    startDate: "2024-08-01",
    targetDate: "2028-06-30",
    date: "2024 — Present",
    title: "B.Tech in Computer Science & Engineering (AI & ML)",
    description:
      "Pursuing a rigorous undergraduate curriculum at Brainware University, focusing on Data Structures, Algorithms, Machine Learning Foundations, Linear Algebra, and Distributed Database Systems.",
    highlight: "Specialized in AI & Machine Learning Foundations",
    highlightIcon: "school",
    status: "in-progress",
  },
];

/**
 * Returns milestones with dynamic calculations applied (e.g. current academic semester).
 */
export function getDynamicMilestones(currentDate: Date = new Date()): Milestone[] {
  const academic = getAcademicProgress(currentDate);

  return rawMilestones.map((m) => {
    if (m.id === "academic-degree") {
      return {
        ...m,
        date: academic.dateRangeLabel,
        description: `Pursuing a rigorous undergraduate curriculum at Brainware University (${academic.statusLabel}), focusing on Data Structures, Algorithms, Machine Learning Foundations, Linear Algebra, and Distributed Database Systems.`,
        highlight: `Brainware University • ${academic.statusLabel}`,
        status: academic.isGraduated ? "completed" : "in-progress",
      };
    }

    const evaluated = evaluateMilestoneState(m, currentDate);
    return {
      ...m,
      status: evaluated.state,
    };
  });
}

// Backward-compatible export for static consumption
export const milestones: Milestone[] = getDynamicMilestones();
