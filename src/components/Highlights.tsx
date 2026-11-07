import { siteConfig } from "../config/site";
import { highlights } from "../content/home";
import { Icon } from "./Icon";

export function Highlights() {
  const figure = siteConfig.confirmed.ddosShieldFigure;
  return (
    <section id="highlights" className="section section-tight" aria-label="Platform highlights">
      <div className="container highlight-grid">
        {highlights.map((item) => (
          <article key={item.id} className="card highlight-card reveal">
            <div className="card-fill">
              <span className="service-top">
                <span className="icon-box">
                  <Icon name={item.icon} />
                </span>
                <span className="service-tag">{item.tag}</span>
              </span>
              {item.id === "ddos" && figure && (
                <p className="badge">
                  <Icon name="shield" size={16} /> {figure} DDoS Shield
                </p>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="service-points" role="list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Icon name="check" size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
