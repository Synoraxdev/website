import { externalUrl, siteConfig } from "../config/site";
import { community } from "../content/home";
import { Icon } from "./Icon";

export function Community() {
  const invite = externalUrl(siteConfig.links.discord);
  return (
    <section id="community" className="section section-tight" aria-labelledby="community-title">
      <div className="container">
        <div className="community-card reveal">
          <div className="community-copy">
            <h2 id="community-title">{community.title}</h2>
            <p>{community.description}</p>
          </div>
          {invite ? (
            <a className="btn btn-primary" href={invite} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={18} />
              <span>{community.buttonLabel}</span>
            </a>
          ) : (
            <span className="btn btn-primary is-disabled" role="link" aria-disabled="true">
              <Icon name="chat" size={18} />
              <span>{community.buttonLabel}</span>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
