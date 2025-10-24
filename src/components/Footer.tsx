// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 mt-16 text-sm text-neutral-400">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Thomas Feret. Tous droits réservés.</p>
        <p>Fait avec Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
