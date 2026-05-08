"use client";

import { useLang } from "@/context/LanguageContext";

export default function SobreMiPage() {
  const { t } = useLang();

  return (
    <div className="px-8 py-8">
      <div className="max-w-lg">
        <h1 className="font-(family-name:--font-cormorant) text-3xl font-light text-foreground mb-6">
          {t.about.title}
        </h1>
        <div className="flex flex-col gap-4">
          {t.about.bio.map((paragraph, i) => (
            <p key={i} className="text-sm text-muted leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
