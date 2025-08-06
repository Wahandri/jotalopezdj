"use client";
import "./Contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="contact-section">
      <div className="display-center">
        <h2 className="contact-title text-gold">{t("nav.contacto")}</h2>
      </div>
      <div className="contact-info">
        <p className="contact-prompt">{t("contactPrompt")}</p>
        <div className="contact-icons">
          <a
            href="https://wa.me/34612356789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/whatsapp.svg" alt="WhatsApp" />
          </a>
          <a
            href="https://instagram.com/jotalopedj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="mailto:jotalopedj@gmail.com">
            <img src="/icons/email.svg" alt="Email" />
          </a>
        </div>
      </div>
    </section>
  );
}
