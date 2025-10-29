import Image from "next/image";
import { projects } from "@/data/projects";
import Card from "@/components/Card";
import Button from "@/components/Button";
import About from "@/components/About";
import Hero3D from "@/components/Hero3D";

export default function HomePage() {
  return (
    <section className="space-y-16">
      <section className="relative overflow-hidden rounded-2xl border border-neutral-900 px-6 py-16 md:py-24 bg-neutral-950/60">
        <Hero3D />
        <h1 className="hero-title text-5xl md:text-7xl">
          Salut, moi c’est <span className="text-gradient">Thomas</span>.
        </h1>
        <p className="hero-sub mt-4">
          Développeur web full-stack (Rails &amp; Next.js). J’aime les interfaces claires,
          les perfs et un code maintenable.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="#projets">Voir les projets</Button>
          <Button href="#contact" variant="ghost">Me contacter</Button>
        </div>
      </section></FadeIn>

      <FadeIn delay={0.2}><section id="projets" className="pt-2">
        <h2 className="text-2xl font-bold mb-4">Projets récents</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              {/* ✅ wrapper avec hauteur explicite */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden border border-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Button href={project.github} variant="ghost">Voir sur GitHub →</Button>
                {"demo" in project && project.demo ? (
                  <Button href={project.demo}>Démo</Button>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </section></FadeIn>

      <About />

      <section id="contact" className="pt-2">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className="text-neutral-400">
          Écris-moi : <a className="underline decoration-brand-500 underline-offset-4" href="mailto:thomas@example.com">thomas@example.com</a>
        </p>
      </section></FadeIn>
    </section></FadeIn>
  );
}
