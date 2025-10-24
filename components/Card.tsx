import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5 shadow-soft hover:border-neutral-700 transition">
      {children}
    </div>
  );
}
