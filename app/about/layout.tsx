import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Buidoza - No-Code Software Development Company",
  description: "Learn about Buidoza, a leading no-code software development company with 300+ projects completed. Specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
  keywords: [
    "about buidoza",
    "no-code development company",
    "glide apps development",
    "flutterflow development",
    "appsheet development",
    "bubble development",
    "software development company",
    "enterprise software solutions",
    "custom app development"
  ],
  openGraph: {
    title: "About Buidoza - No-Code Software Development Company",
    description: "Learn about Buidoza, a leading no-code software development company with 300+ projects completed. Specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
    url: "https://buildoza.online/about",
    siteName: "Buidoza",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Buidoza - No-Code Software Development Company"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Buidoza - No-Code Software Development Company",
    description: "Learn about Buidoza, a leading no-code software development company with 300+ projects completed. Specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
    images: ["/og-about.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://buildoza.online/about"
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 