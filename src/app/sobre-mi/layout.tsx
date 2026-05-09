import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Camila Lemos trabaja con fotografía digital y análoga. Le interesa mirar con atención los gestos mínimos, la transformación de los cuerpos y de los espacios.",
  openGraph: {
    title: "Sobre mí — Camila Lemos",
    description:
      "Camila Lemos trabaja con fotografía digital y análoga. Le interesa mirar con atención los gestos mínimos, la transformación de los cuerpos y de los espacios.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
