import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

export default function AstrophysicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Astrophysics Student and Researcher"
        org="Brigham Young University"
        intro="Why do I call myself an astrophysicist? The short answer is that I studied astrophysics in college, and I'm a coauthor on several astrophysics papers. More importantly, astrophysics has fundamentally shaped how I think and work."
        coverPhoto="/images/astrophysics/cover-photo.jpg"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">
        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Why Astrophysics, and Why Does It Matter?</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I&apos;m a curious person, and I was drawn to physics in high school because it forced me to think through problems differently than anything else I&apos;d ever done before. While the math is complicated in physics, the real challenge is to put aside your intuition, look at problems from multiple angles, and figure out what&apos;s going on. If you can do that, the math is fairly straightforward. This kind of problem-solving pushed me in new ways, and I was hooked.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            When I got to college, I latched onto astrophysics. It had all the rigor I was searching for, while also allowing me to step back and appreciate how beautiful the night sky was. One of my favorite poems, <em>When I Heard the Learn&apos;d Astronomer</em> by Walt Whitman, does a great job illustrating the tension between the study of astronomy and the beauty of astronomy:
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-6 my-6 italic" style={{ color: "rgba(0,0,0,0.7)", fontSize: "20px" }}>
            <p>When I heard the learn&apos;d astronomer,</p>
            <p>When the proofs, the figures, were ranged in columns before me,</p>
            <p>When I was shown the charts and diagrams, to add, divide, and measure them,</p>
            <p>When I sitting heard the astronomer where he lectured with much applause in the lecture-room,</p>
            <p>How soon unaccountable I became tired and sick,</p>
            <p>Till rising and gliding out I wander&apos;d off by myself,</p>
            <p>In the mystical moist night-air, and from time to time,</p>
            <p>Look&apos;d up in perfect silence at the stars.</p>
            <p className="mt-2 not-italic font-medium">— Walt Whitman</p>
          </blockquote>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I had the incredible opportunity to work on astrophysics research as an undergraduate student. I was our team&apos;s computational expert, taking data from hundreds of thousands of galaxies and modeling the results we would expect from our experiment. From this, we decided to proceed with the experiment, and our results exactly matched our predictions. We published multiple papers based on this research, and I presented my research at a national convention of astronomers.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            As an astrophysicist, I learned not to start working on a problem before I understood it, how to break problems up into smaller pieces that can be individually solved, and how to solve those pieces using data and experimentation. Each of those learnings has translated directly into my work.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Why <em>not</em> Astrophysics?</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I loved astrophysics, but I worried that my research wouldn&apos;t meaningfully change anyone&apos;s life. I think science is vitally important for our society, even if it&apos;s not directly tied to immediate uses, but I wanted my work to be at a different part of the value chain.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I decided to switch to software engineering because I felt like my work would have a more immediate impact on people&apos;s lives. I enjoyed the coding I was doing in my research, so I changed my major to Applied Physics (which let me take more computer science classes without delaying graduation) and I got a software engineering internship at Amazon.
          </p>
        </section>

        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/astrophysics/aas-photo.jpg"
            alt="American Astronomical Society meeting"
            width={900}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>What Did I Research in Astrophysics? (The Nerdy Stuff)</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            My research focused on our ability to figure out how far away galaxies are. This is a difficult problem to solve, and is important when we try to understand how these galaxies formed (which also influences our understanding of dark matter). The standard way to measure galaxy distance is expensive and requires huge telescopes, which isn&apos;t feasible in most cases. We developed a new system that we believed would work on smaller telescopes at a fraction of the time and cost.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            For my contribution, I took archival data for hundreds of thousands of galaxies and simulated the data we would get if we observed those galaxies using our new filters (this is actually where I first learned SQL and Python). My results showed that we could find galaxy distance at 10x the accuracy of the next best low-cost method. As a result of this research, we invested to have the filters built and tested them out on real telescopes looking at real galaxies, and our observational results exactly matched the simulated results.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1CSEiiG-i913Uq1Dk9AEnLXzMMqP2Ft8z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Senior Thesis
            </a>
            <a
              href="https://drive.google.com/file/d/1JgoDcOX2hTtuFxatKgw8qFLRoUDxGp0Z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              AAS Research Poster
            </a>
            <a
              href="https://iopscience.iop.org/article/10.3847/1538-3881/aafc2b"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Paper 1: Photometric Redshifts of Emission-line Galaxies
            </a>
            <a
              href="https://iopscience.iop.org/article/10.3847/1538-4357/acd10c"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Paper 2: Searching for Dwarf Hα Emission-line Galaxies
            </a>
          </div>
          <p className="mt-6" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I also conducted physics education research. Our 100-level astronomy course relied on class projects to get students outside and looking at the night sky, but the projects were outdated and inflexible. I updated these projects to align more closely with modern technology and with course goals.
          </p>
          <a
            href="https://drive.google.com/file/d/1PI5XJ7Rb4i1womRzeirQQZe-oZ7hcb7N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-fit mt-4 inline-flex"
          >
            Physics Education Research Poster
          </a>
          <p className="mt-6" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            If you&apos;d like to hear more about my story and why I left astrophysics, you can{" "}
            <a
              href="https://open.spotify.com/episode/09U1GTx2mCxezvXgNix8k0?si=afc6f119e32b4f84"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              listen to me talk about it on this podcast episode
            </a>{" "}
            (focused primarily on why I&apos;m getting an MBA and what the process was like to get into Kellogg).
          </p>
        </section>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
