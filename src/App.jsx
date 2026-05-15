import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Caracteristicas from './pages/Caracteristicas';
import Modelos from './pages/Modelos';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Personalizacion from './pages/Personalizacion';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
