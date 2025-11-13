"use client";

import "./PriceModal.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PriceModal({ paquete, onClose }) {
  const { t } = useTranslation();

  if (!paquete) return null;

  // Determinar si es el paquete más popular (generalmente el del medio)
  const isPopular = paquete.popular === true;

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`modal-content price-modal ${isPopular ? "popular" : ""}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Badge Popular */}
        {isPopular && (
          <div className="popular-badge">
            ⭐ {t("popularLabel") || "Más Popular"}
          </div>
        )}

        {/* Botón cerrar */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <div className="modal-body price-modal-body">
          {/* Encabezado con nombre y precio */}
          <motion.div
            className="price-modal-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <h2 className="price-modal-title">{paquete.nombre}</h2>
            <div className="price-display">
              <span className="price-value text-gold">{paquete.precio}</span>
            </div>
          </motion.div>

          {/* Descripción si existe */}
          {paquete.descripcion && (
            <motion.p
              className="price-modal-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {paquete.descripcion}
            </motion.p>
          )}

          {/* Detalles/características */}
          <motion.div
            className="price-modal-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="features-title">
              {t("featuresLabel") || "Lo que incluye:"}
            </h3>
            <ul className="features-list">
              {Array.isArray(paquete.detalles) &&
                paquete.detalles.map((detalle, index) => (
                  <motion.li
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.05, duration: 0.3 }}
                  >
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{detalle}</span>
                  </motion.li>
                ))}
            </ul>
          </motion.div>

          {/* Call-to-action */}
          <motion.div
            className="price-modal-cta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <a href="/contacto" className="cta-button primary-button">
              {t("contactButton") || "Contactar"}
            </a>
            <button
              onClick={onClose}
              className="cta-button secondary-button"
            >
              {t("closeButton") || "Volver"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}