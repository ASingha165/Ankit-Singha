import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ankitsingha.dev"),
  title: "Ankit Singha — AI & Systems Engineer | Developer Portfolio",
  description:
    "Personal developer portfolio of Ankit Singha, Computer Science & Engineering undergraduate specializing in Artificial Intelligence, Machine Learning, and scalable backend architectures.",
  keywords: [
    "Ankit Singha",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Python",
    "Next.js",
    "CareerPilot-AI",
    "Detoura",
    "Portfolio",
  ],
  authors: [{ name: "Ankit Singha", url: "https://github.com/ASingha165" }],
  creator: "Ankit Singha",
  openGraph: {
    title: "Ankit Singha — AI & Systems Engineer",
    description:
      "Building Intelligent Systems. Engineering What Comes Next. Explore projects, research, and GitHub telemetry.",
    url: "https://github.com/ASingha165",
    siteName: "Ankit Singha Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Ankit Singha Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Singha — AI & Systems Engineer",
    description:
      "Building Intelligent Systems. Engineering What Comes Next.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-on-surface antialiased min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
