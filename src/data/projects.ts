export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  description: string;
  coverImage: string;
  photos: Photo[];
}

export const projects: Project[] = [
  {
    slug: "habitarnos-en-el-tiempo",
    title: "Habitarnos en el tiempo",
    year: 2024,
    description:
      "Una exploración visual sobre la memoria y los espacios que habitamos. Retratos del paso del tiempo en lugares cotidianos.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    photos: [
      {
        id: "h1",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        alt: "Montañas al amanecer",
        width: 1200,
        height: 800,
      },
      {
        id: "h2",
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
        alt: "Paisaje natural",
        width: 1200,
        height: 800,
      },
      {
        id: "h3",
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        alt: "Bruma en el valle",
        width: 800,
        height: 1200,
      },
      {
        id: "h4",
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
        alt: "Bosque con luz",
        width: 1200,
        height: 800,
      },
      {
        id: "h5",
        src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
        alt: "Sendero en el bosque",
        width: 800,
        height: 1200,
      },
      {
        id: "h6",
        src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80",
        alt: "Lago de montaña",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "cotidiana",
    title: "Cotidiana",
    year: 2024,
    description:
      "Lo extraordinario en lo ordinario. Una serie sobre los momentos que pasan desapercibidos en la vida diaria.",
    coverImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
    photos: [
      {
        id: "c1",
        src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&q=80",
        alt: "Calle urbana",
        width: 1200,
        height: 800,
      },
      {
        id: "c2",
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
        alt: "Ciudad de noche",
        width: 1200,
        height: 800,
      },
      {
        id: "c3",
        src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
        alt: "Arquitectura urbana",
        width: 800,
        height: 1200,
      },
      {
        id: "c4",
        src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1200&q=80",
        alt: "Mercado local",
        width: 1200,
        height: 800,
      },
      {
        id: "c5",
        src: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80",
        alt: "Persona en la ciudad",
        width: 800,
        height: 1200,
      },
      {
        id: "c6",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
        alt: "Camino urbano",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "lo-que-comemos",
    title: "Lo que comemos",
    year: 2023,
    description:
      "Un estudio sobre la relación entre la cultura y la alimentación. La mesa como espacio de encuentro y memoria.",
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    photos: [
      {
        id: "lc1",
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
        alt: "Mesa con comida",
        width: 1200,
        height: 800,
      },
      {
        id: "lc2",
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
        alt: "Ingredientes frescos",
        width: 1200,
        height: 800,
      },
      {
        id: "lc3",
        src: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&q=80",
        alt: "Detalle de plato",
        width: 800,
        height: 1200,
      },
      {
        id: "lc4",
        src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
        alt: "Preparación",
        width: 1200,
        height: 800,
      },
      {
        id: "lc5",
        src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&q=80",
        alt: "Especias y colores",
        width: 800,
        height: 1200,
      },
      {
        id: "lc6",
        src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
        alt: "Desayuno",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "hecha-un-vistazo",
    title: "Hecha un vistazo",
    year: 0,
    description:
      "",
    coverImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    photos: [
      {
        id: "hv1",
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
        alt: "Reflejo en el agua",
        width: 1200,
        height: 800,
      },
      {
        id: "hv2",
        src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=1200&q=80",
        alt: "Amanecer en el mar",
        width: 1200,
        height: 800,
      },
      {
        id: "hv3",
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        alt: "Carretera al horizonte",
        width: 800,
        height: 1200,
      },
      {
        id: "hv4",
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
        alt: "Valle al atardecer",
        width: 1200,
        height: 800,
      },
      {
        id: "hv5",
        src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
        alt: "Cascada en el bosque",
        width: 800,
        height: 1200,
      },
      {
        id: "hv6",
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
        alt: "Cima de montaña",
        width: 1200,
        height: 800,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
