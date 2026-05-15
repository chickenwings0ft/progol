import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Package, Award } from 'lucide-react';

const mainFeatures = [
  {
    icon: Shield,
    title: 'Aluminio Aeroespacial',
    desc: 'Marco de 50mm ultra-resistente. Soporta impactos de alta velocidad y climas extremos sin degradarse.',
  },
  {
    icon: Zap,
    title: 'Estabilidad Total',
    desc: 'Sin anclajes. Soporta hasta 100kg en el travesaño sin volcar ni desplazarse al chutar.',
  },
  {
    icon: Package,
    title: 'Plegado en Segundos',
    desc: 'Armazón 100% abatible. Montaje instantáneo sin herramientas y almacenaje ultra-compacto.',
  },
  {
    icon: Award,
    title: 'Red Alta Resistencia',
    desc: 'Malla reforzada premium que reduce la tensión del disparo y aguanta temporadas de uso intensivo.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="features" className="features-section section" aria-labelledby="features-heading" style={{ background: '#fff', borderTop: '1px solid #f0f0f0' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div className="eyebrow" style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="eyebrow-line" /><span className="eyebrow-text">Ingeniería ProGrade</span><span className="eyebrow-line" />
          </motion.div>
          <motion.h2 id="features-heading" className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Diseñada para <span className="gold">rendir.</span>
          </motion.h2>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {mainFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article key={i} className="feature-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '40px 24px', border: '1px solid #f0f0f0', borderRadius: 0 }}>
                <div className="feature-icon" style={{ margin: '0 auto 24px', width: 56, height: 56, background: '#111', borderRadius: '50%' }}>
                  <Icon size={24} color="#c9a84c" />
                </div>
                <h3 className="feature-title" style={{ fontSize: 13, marginBottom: 12 }}>{f.title}</h3>
                <p className="feature-desc" style={{ fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </motion.article>
            );
          })}
        </div>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
            <img src="/Imagenes/PRO GOL - porterias medidas 2.jpeg" 
                 alt="Dimensiones técnicas ProGol" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, background: '#fff', padding: '12px 20px', borderLeft: '3px solid #c9a84c' }}>
              <p style={{ fontFamily: 'Orbitron', fontSize: 10, fontWeight: 900, color: '#111' }}>PRECISIÓN TÉCNICA</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
            <img src="/Imagenes/PRO GOL almanenaje 2.jpeg" 
                 alt="Sistema de plegado compacto" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, background: '#fff', padding: '12px 20px', borderLeft: '3px solid #c9a84c' }}>
              <p style={{ fontFamily: 'Orbitron', fontSize: 10, fontWeight: 900, color: '#111' }}>ALMACENAJE COMPACTO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
