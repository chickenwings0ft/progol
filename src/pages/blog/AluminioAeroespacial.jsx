import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AluminioAeroespacial() {
  return (
    <article>
      {/* Blog Header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 60px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Materiales y Tecnología</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 24, textTransform: 'none' }}>
            Por qué el <span className="gold">aluminio aeroespacial</span> es el mejor material para porterías de fútbol
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, lineHeight: 1.8, marginBottom: 24 }}>
            El fútbol profesional exige equipamiento que pueda soportar un desgaste extremo. Analizamos por qué el aluminio ha desplazado definitivamente al acero y al PVC en el mercado de élite.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          
          <div style={{ fontSize: 15, color: '#444', lineHeight: 1.9, fontWeight: 500 }}>
            <p style={{ marginBottom: 20 }}>
              Tradicionalmente, las porterías de entrenamiento se fabricaban en acero (muy pesadas y propensas al óxido) o en PVC (ligeras pero extremadamente frágiles ante los balonazos). Hoy en día, la industria del equipamiento deportivo ha evolucionado hacia las <strong>aleaciones de aluminio</strong>, concretamente las de grado aeroespacial.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>1. Ratio Resistencia / Peso inigualable</h2>
            <p style={{ marginBottom: 20 }}>
              El aluminio de grado aeroespacial ofrece una resistencia estructural similar al acero, pero pesando apenas una fracción del mismo. Esto permite que una portería como la ProGol (con un tubo de 50mm de grosor) sea robusta frente a impactos de balón a más de 100 km/h, pero lo suficientemente ligera como para que un solo entrenador la desplace por el césped sin esfuerzo.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>2. 100% Resistente a la Corrosión</h2>
            <p style={{ marginBottom: 20 }}>
              El material de entrenamiento pasa miles de horas a la intemperie soportando lluvia, nieve, rocío matutino y, en el caso del fútbol playa, salitre. A diferencia del hierro o el acero que terminan oxidándose y requiriendo mantenimiento constante, el aluminio genera de forma natural una fina capa de óxido que sella el metal y lo protege de por vida contra la corrosión.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>3. Seguridad Activa para los Jugadores</h2>
            <p style={{ marginBottom: 20 }}>
              Las colisiones contra los postes son inevitables en el fragor del juego. Una portería de acero rígido no absorbe energía, transmitiendo todo el impacto al jugador. Las aleaciones de aluminio premium tienen una ligerísima capacidad de flexión que absorbe parte del choque, reduciendo drásticamente el riesgo de lesiones graves, especialmente en categorías de formación.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>4. Estabilidad Estructural bajo Carga</h2>
            <p style={{ marginBottom: 20 }}>
              Nuestro equipo de ingeniería sometió los travesaños de aluminio 50mm de ProGol a pruebas de carga extrema. El resultado demostró que el aluminio aeroespacial soporta más de <strong>100 kg de peso estático</strong> sin pandearse ni sufrir deformaciones permanentes.
            </p>

            {/* CTA Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: '#f8f8f8', padding: '40px', border: '1px solid #eee', marginTop: 60, borderRadius: 8, textAlign: 'center' }}>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: '#111', marginBottom: 16 }}>Invierte en calidad profesional</h3>
              <p style={{ color: '#666', marginBottom: 24 }}>Deja atrás el plástico y el acero oxidado. Las porterías ProGol están forjadas en aluminio aeroespacial de 50mm para durar toda la vida.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <Link to="/caracteristicas" className="btn-dark">Ver Ingeniería ProGrade <ArrowRight size={13} /></Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </article>
  );
}
