"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import LanguageSelector from "@/components/LanguageSelector";
import { useLang } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

export default function HeaderBar() {
  const pathname = usePathname();
  const { t } = useLang();

  if (pathname === "/") {
    return (
      <header className="hidden lg:block absolute top-4 right-6 z-50">
        <LanguageSelector />
      </header>
    );
  }

  const crumbs = buildCrumbs(pathname, t);

  return (
    <header className="px-8 py-4 border-b border-border shrink-0 flex items-center justify-between">
      <Breadcrumb crumbs={crumbs} />
      <LanguageSelector />
    </header>
  );
}

function buildCrumbs(pathname: string, t: ReturnType<typeof useLang>["t"]) {
  if (pathname === "/portafolio") {
    return [{ label: t.nav.portfolio }];
  }

  if (pathname.startsWith("/portafolio/")) {
    const slug = pathname.replace("/portafolio/", "");
    const project = projects.find((p) => p.slug === slug);
    return [
      { label: t.nav.portfolio, href: "/portafolio" },
      { label: project?.title ?? slug },
    ];
  }

  if (pathname === "/sobre-mi") return [{ label: t.nav.about }];
  if (pathname === "/tienda") return [{ label: t.nav.store }];
  if (pathname === "/contacto") return [{ label: t.nav.contact }];

  return [];
}
