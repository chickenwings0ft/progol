import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Características', href: '/caracteristicas' },
  { label: 'Modelos',         href: '/modelos' },
  { label: 'Personalización', href: '/personalizacion' },
  { label: 'Galería',         href: '/galeria' },
  { label: 'Contacto',        href: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/">
          <img src="/logo.png" alt="ProGol Sports porterías de élite" className="nav-logo" />
        </Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`nav-link${location.pathname === l.href ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-ctas-group" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/personalizacion" className="btn-outline nav-cta-secondary" style={{ padding: '8px 16px', fontSize: 12 }}>
            Personalizar
          </Link>
          <Link to="/contacto" className="btn-dark nav-cta">
            Presupuesto
          </Link>
        </div>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={22} color="#111" /> : <Menu size={22} color="#111" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {links.map(l => (
              <Link key={l.href} to={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/contacto" className="btn-dark" onClick={() => setOpen(false)}
              style={{ alignSelf: 'flex-start' }}>
              Solicitar Precio
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
