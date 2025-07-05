"use client";
import "./ServiceCard.css";

export default function ServiceCard({ servicio, onClick }) {
  const getFallbackImage = (title) => {
    const lower = title.toLowerCase();
    if (
      lower.includes("boda") ||
      lower.includes("wedding") ||
      lower.includes("mariage") ||
      lower.includes("hochzeit") ||
      lower.includes("bruiloft")
    ) {
      return "../images/BODAJUANITO.jpg";
    }
    if (
      lower.includes("cumpleaños") ||
      lower.includes("birthday") ||
      lower.includes("anniversaire") ||
      lower.includes("geburtstag") ||
      lower.includes("verjaardag")
    ) {
      return "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg";
    }
    return "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg";
  };

  const imageToShow = servicio.image || getFallbackImage(servicio.title);

  return (
    <div className="service-card" onClick={() => onClick(servicio)}>
      <img src={imageToShow} alt={servicio.title} className="service-image" />
      <div className="service-content">
        <h3 className="service-title">{servicio.title}</h3>
        <p className="service-description">{servicio.description}</p>
      </div>
    </div>
  );
}
