// app/projects/page.tsx
import Link from "next/link";
import { projects } from "@/data/projects";

export const dynamic = "force-static"; // Required for static export

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
