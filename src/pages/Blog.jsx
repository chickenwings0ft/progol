import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      title: 'Guía para elegir la mejor portería de fútbol para tu academia',
      slug: 'como-elegir-porteria-futbol',
      excerpt: 'Descubre qué tamaño, material y formato de portería se adapta mejor a cada categoría formativa para maximizar el desarrollo técnico.',
      date: '10 Mayo, 2026'
    },
    {
      title: 'Por qué el aluminio aeroespacial es el mejor material para porterías',
      slug: 'aluminio-aeroespacial-porterias',
      excerpt: 'Analizamos las ventajas técnicas de las aleaciones de grado aeroespacial frente al PVC o acero tradicional en equipamiento deportivo.',
      date: '15 Mayo, 2026'
    },
    {
      title: 'Entrenamiento en espacios reducidos (SSG) con mini porterías',
      slug: 'entrenamiento-espacios-reducidos-futbol',
      excerpt: 'Los beneficios tácticos y técnicos de implementar Small-Sided Games con porterías ProGol en sesiones de entrenamiento profesional.',
      date: '18 Mayo, 2026'
    }
  ];

  return (
    <>
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Blog & SEO</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            Conocimiento y <span className="gold">Rendimiento</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            Artículos, guías técnicas y mejores prácticas para entrenadores, academias y directores deportivos.
          </p>
        </div>
      </div>

      <section style={{ background: '#fff', padding: '80px 0', minHeight: '50vh' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {posts.map((post, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                style={{ border: '1px solid #eee', padding: '32px', display: 'flex', flexDirection: 'column', background: '#fff' }}>
                <p style={{ fontSize: 11, color: '#c9a84c', fontFamily: 'Orbitron, sans-serif', fontWeight: 900, letterSpacing: '0.15em', marginBottom: 12 }}>{post.date}</p>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111', marginBottom: 16, lineHeight: 1.3 }}>
                  <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, fontWeight: 500, marginBottom: 24, flex: 1 }}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="btn-dark" style={{ alignSelf: 'flex-start' }}>
                  Leer artículo <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
