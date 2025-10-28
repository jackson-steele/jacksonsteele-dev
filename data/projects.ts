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
    title: "Neutrino",
    description: "Neutrino connects science enthusiasts to content that is interactive and right-leveled. In Kellogg's core product management class, I came up with the idea for Neutrino, did customer interviews, and created requirements, culminating in a PRD and a pitch deck.",
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
    description: "As part of my Kellogg curriculum, two other Kellogg students and I created a GTM plan for AI startup HIDENN-AI",
    content: hidennAiContent,
    detailPath: "/projects/hidenn-ai",
  },
  {
    slug: "astrophysics",
    title: "Astrophysics",
    description: "Why do I call myself an astrophysicist? The short answer is that I studied astrophysics in school, and I'm a coauthor on several astrophysics papers. Astrophysics has fundamentally shaped how I work. If you'd like to learn more, please click the link below.",
    detailPath: "/projects/astrophysics",
  },
];

export const embeddedProjectSlugs = projects
  .filter((p) => Boolean(p.embedPath))
  .map((p) => p.slug);




