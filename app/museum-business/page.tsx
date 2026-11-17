import PageHeader from "../../components/PageHeader";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";
import CaptionedImage from "../../components/CaptionedImage";

// Put this page's images in public/images/museum-business/ (as .webp, ~900px wide)
// and reference them as "/images/museum-business/<file>.webp".

const bodyStyle = { color: "rgba(0,0,0,0.8)", fontSize: "20px" };

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
      {children}
    </a>
  );
}

export default function MuseumBusinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="My Museum Business"
        intro="At the end of my MBA, I decided to try out entrepreneurship. I decided I wanted my customers to be small museums, and I used experiments to test my hypotheses before building."
        coverPhoto="/images/museum-business/jackson-amnh.webp"
        coverCaption="Me under the blue whale at the American Museum of Natural History"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-12">
        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Introduction</h3>
          <p style={bodyStyle}>
            I&apos;ve talked about my museum business much more on my substack{" "}
            <Ext href="https://jacksonwsteele.substack.com/">here</Ext>, so I&apos;ll summarize my experiences on this page and include references you can follow to read more in-depth.
          </p>
          <p className="mt-4" style={bodyStyle}>
            I&apos;ve always wanted to try out entrepreneurship. Why? Long story short, I love the idea of creating something from nothing. There are a lot of ways to scratch that creative itch, and I&apos;m drawn towards using my creativity for entrepreneurial endeavors. The idea of starting a company was always on the back of my mind, and as I approached the end of my MBA I realized I wouldn&apos;t get a much better chance.
          </p>
          <p className="mt-4" style={bodyStyle}>
            <Ext href="https://jacksonwsteele.substack.com/p/chapter-1-start-here">
              Read more about my journey before starting this endeavor here
            </Ext>
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>My Plan</h3>
          <p style={bodyStyle}>
            I took what I learned in my MBA (and from a visit to a startup incubator) to make a six-step plan to find and validate a business idea from scratch:
          </p>
          <ol className="mt-4 list-decimal pl-8 flex flex-col gap-2" style={bodyStyle}>
            <li>Pick a customer.</li>
            <li>Talk to those customers to find their real problems.</li>
            <li>Filter those problems for the ones that (1) you have evidence your customers would pay to fix and (2) you are willing and able to tackle.</li>
            <li>Identify who feels this problem the most deeply; they&apos;ll be your first customers.</li>
            <li>Talk to someone who went through this recently to understand the jobs-to-be-done.</li>
            <li>Solve this problem manually for someone, and get paid to do it. This validates your assumptions in Step 3 that someone will pay to fix it and that you can do it.</li>
          </ol>
          <p className="mt-4" style={bodyStyle}>
            You can read more about these steps{" "}
            <Ext href="https://jacksonwsteele.substack.com/p/how-to-come-up-with-actually-good">here</Ext>. I also wrote two case studies where I talk through doing the first two steps{" "}
            <Ext href="https://jacksonwsteele.substack.com/p/chapter-3-my-museum-business-part">here</Ext>, and the following four steps{" "}
            <Ext href="https://jacksonwsteele.substack.com/p/chapter-4-my-museum-business-part">here</Ext>. While those go much more in-depth, I&apos;ll summarize what I did below.
          </p>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>My Experience</h3>
          <p style={bodyStyle}>
            I decided that I wanted my customers to be small museums. I love visiting museums, and I thought they would be a small-but-not-too-small, relatively underserved segment.
          </p>
          <p className="mt-4" style={bodyStyle}>
            Then, I cold-emailed 36 executive directors of local museums, requesting a 30-minute in-person meeting. I interviewed 17 of them (a 47% response rate!!). In each conversation, I asked them about the different aspects of running a museum to find their pain points.
          </p>
          <p className="mt-4" style={bodyStyle}>
            After each interview, I would debrief and compare what I&apos;d learned to my previous interviews. Within just a handful of interviews, a few common problems emerged:
          </p>
          <ol className="mt-4 list-decimal pl-8 flex flex-col gap-2" style={bodyStyle}>
            <li>Getting new visitors to come, especially young visitors, and increasing the number of repeat visits.</li>
            <li>Their collection storage was full, often with things that didn&apos;t fit the mission of their museum.</li>
            <li>It&apos;s hard to work with small-museum boards.</li>
            <li>These museums only have 1-3 employees, and none of them specialize in fundraising, so fundraising is a chore.</li>
            <li>Small-museum gift shops are not profitable.</li>
          </ol>
          <p className="mt-4" style={bodyStyle}>
            I filtered these ideas for (1) evidence that these directors would spend money to fix them and (2) whether I thought I could help (and whether I wanted to), I was left with problems 1 and 2.
          </p>
          <p className="mt-4" style={bodyStyle}>
            Then, I used the Five Why&apos;s methodology (alongside diving deeper in my interviews) to identify the root causes of these problems, to figure out possible solutions.
          </p>
          <p className="mt-4" style={bodyStyle}>
            I came up with three causes for each of those two problems:
          </p>
          <ul className="mt-4 list-disc pl-8 flex flex-col gap-2" style={bodyStyle}>
            <li>
              Problem 1: Attracting new visitors
              <ol className="mt-2 list-decimal pl-8 flex flex-col gap-2">
                <li>Lack of awareness in the local community</li>
                <li>Poor hours, restricting when people could visit.</li>
                <li>The museums weren&apos;t interesting enough to compete with similar entertainment options.</li>
              </ol>
            </li>
            <li>
              Problem 2: Limited storage dominated by unwanted items
              <ol className="mt-2 list-decimal pl-8 flex flex-col gap-2">
                <li>Museums kept collecting items they didn&apos;t want, to build relationships with donors and the local community.</li>
                <li>Once they had them, they couldn&apos;t just throw them away. Museum bylaws require preservation of their collection, and getting rid of things is difficult. It&apos;s easiest if they are giving the artifacts to other museums.</li>
                <li>Storage is difficult, because it requires precision in temperature, humidity, and light, making external storage more expensive and difficult.</li>
              </ol>
            </li>
          </ul>
          <p className="mt-4" style={bodyStyle}>
            I came up with ideas for each of these, and ultimately decided to pitch the following to directors (for a list of the ones I chose not to pitch and why, see my{" "}
            <Ext href="https://jacksonwsteele.substack.com/i/223838445/deciding-on-solutions">Substack post</Ext>):
          </p>
          <ol className="mt-4 list-decimal pl-8 flex flex-col gap-2" style={bodyStyle}>
            <li>I&apos;ll set up your marketing so it works without any more effort than you&apos;re putting in now.</li>
            <li>I&apos;ll run an event at your museum that brings in revenue and new visitors. All you need to do is provide the space.</li>
            <li>I&apos;ll take something in your collection that you don&apos;t want and find a museum that does want it.</li>
          </ol>
        </section>

        <section>
          <h3 className="mb-6" style={{ fontSize: "36px" }}>Results</h3>
          <p style={bodyStyle}>
            I pitched these ideas to small-museum executive directors, and got traction and interest solely on the third one. 
          </p>
          <p className="mt-4"style={bodyStyle}>
            I had the idea of creating an AI matching platform, that connected unwanted items with museums that could better use them. I&apos;d also help with the enormous amount of paperwork it takes to remove an item from a museum collection. This way, I&apos;d replace unwanted items with wanted items, and also pave the way for items to be removed that really should just be disposed of.
          </p>
          <p className="mt-4" style={bodyStyle}>
            When I tried to move forward with the manual tests of that idea with these directors, we ran into problems.
          </p>
          <p className="mt-4" style={bodyStyle}>
            A couple museums said that they wanted to participate, but they didn&apos;t have a well-indexed collection, so they didn&apos;t even really know what was in their storage to re-home.
          </p>
          <p className="mt-4" style={bodyStyle}>
            One museum had a poorly-indexed collection, but told me that they could surely find something. The problem, however, was that they needed board approval and to add it to their yearly plan, and they were hoping to start mid-2027, which was too far in the future for me to commit.
          </p>
          <p className="mt-4" style={bodyStyle}>
            One executive director was willing and able to start right away. She identified an item in the collection that she believed was a good candidate. Unfortunately, her board was unwilling to let me look for a new home for it.
          </p>
          <p className="mt-4" style={bodyStyle}>
            I had more ideas for things I could try, including pivots to other problems (like indexing storage collections), but it was becoming increasingly clear that museums were too slow and had too much red tape to support a bootstrapped business like what I was building. When trying to test whether the solution was valid for the customer, I instead disproved that that customer was the right choice for me.
          </p>
        </section>

        <CaptionedImage
          src="/images/museum-business/jackson-moma.webp"
          alt="An image of me with a Jackson Pollock painting in MoMA"
          width={900}
          height={675}
          caption="Me with a Jackson Pollock painting at MoMA"
        />
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
