"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlurImage from "@/components/BlurImage";
import { projects } from "@/data/projects";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectYear from "@/components/ProjectYear";

const REEL_ID = "7Yot3bWkxSw";

export default function PortfolioPage() {
  return (
    <div className="py-8 px-4 lg:px-16 flex flex-col items-center">
      <div className="w-full lg:w-4/6">
        {/* Reel */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${REEL_ID}?rel=0&modestbranding=1`}
              title="Reel — Camila Lemos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
        {/* Mobile: lista vertical */}
        <div className="flex flex-col gap-10 lg:hidden">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href={`/portafolio/${project.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-3/2 bg-border mb-3">
                  <BlurImage
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
                  {project.year !== "" ? <ProjectYear slug={project.slug} fallback={project.year} className="text-[10px] text-muted tracking-widest" /> : null}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop: grid 2 columnas con aire */}
        <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-14">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href={`/portafolio/${project.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-4/3 bg-border mb-4">
                  <BlurImage
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
                  {project.year !== "" ? <ProjectYear slug={project.slug} fallback={project.year} className="text-[10px] text-muted tracking-widest" /> : null}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
