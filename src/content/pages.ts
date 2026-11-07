import { siteConfig } from "../config/site";

/**
 * Every page of the site. The pre-render step writes one HTML file per entry,
 * and the client picks the matching page from the URL.
 */

export type PageId = "home" | "botHosting";

export type PageMeta = {
  id: PageId;
  /** Always starts with "/"; non-home paths end with "/" (served as <path>/index.html). */
  path: string;
  title: string;
  description: string;
  /** false = noindex (e.g. coming-soon pages). */
  indexable: boolean;
};

export const pages: PageMeta[] = [
  {
    id: "home",
    path: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    indexable: true,
  },
  {
    id: "botHosting",
    path: "/bot-hosting/",
    title: "Bot Hosting - Coming Soon | HozvikCloud",
    description: "Bot Hosting from HozvikCloud is coming soon.",
    indexable: false,
  },
];

/** Content of the Bot Hosting placeholder page. */
export const botHostingPage = {
  eyebrow: "Products · Bot Hosting",
  title: { before: "Bot Hosting is ", highlight: "coming soon", after: "." },
  description: "We are getting Bot Hosting ready. Please check back shortly.",
  homeLabel: "Back to Overview",
  discordLabel: "Get updates on Discord",
};

/** "/bot-hosting", "/bot-hosting/" and "/bot-hosting/index.html" all resolve to the same page. */
export function resolvePage(pathname: string): PageMeta {
  const clean = pathname.replace(/index\.html$/, "").replace(/\/+$/, "") || "";
  return pages.find((page) => page.path.replace(/\/+$/, "") === clean) ?? pages[0];
}
