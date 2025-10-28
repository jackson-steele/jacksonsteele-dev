import Link from "next/link";

export default function AstrophysicsPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Astrophysics</h1>
          
          <div className="mt-12">
            <div className="prose prose-lg max-w-none prose-slate">
              <p className="text-gray-700 leading-relaxed mb-6">
                I spent the majority of my undergrad majoring in Physics and Astronomy, and I was deeply involved in that department as a student, teaching assistant, researcher, and club officer.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 first:mt-0 border-b border-gray-200 pb-2">Research Focus</h2>
              
                <p className="text-gray-700 leading-relaxed mb-4">
                  My research focused on our ability to figure out how far away galaxies are. This is a difficult problem to solve, and is important when we try to understand how these galaxies formed (which also influences our understanding of dark matter). The standard way to measure galaxy distance requires huge telescopes, which isn&apos;t feasible in most cases. We developed a new system that we believed would work on smaller telescopes at a fraction of the time and cost.
                </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                For my contribution, I took archival data for hundreds of thousands of galaxies and simulated the data we would expect if we observed those galaxies using our new filters (this is where I learned SQL and Python). My results showed that we could find galaxy distance at 10x the accuracy of the next best low-cost method. As a result of this research, we invested to have the filters built and tested them out on real telescopes looking at real galaxies, and our observational results exactly matched my simulated results.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-200 pb-2">Physics Education Research</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I also conducted physics education research. Our 100-level astronomy course relied on class projects to get students outside and looking at the night sky, but the projects were outdated and inflexible. I updated these projects to align more closely with modern technology and with course goals.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-200 pb-2">Publications & Presentations</h2>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Senior Thesis</h3>
                  <p className="text-gray-700 mb-2">Comprehensive research on galaxy distance measurement methods</p>
                  <a 
                    href="https://drive.google.com/file/d/1CSEiiG-i913Uq1Dk9AEnLXzMMqP2Ft8z/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Read my senior thesis →
                  </a>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Research Papers</h3>
                  <p className="text-gray-700 mb-2">Co-authored papers published in peer-reviewed journals</p>
                  <div className="space-y-2">
                    <a 
                      href="https://iopscience.iop.org/article/10.3847/1538-3881/aafc2b" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 underline"
                    >
                      Paper 1: Galaxy Distance Measurements →
                    </a>
                    <a 
                      href="https://iopscience.iop.org/article/10.3847/1538-4357/acd10c" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 underline"
                    >
                      Paper 2: Advanced Filtering Techniques →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Conference Presentations</h3>
                  <p className="text-gray-700 mb-2">Presented research at national American Astronomical Society meetings</p>
                  <div className="space-y-2">
                    <a 
                      href="https://drive.google.com/file/d/1JgoDcOX2hTtuFxatKgw8qFLRoUDxGp0Z/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 underline"
                    >
                      Galaxy Distance Research Poster →
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1PI5XJ7Rb4i1womRzeirQQZe-oZ7hcb7N/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 underline"
                    >
                      Physics Education Research Poster →
                    </a>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-200 pb-2">My Story</h2>
              
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you&apos;d like to hear more about my story and why I left astrophysics, you can listen to me talk about it on this podcast episode (focused primarily on why I&apos;m getting an MBA and what the process was like to get into Kellogg).
                </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <a 
                  href="https://open.spotify.com/episode/09U1GTx2mCxezvXgNix8k0?si=afc6f119e32b4f84" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-lg font-medium"
                >
                  Listen to the podcast episode →
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Why Astrophysics Matters to My Work:</strong> My background in astrophysics has shaped my approach to problem-solving, data analysis, and technical communication. The scientific method, attention to detail, and ability to explain complex concepts simply are skills I bring to every project I work on.
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
