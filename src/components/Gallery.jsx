import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/Imagenes/ProGol Sports porterias (1).jpeg',  alt: 'Portería ProGoal Sports en campo exterior' },
  { src: '/Imagenes/ProGol Sports porterias (2).jpeg',  alt: 'Entrenamiento con portería ProGoal Sports' },
  { src: '/Imagenes/ProGol Sports porterias (6).jpeg',  alt: 'Portería ProGoal roja durante partido' },
  { src: '/Imagenes/PRO GOAL porterias (1).jpeg',       alt: 'Vista lateral portería ProGoal aluminio' },
  { src: '/Imagenes/ProGol Sports porterias (7).jpeg',  alt: 'ProGoal portería en sesión de equipo' },
  { src: '/Imagenes/ProGol Sports porterias (8).jpeg',  alt: 'Portería ProGoal en pabellón de fútbol sala' },
  { src: '/Imagenes/ProGol Sports porterias (9).jpeg',  alt: 'ProGoal portería tamaño L competición' },
  { src: '/Imagenes/ProGol Sports porterias (10).jpeg', alt: 'Detalle arco portería ProGoal Sports' },
  { src: '/Imagenes/ProGol Sports porterias (11).jpeg', alt: 'Portería ProGoal en césped artificial' },
  { src: '/Imagenes/ProGol Sports porterias (12).jpeg', alt: 'Múltiples porterías ProGoal en entrenamiento' },
  { src: '/Imagenes/ProGol Sports porterias (13).jpeg', alt: 'Portería ProGoal plegada para almacenaje' },
  { src: '/Imagenes/ProGol Sports porterias (14).jpeg', alt: 'Club profesional con porterías ProGoal' },
  { src: '/Imagenes/porteria negra sin logo.jpeg',      alt: 'Portería ProGoal modelo negro' },
  { src: '/Imagenes/ProGol Sports porterias (15).jpeg', alt: 'Portería ProGoal en academia de fútbol' },
  { src: '/Imagenes/ProGol Sports porterias (16).jpeg', alt: 'ProGoal XL entrenamiento porteros' },
  { src: '/Imagenes/ProGol Sports porterias (17).jpeg', alt: 'Red anti-impacto portería ProGoal detalle' },
  { src: '/Imagenes/ProGol Sports porterias (18).jpeg', alt: 'Portería ProGoal en exterior césped natural' },
  { src: '/Imagenes/ProGol Sports porterias (19).jpeg', alt: 'Vista frontal portería ProGoal premium' },
];

export default function Gallery() {
  const [lb, setLb] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prev = () => setLb(i => (i - 1 + images.length) % images.length);
  const next = () => setLb(i => (i + 1) % images.length);

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <div ref={ref}>
          <motion.div className="eyebrow"
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
            <span className="eyebrow-line" /><span className="eyebrow-text">En Acción</span>
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Galería de producto
          </motion.h2>
        </div>

        <div className="masonry">
          {images.map((img, i) => (
            <motion.div key={i} className="masonry-item"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: (i % 6) * 0.06 }}
              onClick={() => setLb(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="masonry-overlay">
                <span className="masonry-overlay-label">Ver</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lb !== null && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLb(null)}>
            <button className="lightbox-close" onClick={() => setLb(null)} aria-label="Cerrar"><X size={26} /></button>
            <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Anterior"><ChevronLeft size={32} /></button>
            <motion.img key={lb} src={images[lb].src} alt={images[lb].alt}
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              onClick={e => e.stopPropagation()} />
            <button className="lightbox-next" onClick={e => { e.stopPropagation(); next(); }} aria-label="Siguiente"><ChevronRight size={32} /></button>
            <div className="lightbox-count">{lb + 1} / {images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
