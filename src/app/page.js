"use client";

// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      quienesSomos: 'Quiénes Somos',
      servicios: [
        { title: 'Bodas', description: 'Música romántica y ambiente elegante para tu día especial.' },
        { title: 'Cumpleaños', description: 'La mejor fiesta con los éxitos que todos aman.' },
        { title: 'Fiestas Privadas', description: 'DJs en vivo para eventos exclusivos y corporativos.' },
      ],
      galeria: 'Galería',
      contacto: 'Contacto',
      reserva: '¡Reserva por WhatsApp!',
      quienesSomosTexto: `Somos dos hermanos apasionados por la música electrónica y eventos. Con más de 10 años de experiencia, creamos ambientes únicos para bodas, cumpleaños y fiestas privadas.`,
      testimonios: [
        {
          text: "Los Hermanos DJ hicieron de nuestra boda un evento inolvidable. ¡Todos bailaron hasta el amanecer!",
          author: "María y Carlos",
          event: "Boda en Sevilla"
        },
        {
          text: "Contratamos a los hermanos para el cumpleaños de mi hijo y fue increíble. ¡Los niños no paraban de bailar!",
          author: "Laura Martínez",
          event: "Cumpleaños 15 años"
        }
      ],
      contactoInfo: {
        telefono: '📞 +34 123 456 789',
        email: '✉️ info@hermanosdj.com',
        ubicacion: '📍 Sevilla, España',
        enviarMensaje: 'Enviar Mensaje',
        nombrePlaceholder: 'Nombre',
        emailPlaceholder: 'Email',
        mensajePlaceholder: 'Mensaje',
      },
      footerRights: '© 2025 Hermanos DJ. Todos los derechos reservados.',
      social: ['Instagram', 'Facebook', 'SoundCloud', 'YouTube'],
    }
  },
  en: {
    nav: {
      inicio: 'Home',
      quienesSomos: 'About Us',
      servicios: [
        { title: 'Weddings', description: 'Romantic music and elegant atmosphere for your special day.' },
        { title: 'Birthdays', description: 'The best party with hits everyone loves.' },
        { title: 'Private Parties', description: 'Live DJs for exclusive and corporate events.' },
      ],
      galeria: 'Gallery',
      contacto: 'Contact',
      reserva: 'Book via WhatsApp!',
      quienesSomosTexto: `We are two brothers passionate about electronic music and events. With over 10 years of experience, we create unique atmospheres for weddings, birthdays, and private parties.`,
      testimonios: [
        {
          text: "Hermanos DJ made our wedding unforgettable. Everyone danced till dawn!",
          author: "Maria and Carlos",
          event: "Wedding in Seville"
        },
        {
          text: "We hired the brothers for my son's birthday and it was amazing. The kids didn’t stop dancing!",
          author: "Laura Martinez",
          event: "15th Birthday"
        }
      ],
      contactoInfo: {
        telefono: '📞 +34 123 456 789',
        email: '✉️ info@hermanosdj.com',
        ubicacion: '📍 Seville, Spain',
        enviarMensaje: 'Send Message',
        nombrePlaceholder: 'Name',
        emailPlaceholder: 'Email',
        mensajePlaceholder: 'Message',
      },
      footerRights: '© 2025 Hermanos DJ. All rights reserved.',
      social: ['Instagram', 'Facebook', 'SoundCloud', 'YouTube'],
    }
  },
  fr: {
    nav: {
      inicio: 'Accueil',
      quienesSomos: 'Qui sommes-nous',
      servicios: [
        { title: 'Mariages', description: 'Musique romantique et ambiance élégante pour votre journée spéciale.' },
        { title: 'Anniversaires', description: 'La meilleure fête avec les hits que tout le monde aime.' },
        { title: 'Fêtes Privées', description: 'DJs en direct pour événements exclusifs et d\'entreprise.' },
      ],
      galeria: 'Galerie',
      contacto: 'Contact',
      reserva: 'Réservez via WhatsApp!',
      quienesSomosTexto: `Nous sommes deux frères passionnés de musique électronique et d'événements. Avec plus de 10 ans d'expérience, nous créons des ambiances uniques pour mariages, anniversaires et fêtes privées.`,
      testimonios: [
        {
          text: "Les Hermanos DJ ont rendu notre mariage inoubliable. Tout le monde a dansé jusqu'à l'aube!",
          author: "Maria et Carlos",
          event: "Mariage à Séville"
        },
        {
          text: "Nous avons engagé les frères pour l'anniversaire de mon fils et c'était incroyable. Les enfants n'arrêtaient pas de danser!",
          author: "Laura Martinez",
          event: "Anniversaire 15 ans"
        }
      ],
      contactoInfo: {
        telefono: '📞 +34 123 456 789',
        email: '✉️ info@hermanosdj.com',
        ubicacion: '📍 Séville, Espagne',
        enviarMensaje: 'Envoyer le message',
        nombrePlaceholder: 'Nom',
        emailPlaceholder: 'Email',
        mensajePlaceholder: 'Message',
      },
      footerRights: '© 2025 Hermanos DJ. Tous droits réservés.',
      social: ['Instagram', 'Facebook', 'SoundCloud', 'YouTube'],
    }
  },
  de: {
    nav: {
      inicio: 'Startseite',
      quienesSomos: 'Über uns',
      servicios: [
        { title: 'Hochzeiten', description: 'Romantische Musik und elegante Atmosphäre für Ihren besonderen Tag.' },
        { title: 'Geburtstage', description: 'Die beste Party mit den Hits, die alle lieben.' },
        { title: 'Private Partys', description: 'Live-DJs für exklusive und Firmenveranstaltungen.' },
      ],
      galeria: 'Galerie',
      contacto: 'Kontakt',
      reserva: 'Über WhatsApp buchen!',
      quienesSomosTexto: `Wir sind zwei Brüder, die sich für elektronische Musik und Events begeistern. Mit über 10 Jahren Erfahrung schaffen wir einzigartige Atmosphären für Hochzeiten, Geburtstage und Privatpartys.`,
      testimonios: [
        {
          text: "Hermanos DJ haben unsere Hochzeit unvergesslich gemacht. Alle tanzten bis zum Morgengrauen!",
          author: "Maria und Carlos",
          event: "Hochzeit in Sevilla"
        },
        {
          text: "Wir haben die Brüder für den Geburtstag meines Sohnes engagiert und es war unglaublich. Die Kinder hörten nicht auf zu tanzen!",
          author: "Laura Martinez",
          event: "15. Geburtstag"
        }
      ],
      contactoInfo: {
        telefono: '📞 +34 123 456 789',
        email: '✉️ info@hermanosdj.com',
        ubicacion: '📍 Sevilla, Spanien',
        enviarMensaje: 'Nachricht senden',
        nombrePlaceholder: 'Name',
        emailPlaceholder: 'Email',
        mensajePlaceholder: 'Nachricht',
      },
      footerRights: '© 2025 Hermanos DJ. Alle Rechte vorbehalten.',
      social: ['Instagram', 'Facebook', 'SoundCloud', 'YouTube'],
    }
  },
  nl: {
    nav: {
      inicio: 'Start',
      quienesSomos: 'Over Ons',
      servicios: [
        { title: 'Bruiloften', description: 'Romantische muziek en een elegante sfeer voor jouw speciale dag.' },
        { title: 'Verjaardagen', description: 'Het beste feest met de hits die iedereen leuk vindt.' },
        { title: 'Privéfeesten', description: 'Live DJ\'s voor exclusieve en zakelijke evenementen.' },
      ],
      galeria: 'Galerij',
      contacto: 'Contact',
      reserva: 'Boek via WhatsApp!',
      quienesSomosTexto: `Wij zijn twee broers die gepassioneerd zijn door elektronische muziek en evenementen. Met meer dan 10 jaar ervaring creëren we unieke sferen voor bruiloften, verjaardagen en privéfeesten.`,
      testimonios: [
        {
          text: "Hermanos DJ maakten onze bruiloft onvergetelijk. Iedereen danste tot zonsopgang!",
          author: "Maria en Carlos",
          event: "Bruiloft in Sevilla"
        },
        {
          text: "We huurden de broers in voor de verjaardag van mijn zoon en het was geweldig. De kinderen stopten niet met dansen!",
          author: "Laura Martinez",
          event: "15e Verjaardag"
        }
      ],
      contactoInfo: {
        telefono: '📞 +34 123 456 789',
        email: '✉️ info@hermanosdj.com',
        ubicacion: '📍 Sevilla, Spanje',
        enviarMensaje: 'Bericht verzenden',
        nombrePlaceholder: 'Naam',
        emailPlaceholder: 'Email',
        mensajePlaceholder: 'Bericht',
      },
      footerRights: '© 2025 Hermanos DJ. Alle rechten voorbehouden.',
      social: ['Instagram', 'Facebook', 'SoundCloud', 'YouTube'],
    }
  },
};

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

      {/* Header transparente con navbar */}
      <header className="fixed w-full z-10 bg-black bg-opacity-50 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">HERMANOS DJ</div>
          <div className="flex space-x-4 items-center">
            <Link href="#inicio" legacyBehavior><a className="hover:text-purple-400">{t.inicio}</a></Link>
            <Link href="#quienes-somos" legacyBehavior><a className="hover:text-purple-400">{t.quienesSomos}</a></Link>
            <Link href="#servicios" legacyBehavior><a className="hover:text-purple-400">{lang === 'es' ? 'Servicios' : lang === 'en' ? 'Services' : lang === 'fr' ? 'Services' : lang === 'de' ? 'Dienstleistungen' : 'Diensten'}</a></Link>
            <Link href="#galeria" legacyBehavior><a className="hover:text-purple-400">{t.galeria}</a></Link>
            <Link href="#contacto" legacyBehavior><a className="hover:text-purple-400">{t.contacto}</a></Link>

            {/* Selector de idioma */}
            <select
              onChange={handleChangeLang}
              value={lang}
              className="ml-4 bg-gray-800 text-white rounded px-2 py-1 focus:outline-none"
              aria-label="Seleccionar idioma"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="nl">Nederlands</option>
            </select>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="text-center pt-32 pb-20 bg-gradient-to-b from-purple-900 to-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">HERMANOS DJ</h1>
        <p className="text-xl md:text-2xl mb-8">Música que transforma tus eventos en momentos únicos</p>
        <a 
          href="https://wa.me/TUNUMERO" 
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full inline-block"
        >
          {t.reserva}
        </a>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">{t.quienesSomos}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Hermanos DJ" 
              className="rounded-xl w-full h-auto max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg">{t.quienesSomosTexto}</p>
            <div className="mt-6 flex space-x-4">
              <img 
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="DJ 1" 
                className="w-24 h-24 rounded-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="DJ 2" 
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">{lang === 'es' ? 'Servicios' : lang === 'en' ? 'Services' : lang === 'fr' ? 'Services' : lang === 'de' ? 'Dienstleistungen' : 'Diensten'}</h2>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {Array.isArray(t.servicios) && t.servicios.map((servicio, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={
                  servicio.title.toLowerCase().includes('boda') || servicio.title.toLowerCase().includes('wedding') || servicio.title.toLowerCase().includes('mariage') || servicio.title.toLowerCase().includes('hochzeit') || servicio.title.toLowerCase().includes('bruiloft')
                    ? 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    : servicio.title.toLowerCase().includes('cumpleaños') || servicio.title.toLowerCase().includes('birthday') || servicio.title.toLowerCase().includes('anniversaire') || servicio.title.toLowerCase().includes('geburtstag') || servicio.title.toLowerCase().includes('verjaardag')
                    ? 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    : 'https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt={servicio.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{servicio.title}</h3>
                <p>{servicio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{lang === 'es' ? 'Testimonios' : lang === 'en' ? 'Testimonials' : lang === 'fr' ? 'Témoignages' : lang === 'de' ? 'Referenzen' : 'Getuigenissen'}</h2>
        {t.testimonios.map(({ text, author, event }, idx) => (
          <blockquote key={idx} className="mb-8 italic text-gray-300">
            “{text}”
            <footer className="mt-2 font-semibold">{author} — <span className="font-normal">{event}</span></footer>
          </blockquote>
        ))}
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-gray-900 px-6 max-w-4xl mx-auto rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">{t.contacto}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-4 text-lg">
            <p>{t.contactoInfo.telefono}</p>
            <p>{t.contactoInfo.email}</p>
            <p>{t.contactoInfo.ubicacion}</p>
          </div>
          <form className="md:w-1/2 flex flex-col space-y-4" onSubmit={(e) => {e.preventDefault(); alert('Formulario enviado!')}}>
            <input
              type="text"
              placeholder={t.contactoInfo.nombrePlaceholder}
              required
              className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
            <input
              type="email"
              placeholder={t.contactoInfo.emailPlaceholder}
              required
              className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
            <textarea
              placeholder={t.contactoInfo.mensajePlaceholder}
              required
              rows={4}
              className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded"
            >
              {t.contactoInfo.enviarMensaje}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-400 text-sm mt-16">
        <p>{t.footerRights}</p>
        <div className="flex justify-center space-x-6 mt-2">
          {t.social.map((red, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-purple-400"
              aria-label={red}
            >
              {red}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
