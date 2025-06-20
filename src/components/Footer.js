"use client";
import './Footer.css';

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <p>{t.footerRights}</p>
      <div className="footer-social">
        {t.social.map((red, i) => (
          <a
            key={i}
            href="#"
            aria-label={red}
          >
            {red}
          </a>
        ))}
      </div>
    </footer>
  );
}
