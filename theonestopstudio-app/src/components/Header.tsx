"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";

export default function Header() {
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Close menu when navigating (basic heuristic: pathname change)
  // Could be enhanced with a useEffect listening to pathname.

  return (
    <header className="header">
      <div className="container">
        <Link href={isSpanish ? "/es" : "/"} className="logo-link" aria-label="Home">
          <Image
            src="/Assets/The One Stop Studio.jpg"
            alt="The One Stop Studio"
            width={50}
            height={50}
            priority
          />
        </Link>
        <h2 className="site-title">The One Stop Studio</h2>
        <nav className="navbar" aria-label="Main navigation">
          <ul className={`burger-menu ${menuOpen ? "active" : ""}`}>
            <li className="burger-item">
              <Link href={isSpanish ? "/es/services" : "/services"} onClick={() => setMenuOpen(false)}>
                {isSpanish ? "Servicios" : "All Services"}
              </Link>
            </li>
            <li className="burger-item">
              <Link href={isSpanish ? "/es/about" : "/about"} onClick={() => setMenuOpen(false)}>
                {isSpanish ? "Sobre Nosotros" : "About Us"}
              </Link>
            </li>
            <li className="burger-item">
              <Link href={isSpanish ? "/es/coming-soon" : "/coming-soon"} onClick={() => setMenuOpen(false)}>
                {isSpanish ? "Reservar" : "Book an Appointment"}
              </Link>
            </li>
            <li className="burger-item">
              <Link href={isSpanish ? "/" : "/es"} onClick={() => setMenuOpen(false)}>
                {isSpanish ? "English" : "En Español"}
              </Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className={`burger ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
}
