"use client";

import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../i18n";
import { useTranslation } from "react-i18next";
import HeroSection from "@/components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import SpotyFloat from "@/components/SpotyFloat";

export default function Home() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "es");

  const handleChangeLang = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Hermanos DJ - Música para Eventos</title>
      </Head>

      <Navbar lang={lang} handleChangeLang={handleChangeLang} />

      <HeroSection />

      <About />

      <Services />

      <Reviews />

      <Gallery />

      <Contact />

      <Footer />

      <SpotyFloat />
    </div>
  );
}
