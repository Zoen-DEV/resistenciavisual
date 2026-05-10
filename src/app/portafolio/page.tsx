import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectTitle from "@/components/ProjectTitle";

export default function PortfolioPage() {
  return (
    <div className="py-8 px-4 lg:px-16 flex flex-col items-center">
      <div className="w-full lg:w-4/6">
        {/* Mobile: lista vertical */}
        <div className="flex flex-col gap-10 lg:hidden">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portafolio/${project.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden aspect-3/2 bg-border mb-3">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  sizes="100vw"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-(family-name:--font-cormorant) text-xl font-light text-foreground">
                  <ProjectTitle slug={project.slug} fallback={project.title} />
                </p>
                {project.year !== "" && <p className="text-[10px] text-muted tracking-widest">{project.year}</p>}
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: grid 2 columnas con aire */}
        <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portafolio/${project.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden aspect-4/3 bg-border mb-4">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  sizes="40vw"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-(family-name:--font-cormorant) text-lg font-light text-foreground group-hover:opacity-60 transition-opacity duration-300">
                  <ProjectTitle slug={project.slug} fallback={project.title} />
                </p>
                {project.year !== "" && <p className="text-[10px] text-muted tracking-widest">{project.year}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
