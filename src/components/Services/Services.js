"use client";

import "./Services.css";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { serviciosData } from "@/data/servicios";

export default function Services() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "es";

  const sectionTitle = t("nav.servicios");
  const packageTitle = t("paquetesTitle");

  const serviciosTraducidos = t("servicios", { returnObjects: true }) || [];

  const servicios = serviciosTraducidos.map((servicio, i) => ({
    ...servicio,
    image: serviciosData[i]?.image || "/images/default.jpg",
  }));

  const paquetes = t("paquetes", { returnObjects: true }) || [];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="servicios" className="services-section" ref={ref}>
      <motion.div
        className="display-center"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="services-title text-gold">{sectionTitle}</h2>
      </motion.div>

      <div className="services-grid">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ x: "100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.2 * index,
            }}
          >
            <div className="service-image-wrapper">
              <img
                src={servicio.image}
                alt={`${servicio.title} imagen`}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">{servicio.title}</h3>
              <p className="service-description">{servicio.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
