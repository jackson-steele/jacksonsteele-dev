import type { Metadata } from "next";
import UpdraftFooter from "./UpdraftFooter";

const description =
  "Updraft is a mixed reality RC-plane game for Meta Quest. Fly a little remote-control plane around your own room, then out into open sky.";

export const metadata: Metadata = {
  title: "Updraft",
  description,
  openGraph: {
    title: "Updraft",
    description,
    url: "https://jacksonsteele.dev/updraft/",
    type: "website",
    // TODO: add og:image once key art is ready, e.g. images: ["/images/updraft/key-art.png"]
  },
};

const features = [
  {
    title: "Your room or open sky",
    body: "Fly courses that fit around your own walls and furniture, or head out over open terrain.",
  },
  {
    title: "First Flight tutorial",
    body: "Learn one move at a time, then keep going with Learn to Fly.",
  },
  {
    title: "Levels 1 to 9, with medals",
    body: "Chase coin trails from easy to hard, beat the clock and earn medals. Your best times are saved on your headset.",
  },
  {
    title: "Controllers or hands",
    body: "Play with Quest controllers, or use your hands with hand tracking.",
  },
];

const textStyle = { fontSize: "20px" };
const headingStyle = { fontSize: "32px" };

export default function UpdraftPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero */}
      <header className="w-full">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-4 flex flex-col gap-4">
          <h1 style={{ fontSize: "clamp(48px, 13vw, 64px)" }}>Updraft</h1>
          <p style={{ fontSize: "clamp(20px, 5vw, 24px)", color: "rgba(0,0,0,0.75)" }}>
            Fly an RC plane around your living room, then out into open sky.
          </p>
          <p className="text-gray-500" style={{ fontSize: "16px" }}>
            A mixed reality game for Meta Quest by Jackson Steele
          </p>
          {/*
            TODO: key art goes here once it's ready, e.g.
            <Image src="/images/updraft/key-art.webp" alt="Updraft key art" width={1536} height={864} className="w-full h-auto rounded-2xl mt-4" />
          */}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-14 w-full">
        {/* What it is */}
        <section className="flex flex-col gap-4">
          <h2 style={headingStyle}>What it is</h2>
          <p style={textStyle}>
            Updraft is a mixed reality RC-plane game for Meta Quest. You fly a little remote-control plane with a pair of
            virtual RC transmitter sticks.
          </p>
          <p style={textStyle}>
            Each course is set in one of two places. Some are flown around your own room. Updraft uses passthrough and your
            headset&apos;s space setup so the plane and course fit your walls and furniture. Others take you out into open
            sky over terrain.
          </p>
          <p style={textStyle}>
            New to RC planes? The First Flight tutorial teaches one move at a time, followed by Learn to Fly. Then take on
            the Open Air coin-trail courses, from Level 1 to Level 9.
          </p>
        </section>

        {/*
          TODO: 2–3 screenshots go here once they're ready, e.g. a grid of
          <Image src="/images/updraft/screenshot-1.webp" ... /> inside a <section>.
        */}

        {/* Features */}
        <section className="flex flex-col gap-6">
          <h2 style={headingStyle}>Features</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.title} className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-2">
                <h5 style={{ fontSize: "20px" }}>{f.title}</h5>
                <p style={{ fontSize: "17px", color: "rgba(0,0,0,0.7)" }}>{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Get it */}
        <section className="flex flex-col gap-4">
          <h2 style={headingStyle}>Get it</h2>
          {/* TODO: replace this line with a link to the Meta Horizon Store listing once it's live. */}
          <p style={textStyle}>Coming soon to the Meta Horizon Store on Meta Quest.</p>
        </section>

        {/* Support */}
        <section className="flex flex-col gap-4">
          <h2 style={headingStyle}>Support</h2>
          <p style={textStyle}>
            Questions or problems? Email{" "}
            <a href="mailto:jacksonsteele8@gmail.com" className="underline break-all">
              jacksonsteele8@gmail.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-auto">
        <UpdraftFooter />
      </div>
    </main>
  );
}
