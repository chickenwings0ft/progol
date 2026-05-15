import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const specs = [
  { val: 'Aluminio 50mm', lbl: 'Grado aeroespacial' },
  { val: '100 kg',        lbl: 'Carga en travesaño' },
  { val: 'Sin anclajes',  lbl: 'Estabilidad total'  },
  { val: 'Desde 325€',   lbl: '4 tamaños'           },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="ProGoal — Porterías de entrenamiento profesional"
      className="hero-section"
    >
      {/* ══ MOBILE: image block on top ══ */}
      <div className="hero-img-mobile">
        <motion.img
          src="/Imagenes/Main image - NEW.jpg"
          alt="Portería ProGoal Sports — aluminio aeroespacial, entrenamiento profesional de fútbol"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="hero-img-mobile-fade" />
      </div>

      {/* ══ DESKTOP: image as absolute right panel ══ */}
      <motion.div
        className="hero-img-desktop"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <img
          src="/Imagenes/Main image - NEW.jpg"
          alt="Portería ProGoal Sports — aluminio aeroespacial, entrenamiento profesional de fútbol"
        />
        <div className="hero-img-desktop-fade" />
      </motion.div>

      {/* ══ Gold accent bar (desktop only) ══ */}
      <motion.div className="hero-accent-bar"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      />

      {/* ══ Text content ══ */}
      <div className="hero-content">

        {/* Eyebrow */}
        <motion.div className="hero-eyebrow"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}>
          <span className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Porterías de Élite</span>
        </motion.div>

        {/* H1 */}
        <motion.h1 className="hero-h1"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}>
          ENTRENA<br />
          <span style={{ color: '#c9a84c' }}>SIN</span><br />
          LÍMITES
        </motion.h1>

        {/* Sub */}
        <motion.p className="hero-sub"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}>
          La portería plegable de aluminio que usan los mejores clubes y academias.
          Lista en segundos. En cualquier superficie.
        </motion.p>

        {/* CTA */}
        <motion.div className="hero-ctas"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}>
          <a href="#models" className="btn-dark">
            Ver modelos <ArrowRight size={14} />
          </a>
          <a href="#features" className="hero-ghost-link">
            Cómo funciona
          </a>
        </motion.div>

      </div>

      {/* ══ Spec strip (bottom) ══ */}
      <motion.div className="hero-spec-strip"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}>
        {specs.map((s, i) => (
          <div key={i} className="hero-spec-cell">
            <span className="hero-spec-val">{s.val}</span>
            <span className="hero-spec-lbl">{s.lbl}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
