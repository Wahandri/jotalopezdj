"use client";
import { useState } from "react";
import "./SpotyFloat.css";

export default function SpotyFloat() {
  const [spotifyOpen, setSpotifyOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "34681983812";
    const message = encodeURIComponent(
      "¡Hola! Quiero más informacion sobre vuestros servicios 🎧"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Botón WhatsApp (abajo derecha) */}
      <div className="float-btn whatsapp-btn">
        <button
          className="icon-only-button"
          onClick={handleWhatsAppClick}
          title="Contactar por WhatsApp"
        >
          <img src="/images/social.png" alt="WhatsApp" className="icon-img" />
        </button>
      </div>

      {/* Botón Spotify (abajo izquierda) */}
      <div className="float-btn spotify-btn">
        <div className="spotify-wrapper">
          <button
            className="icon-only-button"
            onClick={() => setSpotifyOpen(!spotifyOpen)}
            title="Abrir Spotify"
          >
            {spotifyOpen ? (
              <span className="close-icon">✖</span>
            ) : (
              <img
                src="/images/spotify.png"
                alt="Spotify"
                className="icon-img"
              />
            )}
          </button>

          {spotifyOpen && (
            <div className="spotify-player">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/6c1Vhr7hx3e6CgZCYOtxsV?utm_source=generator&theme=0"
                width="100%"
                height="100"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
