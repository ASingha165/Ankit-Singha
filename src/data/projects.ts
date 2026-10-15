export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  year: string;
  statusBadge: string;
  statusType: "production" | "alpha" | "prototype" | "verified";
  description: string;
  extendedDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  isSpecificRepo: boolean;
  featured: boolean;
  previewType: "copilot" | "gis" | "civic" | "ledger";
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "careerpilot-ai",
    title: "CareerPilot-AI",
    category: "AI / Career Intelligence",
    categoryTag: "AI / CAREER INTELLIGENCE",
    year: "2024",
    statusBadge: "PRODUCTION DEPLOYMENT",
    statusType: "production",
    description:
      "An AI-powered career copilot engineered to analyze skill graph discrepancies, simulate dynamic technical interview loops, and construct real-time learning trajectories using localized LLM pipelines.",
    extendedDescription:
      "Features vector embeddings for semantic skill matching, personalized gap assessments, and an interactive mock interview sandbox with real-time feedback.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Vector Embeddings",
      "FastAPI",
    ],
    liveUrl: "https://career-pilot-ai-theta-vert.vercel.app/",
    githubUrl: "https://github.com/ASingha165/CareerPilot-AI",
    isSpecificRepo: true,
    featured: true,
    previewType: "copilot",
  },
  {
    id: "detoura",
    title: "Detoura",
    category: "AI / Geospatial Intelligence",
    categoryTag: "AI / GEOSPATIAL INTELLIGENCE",
    year: "2024",
    statusBadge: "ACTIVE ALPHA",
    statusType: "alpha",
    description:
      "An AI-driven regional travel intelligence platform designed to help mitigate overtourism and popularity bias by processing spatial clustering algorithms and distributing traffic to high-value alternative destinations.",
    extendedDescription:
      "Applies spatial DBSCAN clustering and travel demand analytics to uncover off-the-beaten-path locations while protecting ecologically fragile hot spots.",
    technologies: [
      "Python",
      "Geospatial ML",
      "DBSCAN Clustering",
      "Next.js",
      "GeoJSON",
      "MapLibre",
    ],
    liveUrl: "https://detoura.vercel.app/",
    githubUrl: "https://github.com/ASingha165/Detoura",
    isSpecificRepo: true,
    featured: true,
    previewType: "gis",
  },
  {
    id: "janawaaz",
    title: "Jana Awaaz (JanaWaaz)",
    category: "Civic Technology / Triage Engine",
    categoryTag: "CIVIC TECHNOLOGY // TRIAGE ENGINE",
    year: "2024",
    statusBadge: "PROTOTYPE",
    statusType: "prototype",
    description:
      "A high-throughput civic issue reporting platform enabling citizens to log structured civic anomalies with geo-tagged ticket allocation and automated municipal dispatch.",
    extendedDescription:
      "Engineered with modular service boundaries, relational persistence, and role-based grievance tracking workflows for transparent resolution auditing.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Firebase",
      "REST APIs",
    ],
    // No fabricated live URL per specification
    liveUrl: undefined,
    // Source code points to GitHub profile as specified: search actual repos; repo is not public under this exact name
    githubUrl: "https://github.com/ASingha165",
    isSpecificRepo: false,
    featured: true,
    previewType: "civic",
  },
  {
    id: "transaction-engine",
    title: "Transaction Management System",
    category: "Backend Architecture / Financial Ledger",
    categoryTag: "BACKEND ARCHITECTURE // FINANCIAL LEDGER",
    year: "2024",
    statusBadge: "ACID COMPLIANT",
    statusType: "verified",
    description:
      "A high-concurrency transaction workflow engine built to handle ACID-compliant account state transfers, double-entry ledger verification, and real-time currency conversion.",
    extendedDescription:
      "Built with strict isolation levels, idempotent request dispatching, distributed database transactions, and currency conversion workflows.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "JUnit",
    ],
    // No fabricated live URL per specification
    liveUrl: undefined,
    // Links to verified GitHub repositories
    githubUrl: "https://github.com/ASingha165/CurrencySwap",
    isSpecificRepo: true,
    featured: true,
    previewType: "ledger",
  },
];
