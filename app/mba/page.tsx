import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

export default function MBAPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="MBA Student"
        org="Kellogg School of Management"
        intro="At Kellogg, I've focused my education on building products, teams, and cultures that are highly effective and strategically sound."
        coverPhoto="/images/mba/cover-photo.jpeg"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">
        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Entrepreneurship, Product Management, and Marketing Classes</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            While Kellogg has a broad core curriculum, I&apos;ve chosen to take electives focused on entrepreneurship, product management, and marketing.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Entrepreneurship classes have focused intensively on making sure that I know who my target customer is, and how to help them. I&apos;ve gone deep into the Jobs-To-Be-Done framework, using it to interview real customers on behalf of real startups that partnered with Kellogg, as well as potential customers for potential startups that we explored through class projects.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Product management classes taught me the core competencies that product managers need to succeed, including setting product strategy, creating roadmaps, evaluating problems and solutions, and stakeholder management.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Kellogg marketing classes go beyond traditional marketing, and through them I&apos;ve learned about analyzing market opportunities, creating go-to-market plans and growth strategies, segmentation, data analytics, and branding.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Culture-Building Classes</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I&apos;ve seen first-hand how impactful a strong culture can be for both the success of the business and job satisfaction. Because of that, I chose to invest time at Kellogg into learning what makes workplace cultures healthy, and how to help when they&apos;re not.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In these classes, we covered topics like how to design organizations to meet business goals, how to engender teams with psychological safety, how to run meetings for maximum impact in minimal time, and how to increase creativity and innovations in teams.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            During many of my Kellogg classes, I worked on projects to apply what we were learning. Some of these projects were self-contained within the class, and some were on behalf of external companies. I&apos;ve highlighted a few of the projects I&apos;ve worked on below.
          </p>
        </section>

        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/mba/hidenn-ai-group-photo.jpg"
            alt="HIDENN-AI group photo"
            width={900}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <section id="project-1-creating-a-gtm-plan-for-ai-startup-hidenn-ai">
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 1: Creating a GTM plan for AI startup HIDENN-AI</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In my Commercializing Innovations class, we learned how to take scientific innovation and bring it to market. I, along with two other Kellogg students, worked with startup HIDENN-AI to create their GTM plan.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            HIDENN-AI was created by scientists at Northwestern to reduce the runtime of engineering simulations from days to minutes. When we started working with them, they had developed the theory for the technology and were working on building it out. They also had some ideas about who their customers would be and a rough idea of how they fit into the broader engineering simulation ecosystem, but they hadn&apos;t gone much further than that.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Our team completed a market analysis for them, including calculating the TAM and identifying their major competitors. We sourced and interviewed potential customers from Nike, Apple, Medtronic, and Ansys to understand their use cases, current workflows, and who the decision-makers were in their companies. We also created projected costs and milestones.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Once we&apos;d finished, we compiled it into one comprehensive GTM plan. Unfortunately that plan is confidential, and while I can&apos;t share the specifics, I encourage you to check out HIDENN-AI&apos;s website to learn more about them.
          </p>
        </section>

        <section id="project-2-neutrino">
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 2: Neutrino</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In my Product Management 101 class, we chose products we wanted to build and went through the process of creating a robust PRD, including a market evaluation, customer interviews, creating customer personas, making low-fidelity mock-ups, combining this into a robust PRD, and creating a pitch deck.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I worked on an app called Neutrino. As a science enthusiast, I&apos;ve often found that science content is either created for scientists or the general public, and is typically either too advanced or too simple for me. Neutrino provides science enthusiasts with interactive content at their level.
          </p>
          <p className="mt-4 font-semibold" style={{ fontSize: "20px" }}>Deliverables:</p>
          <div className="mt-3 flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1Ev_mliqvDKZMG7_PKB8uMHs7aLD60O1_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              PRD
            </a>
            <a
              href="https://drive.google.com/file/d/1Xc1MjP-E7AOQa_-GhT_0jAjghZ1OLd8n/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Pitch Deck (PDF)
            </a>
            <a
              href="https://docs.google.com/presentation/d/1Njm4EhgvPeOG8Wr7tOSnfq7MkreSvGe9/edit?usp=drive_link&ouid=103280114244748648740&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Pitch Deck (PPTX — download for correct formatting + speaker notes)
            </a>
          </div>
          <p className="mt-6" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            While I am not planning on taking this to market, I am currently working on building it with the help of Claude Code. Coming soon!
          </p>
        </section>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
