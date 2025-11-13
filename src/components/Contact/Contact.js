"use client";
import { useState } from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useTranslation();
  const contact = t("contacto", { returnObjects: true });
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar tu servicio de correo (Emailjs, etc)
    console.log("Formulario enviado:", formData);
    setEnviado(true);
    setTimeout(() => {
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      setEnviado(false);
    }, 3000);
  };

  const contactItems = [
    {
      icon: "📞",
      titulo: "Teléfono",
      valor: contact.telefono,
      href: `tel:${contact.telefono.replace(/\s/g, "")}`,
    },
    {
      icon: "✉️",
      titulo: "Email",
      valor: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: "📍",
      titulo: "Ubicación",
      valor: contact.ubicacion,
      href: "#",
    },
    {
      icon: "⏰",
      titulo: "Disponibilidad",
      valor: contact.horario,
      href: "#",
    },
  ];

  const redes = [
    {
      nombre: contact.whatsapp,
      url: "https://wa.me/34612356789",
      icono: "💬",
    },
    {
      nombre: contact.instagram,
      url: "https://instagram.com/jotalopedj",
      icono: "📸",
    },
    {
      nombre: contact.facebook,
      url: "https://facebook.com/jotalopedj",
      icono: "👍",
    },
  ];

  return (
    <section id="contacto" className="contact-section">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="contact-title text-gold">{contact.titulo}</h2>
        <p className="contact-subtitle">{contact.descripcion}</p>
      </motion.div>

      <div className="contact-container">
        {/* Columna izquierda - Información de contacto */}
        <motion.div
          className="contact-info-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="contact-info-grid">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="contact-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="contact-card-icon">{item.icon}</div>
                <div className="contact-card-content">
                  <h3 className="contact-card-titulo">{item.titulo}</h3>
                  <p className="contact-card-valor">{item.valor}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Redes Sociales */}
          <motion.div
            className="social-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="social-titulo">{contact.redes}</h3>
            <div className="social-links">
              {redes.map((red, index) => (
                <motion.a
                  key={index}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">{red.icono}</span>
                  <span className="social-name">{red.nombre}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Columna derecha - Formulario */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="nombre">{contact.formularioNombre}</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{contact.formularioEmail}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">{contact.formularioAsunto}</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              placeholder="Asunto de tu mensaje"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">{contact.formularioMensaje}</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Cuéntanos sobre tu evento..."
              rows="5"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="form-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={enviado}
          >
            {enviado ? "✓ Mensaje enviado" : contact.formularioEnviar}
          </motion.button>

          {enviado && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
