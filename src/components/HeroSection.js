"use client";
import './HeroSection.css';

export default function HeroSection({ t }) {
  return (
    <section id="inicio" className="hero-section">
      <div className="heroSection-logo-container">
        <img
          src="/logo.png"
          alt="Logo Jota Lopez"
          className="heroSection-logo"
        />
      </div>
      {/* <h1 className="hero-title">HERMANOS DJ</h1> */}
      <p className="hero-subtitle">Música que transforma tus eventos en momentos únicos</p>
      <a
        href="https://wa.me/TUNUMERO"
        className="hero-button"
      >
        {t.reserva}
      </a>
    </section>
  );
}
