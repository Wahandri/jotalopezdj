"use client";
import './About.css';

export default function About({ t }) {
  return (
    <section id="quienes-somos" className="about-section">
      <h2 className="about-title">{t.quienesSomos}</h2>
      <div className="about-content">
        <div className="about-left">
          <img 
            src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="JOTA LOPEZ DJ" 
            className="about-main-image"
          />
        </div>
        <div className="about-right">
          <p className="about-text">{t.quienesSomosTexto}</p>
          <div className="about-avatars">
            <img 
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="DJ 1 - Jota" 
              className="about-avatar"
            />
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="DJ 2 - López" 
              className="about-avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
