import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComoElegirPorteria() {
  return (
    <article style={{ background: '#fcfcfc', minHeight: '100vh', paddingBottom: 80 }}>
      {/* Hero Header */}
      <div style={{ background: '#111', padding: '160px 0 80px', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <span style={{ background: 'rgba(201,168,76,0.2)', color: '#c9a84c', padding: '6px 16px', borderRadius: 20, fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Guía de Compra de Porterías de Fútbol</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 24 }}>
            ¿Cuál es la <span style={{ color: '#c9a84c' }}>mejor portería de fútbol</span> para mí?
          </h1>
          <p style={{ fontSize: 16, color: '#aaa', fontWeight: 500, lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            Con tantos tamaños y opciones de materiales, elegir la mejor portería de fútbol para tu academia o jardín puede resultar abrumador. En esta guía definitiva analizamos tamaños, materiales y tipos de montaje para que tomes la mejor decisión profesional.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 840, marginTop: 40 }}>
        {/* Main Image */}
        <img src="/Imagenes/blog-porteria-entrenamiento.png" alt="ProGoal Portería de entrenamiento en campo profesional" style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 48, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.9, fontWeight: 500 }}>
          
          <p style={{ marginBottom: 40, fontSize: 18, color: '#555' }}>
            Ya sea para equipar un campo de fútbol profesional, una academia de tecnificación o simplemente para el jardín trasero, conocer las especificaciones exactas te ahorrará dinero a largo plazo. A continuación desglosamos todo lo que necesitas saber.
          </p>

          {/* SIZES */}
          <h2 style={{ fontSize: 28, fontWeight: 900, textTransform: 'uppercase', color: '#111', borderBottom: '2px solid #c9a84c', paddingBottom: 10, marginBottom: 24 }}>Tamaños de Porterías de Fútbol</h2>
          <p style={{ marginBottom: 24 }}>
            La siguiente sección se centra en las dimensiones de las porterías. Es vital ajustar el tamaño a la edad de los jugadores para garantizar el desarrollo técnico y la competitividad adecuada.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 16 }}>Fútbol 11 (A partir de 14 años y Senior)</h3>
          <p style={{ marginBottom: 24 }}>
            Las porterías de fútbol 11 oficiales miden <strong>7,32m de ancho por 2,44m de alto</strong>. Este es el tamaño estándar utilizado en ligas profesionales, estadios y campos de entrenamiento de élite. Sin embargo, para <strong>entrenamientos específicos</strong> (Small-Sided Games, finalización rápida o rondos), los equipos profesionales rara vez utilizan este tamaño gigante, prefiriendo porterías reducidas de entrenamiento como las <Link to="/modelos" style={{ color: '#c9a84c', fontWeight: 700 }}>tallas L (1.80m) o XL (2.00m) de ProGol</Link> para fomentar la precisión.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 16 }}>Fútbol 9 y Fútbol 7 (De 9 a 13 años)</h3>
          <p style={{ marginBottom: 24 }}>
            Las porterías oficiales de F7 suelen medir 6m x 2m. Para estas categorías, el entrenamiento táctico requiere mucha agilidad. Las academias de alto rendimiento utilizan porterías portátiles de 1.50m a 1.80m de ancho para crear campos reducidos en cuestión de segundos.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 16 }}>Fútbol 5 y Fútbol Sala (Prebenjamín y Benjamín)</h3>
          <p style={{ marginBottom: 24 }}>
            Para el minifútbol y el fútbol sala, el tamaño oficial de partido es de 3m x 2m. No obstante, para la <strong>tecnificación técnica y los entrenamientos en jardín</strong>, las medidas más populares oscilan entre 1.20m y 1.50m de ancho (como nuestras tallas S y M). Estas medidas obligan al niño a levantar la cabeza antes de chutar, desarrollando una precisión milimétrica desde edades tempranas.
          </p>

          {/* MATERIALS */}
          <h2 style={{ fontSize: 28, fontWeight: 900, textTransform: 'uppercase', color: '#111', borderBottom: '2px solid #c9a84c', paddingBottom: 10, marginTop: 64, marginBottom: 24 }}>Materiales para Porterías de Fútbol</h2>
          <p style={{ marginBottom: 24 }}>
            El material define la durabilidad, el peso y la seguridad. Existen tres competidores principales en el mercado:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginBottom: 40 }}>
            {/* UPVC */}
            <div style={{ background: '#fff', border: '1px solid #eee', padding: 32, borderRadius: 8 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111', marginBottom: 12 }}>1. Porterías de PVC (Plástico)</h3>
              <p style={{ color: '#555', marginBottom: 16 }}>
                Las porterías de PVC son populares por su precio económico. Son ligeras y aptas para niños pequeños en jardines. <strong>Sin embargo:</strong> no soportan disparos potentes de adultos, las juntas de plástico terminan rompiéndose con los impactos, y el sol cristaliza el material haciéndolo quebradizo en menos de un año. No son aptas para uso profesional continuo.
              </p>
            </div>

            {/* STEEL */}
            <div style={{ background: '#fff', border: '1px solid #eee', padding: 32, borderRadius: 8 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111', marginBottom: 12 }}>2. Porterías de Acero</h3>
              <p style={{ color: '#555', marginBottom: 16 }}>
                El acero es robusto y pesado. Aunque resisten los disparos, su principal problema es el óxido. Si se dejan a la intemperie o sufren arañazos, la corrosión aparece rápidamente. Además, su elevado peso las hace peligrosas en caso de vuelco accidental y muy difíciles de mover por un solo entrenador.
              </p>
            </div>

            {/* ALUMINUM (PROGOAL) */}
            <div style={{ background: '#111', border: '2px solid #c9a84c', padding: 32, borderRadius: 8, color: '#fff' }}>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: '#c9a84c', marginBottom: 12 }}>3. Porterías de Aluminio Aeroespacial (La Elección Profesional)</h3>
              <img src="/Imagenes/blog-aluminio-aeroespacial.png" alt="Textura de aluminio aeroespacial en portería" style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8, marginBottom: 20 }} />
              <p style={{ color: '#ddd', marginBottom: 16 }}>
                Las porterías de aluminio son las reinas indiscutibles. Es el material utilizado en estadios de Primera División y campos de entrenamiento de élite. El aluminio es increíblemente ligero, estructuralmente invencible y <strong>100% libre de óxido</strong>.
              </p>
              <p style={{ color: '#ddd', marginBottom: 16 }}>
                En <strong>ProGol Sports</strong>, utilizamos un marco de aluminio aeroespacial de 50mm de grosor en toda nuestra gama. Esto permite crear porterías hiper-resistentes que pueden soportar más de 100 kg en su travesaño, pero lo suficientemente ligeras como para que un entrenador las pliegue y transporte con una sola mano.
              </p>
              <ul style={{ paddingLeft: 20, color: '#fff', fontWeight: 700, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><CheckCircle2 size={16} color="#c9a84c" style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} /> Irrompibles frente a balonazos a alta velocidad.</li>
                <li><CheckCircle2 size={16} color="#c9a84c" style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} /> Cero mantenimiento: pueden vivir a la intemperie.</li>
                <li><CheckCircle2 size={16} color="#c9a84c" style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} /> Estabilidad extrema gracias al diseño de base equilibrada.</li>
              </ul>
            </div>
          </div>

          {/* TYPES OF GOALS */}
          <h2 style={{ fontSize: 28, fontWeight: 900, textTransform: 'uppercase', color: '#111', borderBottom: '2px solid #c9a84c', paddingBottom: 10, marginTop: 64, marginBottom: 24 }}>Tipos de Montaje: ¿Fijas o Independientes?</h2>
          
          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 16 }}>Porterías con Encajes (Fijas)</h3>
          <p style={{ marginBottom: 24 }}>
            Se fijan al suelo mediante casquillos empotrados en hormigón. Son obligatorias para las porterías gigantes de estadio, pero anulan por completo la flexibilidad táctica de un campo de entrenamiento, ya que no se pueden mover.
          </p>

          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 16 }}>Porterías Independientes Plegables</h3>
          <p style={{ marginBottom: 24 }}>
            Las porterías independientes se sostienen por su propio peso. Tradicionalmente requerían sacos de arena para no volcar, pero el innovador sistema de <strong>ProGol Sports</strong> distribuye el peso en la base para hacerlas 100% antivuelco sin anclajes de ningún tipo.
          </p>
          <p style={{ marginBottom: 40 }}>
            Además, nuestra ingeniería permite <strong>plegarlas totalmente planas en menos de 10 segundos</strong> mediante bisagras industriales, lo que las convierte en la herramienta perfecta para academias que necesitan despejar el campo rápidamente.
          </p>

          {/* PRODUCT SHOWCASE (CTA SECTION) */}
          <div style={{ background: '#fcfcfc', border: '1px solid #e0e0e0', padding: 40, borderRadius: 12, marginTop: 64 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, textAlign: 'center', textTransform: 'uppercase', color: '#111', marginBottom: 32 }}>Nuestras Porterías de Aluminio ProGol</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              
              {/* Product 1 */}
              <div style={{ background: '#fff', border: '1px solid #eee', padding: 24, textAlign: 'center', borderRadius: 8 }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Talla S · 1.20 x 0.75m</p>
                <h4 style={{ fontSize: 18, fontWeight: 900, margin: '8px 0' }}>ProGol Pequeña</h4>
                <p style={{ fontSize: 22, fontWeight: 900, margin: '16px 0' }}>325 €</p>
                <Link to="/modelos" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Ver Detalles</Link>
              </div>

              {/* Product 2 */}
              <div style={{ background: '#fff', border: '1px solid #eee', padding: 24, textAlign: 'center', borderRadius: 8 }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Talla M · 1.50 x 0.90m</p>
                <h4 style={{ fontSize: 18, fontWeight: 900, margin: '8px 0' }}>ProGol Mediana</h4>
                <p style={{ fontSize: 22, fontWeight: 900, margin: '16px 0' }}>350 €</p>
                <Link to="/modelos" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Ver Detalles</Link>
              </div>

              {/* Product 3 */}
              <div style={{ background: '#111', border: '2px solid #c9a84c', padding: 24, textAlign: 'center', borderRadius: 8, color: '#fff' }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Talla L · 1.80 x 1.20m</p>
                <h4 style={{ fontSize: 18, fontWeight: 900, margin: '8px 0' }}>ProGol Grande</h4>
                <p style={{ fontSize: 22, fontWeight: 900, margin: '16px 0' }}>375 €</p>
                <Link to="/modelos" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Más Popular</Link>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <p style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>¿Necesitas equipar tu academia completa o solicitar personalización de colores y logos?</p>
              <Link to="/contacto" className="btn-dark">Contactar para Presupuesto de Club</Link>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}
