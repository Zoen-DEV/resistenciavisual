"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Photo } from "@/data/projects";

const Lightbox = dynamic(() => import("./Lightbox"), { ssr: false });

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const goToPrev = () =>
    setActiveIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));

  const goToNext = () =>
    setActiveIndex((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <>
      <div
        className="gap-1"
        style={{
          columns: "3 240px",
          columnGap: "4px",
        }}
      >
        {photos.map((photo, index) => (
          <motion.button
            key={photo.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden bg-border cursor-pointer w-full block mb-1"
            style={{
              breakInside: "avoid",
              aspectRatio: `${photo.width} / ${photo.height}`,
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </motion.button>
        ))}
      </div>

      <Lightbox
        photos={photos}
        currentIndex={activeIndex}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
}
