import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE = "https://resistenciavisual.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1 },
    { url: `${BASE}/portafolio`, priority: 0.9 },
    { url: `${BASE}/sobre-mi`, priority: 0.7 },
    { url: `${BASE}/contacto`, priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/portafolio/${p.slug}`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
