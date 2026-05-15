import { Link } from 'react-router-dom';
import { Mail, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Pie de página ProGol Sports">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="ProGol Sports" style={{ height: 44, width: 'auto', marginBottom: 20 }} />
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7, fontWeight: 500, maxWidth: 280 }}>
              Porterías de entrenamiento profesional de aluminio aeroespacial. Para clubes, academias y entrenadores que no se conforman.
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
          <nav aria-label="Navegación ProGol">
            <p className="footer-col-title">Navegación</p>
            <Link to="/"                className="footer-link">Inicio</Link>
            <Link to="/caracteristicas" className="footer-link">Características</Link>
            <Link to="/modelos"         className="footer-link">Modelos y Precios</Link>
            <Link to="/galeria"         className="footer-link">Galería</Link>
            <Link to="/contacto"        className="footer-link">Contacto</Link>
          </nav>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contacto</p>
            <a href="mailto:progolsports@gmail.com" className="footer-link">progolsports@gmail.com</a>
            <p className="footer-link" style={{ cursor: 'default' }}>Hecho en España</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 ProGol Sports. Todos los derechos reservados.</p>
          <p className="footer-copy" style={{ color: '#333' }}>Aluminio Aeroespacial · Hecho en España</p>
        </div>
      </div>
    </footer>
  );
}
