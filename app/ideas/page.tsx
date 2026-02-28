import PageHeader from "../../components/PageHeader";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

export default function IdeasPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Product Management Intern"
        org="IDeaS Revenue Solutions"
        intro="At IDeaS, I experienced different phases of the product development process through four intern projects, where I did initial research, defined product requirements, drafted development epics, and ran a phased launch with enterprise clients."
        coverPhoto="/images/ideas/cover-photo.jpeg"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">
        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Introduction</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            IDeaS Revenue Solutions is a B2B SaaS company that helps hotels maximize their revenue primarily through demand forecasting and pricing optimization. I&apos;ll make sure to keep this high-level and avoid industry jargon, but they are the industry leader in this space, and if you&apos;ve ever worked in hotel management I&apos;m reasonably sure you know who they are and what they do.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I interned at IDeaS in Summer 2025 as a product management intern working on their core product (G3 RMS). I had worked with product managers in the past, usually during the development phase of different projects. At IDeaS, I had an incredible mentor who wanted me to experience the rest of the phases. He helped me pick four internship projects, ranging from early research to a phased rollout.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 1: Early Research</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            During a client summit, some clients mentioned that the pricing optimization for our flagship product (G3 RMS) didn&apos;t work for a subset of resorts. This was anonymous feedback, without a client or internal point of contact. I was asked to figure out what exactly didn&apos;t work, and how we could fix it.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I started with internal and external research—reading our documentation, learning about different resort types and how they structure their packages, and looking at what these resorts were saying about our product online. I learned how resorts used our software, and it seemed like we had implemented features to help different types of resorts. I couldn&apos;t find the issues.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I started talking to members of the team, learning how our pricing optimization worked instead of just what it did (which online resources focused on exclusively). When I learned about how the optimization model weighs different revenue sources, I realized that the resorts I&apos;d been researching had revenue streams that were completely lopsided compared to the rest of our clients. As I dug in further, this was clearly the issue.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I wrote a detailed report about the problem, as well as the recommended solution. I found that approximately 25% of all resorts used a pricing structure that we didn&apos;t yet fully support, and how we could begin supporting those clients and massively increase our foothold in that market.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 2: Defining Product Requirements</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            IDeaS had recently announced Spotlight, a platform to help marketers at hotels and resorts use forecast data to know how to best focus their marketing efforts. We had some customers that were using the beta version for an initial pilot, which was coming to an end, and we were using what we had learned to plan the roadmap for Spotlight.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I took ownership of writing the requirements for a data integration with a third-party data vendor. I collected information from customer interviews, and compared that to the schema provided by the third-party vendor, to determine what information we should buy and how we should use it to help our customers. During that process, I was very intentional to determine the end result of every piece of data—while plenty of data seemed interesting or useful, I did not include it unless I could connect it to a concrete customer outcome.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            The resulting deliverable was a completed BRD, outlining what our integration should look like, what data we should ingest, and how to use that data to benefit the customer.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 3: Writing Development Epics</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            One of our projects had a completed BRD and completed UI mock-ups and was nearly ready to be scoped by engineering.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I converted the BRD and the mock-ups into engineering epics, that were large enough to be meaningful but small enough to scope accurately. I also arranged these epics functionally into development phases, so that we could prioritize the work appropriately.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 4: Phased Enterprise Roll-Out</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Before I joined, the team had completely re-built one of the modules in our core product (G3 RMS). This represented a step-change improvement over the prior functionality, and we wanted to do a phased roll-out to mitigate the risk if anything went wrong.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            To do this roll-out, I started by identifying which of our enterprise clients were the heaviest users of this feature. I grouped clients into phases, which were spaced out enough that we could learn from each phase without dragging out the process. Then I coordinated with our marketing team, our client success team, our training team and our engineering team to align on dates and communicate with clients.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            As we rolled out the new module, I ensured that everyone completed their part in the roll-out successfully and on-schedule. I then did periodic check-ins with each client (through their success managers) and monitored for issues.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I found that the module was a success with our clients, and at the end of our roll-out I had the team move the module to general availability.
          </p>
        </section>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
