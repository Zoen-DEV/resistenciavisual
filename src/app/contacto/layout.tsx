import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultas de proyectos, licencias y colaboraciones con Camila Lemos.",
  openGraph: {
    title: "Contacto — Camila Lemos",
    description:
      "Consultas de proyectos, licencias y colaboraciones con Camila Lemos.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
