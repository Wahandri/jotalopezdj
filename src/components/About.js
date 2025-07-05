"use client";

import GradientText from "./GradientText";
import "./About.css";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="quienes-somos" className="about-section" ref={ref}>
      <div className="about-container">
        <div className="about-left">
          <motion.div
            className="display-center"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="about-title text-gold">{t("nav.quienesSomos")}</h2>
          </motion.div>

          <motion.p
            className="about-text"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {t("quienesSomosTexto")}
          </motion.p>
        </div>

        <motion.div
          className="about-right"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <img
            src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hermanos DJ"
            className="about-main-image"
          />
        </motion.div>
      </div>
    </section>
  );
}
