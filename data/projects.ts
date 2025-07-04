// data/projects.ts

export const projects = [
  {
    slug: "project-1",
    title: "Project One",
    description: "This is the first project.",
  },
  {
    slug: "project-2",
    title: "Project Two",
    description: "This is the second project.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
