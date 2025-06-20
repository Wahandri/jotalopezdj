"use client";
import './Services.css';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function Services({ t, lang }) {
  const [selectedService, setSelectedService] = useState(null);

  const sectionTitle = {
    es: 'Servicios',
    en: 'Services',
    fr: 'Services',
    de: 'Dienstleistungen',
    nl: 'Diensten',
  }[lang] || 'Servicios';

  return (
    <section id="servicios" className="services-section">
      <h2 className="services-title">{sectionTitle}</h2>
      <div className="services-grid">
        {Array.isArray(t.servicios) &&
          t.servicios.map((servicio, index) => (
            <ServiceCard
              key={index}
              servicio={servicio}
              onClick={() => setSelectedService(servicio)}
            />
          ))}
      </div>

      <ServiceModal
        servicio={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
