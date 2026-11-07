import { why } from "../content/home";
import { Icon } from "./Icon";

export function WhyChoose() {
  const [lead, ...rest] = why.points;

  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container">
        <div className="why-head">
          <div>
            <p className="kicker">{why.kicker}</p>
            <h2 id="why-title">{why.title}</h2>
          </div>
          <div>
            <p className="why-intro">{why.intro}</p>
            <p className="why-brand">{why.brand}</p>
          </div>
        </div>

        <ul className="why-bento" role="list">
          <li className="why-tile why-tile-lead reveal">
            <span className="why-watermark" aria-hidden="true">
              <Icon name={lead.icon} size={240} />
            </span>
            <div className="why-tile-top">
              <span className="icon-box">
                <Icon name={lead.icon} />
              </span>
              <span className="why-tag">{lead.tag}</span>
            </div>
            <div className="why-tile-body">
              <h3>{lead.title}</h3>
              <p>{lead.description}</p>
            </div>
          </li>

          {rest.map((point) => (
            <li key={point.title} className="why-tile reveal">
              <div className="why-tile-top">
                <span className="icon-box">
                  <Icon name={point.icon} />
                </span>
                <span className="why-tag">{point.tag}</span>
              </div>
              <div className="why-tile-body">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
