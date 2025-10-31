import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-5 md:p-6 shadow-soft hover:border-brand-600 hover:bg-neutral-900/70 transition-all duration-300 transform hover:-translate-y-1">
      {children}
    </div>
  );
}
