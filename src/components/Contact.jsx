import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  const [form, setForm] = useState({ nombre: '', email: '', club: '', modelo: '', mensaje: '' });
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const contactFeatures = [
    t('contact.feature_1'),
    t('contact.feature_2'),
    t('contact.feature_3'),
    t('contact.feature_4'),
    t('contact.feature_5'),
  ];

  return (
    <section id="contact" className="contact-section section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div ref={ref}>
            <motion.div className="eyebrow"
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
              <span className="eyebrow-line" /><span className="eyebrow-text">{t('contact.eyebrow')}</span>
            </motion.div>
            <motion.h2 id="contact-heading" className="section-title"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              {t('contact.title')}<br /><span className="gold">{t('contact.title_accent')}</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              style={{ marginTop: 16, color: '#666', fontSize: 14, fontWeight: 500, lineHeight: 1.8, marginBottom: 36 }}>
              {t('contact.desc')}
            </motion.p>

            {/* Bullets */}
            <motion.ul initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
              style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {contactFeatures.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600, color: '#444' }}>
                  <span style={{ width: 6, height: 6, background: '#c9a84c', borderRadius: '50%', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: Mail,   label: t('contact.label_email'), value: 'progolsports@gmail.com', href: 'mailto:progolsports@gmail.com' },
                { icon: MapPin, label: t('contact.label_fab'), value: t('contact.value_fab'), href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="contact-detail">
                  <div className="contact-icon"><Icon size={15} color="#c9a84c" /></div>
                  <div>
                    <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#bbb' }}>{label}</p>
                    {href
                      ? <a href={href} style={{ fontSize: 13, fontWeight: 700, color: '#111', textDecoration: 'none' }}>{value}</a>
                      : <p style={{ fontSize: 13, fontWeight: 700, color: '#111' }}>{value}</p>}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.15 }}>
            {sent ? (
              <div className="success-box">
                <CheckCircle size={52} color="#c9a84c" style={{ marginBottom: 20 }} />
                <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 15, fontWeight: 900, textTransform: 'uppercase', color: '#111', marginBottom: 12 }}>
                  {t('contact.success_title')}
                </h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, maxWidth: 320 }}>
                  {t('contact.success_desc')}
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}
                aria-label="Contact form">
                <div className="form-row">
                  <div>
                    <label className="form-label" htmlFor="nombre">{t('contact.form_name')}</label>
                    <input id="nombre" name="nombre" value={form.nombre} onChange={onChange} required placeholder={t('contact.form_name_placeholder')} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">{t('contact.form_email')}</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder={t('contact.form_email_placeholder')} className="form-input" />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label className="form-label" htmlFor="club">{t('contact.form_club')}</label>
                    <input id="club" name="club" value={form.club} onChange={onChange} placeholder={t('contact.form_club_placeholder')} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="modelo">{t('contact.form_model')}</label>
                    <select id="modelo" name="modelo" value={form.modelo} onChange={onChange} className="form-select">
                      <option value="">{t('contact.form_model_select')}</option>
                      <option value="S">{t('contact.form_model_s')}</option>
                      <option value="M">{t('contact.form_model_m')}</option>
                      <option value="L">{t('contact.form_model_l')}</option>
                      <option value="XL">{t('contact.form_model_xl')}</option>
                      <option value="varios">{t('contact.form_model_other')}</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="mensaje">{t('contact.form_message')}</label>
                  <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={onChange} rows={4}
                    placeholder={t('contact.form_message_placeholder')}
                    className="form-textarea" />
                </div>
                <button type="submit" className="btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  {t('contact.form_submit')} <Send size={13} />
                </button>
                <p style={{ textAlign: 'center', marginTop: 14, fontSize: 11, color: '#ccc', fontWeight: 500 }}>
                  {t('contact.form_footer')}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
