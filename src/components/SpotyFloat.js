"use client";
import { useState } from "react";
import "./SpotyFloat.css";

export default function SpotyFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="spoty-float">
      <button className="toggle-button" onClick={() => setOpen(!open)}>
        {open ? "✖" : "🎵"}
      </button>

      {open && (
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
  );
}
