export type Project = {
  slug: string;
  title: string;
  description: string;
  // Path to embedded static app under public/<slug>/ (e.g., "/rank-your-posterity/")
  embedPath?: string;
  // Optional internal details page path under Next.js routes (e.g., "/projects/rank-your-posterity")
  detailPath?: string;
};

export const projects: Project[] = [
  {
    slug: "rank-your-posterity",
    title: "Rank Your Posterity",
    description: "A React + TypeScript app to rank hypothetical descendants by traits.",
    embedPath: "/rank-your-posterity/",
    detailPath: "/projects/rank-your-posterity",
  },
  // Add new projects here following the same shape
];

export const embeddedProjectSlugs = projects
  .filter((p) => Boolean(p.embedPath))
  .map((p) => p.slug);




