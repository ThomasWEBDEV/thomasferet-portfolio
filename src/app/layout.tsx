import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorHalo from "@/components/CursorHalo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Thomas Feret — Développeur Web",
    template: "%s | Thomas Feret",
  },
  description: "Portfolio professionnel — Développeur Full-stack (Next.js, Rails, TypeScript).",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Header />
        <CursorHalo />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
