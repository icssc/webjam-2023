import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import Clubs from "../assets/data/clubs.json";
import Image from "next/image";

const MEDIA_LINKS = [
  {
    id: 1,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaDiscord />,
  },
  {
    id: 4,
    link: "https://www.facebook.com/ICSStudentCouncil/",
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
          <Image
            src={logo}
            alt={name}
            width={160}
            height={160}
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 sm:gap-10 mt-10">
      <div className="flex flex-col gap-4">
        <span className="flex justify-center text-3xl">Our Member Clubs</span>
        <div className="flex flex-row mx-auto overflow-x-scroll w-[50%] gap-6">
          {Clubs.map((club) => (
            <ClubElement {...club} key={club.id} />
          ))}
        </div>
      </div>
      <footer className="w-[100%] flex flex-col gap-5 p-6">
        <div className="flex justify-center gap-5 sm:gap-12 text-3xl sm:text-4xl">
          {MEDIA_LINKS.map((link) => (
            <Link
              href={link.link}
              target="_blank"
              referrerPolicy="noreferrer"
              key={link.key}
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center text-lg sm:text-2xl">
            Made with 💖 by the ICSSC team
          </div>
          <div className="flex justify-center text-sm sm:text-md">
            Copyright © 2023 ICSSC
          </div>
        </div>
      </footer>
    </div>
  );
}
