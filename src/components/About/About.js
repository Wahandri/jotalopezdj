"use client";

import GradientText from "../GradientText/GradientText";
import "./About.css";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  // split paragraphs from translation (separated by double newline)
  const fullText = t("quienesSomosTexto") || "";
  const paragraphs = fullText.split("\n\n");

  const features = [
    { icon: "🎧", title: t("about.feature1") || "Experiencia", text: t("about.feature1Text") || "Más de 10 años creando la banda sonora perfecta. Actuaciones en festivales, bodas y eventos privados con sólida trayectoria." },
    { icon: "🎚️", title: t("about.feature2") || "Producción profesional", text: t("about.feature2Text") || "Soporte técnico completo: PA, iluminación, backline y técnicos certificados para sonido impecable." },
    { icon: "📋", title: t("about.feature3") || "Planificación", text: t("about.feature3Text") || "Planificación detallada: logística, horarios y coordinación con proveedores para que tu evento fluya sin sorpresas." },
  ];

  return (
    <section id="quienes-somos" className="about-section" ref={ref}>
      <div className="about-container">
        {/* LEFT - Text and features */}
        <div className="about-left">
          <motion.div
            className="about-header"
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="about-title text-gold">{t("nav.quienesSomos")}</h2>
            <p className="about-subtitle">{t("about.subtitle") || paragraphs[0] || "Nos apasiona crear experiencias inolvidables a través de la música."}</p>
          </motion.div>

          <motion.div
            className="about-paragraphs"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            {/* show next paragraph(s) as supporting text */}
            {paragraphs.slice(1, 3).map((p, i) => (
              <p key={i} className="about-text">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-content">
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-text">{f.text}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="about-cta"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <a href="/contacto" className="cta-button">{t("contactButton") || "Contactar"}</a>
          </motion.div>
        </div>

        {/* RIGHT - Image and remaining text */}
        <motion.div
          className="about-right"
          initial={{ x: 60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          
            <img src="/images/lopezDJ.jpg" alt="Hermanos DJ" className="about-main-image" />
          
        </motion.div>
      </div>
    </section>
  );
}
