import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen">
      <header>
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">Jackson Steele</Link>
          <nav className="flex items-center gap-6 text-sm">
            <a href="mailto:jacksonsteele8@gmail.com" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 font-light">{project.description}</p>
          {project.embedPath && (
            <div className="mt-8">
              <Link 
                href={project.embedPath} 
                className="inline-block px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Try it out
              </Link>
            </div>
          )}
        </section>
      </main>
      <footer>
        <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Jackson Steele
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}