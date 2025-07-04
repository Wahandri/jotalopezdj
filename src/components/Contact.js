"use client";
import "./Contact.css";

export default function Contact({ t }) {
  const contactoInfo = t?.contactoInfo || {};

  return (
    <section id="contacto" className="contact-section">
      <h2 className="contact-title">{t?.nav?.contacto || "Contacto"}</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>612356789</p>
          <p>jotalopedj@gmail.com</p>
          <p>Malaga</p>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario enviado!");
          }}
        >
          <input
            type="text"
            placeholder={contactoInfo.nombrePlaceholder || "Tu nombre"}
            required
            className="contact-input"
          />
          <input
            type="email"
            placeholder={contactoInfo.emailPlaceholder || "Tu email"}
            required
            className="contact-input"
          />
          <textarea
            placeholder={contactoInfo.mensajePlaceholder || "Tu mensaje"}
            required
            rows={4}
            className="contact-textarea"
          />
          <button type="submit" className="contact-submit">
            {contactoInfo.enviarMensaje || "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}
