"use client";

import { useLang } from "@/context/LanguageContext";

export default function SobreMiPage() {
  const { t } = useLang();

  return (
    <div className="px-8 py-12 lg:py-16">
      <div className="max-w-xl">
        <div className="w-10 h-px bg-border mb-8" />
        <div className="flex flex-col gap-5">
          {t.about.bio.map((paragraph, i) => (
            <p
              key={i}
              className={`leading-relaxed ${
                i === 0
                  ? "text-base text-foreground/80"
                  : "text-sm text-muted"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
