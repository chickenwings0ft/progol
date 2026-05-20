import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Features from '../components/Features';
import TrainingBenefits from '../components/TrainingBenefits';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Caracteristicas() {
  const { t, lang } = useLanguage();

  const faqItems = [
    {
      q: lang === 'es' ? '¿De qué material está hecha la portería ProGol?' : 'What material is the ProGoal goal made of?',
      a: lang === 'es' 
        ? 'El marco de ProGol es una aleación de aluminio de grado aeroespacial de 50mm de diámetro.' 
        : 'The ProGoal frame is made of a 50mm diameter aerospace-grade aluminum alloy.',
    },
    {
      q: lang === 'es' ? '¿Cuánto peso puede soportar el travesaño?' : 'How much weight can the crossbar support?',
      a: lang === 'es' 
        ? 'El travesaño de ProGol ha sido testado para soportar hasta 100 kg de carga estática.' 
        : 'The ProGoal crossbar has been tested to support up to 100 kg of static load.',
    }
  ];

  return (
    <>
      {/* Page header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">{t('features_page.eyebrow')}</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            {t('features_page.title')}<br /><span className="gold">{t('features_page.title_accent')}</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            {t('features_page.desc')}
          </p>
        </div>
      </div>

      {/* Intro editorial */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                {t('features_page.material_title')}<br /><span className="gold">{t('features_page.material_title_accent')}</span>
              </h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                {t('features_page.material_desc_1')}
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500 }}>
                {t('features_page.material_desc_2')}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ position: 'relative' }}>
              <img src="/Imagenes/ProGoal Sports porterias (9).jpeg" alt="Aerospace Aluminum"
                style={{ width: '100%', height: 420, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '32px 24px' }}>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, fontWeight: 900, color: '#c9a84c', letterSpacing: '0.2em' }}>ALUMINIO AEROESPACIAL · 50MM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Features />

      {/* Seguridad */}
      <section style={{ background: '#fff', padding: '80px 0', borderTop: '1px solid #f0f0f0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/Imagenes/ProGoal Sports porterias (11).jpeg" alt="Safe Design"
                style={{ width: '100%', height: 380, objectFit: 'cover' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">{t('features_page.safety_eyebrow')}</span></div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                {t('features_page.safety_title')}<br /><span className="gold">{t('features_page.safety_title_accent')}</span>
              </h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                {t('features_page.safety_desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TrainingBenefits />
      <FAQ items={faqItems} schemaId="caracteristicas" />
      <Contact />
    </>
  );
}
