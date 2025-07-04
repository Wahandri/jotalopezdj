const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      quienesSomos: "Quiénes Somos",
      galeria: "Galería",
      contacto: "Contacto",
      reserva: "¡Reserva por WhatsApp!",
      social: ["Instagram", "Facebook", "SoundCloud", "YouTube"],
      footerRights: "© 2025 Hermanos DJ. Todos los derechos reservados.",
    },
    hero: {
      titulo:
        "Transformamos cualquier evento en una experiencia única a través de la música.",
      subtitulo:
        "Desde bodas elegantes hasta fiestas corporativas vibrantes, nuestro equipo de DJs profesionales garantiza momentos memorables.",
      reserva: "¡Reserva por WhatsApp!",
    },
    quienesSomosTexto: `Con más de 10 años de experiencia, sabemos cómo adaptar cada detalle para que tu evento sea exactamente lo que necesitas.\nCreamos ambientes únicos con música personalizada según el tipo de celebración, cuidando la iluminación, el sonido y cada instante.\nYa sea una boda, cumpleaños, evento corporativo o fiesta privada, nuestra misión es que vivas una experiencia inolvidable.`,
    servicios: [
      {
        title: "Bodas",
        description:
          "Más que música, creamos la banda sonora de tu amor. Diseñamos una experiencia auditiva y visual personalizada para que cada momento de tu boda sea inolvidable.",
        extendedText:
          "Nuestro servicio para bodas incluye:\n\n• Asesoramiento musical previo (selección de canciones para cada momento)\n• Equipo de sonido profesional adaptado al espacio\n• Iluminación ambiental y efectos especiales\n• Coordinación con la agenda del evento\n• Opción de música en vivo o sesiones DJ personalizadas\n\nDeja que nos encarguemos de la atmósfera mientras tú disfrutas de tu día perfecto.",
        image: "/images/bodas.jpg",
      },
      {
        title: "Cumpleaños",
        description:
          "La fiesta que imaginas, hecha realidad. Para todas las edades, creamos un ambiente vibrante con la música y el ritmo perfectos.",
        extendedText:
          "En nuestros cumpleaños ofrecemos:\n\n• DJ en vivo con repertorio personalizado\n• Efectos de luces, humo y visuales adaptados\n• Juegos, dinámicas y animación si se requiere\n• Karaoke y participación del público\n• Control de sonido adaptado al espacio (interior o exterior)\n\nNuestro objetivo: que tú y tus invitados no quieran que la fiesta termine.",
        image: "/images/cumpleaños.jpg",
      },
      {
        title: "Eventos Corporativos",
        description:
          "Profesionalismo y estilo para elevar la imagen de tu empresa. Adaptamos música e iluminación al tipo de evento.",
        extendedText:
          "En eventos de empresa ofrecemos:\n\n• Música ambiental o sesiones de DJ según el tipo de evento\n• Equipos de sonido profesional para presentaciones y discursos\n• Iluminación personalizada según branding o temática\n• Micrófonos inalámbricos y soporte técnico en vivo\n• Experiencia en ferias, lanzamientos, convenciones y cenas de gala\n\nHaz que tu evento empresarial no solo cumpla su propósito, sino que se recuerde.",
        image: "/images/eventos-corporativos.jpg",
      },
    ],
    paquetes: [
      {
        nombre: "Paquete Esencial",
        detalles: [
          "4 horas de servicio DJ profesional",
          "Equipo de sonido básico",
          "Iluminación ambiental",
          "Consulta previa al evento",
        ],
        precio: "Desde 450€",
      },
      {
        nombre: "Paquete Premium",
        detalles: [
          "6 horas de servicio DJ personalizado",
          "Sistema de sonido avanzado",
          "Iluminación profesional completa",
          "2 consultas de planificación",
        ],
        precio: "Desde 750€",
      },
      {
        nombre: "Paquete Exclusivo",
        detalles: [
          "8 horas de servicio DJ exclusivo",
          "Equipo audiovisual de alta gama",
          "Efectos especiales y máquina de humo",
          "Planificación completa del evento",
        ],
        precio: "Desde 1.200€",
      },
    ],
    contactoInfo: {
      nombrePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo electrónico",
      mensajePlaceholder: "Escribe tu mensaje...",
      enviarMensaje: "Enviar Mensaje",
    },
    reseñas: [
      {
        nombre: "Carlos M.",
        texto:
          "¡Increíble experiencia! Gracias por hacer de nuestra boda algo inolvidable.",
      },
      {
        nombre: "Laura G.",
        texto: "El ambiente que crearon fue mágico. Súper recomendados.",
      },
    ],
  },

  en: {
    nav: {
      inicio: "Home",
      quienesSomos: "About Us",
      galeria: "Gallery",
      contacto: "Contact",
      reserva: "Book via WhatsApp!",
      social: ["Instagram", "Facebook", "SoundCloud", "YouTube"],
      footerRights: "© 2025 Hermanos DJ. All rights reserved.",
    },
    hero: {
      titulo: "We transform any event into a unique experience through music.",
      subtitulo:
        "From elegant weddings to vibrant corporate parties, our professional DJ team ensures unforgettable moments.",
      reserva: "Book via WhatsApp!",
    },
    quienesSomosTexto: `With over 10 years of experience, we know how to tailor every detail to your needs.\nWe craft unique environments with custom music, lighting, and atmosphere.\nWhether it’s a wedding, birthday, corporate event or private party — our mission is to make it unforgettable.`,
    servicios: [
      {
        title: "Weddings",
        description:
          "More than just music — we create the soundtrack of your love. A personalized audio-visual experience to make every moment unforgettable.",
        extendedText:
          "Our wedding service includes:\n\n• Pre-event music planning (song selection for each moment)\n• Professional sound system adapted to the venue\n• Ambient lighting and special effects\n• Coordination with the event schedule\n• Option for live music or custom DJ sessions\n\nLet us handle the vibe while you enjoy your perfect day.",
        image: "/images/bodas.jpg",
      },
      {
        title: "Birthdays",
        description:
          "The party you imagine, brought to life. From kids to adults — we create the right vibe with perfect music and visual energy.",
        extendedText:
          "Our birthday services include:\n\n• Live DJ with customized playlist\n• Lights, smoke effects, and visuals\n• Games and crowd interaction if requested\n• Karaoke option\n• Sound tailored to indoor or outdoor spaces\n\nWe make sure no one wants the party to end.",
        image: "/images/cumpleaños.jpg",
      },
      {
        title: "Corporate Events",
        description:
          "Professionalism and style to elevate your brand. We tailor music and lighting to match the event type and tone.",
        extendedText:
          "Corporate events include:\n\n• Background music or DJ as needed\n• Professional sound for speeches and presentations\n• Brand-colored lighting or ambient visuals\n• Wireless microphones and technical assistance\n• Experience in expos, launches, conventions, and gala dinners\n\nLet your company be remembered — for all the right reasons.",
        image: "/images/eventos-corporativos.jpg",
      },
    ],
    paquetes: [
      {
        nombre: "Essential Package",
        detalles: [
          "4 hours of professional DJ service",
          "Basic sound system",
          "Ambient lighting",
          "Pre-event consultation",
        ],
        precio: "From €450",
      },
      {
        nombre: "Premium Package",
        detalles: [
          "6 hours of personalized DJ service",
          "Advanced sound system",
          "Full professional lighting",
          "2 planning consultations",
        ],
        precio: "From €750",
      },
      {
        nombre: "Exclusive Package",
        detalles: [
          "8 hours of exclusive DJ service",
          "High-end audiovisual equipment",
          "Special effects and smoke machine",
          "Full event planning support",
        ],
        precio: "From €1,200",
      },
    ],
    contactoInfo: {
      nombrePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      mensajePlaceholder: "Write your message...",
      enviarMensaje: "Send Message",
    },
    reseñas: [
      {
        nombre: "Michael R.",
        texto:
          "Unforgettable music and energy! Thank you for making our night special.",
      },
      {
        nombre: "Emma L.",
        texto: "The DJ was incredible — everyone danced all night long!",
      },
    ],
  },

  nl: {
    nav: {
      inicio: "Start",
      quienesSomos: "Over Ons",
      galeria: "Galerij",
      contacto: "Contact",
      reserva: "Boek via WhatsApp!",
      social: ["Instagram", "Facebook", "SoundCloud", "YouTube"],
      footerRights: "© 2025 Hermanos DJ. Alle rechten voorbehouden.",
    },
    hero: {
      titulo: "Wij maken van elk evenement een unieke ervaring met muziek.",
      subtitulo:
        "Van stijlvolle bruiloften tot bruisende bedrijfsevenementen — ons DJ-team zorgt voor onvergetelijke momenten.",
      reserva: "Boek via WhatsApp!",
    },
    quienesSomosTexto: `Met meer dan 10 jaar ervaring weten we hoe we elk detail kunnen afstemmen op jouw behoeften.\nWe creëren unieke sferen met op maat gemaakte muziek, licht en beleving.\nOf het nu gaat om een bruiloft, verjaardag, zakelijk evenement of privéfeest — wij maken het onvergetelijk.`,
    servicios: [
      {
        title: "Bruiloften",
        description:
          "Meer dan muziek — wij creëren de soundtrack van jullie liefde. Een gepersonaliseerde audio-visuele beleving voor een onvergetelijke dag.",
        extendedText:
          "Onze bruiloftservice omvat:\n\n• Muziekplanning vooraf (nummers kiezen voor elk moment)\n• Professioneel geluidssysteem afgestemd op de locatie\n• Sfeerverlichting en speciale effecten\n• Afstemming met het draaiboek van het evenement\n• Keuze uit live muziek of een op maat gemaakte DJ-set\n\nWij zorgen voor de sfeer zodat jullie volop kunnen genieten van jullie perfecte dag.",
        image: "/images/bodas.jpg",
      },
      {
        title: "Verjaardagen",
        description:
          "Het feest zoals jij het voor je ziet — wij maken het werkelijkheid. Voor jong en oud zorgen we voor de juiste sfeer met muziek en energie.",
        extendedText:
          "Onze verjaardagsdiensten:\n\n• Live DJ met een gepersonaliseerde afspeellijst\n• Lichtshows, rook en visuals\n• Spellen, interactie en optioneel karaoke\n• Geluid afgestemd op binnen of buiten\n\nWij zorgen ervoor dat niemand naar huis wil gaan.",
        image: "/images/cumpleaños.jpg",
      },
      {
        title: "Zakelijke Evenementen",
        description:
          "Professionaliteit en stijl voor een krachtig merkimago. Wij stemmen muziek en sfeer af op het type en de toon van je evenement.",
        extendedText:
          "Zakelijke diensten omvatten:\n\n• Achtergrondmuziek of DJ, afhankelijk van het evenement\n• Geluidssystemen voor presentaties en toespraken\n• Verlichting afgestemd op je merk of sfeer\n• Draadloze microfoons en technische ondersteuning\n• Ervaring met beurzen, lanceringen, congressen en gala's\n\nLaat jouw bedrijf een blijvende indruk achterlaten.",
        image: "/images/eventos-corporativos.jpg",
      },
    ],
    paquetes: [
      {
        nombre: "Essentieel Pakket",
        detalles: [
          "4 uur professionele DJ-service",
          "Basis geluidsinstallatie",
          "Sfeerverlichting",
          "Voorafgaand consult",
        ],
        precio: "Vanaf €450",
      },
      {
        nombre: "Premium Pakket",
        detalles: [
          "6 uur gepersonaliseerde DJ-service",
          "Geavanceerd geluidssysteem",
          "Volledige professionele verlichting",
          "2 planningsgesprekken",
        ],
        precio: "Vanaf €750",
      },
      {
        nombre: "Exclusief Pakket",
        detalles: [
          "8 uur exclusieve DJ-service",
          "High-end audiovisuele apparatuur",
          "Speciale effecten en rookmachine",
          "Volledige eventplanning",
        ],
        precio: "Vanaf €1.200",
      },
    ],
    contactoInfo: {
      nombrePlaceholder: "Jouw naam",
      emailPlaceholder: "Jouw e-mail",
      mensajePlaceholder: "Typ je bericht...",
      enviarMensaje: "Verstuur Bericht",
    },
    reseñas: [
      {
        nombre: "Sofie D.",
        texto: "Geweldige sfeer! Iedereen had het naar zijn zin.",
      },
      {
        nombre: "Tom V.",
        texto: "Echte professionals. Onze bruiloft was perfect dankzij hen.",
      },
    ],
  },
};

export default translations;
