"use client";
import './Reviws.css';

export default function Reviws({ t, lang }) {
  const sectionTitle = {
    es: 'Testimonios',
    en: 'Testimonials',
    fr: 'Témoignages',
    de: 'Referenzen',
    nl: 'Getuigenissen',
  }[lang] || 'Testimonios';

  return (
    <section className="reviws-section">
      <h2 className="reviws-title">{sectionTitle}</h2>
      {t.testimonios.map(({ text, author, event }, idx) => (
        <blockquote key={idx} className="reviws-blockquote">
          “{text}”
          <footer className="reviws-footer">
            {author} — <span>{event}</span>
          </footer>
        </blockquote>
      ))}
    </section>
  );
}
