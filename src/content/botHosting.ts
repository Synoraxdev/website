import type { IconName } from "../components/Icon";

/** Editable copy for the Bot Hosting page. Only publish details that HozvikCloud has confirmed. */

export const botHero = {
  eyebrow: "Products · Bot Hosting",
  title: { before: "Bot hosting that keeps your bot ", highlight: "online", after: "." },
  description:
    "Deploy your bot from GitHub, an archive or a template, add your token, and let it run 24/7 on NVMe storage with DDoS protection included.",
  primaryCta: { label: "View plans", href: "#plans" },
  secondaryCta: { label: "How it works", href: "#how" },
};

/* ---------- Features ---------- */

export const botFeaturesSection = {
  kicker: "HozvikCloud features",
  title: { before: "Everything your bot needs, ", highlight: "built in", after: "." },
};

export const botFeatures: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "refresh",
    title: "Egg changing supported",
    description: "Switch your server's egg whenever your project needs a different setup.",
  },
  {
    icon: "layers",
    title: "Variables Manager",
    description: "Manage your startup variables and environment values right from the panel.",
  },
  {
    icon: "bot",
    title: "Universal egg",
    description: "All languages supported in one server, so one egg runs every supported language.",
  },
  {
    icon: "cpu",
    title: "Unlimited CPU",
    description: "CPU is included on every plan, with no separate CPU limit.",
  },
  {
    icon: "globe",
    title: "Available subdomains",
    description: "Subdomains are available for your projects.",
  },
  {
    icon: "trending",
    title: "Upgrade or downgrade any time",
    description: "Move up whenever you grow. Downgrading your plan is available too, with credits provided.",
  },
];

/* ---------- Plans ---------- */

export const botPlansSection = {
  kicker: "Plans",
  title: { before: "Simple plans, ", highlight: "monthly pricing", after: "." },
  description: "Pick the size that fits your bot. Upgrade or downgrade any time.",
  currency: "₹",
  period: "/mo",
  cta: "Choose plan",
};

export type BotPlan = {
  name: string;
  tagline: string;
  price: number;
  ram: string;
  storage: string;
  backupSlots: number;
  ports: number;
  templates: boolean;
};

export const botPlans: BotPlan[] = [
  { name: "Spark", tagline: "For your first bot.", price: 15, ram: "256 MB", storage: "3 GB", backupSlots: 1, ports: 1, templates: false },
  { name: "Pulse", tagline: "Room for a growing bot.", price: 30, ram: "512 MB", storage: "6 GB", backupSlots: 2, ports: 1, templates: true },
  { name: "Nova", tagline: "For busier bots.", price: 50, ram: "1 GB", storage: "10 GB", backupSlots: 3, ports: 2, templates: true },
  { name: "Titan", tagline: "The most headroom.", price: 70, ram: "2 GB", storage: "15 GB", backupSlots: 2, ports: 3, templates: true },
];

/** Included in every plan. */
export const botPlanIncludes = [
  "CPU included (unlimited)",
  "Easy management",
  "All languages supported",
  "DDoS protection included",
  "24/7 hosting",
];

/* ---------- How it works ---------- */

export const botHowSection = {
  kicker: "How it works",
  title: { before: "Online in ", highlight: "three steps", after: "." },
};

export const botSteps = [
  {
    title: "Create a deployment",
    description: "From GitHub, an archive, a blank deployment or a community template.",
  },
  {
    title: "Add your token",
    description: "Set it in Environment and mark it secret. It applies on the next restart.",
  },
  {
    title: "Invite and forget",
    description: "Your bot stays online when your PC is off.",
  },
];

export const botDeploy = {
  label: "Available deploy modes",
  modes: ["GitHub", "Archive", "Blank deployment", "Community template"],
};

/* ---------- Supported stack ---------- */

export const botStackSection = {
  kicker: "Supported stack",
  title: { before: "Runtimes, databases and ", highlight: "one-click services", after: "." },
};

export const botStack: { label: string; items: string[] }[] = [
  {
    label: "Runtimes",
    items: ["Node.js", "Python", "Java", "PHP", "Go", "Rust", "C++", "Lua", "Bun", "Nodemon"],
  },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { label: "One-click services", items: ["Static site", "PHP site", "Lavalink", "Uptime Kuma"] },
];
