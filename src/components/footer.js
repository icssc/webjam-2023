import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import Clubs from "../../assets/clubs.json";
import styles from "../styles/Footer.module.css";

const MEDIA_LINKS = [
  {
    id: 1,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    link: "https://www.instagram.com/icssc.uci/",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    link: "https://discord.gg/c4t5dGcM9S",
    icon: <FaDiscord />,
  },
  {
    id: 4,
    link: "https://github.com/icssc",
    icon: <FaGithub />,
  },
  {
    id: 5,
    link: "mailto: icssc@uci.edu",
    icon: <FaEnvelope />,
  },
];

const ClubElement = (props) => {
  const { name, logo, website } = props;
  return (
    <div className="flex items-center text-center">
      <div className="w-[100px]">
        <Link href={website ? website : ""} target="_blank" rel="noreferrer">
          <img src={logo} alt={name} className="rounded-lg" />
        </Link>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <div id="footer" className="flex flex-col gap-4 py-36 sm:gap-10">
        {/* <div className="flex flex-col gap-4">
          <span className="flex justify-center text-4xl md:text-7xl">Thank You to Our Partners!</span>
          <div className="flex flex-row mx-auto overflow-x-scroll w-[50%] gap-6">
            {Clubs.map((club) => (
              <ClubElement {...club} key={club.id} />
            ))}
          </div>
        </div> */}
        <footer className="flex w-[100%] flex-col gap-5 p-6">
          <div className="flex justify-center gap-5 text-3xl sm:gap-12 sm:text-4xl">
            {MEDIA_LINKS.map((link) => (
              <Link
                href={link.link}
                target="_blank"
                referrerPolicy="noreferrer"
                key={link.id}
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center text-lg sm:text-2xl">
              Made with 💖 by the ICSSC team
            </div>
            <div className="sm:text-md flex justify-center text-sm">
              Copyright © 2023 ICSSC
            </div>
          </div>
        </footer>

        <div
          className={`${styles.bottomFloor} absolute bottom-0 left-0 z-30 h-[100%] w-[100%]`}
        />
        <div
          className={`${styles.treasure} absolute bottom-0 left-[5%] z-30 h-[100%] w-[25vw] lg:left-[10%]`}
        />
      </div>
    </>
  );
}
