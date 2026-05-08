"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, type Lang } from "@/context/LanguageContext";
import ES from "country-flag-icons/react/3x2/ES";
import GB from "country-flag-icons/react/3x2/GB";

const options: { value: Lang; label: string; Flag: React.ComponentType<{ className?: string }> }[] = [
  { value: "es", label: "ES", Flag: ES },
  { value: "en", label: "EN", Flag: GB },
];

export default function LanguageSelector() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors cursor-pointer select-none"
      >
        {lang.toUpperCase()}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-0 top-full mt-2 w-20 bg-background border border-border shadow-sm overflow-hidden z-50"
          >
            {options.map(({ value, label, Flag }) => (
              <button
                key={value}
                onClick={() => { setLang(value); setOpen(false); }}
                className={`w-full px-3 py-2 text-xs tracking-widest uppercase text-left flex items-center gap-1.5 transition-colors cursor-pointer ${
                  lang === value
                    ? "text-foreground font-medium bg-border/40"
                    : "text-muted hover:text-foreground hover:bg-border/20"
                }`}
              >
                {label}
                <Flag className="w-4 h-auto inline-block" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
