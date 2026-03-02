"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { trackEvent } from "../lib/analytics";

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

export default function CallToAction() {
  return (
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
          <p style={{ fontSize: "20px", color: "rgba(0,0,0,0.6)" }}>Product Manager roles starting Summer 2026</p>
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
  );
}
