"use client";
import { useEffect, useRef } from 'react';
import './HeroSection.css';

export default function HeroSection({ t }) {
  const bgImageRef = useRef(null);
  const logoRef = useRef(null);
  const logoContainerRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // 1. Animación de entrada del logo (3s)
    const wave = document.createElement('div');
    wave.className = 'wave-effect';
    logoContainerRef.current.appendChild(wave);

    // 2. Al terminar el slide (3s), activar retumbo + onda
    const slideTimer = setTimeout(() => {
      // Retumbar el logo
      logoRef.current.style.animation = 'logo-pulse 0.8s ease';
      
      // Animación de la onda
      wave.style.animation = 'wave-animation 1.5s ease-out forwards';
      
      // Revelar fondo permanentemente
      bgImageRef.current.style.opacity = '1';
      
      // Mostrar texto y botón (1s después de la onda)
      setTimeout(() => {
        subtitleRef.current.style.animation = 'fade-in 0.5s ease forwards';
        buttonRef.current.style.animation = 'fade-in 0.5s ease forwards';
      }, 1000);
      
      // Eliminar onda después de la animación
      setTimeout(() => {
        wave.remove();
      }, 1500);
    }, 3000); // Esperar 3s (duración del slide-in)

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
      
      <p className="hero-subtitle" ref={subtitleRef}>
        Música que transforma tus eventos en momentos únicos
      </p>
      
      <a
        href="https://wa.me/TUNUMERO"
        className="hero-button"
        ref={buttonRef}
      >
        {t.reserva}
      </a>
    </section>
  );
}