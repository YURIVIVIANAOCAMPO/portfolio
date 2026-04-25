"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx(styles.navbar, scrolled && "glass-effect")}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          VIVIANA
        </Link>
        
        <div className={styles.links}>
          <Link href="#proyectos" className={styles.link}>Proyectos</Link>
          <Link href="#skills" className={styles.link}>Habilidades</Link>
          <Link href="#experiencia" className={styles.link}>Experiencia</Link>
          <button className={styles.contactBtn}>Contacto</button>
        </div>
      </div>
    </nav>
  );
}
