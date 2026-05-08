"use client";

import { useLang } from "@/context/LanguageContext";

export default function ContactoPage() {
  const { t } = useLang();

  return (
    <div className="px-8 py-8">
      <div className="max-w-lg">
        <h1 className="font-(family-name:--font-cormorant) text-3xl font-light text-foreground mb-6">
          {t.contact.title}
        </h1>
        <p className="text-sm text-muted leading-relaxed">{t.contact.intro}</p>
        <a
          href="mailto:hola@camila-lemos.com"
          className="mt-4 block text-sm text-foreground hover:opacity-60 transition-opacity"
        >
          hola@camila-lemos.com
        </a>
      </div>
    </div>
  );
}
