import HeroSection from "../components/hero/hero";
import FAQSection from "../components/faq/faq";
import AboutSection from "../components/about/about";
import EventsSection from "../components/events/events";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        // className="flex flex-col md:flex-row md:ml-[4rem] md:mr-[2rem] md:place-content-end place-content-center min-h-[calc(100vh-110px)] mx-[2rem]"
        className="flex min-h-[calc(100vh-110px)] place-content-center"
      >
        <HeroSection />
      </section>
      <section id="about" className="flex place-content-center">
        <AboutSection />
      </section>
      <section id="events" className="flex">
        <EventsSection />
      </section>
      <section id="faq" className="flex place-content-center">
        <FAQSection />
      </section>
    </>
  );
}
