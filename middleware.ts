import { NextResponse, type NextRequest } from "next/server";

// List SPA subdirectory slugs that should serve their own index.html for deep links.
// We derive this at build-time; for runtime simplicity keep a static list that
// mirrors the data in data/projects.ts.
const SPA_SLUGS = ["rank-your-posterity"]; // add more slugs as you embed new apps

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Match /<slug> or /<slug>/* for known SPA slugs and rewrite to their public index.html
  const matchedSlug = SPA_SLUGS.find((slug) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`));
  if (matchedSlug) {
    // Don't rewrite requests for actual files (e.g., assets/app.js, styles.css, images)
    const lastSegment = pathname.split("/").pop() ?? "";
    const isFileRequest = lastSegment.includes(".");
    if (!isFileRequest) {
      const url = req.nextUrl.clone();
      url.pathname = `/${matchedSlug}/index.html`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/rank-your-posterity",
    "/rank-your-posterity/:path*",
  ],
};


