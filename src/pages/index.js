import FAQSection from "../components/faq/faq";

export default function Home() {
  return (
    <>
      <section id="about" className="h-[20vh]">
        <h1>ABOUT SECTION</h1>
      </section>
      <section id="faq" className="flex place-content-center">
        <FAQSection />
      </section>
    </>
  )
}
