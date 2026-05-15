import { Mail } from 'lucide-react';

const Ig = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);
const Yt = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="ProGoal Sports" style={{ height: 40, width: 'auto', marginBottom: 20 }} />
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, fontWeight: 500, maxWidth: 300 }}>
              Porterías de aluminio de alta ingeniería para el 1% que juega para ganar. Fabricadas en España.
            </p>
            <div className="footer-social">
              {[{ El: Ig, href: '#', label: 'Instagram' }, { El: Yt, href: '#', label: 'YouTube' }, { El: Mail, href: 'mailto:progolsports@gmail.com', label: 'Email', size: 15 }].map(({ El, href, label, size }) => (
                <a key={label} href={href} aria-label={label} className="footer-social-btn">
                  <El size={size} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación footer">
            <p className="footer-col-title">Navegación</p>
            {[['Características', '#features'], ['Modelos', '#models'], ['Galería', '#gallery'], ['Contacto', '#contact']].map(([l, h]) => (
              <a key={l} href={h} className="footer-link">{l}</a>
            ))}
          </nav>

          {/* Models */}
          <nav aria-label="Modelos ProGoal">
            <p className="footer-col-title">Modelos</p>
            {[['S — 1.20×0.75m', '#models'], ['M — 1.50×0.90m', '#models'], ['L — 1.80×1.20m', '#models'], ['XL — 2.00×1.00m', '#models']].map(([l, h]) => (
              <a key={l} href={h} className="footer-link">Talla {l}</a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2024 ProGoal Sports. Todos los derechos reservados.</p>
          <p className="footer-copy" style={{ color: '#333' }}>Ingeniería de élite · Hecho en España</p>
        </div>
      </div>
    </footer>
  );
}
