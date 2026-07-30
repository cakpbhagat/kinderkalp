import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Kinez - Kindergarten & Preschool School Next.js Template",
  description: "Kinez is a vibrant, modern early-childhood school website featuring courses, activities, admissions, teachers, news, and details on flexible learning programs.",
  keywords: ["kindergarten", "preschool", "school", "childcare", "kids", "education", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
