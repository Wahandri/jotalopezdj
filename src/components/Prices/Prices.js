"use client";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Prices.css";
import PriceModal from "../PriceModal/PriceModal";

// Componente Prices
// Muestra las tarjetas de paquetes y abre un modal al hacer clic en ellas
export default function Prices() {
  const { t } = useTranslation();
  // Obtener el array de paquetes desde las traducciones
  const paquetes = t("paquetes", { returnObjects: true }) || [];
  const packageTitle = t("paquetesTitle");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Estado para almacenar el paquete actualmente seleccionado
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="precios" className="prices-section" ref={ref}>
      {/* Título de la sección */}
      <motion.div
        className="display-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="prices-title text-gold">{packageTitle}</h3>
      </motion.div>

      {/* Lista de paquetes */}
      <div className="prices-grid">
        {paquetes.map((paquete, index) => (
          <motion.div
            key={index}
            className={`price-card ${paquete.popular ? "popular" : ""}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2 * index,
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            onClick={() => setSelectedPackage(paquete)}
            style={{ cursor: "pointer" }}
          >
            {/* Badge Popular */}
            {paquete.popular && (
              <div className="price-card-badge">
                ⭐ {t("popularLabel") || "Más Popular"}
              </div>
            )}

            {/* Encabezado */}
            <div className="price-card-header">
              <h4 className="price-card-name">{paquete.nombre}</h4>
              <p className="price-card-price text-gold">{paquete.precio}</p>
            </div>

            {/* Descripción */}
            {paquete.descripcion && (
              <p className="price-card-description">{paquete.descripcion}</p>
            )}

            {/* Lista de características */}
            <div className="price-card-features">
              <h5 className="features-subtitle">
                {t("featuresLabel") || "Lo que incluye:"}
              </h5>
              <ul className="features-list">
                {paquete.detalles.map((detalle, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{detalle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón CTA */}
            {/*
            <button className="price-card-cta">
              {t("contactButton") || "Contactar"}
            </button>
              */}
          </motion.div>
        ))}
      </div>

      {/* Modal para mostrar los detalles del paquete seleccionado */}
      <PriceModal paquete={selectedPackage} onClose={() => setSelectedPackage(null)} />
    </section>
  );
}