"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

export default function HeroSection() {
  const { t } = useTranslation();
  const bgImageRef = useRef(null);
  const logoRef = useRef(null);
  const logoContainerRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const wave = document.createElement("div");
    wave.className = "wave-effect";

    const logoContainer = logoContainerRef.current;
    const logo = logoRef.current;
    const bgImage = bgImageRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const title = titleRef.current;

    if (!logoContainer || !logo || !bgImage || !subtitle || !button || !title)
      return;

    logoContainer.appendChild(wave);

    requestAnimationFrame(() => {
      logo.style.animation = "logo-pulse 0.8s ease";
      wave.style.animation = "wave-animation 1.5s ease-out forwards";
      bgImage.style.opacity = "1";
      title.style.opacity = "1";
      subtitle.style.animation = "fade-in 0.5s ease forwards";
      button.style.animation = "fade-in 0.5s ease forwards";
    });

    const waveCleanup = setTimeout(() => wave.remove(), 1500);
    return () => clearTimeout(waveCleanup);
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

      <h1 className="hero-title" ref={titleRef}>
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
