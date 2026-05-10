"use client";

import { useLang } from "@/context/LanguageContext";

interface Props {
  slug: string;
  fallback: string;
}

export default function ProjectDescription({ slug, fallback }: Props) {
  const { t } = useLang();
  const text = (t.projects.descriptions as Record<string, string | undefined>)[slug] ?? fallback;

  return (
    <div className="flex flex-col gap-3 max-full">
      {text.split("\n").map((paragraph, i) => (
        <p key={i} className="text-sm text-muted leading-relaxed text-justify">{paragraph}</p>
      ))}
    </div>
  );
}
