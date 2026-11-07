/**
 * Progressive enhancement, run after hydration. The page is fully visible
 * without it: it only adds the scroll-reveal entrance.
 */
export function enhance(): () => void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let observer: IntersectionObserver | undefined;
  if (!reduce && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          observer?.unobserve(el);
          // Hand control back to normal hover transitions once the entrance is done.
          window.setTimeout(() => el.classList.remove("pre", "is-in"), 1000);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.classList.add("pre");
      observer?.observe(el);
    });
  }

  return () => {
    observer?.disconnect();
  };
}
