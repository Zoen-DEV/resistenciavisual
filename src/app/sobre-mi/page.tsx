"use client";

import BlurImage from "@/components/BlurImage";
import { useLang } from "@/context/LanguageContext";
import { cldUrl, cldBlur } from "@/lib/cloudinary";

export default function SobreMiPage() {
  const { t } = useLang();

  return (
    <div className="py-8 px-4 lg:px-16 flex flex-col items-center">
      <div className="w-full lg:max-w-4/6 flex flex-col gap-10">
        <div className="relative overflow-hidden w-4/8 self-center" style={{ aspectRatio: "3/2" }}>
          <BlurImage
            src={cldUrl("Varios/47230003_opxkyp")}
            alt="Camila Lemos"
            fill
            placeholder="blur"
            blurDataURL={cldBlur("Varios/47230003_opxkyp")}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>

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
