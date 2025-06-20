"use client";
import Link from 'next/link';
import './Navbar.css';

export default function Navbar({ lang, handleChangeLang, t }) {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <img
        src="/logoP.png"
        alt="Logo de la empresa: JotaLopezDJ"
        className="navbar-logo"
        />
        <div className="navbar-links">
          <Link href="#inicio" className="navbar-link">{t.inicio}</Link>
          <Link href="#quienes-somos" className="navbar-link">{t.quienesSomos}</Link>
          <Link href="#servicios" className="navbar-link">
            {lang === 'es' ? 'Servicios' : lang === 'en' ? 'Services' : lang === 'fr' ? 'Services' : lang === 'de' ? 'Dienstleistungen' : 'Diensten'}
          </Link>
          <Link href="#galeria" className="navbar-link">{t.galeria}</Link>
          <Link href="#contacto" className="navbar-link">{t.contacto}</Link>

          <select
            onChange={handleChangeLang}
            value={lang}
            className="navbar-select"
            aria-label="Seleccionar idioma"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="nl">Nederlands</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
