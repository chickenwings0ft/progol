import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Models from '../components/Models';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Modelos() {
  const { t, lang } = useLanguage();

  const faqItems = [
    {
      q: lang === 'es' ? '¿Cuál es el modelo más vendido de portería ProGol?' : 'What is the best-selling ProGoal model?',
      a: lang === 'es' 
        ? 'El modelo Grande (L) de 1.80 × 1.20 m es nuestro top ventas mundial. Es la medida estándar preferida por clubes y academias profesionales para ejercicios de finalización y partidos en espacios reducidos (Small-Sided Games).' 
        : 'The Large (L) 1.80 × 1.20 m model is our global best-seller. It is the standard size preferred by professional clubs and academies for finishing drills and Small-Sided Games.',
    },
    {
      q: lang === 'es' ? '¿Qué tamaño de portería de entrenamiento necesito para mi academia?' : 'What goal size do I need for my academy?',
      a: lang === 'es' 
        ? 'La elección depende de la categoría de edad. Recomendamos la talla S (1.20m) para fútbol base (6-10 años), talla M (1.50m) para infantiles (10-14 años) y la talla L (1.80m) para cadetes, juveniles y competición amateur o adulta.' 
        : 'The choice depends on the age category. We recommend size S (1.20m) for youth football (6-10 years), size M (1.50m) for juniors (10-14 years), and size L (1.80m) for adults and U16+.',
    },
    {
      q: lang === 'es' ? '¿Ofrecéis garantía en las porterías de aluminio?' : 'Do you offer a warranty on the aluminum goals?',
      a: lang === 'es'
        ? 'Sí, absolutamente. Todas nuestras porterías ProGoal incluyen una garantía directa de fabricación de 2 años contra defectos del marco de aluminio aeroespacial o las bisagras de plegado.'
        : 'Yes, absolutely. All our ProGoal goals include a direct 2-year manufacturing warranty against defects in the aerospace aluminum frame or folding hinges.',
    },
    {
      q: lang === 'es' ? '¿Están incluidas las redes reforzadas en el precio?' : 'Are the reinforced nets included in the price?',
      a: lang === 'es'
        ? 'Sí, cada portería se entrega lista para usar e incluye nuestra red de malla reforzada premium anti-impactos. Además, si solicitas presupuesto para tu club, puedes personalizar el color de la estructura y el logo impreso en la red.'
        : 'Yes, every goal comes ready to use and includes our premium impact-resistant reinforced mesh net. Additionally, if you request a quote for your club, you can customize the frame color and logo printed on the net.',
    }
  ];

  return (
    <>
      {/* Page header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">{t('models_page.eyebrow')}</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            {t('models_page.title')}<br /><span className="gold">{t('models_page.title_accent')}</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            {t('models_page.desc')}
          </p>
        </div>
      </div>

      {/* Guía de elección */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <motion.div style={{ maxWidth: 780, margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">{t('models_page.guide_eyebrow')}</span></div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>{t('models_page.guide_title')}<br /><span className="gold">{t('models_page.guide_title_accent')}</span></h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
              {t('models_page.guide_desc_1')}
            </p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
              {t('models_page.guide_desc_2')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 40 }}>
              {[
                { model: t('models.size_s'), dims: '1.20 × 0.75 m', price: '325€', best: t('models_page.size_s_desc'), color: '#f8f8f8' },
                { model: t('models.size_m'), dims: '1.50 × 0.90 m', price: '350€', best: t('models_page.size_m_desc'), color: '#f8f8f8' },
                { model: t('models.size_l'),  dims: '1.80 × 1.20 m', price: '375€', best: t('models_page.size_l_desc'), color: '#111' },
                { model: t('models.size_xl'), dims: '2.00 × 1.00 m', price: '375€', best: t('models_page.size_xl_desc'), color: '#f8f8f8' },
              ].map((m, i) => (
                <motion.div key={i} style={{ padding: '28px', background: m.color, border: m.color === '#111' ? '2px solid #c9a84c' : '1px solid #eee' }}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 9, fontWeight: 900, color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>{m.dims} · {m.price}</p>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: m.color === '#111' ? '#fff' : '#111', marginBottom: 12 }}>{m.model}</h3>
                  <p style={{ fontSize: 13, color: m.color === '#111' ? '#888' : '#666', lineHeight: 1.7, fontWeight: 500 }}>{m.best}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Models />

      {/* Personalización */}
      <section style={{ background: '#f8f8f8', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">{t('nav.custom')}</span></div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>{t('models_page.custom_title')}<br /><span className="gold">{t('models_page.custom_title_accent')}</span></h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                {t('models_page.custom_desc_1')}
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 28 }}>
                {t('models_page.custom_desc_2')}
              </p>
              <Link to="/contacto" className="btn-dark">{t('models_page.custom_cta')} <ArrowRight size={13} /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/Imagenes/ProGol Sports Roja perfil.png" alt="Custom ProGoal"
                style={{ width: '100%', height: 380, objectFit: 'cover', objectPosition: 'center' }} />
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} schemaId="modelos" />
      <Contact />

      <div style={{ background: '#fff', padding: '64px 0', textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
        <div className="container">
          <p style={{ color: '#aaa', fontFamily: 'Orbitron, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>{t('models_page.advice_text')}</p>
          <Link to="/contacto" className="btn-dark">{t('models_page.advice_cta')} <ArrowRight size={13} /></Link>
        </div>
      </div>
    </>
  );
}
