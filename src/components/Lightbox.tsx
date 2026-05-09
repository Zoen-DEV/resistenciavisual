"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Photo } from "@/data/projects";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const photo = currentIndex !== null ? photos[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-white/60 hover:text-white transition-colors text-2xl leading-none z-10"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
            {(currentIndex ?? 0) + 1} / {photos.length}
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 text-white/50 hover:text-white transition-colors p-4 text-xl"
            aria-label="Anterior"
          >
            ←
          </button>

          {/* Image */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-[85vw] max-h-[88vh]"
            style={{
              width:
                photo.width > photo.height
                  ? "min(85vw, 1100px)"
                  : "min(55vw, 700px)",
              aspectRatio: `${photo.width} / ${photo.height}`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 85vw"
              priority
            />
          </motion.div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 text-white/50 hover:text-white transition-colors p-4 text-xl"
            aria-label="Siguiente"
          >
            →
          </button>

          {/* Caption */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wide">
            {photo.alt}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
