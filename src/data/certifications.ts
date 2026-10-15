export type CertificationCategory =
  | "Professional Certification"
  | "Technical Training & Bootcamp"
  | "Hackathon & Participation";

export interface Certification {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  category: CertificationCategory;
  description: string;
  featured: boolean;
  skills?: string[];
  verificationNote?: string;
}

/**
 * Curated certifications and verified credentials dataset.
 * Structured hierarchically:
 * Category 1: Professional Certifications (LinkedIn Licenses & Certifications)
 * Category 2: Technical Training and Bootcamps
 * Category 3: Hackathons and Participation
 */
export const certifications: Certification[] = [
  // ==========================================
  // CATEGORY 1: PROFESSIONAL CERTIFICATIONS
  // (Reserved for verified LinkedIn Licenses & Certifications)
  // Ready to populate as soon as credential IDs/URLs are provided.
  // ==========================================

  // ==========================================
  // CATEGORY 2: TECHNICAL TRAINING AND BOOTCAMPS
  // ==========================================
  {
    id: "google-student-ambassador-2026",
    title: "Google Student Ambassador Program — Build Your Fest Stall Edition",
    issuingOrganization: "Google Student Ambassador Program",
    issueDate: "2026-09-25",
    image: "/images/certificates/google-student-ambassador.jpg",
    category: "Technical Training & Bootcamp",
    description:
      "Actively participated in the Product Trial organised under the Google Student Ambassador Program 2026, bringing a unique brand idea to life utilizing Google Gemini and Nano Banana.",
    featured: true,
    skills: ["Google Gemini", "Nano Banana", "AI Product Trial", "Prompt Engineering"],
    verificationNote: "Official Certificate of Participation signed by Indranil Guria on 25.09.2026.",
  },
  {
    id: "build-with-ai-bootcamp-kolkata",
    title: "Build with AI Bootcamp, Kolkata",
    issuingOrganization: "Google for Developers",
    issueDate: "2025",
    category: "Technical Training & Bootcamp",
    description:
      "Participated in hands-on AI application development covering Generative AI, AI agents, workflow architecture, and practical solution building.",
    featured: true,
    skills: ["Generative AI", "AI Agents", "Workflow Architecture", "Google AI"],
    verificationNote: "Certificate of Participation, Google for Developers (Listed on verified CV).",
  },

  // ==========================================
  // CATEGORY 3: HACKATHONS AND PARTICIPATION
  // ==========================================
  {
    id: "go4youth-teri-2026",
    title: "GREEN Olympiad for Youth (GO4Youth) 2026",
    issuingOrganization: "TERI (The Energy and Resources Institute)",
    issueDate: "2026",
    category: "Hackathon & Participation",
    description:
      "Conferred Certificate of Distinction by The Energy and Resources Institute (TERI) for environmental knowledge, sustainability awareness, and resource management excellence.",
    featured: true,
    skills: ["Sustainability", "Environmental Knowledge", "Resource Efficiency"],
    verificationNote: "Certificate of Distinction, TERI (Listed on verified CV).",
  },
  {
    id: "nexathon-1-0",
    title: "NEXATHON 1.0 — Technical Hackathon",
    issuingOrganization: "Brainware University",
    issueDate: "2025",
    category: "Hackathon & Participation",
    description:
      "Participant in the 36-hour rapid prototyping sprint, developing algorithms and software prototypes under intensive hackathon conditions.",
    featured: false,
    skills: ["Rapid Prototyping", "Full-Stack Development", "Team Sprints"],
    verificationNote: "Participant, Brainware University (Listed on verified CV).",
  },
  {
    id: "hackspire-25",
    title: "HackSpire’25 — Inter-College Hackathon",
    issuingOrganization: "FIEM – ACM Student Chapter",
    issueDate: "2025",
    category: "Hackathon & Participation",
    description:
      "Competed in team-based sprint challenges, architectural design, and software engineering problem statements hosted by Future Institute of Engineering and Management ACM Chapter.",
    featured: false,
    skills: ["Systems Architecture", "Collaborative Engineering", "Problem Solving"],
    verificationNote: "Participant, FIEM – ACM Student Chapter (Listed on verified CV).",
  },
  {
    id: "shaheed-bhagat-singh-legacy",
    title: "Shaheed Bhagat Singh — The Legacy Initiative",
    issuingOrganization: "MyGov India (Ministry of Electronics & IT)",
    issueDate: "2024",
    image: "/images/certificates/shaheed-bhagat-singh.jpg",
    category: "Hackathon & Participation",
    description:
      "Awarded Certificate of Participation by MyGov (Government of India) in recognition of historical inquiry and active civil engagement.",
    featured: false,
    skills: ["Civic Awareness", "National Citizen Engagement"],
    verificationNote: "Official Certificate of Participation signed by Ajit Kumar, IAS, CEO MyGov.",
  },
  {
    id: "tata-imagination-challenge-2026",
    title: "Tata Imagination Challenge 2026 — Campus Ambassador",
    issuingOrganization: "Tata Group",
    issueDate: "2026",
    category: "Hackathon & Participation",
    description:
      "Selected and onboarded to represent the Tata Imagination Challenge on campus, encourage participation, and promote innovation and entrepreneurship.",
    featured: false,
    skills: ["Campus Leadership", "Innovation Promotion", "Student Engagement"],
    verificationNote: "Selected Campus Ambassador (Listed under Leadership & Engagement on CV).",
  },
];

export const certificationCategories: {
  key: CertificationCategory | "All";
  label: string;
  badgeColor: "primary" | "secondary" | "tertiary" | "white";
}[] = [
  { key: "All", label: "All Credentials", badgeColor: "white" },
  { key: "Professional Certification", label: "Professional Certifications", badgeColor: "primary" },
  { key: "Technical Training & Bootcamp", label: "Technical Bootcamps", badgeColor: "tertiary" },
  { key: "Hackathon & Participation", label: "Hackathons & Participation", badgeColor: "secondary" },
];
