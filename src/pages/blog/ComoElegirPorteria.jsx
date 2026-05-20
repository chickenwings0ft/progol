import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComoElegirPorteria() {
  return (
    <article>
      {/* Blog Header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 60px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Guía de Compra</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 24, textTransform: 'none' }}>
            Guía para elegir la <span className="gold">mejor portería de fútbol</span> para tu academia
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, lineHeight: 1.8, marginBottom: 24 }}>
            Elegir la portería de fútbol adecuada es una de las decisiones más importantes para cualquier academia, club o entrenador. No solo impacta en la calidad del entrenamiento, sino en la seguridad y en la progresión técnica de los jugadores.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          
          <div style={{ fontSize: 15, color: '#444', lineHeight: 1.9, fontWeight: 500 }}>
            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>1. La importancia del tamaño por categoría</h2>
            <p style={{ marginBottom: 20 }}>
              El error más común en academias de formación es usar porterías desproporcionadas para la edad de los jugadores. El tamaño de la portería afecta directamente a la toma de decisiones del portero y a la confianza del delantero.
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><strong>Categoría Prebenjamín y Benjamín (6-10 años):</strong> Requieren porterías reducidas. El tamaño ideal es 1.20 × 0.75m. Fomenta la precisión y obliga al niño a mirar antes de chutar.</li>
              <li><strong>Categoría Alevín e Infantil (10-14 años):</strong> El modelo de 1.50 × 0.90m es el formato de transición perfecto para trabajar rondos y finalizaciones.</li>
              <li><strong>Cadetes, Juveniles y Senior:</strong> Necesitan formatos tipo "Small-Sided Games" (1.80 × 1.20m o 2.00 × 1.00m) para simular escenarios reales de presión.</li>
            </ul>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>2. Material: ¿PVC, Acero o Aluminio?</h2>
            <p style={{ marginBottom: 20 }}>
              La durabilidad y seguridad dependen del material. El <strong>PVC</strong> es barato pero se rompe fácilmente y no soporta disparos potentes de adultos. El <strong>acero</strong> es duradero pero extremadamente pesado y peligroso si vuelca.
            </p>
            <p style={{ marginBottom: 20 }}>
              La mejor opción para el rendimiento profesional es el <strong>aluminio de grado aeroespacial</strong>. Es ligero para su transporte, no se oxida a la intemperie y soporta impactos masivos sin deformarse. En ProGol, utilizamos marcos de aluminio de 50mm para garantizar la máxima seguridad.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>3. Estabilidad sin anclajes</h2>
            <p style={{ marginBottom: 20 }}>
              Una portería que necesita sacos de arena o picas clavadas en el césped resta agilidad al entrenador. Cuando cambias de ejercicio, necesitas mover la portería al instante. Busca siempre diseños con <strong>base equilibrada de alta estabilidad</strong> que soporten más de 100kg de impacto dinámico sin moverse.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>4. Plegabilidad y Almacenaje</h2>
            <p style={{ marginBottom: 20 }}>
              En los clubes, el espacio en los cuartos de material es limitado. Las porterías desmontables con "click" o piezas de plástico acaban perdiéndose o rompiéndose. La mejor portería de entrenamiento debe tener un sistema de bisagras de <strong>plegado plano</strong>, capaz de guardarse en segundos.
            </p>

            {/* CTA Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: '#f8f8f8', padding: '40px', border: '1px solid #eee', marginTop: 60, borderRadius: 8, textAlign: 'center' }}>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: '#111', marginBottom: 16 }}>Equipa tu academia con material profesional</h3>
              <p style={{ color: '#666', marginBottom: 24 }}>Las porterías ProGol cumplen con todos estos requisitos. Fabricadas en aluminio 50mm, hiper-estables y con plegado instantáneo.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <Link to="/modelos" className="btn-dark">Ver Modelos ProGol <ArrowRight size={13} /></Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </article>
  );
}
