import { useEffect } from "react";
import { BotHosting } from "./components/BotHosting";
import { Community } from "./components/Community";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { resolvePage } from "./content/pages";
import { enhance } from "./enhance";

export default function App({ path = "/" }: { path?: string }) {
  useEffect(() => enhance(), []);
  const page = resolvePage(path);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header current={page.id} />
      <main id="main">
        {page.id === "botHosting" ? (
          <BotHosting />
        ) : (
          <>
            <Hero />
            <Marquee />
            <Services />
            <Highlights />
            <Features />
            <WhyChoose />
            <FAQ />
            <Community />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
