import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">Jackson Steele</Link>
          <nav className="flex items-center gap-6 text-sm">
          <a
              href="https://www.linkedin.com/in/jackson-steele/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="/Jackson%20Steele%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Resume
            </a>
            <a href="mailto:jacksonsteele8@gmail.com" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Hi 👋 I&apos;m Jackson.</h1>
          <h3 className="mt-6 text-xl md:text-2xl text-gray-600 font-light">
            {/* I&apos;m a product manager, MBA student, software developer, and astrophysicist. */}
            Product manager, Kellogg MBA student, astrophysicist
          </h3>
        </section>

        {/* About me */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-8">About me</h2>

          {/* <p className="text-md mb-8">After studying physics at BYU, I spent three years as a software developer at Amazon. Now, I&apos;m pursuing an MBA at the Kellogg School of Management. As a product manager, I help teams in three key areas.</p> */}
          <p className="text-md mb-8">With a background in software development and astrophysics, I bring a fresh problem-solving approach to building products. Here’s what you should know about me:</p>

          <div className="space-y-8">
            <div>
              <details className="group">
                <summary className="cursor-pointer list-none select-none flex items-center justify-between text-xl font-semibold mb-3">
                  <span>I uncover blind spots by obsessing over the customer journey.</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p><em>example of when I&apos;ve done this</em></p>
                </div>
              </details>
            </div>

            <div>
              <details className="group">
                <summary className="cursor-pointer list-none select-none flex items-center justify-between text-xl font-semibold mb-3">
                  <span>I bridge technical and non-technical worlds</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p><em>example of when I&apos;ve done this</em></p>
                </div>
              </details>
            </div>

            <div>
              <details className="group">
                <summary className="cursor-pointer list-none select-none flex items-center justify-between text-xl font-semibold mb-3">
                  <span>I blend data and intuition for practical decision-making</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p><em>example of when I&apos;ve done this</em></p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* About you */}
        {/* <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-8">About you</h2>
          <p className="text-lg mb-6">I'm looking for companies that excel in:</p>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Speed and innovation</h3>
            <h3 className="text-xl font-semibold">Kindness and authenticity</h3>
            <h3 className="text-xl font-semibold">Customer experience</h3>
          </div>
        </section> */}

        {/* Projects */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-8">Projects</h2>
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.slug} className="py-4">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-600 mt-1">{p.description}</p>
                </div>
                <div className="mt-3 flex items-center gap-6">
                  {p.embedPath && (
                    <Link href={p.embedPath} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Try it
                    </Link>
                  )}
                  {p.detailPath && (
                    <Link href={p.detailPath} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact me */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-8">Contact me</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:jacksonsteele8@gmail.com"
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/jackson-steele/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/Jackson%20Steele%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
            >
              Resume
            </a>
          </div>
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
