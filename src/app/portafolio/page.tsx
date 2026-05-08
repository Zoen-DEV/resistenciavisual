"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectTitle from "@/components/ProjectTitle";

export default function PortfolioPage() {
  return (
    <div className="px-4 py-6 lg:px-8 lg:py-8">
      {/* Mobile: lista vertical */}
      <div className="flex flex-col lg:hidden">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/portafolio/${project.slug}`}
            className={`group block py-6 ${i < projects.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="relative overflow-hidden aspect-3/2 bg-border mb-3 lg:mb-0">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                sizes="100vw"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <p className="font-(family-name:--font-cormorant) text-xl font-light text-foreground">
                <ProjectTitle slug={project.slug} fallback={project.title} />
              </p>
              <p className="text-xs text-muted">{project.year}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop: grid 2 columnas */}
      <div className="hidden lg:grid grid-cols-2 gap-1">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portafolio/${project.slug}`}
            className="group block relative overflow-hidden aspect-[4/3] bg-border"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <p className="text-white font-(family-name:--font-cormorant) text-lg font-medium leading-tight">
                <ProjectTitle slug={project.slug} fallback={project.title} />
              </p>
              <p className="text-white/70 text-xs mt-0.5">{project.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
