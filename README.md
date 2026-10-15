# Ankit Singha — Personal Developer Portfolio

> **Cinematic Dark × Futuristic AI × Professional Developer Portfolio**

A personal developer portfolio website designed with Google Stitch's *Obsidian Kinetic* design system and engineered using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Motion for React**, and live **GitHub REST API** telemetry.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom *Obsidian Kinetic* design tokens
- **Animations**: Motion for React (`motion/react`)
- **Icons**: Lucide React
- **API Integration**: GitHub REST API (ISR cached, rate-limit resilient)
- **Deployment Target**: Vercel Edge / Serverless

---

## 📁 Project Structure

```
.
├── public/
│   ├── images/
│   │   ├── profile.jpg                      # Official verified photograph
│   │   ├── logo.png                         # AS monogram tech logo
│   │   └── certificates/                    # Verified credentials (Google & MyGov)
│   └── resume.pdf                           # Official curriculum vitae PDF
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── github/
│   │   │       └── route.ts                 # Server-side GitHub telemetry endpoint
│   │   ├── globals.css                      # Design tokens, glassmorphism, scrollbars
│   │   ├── layout.tsx                       # Space Grotesk, Inter, JetBrains Mono & SEO
│   │   └── page.tsx                         # Assembled single-page portfolio
│   ├── components/
│   │   ├── Navbar.tsx                       # Sticky glass nav, active tracking, DP badge
│   │   ├── Hero.tsx                         # Editorial hero, real DP portrait, AI tensor map
│   │   ├── About.tsx                        # Narrative, quantitative metrics, 3 pillar cards
│   │   ├── Skills.tsx                       # Categorized technical toolkits
│   │   ├── FeaturedProjects.tsx             # Curated systems showcase
│   │   ├── ProjectCard.tsx                  # Reusable card with conditional live links
│   │   ├── ProjectPreviews.tsx              # Specialized interactive telemetry previews
│   │   ├── GitHubDashboard.tsx              # Live API dashboard, stats & tabbed viewer
│   │   ├── Achievements.tsx                 # Timeline with interactive certificate modal
│   │   ├── Contact.tsx                      # 1-click email copy & direct dispatch console
│   │   ├── Footer.tsx                       # Monogram, copyright, back-to-top
│   │   └── ScrollProgress.tsx               # Top spring progress bar
│   ├── data/
│   │   ├── site-config.ts                   # Central personal information configuration
│   │   ├── projects.ts                      # Curated featured projects data
│   │   ├── skills.ts                        # Categorized technical skills
│   │   └── achievements.ts                  # Real milestones and certifications
│   └── lib/
│       └── github.ts                        # GitHub API fetcher, stats computer & fallback
└── stitch_ankit_singha_developer_portfolio/ # Preserved Google Stitch design assets
```

---

## 🚀 Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run Production Build**:
   ```bash
   npm run build
   npm start
   ```

4. **Run TypeScript Check**:
   ```bash
   npx tsc --noEmit
   ```

---

## ⚙️ Configuration & Environment Variables

Create `.env.local` if you wish to override defaults:

```env
# Optional: Increase GitHub API rate limit for high-traffic environments
GITHUB_TOKEN=your_personal_access_token_here

# Optional: Configurable site URL for OpenGraph metadata
NEXT_PUBLIC_SITE_URL=https://ankitsingha.dev

# Optional: Configurable LinkedIn profile URL
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/ankit-singha
```

---

## 🚢 Deploying to Vercel

1. Push this repository to your GitHub account (`ASingha165`).
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js** (automatically detected).
4. Build Command: `next build` (default).
5. Output Directory: `.next` (default).
6. Click **Deploy**.
