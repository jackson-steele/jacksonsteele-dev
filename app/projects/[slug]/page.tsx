import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">Jackson Steele</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/projects" className="hover:underline">Projects</Link>
            <a href="mailto:jackson@example.com" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">{project.description}</p>
          {project.embedPath && (
            <p className="mt-6">
              <Link href={project.embedPath} className="underline">Open embedded app</Link>
            </p>
          )}
        </section>
      </main>
      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Jackson Steele
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}


