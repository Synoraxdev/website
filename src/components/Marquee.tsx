import { services } from "../content/home";
import { Icon } from "./Icon";

/** Slow-scrolling strip of service names. The duplicate copy is hidden from assistive tech. */
export function Marquee() {
  const list = (hidden: boolean) => (
    <ul className="marquee-list" role="list" aria-hidden={hidden || undefined}>
      {services.map((service) => (
        <li key={service.id}>
          <Icon name={service.icon} size={18} />
          <span>{service.name}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" aria-label="Hosting services overview">
      <div className="marquee-track">
        {list(false)}
        {list(true)}
        {list(true)}
        {list(true)}
      </div>
    </div>
  );
}
