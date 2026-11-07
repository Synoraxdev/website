import { externalUrl, siteConfig } from "../config/site";
import { footer } from "../content/home";
import { Wordmark } from "./Header";

export function Footer() {
  const { links } = siteConfig;
  const items = [
    { label: "Client Panel", href: externalUrl(links.clientPanel) },
    { label: "Game Panel", href: externalUrl(links.gamePanel) },
    { label: "Billing Panel", href: externalUrl(links.billingPanel) },
    { label: "Discord", href: externalUrl(links.discord) },
  ].filter((item): item is { label: string; href: string } => item.href !== null);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="brand" aria-label={`${siteConfig.name} home`}>
            <Wordmark />
          </a>
          <p>{footer.description}</p>
        </div>
        {items.length > 0 && (
          <nav aria-label="External links">
            <ul className="footer-links" role="list">
              {items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <div className="container footer-legal">
        <p>&copy; {new Date().getFullYear()} - Powered by {siteConfig.name}</p>
        <p className="footer-owner">
          Founder: {siteConfig.owner}
          {siteConfig.email && (
            <>
              {" · "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
