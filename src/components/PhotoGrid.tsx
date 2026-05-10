"use client";

import { useState } from "react";
import BlurImage from "./BlurImage";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Photo } from "@/data/projects";

const Lightbox = dynamic(() => import("./Lightbox"), { ssr: false });

function PhotoItem({
  photo,
  index,
  onClick,
}: {
  photo: Photo;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className="group relative overflow-hidden bg-border cursor-pointer w-full block"
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
    >
      <BlurImage
        src={photo.src}
        alt={photo.alt}
        fill
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 35vw"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
    </motion.button>
  );
}

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);
  const goToPrev = () =>
    setActiveIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const goToNext = () =>
    setActiveIndex((i) => (i !== null ? (i + 1) % photos.length : null));

  // Group photos into rows following the 1-2-1-2-1 pattern
  const rowPattern = [1, 2, 1, 2, 1];
  const rows: Photo[][] = [];
  let cursor = 0;
  let patternIndex = 0;
  while (cursor < photos.length) {
    const count = rowPattern[patternIndex % rowPattern.length];
    rows.push(photos.slice(cursor, cursor + count));
    cursor += count;
    patternIndex++;
  }

  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-3 w-full lg:w-4/6 lg:self-center">
        {rows.map((row, rowIndex) => {
          const globalStart = rows.slice(0, rowIndex).reduce((acc, r) => acc + r.length, 0);
          return (
            <div
              key={rowIndex}
              className={`grid gap-3 ${row.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {row.map((photo, colIndex) => (
                <PhotoItem
                  key={photo.id}
                  photo={photo}
                  index={globalStart + colIndex}
                  onClick={() => setActiveIndex(globalStart + colIndex)}
                />
              ))}
            </div>
          );
        })}
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
