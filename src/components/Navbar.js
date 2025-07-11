"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import "./Navbar.css";

const sections = [
  "inicio",
  "quienes-somos",
  "servicios",
  "galeria",
  "contacto",
];

export default function Navbar({ lang, handleChangeLang }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scrollspy - detectar sección visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // offset

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getSectionName = (id) => {
    return {
      inicio: t("nav.inicio"),
      "quienes-somos": t("nav.quienesSomos"),
      servicios: t("nav.servicios"),
      galeria: t("nav.galeria"),
      contacto: t("nav.contacto"),
    }[id];
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <Link
          href="#inicio"
          className="navbar-logo text-gold"
          onClick={closeMenu}
        >
          <img src="/logopek.png" alt="Logo" className="navbar-logo" />
          {/* <h2>Jota Lopez DJ</h2> */}
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`navbar-link ${activeSection === id ? "active" : ""}`}
              onClick={closeMenu}
            >
              {getSectionName(id)}
            </Link>
          ))}

          <select
            onChange={handleChangeLang}
            value={lang}
            className="navbar-select"
            aria-label="Seleccionar idioma"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="nl">Nederlands</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
