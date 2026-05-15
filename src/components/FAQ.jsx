import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ items, schemaId }) {
  const [open, setOpen] = useState(null);

  // Inject FAQ schema for Google rich snippets
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section style={{ background: '#f8f8f8', padding: '80px 0' }} aria-labelledby={`faq-heading-${schemaId}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Preguntas Frecuentes</span>
            <span className="eyebrow-line" />
          </div>
          <h2 id={`faq-heading-${schemaId}`} className="section-title"
            style={{ textAlign: 'center', marginBottom: 48 }}>
            Todo lo que necesitas<br /><span className="gold">saber.</span>
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px' 
          }}>
            {items.map((item, i) => (
              <motion.div key={i}
                style={{ background: '#fff', border: '1px solid #eee', overflow: 'hidden', height: 'fit-content' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '20px 24px', background: 'none',
                    border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16,
                  }}
                  aria-expanded={open === i}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.4 }}>{item.q}</span>
                  <span style={{ color: '#c9a84c', flexShrink: 0 }}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p style={{
                        padding: '0 24px 24px', fontSize: 13, color: '#666',
                        lineHeight: 1.7, fontWeight: 500,
                      }}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
