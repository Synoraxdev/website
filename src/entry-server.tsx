import { renderToStaticMarkup, renderToString } from "react-dom/server";
import App from "./App";
import { SEOHead } from "./components/SEO";

export { siteConfig } from "./config/site";
export { pages } from "./content/pages";

/** Pre-rendered markup for the page body at `path`. */
export function render(path = "/"): string {
  return renderToString(<App path={path} />);
}

/** Pre-rendered <head> tags (title, meta, canonical, Open Graph, JSON-LD) for `path`. */
export function renderHead(path = "/"): string {
  return renderToStaticMarkup(<SEOHead path={path} />);
}
