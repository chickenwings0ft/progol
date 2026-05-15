import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Con ProGol hemos cambiado por completo cómo diseñamos las sesiones. El hecho de que no necesite anclajes y se monte en segundos nos da libertad para cambiar el ejercicio al momento sin perder el ritmo del entrenamiento.',
    author: 'Alejandro Martínez',
    role: 'Director Técnico — Academia CD Villarreal Sub-14',
    initials: 'AM',
  },
  {
    quote: 'Compramos 6 unidades Talla L para nuestro campo de césped artificial y llevan dos temporadas sin un solo problema. El marco de aluminio aeroespacial se nota: cero deformaciones, cero corrosión. Material de auténtica primera categoría.',
    author: 'Roberto Sánchez',
    role: 'Coordinador Deportivo — FC Badalona',
    initials: 'RS',
  },
  {
    quote: 'La Talla XL panorámica es exactamente lo que un preparador de porteros necesita. La estabilidad sin anclajes es clave: el portero puede lanzarse sin que la portería se mueva, y yo no tengo que recolocarla constantemente.',
    author: 'Miguel Ángel Torres',
    role: 'Preparador de Porteros — Academia de Élite FCB',
    initials: 'MT',
  },
];

const brands = [
  'Academias de Élite',
  'Federaciones Autonómicas',
  'Clubs Profesionales',
  'Centros de Alto Rendimiento',
  'Colegios y Universidades',
  'Selecciones Regionales',
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="proof-section section" aria-labelledby="proof-heading">
      <div className="container">
        <div ref={ref}>
          <motion.div className="eyebrow"
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
            <span className="eyebrow-line" /><span className="eyebrow-text">Testimonios de Entrenadores</span>
          </motion.div>
          <motion.h2 id="proof-heading" className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Lo que dicen<br />los profesionales.
          </motion.h2>
        </div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <motion.blockquote key={i} className="test-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.12 }}>
              <Quote size={22} color="#c9a84c" style={{ opacity: 0.4, marginBottom: 16 }} />
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8, fontWeight: 500, fontStyle: 'italic', marginBottom: 24 }}>
                "{t.quote}"
              </p>
              <footer style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, fontWeight: 900, color: '#c9a84c' }}>{t.initials}</span>
                </div>
                <div>
                  <cite style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#111', fontStyle: 'normal' }}>{t.author}</cite>
                  <p style={{ fontSize: 11, color: '#aaa', marginTop: 2 }}>{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Trusted by */}
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 56, marginTop: 64 }}>
          <p style={{ textAlign: 'center', fontFamily: 'Orbitron, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ccc', marginBottom: 24 }}>
            Confiado por
          </p>
          <div className="brands-row">
            {brands.map((b, i) => (
              <motion.span key={i} className="brand-chip"
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                {b}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Banner */}
        <motion.div className="banner-wrap"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <img src="/Imagenes/PRO GOL porterias (5).jpeg"
            alt="Porterías ProGol Sports en uso en campo de entrenamiento — vista panorámica" />
          <div className="banner-overlay">
            <div>
              <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 12 }}>
                Calidad de entrenamiento inigualable
              </p>
              <h3 className="banner-title">
                Pide tus porterías ahora<br />y marca la diferencia.
              </h3>
              <a href="#contact" className="btn-dark">Solicitar presupuesto</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
