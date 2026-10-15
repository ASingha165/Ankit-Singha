export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepageUrl: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  isArchived: boolean;
  isFork: boolean;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  name: string;
  avatarUrl: string;
  htmlUrl: string;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  location: string | null;
}

export interface LanguageStat {
  language: string;
  percentage: number;
  count: number;
  color: string;
}

export interface GitHubStats {
  totalRepos: number;
  activeReposCount: number;
  totalStars: number;
  totalForks: number;
  dominantLanguage: string;
  languageDistribution: LanguageStat[];
  lastUpdatedDate: string;
}

export interface GitHubDataResponse {
  user: GitHubUser;
  repos: GitHubRepo[];
  stats: GitHubStats;
  isLive: boolean;
  cachedAt: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Java: "#528dff",
  Python: "#8B5CF6",
  TypeScript: "#27e0a9",
  JavaScript: "#f7df1e",
  HTML: "#ff5722",
  CSS: "#2965f1",
  Shell: "#89e051",
  Default: "#8c909f",
};

// Verified fallback snapshot in case GitHub rate limits unauthenticated requests
const VERIFIED_FALLBACK_USER: GitHubUser = {
  login: "ASingha165",
  name: "Ankit Singha",
  avatarUrl: "https://avatars.githubusercontent.com/u/231328212?v=4",
  htmlUrl: "https://github.com/ASingha165",
  bio: "B.Tech CSE (AI & ML) @ Brainware University | Java Spring Boot Python | Backend & AI Developer",
  publicRepos: 5,
  followers: 1,
  following: 1,
  location: "Kolkata, India",
};

const VERIFIED_FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1001,
    name: "CareerPilot-AI",
    fullName: "ASingha165/CareerPilot-AI",
    description: "AI-powered career copilot with skill assessment, simulated interview loops, and personalized learning trajectories.",
    htmlUrl: "https://github.com/ASingha165/CareerPilot-AI",
    homepageUrl: "https://career-pilot-ai-theta-vert.vercel.app/",
    language: "TypeScript",
    stars: 1,
    forks: 0,
    updatedAt: "2025-01-15T12:00:00Z",
    isArchived: false,
    isFork: false,
    topics: ["ai", "career-copilot", "nextjs", "typescript"],
  },
  {
    id: 1002,
    name: "Detoura",
    fullName: "ASingha165/Detoura",
    description: "Geospatial travel intelligence platform using DBSCAN spatial clustering to balance regional tourism load.",
    htmlUrl: "https://github.com/ASingha165/Detoura",
    homepageUrl: "https://detoura.vercel.app/",
    language: "TypeScript",
    stars: 1,
    forks: 0,
    updatedAt: "2025-01-10T15:30:00Z",
    isArchived: false,
    isFork: false,
    topics: ["geospatial", "dbscan", "travel-tech", "nextjs"],
  },
  {
    id: 1003,
    name: "BharatBuy",
    fullName: "ASingha165/BharatBuy",
    description: "E-commerce platform and inventory system with scalable Python microservices.",
    htmlUrl: "https://github.com/ASingha165/BharatBuy",
    homepageUrl: null,
    language: "Python",
    stars: 0,
    forks: 0,
    updatedAt: "2024-12-20T10:00:00Z",
    isArchived: false,
    isFork: false,
    topics: ["python", "ecommerce", "backend"],
  },
  {
    id: 1004,
    name: "Inventory",
    fullName: "ASingha165/Inventory",
    description: "Enterprise inventory management system built with Java, relational database modeling, and structured CRUD workflows.",
    htmlUrl: "https://github.com/ASingha165/Inventory",
    homepageUrl: null,
    language: "Java",
    stars: 0,
    forks: 0,
    updatedAt: "2024-11-28T09:15:00Z",
    isArchived: false,
    isFork: false,
    topics: ["java", "spring-boot", "inventory"],
  },
  {
    id: 1005,
    name: "CurrencySwap",
    fullName: "ASingha165/CurrencySwap",
    description: "Real-time currency exchange rates and transaction workflow conversion interface.",
    htmlUrl: "https://github.com/ASingha165/CurrencySwap",
    homepageUrl: null,
    language: "HTML",
    stars: 0,
    forks: 0,
    updatedAt: "2024-10-14T08:00:00Z",
    isArchived: false,
    isFork: false,
    topics: ["finance", "currency-exchange", "javascript"],
  },
];

export function computeGitHubStats(repos: GitHubRepo[], user: GitHubUser): GitHubStats {
  const activeRepos = repos.filter((r) => !r.isArchived);
  let totalStars = 0;
  let totalForks = 0;
  const langCounts: Record<string, number> = {};

  for (const repo of repos) {
    totalStars += repo.stars;
    totalForks += repo.forks;
    if (repo.language) {
      langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
    }
  }

  const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0);
  const languageDistribution: LanguageStat[] = Object.entries(langCounts)
    .map(([language, count]) => ({
      language,
      count,
      percentage: totalLangRepos > 0 ? Math.round((count / totalLangRepos) * 100) : 0,
      color: LANGUAGE_COLORS[language] || LANGUAGE_COLORS.Default,
    }))
    .sort((a, b) => b.count - a.count);

  const dominantLanguage = languageDistribution.length > 0 ? languageDistribution[0].language : "Java / Python";
  const lastUpdated = repos.length > 0 ? repos[0].updatedAt : new Date().toISOString();

  return {
    totalRepos: user.publicRepos || repos.length,
    activeReposCount: activeRepos.length,
    totalStars,
    totalForks,
    dominantLanguage,
    languageDistribution,
    lastUpdatedDate: lastUpdated,
  };
}

export async function fetchGitHubData(username = "ASingha165"): Promise<GitHubDataResponse> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Ankit-Singha-Portfolio",
  };

  // Optional token for higher rate limits if set in server environment
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.warn(
        `GitHub API responded with status ${userRes.status}/${reposRes.status}. Using verified fallback.`
      );
      return {
        user: VERIFIED_FALLBACK_USER,
        repos: VERIFIED_FALLBACK_REPOS,
        stats: computeGitHubStats(VERIFIED_FALLBACK_REPOS, VERIFIED_FALLBACK_USER),
        isLive: false,
        cachedAt: new Date().toISOString(),
      };
    }

    const rawUser = await userRes.json();
    const rawRepos = await reposRes.json();

    if (!Array.isArray(rawRepos)) {
      throw new Error("Invalid repos format from GitHub");
    }

    const user: GitHubUser = {
      login: rawUser.login,
      name: rawUser.name || "Ankit Singha",
      avatarUrl: rawUser.avatar_url,
      htmlUrl: rawUser.html_url,
      bio: rawUser.bio,
      publicRepos: rawUser.public_repos,
      followers: rawUser.followers,
      following: rawUser.following,
      location: rawUser.location,
    };

    // Transform and filter repositories
    const repos: GitHubRepo[] = rawRepos
      // Filter out self portfolio if desired or non-project forks
      .filter((r: any) => !r.name.toLowerCase().includes("portfolio-temp"))
      .map((r: any) => ({
        id: r.id,
        name: r.name,
        fullName: r.full_name,
        description: r.description || null,
        htmlUrl: r.html_url,
        homepageUrl: r.homepage || null,
        language: r.language || null,
        stars: r.stargazers_count || 0,
        forks: r.forks_count || 0,
        updatedAt: r.updated_at,
        isArchived: r.archived || false,
        isFork: r.fork || false,
        topics: Array.isArray(r.topics) ? r.topics : [],
      }));

    const stats = computeGitHubStats(repos, user);

    return {
      user,
      repos,
      stats,
      isLive: true,
      cachedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching live GitHub data, serving verified fallback:", error);
    return {
      user: VERIFIED_FALLBACK_USER,
      repos: VERIFIED_FALLBACK_REPOS,
      stats: computeGitHubStats(VERIFIED_FALLBACK_REPOS, VERIFIED_FALLBACK_USER),
      isLive: false,
      cachedAt: new Date().toISOString(),
    };
  }
}
