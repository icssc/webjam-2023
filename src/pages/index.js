import HeroSection from "../components/hero/hero";
import FAQSection from "../components/faq/faq";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex
        flex-col
        md:flex-row
        md:mx-[4rem]
        md:place-content-end 
        place-content-center
        min-h-[calc(100vh-110px)]
        mx-[2rem]
        "
      >
        <HeroSection />
      </section>
      <section id="about" className="h-[20vh]">
        <h1>ABOUT SECTION</h1>
      </section>
      <section id="faq" className="flex place-content-center">
        <FAQSection />
      </section>
    </>
  )
}
