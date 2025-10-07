import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
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
        <section className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">A curated list of apps and experiments.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <div key={p.slug} className="border rounded-lg p-5 flex flex-col gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
                </div>
                <div className="flex gap-3 mt-auto">
                  {p.detailPath && (
                    <Link href={p.detailPath} className="text-sm underline">Details</Link>
                  )}
                  {p.embedPath && (
                    <Link href={p.embedPath} className="text-sm underline">Open App</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
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




