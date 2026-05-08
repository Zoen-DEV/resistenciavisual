import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import PhotoGrid from "@/components/PhotoGrid";
import ProjectDescription from "@/components/ProjectDescription";

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
  return { title: `${project.title} — Camila Lemos` };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="px-8 py-8">
      <div className="mb-8 max-w-xl">
        <h1 className="font-(family-name:--font-cormorant) text-3xl font-light text-foreground mb-2">
          {project.title}
        </h1>
        <p className="text-xs text-muted tracking-widest mb-4">{project.year}</p>
        <ProjectDescription slug={project.slug} fallback={project.description} />
      </div>

      <PhotoGrid photos={project.photos} />
    </div>
  );
}
