import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const MEDIA_LINKS = [
  {
    key: 1,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaFacebook />,
  },
  {
    key: 2,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaInstagram />,
  },
  {
    key: 3,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaDiscord />,
  },
  {
    key: 4,
    link: "https://www.facebook.com/ICSStudentCouncil/",
    icon: <FaGithub />,
  },
  {
    key: 5,
    link: "mailto: icssc@uci.edu",
    icon: <FaEnvelope />,
  },
];

export default function Footer() {
  return (
    <footer className="w-[100%] flex flex-col gap-5 p-6 sm:p-10">
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
  );
}
