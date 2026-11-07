import "@fontsource-variable/space-grotesk";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");

const path = window.location.pathname;

// The built page is pre-rendered, so hydrate it. Fall back to a fresh render
// if the markup is not present.
if (root.firstElementChild) {
  hydrateRoot(root, <App path={path} />);
} else {
  createRoot(root).render(<App path={path} />);
}
