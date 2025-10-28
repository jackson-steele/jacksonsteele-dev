import Link from "next/link";

export default function InternshipPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Internship Stories</h1>
          
          <div className="mt-12">
            <div className="prose prose-lg max-w-none prose-slate">
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the summer, I was a product manager intern for IDeaS Revenue Management Solutions, where I worked on four projects across the product development lifecycle: initial research, defining requirements, creating epics for developers, and running a pilot program with enterprise clients.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 first:mt-0 border-b border-gray-200 pb-2">Projects Completed</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Initial Research</h3>
                  {/* <p className="text-gray-700 leading-relaxed">
                    I conducted comprehensive research on meal plans, analyzing market trends, customer needs, and competitive landscape to inform product strategy and development decisions.
                  </p> */}

                  <p className="text-gray-700 leading-relaxed">As a product management intern at IDeaS Revenue Solutions, a demand forecasting platform for hotels, I investigated years-old client feedback claiming that our software couldn&apos;t price meal plan add-ons effectively.</p>
                  <p className="text-gray-700 leading-relaxed mt-3">Initial research suggested this was a non-issue. We had features for pricing add-ons, and no one had heard similar complaints. The prevailing theory was user error.</p>
                  <p className="text-gray-700 leading-relaxed mt-3">I wasn&apos;t satisfied with this answer, so I mapped the complete user journey for setting up add-ons across different customer types. That&apos;s when I discovered the gap: hotels and all-inclusive resorts have vastly different revenue models, and we had built optimizations for each—but resorts with &quot;all-inclusive optional&quot; systems (common in EMEA) didn&apos;t fit either model. These customers were slipping through the cracks.</p>
                  <p className="text-gray-700 leading-relaxed mt-3">I drafted a proposal for a third optimization strategy tailored to these hybrid resorts. The research revealed this would unlock 36% of the world&apos;s resorts we were currently unable to serve well, including a major enterprise client we were actively pitching.</p>

                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Drafting Requirements</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We had a completely new product that we were developing for a new target segment. I took ownership of drafting the requirements for a third-party data integration in this new project. This included using information from customer interviews to craft personas and understand user needs, as well as collaborating with the data provider to understand what was possible.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">This resulted in the creation of a BRD, including detailed user stories and acceptance criteria.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Development Epics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Another project had completed the requirements phase, and was moving into development. I created comprehensive epics for the engineering team, breaking the requirements down into manageable development tasks and ensuring clear communication between product and engineering teams.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Launch</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I ran the launch of a redesigned feature within our core product, starting with a phased pilot rollout to seven enterprise clients. This required me to coordinate with engineering, customer success, and marketing teams to ensure a smooth launch.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Key Learnings:</strong> This internship provided me with hands-on experience across the entire product development lifecycle, from initial research and requirements gathering to epic creation and client-facing pilot programs. I gained valuable insights into enterprise software development, stakeholder management, and the complexities of launching new features in a B2B environment.
                </p>
              </div>
            </div>
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
