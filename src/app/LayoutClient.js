"use client";

import { useState } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar/Navbar";

export default function LayoutClient({ children }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "es");

  const handleChangeLang = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar lang={lang} handleChangeLang={handleChangeLang} />
      {children}
    </div>
  );
}
