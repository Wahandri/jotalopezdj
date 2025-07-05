import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es/common.json";
import en from "./locales/en/common.json";
import nl from "./locales/nl/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      nl: { translation: nl },
    },
    lng: "es", // ✅ Idioma inicial
    fallbackLng: "es", // ✅ Fallback si la detección falla
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // Guarda selección en localStorage
    },
  });

export default i18n;
