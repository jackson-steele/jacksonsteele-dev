import Image from "next/image";
import Link from "next/link";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

interface ProjectCard {
  image: string;
  title: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

const projects: ProjectCard[] = [
  {
    image: "/images/personal-projects/heirarchy-card.png",
    title: "Heirarchy",
    description:
      "Finally, a tool that combines estate planning with stack-ranking your loved ones.",
    primaryButton: { label: "Try it out", href: "/personal-projects/heirarchy" },
    secondaryButton: { label: "Learn more", href: "/personal-projects/heirarchy/about" },
  },
  {
    image: "/images/personal-projects/location-based-notes-card.png",
    title: "Location-Based Campaigns",
    description:
      "When I play D&D, I like my notes to be organized spatially. I couldn’t find a free tool to do that, so I built one.",
    primaryButton: { label: "Learn more", href: "/personal-projects/dnd-location-based-notes" },
  },
  {
    image: "/images/personal-projects/statistically-nearest-spider-card.jpg",
    title: "Statistically Nearest Spider",
    description:
      "It’s commonly claimed that you’re never more than 3 feet away from a spider. I did the math.",
    primaryButton: { label: "Try it out", href: "/personal-projects/statistically-nearest-spider" },
  },
];

export default function PersonalProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <h1 className="mb-4">Personal Projects</h1>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 gap-3">
                <h5>{project.title}</h5>
                <p style={{ fontSize: "18px", color: "rgba(0,0,0,0.7)" }}>{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-auto pt-4">
                  <Link href={project.primaryButton.href} className="btn btn-primary">
                    {project.primaryButton.label}
                  </Link>
                  {project.secondaryButton && (
                    <Link href={project.secondaryButton.href} className="btn btn-secondary">
                      {project.secondaryButton.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming soon */}
        <div className="mt-20">
          <h3 className="mb-4" style={{ fontSize: "36px" }}>More Coming Soon</h3>
          <p style={{ fontSize: "20px", color: "rgba(0,0,0,0.7)" }}>
            I&apos;m always building things that I either find useful, interesting, or funny. Most of my projects don&apos;t make it here, but feel free to come back and see if I&apos;ve added anything new!
          </p>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
