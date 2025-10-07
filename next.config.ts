export default {
  // Static export for GitHub Pages
  output: "export",
  // Custom domain serves from the root path
  // (no basePath or assetPrefix when using jacksonsteele.dev)
  // Next/Image must be unoptimized for static export
  images: { unoptimized: true },
  // Ensure directory-style URLs map to index.html files on GitHub Pages
  trailingSlash: true,
  // Keep tracing root as configured
  outputFileTracingRoot: "/Users/jacksonsteele/Documents/GitHub",
} satisfies import("next").NextConfig;
