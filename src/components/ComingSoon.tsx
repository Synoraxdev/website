import { externalUrl, siteConfig } from "../config/site";
import { botHostingPage as page } from "../content/pages";

export function ComingSoon() {
  const discord = externalUrl(siteConfig.links.discord);
  return (
    <section className="hero coming-soon" aria-labelledby="page-title">
      <div className="container hero-inner">
        <p className="eyebrow rise" style={{ animationDelay: "0ms" }}>
          <span className="eyebrow-dot" aria-hidden="true" />
          {page.eyebrow}
        </p>
        <h1 id="page-title" className="rise" style={{ animationDelay: "80ms" }}>
          {page.title.before}
          <span className="hl">{page.title.highlight}</span>
          {page.title.after}
        </h1>
        <p className="hero-lead rise" style={{ animationDelay: "160ms" }}>
          {page.description}
        </p>
        <div className="hero-actions rise" style={{ animationDelay: "240ms" }}>
          <a className="btn btn-primary" href="/">
            {page.homeLabel}
          </a>
          {discord && (
            <a className="btn btn-secondary" href={discord} target="_blank" rel="noopener noreferrer">
              {page.discordLabel} ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
