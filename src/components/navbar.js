import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setShowNav(scrollingUp);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${showNav ? "opacity-100" : "opacity-0"} place-content-center md:pl-[4rem] md:place-content-start`}>
      <ul>
        <a href="/">
          <img src="/logo.svg" alt="ICSSC Logo" />
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
