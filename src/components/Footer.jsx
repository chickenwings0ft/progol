import { Link } from 'react-router-dom';
import { Mail, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer" aria-label="ProGoal Sports footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="ProGoal Sports" style={{ height: 44, width: 'auto', marginBottom: 20 }} />
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7, fontWeight: 500, maxWidth: 280 }}>
              {t('home.hero_sub')}
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <Share2 size={15} />
              </a>
              <a href="mailto:progolsports@gmail.com" className="footer-social-btn" aria-label="Email">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="ProGoal Navigation">
            <p className="footer-col-title">{t('nav.features')}</p>
            <Link to="/"                className="footer-link">{t('nav.features')}</Link>
            <Link to="/caracteristicas" className="footer-link">{t('nav.features')}</Link>
            <Link to="/modelos"         className="footer-link">{t('nav.models')}</Link>
            <Link to="/galeria"         className="footer-link">{t('nav.gallery')}</Link>
            <Link to="/contacto"        className="footer-link">{t('nav.contact')}</Link>
          </nav>

          {/* Contact */}
          <div>
            <p className="footer-col-title">{t('nav.contact')}</p>
            <a href="mailto:progolsports@gmail.com" className="footer-link">progolsports@gmail.com</a>
            <p className="footer-link" style={{ cursor: 'default' }}>{t('contact.value_fab')}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{t('footer.rights')}</p>
          <p className="footer-copy" style={{ color: '#333' }}>{t('contact.value_fab')}</p>
        </div>
      </div>
    </footer>
  );
}
