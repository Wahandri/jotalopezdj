"use client";
import { useEffect, useRef } from "react";
import "./HeroSection.css";

export default function HeroSection({ t }) {
  const bgImageRef = useRef(null);
  const logoRef = useRef(null);
  const logoContainerRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const wave = document.createElement("div");
    wave.className = "wave-effect";
    logoContainerRef.current.appendChild(wave);

    const slideTimer = setTimeout(() => {
      logoRef.current.style.animation = "logo-pulse 0.8s ease";
      wave.style.animation = "wave-animation 1.5s ease-out forwards";
      bgImageRef.current.style.opacity = "1";

      setTimeout(() => {
        subtitleRef.current.style.animation = "fade-in 0.5s ease forwards";
        buttonRef.current.style.animation = "fade-in 0.5s ease forwards";
      }, 0);

      setTimeout(() => {
        wave.remove();
      }, 1500);
    }, 1);

    return () => clearTimeout(slideTimer);
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-bg-image" ref={bgImageRef}></div>

      <div className="heroSection-logo-container" ref={logoContainerRef}>
        <img
          ref={logoRef}
          src="/logo.png"
          alt="Logo DJ"
          className="heroSection-logo"
        />
      </div>

      <h1 className="hero-title">{t.hero.titulo}</h1>

      <p className="hero-subtitle" ref={subtitleRef}>
        {t.hero.subtitulo.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <a href="https://wa.me/TUNUMERO" className="hero-button" ref={buttonRef}>
        {t.hero.reserva}
      </a>
    </section>
  );
}
