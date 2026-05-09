import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import PhotoGrid from "@/components/PhotoGrid";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectTitle from "@/components/ProjectTitle";
import WipBadge from "@/components/WipBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const ogImage = project.photos[0]
    ? { url: project.photos[0].src, width: project.photos[0].width, height: project.photos[0].height, alt: project.title }
    : undefined;

  return {
    title: project.title,
    ...(project.description && { description: project.description }),
    openGraph: {
      title: `${project.title} — Camila Lemos`,
      ...(project.description && { description: project.description }),
      ...(ogImage && { images: [ogImage] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Camila Lemos`,
      ...(project.description && { description: project.description }),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="px-8 py-8">
      <div className="mb-8 max-w-xl">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <h1 className="font-(family-name:--font-cormorant) text-3xl font-light text-foreground">
            <ProjectTitle slug={project.slug} fallback={project.title} />
          </h1>
          {project.wip && <WipBadge />}
        </div>
        {project.year !== 0 && <p className="text-xs text-muted tracking-widest mb-4">{project.year}</p>}
        <ProjectDescription slug={project.slug} fallback={project.description} />
      </div>

      <PhotoGrid photos={project.photos} />
    </div>
  );
}
