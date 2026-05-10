import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import HeaderBar from "@/components/HeaderBar";
import PageTransition from "@/components/PageTransition";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resistenciavisual.vercel.app"),
  title: {
    default: "Camila Lemos — Resistencia Visual",
    template: "%s — Camila Lemos",
  },
  description: "Portafolio fotográfico de Camila Lemos. Fotografía documental y artística que explora cuerpo, territorio, memoria y vida cotidiana en Latinoamérica.",
  authors: [{ name: "Camila Lemos" }],
  creator: "Camila Lemos",
  keywords: ["fotografía", "fotografía documental", "Camila Lemos", "portafolio fotográfico", "arte visual", "Latinoamérica"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Camila Lemos — Resistencia Visual",
    title: "Camila Lemos — Resistencia Visual",
    description: "Portafolio fotográfico de Camila Lemos. Fotografía documental y artística que explora cuerpo, territorio, memoria y vida cotidiana en Latinoamérica.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camila Lemos — Resistencia Visual",
    description: "Portafolio fotográfico de Camila Lemos.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="h-full flex">
        <LanguageProvider>
          <Sidebar />
          <main className="flex-1 lg:ml-48 xl:ml-60 min-h-screen flex flex-col pt-14.25 lg:pt-0">
            <HeaderBar />
            <PageTransition>{children}</PageTransition>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
