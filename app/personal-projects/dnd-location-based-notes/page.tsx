import Image from "next/image";
import PageHeader from "../../../components/PageHeader";
import CallToAction from "../../../components/CallToAction";
import Footer from "../../../components/Footer";

export default function DndLocationNotesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Location-Based Campaigns"
        intro="As a Dungeons & Dragons player, I like to organize my notes spatially. I couldn't find a free tool to do that, so I built one."
        coverPhoto="/images/personal-projects/location-based-notes-card.webp"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/personal-projects/location-based-notes-card.webp"
            alt="Location-Based Campaigns screenshot"
            width={900}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "20px" }}>
          More screenshots coming soon.
        </p>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
