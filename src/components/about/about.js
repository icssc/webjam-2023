import styles from "../../styles/components/About.module.css";

export default function AboutSection() {
  return (
    <>
      <div className="z-50 mx-[10%] flex flex-col items-center gap-4 pb-24 md:mx-[20%] md:pb-36 md:pt-24">
        <div className="text-center text-4xl md:text-7xl">About WebJam</div>
        <div className="text-center text-xl font-light sm:text-2xl md:text-2xl md:leading-relaxed lg:text-start">
          <p>
            WebJam is a week-long event where students come together to create
            fully functional web applications. Whether you've never heard of web
            applications or built many, WebJam is here to give you a platform to
            learn, build, and create!
          </p>
          <br />
          <p>
            Over the past 3 years, WebJam has focused on encouraging beginners
            and people who are curious about web technologies — from frontend to
            backend! Our goal is to provide learning and networking
            opportunities for our community of developers, especially ones that
            come from underrepresented backgrounds in the tech space.
          </p>
        </div>
      </div>

      <div
        className={`${styles.middleTop} absolute left-0 top-0 z-30 w-[100%]`}
      />
      <div
        className={`${styles.dolphin} absolute bottom-[-45vw] left-[-15vw] w-[80vw] lg:bottom-[-22vw] lg:left-[-7.5vw] lg:w-[30vw]`}
        // style={{ top: -scrollValue * 0.45 - 50 + "px" }}
      />
    </>
  );
}
