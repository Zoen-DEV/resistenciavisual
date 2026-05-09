import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Proyectos fotográficos de Camila Lemos: fotografía documental, cotidiana y artística.",
  openGraph: {
    title: "Portafolio — Camila Lemos",
    description:
      "Proyectos fotográficos de Camila Lemos: fotografía documental, cotidiana y artística.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
