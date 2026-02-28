import PageHeader from "../../components/PageHeader";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

export default function AmazonPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Software Development Engineer"
        org="Amazon"
        intro="At Amazon, I learned to ship software quickly and reliably, even when deadlines were tight and we were under-resourced, and I grew from a coder into a builder."
        coverPhoto="/images/amazon/cover-photo.jpeg"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">
        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Introduction</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I worked as a software development engineer for Amazon for three years, starting as an intern in summer 2020 and returning full time as a Software Development Engineer I in 2021. I was promoted to Software Developer Engineer II in October 2023, and I left to pursue my MBA in summer 2024.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I was a part of Prime Air, Amazon&apos;s drone delivery system, where my team owned a full-stack asset management platform. This was used to track all of Prime Air&apos;s drones, batteries, and support equipment, making sure that everything was accounted for and in working order.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Transitioning from Coder to Builder</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            When I started, I was right out of college and would consider myself a coder. I knew how to code and I liked writing code, but I was a task-taker, working on whatever I was told to do.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Two experiences I had at Amazon drastically changed my perspective.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            First, I took ownership of a project for the first time. As an internal tool, we didn&apos;t have robust UX/UI support, and in partnership with my PM I was able to help define the user experience. I then worked with fellow engineers to create a technical design, which I later implemented. I felt an incredible sense of ownership over my project and, increasingly, my team&apos;s product as a whole.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Second, I spent a couple days alongside our customers, getting to know them and how they used our software. I thought I understood them, but when I saw them actually using the software, everything clicked. While I knew that our work as engineers was important, I felt like the technical decisions we made were far less interesting to me than the user experience decisions made by our PM, and I started doing my work thinking heavily about my customers.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            These experiences kickstarted my journey from being a coder (who, as I&apos;m defining it, cares primarily about coding) into a builder (who feels ownership for the product and cares about creating something genuinely useful).
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Putting It to the Test</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            As I grew from a coder into a builder, I took on more responsibility in my team. I started owning larger projects, training new team members, and representing my team in cross-functional meetings. I made decisions based on how it would impact our customers first and foremost.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            The true test of this growth came in January 2024, when five members of our seven-person team (including my manager) transferred to other departments within Amazon. This was the beginning of an important year with mission-critical projects, and suddenly my team consisted of me, a junior engineer, another senior engineer from our sister team, and a new manager. Over the next several months we brought on two more junior engineers (both of whom had been interns elsewhere in Amazon the summer before). Suddenly, I found myself juggling an every-other-week on-call rotation with trying to bring four people up to speed while also trying to keep our deadlines from slipping.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            The first thing I did was jump onto the most mission-critical project. It had recently been estimated that my team&apos;s part in the project would take seven months, which was much longer than we were expecting. I started attending a weekly cross-functional sync with members of other teams that were working on this project, and after discussing some trade-offs with them I re-architected a plan that reduced our development time from seven months to two months.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I then worked with my manager to evaluate which projects on the roadmap were not mission-critical. I made sure the documentation was clear and up-to-date on those projects, and then we paused them.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Finally, I met for one hour each day with the new members of my team to share everything I could about our product. I recorded these meetings and uploaded them to a shared location, where they could be shown to future teammates. Before any of this had started, I had been accepted into an MBA program, and my team knew that I would be leaving in the summer. This was meant to be enduring reference material for the team.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            As a result of these efforts, we finished our high-priority project before the deadline, and our other projects (that hadn&apos;t been paused) were on-track. The new teammates were growing into their roles quickly, and were strong, contributing members before I left for my MBA program.
          </p>
        </section>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
