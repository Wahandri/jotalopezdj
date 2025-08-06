// pages/index.js
export default function Home() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white text-gray-900 font-sans">
  
        {/* Navbar */}
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide text-indigo-700">Hermanos DJ</h1>
          <ul className="hidden md:flex space-x-8 text-indigo-600 font-medium">
            <li><a href="#inicio" className="hover:text-indigo-800 transition">Inicio</a></li>
            <li><a href="#sobre-nosotros" className="hover:text-indigo-800 transition">Sobre Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-indigo-800 transition">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-indigo-800 transition">Galería</a></li>
            <li><a href="#contacto" className="hover:text-indigo-800 transition">Contacto</a></li>
          </ul>
          <button className="md:hidden text-indigo-700 focus:outline-none" aria-label="Menú">
            {/* Aquí podrías agregar un icono hamburger si quieres */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </nav>
  
        {/* Hero Section */}
        <section
          id="inicio"
          className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:space-x-12"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold leading-tight mb-6 text-indigo-700">
              La música que transforma tus eventos
            </h2>
            <p className="text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
              Hermanos DJ te acompañan con los mejores beats y ambiente para bodas, fiestas y eventos especiales.
            </p>
            <a
              href="https://wa.me/TUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-indigo-700 text-white rounded-lg font-semibold shadow hover:bg-indigo-800 transition"
            >
              Reserva tu fecha
            </a>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg"
              alt="Hermanos DJ tocando"
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>
  
        {/* Sobre Nosotros */}
        <section id="sobre-nosotros" className="bg-indigo-50 py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
              Sobre Nosotros
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              Somos dos hermanos con pasión por la música y los eventos. Más de 10 años
              creando momentos inolvidables con una mezcla perfecta de tracks y energía.
              Nos especializamos en bodas, cumpleaños y fiestas privadas con ambientación profesional.
            </p>
          </div>
        </section>
  
        {/* Servicios */}
        <section id="servicios" className="container mx-auto px-6 py-16 max-w-6xl">
          <h3 className="text-3xl font-bold text-indigo-700 mb-12 text-center">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Bodas",
                description:
                  "Sonidos románticos y ambiente elegante para tu gran día.",
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21c-4.97 0-9-3.58-9-8a6 6 0 0 1 12 0 6 6 0 0 1 12 0c0 4.42-4.03 8-9 8z" />
                  </svg>
                ),
              },
              {
                title: "Cumpleaños",
                description: "¡La mejor fiesta con los éxitos que todos aman!",
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5-2 4-2 4 2 4 2" />
                    <line x1="9" y1="9" x2="9" y2="9" />
                    <line x1="15" y1="9" x2="15" y2="9" />
                  </svg>
                ),
              },
              {
                title: "Fiestas Privadas",
                description:
                  "DJs en vivo para eventos exclusivos y corporativos.",
                icon: (
                  <svg
                    className="w-12 h-12 mb-4 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12h18" />
                    <path d="M12 3v18" />
                  </svg>
                ),
              },
            ].map(({ title, description, icon }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                {icon}
                <h4 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Galería */}
        <section
          id="galeria"
          className="bg-indigo-50 py-16"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <h3 className="text-3xl font-bold text-indigo-700 mb-12 text-center">
              Galería
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
                "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg",
                "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg",
                "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
                "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
                "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Evento ${i + 1}`}
                  className="rounded-lg shadow-md object-cover w-full h-48 cursor-pointer hover:scale-105 transform transition"
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* Contacto */}
        <section id="contacto" className="container mx-auto px-6 py-16 max-w-3xl">
          <h3 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Contáctanos</h3>
          <p className="text-center mb-6">No dudes en contactarnos por:</p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://wa.me/34612356789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-12 h-12" />
            </a>
            <a
              href="https://instagram.com/jotalopedj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/instagram.svg" alt="Instagram" className="w-12 h-12" />
            </a>
            <a href="mailto:jotalopedj@gmail.com">
              <img src="/icons/email.svg" alt="Email" className="w-12 h-12" />
            </a>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-indigo-700 text-indigo-50 py-6 mt-12">
          <div className="container mx-auto px-6 text-center space-y-3">
            <div className="flex justify-center space-x-6 text-indigo-200">
              <a href="#" className="hover:text-white" aria-label="Instagram">Instagram</a>
              <a href="#" className="hover:text-white" aria-label="Facebook">Facebook</a>
              <a href="#" className="hover:text-white" aria-label="SoundCloud">SoundCloud</a>
              <a href="#" className="hover:text-white" aria-label="YouTube">YouTube</a>
            </div>
            <p className="text-sm">&copy; 2025 Hermanos DJ. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    );
  }
  