"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Pages that must not load analytics (Updraft's store pages and privacy policy).
const EXCLUDED_PREFIXES = ["/updraft"];

export default function Analytics() {
  const pathname = usePathname() ?? "";
  if (EXCLUDED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return null;
  }

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3PM425K22D" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3PM425K22D');
        `}
      </Script>
    </>
  );
}
