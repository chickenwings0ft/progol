import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();

  const links = [
    { label: t('nav.features'), href: '/caracteristicas' },
    { label: t('nav.models'),   href: '/modelos' },
    { label: t('nav.custom'),   href: '/personalizacion' },
    { label: t('nav.gallery'),  href: '/galeria' },
    { label: t('nav.contact'),  href: '/contacto' },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/">
          <img src="/logo.png" alt="ProGoal Sports" className="nav-logo" />
        </Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`nav-link${location.pathname === l.href ? ' active' : ''}`}
                onClick={() => {
                  if (l.href === '/contacto' && typeof window.gtag === 'function') {
                    window.gtag('event', 'click_cta', { boton: 'Contacto Header' });
                  }
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-ctas-group" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button 
            onClick={toggleLanguage}
            className="lang-switcher"
            style={{
              background: 'none',
              border: '1px solid #eee',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '11px',
              fontWeight: '800',
              color: '#111',
              textTransform: 'uppercase'
            }}
          >
            <Globe size={14} color="#c9a84c" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          {/* CTA button removed as requested */}
        </div>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={22} color="#111" /> : <Menu size={22} color="#111" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <div style={{ padding: '16px 0', borderBottom: '1px solid #eee', marginBottom: 16 }}>
              <button 
                onClick={toggleLanguage}
                style={{
                  width: '100%',
                  background: '#f8f8f8',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontSize: '13px',
                  fontWeight: '800'
                }}
              >
                <Globe size={16} color="#c9a84c" />
                {lang === 'es' ? 'SWITCH TO ENGLISH' : 'CAMBIAR A ESPAÑOL'}
              </button>
            </div>
            {links.map(l => (
              <Link key={l.href} to={l.href} className="nav-link" onClick={() => {
                setOpen(false);
                if (l.href === '/contacto' && typeof window.gtag === 'function') {
                  window.gtag('event', 'click_cta', { boton: 'Contacto Header Movil' });
                }
              }}>
                {l.label}
              </Link>
            ))}
            {/* Mobile budget CTA removed as requested */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
