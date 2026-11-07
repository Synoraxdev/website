import { externalUrl, siteConfig } from "../config/site";
import { services, servicesSection } from "../content/home";
import { Icon } from "./Icon";

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <p className="kicker">{servicesSection.kicker}</p>
          <h2 id="services-title">
            {servicesSection.title.before}
            <span className="hl">{servicesSection.title.highlight}</span>
            {servicesSection.title.after}
          </h2>
          <p>{servicesSection.description}</p>
        </header>
        <ul className="services-grid" role="list">
          {services.map((service) => {
            const url = externalUrl(siteConfig.links.services[service.id]);
            const content = (
              <>
                <span className="service-top">
                  <span className="icon-box">
                    <Icon name={service.icon} />
                  </span>
                  <span className="service-tag">{service.category}</span>
                </span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="service-points" role="list">
                  {service.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {url && (
                  <span className="card-more" aria-hidden="true">
                    Learn more ↗
                  </span>
                )}
              </>
            );
            return (
              <li key={service.id} className="card service-card reveal">
                {url ? (
                  <a className="card-fill" href={url} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div className="card-fill">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
