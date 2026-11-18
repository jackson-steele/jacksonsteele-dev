"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import HighlightTile, { type Highlight } from "../components/HighlightTile";
import { trackEvent } from "../lib/analytics";

const highlights: Highlight[] = [
  {
    src: "/images/main/highlight-cards/software-engineer.webp",
    title: "Software Engineer",
    subtitle: "Amazon Prime Air",
    href: "/amazon",
    teaser: "At Amazon, I learned to ship software quickly and reliably, even when deadlines were tight and we were under-resourced, and I grew from a coder into a builder.",
  },
  {
    src: "/images/main/highlight-cards/scientist-cover-photo.webp",
    title: "Scientist",
    subtitle: "Brigham Young University",
    href: "/astrophysics",
    teaser: "Why do I call myself an astrophysicist? The short answer is that I studied astrophysics in college, and I’m a coauthor on several astrophysics papers.",
  },
  {
    src: "/images/main/highlight-cards/product-manager-intern.webp",
    title: "Product Manager Intern",
    subtitle: "IDeaS Revenue Solutions",
    href: "/ideas",
    teaser: "At IDeaS, I experienced different phases of the product development process through four intern projects, from initial research to a phased launch with enterprise clients.",
  },
  {
    src: "/images/main/highlight-cards/museum-cover-photo.webp",
    title: "Small Museum Business",
    subtitle: "User Research & Experimentation",
    href: "/museum-business",
    teaser: "At the end of my MBA, I decided to try out entrepreneurship. I decided I wanted my customers to be small museums, and I used experiments to test my hypotheses before building.",
  },
  {
    src: "/images/main/highlight-cards/updraft-cover-photo.webp",
    title: "Updraft",
    subtitle: "Motion-Capture Video Game",
    href: "/updraft-game",
    teaser: "Updraft is a motion-capture game where you fly a plane with your arms. I built it, playtested it, rebuilt it, and then ported it to VR/AR for Meta Quest.",
  },
  {
    src: "/images/main/highlight-cards/kellogg.webp",
    title: "MBA Class Projects",
    subtitle: "PRD, Pitch Deck, GTM plan, etc.",
    href: "/mba#project-1-creating-a-gtm-plan-for-ai-startup-hidenn-ai",
    teaser: "In my Commercializing Innovations class, I, along with two other Kellogg students, worked with startup HIDENN-AI to create their GTM plan.",
  },
  {
    src: "/images/main/highlight-cards/personal-projects.webp",
    title: "Personal Projects",
    subtitle: "I’m always building something! Check out some of my favorites",
    href: "/personal-projects",
    teaser: "I’m always building things that I either find useful, interesting, or funny. Most of my projects don’t make it here, but come back to see what I’ve added!",
  },
];

const logos = [
  { src: "/images/main/logos/kellogg.webp", alt: "Kellogg School of Management", role: "MBA", href: "/mba" },
  { src: "/images/main/logos/byu.webp", alt: "Brigham Young University", role: "Astrophysics", href: "/astrophysics" },
  { src: "/images/main/logos/ideas.webp", alt: "IDeaS Revenue Solutions", role: "Product Management Intern", href: "/ideas" },
  { src: "/images/main/logos/amazon.webp", alt: "Amazon", role: "Software Engineer", href: "/amazon" },
];

const desktopCols = [
  [highlights[0], highlights[3], highlights[4]],
  [highlights[1], highlights[6]],
  [highlights[2], highlights[5]],
];

function TypewriterHireMe() {
  const [displayed, setDisplayed] = useState("");
  const targetText = "Hire Me";
  const started = useRef(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          trackEvent("section_view", { section: "hire_me" });
          let i = 0;
          const interval = setInterval(() => {
            if (i < targetText.length) {
              setDisplayed(targetText.slice(0, i + 1));
              i++;
            } else {
              clearInterval(interval);
            }
          }, 120);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={ref} className="font-bold text-black" style={{ fontSize: "56px" }}>
      {displayed}
      <span className="typewriter-cursor" style={{ color: "black", marginLeft: "2px" }}>
        |
      </span>
    </h2>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/main/cover-photo.webp"
          alt="Jackson Steele cover photo"
          fill
          priority
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6">
          <h1 className="mb-0" style={{ color: "white" }}>Jackson Steele</h1>
          <p className="font-medium" style={{ fontSize: "28px", color: "white" }}>
            Product Manager
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:jacksonsteele8@gmail.com"
              className="btn btn-white"
              onClick={() => trackEvent("contact_click", { method: "email", location: "hero" })}
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/jackson-steele/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white-outline"
              onClick={() => trackEvent("contact_click", { method: "linkedin", location: "hero" })}
            >
              LinkedIn
            </a>
            <a
              href="/Jackson%20Steele%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white-outline"
              onClick={() => trackEvent("resume_click", { location: "hero" })}
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h1 className="font-extrabold tracking-[-0.02em]" style={{ fontSize: "48px", lineHeight: "1.3" }}>
              I think like a scientist, build like an engineer, and can explain what I do at work to my grandparents.
            </h1>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h5>Think like a Scientist</h5>
              <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "20px" }}>
                As a scientist, I learned to tackle difficult problems by deconstructing them into bite-sized chunks that I can solve using data and experiments.
              </p>
            </div>
            <div>
              <h5>Proven Software Shipper</h5>
              <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "20px" }}>
                As an Amazon software engineer working on drone delivery, I delivered results, even when our goals were ambitious and our team was under-resourced.
              </p>
            </div>
            <div>
              <h5>Can Explain What I Do</h5>
              <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "20px" }}>
                I&apos;ve taught physics to high schoolers, astronomy to college students, and onboarded a non-technical manager to a technical team. I can translate seamlessly between technical and non-technical audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Row */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center mb-10" style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}>
            Where I&apos;ve been.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {logos.map((logo) => (
              <Link
                key={logo.href}
                href={logo.href}
                className="group flex flex-col items-center text-center rounded-2xl bg-white border border-black/[0.06] px-4 pt-6 pb-5 hover:border-black/15 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] active:scale-[0.98] transition"
                onClick={() => trackEvent("logo_click", { org: logo.alt })}
              >
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="object-contain max-h-16 grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0 transition-all"
                  />
                </div>
                <span className="mt-4 font-semibold text-black leading-snug" style={{ fontSize: "17px" }}>
                  {logo.role}
                </span>
                <span
                  className="mt-auto pt-2 inline-flex items-center gap-1 font-medium text-black/50 group-hover:text-black transition-colors"
                  style={{ fontSize: "15px" }}
                >
                  See more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="mb-3">Highlights</h3>
          <p className="mb-10" style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}>
            Here are some of the things I&apos;ve done professionally, personally, and academically. Click to learn more.
          </p>
          {/* Desktop: explicit 3 flex columns for deterministic masonry order */}
          <div className="hidden md:flex gap-4">
            {desktopCols.map((col, ci) => (
              <div key={ci} className="flex-1 flex flex-col gap-4">
                {col.map((tile) => (
                  <HighlightTile
                    key={tile.href}
                    tile={tile}
                    width={400}
                    height={300}
                    onClick={() => trackEvent("highlight_click", { card: tile.title })}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* Mobile stacked */}
          <div className="flex flex-col gap-4 md:hidden">
            {highlights.map((tile) => (
              <HighlightTile
                key={tile.href}
                tile={tile}
                width={800}
                height={500}
                onClick={() => trackEvent("highlight_click", { card: tile.title })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/images/profile-picture.webp"
              alt="Jackson Steele"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <TypewriterHireMe />
            <p style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}>
              Seeking a Seattle-based Product Manager role.<br/>Available immediately.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:jacksonsteele8@gmail.com"
                className="btn btn-primary"
                onClick={() => trackEvent("contact_click", { method: "email", location: "hire_me" })}
              >
                Send me an email
              </a>
              <a
                href="https://www.linkedin.com/in/jackson-steele/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                onClick={() => trackEvent("contact_click", { method: "linkedin", location: "hire_me" })}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
