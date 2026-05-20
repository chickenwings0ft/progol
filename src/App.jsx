import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Caracteristicas from './pages/Caracteristicas';
import Modelos from './pages/Modelos';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Personalizacion from './pages/Personalizacion';
import Blog from './pages/Blog';
import ComoElegirPorteria from './pages/blog/ComoElegirPorteria';
import AluminioAeroespacial from './pages/blog/AluminioAeroespacial';
import EntrenamientoReducidos from './pages/blog/EntrenamientoReducidos';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ width: '100%', minWidth: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/caracteristicas" element={<Caracteristicas />} />
              <Route path="/modelos" element={<Modelos />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/personalizacion" element={<Personalizacion />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/como-elegir-porteria-futbol" element={<ComoElegirPorteria />} />
              <Route path="/blog/aluminio-aeroespacial-porterias" element={<AluminioAeroespacial />} />
              <Route path="/blog/entrenamiento-espacios-reducidos-futbol" element={<EntrenamientoReducidos />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
