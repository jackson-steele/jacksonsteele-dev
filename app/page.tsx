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
            Product manager, Kellogg MBA student, astrophysicist
          </h3>
        </section>

        {/* About me */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-8">About me</h2>
          <div className="space-y-8">
            <div>
              <details className="group">
                <summary className="cursor-pointer list-none select-none flex items-center justify-between text-xl font-semibold mb-3">
                  <span>I make technical decisions that non-technical stakeholders understand and trust</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>At Amazon Prime Air, I joined a cross-functional effort to enable drones to perform their own maintenance (software updates, log offloads, sensor calibrations, etc.). The project involved project managers focused on deployment timelines, hardware engineers concerned with drone safety, and technicians who would support the system in the field. The original technical plan would take 7 months, which didn&apos;t align with the business need.</p>
                  <p className="mt-3">I was brought in to find a faster path. After analyzing the architecture, I saw we could simplify the approach and deliver the core functionality in 2 months, with a phased rollout of the remaining functionality later. Despite being dramatically faster than our previous plan, this approach required prioritizing some features over others, and I had to get stakeholders who spoke different languages and had different priorities to buy-in.</p>
                  <p className="mt-3">I tailored my communication to each group. For product managers, I explained how the cost savings of shipping core features faster outweighed the downside of releasing features piecemeal. For hardware engineers, I walked through technical trade-offs and why the simplified architecture was just as robust. For technicians, I focused on operational simplicity and reduced maintenance burden. Rather than pushing one &quot;right answer,&quot; I made sure each team understood how the decision affected their world.</p>
                  <p className="mt-3">The result was full alignment across teams despite competing concerns. We shipped on time in 2 months, unblocking the broader deployment timeline and enabling autonomous drone maintenance.</p>
                </div>
              </details>
            </div>

            <div>
              <details className="group">
                <summary className="cursor-pointer list-none select-none flex items-center justify-between text-xl font-semibold mb-3">
                  <span>I turn ambiguous problems into shippable solutions</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>As a product management intern at IDeaS Revenue Solutions, a demand forecasting platform for hotels, I investigated years-old client feedback claiming that our software couldn&apos;t price meal plan add-ons effectively.</p>
                  <p className="mt-3">Initial research suggested this was a non-issue. We had features for pricing add-ons, and no one had heard similar complaints. The prevailing theory was user error.</p>
                  <p className="mt-3">I wasn&apos;t satisfied with this answer, so I mapped the complete user journey for setting up add-ons across different customer types. That&apos;s when I discovered the gap: hotels and all-inclusive resorts have vastly different revenue models, and we had built optimizations for each—but resorts with &quot;all-inclusive optional&quot; systems (common in EMEA) didn&apos;t fit either model. These customers were slipping through the cracks.</p>
                  <p className="mt-3">I drafted a proposal for a third optimization strategy tailored to these hybrid resorts. The research revealed this would unlock 36% of the world&apos;s resorts we were currently unable to serve well, including a major enterprise client we were actively pitching.</p>
                </div>
              </details>
            </div>

            <div>
              <details className="group">
                <summary className="cursor-pointer list-none select-none flex items-center justify-between text-xl font-semibold mb-3">
                  <span>I ship technical products that drive measurable business impact</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>At Amazon Prime Air, one of our top organizational goals was reducing drone downtime between flights to under three minutes. Drones represent massive fixed-cost investments, so maximizing flight time directly improves unit economics and profitability.</p>
                  <p className="mt-3">The biggest bottleneck from my team was the post-flight inspection process. Every drone underwent both a manual visual check and an automated telemetry check, and these were tightly coupled–meaning one couldn&apos;t start until the other finished. This coupling was killing our cycle time.</p>
                  <p className="mt-3">I led the project to decouple these checks. This required coordinating changes across multiple microservices and refactoring workflows throughout our codebase.</p>
                  <p className="mt-3">As a result, average turnaround time was reduced by 25 seconds per flight. This seemingly small improvement had cascading effects—each launch pad could now operate with two drones instead of three (one flying, one on standby that could be inspected simultaneously), improving our capital efficiency by 33%. The change also reduced technician workload by 65 hours per month, freeing them to focus on higher-value maintenance.</p>
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
