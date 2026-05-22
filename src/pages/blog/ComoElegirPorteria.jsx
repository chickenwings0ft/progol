import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FAQ from '../../components/FAQ';

export default function ComoElegirPorteria() {
  const faqItems = [
    {
      q: '¿Es mejor una portería de PVC o de aluminio para una academia?',
      a: 'Para academias, el aluminio es la única opción rentable. Aunque el PVC es más barato al inicio, se rompe y se astilla rápidamente con el uso continuo y el sol. El aluminio es una inversión a largo plazo porque no se oxida y resiste impactos de alta velocidad.'
    },
    {
      q: '¿Necesitan las porterías ProGol sacos de arena o anclajes?',
      a: 'No. Gracias a su diseño inteligente con base equilibrada, las porterías ProGol ofrecen una estabilidad total frente a los tiros. No vuelcan ni se desplazan constantemente, evitando interrupciones durante el entrenamiento.'
    },
    {
      q: '¿Se pueden utilizar las porterías ProGol en la playa o en pabellones?',
      a: 'Sí, son completamente versátiles. Al no requerir anclajes terrestres y estar fabricadas en aluminio que no se oxida, puedes utilizarlas en césped, arena de playa, asfalto o parqué de fútbol sala sin dañar la superficie.'
    }
  ];

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
            ¿Cuál es la <span className="gold">mejor portería de fútbol</span> para mí?
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, lineHeight: 1.8, marginBottom: 24 }}>
            Muchos directores de academias pierden miles de euros cada temporada reemplazando material roto, mientras que sus jugadores pierden la oportunidad de mejorar su técnica por no tener el equipo adecuado. El secreto del éxito no está en comprar lo más caro, sino en conocer exactamente qué material y tamaño necesita tu equipo. Si te preguntas qué portería escoger para evitar gastos innecesarios y transformar tus entrenamientos, en los próximos minutos descubrirás el detalle que separa a las academias de élite del resto.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          
          <div style={{ fontSize: 16, color: '#444', lineHeight: 1.9, fontWeight: 500 }}>
            
            <h2 style={{ fontSize: 28, color: '#111', fontWeight: 900, margin: '0 0 20px' }}>¿Como elegir la mejor portería?</h2>
            <p style={{ marginBottom: 40 }}>
              Elegir el equipamiento correcto va mucho más allá de tener dos postes y una red. Para las academias deportivas, el campo de entrenamiento es una zona de alto rendimiento. Necesitas herramientas que ahorren tiempo a tus entrenadores, que protejan a los jugadores y que duren años sin oxidarse. A continuación, desglosamos todo lo que necesitas saber para tomar la decisión definitiva.
            </p>

            <h2 style={{ fontSize: 28, color: '#111', fontWeight: 900, margin: '40px 0 20px' }}>Tamaños de Porterías de Fútbol</h2>
            <p style={{ marginBottom: 20 }}>
              La primera gran duda al equipar un campo es la dimensión. El tamaño de la portería afecta directamente a la psicología y a la técnica del jugador. Si la meta es demasiado grande, el portero se frustra; si es muy pequeña, los delanteros no marcan. A continuación, repasamos qué dimensiones exige cada etapa.
            </p>

            <img src="/Imagenes/blog-porteria-entrenamiento.png" alt="Elección de tamaño de portería de entrenamiento" style={{ width: '100%', height: 'auto', borderRadius: 8, margin: '32px 0 40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>Fútbol 11 (A partir de 14 años y Senior)</h3>
            <p style={{ marginBottom: 20 }}>
              Las porterías oficiales de Fútbol 11 miden 7,32 metros de ancho por 2,44 metros de alto. Este es el formato estándar para partidos de liga y competiciones oficiales en categorías de cadete en adelante.
            </p>
            <p style={{ marginBottom: 20 }}>
              Sin embargo, tener este tamaño no siempre es lo ideal para el día a día. Los equipos profesionales rara vez usan estas porterías gigantes para ejercicios tácticos. Para trabajar la finalización rápida, los rondos o los disparos de precisión, los entrenadores prefieren utilizar porterías reducidas. Esto obliga a los delanteros a afinar su puntería y a levantar la cabeza antes de chutar.
            </p>

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>Fútbol 9 y Fútbol 7 (De 9 a 13 años)</h3>
            <p style={{ marginBottom: 20 }}>
              En las categorías alevín e infantil, las medidas oficiales suelen ser de 6 metros de ancho por 2 metros de alto. En esta etapa de desarrollo, los niños están aprendiendo a golpear el balón con fuerza y a posicionarse tácticamente.
            </p>
            <p style={{ marginBottom: 20 }}>
              Para estas edades, las porterías profesionales para academias son vitales. Los entrenadores necesitan crear campos reducidos en cuestión de minutos para trabajar transiciones. Aquí es donde entran en juego las porterías de 1.50m o 1.80m, que permiten dividir un campo grande en varias zonas de juego simultáneas, manteniendo un nivel de competitividad adecuado.
            </p>

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>Fútbol 5 y Fútbol Sala (Prebenjamín y Benjamín)</h3>
            <p style={{ marginBottom: 20 }}>
              Para los más pequeños, el tamaño oficial de partido es de 3 metros de ancho por 2 metros de alto. A estas edades (de 5 a 8 años), el enfoque principal es la pura diversión y el primer contacto con el balón.
            </p>
            <p style={{ marginBottom: 20 }}>
              No obstante, si el objetivo es la tecnificación pura, las medidas más populares oscilan entre 1.20m y 1.50m. Trabajar con metas pequeñas en el Entrenamiento en Espacios Reducidos (SSG) con porterías portátiles obliga al niño a desarrollar una precisión milimétrica. Al haber menos espacio para marcar, el jugador mejora su agilidad, su rapidez mental y su técnica de pase bajo presión.
            </p>

            <h2 style={{ fontSize: 28, color: '#111', fontWeight: 900, margin: '60px 0 20px' }}>Materiales para Porterías de Fútbol</h2>
            <p style={{ marginBottom: 20 }}>
              El material es el factor más importante a la hora de determinar cuánto va a durar tu inversión. Existen tres grandes opciones en el mercado, pero solo una está diseñada para el rigor del uso diario.
            </p>

            <img src="/Imagenes/blog-aluminio-aeroespacial.png" alt="Detalle de portería de aluminio aeroespacial" style={{ width: '100%', height: 'auto', borderRadius: 8, margin: '32px 0 40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>1. Porterías de PVC (Plástico)</h3>
            <p style={{ marginBottom: 20 }}>
              Las porterías de tubo de PVC son muy populares por ser baratas y ligeras. Son una opción aceptable para niños pequeños que juegan en el jardín de casa los fines de semana.
            </p>
            <p style={{ marginBottom: 20 }}>
              Sin embargo, para una academia, son una pérdida de dinero. El plástico no soporta los disparos potentes de jugadores adolescentes o adultos. Las juntas se rompen con facilidad y, lo más grave, el sol cristaliza el PVC. En menos de un año a la intemperie, el material se vuelve quebradizo y se astilla, representando un peligro real de cortes para los niños.
            </p>

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>2. Porterías de Acero</h3>
            <p style={{ marginBottom: 20 }}>
              El acero es pesado y muy robusto. A simple vista, parece la mejor opción para aguantar balonazos. Pero el acero tiene un enemigo letal: el óxido.
            </p>
            <p style={{ marginBottom: 20 }}>
              En cuanto la pintura sufre un arañazo por los tacos de una bota o al arrastrar la portería, la humedad penetra y la corrosión comienza a destruir la estructura desde dentro. Además, al ser tan pesadas, son muy difíciles de mover por un solo entrenador. Si una portería de acero no está bien anclada al suelo y vuelca accidentalmente, su elevado peso puede causar accidentes muy graves.
            </p>

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>3. Porterías de Aluminio Aeroespacial (La Elección Profesional)</h3>
            <p style={{ marginBottom: 20 }}>
              Si buscas la máxima durabilidad, el aluminio es el rey indiscutible. Es el mismo material que utilizan en los campos de entrenamiento de la Primera División.
            </p>
            <p style={{ marginBottom: 20 }}>
              Entender por qué el aluminio aeroespacial es el mejor material para porterías de fútbol es sencillo: es 100% libre de óxido y estructuralmente invencible, pudiendo vivir a la intemperie todo el año bajo lluvia o sol extremo sin degradarse. A pesar de su enorme resistencia, es un material increíblemente ligero. Esto significa que un entrenador puede mover la portería sin ayuda y sin esfuerzo, mejorando la logística del club.
            </p>

            <h2 style={{ fontSize: 28, color: '#111', fontWeight: 900, margin: '60px 0 20px' }}>Tipos de Montaje: ¿Fijas o Independientes?</h2>
            <p style={{ marginBottom: 20 }}>
              La forma en la que la portería se apoya en el césped determina la flexibilidad de tus entrenamientos.
            </p>

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>Porterías con Encajes (Fijas)</h3>
            <p style={{ marginBottom: 20 }}>
              Este tipo de porterías se instalan metiendo los postes dentro de unos tubos (casquillos) que están enterrados y fijados con hormigón bajo el suelo.
            </p>
            <p style={{ marginBottom: 20 }}>
              Son obligatorias para los estadios principales donde se juegan partidos oficiales de 11 contra 11. El gran problema es que son inamovibles. Al no poder cambiarlas de sitio, anulan por completo la flexibilidad táctica. No puedes reconfigurar el campo para hacer ejercicios diferentes ni apartarlas para cuidar el desgaste del césped en el área de la portería.
            </p>

            <h3 style={{ fontSize: 20, color: '#111', fontWeight: 800, margin: '30px 0 16px' }}>Porterías Independientes Plegables</h3>
            <p style={{ marginBottom: 20 }}>
              Las porterías independientes se sostienen por su propio diseño en la base. Antiguamente, requerían pesados sacos de arena en la parte trasera para que no volcaran al recibir un disparo fuerte.
            </p>
            <p style={{ marginBottom: 20 }}>
              Hoy en día, la tecnología ha avanzado. Si buscas porterías de uso profesional plegables y fáciles de utilizar, los diseños modernos distribuyen el peso de forma inteligente para ser 100% antivuelco sin necesidad de anclajes. Además, tener una portería que se pueda plegar totalmente plana en segundos gracias a bisagras industriales, permite a los entrenadores despejar el campo o guardarlas en un cuarto de material sin ocupar apenas espacio.
            </p>

            <h2 style={{ fontSize: 28, color: '#111', fontWeight: 900, margin: '60px 0 20px' }}>Nuestras Porterías de Aluminio ProGol</h2>
            <p style={{ marginBottom: 20 }}>
              En ProGol Sports hemos creado la herramienta definitiva para clubes deportivos. Sabemos que necesitas material moderno, útil y práctico. Por eso, el marco de nuestras porterías está fabricado con una aleación de aluminio de 50mm de grado aeroespacial.
            </p>
            <p style={{ marginBottom: 20 }}>
              Son seguras (diseño con esquinas redondeadas y sin aristas punzantes), súper resistentes (el travesaño soporta hasta 100 kg de peso) y versátiles, sirviendo para fútbol césped, fútbol sala, playa o césped artificial. Su red reforzada absorbe los impactos sin problema y su diseño es totalmente abatible en plano sin herramientas. Además, puedes personalizarlas con los colores y el logo de tu club.
            </p>
            <p style={{ marginBottom: 20 }}>
              Disponemos de opciones que se ajustan a todas tus necesidades (también contamos con una talla XL de 2m x 1m):
            </p>

            <div style={{ background: '#f8f8f8', padding: '24px', borderRadius: '8px', marginBottom: 16 }}>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: '#111', marginBottom: 8 }}>ProGol Pequeña</h4>
              <p style={{ marginBottom: 0 }}>La talla S mide 1.20m x 0.75m. Es perfecta para los ejercicios de precisión más exigentes, obligando al jugador a ajustar el tiro al máximo. Ideal para tecnificación individual y entrenamientos de alta intensidad.</p>
            </div>
            
            <div style={{ background: '#f8f8f8', padding: '24px', borderRadius: '8px', marginBottom: 16 }}>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: '#111', marginBottom: 8 }}>ProGol Mediana</h4>
              <p style={{ marginBottom: 0 }}>La talla M mide 1.50m x 0.90m. Es nuestra opción más equilibrada para fútbol base. Permite un margen de error un poco mayor, fomentando la agilidad y la rapidez de movimientos en el campo, excelente para el desarrollo cognitivo de alevines y benjamines.</p>
            </div>

            <div style={{ background: '#f8f8f8', padding: '24px', borderRadius: '8px', marginBottom: 16 }}>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: '#111', marginBottom: 8 }}>ProGol Grande</h4>
              <p style={{ marginBottom: 0 }}>La talla L mide 1.80m x 1.20m. Es el formato más popular para academias y ejercicios de primer equipo. Permite jugar partidos en espacios reducidos con gran fluidez, donde el portero tiene un reto real pero el delantero necesita técnica para marcar.</p>
            </div>

            {/* CTA Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: '#111', padding: '48px', border: '1px solid #333', marginTop: 80, borderRadius: 8, textAlign: 'center' }}>
              <h3 style={{ fontSize: 26, fontWeight: 900, color: '#fff', marginBottom: 16 }}>¿Listo para dar el salto de calidad?</h3>
              <p style={{ color: '#aaa', marginBottom: 32, fontSize: 16 }}>Descubre por qué las mejores academias ya entrenan con ProGol. Elige el tamaño perfecto para tu equipo y transforma tus sesiones desde el primer día.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                <Link to="/modelos" className="btn-gold">Ver Catálogo y Precios <ArrowRight size={13} /></Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEO FAQ Component (Handles JSON-LD Schema automatically) */}
      <FAQ items={faqItems} schemaId="blog-como-elegir" />

    </article>
  );
}
