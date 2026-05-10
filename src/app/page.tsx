"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useLang } from "@/context/LanguageContext";
import { cldUrl } from "@/lib/cloudinary";
import ProjectYear from "@/components/ProjectYear";

const featured = projects[0];
const homeImage = cldUrl("home/1_ps3szf", "full");

export default function HomePage() {
  const { t } = useLang();

  return (
    <div className="relative h-[calc(100vh-57px)] lg:h-screen overflow-hidden">
      {/* Hero image — full bleed */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={homeImage}
          alt={featured.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay — suave, solo en la parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
      </motion.div>

      {/* Caption bottom-left */}
      <motion.div
        className="absolute bottom-10 left-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link href={`/portafolio/${featured.slug}`} className="group block">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-1">
            {t.home.recentProject}
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-white text-3xl font-light leading-tight group-hover:opacity-80 transition-opacity">
            {featured.title}
          </h2>
          <ProjectYear slug={featured.slug} fallback={featured.year} className="text-white/50 text-xs mt-1" />
        </Link>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="hidden lg:flex absolute bottom-10 right-10 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase rotate-90 origin-center">
          {t.home.portfolio}
        </span>
        <Link
          href="/portafolio"
          className="text-white/40 hover:text-white/80 transition-colors text-xs tracking-widest"
        >
          →
        </Link>
      </motion.div>
    </div>
  );
}
