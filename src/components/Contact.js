"use client";
import './Contact.css';

export default function Contact({ t }) {
  return (
    <section id="contacto" className="contact-section">
      <h2 className="contact-title">{t.contacto}</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>{t.contactoInfo.telefono}</p>
          <p>{t.contactoInfo.email}</p>
          <p>{t.contactoInfo.ubicacion}</p>
        </div>
        <form 
          className="contact-form" 
          onSubmit={(e) => {
            e.preventDefault();
            alert('Formulario enviado!');
          }}
        >
          <input
            type="text"
            placeholder={t.contactoInfo.nombrePlaceholder}
            required
            className="contact-input"
          />
          <input
            type="email"
            placeholder={t.contactoInfo.emailPlaceholder}
            required
            className="contact-input"
          />
          <textarea
            placeholder={t.contactoInfo.mensajePlaceholder}
            required
            rows={4}
            className="contact-textarea"
          />
          <button type="submit" className="contact-submit">
            {t.contactoInfo.enviarMensaje}
          </button>
        </form>
      </div>
    </section>
  );
}
