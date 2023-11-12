import styles from "../../styles/components/About.module.css";

export default function AboutSection() {
  return (
    <>
      <div className="mx-[10%] mb-20 flex flex-col items-center gap-4 pt-[10%] md:mx-[20%]">
        <div className="text-4xl md:text-7xl">About WebJam</div>
        <div className="text-start text-xl font-light sm:text-2xl md:text-2xl md:leading-relaxed">
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
        // style={{ top: -scrollValue * 0.4 + "px" }}
      />
      {/* </div> */}
      {/* <div
        className={`${styles.anteater} absolute left-[-5vw] top-0 w-[200px] sm:w-[250px] md:left-[4vw] md:top-[0] lg:w-[25vw]`}
        // style={{ top: -scrollValue * 0.1 + "px" }}
      />
      <div
        className={`${styles.pufferfish} absolute bottom-[20vw] left-[1vw] w-[50vw] md:bottom-[4vw]  lg:left-[5vw] lg:w-[30vw]`}
        // style={{ top: -scrollValue * 0.45 - 50 + "px" }}
      />
      <div
        className={`${styles.fishies} absolute bottom-[15vw] right-[1vw] w-[50vw] md:bottom-[7.5vw]  lg:right-[8vw] lg:w-[30vw]`}
        // style={{ top: -scrollValue * 0.2 - 50 + "px" }}
      />
      <div
        className={`${styles.oceanTopFloor} absolute bottom-0 left-0 w-[100%]`}
      /> */}
    </>
  );
}
