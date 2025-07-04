// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </main>
  );
}