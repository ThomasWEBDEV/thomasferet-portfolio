// src/components/About.tsx
export default function About() {
  return (
    <section id="apropos" className="space-y-3 sm:space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold">À propos</h2>
      <p className="text-neutral-300 max-w-3xl text-sm sm:text-base">
        Je m’appelle <strong>Thomas Feret</strong>. Je conçois des applications web
        claires, utiles et maintenables. J’apprécie la rigueur (tests, CI), la simplicité
        (solutions lisibles, conventions) et l’amélioration continue.
      </p>
      <ul className="text-neutral-300 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 list-disc list-inside text-sm sm:text-base">
        <li><span className="text-neutral-400">Back-end</span> : Ruby on Rails, PostgreSQL</li>
        <li><span className="text-neutral-400">Front-end</span> : Next.js, TypeScript, Tailwind</li>
        <li><span className="text-neutral-400">Qualité</span> : RSpec, FactoryBot, RuboCop</li>
        <li><span className="text-neutral-400">Outils</span> : Git, Docker, CI/CD</li>
      </ul>
    </section>
  );
}
