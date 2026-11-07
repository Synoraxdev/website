// Post-build step: renders the React app to static HTML, injects it and the
// SEO head tags into dist/index.html, and writes robots.txt and sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const ssr = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);
const { siteConfig } = ssr;

// 1. Pre-rendered pages: "/" -> dist/index.html, "/bot-hosting/" -> dist/bot-hosting/index.html
const templatePath = path.join(dist, "index.html");
const template = fs.readFileSync(templatePath, "utf8");
for (const marker of ["<!--head-tags-->", "<!--app-html-->"]) {
  if (!template.includes(marker)) {
    throw new Error(`Marker ${marker} missing from dist/index.html`);
  }
}
for (const page of ssr.pages) {
  const html = template
    .replace("<!--head-tags-->", () => ssr.renderHead(page.path))
    .replace("<!--app-html-->", () => ssr.render(page.path));
  const target =
    page.path === "/" ? templatePath : path.join(dist, page.path.replace(/^\/|\/$/g, ""), "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

// 2. robots.txt
const sitemapUrl = new URL("sitemap.xml", siteConfig.url).href;
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
);

// 3. sitemap.xml generated from the published route list
const lastmod = new Date().toISOString().slice(0, 10);
const urls = siteConfig.routes
  .map((route) => {
    const loc = new URL(route, siteConfig.url).href;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

fs.rmSync(serverDir, { recursive: true, force: true });
console.log(`Pre-rendered ${ssr.pages.length} pages, robots.txt and sitemap.xml`);
