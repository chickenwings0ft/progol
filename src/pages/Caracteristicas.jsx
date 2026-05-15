import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Features from '../components/Features';
import TrainingBenefits from '../components/TrainingBenefits';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const faqItems = [
  {
    q: '¿De qué material está hecha la portería ProGol?',
    a: 'El marco de ProGol es una aleación de aluminio de grado aeroespacial de 50mm de diámetro. Este material, utilizado en la industria de la aviación, ofrece una relación resistencia/peso excepcional: es más ligero que el acero pero igual de resistente a los impactos. Además, el aluminio aeroespacial es inherentemente resistente a la corrosión, lo que significa que ProGol no se oxida ni se degrada con la lluvia, la humedad o el uso en exteriores.',
  },
  {
    q: '¿Cuánto peso puede soportar el travesaño?',
    a: 'El travesaño de ProGol ha sido diseñado y testado para soportar hasta 100 kg de carga estática. Esto significa que puedes colgar redes tensoras, utilizar bandas de entrenamiento o incluso que los jugadores se apoyen en él sin riesgo de deformación. Esta capacidad de carga es significativamente superior a la de la mayoría de porterías de entrenamiento del mercado.',
  },
  {
    q: '¿La portería se mueve o vuelca durante el entrenamiento?',
    a: 'No. ProGol ha sido diseñada con un sistema de distribución de peso y un perfil de base que garantizan la estabilidad sin necesidad de anclajes al suelo. El ángulo de los postes posteriores y la tensión de la red trabajan juntos para mantener la portería en su posición incluso ante disparos de alta velocidad. Esto elimina las constantes interrupciones del entrenamiento para recolocarla.',
  },
  {
    q: '¿En qué superficies se puede usar ProGol?',
    a: 'ProGol es compatible con todo tipo de superficies deportivas: césped natural, césped artificial, parqué, tarima flotante, asfalto, hormigón, arena de playa y tierra compactada. La base de los postes está diseñada para no arañar ni dañar las superficies más delicadas, como el parqué de pabellones cubiertos. Es válida para fútbol, fútbol sala, fútbol playa, hockey y cualquier deporte que requiera portería.',
  },
  {
    q: '¿Cuánto tiempo se tarda en montar y desmontar?',
    a: 'El montaje y desmontaje de ProGol se realiza en menos de 5 segundos por persona. El sistema de plegado articulado permite abatir toda la estructura en un solo plano sin necesidad de herramientas, tornillos ni piezas adicionales. Una vez plegada, la portería ocupa un espacio mínimo y puede almacenarse en vertical contra una pared o en horizontal bajo una grada.',
  },
  {
    q: '¿Puedo personalizar ProGol con el logo de mi club?',
    a: 'Sí. ProGol ofrece la posibilidad de personalizar la red con el logo o escudo de tu club, academia o empresa. Este servicio está disponible para pedidos individuales y por volumen. Además, la portería está disponible en varios colores de marco para adaptarse a la identidad visual de tu organización. Consulta con nuestro equipo para opciones y precios de personalización.',
  },
  {
    q: '¿Qué incluye la portería ProGol?',
    a: 'Cada portería ProGol incluye el marco completo de aluminio aeroespacial 50mm, la red de malla reforzada de alta calidad ya instalada, y todos los elementos de conexión necesarios para el montaje. No se necesita ningún accesorio adicional. La portería llega lista para usar directamente desde la caja.',
  },
  {
    q: '¿Ofrecéis descuentos para clubes o compras por volumen?',
    a: 'Sí. Disponemos de precios especiales para clubes, federaciones, academias e instalaciones deportivas que necesiten adquirir múltiples unidades. El descuento varía según el número de unidades y los modelos seleccionados. Para obtener un presupuesto personalizado, utiliza el formulario de contacto o escríbenos directamente a progolsports@gmail.com.',
  },
];

export default function Caracteristicas() {
  return (
    <>
      {/* Page header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Características Técnicas</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            Ingeniería diseñada<br /><span className="gold">para rendir.</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            Cada detalle de ProGol ha sido pensado para superar las carencias de las porterías de entrenamiento
            actuales. Desde el aluminio aeroespacial hasta las esquinas redondeadas, todo está al servicio
            del entrenador y del jugador.
          </p>
        </div>
      </div>

      {/* Intro editorial */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Por qué el material<br /><span className="gold">lo cambia todo.</span>
              </h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                La mayoría de porterías de entrenamiento del mercado utilizan acero galvanizado o plástico reforzado.
                ProGol apuesta por una aleación de aluminio de <strong>grado aeroespacial de 50mm</strong>, el mismo tipo
                de material utilizado en la fabricación de aeronaves. El resultado es un marco que pesa un tercio
                menos que el acero pero ofrece la misma rigidez estructural.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                Esta decisión de ingeniería tiene implicaciones directas para el entrenador: la portería es
                lo suficientemente ligera para que un solo jugador la transporte de un extremo del campo al otro,
                pero lo suficientemente robusta para resistir temporadas de uso intensivo sin deformarse.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500 }}>
                La <strong>resistencia a la corrosión</strong> del aluminio elimina además el mantenimiento: no hay que
                pintarla, engrasarla ni protegerla de la lluvia. ProGol es la portería que se monta, se usa y
                se olvida — hasta que vuelves a necesitarla.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ position: 'relative' }}>
              <img src="/Imagenes/ProGol Sports porterias (9).jpeg" alt="Detalle del marco de aluminio aeroespacial ProGol"
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
              <img src="/Imagenes/ProGol Sports porterias (11).jpeg" alt="Diseño seguro ProGol — esquinas redondeadas sin aristas"
                style={{ width: '100%', height: 380, objectFit: 'cover' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">Seguridad</span></div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                Diseño seguro<br /><span className="gold">sin compromisos.</span>
              </h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                Cada esquina y cada unión de ProGol está diseñada con un radio de curvatura que elimina
                completamente los bordes afilados, aristas punzantes o salientes peligrosos. Esto es especialmente
                relevante en categorías inferiores, donde los jugadores corren, se lanzan y chocan con más frecuencia
                cerca de las porterías.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500 }}>
                El diseño redondeado no es solo una cuestión estética: es una decisión de ingeniería que cumple
                con los estándares de seguridad europeos para material deportivo, garantizando la tranquilidad
                de entrenadores, padres y responsables de instalaciones.
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
