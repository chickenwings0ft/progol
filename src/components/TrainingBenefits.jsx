import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Activity, Map, Dumbbell, Users, Compass } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Mayor Precisión de Pase y Disparo',
    desc: 'Entrenar con porterías de tamaño reducido obliga al jugador a afinar la definición y el pase. Cada sesión con ProGoal es un trabajo de precisión que se traduce en mejora real durante el partido.',
  },
  {
    icon: Activity,
    title: 'Más Agilidad y Rapidez de Movimientos',
    desc: 'Los ejercicios con mini-porterías activan cambios de ritmo y dirección constantes. Los jugadores desarrollan una agilidad reactiva que no se consigue con los ejercicios tradicionales.',
  },
  {
    icon: Map,
    title: 'Reconocimiento Superior del Espacio',
    desc: 'Al trabajar con porterías múltiples o de menor tamaño, el jugador aprende a leer el campo con más rapidez, identificando espacios libres y ángulos de tiro con mayor velocidad cognitiva.',
  },
  {
    icon: Dumbbell,
    title: 'Mayor Variedad de Ejercicios Tácticos',
    desc: 'ProGoal permite a los entrenadores diseñar rondos, ejercicios de presión, situaciones de finalización y juegos reducidos con mayor dificultad y complejidad. Más variedad = más motivación.',
  },
  {
    icon: Compass,
    title: 'Entrena Donde y Cuando Quieras',
    desc: 'Ligera, compacta y plegable: ProGoal va a donde vas tú. Campo, patio, playa, parking — no estás limitado a una instalación fija. La portabilidad es una ventaja táctica en sí misma.',
  },
  {
    icon: Users,
    title: 'Para Todas las Edades y Niveles',
    desc: 'Desde categorías prebenjamín hasta entrenamiento de élite profesional. ProGoal es la herramienta de desarrollo que acompaña al jugador durante toda su carrera deportiva.',
  },
];

export default function TrainingBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="benefits" className="features-section section" aria-labelledby="benefits-heading">
      <div className="container">
        {/* Header */}
        <div ref={ref}>
          <motion.div className="eyebrow"
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
            <span className="eyebrow-line" /><span className="eyebrow-text">Beneficios del Entrenamiento</span>
          </motion.div>
          <motion.h2 id="benefits-heading" className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Lleva tus sesiones<br /><span className="gold">al siguiente nivel.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.22 }}
            style={{ marginTop: 16, color: '#666', fontSize: 15, fontWeight: 500, lineHeight: 1.75, maxWidth: 560 }}>
            Las porterías de entrenamiento de tamaño reducido han demostrado científicamente mejorar las
            habilidades individuales y colectivas. ProGoal está diseñada para maximizar cada uno de estos beneficios.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="features-grid">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.article key={i} className="feature-card"
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.07 }}>
                <div className="feature-icon"><Icon size={20} color="#c9a84c" /></div>
                <h3 className="feature-title">{b.title}</h3>
                <p className="feature-desc">{b.desc}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Pull quote */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginTop: 56, background: '#111', padding: '48px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
          <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c' }}>
            Perfecto para
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.4, maxWidth: 640, fontFamily: 'Montserrat, sans-serif' }}>
            "ProGoal es perfecta para entrenamientos de todas las edades y niveles. Ideal para{' '}
            <span style={{ color: '#c9a84c' }}>entrenadores, clubes y academias</span> que buscan elevar
            la calidad de sus sesiones con partidos reducidos y ejercicios tácticos de precisión."
          </p>
          <a href="#contact" className="btn-gold" style={{ marginTop: 8 }}>
            Pide tus porterías ahora
          </a>
        </motion.div>

        {/* Image pair */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, height: 280 }}>
          <img src="/Imagenes/ProGol Sports porterias (6).jpeg"
            alt="Sesión de entrenamiento táctico con porterías ProGoal en campo de césped"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <img src="/Imagenes/ProGol Sports porterias (7).jpeg"
            alt="Jugadores en ejercicio de precisión con portería ProGoal Sports"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
      </div>
    </section>
  );
}
