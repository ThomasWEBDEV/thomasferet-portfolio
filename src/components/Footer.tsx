// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 md:py-10 mt-12 md:mt-16 text-sm text-neutral-400">
      <div className="container px-4 md:px-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Thomas Feret — Tous droits réservés.</p>
        <nav className="flex flex-wrap gap-3">
          <a href="mailto:thomas@example.com" className="hover:text-white">Email</a>
          <a href="https://github.com/ThomasWEBDEV" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
