"use client";

import { useLang } from "@/context/LanguageContext";

export default function WipBadge() {
  const { lang } = useLang();
  const label = lang === "es" ? "Trabajo en curso" : "Work in progress";

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-widest uppercase text-muted border border-border rounded-full whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-pulse" />
      {label}
    </span>
  );
}
