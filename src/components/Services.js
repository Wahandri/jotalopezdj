"use client";
import "./Services.css";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'es';

  const sectionTitle = t('nav.servicios');
  const packageTitle = t('paquetesTitle');

  const servicios = t('servicios', { returnObjects: true }) || [];
  const paquetes = t('paquetes', { returnObjects: true }) || [];

  return (
    <section id="servicios" className="services-section">
      <h2 className="services-title">{sectionTitle}</h2>

      <div className="services-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <img
                src={servicio.icon || "/icons/default.svg"}
                alt={`${servicio.title} icon`}
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">{servicio.title}</h3>
              <p className="service-description">{servicio.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Paquetes */}
      <div className="service-packages">
        <h3 className="package-title">{packageTitle}</h3>
        <div className="package-list">
          {paquetes.map((paquete, index) => (
            <div key={index} className="package-card">
              <h4 className="package-name">{paquete.nombre}</h4>
              <ul className="package-items">
                {paquete.detalles.map((detalle, i) => (
                  <li key={i}>{detalle}</li>
                ))}
              </ul>
              <p className="package-price">{paquete.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
