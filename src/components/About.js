"use client";
import GradientText from "./GradientText";
import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="quienes-somos" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="display-center">
            <h2 className="about-title text-gold">{t("nav.quienesSomos")}</h2>
          </div>
          <p className="about-text">{t("quienesSomosTexto")}</p>
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
