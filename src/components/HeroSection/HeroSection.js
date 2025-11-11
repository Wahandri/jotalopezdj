"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

export default function HeroSection() {
  const { t } = useTranslation();

  const bgImageRef = useRef(null);
  const logoRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);

  const images = [
    "/imagen4.webp",
    "/images/BODAJUANITO.jpg",
    "/images/BodaViborillaPlaya.jpg",
    "/images/azotea2.jpg",
    "/images/bodaViborilla2.jpg",
    "/images/imagen2.jpg",
    "/images/imagen3.avif",
    "/images/57486.JPG",
    "/images/imagen1.jpg",
    "/images/azotea1.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 segundos por imagen
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const bg = bgImageRef.current;

    // Fundido suave entre imágenes
    bg.classList.add("fade-out");

    setTimeout(() => {
      bg.style.backgroundImage = `url(${images[index]})`;
      bg.classList.remove("fade-out");
      bg.classList.remove("zoom-out");
      void bg.offsetWidth; // Fuerza reflow
      bg.classList.add("zoom-out");
    }, 300);
  }, [index]);

  useEffect(() => {
    const logo = logoRef.current;
    const wave = document.createElement("div");
    wave.className = "wave-effect";

    const logoContainer = logo.parentElement;
    if (!logoContainer) return;

    logoContainer.appendChild(wave);

    const startAnimation = () => {
      logo.classList.add("logo-pulse");
      wave.classList.add("wave-animate");
      bgImageRef.current.style.opacity = "1";

      subtitleRef.current.style.animation = "fade-in 0.6s ease forwards";
      buttonRef.current.style.animation = "fade-in 0.6s ease forwards";

      setTimeout(() => {
        subtitleRef.current.classList.add("fade-in-up");
        buttonRef.current.style.animation = "fade-in 0.5s ease forwards";
      }, 1500);
    };

    const entryDelay = setTimeout(startAnimation, 1000);
    return () => clearTimeout(entryDelay);
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div ref={bgImageRef} className="hero-bg-image" />

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
