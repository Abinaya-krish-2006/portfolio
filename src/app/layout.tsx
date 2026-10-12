import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abinaya G | Aspiring Full Stack Developer",
  description:
    "Personal brand portfolio of Abinaya G — B.Tech Information Technology student & aspiring Full Stack Developer. Passionate about building modern web applications, scalable backends, and responsive user interfaces.",
  keywords: [
    "Abinaya G",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Information Technology",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Abinaya G" }],
  openGraph: {
    title: "Abinaya G | Aspiring Full Stack Developer",
    description:
      "Explore the personal portfolio, engineering journey, and technical projects of Abinaya G.",
    siteName: "Abinaya G Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAFAFA] text-[#111827] antialiased selection:bg-[#ECE9FE] selection:text-[#6D5EF8]">
        {children}
      </body>
    </html>
  );
}
