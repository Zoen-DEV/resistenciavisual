"use client";

import { useLang } from "@/context/LanguageContext";

export default function SobreMiPage() {
  const { t } = useLang();

  return (
    <div className="py-8 px-4 lg:px-16 flex flex-col items-center">
      <div className="w-full lg:max-w-4/6">
        <div className="flex flex-col gap-5">
          {t.about.bio.map((paragraph, i) => (
            <p key={i} className="text-sm text-muted leading-relaxed text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
