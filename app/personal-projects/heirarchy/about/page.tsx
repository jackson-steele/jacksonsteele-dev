import PageHeader from "../../../../components/PageHeader";
import CallToAction from "../../../../components/CallToAction";
import Footer from "../../../../components/Footer";

export default function HeirarchyAboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Heirarchy"
        org="A tool for parents and grandparents to stack-rank their posterity and allocate inheritance accordingly"
        intro=""
        coverPhoto="/images/heirarchy/ranking.png"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">
        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Background</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I&apos;d like to preface that, above all, this is a joke.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            During a recent family reunion, someone jokingly asked the grandparents about their favorite grandchildren. We all laughed and moved on, but it got me wondering—if my grandparents had picked favorites, it would be pretty hard for them to keep track. They had their fair share of children and grandchildren (and now great-grandchildren), and their memory wasn&apos;t great near the end.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Thus, the idea was born: help grandparents stack-rank their children and grandchildren.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            When I asked myself why grandparents might want to do this, the answer was immediately obvious: so that they could weaponize their ranking to spend more quality time with their loved ones. Their primary Job-To-Be-Done was to have positive interactions with their children and grandchildren. If the best way to encourage these positive interactions was by pitting their posterity against each other in exchange for a larger inheritance, so be it.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Design Principles</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Before building Heirarchy, I outlined three design principles to guide all my design decisions.
          </p>
          <ol className="mt-4 flex flex-col gap-4 list-decimal list-inside" style={{ fontSize: "20px", color: "rgba(0,0,0,0.8)" }}>
            <li>
              <strong>Feel real.</strong> Heirarchy is funny because it&apos;s highly inappropriate but entirely plausible, and I wanted people to be (briefly) unsure whether it&apos;s real.
            </li>
            <li>
              <strong>Zero onboarding friction.</strong> Asking people to visit the website for a joke is friction enough. Users need to be able to try it out without any intermediate steps.
            </li>
            <li>
              <strong>Zero budget.</strong> This was purely for fun, and I&apos;m a student. I created this without spending a cent.
            </li>
          </ol>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Who is my customer?</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I built this for my friends, so they are my primary customer. My friends are all late-20s to early-30s, are starting to have kids, and are seeing the first signs that their parents are getting older. It&apos;s not uncommon for them to have lost some (but not all) of their grandparents, which brings thoughts of mortality to the forefront. These friends are trying to navigate family relationships across potentially four generations (from their children to their grandparents), and they know it&apos;s hard to keep in touch with everyone all the time.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In line with Design Principle #1, I wanted to make my target customer think that Heirarchy was built for a completely separate target customer—namely, their parents and grandparents. With that in mind, I designed an ICP with slightly caricatured stereotypes that my friends could easily identify.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            This ICP is US-based (as are all my friends), aged 65+, has enough descendants to pit them against each other (3+), and is middle class or upper-middle class (to justify the contest for their inheritance). They&apos;re not particularly tech-savvy, but they have basic proficiency with computers and smartphones and they spend time on Facebook (where they tend to over-share). They love their children and grandchildren, and have a strong desire to spend more time with them, although their efforts to this end are sometimes well-meaning but misguided.
          </p>
        </section>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
