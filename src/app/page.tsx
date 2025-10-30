import Image from "next/image";
import { projects } from "@/data/projects";
import Card from "@/components/Card";
import Button from "@/components/Button";
import About from "@/components/About";
import Hero3D from "@/components/Hero3D";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <section className="space-y-12 md:space-y-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-2xl border border-neutral-900 px-4 sm:px-6 md:px-8 py-12 md:py-20 bg-neutral-950/60">
          <Hero3D />
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Salut, moi c’est <span className="text-gradient">Thomas</span>.
          </h1>
          <p className="hero-sub mt-3 sm:mt-4 max-w-[70ch]">
            Développeur web full-stack (Rails &amp; Next.js). J’aime les interfaces claires,
            les perfs et un code maintenable.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="#projets">Voir les projets</Button>
            <Button href="#contact" variant="ghost">Me contacter</Button>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section id="projets" className="pt-1 sm:pt-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Projets récents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                {/* Wrapper image responsive (hauteurs adaptatives) */}
                <div className="relative w-full h-44 sm:h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden border border-neutral-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-3 md:mt-4 text-base sm:text-lg font-semibold">{project.title}</h3>
                <p className="mt-1.5 md:mt-2 text-sm text-neutral-400">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[11px] sm:text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3 md:mt-4 flex flex-col sm:flex-row gap-2">
                  <Button href={project.github} variant="ghost">Voir sur GitHub →</Button>
                  {"demo" in project && project.demo ? (
                    <Button href={project.demo}>Démo</Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.3}>
        <About />
      </FadeIn>

      <FadeIn delay={0.35}>
        <section id="contact" className="pt-1 sm:pt-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact</h2>
          <p className="text-neutral-400">
            Écris-moi : <a className="underline decoration-brand-500 underline-offset-4" href="mailto:thomas@example.com">thomas@example.com</a>
          </p>
        </section>
      </FadeIn>
    </section>
  );
}
