import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Engineer Portfolio | ORANTS Internship",
  description: "AI Engineer internship portfolio showcasing projects in AI automation, data analysis, mobile development, and intelligent systems.",
  keywords: ["AI Engineer", "Portfolio", "Next.js", "Python", "Flutter", "Machine Learning", "OpenAI"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "AI Engineer Portfolio",
    description: "Explore my AI engineering projects and internship work",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
