"use client";
import "./Contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const contactoInfo = t("contactoInfo", { returnObjects: true }) || {};

  return (
    <section id="contacto" className="contact-section">
      <div className="display-center">
        <h2 className="contact-title text-gold">{t("nav.contacto")}</h2>
      </div>
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
            placeholder={contactoInfo.nombrePlaceholder}
            required
            className="contact-input"
          />
          <input
            type="email"
            placeholder={contactoInfo.emailPlaceholder}
            required
            className="contact-input"
          />
          <textarea
            placeholder={contactoInfo.mensajePlaceholder}
            required
            rows={4}
            className="contact-textarea"
          />
          <button type="submit" className="contact-submit">
            {contactoInfo.enviarMensaje}
          </button>
        </form>
      </div>
    </section>
  );
}
