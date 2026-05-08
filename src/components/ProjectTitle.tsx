"use client";

import { useProjectTitle } from "@/context/LanguageContext";

interface Props {
  slug: string;
  fallback: string;
}

export default function ProjectTitle({ slug, fallback }: Props) {
  return <>{useProjectTitle(slug, fallback)}</>;
}
