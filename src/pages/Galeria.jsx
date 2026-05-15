import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const images = [
  { src: '/Imagenes/ProGol Sports porterias (1).jpeg',  alt: 'Portería ProGol Sports en campo exterior' },
  { src: '/Imagenes/ProGol Sports porterias (2).jpeg',  alt: 'Entrenamiento con portería ProGol Sports' },
  { src: '/Imagenes/ProGol Sports porterias (6).jpeg',  alt: 'Portería ProGol roja durante partido' },
  { src: '/Imagenes/PRO GOL porterias (1).jpeg',        alt: 'Vista lateral portería ProGol aluminio' },
  { src: '/Imagenes/ProGol Sports porterias (7).jpeg',  alt: 'ProGol portería en sesión de equipo' },
  { src: '/Imagenes/ProGol Sports porterias (8).jpeg',  alt: 'Portería ProGol en pabellón de fútbol sala' },
  { src: '/Imagenes/ProGol Sports porterias (9).jpeg',  alt: 'ProGol portería tamaño L competición' },
  { src: '/Imagenes/ProGol Sports porterias (10).jpeg', alt: 'Detalle arco portería ProGol Sports' },
  { src: '/Imagenes/ProGol Sports porterias (11).jpeg', alt: 'Portería ProGol en césped artificial' },
  { src: '/Imagenes/ProGol Sports porterias (12).jpeg', alt: 'Múltiples porterías ProGol en entrenamiento' },
  { src: '/Imagenes/ProGol Sports porterias (13).jpeg', alt: 'Portería ProGol plegada para almacenaje' },
  { src: '/Imagenes/ProGol Sports porterias (14).jpeg', alt: 'Club profesional con porterías ProGol' },
  { src: '/Imagenes/porteria negra sin logo.jpeg',      alt: 'Portería ProGol modelo negro' },
  { src: '/Imagenes/ProGol Sports porterias (15).jpeg', alt: 'Portería ProGol en academia de fútbol' },
  { src: '/Imagenes/ProGol Sports porterias (16).jpeg', alt: 'ProGol XL entrenamiento porteros' },
  { src: '/Imagenes/ProGol Sports porterias (17).jpeg', alt: 'Red anti-impacto portería ProGol detalle' },
  { src: '/Imagenes/ProGol Sports porterias (18).jpeg', alt: 'Portería ProGol en exterior césped natural' },
  { src: '/Imagenes/ProGol Sports porterias (19).jpeg', alt: 'Vista frontal portería ProGol premium' },
  { src: '/Imagenes/ProGol Sports Roja perfil.png',     alt: 'ProGol Sports Roja — vista de perfil' },
  { src: '/Imagenes/ProGol Sports Roja trasera.png',    alt: 'ProGol Sports Roja — vista trasera' },
];

const faqItems = [
  { q: '¿Las imágenes de la web son reales?', a: 'Sí, todas las imágenes de ProGol son fotografías reales de nuestros productos en uso. No utilizamos renders ni imágenes de stock genéricas. Lo que ves es exactamente lo que recibirás.' },
  { q: '¿En qué superficies puedo usar las porterías?', a: 'Como se ve en nuestra galería, las porterías ProGol funcionan perfectamente en césped natural, césped artificial, pabellones (fútbol sala), asfalto e incluso arena. La base está diseñada para ser estable en cualquier terreno.' },
  { q: '¿Se puede ver el sistema de plegado en las fotos?', a: 'Sí, tenemos varias imágenes que muestran la portería plegada y el detalle de las bisagras. Una vez plegada, la portería se queda totalmente plana, lo que facilita enormemente su almacenamiento.' },
  { q: '¿Hacéis envíos a toda España?', a: 'Sí, enviamos a toda la península, Baleares y Canarias. En la galería puedes ver nuestras porterías en clubes de diferentes regiones.' },
  { q: '¿Ofrecéis personalización con el logo de mi club?', a: '¡Claro! Podemos incluir el escudo de tu academia o club en la red. Mira las fotos detalladas de la red para apreciar la calidad de la malla.' }
];

export default function Galeria() {
  const [lb, setLb] = useState(null);
  const prev = () => setLb(i => (i - 1 + images.length) % images.length);
  const next = () => setLb(i => (i + 1) % images.length);

  return (
    <>
      {/* Page header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Galería de Producto</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            ProGol en<br /><span className="gold">acción.</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            Fotografías reales de nuestras porterías en clubes, academias e instalaciones de alto nivel. 
            Haz clic en cualquier imagen para verla en detalle.
          </p>
        </div>
      </div>

      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="masonry">
            {images.map((img, i) => (
              <motion.div key={i} className="masonry-item"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: (i % 6) * 0.06 }}
                onClick={() => setLb(i)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="masonry-overlay">
                  <span className="masonry-overlay-label">Ampliar</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} schemaId="galeria" />
      <Contact />

      <AnimatePresence>
        {lb !== null && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLb(null)}>
            <button className="lightbox-close" onClick={() => setLb(null)}><X size={26} /></button>
            <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }}><ChevronLeft size={32} /></button>
            <motion.img key={lb} src={images[lb].src} alt={images[lb].alt} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} onClick={e => e.stopPropagation()} />
            <button className="lightbox-next" onClick={e => { e.stopPropagation(); next(); }}><ChevronRight size={32} /></button>
            <div className="lightbox-count">{lb + 1} / {images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
