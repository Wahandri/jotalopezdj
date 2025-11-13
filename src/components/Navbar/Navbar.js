"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import "./Navbar.css";

const navLinks = [
  { href: "/", label: "nav.inicio" },
  { href: "/servicios", label: "nav.servicios" },
  { href: "/galeria", label: "nav.galeria" },
  { href: "/contacto", label: "nav.contacto" },
];

export default function Navbar({ lang, handleChangeLang }) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Logo - Izquierda */}
        <Link
          href="/"
          className="navbar-logo text-gold"
          onClick={closeMenu}
        >
          <img src="/logopek.png" alt="Logo" className="navbar-logo" />
        </Link>

        {/* Toggle button para móvil */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Links - Centro */}
        <div className={`navbar-links-center ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${isActive(link.href) ? "active" : ""}`}
              onClick={closeMenu}
            >
              {t(link.label)}
            </Link>
          ))}
        </div>

        {/* Language Dropdown - Derecha */}
        <div className="navbar-right">
          <LanguageDropdown lang={lang} handleChangeLang={handleChangeLang} />
        </div>
      </nav>
    </header>
  );
}
