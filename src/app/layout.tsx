import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thomas Feret — Portfolio",
  description: "Développeur web — Next.js, TypeScript, Ruby on Rails, SQL.",
  openGraph: {
    title: "Thomas Feret — Portfolio",
    description: "Projets, compétences et parcours.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Thomas Feret — Portfolio" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Feret — Portfolio",
    description: "Projets, compétences et parcours.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <div className="container">
          <Header />
          <main className="py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
