"use client";

import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import translations from "../translations/index";
import HeroSection from "@/components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import SpotyFloat from "@/components/SpotyFloat";

export default function Home() {
  const [lang, setLang] = useState("es");

  const langData = translations[lang] || translations["es"];

  const t = {
    nav: langData.nav,
    hero: langData.hero,
    quienesSomos: langData.nav.quienesSomos,
    quienesSomosTexto: langData.quienesSomosTexto,
    servicios: langData.servicios,
    paquetes: langData.paquetes,
    contactoInfo: langData.contactoInfo,
    reseñas: langData.reseñas,
  };

  const handleChangeLang = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Hermanos DJ - Música para Eventos</title>
      </Head>

      <Navbar lang={lang} handleChangeLang={handleChangeLang} t={t.nav} />

      <HeroSection t={translations[lang]} />

      <About
        t={{
          quienesSomos: t.quienesSomos,
          quienesSomosTexto: t.quienesSomosTexto,
        }}
      />

      <Services
        t={{ servicios: t.servicios, paquetes: t.paquetes }}
        lang={lang}
      />

      <Reviews t={t.reseñas} lang={lang} />

      <Gallery />

      <Contact t={t.contactoInfo} />

      <Footer t={t.nav} />

      <SpotyFloat />
    </div>
  );
}
