"use client";
import './Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const nav = t('nav', { returnObjects: true });
  return (
    <footer className="footer">
      <p>{nav.footerRights}</p>
      <div className="footer-social">
        {nav.social.map((red, i) => (
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
