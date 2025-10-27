import type { Metadata } from "next";
import "./globals.css";                 // ✅ import RELATIF
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Thomas Feret — Portfolio",
  description: "Développeur web — Next.js, TypeScript, Ruby on Rails, SQL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Header />
        <main className="container py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
