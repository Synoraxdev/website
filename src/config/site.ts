/**
 * Site configuration — the one place to edit external destinations and SEO values.
 *
 * External links render only when a real http(s) URL is set. Leave a value as ""
 * and the link, button or footer entry is simply not shown.
 */

export type ServiceId =
  | "gameServers"
  | "vps"
  | "lavalink"
  | "bots"
  | "databases"
  | "cloud"
  | "domains";

const fileConfig: Record<string, string> = typeof __SITE_YAML__ !== "undefined" ? (__SITE_YAML__ ?? {}) : {};

/** An environment variable wins over config.yml; empty means "not set". */
function setting(envValue: string | undefined, key: string): string {
  return envValue?.trim() || fileConfig[key]?.trim() || "";
}

/** Public site URL: VITE_SITE_URL > config.yml siteUrl > Vercel's domain > fallback. Always ends with "/". */
function resolveSiteUrl(): string {
  const raw =
    setting(import.meta.env.VITE_SITE_URL, "siteUrl") || fileConfig.__autoUrl || "https://hozvikcloud.de";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

export const siteConfig = {
  name: "HozvikCloud",
  /** Shown only in the footer. */
  owner: "Jenil Moradiya", // shown as "Founder" in the footer
  /** Contact email, shown only in the footer. Set in config.yml (contactEmail) or VITE_CONTACT_EMAIL. */
  email: setting(import.meta.env.VITE_CONTACT_EMAIL, "contactEmail"),
  /** Canonical homepage URL. Set siteUrl in config.yml once your own domain is live. */
  url: resolveSiteUrl(),
  title: "HozvikCloud | Game Server, VPS & Cloud Hosting",
  description:
    "HozvikCloud is an India-based hosting provider offering game server, VPS, cloud, bot, Lavalink, database, and domain services.",
  locale: "en_IN",
  themeColor: "#000000",
  robots: "index, follow, max-image-preview:large",

  /** Routes included in sitemap.xml. */
  routes: ["/", "/bot-hosting/"],

  /** Optional path to a full logo image in /public to replace the built-in logo. Empty = built-in logo. */
  logo: "",

  /** Square icon (white H on black) used for search-engine structured data. */
  icon: "/icon-512.png",

  /** Social card image in /public. Original branded image, 1200x630. */
  socialImage: "/og-banner.png",
  socialImageAlt: "HozvikCloud — affordable hosting built for performance",

  links: {
    /**
     * Set in config.yml (or VITE_DISCORD_URL on Vercel), e.g. "https://discord.gg/xxxx".
     * Empty hides the Discord buttons. Opens in a new tab.
     */
    discord: setting(import.meta.env.VITE_DISCORD_URL, "discord"),
    clientPanel: setting(import.meta.env.VITE_CLIENT_PANEL_URL, "clientPanel"),
    gamePanel: setting(import.meta.env.VITE_GAME_PANEL_URL, "gamePanel"),
    billingPanel: setting(import.meta.env.VITE_BILLING_PANEL_URL, "billingPanel"),
    /** Optional destination for each service card. Empty = card is not a link. */
    services: {
      gameServers: "",
      vps: "",
      lavalink: "",
      bots: "",
      databases: "",
      cloud: "",
      domains: "",
    } satisfies Record<ServiceId, string>,
  },

  /**
   * Business details that are published only once confirmed.
   * Fill a value to show it; leave "" to keep it off the page.
   */
  confirmed: {
    /** e.g. "30-day money-back guarantee" — add only with agreed refund terms. */
    moneyBackGuarantee: "",
    /** e.g. "17+ Tbps" — add only once confirmed for the official panels. */
    ddosShieldFigure: "",
  },
};

/** Returns a safe absolute http(s) URL, or null when the value is empty or invalid. */
export function externalUrl(value: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).href;
}
