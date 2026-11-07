import { absoluteUrl, siteConfig } from "../config/site";
import { faq } from "../content/home";
import { resolvePage } from "../content/pages";

/**
 * All head metadata for the homepage. It is rendered into the built HTML by the
 * pre-render step (see src/entry-server.tsx and scripts/prerender.mjs).
 */

const home = siteConfig.url;
const image = siteConfig.socialImage ? absoluteUrl(siteConfig.socialImage) : "";

const organization = {
  "@type": "Organization",
  "@id": `${home}#organization`,
  name: siteConfig.name,
  url: home,
  description: siteConfig.description,
  logo: absoluteUrl(siteConfig.icon),
};

const website = {
  "@type": "WebSite",
  "@id": `${home}#website`,
  name: siteConfig.name,
  url: home,
  description: siteConfig.description,
  inLanguage: "en-IN",
  publisher: { "@id": organization["@id"] },
};

// Mirrors the visible FAQ exactly, because it is generated from the same data.
const faqPage = {
  "@type": "FAQPage",
  "@id": `${home}#faq`,
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function buildJsonLd(isHome: boolean): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": isHome ? [organization, website, faqPage] : [organization, website],
  }).replace(/</g, "\\u003c");
}

export function SEOHead({ path = "/" }: { path?: string }) {
  const page = resolvePage(path);
  const isHome = page.id === "home";
  const title = page.title;
  const description = page.description;
  const canonical = new URL(page.path, siteConfig.url).href;
  const robots = page.indexable ? siteConfig.robots : "noindex, follow";
  const jsonLd = buildJsonLd(isHome);
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content={siteConfig.themeColor} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:secure_url" content={image} />}
      {image && <meta property="og:image:type" content="image/png" />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {image && <meta property="og:image:alt" content={siteConfig.socialImageAlt} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={siteConfig.socialImageAlt} />}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}
