import { faq } from "../content/home";

/** Native <details>/<summary>: keyboard accessible (Tab, Enter, Space) with no JavaScript. */
export function FAQ() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <header className="faq-intro">
          <p className="kicker">{faq.kicker}</p>
          <h2 id="faq-title">{faq.title}</h2>
          <p className="faq-lead">{faq.description}</p>
          <p className="faq-help">
            {faq.help.text}
            <br />
            <a href={faq.help.href}>{faq.help.linkLabel}</a>
          </p>
        </header>
        <div className="faq-list reveal">
          {faq.items.map((item, index) => (
            <details key={item.question} className="faq-item" open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-mark" aria-hidden="true" />
              </summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
