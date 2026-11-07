/// <reference types="node" />
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * In development the page is also server-rendered, so the dev server shows
 * the same head tags and markup that the production pre-render produces.
 */
function devPrerender() {
  return {
    name: "hozvikcloud-dev-prerender",
    apply: "serve" as const,
    transformIndexHtml: {
      order: "pre" as const,
      async handler(
        html: string,
        ctx: { path?: string; originalUrl?: string; server?: { ssrLoadModule: (id: string) => Promise<any> } },
      ) {
        if (!ctx.server) return html;
        const mod = await ctx.server.ssrLoadModule("/src/entry-server.tsx");
        const pathname = new URL(ctx.originalUrl ?? ctx.path ?? "/", "http://localhost").pathname;
        return html
          .replace("<!--head-tags-->", mod.renderHead(pathname))
          .replace("<!--app-html-->", mod.render(pathname));
      },
    },
  };
}

/** Reads the simple `key: value` pairs in config.yml (comments and quotes are ignored). */
function readSiteYaml(): Record<string, string> {
  const file = path.resolve(process.cwd(), "config.yml");
  if (!fs.existsSync(file)) return {};
  const out: Record<string, string> = {};
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z][\w]*)\s*:\s*(.*?)\s*$/);
    if (!match) continue;
    let value = match[2];
    const quoted = value.match(/^(["'])(.*?)\1/);
    value = quoted ? quoted[2] : value.replace(/\s+#.*$/, "").replace(/^#.*$/, "");
    out[match[1]] = value.trim();
  }
  // On Vercel the production domain is exposed at build time (without the protocol).
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) out.__autoUrl = `https://${vercelHost}`;
  return out;
}

export default defineConfig({
  plugins: [react(), devPrerender()],
  define: { __SITE_YAML__: JSON.stringify(readSiteYaml()) },
  build: { target: "es2022" },
});
