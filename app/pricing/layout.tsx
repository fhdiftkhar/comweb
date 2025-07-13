import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Buidoza No-Code Software Development Services",
  description: "Transparent pricing for no-code software development services. Get custom quotes for Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
  keywords: [
    "no-code development pricing",
    "glide apps pricing",
    "flutterflow pricing",
    "appsheet pricing",
    "bubble development cost",
    "custom software pricing",
    "enterprise software pricing",
    "no-code platform pricing"
  ],
  openGraph: {
    title: "Pricing - Buidoza No-Code Software Development Services",
    description: "Transparent pricing for no-code software development services. Get custom quotes for Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
    url: "https://buildoza.online/pricing",
    siteName: "Buidoza",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Buidoza Pricing - No-Code Software Development"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Buidoza No-Code Software Development Services",
    description: "Transparent pricing for no-code software development services. Get custom quotes for Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
    images: ["/og-pricing.jpg"]
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
    canonical: "https://buildoza.online/pricing"
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 