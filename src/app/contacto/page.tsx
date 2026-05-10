"use client";

import BlurImage from "@/components/BlurImage";
import { useLang } from "@/context/LanguageContext";
import { cldUrl, cldBlur } from "@/lib/cloudinary";

export default function ContactoPage() {
  const { t } = useLang();

  return (
    <div className="py-8 px-4 lg:px-16 flex flex-col items-center">
      <div className="w-full lg:w-4/6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden bg-border rounded-sm order-2 lg:order-1 shadow-sm" style={{ aspectRatio: "3/4" }}>
            <BlurImage
              src={cldUrl("Varios/WhatsApp_Image_2020-08-29_at_11.26.37_1_am0h7d")}
              alt={t.contact.title}
              fill
              placeholder="blur"
              blurDataURL={cldBlur("Varios/WhatsApp_Image_2020-08-29_at_11.26.37_1_am0h7d")}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <p className="text-base text-foreground leading-relaxed text-justify">
              {t.contact.intro}{" "}
              <a
                href={`mailto:${t.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:opacity-70 transition-opacity duration-300"
              >
                {t.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
