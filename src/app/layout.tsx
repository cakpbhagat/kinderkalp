import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://kinderkalp.com"; // Replace with your live domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Kinder Kalp Preschool & Daycare | Best Preschool in Surat",
    template: "%s | Kinder Kalp Preschool & Daycare",
  },

  description:
    "Kinder Kalp Preschool & Daycare in Surat provides a safe, joyful and nurturing environment where children learn through play, creativity and hands-on experiences. Admissions now open.",

  applicationName: "Kinder Kalp Preschool & Daycare",

  keywords: [
    "Kinder Kalp",
    "Kinder Kalp Preschool",
    "Kinder Kalp Daycare",
    "Preschool in Surat",
    "Best Preschool in Surat",
    "Daycare in Surat",
    "Kindergarten Surat",
    "Play School Surat",
    "Early Childhood Education",
    "Toddler Care",
    "Nursery School",
    "Kindergarten",
    "Preschool",
    "Childcare",
    "Kids School",
    "Ghod Dod Road Preschool",
    "Surat Preschool",
  ],

  authors: [
    {
      name: "Kinder Kalp Preschool & Daycare",
    },
  ],

  creator: "Kinder Kalp Preschool & Daycare",

  publisher: "Kinder Kalp Preschool & Daycare",

  category: "Education",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Kinder Kalp Preschool & Daycare",

    title: "Kinder Kalp Preschool & Daycare | Best Preschool in Surat",

    description:
      "Helping children learn, explore and grow through joyful experiences in a safe and nurturing environment.",

    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Kinder Kalp Preschool & Daycare",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kinder Kalp Preschool & Daycare",

    description:
      "A safe, joyful and nurturing preschool & daycare in Surat.",

    images: ["/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    // Add these after verifying ownership
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // yandex: "...",
    // yahoo: "...",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}