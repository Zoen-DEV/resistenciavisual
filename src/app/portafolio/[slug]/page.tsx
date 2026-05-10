import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import PhotoGrid from "@/components/PhotoGrid";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectYear from "@/components/ProjectYear";
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
    <div className="py-8 px-4 lg:px-16 flex flex-col items-center gap-8 lg:gap-12">
      <div className="mb-4 lg:mb-10 w-full lg:max-w-4/6 flex flex-col gap-4">
        <div className="flex items-baseline gap-4 mb-1">
          <h1 className="font-(family-name:--font-cormorant) text-3xl font-light text-foreground">
            <ProjectTitle slug={project.slug} fallback={project.title} />
          </h1>
          {project.wip && <WipBadge />}
        </div>
        {project.year !== "" ? <ProjectYear slug={project.slug} fallback={project.year} /> : null}
        <ProjectDescription slug={project.slug} fallback={project.description} />
      </div>

      <PhotoGrid photos={project.photos} />
    </div>
  );
}
