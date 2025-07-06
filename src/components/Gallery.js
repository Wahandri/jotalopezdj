"use client";

import "./Gallery.css";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/azotea2.jpg", alt: "Evento 1" },
    { src: "/images/IMG_4278.jpg", alt: "Luces" },
    { src: "/images/57486.JPG", alt: "DJ en vivo" },
    { src: "/images/azotea1.jpg", alt: "Boda" },
    { src: "/images/bodaViborilla.jpg", alt: "Proyección" },
    { src: "/images/BODAJUANITO.jpg", alt: "Boda" },
    { src: "/images/BodaViborillaPlaya.jpg", alt: "DJ luces" },
    { src: "/images/imagen2.jpg", alt: "Luces" },
    { src: "/images/bodaViborilla2.jpg", alt: "Cumpleaños" },
    { src: "/images/lopezDJ.jpg", alt: "Evento corporativo" },
  ];

  return (
    <section id="galeria" className="gallery-section">
      <h2 className="gallery-title text-gold">Galería</h2>
      <div className="masonry-grid">
        {images.map((img, index) => (
          <div key={index} className="masonry-item">
            <Image
              src={img.src}
              alt={img.alt}
              width={600} // proporcional, no exacto
              height={400}
              className="gallery-image"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center bottom",
                borderRadius: "0.5rem",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
