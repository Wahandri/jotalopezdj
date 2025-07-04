// src/components/Reviews.js
"use client";
import "./Reviews.css";

export default function Reviews({ t }) {
  const testimonios = Array.isArray(t.testimonios) ? t.testimonios : [];

  return (
    <section id="testimonios" className="reviews-section">
      <h2 className="reviews-title">{t.tituloTestimonios}</h2>
      <div className="reviews-grid">
        {testimonios.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">“{review.text}”</p>
            <p className="review-author">
              — {review.author},{" "}
              <span className="review-event">{review.event}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
