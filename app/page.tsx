import Link from "next/link";

export default function Home() {
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
        <section className="max-w-5xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Software Engineer & Builder</h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
              I design and build modern web applications. Explore selected projects and embedded apps below.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/projects" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">
                View Projects
              </Link>
              <a href="mailto:jackson@example.com" className="px-4 py-2 rounded-md border">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="h-40 w-40 md:h-56 md:w-56 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl">
              JS
            </div>
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
