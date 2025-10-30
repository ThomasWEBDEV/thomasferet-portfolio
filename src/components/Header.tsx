// src/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/#projets", label: "Projets" },
  { href: "/#apropos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/80 border-b border-neutral-900">
      <div className="container px-4 md:px-0 flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="font-semibold tracking-tight text-sm sm:text-base">
          TF<span className="text-brand-400">•</span>Portfolio
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${active ? "text-white" : "text-neutral-300 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden rounded-lg border border-neutral-800 px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-neutral-800 py-2">
          <nav className="container px-4 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm text-neutral-300 hover:bg-neutral-900 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
