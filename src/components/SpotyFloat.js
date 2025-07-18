"use client";
import { useState } from "react";
import "./SpotyFloat.css";

export default function SpotyFloat() {
  const [spotifyOpen, setSpotifyOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "34612345678"; // Tu número sin espacios ni signos
    const message = encodeURIComponent(
      "¡Hola! Quiero más info sobre DJ Jota López 🎧"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="spoty-float-group">
      {/* Botón WhatsApp */}
      <button
        className="float-button whatsapp"
        onClick={handleWhatsAppClick}
        title="Contactar por WhatsApp"
      >
        🟢
      </button>

      {/* Botón Spotify */}
      <div className="spotify-wrapper">
        <button
          className="float-button spotify"
          onClick={() => setSpotifyOpen(!spotifyOpen)}
          title="Abrir Spotify"
        >
          {spotifyOpen ? "✖" : "🎵"}
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
  );
}
