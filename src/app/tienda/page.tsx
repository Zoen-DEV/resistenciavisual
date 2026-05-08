"use client";

import { useLang } from "@/context/LanguageContext";

export default function TiendaPage() {
  const { t } = useLang();

  return (
    <div className="px-8 py-8">
      <div className="max-w-lg">
        <h1 className="font-(family-name:--font-cormorant) text-3xl font-light text-foreground mb-6">
          {t.store.title}
        </h1>
        <p className="text-sm text-muted leading-relaxed">{t.store.coming}</p>
      </div>
    </div>
  );
}
