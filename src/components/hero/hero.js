import React, { useState, useEffect } from "react";
import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import styles from "../../styles/components/Hero.module.css";

export default function HeroSection() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollValue(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="relative z-10 mx-10 flex flex-col place-content-center gap-4"
        style={{ top: scrollValue * 0.2 + "px" }}
      >
        <div className="z-5 flex flex-col place-content-center">
          <h1 className="flex place-content-center text-center text-5xl md:text-7xl lg:text-8xl">
            WebJam 2023
          </h1>

          <div className="mx-auto flex flex-col place-content-center text-center sm:w-[75%] md:w-[65%]">
            <p className="mx-auto w-[75%] text-lg sm:w-[65%] md:w-[100%] md:text-2xl lg:text-3xl">
              ICS Student Council's week-long web application competition — no
              experience necessary!
            </p>
          </div>
        </div>

        <div className="z-5 mx-auto flex flex-col place-content-center gap-2 text-xl sm:flex-row sm:gap-6 md:text-2xl lg:text-3xl">
          <span className="flex flex-row items-center gap-1 md:gap-4">
            <FaCalendar size={20} />
            <h2>November 13-17</h2>
          </span>
          <span className="flex flex-row items-center gap-1 md:gap-4">
            <FaLocationArrow size={20} />
            <h2>Donald Bren Hall</h2>
          </span>
        </div>

        <div className="z-5 mx-auto mt-4 flex">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <a
              className="rounded-xl border-4 border-solid border-yellow-300 px-3 py-1 transition duration-300 hover:bg-yellow-300"
              href="https://docs.google.com/forms/d/e/1FAIpQLScSo2MhU1ehmKB9ERKE2QQ-okO6D_BgzZWXlZt-cEo7d_mOYQ/viewform"
              target="_blank"
            >
              Apply
            </a>
            {" or be a "}
            <a
              className="underline decoration-black transition duration-300 hover:decoration-[#00B929]"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6TAua_AGJz-svV4iHu5nUDNYT5qXT2JmHLON8txusYHuAZg/viewform"
              target="_blank"
            >
              mentor
            </a>
            !
          </p>
        </div>
      </div>

      <div
        className={`${styles.oceanTop} absolute left-0 top-0 w-[100%]`}
        style={{ top: -scrollValue * 0.4 + "px" }}
      />
      <div
        className={`${styles.anteater} absolute left-[-5vw] top-0 w-[200px] sm:w-[250px] md:left-[4vw] md:top-[0] lg:w-[25vw]`}
        style={{ top: -scrollValue * 0.1 + "px" }}
      />
      <div
        className={`${styles.pufferfish} absolute bottom-[20vw] left-[1vw] w-[50vw] md:bottom-[4vw]  lg:left-[5vw] lg:w-[30vw]`}
        style={{ top: -scrollValue * 0.45 - 50 + "px" }}
      />
      <div
        className={`${styles.fishies} absolute bottom-[15vw] right-[1vw] w-[50vw] md:bottom-[7.5vw]  lg:right-[8vw] lg:w-[30vw]`}
        style={{ top: -scrollValue * 0.2 - 50 + "px" }}
      />
      <div
        className={`${styles.oceanTopFloor} absolute bottom-0 left-0 w-[100%]`}
      />
    </>
  );
}
