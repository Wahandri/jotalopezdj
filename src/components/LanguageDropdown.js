import React, { useState, useRef, useEffect } from "react";
import "./LanguageDropdown.css";

const languages = [
  { code: "es", flag: "/images/espana.png", alt: "Español" },
  { code: "en", flag: "/images/uk.png", alt: "English" },
  { code: "nl", flag: "/images/holanda.png", alt: "Nederlands" },
];

export default function LanguageDropdown({ lang, handleChangeLang }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef(null);

  const selectedLang = languages.find((l) => l.code === lang);

  const handleSelect = (code) => {
    const fakeEvent = { target: { value: code } };
    handleChangeLang(fakeEvent);
    setOpen(false);
  };

  // Mostrar animación de salida antes de desmontar visualmente
  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 300); // ⏱️ tiempo de animación de salida
      return () => clearTimeout(timeout);
    }
  }, [open]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flag-dropdown" ref={dropdownRef}>
      <button className="flag-button" onClick={() => setOpen(!open)}>
        <img src={selectedLang.flag} alt={selectedLang.alt} />
      </button>

      {visible && (
        <div className={`flag-options ${open ? "show" : "hide"}`}>
          {languages.map((l) => (
            <button
              key={l.code}
              className="flag-option"
              onClick={() => handleSelect(l.code)}
            >
              <img src={l.flag} alt={l.alt} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
