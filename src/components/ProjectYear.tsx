"use client";

import { useLang } from "@/context/LanguageContext";

interface Props {
  year: string | { es: string; en: string };
}

export default function ProjectYear({ year }: Props) {
  const { lang } = useLang();

  const displayYear = typeof year === "string" ? year : year[lang];

  return <p className="text-xs text-muted tracking-widest mt-1 mb-4">{displayYear}</p>;
}
