"use client";

import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../i18n";
import { useTranslation } from "react-i18next";
import HeroSection from "@/components/HeroSection/HeroSection";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Reviews from "@/components/Reviews/Reviews";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import SpotyFloat from "@/components/SpotyFloat/SpotyFloat";
import Prices from "@/components/Prices/Prices";

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
        <title>Jota Lopez DJ - Música para Eventos</title>
      </Head>

      <Navbar lang={lang} handleChangeLang={handleChangeLang} />

      <HeroSection />

      <About />

      <Services />

      <Prices />

      <Reviews />

      <Gallery />

      <Contact />

      <Footer />

      <SpotyFloat />
    </div>
  );
}
