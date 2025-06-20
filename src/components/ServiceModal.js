"use client";
import './ServiceModal.css';

export default function ServiceModal({ servicio, onClose }) {
  if (!servicio) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">{servicio.title}</h2>
        <p className="modal-description">{servicio.description}</p>
        <p className="modal-extra">Aquí podrías agregar más contenido exclusivo sobre este servicio: duración, precios, qué incluye, etc.</p>
      </div>
    </div>
  );
}
