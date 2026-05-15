import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', club: '', modelo: '', mensaje: '' });
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact-section section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div ref={ref}>
            <motion.div className="eyebrow"
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
              <span className="eyebrow-line" /><span className="eyebrow-text">Contacto & Presupuesto</span>
            </motion.div>
            <motion.h2 id="contact-heading" className="section-title"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Lleva ProGoal<br /><span className="gold">a tu club.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              style={{ marginTop: 16, color: '#666', fontSize: 14, fontWeight: 500, lineHeight: 1.8, marginBottom: 36 }}>
              Rellena el formulario y te respondemos en menos de 24 horas con un presupuesto personalizado
              para tu club, academia o instalación deportiva. También ofrecemos{' '}
              <strong style={{ color: '#111' }}>personalización con el escudo de tu club</strong> y descuentos por volumen.
            </motion.p>

            {/* Bullets */}
            <motion.ul initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
              style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {[
                'Respuesta en menos de 24 horas',
                'Descuentos por volumen para clubes',
                'Personalización con logo de tu club',
                'Disponible en varios colores',
                'Envío a toda España y Europa',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600, color: '#444' }}>
                  <span style={{ width: 6, height: 6, background: '#c9a84c', borderRadius: '50%', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: Mail,   label: 'Email', value: 'progolsports@gmail.com', href: 'mailto:progolsports@gmail.com' },
                { icon: MapPin, label: 'Fabricación', value: 'Hecho en España', href: null },
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
                  ¡Solicitud enviada!
                </h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, maxWidth: 320 }}>
                  Nos pondremos en contacto contigo en menos de 24 horas con tu presupuesto personalizado.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}
                aria-label="Formulario de presupuesto ProGoal Sports">
                <div className="form-row">
                  <div>
                    <label className="form-label" htmlFor="nombre">Nombre *</label>
                    <input id="nombre" name="nombre" value={form.nombre} onChange={onChange} required placeholder="Tu nombre completo" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="tu@email.com" className="form-input" />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label className="form-label" htmlFor="club">Club / Academia</label>
                    <input id="club" name="club" value={form.club} onChange={onChange} placeholder="Nombre de tu club o academia" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="modelo">Modelo de interés</label>
                    <select id="modelo" name="modelo" value={form.modelo} onChange={onChange} className="form-select">
                      <option value="">Seleccionar modelo...</option>
                      <option value="S">Pequeña (S) — 1.20×0.75m — 325€</option>
                      <option value="M">Mediana (M) — 1.50×0.90m — 350€</option>
                      <option value="L">Grande (L) — 1.80×1.20m — 375€ ★ Popular</option>
                      <option value="XL">Extra (XL) — 2.00×1.00m — 375€</option>
                      <option value="varios">Varios modelos / Pedido para club</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="mensaje">Cuéntanos más</label>
                  <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={onChange} rows={4}
                    placeholder="¿Cuántas unidades necesitas? ¿Qué tipo de superficie? ¿Necesitas personalización con logo? Cualquier detalle nos ayuda a darte el mejor presupuesto."
                    className="form-textarea" />
                </div>
                <button type="submit" className="btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  Solicitar presupuesto gratuito <Send size={13} />
                </button>
                <p style={{ textAlign: 'center', marginTop: 14, fontSize: 11, color: '#ccc', fontWeight: 500 }}>
                  Sin compromiso. Respuesta garantizada en &lt;24h.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
