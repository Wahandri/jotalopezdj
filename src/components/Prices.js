"use client";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Services.css"; // usa mismos estilos

export default function Prices() {
  const { t } = useTranslation();
  const paquetes = t("paquetes", { returnObjects: true }) || [];
  const packageTitle = t("paquetesTitle");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="precios" className="service-packages" ref={ref}>
      <motion.div
        className="display-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="package-title text-gold">{packageTitle}</h3>
      </motion.div>

      <div className="package-list">
        {paquetes.map((paquete, index) => (
          <motion.div
            key={index}
            className="package-card animated-card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2 * index,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 24px rgba(255, 255, 255, 0.15)",
            }}
          >
            <h4 className="package-name">{paquete.nombre}</h4>
            <ul className="package-items">
              {paquete.detalles.map((detalle, i) => (
                <li key={i}>{detalle}</li>
              ))}
            </ul>
            <p className="package-price text-gold">{paquete.precio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
