import fs from "fs";
import path from "path";

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  const [slug, distPathArg] = process.argv.slice(2);
  if (!slug || !distPathArg) {
    console.error("Usage: node scripts/copy-embedded-app.mjs <slug> <path-to-dist>");
    process.exit(1);
  }

  const distPath = path.resolve(distPathArg);
  if (!fs.existsSync(distPath)) {
    console.error(`Dist path does not exist: ${distPath}`);
    process.exit(1);
  }

  const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
  const targetDir = path.join(projectRoot, "public", slug);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  copyDir(distPath, targetDir);
  console.log(`Copied ${distPath} -> ${targetDir}`);
}

main();



