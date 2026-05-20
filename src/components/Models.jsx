import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const models = [
  {
    name: 'Pequeña', tag_en: 'S', dims: '1.20 × 0.75 m', price: '325',
    tag: null, target: 'Infantil & Academia',
    featured: false,
    features: [
      'Fútbol sala, patio y playa',
      'Ideal para 8–14 años',
      'Montaje en segundos',
      'Red de malla reforzada incluida',
      'Personalizable con logo del club',
    ],
  },
  {
    name: 'Mediana', tag_en: 'M', dims: '1.50 × 0.90 m', price: '350',
    tag: null, target: 'Cadete & Juvenil',
    featured: false,
    features: [
      'Césped natural y artificial',
      'Rondos, pases y definición',
      'Montaje en segundos',
      'Red de malla reforzada incluida',
      'Disponible en varios colores',
    ],
  },
  {
    name: 'Grande', tag_en: 'L', dims: '1.80 × 1.20 m', price: '375',
    tag: 'MÁS POPULAR', target: 'Amateur & Profesional',
    featured: true,
    features: [
      'Tamaño reglamentario reducido',
      'Estabilidad sin anclajes (100kg)',
      'Aluminio aeroespacial 50mm',
      'Red anti-impacto premium',
      'Esquinas redondeadas — 100% segura',
    ],
  },
  {
    name: 'Extra', tag_en: 'XL', dims: '2.00 × 1.00 m', price: '375',
    tag: null, target: 'Porteros & Táctico',
    featured: false,
    features: [
      'Formato panorámico para porteros',
      'Córners, centros y voleo',
      'Ejercicios tácticos en amplitud',
      'Montaje en segundos',
      'Personalizable con logo del club',
    ],
  },
];

export default function Models() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="models" className="models-section section" aria-labelledby="models-heading">
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center' }}>
          <motion.div className="eyebrow" style={{ justifyContent: 'center' }}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Tamaños y Precios</span>
            <span className="eyebrow-line" />
          </motion.div>
          <motion.h2 id="models-heading" className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Encuentra tu modelo ProGol
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ marginTop: 12, color: '#888', fontSize: 14, fontWeight: 500, maxWidth: 520, margin: '12px auto 0' }}>
            Cuatro tamaños diseñados para cada etapa de desarrollo, tipo de ejercicio y nivel de competición.
            Todos incluyen red de malla reforzada y montaje sin herramientas.
          </motion.p>
        </div>

        <div className="models-grid">
          {models.map((m, i) => (
            <motion.article key={i}
              className={`model-card${m.featured ? ' featured' : ''}`}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.1 }}>
              {m.tag && (
                <div className="model-badge">
                  <Star size={8} fill="currentColor" /> {m.tag}
                </div>
              )}
              <p className="model-size" style={{ color: m.featured ? '#c9a84c' : '#aaa' }}>
                {m.name} ({m.tag_en})
              </p>
              <p className="model-dims" style={{ color: m.featured ? '#fff' : '#111' }}>{m.dims}</p>
              <p className="model-target" style={{ color: m.featured ? '#666' : '#aaa' }}>{m.target}</p>
              <p className="model-price" style={{ color: m.featured ? '#fff' : '#111' }}>{m.price}€</p>
              <ul className="model-features-list">
                {m.features.map((f, fi) => (
                  <li key={fi} style={{ color: m.featured ? '#aaa' : '#666' }}>
                    <Check size={13} className="model-check" style={{ color: '#c9a84c', flexShrink: 0, marginTop: 2 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="model-cta"
                onClick={() => {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'click_cta', { boton: 'Solicitar modelo ' + m.name, seccion: 'Modelos' });
                  }
                }}
                style={m.featured
                  ? { background: '#c9a84c', color: '#111' }
                  : { background: '#111', color: '#fff' }}>
                Solicitar este modelo
              </a>
            </motion.article>
          ))}
        </div>

        {/* Specs table */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ marginTop: 56, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontWeight: 500 }}
            aria-label="Tabla de especificaciones técnicas ProGol — tamaños y precios">
            <caption style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', paddingBottom: 16, textAlign: 'left' }}>
              Especificaciones técnicas
            </caption>
            <thead>
              <tr style={{ borderBottom: '2px solid #111' }}>
                {['Modelo', 'Dimensiones', 'Precio', 'Uso Recomendado', 'Marco', 'Red'].map(h => (
                  <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontFamily: 'Orbitron, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { modelo: 'Pequeña (S)', dims: '1.20 × 0.75 m', precio: '325 €', uso: 'Infantil, Fútbol Sala, Playa', marco: 'Aluminio 50mm Aeroespacial', red: 'Malla reforzada' },
                { modelo: 'Mediana (M)', dims: '1.50 × 0.90 m', precio: '350 €', uso: 'Cadete, Juvenil, Rondos', marco: 'Aluminio 50mm Aeroespacial', red: 'Malla reforzada' },
                { modelo: 'Grande (L) ★', dims: '1.80 × 1.20 m', precio: '375 €', uso: 'Amateur, Profesional, Competición', marco: 'Aluminio 50mm Aeroespacial', red: 'Malla reforzada premium' },
                { modelo: 'Extra (XL)', dims: '2.00 × 1.00 m', precio: '375 €', uso: 'Porteros, Táctica, Amplitud', marco: 'Aluminio 50mm Aeroespacial', red: 'Malla reforzada' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                  {Object.values(row).map((v, j) => (
                    <td key={j} style={{ padding: '12px 14px', color: j === 0 ? '#111' : '#666', fontWeight: j === 0 ? 700 : 500, whiteSpace: 'nowrap' }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ marginTop: 28, textAlign: 'center', fontSize: 13, color: '#aaa', fontWeight: 500 }}>
          Todos los modelos disponibles en{' '}
          <strong style={{ color: '#111' }}>varios colores</strong> y personalizables con el escudo de tu club.{' '}
          <a 
            href="#contact" 
            style={{ color: '#c9a84c', fontWeight: 700, textDecoration: 'none' }}
            onClick={() => {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'click_cta', { boton: 'Solicita presupuesto pie', seccion: 'Modelos' });
              }
            }}
          >
            Solicita tu presupuesto personalizado →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
