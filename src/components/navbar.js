import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [whiteText, setWhiteText] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setShowNav(scrollingUp);

      // Check if the user has scrolled past the "About" section
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutSectionPos = aboutSection.offsetTop;
        setWhiteText(currentScrollPos > aboutSectionPos);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${showNav ? "opacity-100" : "opacity-0"} place-content-center md:pl-[4rem] md:place-content-start ${whiteText ? styles.whiteText : ""}`}>
      <ul>
        <a href="#">
          <img src="/webjam_logo.png" alt="WebJam 2023 Logo" />
        </a>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}
