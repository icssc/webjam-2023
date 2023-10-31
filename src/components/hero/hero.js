import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import styles from "../../styles/components/Hero.module.css";

export default function HeroSection() {
  return (
    <>
      <div className="z-10 mx-10 flex flex-col place-content-center gap-4">
        <div className="flex flex-col place-content-center">
          <h1 className="flex place-content-center text-center text-5xl md:text-7xl lg:text-8xl">
            WebJam 2023
          </h1>

          <div className="mx-auto flex w-[75%] flex-col place-content-center text-center lg:w-[65%]">
            <p className="text-xl md:text-2xl lg:text-3xl">
              ICS Student Council's week-long web application competition — no
              experience necessary!
            </p>
          </div>
        </div>

        <div className="flex flex-row place-content-center gap-6 text-xl md:text-2xl lg:text-3xl">
          <span className="flex flex-row items-center gap-4">
            <FaCalendar size={20} />
            <h2>November 13-17</h2>
          </span>
          <span className="flex flex-row items-center gap-4">
            <FaLocationArrow size={20} />
            <h2>Donald Bren Hall</h2>
          </span>
        </div>

        <div className="mx-auto mt-4 flex">
          <p className="text-2xl md:text-3xl lg:text-4xl">
            <a
              className="rounded-xl border-4 border-solid border-yellow-300 px-3 py-1 hover:bg-yellow-300 transition duration-300"
              href="https://studentcouncil.ics.uci.edu/"
              target="_blank"
            >
              Apply
            </a>
            {" or be a "}
            <a 
            className="underline decoration-black hover:decoration-[#00B929] transition duration-300"
            href="https://studentcouncil.ics.uci.edu/"
            target="_blank"
            >
              mentor
            </a>!
          </p>
        </div>
      </div>

      <div className={`${styles.oceanTop} absolute left-0 top-0 w-[100%]`} />
      <div className={`${styles.dolphin} absolute left-[-25vw] md:left-[4vw] top-0 md:top-[0] w-[300px] lg:w-[30vw]`} />
      <div className={`${styles.pufferfish} absolute bottom-[20vw] md:bottom-[4vw] left-[1vw] lg:left-[5vw]  w-[50vw] lg:w-[30vw]`} />
      <div className={`${styles.fishies} absolute bottom-[15vw] md:bottom-[7.5vw] right-[1vw] lg:right-[8vw]  w-[50vw] lg:w-[30vw]`} />
      <div className={`${styles.oceanTopFloor} absolute bottom-0 left-0 w-[100%]`} />

    </>
  );
}
