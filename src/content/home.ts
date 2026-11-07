import type { IconName } from "../components/Icon";
import type { ServiceId } from "../config/site";

/** Editable homepage copy. Only publish details that HozvikCloud has confirmed. */

export const hero = {
  eyebrow: "India-based hosting for developers and gaming communities",
  title: { before: "Affordable hosting built for ", highlight: "performance", after: "." },
  description:
    "Game servers, VPS, bots, databases and more on fast NVMe hardware with Ryzen-class CPUs. Start with a plan that fits your budget and scale up as your project grows.",
  primaryCta: { label: "Explore Hosting", href: "#services" },
  secondaryCta: { label: "Why HozvikCloud", href: "#why" },
  trust: [
    {
      icon: "storage",
      label: "NVMe Storage",
      info: "NVMe storage gives fast reads and writes, so servers, bots and apps load and respond quickly. Capacity and exact hardware depend on your plan.",
    },
    {
      icon: "cpu",
      label: "Up to 4.9 GHz CPUs",
      info: "Ryzen-class processors with configurations up to 4.9 GHz for game servers and demanding apps. Exact hardware depends on your plan.",
    },
    {
      icon: "shieldCheck",
      label: "Multi-layer DDoS Filtering",
      info: "Multi-layer filtering protects the official HozvikCloud client, game and billing panels from malicious traffic, so you can always reach your services.",
    },
  ] satisfies { icon: IconName; label: string; info: string }[],
};

export const servicesSection = {
  kicker: "Hosting services",
  title: { before: "One platform for every ", highlight: "hosting workload", after: "." },
  description:
    "From multiplayer game servers to cloud infrastructure and domains, HozvikCloud brings your hosting together on NVMe storage and Ryzen-class compute, with plans that scale alongside your project.",
};

export type ServiceItem = {
  id: ServiceId;
  name: string;
  category: string;
  description: string;
  points: string[];
  icon: IconName;
};

export const services: ServiceItem[] = [
  {
    id: "gameServers",
    name: "Game Server Hosting",
    category: "Gaming",
    description:
      "Deploy and manage multiplayer game servers from a dedicated game panel built for server owners, running on high-frequency Ryzen-class processors and NVMe storage.",
    points: ["Dedicated game panel", "Ryzen-class CPUs, up to 4.9 GHz", "Plans for growing communities"],
    icon: "gamepad",
  },
  {
    id: "vps",
    name: "VPS Hosting",
    category: "Compute",
    description:
      "Flexible virtual servers for websites, applications and development workloads, backed by NVMe storage. Choose a plan that fits today and upgrade as demand increases.",
    points: ["Websites, apps and dev workloads", "NVMe storage", "Upgrade as you grow"],
    icon: "server",
  },
  {
    id: "lavalink",
    name: "Lavalink Hosting",
    category: "Media",
    description:
      "Dependable Lavalink hosting for compatible music bots, so audio playback for your community stays online around the clock.",
    points: ["For Lavalink-compatible music bots", "Built for always-on workloads", "Pairs with Bot Hosting"],
    icon: "music",
  },
  {
    id: "bots",
    name: "Bot Hosting",
    category: "Automation",
    description:
      "Keep your Discord and Telegram bots online on infrastructure designed for continuous operation, from a first project to a busy production bot.",
    points: ["Discord and Telegram bots", "Always-on operation", "Room to scale up"],
    icon: "bot",
  },
  {
    id: "databases",
    name: "Database Hosting",
    category: "Data",
    description:
      "Hosted databases for your applications, bots and projects, with NVMe-backed storage for fast reads and writes, kept alongside the services that depend on them.",
    points: ["For apps, bots and projects", "NVMe-backed storage", "Alongside your hosting"],
    icon: "database",
  },
  {
    id: "cloud",
    name: "Cloud Hosting",
    category: "Infrastructure",
    description:
      "Cloud hosting for workloads that need room to grow. Start with a budget-friendly plan and move to larger configurations as usage changes.",
    points: ["Scale as usage changes", "Budget-friendly entry plans", "Suited to teams and providers"],
    icon: "cloud",
  },
  {
    id: "domains",
    name: "Domains",
    category: "Web",
    description:
      "Domain services alongside your hosting, so your web address and your infrastructure are handled with a single provider.",
    points: ["Alongside your hosting", "One provider for domain and server", "Simple to manage"],
    icon: "globe",
  },
];

export const highlights = [
  {
    id: "compute",
    icon: "cpu",
    tag: "Performance",
    title: "Fast compute and storage",
    description:
      "Ryzen-class CPUs with configurations up to 4.9 GHz, NVMe storage for quick reads and writes, and DDR4 RAM where applicable. Exact hardware depends on your plan.",
    bullets: ["Ryzen-class CPUs", "Speeds up to 4.9 GHz", "NVMe storage", "DDR4 RAM where applicable"],
  },
  {
    id: "ddos",
    icon: "shieldCheck",
    tag: "Security",
    title: "Multi-layer DDoS protection",
    description:
      "HozvikCloud applies multi-layer filtering to its official client, game, and billing panels, so the places where you manage your services stay reachable.",
    bullets: ["Client panel", "Game panel", "Billing panel"],
  },
  {
    id: "panel",
    icon: "gamepad",
    tag: "Control",
    title: "A game panel built for server owners",
    description:
      "Manage your game servers from one clean panel made for server owners. Everyday tasks stay simple, so you can focus on your community instead of your setup.",
    bullets: ["One place for your game servers", "Built for server owners and communities"],
  },
] as const satisfies readonly {
  id: string;
  icon: IconName;
  tag: string;
  title: string;
  description: string;
  bullets: readonly string[];
}[];

export const featuresSection = {
  kicker: "Features",
  title: "Powerful hosting features built for performance and reliability",
};

export const features: {
  title: string;
  category: string;
  description: string;
  points: string[];
  icon: IconName;
}[] = [
  {
    title: "Instant Setup",
    category: "Setup",
    description: "Eligible services are provisioned fast, so your server, bot, or app is ready when you are.",
    points: ["Fast provisioning for eligible services", "Servers, bots and apps", "Ready when you are"],
    icon: "zap",
  },
  {
    title: "Unmatched Performance",
    category: "Performance",
    description: "Fast compute and NVMe storage keep supported workloads loading quickly and responding smoothly.",
    points: ["Fast compute", "NVMe storage", "Quick, smooth response"],
    icon: "gauge",
  },
  {
    title: "Responsive Support",
    category: "Support",
    description: "Get help during setup and after purchase, whenever questions come up.",
    points: ["Help during setup", "Help after purchase", "Answers when questions come up"],
    icon: "headset",
  },
  {
    title: "Fast Processors",
    category: "Compute",
    description: "CPUs with speeds up to 4.9 GHz give supported games and apps the processing speed they rely on.",
    points: ["Speeds up to 4.9 GHz", "Ryzen-class CPUs", "For games and apps"],
    icon: "cpu",
  },
  {
    title: "Advanced DDoS Protection",
    category: "Security",
    description: "Multi-layer filtering protects HozvikCloud's official client, game, and billing panels from malicious traffic.",
    points: ["Multi-layer filtering", "Client, game and billing panels", "Protection from malicious traffic"],
    icon: "shieldCheck",
  },
  {
    title: "Affordable and Scalable",
    category: "Value",
    description: "Start with a budget-friendly plan, then move up to larger options for bigger projects, teams, and providers.",
    points: ["Budget-friendly starting plans", "Move to larger options", "Projects, teams and providers"],
    icon: "trending",
  },
];

export const why = {
  kicker: "About HozvikCloud",
  title: "Why choose HozvikCloud?",
  intro:
    "HozvikCloud is an India-based hosting brand built on a simple idea: good hosting should not cost a fortune. We serve developers, gaming communities, growing teams, and providers who want dependable infrastructure at a fair price.",
  brand:
    "HozvikCloud keeps improving its platform as customer needs change.",
  points: [
    {
      icon: "coins",
      tag: "Cost",
      title: "Costs that stay manageable",
      description: "Start small with a budget-friendly plan and upgrade only when your project needs it.",
    },
    {
      icon: "headset",
      tag: "Support",
      title: "Support after purchase",
      description: "Help does not end at checkout. Reach the team during setup and once your service is live.",
    },
    {
      icon: "server",
      tag: "Reliability",
      title: "Built for always-on workloads",
      description: "Hardware built for continuous operation keeps your servers, bots, and apps ready to run.",
    },
    {
      icon: "layers",
      tag: "Scalability",
      title: "Small projects to larger deployments",
      description: "Room for a first project today and for teams and providers as you grow.",
    },
    {
      icon: "refresh",
      tag: "Platform",
      title: "Ongoing improvements",
      description: "We keep refining the platform, panels, and services as the community grows.",
    },
  ] satisfies { icon: IconName; tag: string; title: string; description: string }[],
};

export const faq = {
  kicker: "FAQ",
  title: "Frequently asked questions",
  description: "Quick answers about our services, upgrades, DDoS filtering and support.",
  help: { text: "Still have a question?", linkLabel: "Ask in our community", href: "#community" },
  items: [
    {
      question: "What hosting services does HozvikCloud offer?",
      answer:
        "HozvikCloud offers game server, VPS, Lavalink, bot, database, and cloud hosting, along with domain services.",
    },
    {
      question: "Is HozvikCloud based in India?",
      answer: "Yes. HozvikCloud is an India-based hosting brand.",
    },
    {
      question: "Can I start with a small project and upgrade later?",
      answer:
        "Yes. You can start with a plan that fits your budget and move to larger options as your project, team, or business grows.",
    },
    {
      question: "Which panels use multi-layer DDoS filtering?",
      answer:
        "HozvikCloud applies multi-layer DDoS filtering to its official client panel, game panel, and billing panel.",
    },
    {
      question: "Can I host Discord bots, Telegram bots, or Lavalink?",
      answer:
        "Yes. Bot Hosting runs Discord and Telegram bots on hosting designed for always-on workloads, and Lavalink Hosting supports compatible music bots.",
    },
    {
      question: "Can I get help after purchasing a hosting service?",
      answer: "Yes. HozvikCloud provides support during setup and after you purchase a hosting service.",
    },
  ],
};

export const community = {
  title: "Become part of the HozvikCloud community",
  description:
    "Meet fellow HozvikCloud customers, get help from our team, and stay up to date with platform news and new features.",
  buttonLabel: "Join our Discord",
};

export const footer = {
  description:
    "India-based hosting for game servers, VPS, cloud, bots, Lavalink, databases, and domains.",
};

/** Primary navigation. "Products" is a dropdown; add more items here as pages go live. */
export const nav = {
  overview: { label: "Overview", href: "/" },
  products: {
    label: "Products",
    items: [{ id: "botHosting", label: "Bot Hosting", href: "/bot-hosting/" }],
  },
};
