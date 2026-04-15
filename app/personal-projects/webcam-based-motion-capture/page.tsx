import Image from "next/image";
import PageHeader from "../../../components/PageHeader";
import CallToAction from "../../../components/CallToAction";
import Footer from "../../../components/Footer";

function ProjectVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full rounded-2xl"
    />
  );
}

export default function WebcamBasedMotionCapturePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Webcam-Based Motion Capture"
        intro="An experiment on using computer vision for the future of human-computer interaction."
        coverPhoto="/images/personal-projects/webcam-based-motion-capture-card.webp"
      />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-8">
        {/* Background */}
        <p style={{ fontSize: "20px" }}>
          As long as there are people who believe they&apos;re &ldquo;not good at technology,&rdquo; then technology is not good enough. I&apos;m fascinated by the possibilities in human-computer interaction. I don&apos;t foresee a future dominated by the 6-inch phone screens and 15-inch computer screens of today.
        </p>
        <p style={{ fontSize: "20px" }}>
          Every project on this page was developed using Google&apos;s open source MediaPipe package. I used Claude Code as my primary implementation partner, focusing my efforts on design decisions, iteration, and Unity asset work.
        </p>

        {/* Project 1 */}
        <section className="flex flex-col gap-4">
          <h3>Project 1: Simple Tracking</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project1.mp4" />
          <p style={{ fontSize: "20px" }}>
            The first question I had was whether computer vision could track me. To do this, I used MediaPipe&apos;s pose segmentation, which identifies and tracks points of interest on detected humans (including shoulders, hands, nose, hips, etc.). I tasked it with following my nose, positioning a blue circle over it. While this is a simple interaction, it was my first time using MediaPipe and was a good learning opportunity for both me and Claude.
          </p>
        </section>

        {/* Project 2 */}
        <section className="flex flex-col gap-4">
          <h3>Project 2: Tracking Eyes</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project2.mp4" />
          <p style={{ fontSize: "20px" }}>
            My next goal was to see if I could make a character that realistically seemed to look at me as I walked around. I started with the eyes, because that&apos;s the part of a 2D character that would move if this were to work.
          </p>
          <p style={{ fontSize: "20px" }}>
            The test &ldquo;worked&rdquo; in that the eyes successfully follow me around, but the eyes are incredibly unsettling. Also, the tracking rate isn&apos;t perfect which keeps it from being convincing. Rather than trying to go deeper, I decided to shelve it for a time when I was more prepared to get the graphics right.
          </p>
        </section>

        {/* Project 3 */}
        <section className="flex flex-col gap-4">
          <h3>Project 3: Catching Snow</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project3.mp4" />
          <p style={{ fontSize: "20px" }}>
            Next, I wanted to test a different mechanic&mdash;controlling the computer not just by where you&apos;re standing, but also what you&apos;re doing. This was also technologically different, because it used image segmentation rather than pose segmentation. Basically, instead of tracking discrete points on a person (nose, wrists, shoulders, hips) and creating a &ldquo;skeleton&rdquo; of them, it separated the human from the rest of the image. This captures the player&apos;s entire body, but does not give you any information about what they&apos;re doing.
          </p>
          <p style={{ fontSize: "20px" }}>
            For my experiment, I built a game that I&apos;ve seen done before in museums (using much more expensive equipment): falling particles that you can block with your arms. In museums, you are often &ldquo;catching&rdquo; these particles to drop later, but since I wasn&apos;t trying to experiment with particle system mechanics I skipped that functionality.
          </p>
          <p style={{ fontSize: "20px" }}>
            What I learned from this is that MediaPipe&apos;s image segmentation technology wasn&apos;t as stable as pose segmentation. There was considerable jitter on the detected human shape, often dropping the arms or including background materials (like my couch). It also struggled with children (I was letting my kids play with it) and didn&apos;t do well with uncommon poses. I was able to partially solve these problems by averaging over frames, increasing the image resolution, and changing the required confidence intervals, but it still wasn&apos;t perfect and I decided to focus on pose segmentation going forward.
          </p>
        </section>

        {/* Project 4 */}
        <section className="flex flex-col gap-4">
          <h3>Project 4: Creature Interaction</h3>
          <p style={{ fontSize: "20px" }}>
            Next, I wanted to control a game using pose segmentation. I had Claude write a narrative about a cute creature that is shy but, as the player shows non-threatening behavior, becomes friendly and playful. I also asked Claude to handle the graphic representation of this creature for me. This was the result:
          </p>
          <Image
            src="/images/personal-projects/motion-capture/project4.webp"
            alt="Python-generated creature from Project 4"
            width={768}
            height={576}
            className="w-full h-auto rounded-2xl"
          />
          <p style={{ fontSize: "20px" }}>
            This is <em>not</em> the result of Claude&apos;s image-generation capabilities, but rather a creature built from code in Python. The game itself worked, but was so graphically unappealing that I couldn&apos;t stomach it. I realized that I was hitting a ceiling in how immersive these experiences could become, and the way to break through that ceiling was to move to a proper game engine.
          </p>
        </section>

        {/* Project 5 */}
        <section className="flex flex-col gap-4">
          <h3>Project 5: Simple Tracking in Unity</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project5.mp4" />
          <p style={{ fontSize: "20px" }}>
            To improve the quality of graphics I was using (and the immersiveness of the experiences), I transitioned from pure code to Unity. I had some experience with Unity from a mixed-reality development class I took in college, and I had also taken an animation class where I learned Maya, and that knowledge transferred pretty well. I also did several tutorials in Unity to make sure I was confident with it.
          </p>
          <p style={{ fontSize: "20px" }}>
            I found an open-source MediaPipe Unity plugin, and I used it to recreate my first experiment&mdash;tracking my nose with a blue circle&mdash;as a &ldquo;Hello World&rdquo;-type project to ensure my setup worked. This was, once again, difficult to pull off but unimpressive to use, but it was necessary to build knowledge for subsequent projects.
          </p>
        </section>

        {/* Project 6 */}
        <section className="flex flex-col gap-4">
          <h3>Project 6: Face Tracker</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project6.mp4" />
          <p style={{ fontSize: "20px" }}>
            My second Unity project was a copy of my second non-Unity project (Tracking Eyes), but with better graphics. I used existing assets to create a scene, put a character in it, gave the character an &ldquo;idle&rdquo; animation so that it looked reasonably alive, and then set it up to track a user&apos;s face so that it appears to look at them. Because of the previous work I&apos;d done, Claude had plenty of reference material and this was fairly straightforward. The most time spent on it was fine-tuning the movement to feel realistic.
          </p>
        </section>

        {/* Project 7 */}
        <section className="flex flex-col gap-4">
          <h3>Project 7: Body Mirror</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project7.mp4" />
          <p style={{ fontSize: "20px" }}>
            Now that I was working with an entire animated character, rather than a creepy pair of eyes, I wanted to see if I could get the character to mirror my movement. I didn&apos;t give the character any translational movement, just movement of the arms/legs.
          </p>
          <p style={{ fontSize: "20px" }}>
            Surprisingly, this was by far the most difficult one for Claude. It struggled to get the math right, switching left/right and forwards/backwards multiple times in almost every instance. There were many times when it came up with a plan, felt confident that it would work, and then the result was unchanged from before. Eventually we got it most of the way there, but I felt like it was time to move on before it was perfect.
          </p>
        </section>

        {/* Project 8 */}
        <section className="flex flex-col gap-4">
          <h3>Project 8: Pose-Triggered Effects</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project8.mp4" />
          <p style={{ fontSize: "20px" }}>
            Because I couldn&apos;t get the character in Project 7 to look natural, I wanted to experiment with having players control the environment rather than the character. Claude and I came up with a list of poses/actions that were visually distinct enough to be separate triggers, and then we came up with effects to match those poses/actions. Here&apos;s the list we came up with:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" style={{ fontSize: "18px" }}>
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 font-semibold">Number</th>
                  <th className="py-2 pr-4 font-semibold">Gesture</th>
                  <th className="py-2 pr-4 font-semibold">Type</th>
                  <th className="py-2 pr-4 font-semibold">Effect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2 pr-4">Both wrists above nose</td>
                  <td className="py-2 pr-4">Static Hold</td>
                  <td className="py-2 pr-4">Fireworks</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">2</td>
                  <td className="py-2 pr-4">T-Pose (arms at shoulder height)</td>
                  <td className="py-2 pr-4">Static Hold</td>
                  <td className="py-2 pr-4">Wind/leaves</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">3</td>
                  <td className="py-2 pr-4">Cross wrists at chest → throw arms down-out</td>
                  <td className="py-2 pr-4">Static Hold</td>
                  <td className="py-2 pr-4">Ice blast</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">4</td>
                  <td className="py-2 pr-4">Fast punch</td>
                  <td className="py-2 pr-4">Velocity</td>
                  <td className="py-2 pr-4">Fire burst</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">5</td>
                  <td className="py-2 pr-4">Both arms in wide V above shoulders</td>
                  <td className="py-2 pr-4">Static Hold</td>
                  <td className="py-2 pr-4">Golden sparkles</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">6</td>
                  <td className="py-2 pr-4">One hand up, one hand down</td>
                  <td className="py-2 pr-4">Static Hold</td>
                  <td className="py-2 pr-4">Lightning</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">7</td>
                  <td className="py-2 pr-4">Torso lean forward</td>
                  <td className="py-2 pr-4">Static Hold</td>
                  <td className="py-2 pr-4">Rain</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "20px" }}>
            Claude wrote the code to detect those gestures and trigger each of those effects, and I built the effects in Unity. I also added in a character, and gave it triggers to react whenever one of those effects went off.
          </p>
          <p style={{ fontSize: "20px" }}>
            I found that this was mostly successful, but required a fair amount of tweaking. Because I&apos;m using a single webcam, I can&apos;t rely on parallax or LiDAR for accurate depth perception and the &ldquo;torso lean forward&rdquo; effect was tricky to pick up on visually. I also couldn&apos;t get the &ldquo;fast punch&rdquo; at a speed where it detected punches and only punches, and I eventually removed it.
          </p>
        </section>

        {/* Project 9 */}
        <section className="flex flex-col gap-4">
          <h3>Project 9: Updraft</h3>
          <ProjectVideo src="/images/personal-projects/motion-capture/project9.mp4" />
          <p style={{ fontSize: "20px" }}>
            The most unnatural pose in Project 8 was the T-Pose (arms straight out at shoulder height). While I was doing it, it felt much more like I should be flying than triggering a windstorm. I rather liked that idea, and decided to build a game where a player could use their arms to fly.
          </p>
          <p style={{ fontSize: "20px" }}>
            This also used pose detection, like in Project 8, but with options that felt more intuitive: arms at the side to fly, lean left/right to turn left/right, and move arms up/down to go up/down. I wanted to present this one at an AI showcase at my school, so I turned it into a game: collect as many spheres as you can within a time limit.
          </p>
          <p style={{ fontSize: "20px" }}>
            I also had Claude write a script to automatically generate an infinite landscape, and I gave it models to use for landscaping elements to make it more visually interesting (trees, rocks, bushes, etc.).
          </p>
          <p style={{ fontSize: "20px" }}>
            Playing this game is surprisingly intuitive. Within a couple minutes, I felt like I&apos;d gotten pretty good at flying the airplane, and my scores were decent. And, more than that, it was fun&mdash;I stopped thinking about the technology behind it, and I lost myself in trying to help my little plane collect some spheres.
          </p>
          <p style={{ fontSize: "20px" }}>
            If you&apos;d like to play Updraft, you can download it here (currently only available for Mac with Apple Silicon):
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1DEhnEn6T7txOzRsHrRYJPA2NG5BDtvh2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-fit"
            >
              Download Updraft
            </a>
          </div>
        </section>
      </div>
      
      <CallToAction />
      <Footer />
    </main>
  );
}
