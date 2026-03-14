"use client";

import { useState } from "react";

interface ClassItem {
  name: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface ClassAccordionProps {
  label: string;
  items: ClassItem[];
}

export default function ClassAccordion({ label, items }: ClassAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-left font-semibold"
        style={{ fontSize: "18px", color: "rgba(0,0,0,0.75)" }}
      >
        See {label}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: "transform 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className="mt-4 flex flex-col gap-4" style={{ paddingLeft: "0" }}>
          {items.map((item) => (
            <li key={item.name} style={{ fontSize: "18px", color: "rgba(0,0,0,0.8)", listStyle: "none" }}>
              <span style={{ paddingRight: "4px" }}>–</span>
              <strong>{item.name}:</strong>{" "}
              {item.description}
              {item.linkText && item.linkHref && (
                <>
                  {" "}
                  <a
                    href={item.linkHref}
                    style={{ textDecoration: "underline", color: "inherit" }}
                  >
                    {item.linkText}
                  </a>
                  .
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
