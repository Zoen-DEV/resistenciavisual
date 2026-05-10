"use client";

import { useLang } from "@/context/LanguageContext";

interface Props {
  slug: string;
  fallback: string;
  className?: string;
}

export default function ProjectYear({ slug, fallback, className = "text-xs text-muted tracking-widest mt-1 mb-4" }: Props) {
  const { t } = useLang();
  const year = (t.projects.years as Record<string, string | undefined>)[slug] ?? fallback;

  return <p className={className}>{year}</p>;
}
