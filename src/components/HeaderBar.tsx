"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import LanguageSelector from "@/components/LanguageSelector";
import { useLang, useProjectTitle } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

export default function HeaderBar() {
  const pathname = usePathname();
  const { t } = useLang();

  const slug = pathname.startsWith("/portafolio/")
    ? pathname.replace("/portafolio/", "")
    : null;
  const project = slug ? projects.find((p) => p.slug === slug) : null;
  const projectTitle = useProjectTitle(slug ?? "", project?.title ?? slug ?? "");

  if (pathname === "/") {
    return (
      <header className="hidden lg:block absolute top-4 right-6 z-50">
        <LanguageSelector />
      </header>
    );
  }

  const crumbs = buildCrumbs(pathname, t, projectTitle);

  return (
    <header className="px-8 py-4 border-b border-border shrink-0 flex items-center justify-between">
      <Breadcrumb crumbs={crumbs} />
      <LanguageSelector />
    </header>
  );
}

function buildCrumbs(pathname: string, t: ReturnType<typeof useLang>["t"], projectTitle: string) {
  if (pathname === "/portafolio") {
    return [{ label: t.nav.portfolio }];
  }

  if (pathname.startsWith("/portafolio/")) {
    return [
      { label: t.nav.portfolio, href: "/portafolio" },
      { label: projectTitle },
    ];
  }

  if (pathname === "/sobre-mi") return [{ label: t.nav.about }];
  if (pathname === "/tienda") return [{ label: t.nav.store }];
  if (pathname === "/contacto") return [{ label: t.nav.contact }];

  return [];
}
