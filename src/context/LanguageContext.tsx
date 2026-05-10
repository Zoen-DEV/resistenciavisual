"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      portfolio: "Portafolio",
      store: "Tienda",
      contact: "Contacto",
    },
    home: {
      recentProject: "Proyecto reciente",
      portfolio: "Portafolio",
    },
    about: {
      title: "Camila Lemos",
      bio: [
        "Trabajo con fotografía digital, a veces, análoga.",
        "Me interesa mirar con atención los gestos mínimos, la transformación de los cuerpos y de los espacios. Fotografiar es una forma de detenerme, de entender cómo el tiempo atraviesa lo que somos y lo que habitamos.",
        "Caminar, viajar y observar son verbos que me acompañan junto a la cámara, entendida como una herramienta de conexión entre el momento vivido y el después. La fotografía se convierte entonces en una imagen cuyo significado cambia según el tiempo y el lugar desde donde se observa, pero que no pierde su esencia: evocar la memoria y resignificarla.",
        "Trabajo principalmente con luz natural y escenas cotidianas. Busco ese lugar donde lo simple se vuelve significativo, retratando lo de siempre como si fuera la primera vez.",
      ],
    },
    projects: {
      titles: {
        "cuerpo-territorio": "Cuerpo-Territorio: Cartografías de la memoria y el tiempo.",
        "cotidiana": "Cotidiana",
        "lo-que-comemos": "Lo que comemos",
        "hecha-un-vistazo": "Hecha un vistazo",
      },
      descriptions: {
        cotidiana: "Registros fotográficos que observan lo que ocurre en la vida diaria, en espacios públicos y situaciones no intervenidas. La imagen se construye desde la atención a los gestos mínimos, encuentros espontáneos y los ritmos de la calle o el hogar, capturando así escenas que revelan lo cotidiano desde una mirada sensible.\nMás que documentar, busco encontrar sentido y narrativas en lo aparentemente ordinario.",
        "lo-que-comemos": "En pueblos y ciudades, las plazas de mercado son centros de abastecimiento alimenticio, cultural y social, puntos de encuentro; espacios llenos de gentes trabajadoras por el sustento propio y de su comunidad.\nEncontramos frutas, verduras, hierbas, semillas, productos lácteos, venta de carnes, artesanías, desayunos, almuerzos, cenas, pa picar y tomar, dulcecitos, chucherías, ropas y un sin fin de saberes, de raíces, años de lucha y resistencia de vidas que vienen y traen a nosotrxs la alegría de los alimentos y un espacio para llegar a estos a precios amigables (si no tenemos la opción de cultivar en casa) para compartir y ¡para comeeeer!.",
      },
    },
    store: {
      title: "Tienda",
      coming: "Próximamente — impresiones de edición limitada disponibles para su compra.",
    },
    contact: {
      title: "Contacto",
      intro: "Si tienes interés en mi trabajo, quieres conversar o tienes cualquier otro motivo para entrar en contacto, puedes escribirme a",
      email: "visual.resistencia@gmail.com",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      store: "Store",
      contact: "Contact",
    },
    home: {
      recentProject: "Recent project",
      portfolio: "Portfolio",
    },
    about: {
      title: "Camila Lemos",
      bio: [
        "I work with digital photography, and occasionally with analog.",
        "I'm interested in paying close attention to subtle gestures and to the ways bodies and spaces transform. Photographing is a way for me to pause, to understand how time moves through what we are and what we inhabit.",
        "Walking, traveling, and observing accompany my practice. I approach the camera as a tool for connection between the lived moment and what comes after. Photography becomes an image whose meaning shifts over time and from different perspectives, while retaining its essence: to evoke and reframe memory.",
        "I work primarily with natural light and everyday scenes, seeking the point where the simple becomes meaningful—portraying the familiar as if seen for the first time.",
      ],
    },
    projects: {
      titles: {
        "cuerpo-territorio": "Body-Territory: Cartographies of Memory and Time.",
        "cotidiana": "Daily",
        "lo-que-comemos": "What we eat",
        "hecha-un-vistazo": "Take a Look",
      },
      descriptions: {
        cotidiana: "Photographic records that observe what unfolds in daily life, in public spaces and unposed situations. The image is built through attention to subtle gestures, spontaneous encounters, and the rhythms of the street or the home, capturing scenes that reveal the everyday through a sensitive gaze.\nMore than documenting, I seek to find meaning and narratives in what appears to be ordinary.",
        "lo-que-comemos": "In both rural and urban contexts, market plazas operate as spaces of exchange that extend beyond food. They are sites where economic, cultural, and social dynamics converge, sustained by the labor of those who cultivate, prepare, and distribute.\nFruits, vegetables, herbs, meats, and prepared foods coexist with crafts, informal economies, and everyday interactions. These spaces hold layered histories of knowledge, resilience, and collective sustenance, shaping how food circulates and how communities gather around it.\nThis body of work approaches the market as a living archive—one that reveals the relationships between food, territory, and shared forms of survival and care.",
      },
    },
    store: {
      title: "Store",
      coming: "Coming soon — limited edition prints available for purchase.",
    },
    contact: {
      title: "Contact",
      intro: "If you are interested in my work, would like to connect, or have any other reason to reach out, feel free to email me at",
      email: "visual.resistencia@gmail.com",
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = (typeof translations)["es"];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLang(): Lang {
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export function useProjectTitle(slug: string, fallback: string): string {
  const { t } = useLang();
  return (t.projects.titles as Record<string, string | undefined>)[slug] ?? fallback;
}
