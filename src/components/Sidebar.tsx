"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";
import { useLang } from "@/context/LanguageContext";
import ProjectTitle from "@/components/ProjectTitle";
import LanguageSelector from "@/components/LanguageSelector";

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isProjectActive = (slug: string) => pathname === `/portafolio/${slug}`;
  const isPortfolioSection = pathname.startsWith("/portafolio");

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-background border-b border-border">
        <Link href="/" className="font-(family-name:--font-cormorant) text-lg font-semibold tracking-tight text-foreground">
          Camila Lemos
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex flex-col gap-1.5 cursor-pointer p-1"
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-1.75" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-1.75" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background pt-16 px-6 pb-8 flex flex-col">
          <nav className="flex flex-col gap-2 text-base mt-4">
            <MobileNavLink href="/" active={isHome} onClick={closeMenu}>{t.nav.home}</MobileNavLink>
            <MobileNavLink href="/sobre-mi" active={pathname === "/sobre-mi"} onClick={closeMenu}>{t.nav.about}</MobileNavLink>
            <MobileNavLink href="/portafolio" active={isPortfolioSection} onClick={closeMenu}>{t.nav.portfolio}</MobileNavLink>
            {isPortfolioSection && (
              <ul className="ml-4 flex flex-col gap-1 mt-1">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/portafolio/${project.slug}`}
                      onClick={closeMenu}
                      className={`block py-1 text-sm transition-colors outline-none ${
                        isProjectActive(project.slug) ? "text-foreground font-medium" : "text-muted"
                      }`}
                    >
                      <ProjectTitle slug={project.slug} fallback={project.title} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {/* <MobileNavLink href="/tienda" active={pathname === "/tienda"} onClick={closeMenu}>{t.nav.store}</MobileNavLink> */}
            <MobileNavLink href="/contacto" active={pathname === "/contacto"} onClick={closeMenu}>{t.nav.contact}</MobileNavLink>
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full flex-col px-6 py-8 z-40 bg-background border-r border-border w-48 xl:w-60">
        <div className="mb-10">
          <Link
            href="/"
            className="font-(family-name:--font-cormorant) text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity text-foreground"
          >
            Camila Lemos
          </Link>
          <p className="font-(family-name:--font-cormorant) italic text-[11px] text-muted mt-1 leading-snug tracking-wide">
            Resistencia Visual
          </p>
          <div className="mt-3 w-6 h-px bg-border" />
        </div>

        <nav className="flex-1 flex flex-col gap-1 text-sm">
          <NavLink href="/" active={isHome}>{t.nav.home}</NavLink>
          <NavLink href="/sobre-mi" active={pathname === "/sobre-mi"}>{t.nav.about}</NavLink>

          <div className="mt-1">
            <NavLink href="/portafolio" active={isPortfolioSection}>{t.nav.portfolio}</NavLink>
            {isPortfolioSection && (
              <ul className="mt-1 ml-3 flex flex-col gap-0.5">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/portafolio/${project.slug}`}
                      className={`block py-1 text-xs transition-colors outline-none ${
                        isProjectActive(project.slug)
                          ? "text-foreground font-medium"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      <ProjectTitle slug={project.slug} fallback={project.title} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* <NavLink href="/tienda" active={pathname === "/tienda"}>{t.nav.store}</NavLink> */}
          <NavLink href="/contacto" active={pathname === "/contacto"}>{t.nav.contact}</NavLink>
        </nav>
      </aside>
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`block py-1.5 text-sm transition-colors outline-none ${active ? "text-foreground font-medium" : "text-muted hover:text-foreground"}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, active, onClick, children }: { href: string; active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-2 text-base transition-colors border-b border-border/50 outline-none ${active ? "text-foreground font-medium" : "text-muted"}`}
    >
      {children}
    </Link>
  );
}
