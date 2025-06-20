"use client";

import Head from 'next/head';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import translations from '../translations/index';
import HeroSection from '@/components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState('es');
  const t = translations[lang].nav;

  const handleChangeLang = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Hermanos DJ - Música para Eventos</title>
      </Head>
      

      <Navbar lang={lang} handleChangeLang={handleChangeLang} t={t} />

      <HeroSection t={t} />

      <About t={t} />

      <Services t={t} lang={lang} />

      <Reviews t={t} lang={lang} />
      
      <Contact t={t} />

      <Footer t={t} />
    </div>
  );
}
