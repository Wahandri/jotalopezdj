// src/components/Reviews.js
"use client";
import "./Reviews.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Reviews() {
  const { t } = useTranslation();
  const testimonios = t("reseñas", { returnObjects: true }) || [];

  // Si no hay testimonios en el JSON, usamos algunos de ejemplo
  const sample = testimonios.length
    ? testimonios
    : [
        { nombre: "Ana P.", texto: "¡La mejor pista de baile! Nos encantó el set.", rating: 5 },
        { nombre: "Luis R.", texto: "Gran profesionalidad y comunicación. 100% recomendables.", rating: 5 },
        { nombre: "María S.", texto: "Ambientazo toda la noche, exacto lo que pedimos.", rating: 5 },
        { nombre: "Diego M.", texto: "Sonido e iluminación top. Nuestros invitados alucinados.", rating: 5 },
      ];

  const [index, setIndex] = useState(0);
  const total = sample.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % total);
    }, 4000);
    return () => clearInterval(id);
  }, [total]);

  const goPrev = () => setIndex((p) => (p - 1 + total) % total);
  const goNext = () => setIndex((p) => (p + 1) % total);

  return (
    <section id="testimonios" className="reviews-section">
      <div className="display-center">
        <h2 className="reviews-title text-gold">{t("reviewsTitle")}</h2>
      </div>

      <div className="reviews-carousel">
        <div className="reviews-track">
          <div
            className="reviews-track-inner"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {sample.map((review, i) => (
              <div key={i} className="reviews-slide">
                <motion.div
                  className="review-card-uiverse"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <div className="review-card" style={{ padding: "2rem" }}>
                    <p className="review-text">“{review.texto}”</p>
                    <p className="review-author">— {review.nombre}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="reviews-nav reviews-prev"
          onClick={goPrev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className="reviews-nav reviews-next"
          onClick={goNext}
          aria-label="Siguiente"
        >
          ›
        </button>

        <div className="reviews-dots">
          {sample.map((_, i) => (
            <button
              key={i}
              className={`reviews-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
