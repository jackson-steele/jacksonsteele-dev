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
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Research on Meal Plans</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I conducted comprehensive research on meal plans, analyzing market trends, customer needs, and competitive landscape to inform product strategy and development decisions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Requirements for Spotlight</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I created detailed requirements for Spotlight, working closely with stakeholders to define functionality, user stories, and acceptance criteria for this new product feature.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Epics for Contracted Allotments</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I developed comprehensive epics for Contracted Allotments, breaking down complex features into manageable development tasks and ensuring clear communication between product and engineering teams.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Launch of Decision Configuration Module</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I ran the launch of the new Decision Configuration Module, coordinating with enterprise clients, managing the pilot program, and ensuring successful rollout of this critical product feature.
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
