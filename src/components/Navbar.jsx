import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Características', href: '#features' },
  { label: 'Modelos', href: '#models' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero"><img src="/logo.png" alt="ProGoal Sports porterías de élite" className="nav-logo" /></a>
        <ul className="nav-links">
          {links.map(l => <li key={l.href}><a href={l.href} className="nav-link">{l.label}</a></li>)}
        </ul>
        <a href="#contact" className="btn-dark" style={{ display: 'none', padding: '10px 20px' }}
          ref={el => { if (el) el.style.display = 'inline-flex'; }}>
          Solicitar Precio
        </a>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={22} color="#111" /> : <Menu size={22} color="#111" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {links.map(l => <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>)}
            <a href="#contact" className="btn-dark" onClick={() => setOpen(false)} style={{ alignSelf: 'flex-start' }}>Solicitar Precio</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
