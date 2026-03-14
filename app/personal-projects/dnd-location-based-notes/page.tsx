import PageHeader from "../../../components/PageHeader";
import CallToAction from "../../../components/CallToAction";
import Footer from "../../../components/Footer";

export default function DndLocationNotesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Dungeon Plotter"
        intro="As a Dungeons & Dragons player, I like to organize my notes spatially. I couldn't find a free tool to do that, so I built one."
        coverPhoto="/images/personal-projects/location-based-notes-card.webp"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-8">
        <p style={{ fontSize: "20px" }}>
          Dungeons & Dragons (D&D) is a tabletop role-playing game where players assume the role of characters in a story written by the Dungeon Master (or DM). The DM creates a world for these players, populating it with friends, foes, traps, and treasure, and the players decide how their characters navigate this world.
        </p>
        <p style={{ fontSize: "20px" }}>
          I&apos;ve been playing D&D since 2018, and I typically play as the Dungeon Master. When I create worlds for my players, I like to have my notes organized spatially, so that whenever a player walks into a room I know what they&apos;re going to find.
        </p>
        <p style={{ fontSize: "20px" }}>
          Historically, I achieved this by drawing a map, labeling each important room on the map, and writing about it in my notes. You can see this in the image above&mdash;this is a map from a past game where I labeled the room numbers in red, which paired with a multi-page Google Doc with information about each room.
        </p>
        <p style={{ fontSize: "20px" }}>
          Under this system, I spent a lot of time in both prep and gameplay going back and forth between my maps and my notes. It worked, but it was messy.
        </p>
        <p style={{ fontSize: "20px" }}>
          I created Dungeon Plotter to remove that friction. I upload my maps to Dungeon Plotter, then I create my notes directly on the map as color-coordinated dots, which I can hover over for basic info (e.g. to see that a point is a goblin) and click on for advanced info (e.g. to see how much health the goblin has, or that the goblin is afraid of whistling). Dungeon Plotter has reusable stat-blocks, so I don&apos;t have to type in basic goblin info every time I create a goblin.
        </p>
        <p style={{ fontSize: "20px" }}>
          So far, I&apos;m using Dungeon Plotter for my ongoing D&D campaign. It&apos;s shortened my planning time and streamlined play time, and I now have a list of features I want to add.
        </p>
        <p style={{ fontSize: "20px" }}>
          Because of how I&apos;m hosting this website, I&apos;m unable to publish Dungeon Plotter for live use. If you&apos;re interested in using it, feel free to download the source code from GitHub{" "}
          <a href="https://github.com/jackson-steele/dnd-location-based-notes" target="_blank" rel="noopener noreferrer" className="underline">here</a> and run it on your device!
        </p>
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
