import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const images = [
  { src: '/Imagenes/ProGoal Sports porterias (1).jpeg',  alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (2).jpeg',  alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (6).jpeg',  alt: 'ProGoal Sports' },
  { src: '/Imagenes/PRO GOL porterias (1).jpeg',        alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (7).jpeg',  alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (8).jpeg',  alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (9).jpeg',  alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (10).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (11).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (12).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (13).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (14).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/porteria negra sin logo.jpeg',      alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (15).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (16).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (17).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (18).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports porterias (19).jpeg', alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports Roja perfil.png',     alt: 'ProGoal Sports' },
  { src: '/Imagenes/ProGoal Sports Roja trasera.png',    alt: 'ProGoal Sports' },
];

export default function Galeria() {
  const [lb, setLb] = useState(null);
  const { t, lang } = useLanguage();
  const prev = () => setLb(i => (i - 1 + images.length) % images.length);
  const next = () => setLb(i => (i + 1) % images.length);

  const faqItems = [
    { 
      q: lang === 'es' ? '¿Las imágenes de la web son reales?' : 'Are the website images real?', 
      a: lang === 'es' 
        ? 'Sí, todas las imágenes de ProGoal son fotografías reales de nuestros productos en uso.' 
        : 'Yes, all ProGoal images are real photographs of our products in use.' 
    },
    { 
      q: lang === 'es' ? '¿En qué superficies puedo usar las porterías?' : 'On what surfaces can I use the goals?', 
      a: lang === 'es' 
        ? 'Las porterías ProGoal funcionan perfectamente en césped natural, artificial, pabellones, asfalto e incluso arena.' 
        : 'ProGoal goals work perfectly on natural grass, artificial turf, gyms, asphalt, and even sand.' 
    }
  ];

  return (
    <>
      {/* Page header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">{t('gallery_page.eyebrow')}</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            {t('gallery_page.title')}<br /><span className="gold">{t('gallery_page.title_accent')}</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            {t('gallery_page.desc')}
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
                  <span className="masonry-overlay-label">{t('gallery_page.zoom')}</span>
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
