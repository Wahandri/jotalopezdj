"use client";
import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="quienes-somos" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">{t('nav.quienesSomos')}</h2>
          <p className="about-text">{t('quienesSomosTexto')}</p>
        </div>
        <div className="about-right">
          <img
            src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hermanos DJ"
            className="about-main-image"
          />
        </div>
      </div>
    </section>
  );
}
