import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";
import ClassAccordion from "../../components/ClassAccordion";

export default function MBAPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="MBA Student"
        org="Kellogg School of Management"
        intro="At Kellogg, I've focused my education on building products, teams, and cultures that are highly effective and strategically sound."
        coverPhoto="/images/mba/cover-photo.webp"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">
        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Entrepreneurship and Product Management Classes</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            While Kellogg has a broad core curriculum, I&apos;ve chosen to take many electives focused on entrepreneurship and product management.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            My entrepreneurship classes have focused intensively on making sure that I know who my target customer is, and how to help them. I&apos;ve gone deep into the Jobs-To-Be-Done framework, using it to interview real customers on behalf of real startups that partnered with Kellogg, as well as potential customers for potential startups that we explored through class projects.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            My product management classes taught me the core competencies that product managers need to succeed, including setting product strategy, creating roadmaps, evaluating problems and solutions, and stakeholder management.
          </p>
          <ClassAccordion
            label="Entrepreneurship/Product Management Classes I've Taken"
            items={[
              {
                name: "New Venture Discovery",
                description: "Form teams of 3-5 students and build a startup in 10 weeks. Primary focus was on conducting JTBD interviews to find product-market fit, using those interviews to create prototypes as experiments, and building a pitch deck.",
              },
              {
                name: "Product Management for Technology Companies",
                description: "Take a product idea and turn it into a comprehensive PRD. This included market sizing, customer interviews, wireframing, journey mapping, etc. ",
                linkText: "See my deliverables below.",
                linkHref: "#project-2-neutrino",
              },
              {
                name: "Commercializing Innovations",
                description: "In groups of 2-3 students, help a pre-revenue, Northwestern-based startup by creating a comprehensive Go-To-Market plan, including market sizing, financial projections, identifying an ICP and conducting customer interviews, and milestones to get to their first paying customers.",
                linkText: "Learn more below.",
                linkHref: "#project-1-creating-a-gtm-plan-for-ai-startup-hidenn-ai",
              },
              {
                name: "Technology & Innovation Strategy",
                description: "Case-based course evaluating what strategic choices to pursue in innovative, high-growth companies.",
              },
              {
                name: "Building Innovation Teams & Cultures",
                description: "Case-based course highlighting how to make teams and cultures that are uniquely suited for innovation.",
              },
            ]}
          />
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Marketing Classes</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I am a marketing major at Kellogg, where I&apos;ve learned how to connect customer insights to create marketing strategy and creative execution. I&apos;ve done everything from writing surveys and analyzing survey data in R, to writing positioning statements, creating growth strategies, writing creative briefs, and building brands from scratch. I especially enjoy taking what I learn about customers to shape how these products show up in the world.
          </p>
          <ClassAccordion
            label="Marketing Classes I've Taken"
            items={[
              {
                name: "Marketing Management",
                description: "Case-based core marketing course, where I learned about segmentation, targeting, positioning statements, the four P's, etc.",
              },
              {
                name: "Marketing Research & Analytics",
                description: "In teams of 5 students, we learned best practices for survey writing and analysis, culminating in a research project for an actual startup. We used R to analyze survey data, doing factor/cluster analysis, perceptual maps, and conjoint analysis (among other things), with a goal to identify segments, select targets, and determine what features mattered most to them.",
              },
              {
                name: "Marketing Strategy for Growth and Defense",
                description: "A deep dive into Kellogg's expanded Ansoff Matrix to create robust growth plans for companies.",
              },
              {
                name: "Customer Analytics",
                description: "A technical course studying how to use data for effective personalization in marketing campaigns. The core of the class was answering the questions \"If we have customer X, which offer should we send them?\" or \"If we have offer Y, which customers should we send it to?\" Explored logistic regressions, neural networks, decision trees, experimental design, and more.",
              },
              {
                name: "Advertising Strategy",
                description: "We learned how to write effective creative briefs and evaluate whether the resulting creative execution delivered on the strategy. The focus was on ensuring advertisements engage customers, align with brand strategy and existing brand equity, and communicate positioning clearly.",
                linkText: "See one of my assignments below.",
                linkHref: "#project-4-ad-strat-storyboard",
              },
              {
                name: "Startup Branding",
                description: "In teams of 5 students, create a brand for a fictional startup from scratch, starting by choosing an ICP, developing a strategy, and using that strategy to inform branding decisions.",
                linkText: "See my team's deliverables below.",
                linkHref: "#project-3-startup-branding-fibarra",
              },
              {
                name: "Launching New Products & Services (Currently Enrolled)",
                description: "Case-based course studying how to bring new products and services to market in established companies, focusing on customer needs, sales forecasts, and creating a launch plan (including targeting, positioning, communication, pricing, and distribution decisions).",
              },
              {
                name: "AI-Native Marketing (Currently Enrolled)",
                description: "Exploring new best-practices for using AI in marketing organizations. A common (but ineffective) way to do this is to staple AI onto every individual part of a marketing org. A much better way to do it is to treat marketing as one large, interconnected system that can talk to each other.",
              },
            ]}
          />
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Culture-Building Classes</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I&apos;ve seen first-hand how impactful a strong culture can be for both the success of the business and job satisfaction. Because of that, I chose to invest time at Kellogg into learning what makes workplace cultures healthy, and how to help when they&apos;re not.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In these classes, we covered topics like how to design organizations to meet business goals, how to engender teams with psychological safety, how to run meetings for maximum impact in minimal time, and how to increase creativity and innovations in teams.
          </p>
          <ClassAccordion
            label="Culture-Building Classes I've Taken"
            items={[
              {
                name: "Leadership in Organizations",
                description: "Course highlighting how to be an effective leader, focusing on organizational dynamics, motivation, team structure, and power dynamics.",
              },
              {
                name: "Building Innovation Teams & Cultures",
                description: "Case-based course highlighting how to make teams and cultures that are uniquely suited for innovation.",
              },
              {
                name: "Leading and Managing Teams",
                description: "Simulation-based course studying the design and leadership of teams in organizational settings, with a strong focus on building new teams from scratch, rescuing underperforming teams, and strengthening well-functioning teams.",
              },
              {
                name: "Strategy and Organization (Currently Enrolled)",
                description: "Case-based course studying how organizational structure is influenced by (and influences) overall business strategy, including recommendations on structuring teams and incentives.",
              },
            ]}
          />
        </section>

        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/mba/hidenn-ai-group-photo.webp"
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
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 2: Creating a PRD/Pitch Deck for Neutrino</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In my Product Management 101 class, we chose products we wanted to build and went through the process of creating a PRD, including a market evaluation, customer interviews, creating customer personas, and making low-fidelity mock-ups. My final deliverables were a comprehensive PRD and a pitch deck.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            I chose to work on a product I named Neutrino. As a science enthusiast, I&apos;ve often found that science content is either created for scientists or the general public, and is typically either too advanced or too simple for me. Neutrino provides science enthusiasts with interactive content at their level.
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
              href="https://1drv.ms/p/c/8ed64007b6da49d4/IQB8JWHlC_8fRoOls8HqBHYvAec8Pw4RvN-cnZ_GxW9ubjw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Pitch Deck (PPTX)
            </a>
          </div>
          <p className="mt-6" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            While I am not currently planning on taking this to market, I am currently working on building it with the help of Claude Code. Coming soon!
          </p>
        </section>

        <section id="project-3-startup-branding-fibarra">
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 3: Creating a Brand from Scratch</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In my Startup Branding class, we were placed in teams of five students and were told to create a brand for a fictional CPG brand that produced a high-fiber product. My team conducted research to determine market segments that would be especially receptive to a high-fiber product, and we found that Latin American immigrants in the US typically switch from a high-fiber diet in their native country to a low-fiber diet in the US (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2267424/" target="_blank" rel="noopener noreferrer" className="underline">Manous et al., 2008</a>, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4852553/" target="_blank" rel="noopener noreferrer" className="underline">Van Hook et al., 2017</a>). For Mexican immigrants particularly, this has been partially linked to diabetes prevalence, which increases drastically for the 10 years following immigration and doubles within 2 generations of immigrating (<a href="https://www.researchgate.net/publication/26749286_Diabetes_Prevalence_by_Length_of_Residence_Among_US_Immigrants" target="_blank" rel="noopener noreferrer" className="underline">source</a>).
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            We created a Brand Strategy Brief, where we evaluated our target customer, our competition, and our brand purpose, values, personality, and emotions.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Using the Brand Strategy Brief as our guide, we created a brand name, logo, and a mood board to help guide the creation of other brand assets. We compiled all of our work into a pitch deck (available below).
          </p>
          <div className="mt-3 flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1bHlm9YfrUznqnm8nXGOg-xVW-tF-AFcE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Brand Strategy Brief (PDF)
            </a>
            <a
              href="https://1drv.ms/p/c/8ed64007b6da49d4/IQCQSkK1v2I1R5FDBfFssCNuAYy21UHCAt1_5xDAE1CPaf8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Pitch Deck (PPTX)
            </a>
          </div>
        </section>

        <section id="project-4-ad-strat-storyboard">
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Project 4: Creating a Storyboard from a Creative Brief</h3>
          <p style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            In my Advertising Strategy Class, we formed teams of four to write the creative brief for a fictional campaign, based on a real company. We then traded creative briefs with another team, and used the brief we were given to create a six-panel storyboard for a 30-second ad.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            We were given a creative brief that a team had created for IHOP, where they wanted to encourage college students to make IHOP their late-night restaurant of choice. We came up with the slogan &quot;IHOP: It Happens Over Pancakes&quot;, and made a storyboard showing college students having important college experiences during late-night IHOP trips.
          </p>
          <p className="mt-4" style={{ color: "rgba(0,0,0,0.8)", fontSize: "20px" }}>
            Classmates then voted on their favorite storyboards, and ours took third place.
          </p>
        </section>

        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/mba/ihop-storyboard.webp"
            alt="Six-Panel Storyboard for IHOP Commercial"
            width={900}
            height={502}
            className="w-full h-auto"
          />
        </div>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
