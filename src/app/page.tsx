import Image from "next/image";
import { projects } from "@/data/projects";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <header className="pt-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Salut, moi c’est <span className="text-brand-400">Thomas</span>.
        </h1>
        <p className="mt-3 text-neutral-300 max-w-2xl">
          Développeur web full-stack, spécialisé en Ruby on Rails et Next.js.
          J’aime concevoir des applis claires, performantes et utiles.
        </p>
        <div className="mt-6 flex gap-3">
          <Button href="#projets">Voir les projets</Button>
          <Button href="#contact" variant="ghost">Me contacter</Button>
        </div>
      </header>

      <section id="projets" className="pt-2">
        <h2 className="text-2xl font-bold mb-4">Projets récents</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="aspect-video relative rounded-lg overflow-hidden border border-neutral-800">
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
              <Button href={project.github} className="mt-4" variant="ghost">
                Voir sur GitHub →
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="pt-2">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className="text-neutral-400">
          Écris-moi : <a className="underline decoration-brand-500 underline-offset-4" href="mailto:thomas@example.com">thomas@example.com</a>
        </p>
      </section>
    </section>
  );
}
