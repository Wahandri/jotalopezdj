// src/components/Reviews.js
"use client";
import "./Reviews.css";
import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();
  const testimonios = t("reseñas", { returnObjects: true }) || [];

  return (
    <section id="testimonios" className="reviews-section">
      <div className="display-center">
        <h2 className="reviews-title text-gold">{t("reviewsTitle")}</h2>
      </div>
      <div className="reviews-grid">
        {testimonios.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">“{review.texto}”</p>
            <p className="review-author">— {review.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
