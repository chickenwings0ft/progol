import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EntrenamientoReducidos() {
  return (
    <article>
      {/* Blog Header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 60px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Metodología</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 24, textTransform: 'none' }}>
            Entrenamiento en <span className="gold">Espacios Reducidos</span> (SSG) con porterías portátiles
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, lineHeight: 1.8, marginBottom: 24 }}>
            Los Small-Sided Games (SSG) o Juegos en Espacios Reducidos se han convertido en la base del fútbol moderno. Descubre por qué multiplicar el número de porterías en el campo acelera el aprendizaje táctico y cognitivo.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          
          <div style={{ fontSize: 15, color: '#444', lineHeight: 1.9, fontWeight: 500 }}>
            <p style={{ marginBottom: 20 }}>
              La metodología de entrenamiento en el fútbol ha evolucionado radicalmente. Los entrenamientos analíticos (filas para disparar a puerta) han dado paso a los ejercicios globales y estructurados. Aquí es donde los <strong>Small-Sided Games (SSG)</strong> brillan con luz propia.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>¿Qué son los Small-Sided Games?</h2>
            <p style={{ marginBottom: 20 }}>
              Son partidos o situaciones de juego disputadas en un área más pequeña de lo habitual y con menos jugadores (ej: 3v3, 4v4 o rondos de posesión). El objetivo es condensar el tiempo de juego real, forzando a los jugadores a tomar decisiones constantemente bajo presión.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>Beneficios de multiplicar las porterías en el campo</h2>
            <p style={{ marginBottom: 20 }}>
              Un error metodológico frecuente es usar solo dos porterías grandes para 22 jugadores. Al introducir <strong>4 o 6 mini porterías</strong> en un mismo campo, conseguimos:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><strong>Aumento drástico de contactos con el balón:</strong> En un SSG 4v4 con cuatro mini porterías, la estadística demuestra que cada jugador toca el balón hasta un 300% más que en un 11v11 clásico.</li>
              <li><strong>Transiciones ultra-rápidas:</strong> Defender y atacar ocurren en fracciones de segundo. El jugador aprende a cambiar el "chip" cognitivo instantáneamente tras una pérdida o recuperación.</li>
              <li><strong>Visión periférica y cambios de orientación:</strong> Si un equipo ataca dos porterías pequeñas simultáneamente, el poseedor del balón debe escanear constantemente dónde está el espacio libre, fomentando los cambios de juego.</li>
            </ul>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>Ejemplo Práctico: El 4v4 con 4 Porterías</h2>
            <p style={{ marginBottom: 20 }}>
              Se delimita un cuadrado de 30x30 metros. En cada esquina (o lado) se coloca una portería de entrenamiento tamaño S o M (ej. 1.20m o 1.50m). El equipo Rojo ataca dos porterías y defiende otras dos. Esta tarea trabaja intensamente la circulación de balón horizontal, la lectura táctica de superioridades y la finalización rápida.
            </p>

            <h2 style={{ fontSize: 24, color: '#111', fontWeight: 800, margin: '40px 0 20px' }}>El equipamiento es vital</h2>
            <p style={{ marginBottom: 20 }}>
              Para que estos ejercicios sean dinámicos, el entrenador debe poder configurar y mover el campo en minutos. Las porterías pesadas que requieren picas ralentizan la sesión. Por eso las metodologías modernas exigen porterías hiper-ligeras, de base estable y plegables.
            </p>

            {/* CTA Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: '#f8f8f8', padding: '40px', border: '1px solid #eee', marginTop: 60, borderRadius: 8, textAlign: 'center' }}>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: '#111', marginBottom: 16 }}>Revoluciona tus entrenamientos</h3>
              <p style={{ color: '#666', marginBottom: 24 }}>Despliega ejercicios tácticos complejos en segundos. Las porterías ProGol se pliegan de forma plana y se mueven sin esfuerzo.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <Link to="/contacto" className="btn-dark">Pide Presupuesto para tu Club <ArrowRight size={13} /></Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </article>
  );
}
