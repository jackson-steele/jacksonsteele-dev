import type { Metadata } from "next";
import Link from "next/link";
import UpdraftFooter from "../UpdraftFooter";

const description =
  "Updraft does not collect, sell or share your personal information. Everything the game remembers stays on your headset.";

export const metadata: Metadata = {
  title: "Updraft Privacy Policy",
  description,
  openGraph: {
    title: "Updraft Privacy Policy",
    description,
    url: "https://jacksonsteele.dev/updraft/privacy-policy/",
    type: "website",
  },
};

// Inline styles: globals.css sets unlayered h1/h2/p sizes that beat Tailwind utilities.
const p = { fontSize: "18px", lineHeight: 1.6 };
const h2 = { fontSize: "28px", marginTop: "24px" };
const ul = "list-disc pl-6 flex flex-col gap-2";
const li = "text-[17px] sm:text-[18px] leading-relaxed font-medium";
const a = "underline hover:text-gray-600";
const th = "text-left font-bold p-3 border-b-2 border-gray-300 align-top";
const td = "p-3 border-b border-gray-200 align-top";

const storedData = [
  ["Settings (for example audio and controls)", "So your choices are kept between sessions", "Your headset"],
  ["Best times and medals per course", "To show your records", "Your headset"],
  ["Whether you finished the First Flight tutorial", "So it isn't shown again", "Your headset"],
  ["A local diagnostic log of game events", "To help troubleshoot crashes if you send it to me yourself", "Your headset"],
];

export default function UpdraftPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="max-w-3xl mx-auto px-6 pt-8 w-full">
        <Link href="/updraft/" className="underline text-gray-600 hover:text-black" style={{ fontSize: "16px" }}>
          ← Back to Updraft
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-8 pb-16 flex flex-col gap-4 w-full">
        <h1 style={{ fontSize: "clamp(36px, 9vw, 48px)" }}>Updraft Privacy Policy</h1>

        <p className="text-gray-500" style={{ fontSize: "16px" }}>
          Last updated: November 13, 2026 · Jackson Steele
        </p>

        <p style={p}>
          Updraft does not collect, sell or share your personal information. Everything the game remembers stays on your
          headset.
        </p>

        <p style={p}>
          This policy covers Updraft, a mixed reality RC-plane game for Meta Quest, published by Jackson Steele
          (&quot;I&quot;, &quot;me&quot;). It explains what the game uses while you play and where that information goes.
        </p>

        <h2 style={h2}>What the game stores</h2>

        <p style={p}>Updraft saves only game progress and settings, and only on your headset. I never receive it.</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[16px] sm:text-[17px]">
            <thead>
              <tr>
                <th className={th}>What</th>
                <th className={th}>Why</th>
                <th className={th}>Where it lives</th>
              </tr>
            </thead>
            <tbody>
              {storedData.map(([what, why, where]) => (
                <tr key={what}>
                  <td className={td}>{what}</td>
                  <td className={td}>{why}</td>
                  <td className={td}>{where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={p}>
          Updraft has no accounts, no ads, no in-app purchases, no analytics and no crash reporting service. It does not
          use your microphone, and it does not ask for your name, email, age or location.
        </p>

        <p style={p}>Uninstalling Updraft deletes all of this data.</p>

        <h2 style={h2}>Your room, passthrough and hands</h2>

        <p style={p}>
          Updraft uses your room&apos;s layout to fly courses around your space. That data is used in real time on the
          headset and is never saved by the game or sent to me.
        </p>

        <ul className={ul}>
          <li className={li}>
            <strong>Space data (room layout).</strong> With your permission, the game reads the walls, floor, ceiling and
            furniture outlines from your headset&apos;s space setup. It uses them to place the plane and courses and to
            keep them clear of obstacles. You can decline this permission, or revoke it any time in your headset&apos;s
            settings; room courses will then be unavailable.
          </li>
          <li className={li}>
            <strong>Passthrough.</strong> Your surroundings are shown by the headset&apos;s passthrough feature. Updraft
            does not access, record or store camera images.
          </li>
          <li className={li}>
            <strong>Spatial anchors.</strong> The game may use anchors to keep the course fixed in your room. These are
            handled by the headset and are not shared.
          </li>
          <li className={li}>
            <strong>Hand tracking.</strong> If you play with your hands instead of controllers, the headset supplies hand
            positions to move the in-game controls. Updraft does not record or store them.
          </li>
          <li className={li}>
            <strong>Head and controller movement.</strong> Used each frame to show the game and fly the plane, and not
            stored.
          </li>
        </ul>

        <h2 style={h2}>Meta and other third parties</h2>

        <p style={p}>
          The only network request Updraft makes is a purchase check with Meta. I do not receive any personal information
          from it.
        </p>

        <ul className={ul}>
          <li className={li}>
            <strong>Meta Horizon Store ownership check.</strong> When the game starts, it asks the Meta Platform whether
            your account owns Updraft. Meta answers yes or no. I do not see your account name or ID. Meta&apos;s handling
            of your account data is covered by the{" "}
            <a href="https://www.meta.com/legal/privacy-policy/" className={a} target="_blank" rel="noopener noreferrer">
              Meta Privacy Policy
            </a>
            .
          </li>
          <li className={li}>
            <strong>Unity engine.</strong> Updraft is built with Unity. Unity Analytics and Unity crash reporting are
            turned off. Unity&apos;s own practices are described in the{" "}
            <a
              href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
              className={a}
              target="_blank"
              rel="noopener noreferrer"
            >
              Unity Privacy Policy
            </a>
            .
          </li>
        </ul>

        <p style={p}>I do not sell, rent or share data with advertisers, data brokers or anyone else.</p>

        <h2 style={h2}>Children</h2>

        <p style={p}>
          Updraft collects no personal information from anyone, including children. Meta Quest accounts are subject to
          Meta&apos;s own age requirements.
        </p>

        <h2 style={h2}>Your choices and rights</h2>

        <p style={p}>
          Because I hold no data about you, there is nothing for me to access, correct or delete. You stay in control on
          your headset:
        </p>

        <ul className={ul}>
          <li className={li}>Revoke the space data permission in your headset&apos;s privacy settings.</li>
          <li className={li}>Clear your space setup in your headset&apos;s settings.</li>
          <li className={li}>Uninstall Updraft to erase all saved progress, settings and logs.</li>
        </ul>

        <p style={p}>
          If you email me for support, I use your email and message only to reply. I delete them when they are no longer
          needed, and you can ask me to delete them sooner.
        </p>

        <h2 style={h2}>Changes to this policy</h2>

        <p style={p}>
          If Updraft starts handling data differently, I will update this page and the date at the top before the change
          ships.
        </p>

        <h2 style={h2}>Contact</h2>

        <p style={p}>
          Questions about this policy:{" "}
          <a href="mailto:jacksonsteele8@gmail.com" className={`${a} break-all`}>
            jacksonsteele8@gmail.com
          </a>
        </p>
      </article>

      <div className="mt-auto">
        <UpdraftFooter />
      </div>
    </main>
  );
}
