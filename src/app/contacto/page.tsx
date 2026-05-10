"use client";

import { useLang } from "@/context/LanguageContext";

export default function ContactoPage() {
  const { t } = useLang();

  return (
    <div className="py-8 px-4 lg:px-16 flex flex-col items-center lg:items-start">
      <div className="w-full lg:max-w-4/6">
        <p className="text-sm text-muted leading-relaxed">
          {t.contact.intro}{" "}
          <a
            href={`mailto:${t.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-60 transition-opacity"
          >
            {t.contact.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
