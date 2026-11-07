import { externalUrl, siteConfig } from "../config/site";
import {
  botDeploy,
  botFeatures,
  botFeaturesSection,
  botHero,
  botHowSection,
  botPlanIncludes,
  botPlans,
  botPlansSection,
  botStack,
  botStackSection,
  botSteps,
} from "../content/botHosting";
import { Icon } from "./Icon";

type Title = { before: string; highlight: string; after: string };

function SectionTitle({ id, title }: { id: string; title: Title }) {
  return (
    <h2 id={id}>
      {title.before}
      <span className="hl">{title.highlight}</span>
      {title.after}
    </h2>
  );
}

export function BotHosting() {
  const billing = externalUrl(siteConfig.links.billingPanel);

  return (
    <>
      <section className="hero bot-hero" aria-labelledby="bot-title">
        <div className="container hero-inner">
          <p className="eyebrow rise" style={{ animationDelay: "0ms" }}>
            <span className="eyebrow-dot" aria-hidden="true" />
            {botHero.eyebrow}
          </p>
          <h1 id="bot-title" className="rise" style={{ animationDelay: "80ms" }}>
            {botHero.title.before}
            <span className="hl">{botHero.title.highlight}</span>
            {botHero.title.after}
          </h1>
          <p className="hero-lead rise" style={{ animationDelay: "160ms" }}>
            {botHero.description}
          </p>
          <div className="hero-actions rise" style={{ animationDelay: "240ms" }}>
            <a className="btn btn-primary" href={botHero.primaryCta.href}>
              {botHero.primaryCta.label}
            </a>
            <a className="btn btn-secondary" href={botHero.secondaryCta.href}>
              {botHero.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>

      <section id="bot-features" className="section" aria-labelledby="bot-features-title">
        <div className="container">
          <header className="section-head">
            <p className="kicker">{botFeaturesSection.kicker}</p>
            <SectionTitle id="bot-features-title" title={botFeaturesSection.title} />
          </header>
          <ul className="features-grid" role="list">
            {botFeatures.map((feature) => (
              <li key={feature.title} className="card feature-card reveal">
                <div className="card-fill">
                  <span className="icon-box">
                    <Icon name={feature.icon} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="plans" className="section" aria-labelledby="plans-title">
        <div className="container">
          <header className="section-head">
            <p className="kicker">{botPlansSection.kicker}</p>
            <SectionTitle id="plans-title" title={botPlansSection.title} />
            <p>{botPlansSection.description}</p>
          </header>
          <ul className="plans-grid" role="list">
            {botPlans.map((plan) => (
              <li key={plan.name} className="card plan-card reveal">
                <div className="plan-body">
                  <h3>{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <p className="plan-price">
                    <span className="plan-amount">
                      {botPlansSection.currency}
                      {plan.price}
                    </span>
                    <span className="plan-period">{botPlansSection.period}</span>
                  </p>
                  {billing && (
                    <a className="btn btn-secondary plan-cta" href={billing} target="_blank" rel="noopener noreferrer">
                      {botPlansSection.cta}
                    </a>
                  )}
                  <ul className="service-points plan-list" role="list">
                    <li>
                      <Icon name="check" size={16} />
                      <span>
                        <strong>{plan.ram}</strong> RAM
                      </span>
                    </li>
                    <li>
                      <Icon name="check" size={16} />
                      <span>
                        <strong>{plan.storage}</strong> NVMe storage
                      </span>
                    </li>
                    <li>
                      <Icon name="check" size={16} />
                      <span>
                        <strong>{plan.backupSlots}x</strong> backup slot{plan.backupSlots > 1 ? "s" : ""} (manual)
                      </span>
                    </li>
                    <li>
                      <Icon name="check" size={16} />
                      <span>
                        <strong>{plan.ports}x</strong> port{plan.ports > 1 ? "s" : ""} allocated
                      </span>
                    </li>
                    {plan.templates && (
                      <li>
                        <Icon name="check" size={16} />
                        <span>Templates provided (HozvikCloud Lab)</span>
                      </li>
                    )}
                    {botPlanIncludes.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="how" className="section" aria-labelledby="how-title">
        <div className="container">
          <header className="section-head">
            <p className="kicker">{botHowSection.kicker}</p>
            <SectionTitle id="how-title" title={botHowSection.title} />
          </header>
          <ol className="steps-grid" role="list">
            {botSteps.map((step, index) => (
              <li key={step.title} className="card step-card reveal">
                <div className="card-fill">
                  <span className="step-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="deploy-modes">
            <span className="deploy-label">{botDeploy.label}</span>
            <ul role="list">
              {botDeploy.modes.map((mode) => (
                <li key={mode} className="service-tag">
                  {mode}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="stack" className="section" aria-labelledby="stack-title">
        <div className="container">
          <header className="section-head">
            <p className="kicker">{botStackSection.kicker}</p>
            <SectionTitle id="stack-title" title={botStackSection.title} />
          </header>
          <div className="stack-table">
            {botStack.map((row) => (
              <div key={row.label} className="stack-row reveal">
                <h3 className="stack-label">{row.label}</h3>
                <ul className="stack-items" role="list">
                  {row.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
