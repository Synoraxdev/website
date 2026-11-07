import { features, featuresSection } from "../content/home";
import { Icon } from "./Icon";

export function Features() {
  return (
    <section id="features" className="section" aria-labelledby="features-title">
      <div className="container">
        <header className="section-head">
          <p className="kicker">{featuresSection.kicker}</p>
          <h2 id="features-title">{featuresSection.title}</h2>
        </header>
        <ul className="features-grid" role="list">
          {features.map((feature) => (
            <li key={feature.title} className="card feature-card reveal">
              <div className="card-fill">
                <span className="service-top">
                  <span className="icon-box">
                    <Icon name={feature.icon} />
                  </span>
                  <span className="service-tag">{feature.category}</span>
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="service-points" role="list">
                  {feature.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
