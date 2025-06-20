"use client";
import './Gallery.css';

export default function Gallery() {
  const images = [
    { src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', alt: 'Evento 1' },
    { src: 'https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg', alt: 'Luces' },
    { src: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg', alt: 'DJ en vivo' },
    { src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg', alt: 'Fiesta' },
    { src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg', alt: 'Proyección' },
    { src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg', alt: 'Boda' },
    { src: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg', alt: 'DJ luces' },
    { src: 'https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg', alt: 'Luces' },
  ];

  return (
    <section id="galeria" className="gallery-section">
      <h2 className="gallery-title">Galería</h2>
      <div className="masonry-grid">
        {images.map((img, index) => (
          <div key={index} className="masonry-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
