  // app/page.tsx
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <a href={`/projects/${project.slug}`}>{project.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}