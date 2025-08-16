"use client";

import "./ServiceModal.css";
import "./Services.css"; // for package list styles

export default function PackageModal({ paquete, onClose }) {
  if (!paquete) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {paquete.imagen && (
          <div className="modal-image">
            <img src={paquete.imagen} alt={paquete.nombre} />
          </div>
        )}

        <div className="modal-body">
          <h2 className="modal-title">{paquete.nombre}</h2>
          {paquete.descripcion && (
            <p className="modal-description">{paquete.descripcion}</p>
          )}
          <ul className="package-items">
            {paquete.detalles.map((detalle, i) => (
              <li key={i}>{detalle}</li>
            ))}
          </ul>
          <p className="package-price text-gold">{paquete.precio}</p>
        </div>
      </div>
    </div>
  );
}
