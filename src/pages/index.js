import HeroSection from "../components/hero/hero";
import FAQSection from "../components/faq/faq";
import AboutSection from "../components/about/about";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col md:flex-row md:ml-[4rem] md:mr-[2rem] md:place-content-end place-content-center min-h-[calc(100vh-110px)] mx-[2rem]"
      >
        <HeroSection />
      </section>
      <section id="about" className="flex place-content-center">
        <AboutSection />
      </section>
      <section id="faq" className="flex place-content-center">
        <FAQSection />
      </section>
    </>
  );
}
