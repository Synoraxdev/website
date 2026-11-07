import { useEffect, useRef, useState } from "react";
import { externalUrl, siteConfig } from "../config/site";
import { hero, nav } from "../content/home";
import type { PageId } from "../content/pages";
import { Icon } from "./Icon";

export function Wordmark() {
  if (siteConfig.logo) {
    return <img className="logo-img" src={siteConfig.logo} alt={siteConfig.name} height={28} />;
  }
  return (
    <span className="wordmark">
      <img className="wordmark-mark" src="/logo-mark.png" width={34} height={34} alt="" aria-hidden="true" />
      <span className="wordmark-name">
        <span className="wordmark-hozvik">
          Hozvik
          <small>india</small>
        </span>
        <span className="wordmark-cloud">Cloud</span>
      </span>
    </span>
  );
}

const FOCUSABLE = "a[href], button:not([disabled])";

export function Header({ current = "home" }: { current?: PageId }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLLIElement>(null);
  const productsToggleRef = useRef<HTMLButtonElement>(null);
  const onProductPage = nav.products.items.some((item) => item.id === current);
  // Section links such as "#services" only exist on the homepage.
  const toHome = (href: string) => (current === "home" || !href.startsWith("#") ? href : `/${href}`);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const discord = externalUrl(siteConfig.links.discord);

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  };

  // Drawer behaviour: lock page scroll, focus the close button, Escape to close, trap Tab.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab" || !navRef.current) return;
      const items = Array.from(navRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.getClientRects().length > 0,
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Products dropdown: close on outside click or Escape.
  useEffect(() => {
    if (!productsOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) setProductsOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || open) return;
      setProductsOpen(false);
      productsToggleRef.current?.focus();
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [productsOpen, open]);

  // Close the drawer if the viewport grows to the desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 821px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <Wordmark />
        </a>

        {/* One navigation: inline on desktop, a right-hand drawer on mobile. */}
        <nav id="site-nav" ref={navRef} className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary">
          <div className="drawer-head">
            <span className="drawer-title">Menu</span>
            <button ref={closeRef} type="button" className="menu-toggle" aria-label="Close menu" onClick={() => close(true)}>
              <Icon name="close" size={24} />
            </button>
          </div>
          <ul className="nav-list" role="list">
            <li>
              <a
                className="nav-link"
                href={nav.overview.href} aria-current={current === "home" ? "page" : undefined}
                onClick={() => close()}
              >
                {nav.overview.label}
              </a>
            </li>
            <li ref={productsRef} className={`nav-item has-menu${productsOpen ? " is-open" : ""}`}>
              <button
                ref={productsToggleRef}
                type="button"
                className={`nav-link${onProductPage ? " is-active" : ""}`}
                aria-haspopup="true"
                aria-expanded={productsOpen}
                aria-controls="products-menu"
                onClick={() => setProductsOpen((value) => !value)}
              >
                {nav.products.label}
                <span className="nav-chevron">
                  <Icon name="chevron" size={16} />
                </span>
              </button>
              <ul id="products-menu" className="submenu" role="list">
                {nav.products.items.map((item) => (
                  <li key={item.id}>
                    <a
                      className="submenu-link"
                      href={item.href}
                      aria-current={current === item.id ? "page" : undefined}
                      onClick={() => close()}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="drawer-actions">
            <a className="btn btn-primary" href={toHome(hero.primaryCta.href)} onClick={() => close()}>
              {hero.primaryCta.label}
            </a>
            <a className="btn btn-secondary" href={toHome(hero.secondaryCta.href)} onClick={() => close()}>
              {hero.secondaryCta.label}
            </a>
            {discord && (
              <a className="btn btn-secondary" href={discord} target="_blank" rel="noopener noreferrer">
                Join our Discord ↗
              </a>
            )}
          </div>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      <div className={`nav-overlay${open ? " is-open" : ""}`} onClick={() => close()} aria-hidden="true" />
    </header>
  );
}
