import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Package, Award, Quote, Mail, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Contact from '../components/Contact';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, title: t('home.feature_1_title'), desc: t('home.feature_1_desc') },
    { icon: Zap,    title: t('home.feature_2_title'), desc: t('home.feature_2_desc') },
    { icon: Package,title: t('home.feature_3_title'), desc: t('home.feature_3_desc') },
    { icon: Award,  title: t('home.feature_4_title'), desc: t('home.feature_4_desc') },
  ];

  const testimonials = [
    { quote: t('home.testimonial_1_quote', 'Con ProGoal hemos cambiado por completo cómo diseñamos las sesiones...'), author: 'Alejandro Martínez', role: 'Director Técnico — Academia CD Villarreal Sub-14', initials: 'AM' },
    { quote: t('home.testimonial_2_quote', 'Compramos 6 unidades Talla L y llevan dos temporadas sin un solo problema...'), author: 'Roberto Sánchez', role: 'Coordinador Deportivo — FC Badalona', initials: 'RS' },
    { quote: t('home.testimonial_3_quote', 'La Talla XL panorámica es exactamente lo que un preparador de porteros necesita...'), author: 'Miguel Ángel Torres', role: 'Preparador de Porteros — Academia de Élite', initials: 'MT' },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="hero-section" aria-label="ProGoal Sports">
        <div className="hero-img-mobile">
          <motion.img src="/foto-profesional.png" alt="ProGoal Sports"
            initial={{ scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} />
          <div className="hero-img-mobile-fade" />
        </div>
        <motion.div className="hero-img-desktop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1 }}>
          <img src="/foto-profesional.png" alt="ProGoal Sports" />
          <div className="hero-img-desktop-fade" />
        </motion.div>
        <motion.div className="hero-accent-bar" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.7, delay: 0.3 }} />
        <div className="hero-content">
          <motion.div className="hero-eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <span className="hero-eyebrow-line" /><span className="hero-eyebrow-text">{t('home.hero_eyebrow')}</span>
          </motion.div>
          <motion.h1 className="hero-h1" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
            {t('home.hero_title_1')}<br /><span style={{ color: '#c9a84c' }}>{t('home.hero_title_accent')}</span><br />{t('home.hero_title_2')}
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            {t('home.hero_sub')}
          </motion.p>
          <motion.div className="hero-ctas" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}>
            <Link to="/modelos" className="btn-dark">{t('home.hero_cta_models')} <ArrowRight size={14} /></Link>
            <Link to="/personalizacion" className="btn-outline">{t('home.hero_cta_custom')} <Palette size={14} style={{ marginLeft: 8 }} /></Link>
          </motion.div>
        </div>
        <motion.div className="hero-spec-strip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {[
            { val: t('home.hero_spec_1_val'), lbl: t('home.hero_spec_1_lbl') }, 
            { val: t('home.hero_spec_2_val'), lbl: t('home.hero_spec_2_lbl') }, 
            { val: t('home.hero_spec_3_val'), lbl: t('home.hero_spec_3_lbl') }, 
            { val: t('home.hero_spec_4_val'), lbl: t('home.hero_spec_4_lbl') }
          ].map((s, i) => (
            <div key={i} className="hero-spec-cell"><span className="hero-spec-val">{s.val}</span><span className="hero-spec-lbl">{s.lbl}</span></div>
          ))}
        </motion.div>
      </section>

      {/* ── DISEÑADA PARA RENDIR ── */}
      <section className="section" style={{ background: '#fff', padding: '96px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">{t('home.features_eyebrow')}</span></div>
            <h2 className="section-title" style={{ marginBottom: 48 }}>{t('home.features_title')} <span className="gold">{t('home.features_title_accent')}</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={i} className="feature-card" style={{ padding: '36px 24px' }}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}>
                  <div className="feature-icon" style={{ width: 48, height: 48, background: '#111', borderRadius: '50%', marginBottom: 20 }}>
                    <Icon size={20} color="#c9a84c" />
                  </div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 10, height: 340 }}>
            {[
              { src: '/Imagenes/PRO GOL - porterias medidas 2.jpeg', label: t('home.features_label_1') },
              { src: '/Imagenes/PRO GOL almanenaje 2.jpeg',          label: t('home.features_label_2') },
            ].map((img, i) => (
              <motion.div key={i} style={{ position: 'relative', overflow: 'hidden' }}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20, background: '#fff', padding: '10px 18px', borderLeft: '3px solid #c9a84c' }}>
                  <p style={{ fontFamily: 'Orbitron', fontSize: 9, fontWeight: 900, color: '#111', letterSpacing: '0.15em' }}>{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div style={{ textAlign: 'center', marginTop: 40 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link to="/caracteristicas" className="btn-outline">{t('home.features_cta')} <ArrowRight size={13} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── MODELS PREVIEW ── */}
      <section className="section" style={{ background: '#f8f8f8', padding: '96px 0' }}>
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: 52 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-line" /><span className="eyebrow-text">{t('home.models_eyebrow')}</span><span className="eyebrow-line" /></div>
            <h2 className="section-title">{t('home.models_title')}<br /><span className="gold">{t('home.models_title_accent')}</span></h2>
            <p style={{ marginTop: 14, color: '#888', fontSize: 14, fontWeight: 500, maxWidth: 460, margin: '14px auto 0' }}>{t('home.models_desc')}</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {[
              { name: t('models.size_s'), dims: '1.20 × 0.75 m', price: '325€', tag: 'Infantil & Sala' },
              { name: t('models.size_m'), dims: '1.50 × 0.90 m', price: '350€', tag: 'Cadete & Juvenil' },
              { name: t('models.size_l'),  dims: '1.80 × 1.20 m', price: '375€', tag: 'Amateur & Pro', popular: true },
              { name: t('models.size_xl'), dims: '2.00 × 1.00 m', price: '375€', tag: 'Porteros & Táctico' },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: '32px 24px', border: m.popular ? '2px solid #c9a84c' : '1px solid #eee', background: m.popular ? '#111' : '#fff', position: 'relative' }}>
                {m.popular && <div style={{ position: 'absolute', top: -12, left: 20, background: '#c9a84c', color: '#111', padding: '3px 12px', fontFamily: 'Orbitron, sans-serif', fontSize: 9, fontWeight: 900, letterSpacing: '0.15em' }}>{t('home.models_popular')}</div>}
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 8 }}>{m.tag}</p>
                <p style={{ fontSize: 20, fontWeight: 900, color: m.popular ? '#fff' : '#111', marginBottom: 4 }}>{m.name}</p>
                <p style={{ fontSize: 13, color: m.popular ? '#777' : '#aaa', fontWeight: 500, marginBottom: 20 }}>{m.dims}</p>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 28, fontWeight: 900, color: m.popular ? '#fff' : '#111' }}>{m.price}</p>
              </motion.div>
            ))}
          </div>
          <motion.div style={{ textAlign: 'center', marginTop: 40 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link to="/modelos" className="btn-dark">{t('home.models_cta')} <ArrowRight size={13} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: '#fff', padding: '96px 0' }}>
        <div className="container">
          <motion.div style={{ marginBottom: 52 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">{t('home.testimonials_eyebrow')}</span></div>
            <h2 className="section-title">{t('home.testimonials_title')}<br /><span className="gold">{t('home.testimonials_title_accent')}</span></h2>
          </motion.div>
          <div className="test-grid">
            {testimonials.map((t, i) => (
              <motion.blockquote key={i} className="test-card"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <Quote size={22} color="#c9a84c" style={{ opacity: 0.4, marginBottom: 16 }} />
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8, fontWeight: 500, fontStyle: 'italic', marginBottom: 24 }}>"{t.quote}"</p>
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
        </div>
      </section>

      {/* ── BANNER ── */}
      <section className="section" style={{ padding: '0' }}>
        <motion.div style={{ position: 'relative', height: 360, overflow: 'hidden' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <img src="/Imagenes/PRO GOL porterias (5).jpeg" alt="ProGoal"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.75) 50%, transparent 100%)', display: 'flex', alignItems: 'center', padding: '0 clamp(24px, 6vw, 80px)' }}>
            <div style={{ maxWidth: 480 }}>
              <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>{t('home.banner_eyebrow')}</p>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, textTransform: 'uppercase', color: '#111', fontSize: 'clamp(1.5rem, 4vw, 2.6rem)', lineHeight: 1.05, marginBottom: 28 }}>
                {t('home.banner_title')}
              </h2>
              <Link to="/contacto" className="btn-dark">{t('home.banner_cta')} <ArrowRight size={13} /></Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="section" style={{ background: '#fff', padding: '100px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28 }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c' }}>{t('home.pullquote_eyebrow')}</p>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: 800, color: '#111', lineHeight: 1.5, maxWidth: 680, fontFamily: 'Montserrat, sans-serif' }}>
              "{t('home.pullquote_text_1')} <span style={{ color: '#c9a84c' }}>{t('home.pullquote_text_accent')}</span> {t('home.pullquote_text_2')}"
            </p>
            <Link to="/contacto" className="btn-dark" style={{ marginTop: 8 }}>
              {t('home.banner_cta')} <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="section" style={{ background: '#f8f8f8', padding: '80px 0' }}>
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: 40 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-line" /><span className="eyebrow-text">{t('home.gallery_eyebrow')}</span><span className="eyebrow-line" /></div>
            <h2 className="section-title">{t('home.gallery_title')}<br /><span className="gold">{t('home.gallery_title_accent')}</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, height: 300, overflow: 'hidden' }}>
            {['/Imagenes/ProGol Sports porterias (1).jpeg', '/Imagenes/ProGol Sports porterias (7).jpeg', '/Imagenes/ProGol Sports porterias (12).jpeg'].map((src, i) => (
              <motion.div key={i} style={{ overflow: 'hidden' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <img src={src} alt="ProGoal" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
              </motion.div>
            ))}
          </div>
          <motion.div style={{ textAlign: 'center', marginTop: 36 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link to="/galeria" className="btn-dark">{t('home.gallery_cta')} <ArrowRight size={13} /></Link>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  );
}
