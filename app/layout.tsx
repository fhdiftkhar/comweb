import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Buidoza - No-Code Software Development Experts | Glide Apps, FlutterFlow, AppSheet",
    template: "%s | Buidoza"
  },
  description: "Buidoza is a leading no-code software development company specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble. We build enterprise-level applications with 300+ projects completed and 5+ years of experience.",
  keywords: [
    "no-code development",
    "Glide Apps development",
    "FlutterFlow development", 
    "AppSheet development",
    "Bubble development",
    "custom software",
    "enterprise applications",
    "business automation",
    "mobile app development",
    "web application development",
    "software consulting",
    "digital transformation"
  ],
  authors: [{ name: "Buidoza Team" }],
  creator: "Buidoza",
  publisher: "Buidoza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
      metadataBase: new URL('https://buildoza.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
          url: 'https://buildoza.online',
    siteName: 'Buidoza',
    title: 'Buidoza - No-Code Software Development Experts',
    description: 'Leading no-code software development company specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble. 300+ projects completed.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Buidoza - No-Code Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buidoza - No-Code Software Development Experts',
    description: 'Leading no-code software development company specializing in Glide Apps, FlutterFlow, AppSheet, and Bubble.',
    images: ['/og-image.jpg'],
    creator: '@buidoza',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
