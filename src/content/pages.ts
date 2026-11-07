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
  /** false = noindex (e.g. placeholder pages). */
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
    title: "Bot Hosting from ₹15/mo | HozvikCloud",
    description:
      "Bot hosting from HozvikCloud: NVMe storage, unlimited CPU, DDoS protection and 24/7 uptime. Deploy from GitHub, an archive or a template.",
    indexable: true,
  },
];

/** "/bot-hosting", "/bot-hosting/" and "/bot-hosting/index.html" all resolve to the same page. */
export function resolvePage(pathname: string): PageMeta {
  const clean = pathname.replace(/index\.html$/, "").replace(/\/+$/, "") || "";
  return pages.find((page) => page.path.replace(/\/+$/, "") === clean) ?? pages[0];
}
