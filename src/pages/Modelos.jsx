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
      q: lang === 'es' ? '¿Cuál es el modelo más vendido de ProGoal?' : 'What is the best-selling ProGoal model?',
      a: lang === 'es' 
        ? 'El modelo Grande (L) de 1.80 × 1.20 m es el más demandado por clubes y academias. Es ideal para entrenamientos específicos de finalización.' 
        : 'The Large (L) 1.80 × 1.20 m model is the most requested by clubs and academies. It is ideal for specific finishing drills.',
    },
    {
      q: lang === 'es' ? '¿Qué tamaño de portería necesito para mi academia?' : 'What goal size do I need for my academy?',
      a: lang === 'es' 
        ? 'Depende de la categoría. Recomendamos S para 6-10 años, M para 10-14 años y L para cadetes y adultos.' 
        : 'It depends on the category. We recommend S for 6-10 years, M for 10-14 years, and L for U16 and adults.',
    },
    {
        q: lang === 'es' ? '¿Ofrecéis garantía en las porterías?' : 'Do you offer a warranty on the goals?',
        a: lang === 'es'
            ? 'Sí, todas las porterías ProGoal incluyen garantía de fabricación de 2 años.'
            : 'Yes, all ProGoal goals include a 2-year manufacturing warranty.',
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
