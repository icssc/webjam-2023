import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import styles from "../../styles/components/Hero.module.css";
import Image from "next/image";

import OceanTopFloor from "../../../public/assets/img/graphics/layer1/OceanTopFloor.svg";
import OceanTopCeiling from "../../../public/assets/img/graphics/layer1/OceanTopCeiling.svg";
import PufferFish from "../../../public/assets/img/graphics/layer1/PufferFish.svg";
import Dolphin from "../../../public/assets/img/graphics/layer1/Dolphin.svg";
import Fishies from "../../../public/assets/img/graphics/layer1/Fishies.svg";

export default function HeroSection() {
  return (
    <>
      <div className="z-10 mx-10 flex flex-col place-content-center gap-4">
        <div className="flex flex-col place-content-center">
          <h1 className="flex place-content-center text-center text-7xl md:text-8xl lg:text-9xl">
            WebJam 2023
          </h1>

          <div className="mx-auto flex w-[75%] flex-col place-content-center text-center lg:w-[65%]">
            <p className="text-2xl lg:text-3xl">
              ICS Student Council's week-long web application competition — no
              experience necessary!
            </p>
          </div>
        </div>

        <div className="flex flex-row place-content-center gap-6 text-2xl text-gray-400 lg:text-3xl">
          <span className="flex flex-row items-center gap-2">
            <FaCalendar size={20} />
            <h2>November 13-17</h2>
          </span>
          <span className="flex flex-row items-center gap-2">
            <FaLocationArrow size={20} />
            <h2>DBH 3011</h2>
          </span>
        </div>

        <div className="mx-auto mt-4 flex">
          <p className="text-4xl">
            <a
              className="rounded-xl border-4 border-solid px-3 py-1"
              href="https://studentcouncil.ics.uci.edu/"
              target="_blank"
            >
              Apply
            </a>{" "}
            or be a <a className="underline">mentor</a>!
          </p>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 w-[100vw]">
        <Image
          src={OceanTopCeiling}
          alt="Ocean Ceiling"
          width={100}
          height={100}
          className="min-w-[125vw]"
        />
      </div>

      <div className="absolute left-[5vw] top-[5vw]">
        <Image
          src={Dolphin}
          alt="Dolphin"
          width={100}
          height={100}
          className="w-[30vw]"
        />
      </div>

      <div className="absolute bottom-[4vw] left-[8vw]">
        <Image
          src={PufferFish}
          alt="Pufferfish"
          width={100}
          height={100}
          className="w-[30vw]"
        />
      </div>

      <div className="absolute bottom-[7.5vw] right-[8vw]">
        <Image
          src={Fishies}
          alt="Fishies"
          width={100}
          height={100}
          className="w-[20vw]"
        />
      </div>

      <div className="absolute bottom-0 left-0 -z-10 w-[100vw]">
        <Image
          src={OceanTopFloor}
          alt="Ocean Floor"
          width={100}
          height={100}
          className="w-[100vw] min-w-[100vw]"
        />
      </div>
    </>
  );
}
