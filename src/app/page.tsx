import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubDashboard from "@/components/GitHubDashboard";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { fetchGitHubData } from "@/lib/github";

export const revalidate = 3600; // ISR 1 hour

export default async function HomePage() {
  const initialGitHubData = await fetchGitHubData("ASingha165");

  return (
    <div className="relative min-h-screen bg-background text-on-surface flex flex-col">
      {/* Scroll indicator bar */}
      <ScrollProgress />

      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full flex-grow">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <GitHubDashboard initialData={initialGitHubData} />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
