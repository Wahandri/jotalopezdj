"use client";

// Import the modal styles. Re‐use the same base styles from ServiceModal
import "./PriceModal.css";

export default function PriceModal({ paquete, onClose }) {
  if (!paquete) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          // Detiene la propagación para evitar cerrar el modal al hacer clic en el contenido
          e.stopPropagation();
        }}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">
          <h2 className="modal-title">{paquete.nombre}</h2>
          {/* Detalles del paquete */}
          <ul className="modal-list">
            {Array.isArray(paquete.detalles) &&
              paquete.detalles.map((detalle, index) => (
                <li key={index}>{detalle}</li>
              ))}
          </ul>
          {/* Precio del paquete */}
          <p className="modal-price text-gold">{paquete.precio}</p>
          {/* Llamada a la acción */}
          <a href="/contacto" className="contact-button">
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}