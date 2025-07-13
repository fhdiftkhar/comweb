import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Buidoza - Get Your No-Code Software Development Quote",
  description: "Contact Buidoza for custom no-code software development. Get quotes for Glide Apps, FlutterFlow, AppSheet, and Bubble development. 24/7 support available.",
  keywords: [
    "contact buidoza",
    "no-code development quote",
    "glide apps development",
    "flutterflow development",
    "appsheet development",
    "bubble development",
    "software development contact",
    "custom app development",
    "enterprise software solutions"
  ],
  openGraph: {
    title: "Contact Buidoza - Get Your No-Code Software Development Quote",
    description: "Contact Buidoza for custom no-code software development. Get quotes for Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
    url: "https://buildoza.online/contact",
    siteName: "Buidoza",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Buidoza - No-Code Software Development"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Buidoza - Get Your No-Code Software Development Quote",
    description: "Contact Buidoza for custom no-code software development. Get quotes for Glide Apps, FlutterFlow, AppSheet, and Bubble development.",
    images: ["/og-contact.jpg"]
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
    canonical: "https://buildoza.online/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 