"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

export default function HeroSection() {
  const { t } = useTranslation();

  const bgImageRef = useRef(null);
  const logoRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const wave = document.createElement("div");
    wave.className = "wave-effect";

    const logoContainer = logo.parentElement;
    if (!logoContainer) return;

    logoContainer.appendChild(wave);

    const startAnimation = () => {
      // Añadir animaciones tras logo centrado
      logo.classList.add("logo-pulse");
      wave.classList.add("wave-animate");
      bgImageRef.current.style.opacity = "1";

      // titleRef.current.style.animation = "fade-in 0.6s ease forwards";
      subtitleRef.current.style.animation = "fade-in 0.6s ease forwards";
      buttonRef.current.style.animation = "fade-in 0.6s ease forwards";

      setTimeout(() => {
        subtitleRef.current.classList.add("fade-in-up");
        buttonRef.current.style.animation = "fade-in 0.5s ease forwards";
      }, 1500); // Espera a que la onda termine
    };

    // Esperar a que termine entrada del logo
    const entryDelay = setTimeout(startAnimation, 1000);

    return () => clearTimeout(entryDelay);
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-bg-image" ref={bgImageRef}></div>

      <div className="heroSection-logo-container">
        <img
          ref={logoRef}
          src="/logo.png"
          alt="Logo DJ"
          className="heroSection-logo"
        />
      </div>

      <h1 className="hero-title text-gold" ref={titleRef}>
        {t("hero.titulo")}
      </h1>

      <p className="hero-subtitle" ref={subtitleRef}>
        {t("hero.subtitulo")
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      </p>

      <a href="https://wa.me/TUNUMERO" className="hero-button" ref={buttonRef}>
        {t("hero.reserva")}
      </a>
    </section>
  );
}
