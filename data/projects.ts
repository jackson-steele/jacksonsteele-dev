import React from "react";
import { heirarchyContent, neutrinoPrdContent, hidennAiContent } from "./project-content";

export type Project = {
  slug: string;
  title: string;
  description: string;
  // Rich content for the project detail page (JSX elements)
  content?: React.ReactNode;
  // Path to embedded static app under public/<slug>/ (e.g., "/rank-your-posterity/")
  embedPath?: string;
  // Optional internal details page path under Next.js routes (e.g., "/projects/rank-your-posterity")
  detailPath?: string;
};

export const projects: Project[] = [
  {
    slug: "rank-your-posterity",
    title: "Heirarchy",
    description: "A humorous webapp allowing grandparents to stack-rank their descendants, share the ranking on social media, and generate a legal will based on the ranking.",
    content: heirarchyContent,
    embedPath: "/rank-your-posterity/",
    detailPath: "/projects/rank-your-posterity",
  },
  {
    slug: "neutrino-prd",
    title: "Neutrino PRD",
    description: "Neutrino connects science enthusiasts to content that is interactive and right-leveled. In Kellogg's core product management class, I developed the idea for Neutrino from scratch, culminating in a PRD and a pitch deck (check out the speaker notes in the .pptx version for the script).",
    content: neutrinoPrdContent,
    detailPath: "/projects/neutrino-prd",
  },
  {
    slug: "internship",
    title: "Internship Stories",
    description: "Over the summer, I was a product manager intern for IDeaS Revenue Management Solutions, where I worked on four projects across the product development lifecycle: initial research, defining requirements, creating epics for developers, and running a pilot program with enterprise clients.",
    detailPath: "/projects/internship",
  },
  {
    slug: "hidenn-ai",
    title: "HIDENN-AI",
    description: "As part of my Kellogg curriculum, two other Kellogg students and I partnered with HIDENN-AI, a startup using AI to revolutionize mechanical engineering simulations, create a comprehensive GTM plan. This included analyzing the market size (TAM) and existing solutions, defining customer personas and unmet needs through customer interviews, and projecting costs and milestones. The final report is confidential, but I encourage you to check out their website below to learn more about them.",
    content: hidennAiContent,
    detailPath: "/projects/hidenn-ai",
  },
  {
    slug: "astrophysics",
    title: "Astrophysics",
    description: "Why do I call myself an astrophysicist? For most of my undergraduate degree I majored in Physics and Astronomy, where I conducted research and published several papers. Not only do I consider this a part of my personality, this is also important to my work style–my scientific approach to problem-solving, my focus on data, and my ability to explain technical concepts simply.",
    detailPath: "/projects/astrophysics",
  },
];

export const embeddedProjectSlugs = projects
  .filter((p) => Boolean(p.embedPath))
  .map((p) => p.slug);




