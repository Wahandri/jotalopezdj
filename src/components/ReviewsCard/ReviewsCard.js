"use client";
import "./ReviewsCard.css";
import { useTranslation } from "react-i18next";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  const { t } = useTranslation();

  // Obtenemos las reseñas desde el archivo de traducción
  // returnObjects: true nos permite recibir un array de objetos
  const testimonios = t("reseñas", { returnObjects: true }) || [];

  return (
    <section id="testimonios" className="reviews-section">
      <div className="display-center">
        <h2 className="reviews-title text-gold">{t("reviewsTitle")}</h2>
      </div>

      <div className="reviews-grid">
        {testimonios.map((review, index) => (
          <ReviewsCard
            key={index}
            rating={review.rating || 5}     // puedes añadir "rating" al JSON
            date={review.fecha}             // puedes añadir "fecha" al JSON
            text={`“${review.texto}”`}
            author={review.nombre}
          />
        ))}
      </div>
    </section>
  );
}
