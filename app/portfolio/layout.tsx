import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Buidoza No-Code Software Development Projects",
  description: "Explore our portfolio of 300+ no-code software development projects. See our work with Glide Apps, FlutterFlow, AppSheet, and Bubble including 6FCR Profit Pro, Academy LMS, and more.",
  keywords: [
    "Buidoza portfolio",
    "no-code development projects",
    "Glide Apps portfolio",
    "FlutterFlow projects",
    "AppSheet applications",
    "Bubble web apps",
    "software development examples",
    "enterprise applications",
    "business automation projects"
  ],
  openGraph: {
    title: "Portfolio - Buidoza No-Code Software Development Projects",
    description: "Explore our portfolio of 300+ no-code software development projects. See our work with Glide Apps, FlutterFlow, AppSheet, and Bubble.",
    url: "https://buildoza.online/portfolio",
    siteName: "Buidoza",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Buidoza Portfolio - No-Code Software Development Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Buidoza No-Code Software Development Projects",
    description: "Explore our portfolio of 300+ no-code software development projects.",
    images: ["/og-portfolio.jpg"],
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 