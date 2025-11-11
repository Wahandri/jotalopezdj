"use client";
import "./ServiceModal.css";

export default function ServiceModal({ servicio, onClose }) {
  if (!servicio) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {/* Imagen grande en el top del modal */}
        {servicio.image && (
          <div className="modal-image">
            <img src={servicio.image} alt={servicio.title} />
          </div>
        )}

        {/* Contenido del modal */}
        <div className="modal-body">
          <h2 className="modal-title">{servicio.title}</h2>

          {servicio.extendedText ? (
            <p className="modal-description">{servicio.extendedText}</p>
          ) : (
            <p className="modal-description">{servicio.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
