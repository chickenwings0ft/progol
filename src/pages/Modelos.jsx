import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Models from '../components/Models';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const faqItems = [
  {
    q: '¿Cuál es el modelo más vendido de ProGol?',
    a: 'El modelo Grande (L) de 1.80 × 1.20 m es el más demandado por clubes y academias. Su tamaño equivale aproximadamente al de una portería reglamentaria de fútbol sala, lo que lo hace ideal para entrenamientos específicos de finalización, rondos y ejercicios tácticos en categorías desde infantil hasta amateur adulto. La combinación de tamaño, portabilidad y precio lo convierte en la elección más versátil.',
  },
  {
    q: '¿Qué tamaño de portería necesito para mi academia?',
    a: 'Depende de la categoría y del tipo de ejercicio. Para categorías prebenjamín y benjamín (6–10 años), recomendamos el modelo Pequeña (S) de 1.20 × 0.75 m. Para alevín e infantil (10–14 años), el modelo Mediana (M) de 1.50 × 0.90 m es ideal. Para cadete, juvenil y adulto, el Grande (L) de 1.80 × 1.20 m cubre todas las necesidades. El Extra (XL) de 2.00 × 1.00 m es específico para entrenamientos de porteros y ejercicios que requieren amplitud horizontal.',
  },
  {
    q: '¿Puedo usar el modelo L para entrenamientos de porteros?',
    a: 'El modelo Grande (L) es adecuado para entrenamientos generales de porteros en categorías inferiores. Sin embargo, para preparadores de porteros profesionales que buscan trabajar con más amplitud y variedad de ángulos de disparo, recomendamos el modelo Extra (XL) de 2.00 × 1.00 m, que ofrece mayor apertura horizontal, ideal para ejercicios de estirada, salida y saque.',
  },
  {
    q: '¿Cuánto cuesta el envío de las porterías?',
    a: 'Los gastos de envío dependen del número de unidades, el modelo seleccionado y el destino. Para pedidos dentro de España peninsular, ofrecemos envío rápido a través de agencia de transporte certificada. Para Canarias, Baleares, Ceuta, Melilla y Europa, consulta el presupuesto personalizado. Los pedidos por volumen (a partir de 4 unidades) incluyen condiciones especiales de transporte.',
  },
  {
    q: '¿Los precios incluyen IVA?',
    a: 'Los precios indicados en la web (325€, 350€, 375€) son precios sin IVA para facilitar la comparación entre particulares y empresas. Para pedidos de clubes, academias y asociaciones deportivas con número de IVA, podemos emitir factura con el tipo de IVA correspondiente. Consulta las condiciones fiscales en tu solicitud de presupuesto.',
  },
  {
    q: '¿Ofrecéis garantía en las porterías?',
    a: 'Sí. Todas las porterías ProGol incluyen garantía de fabricación de 2 años contra defectos de material y fabricación, de acuerdo con la normativa europea de garantía de productos. La garantía cubre deformaciones estructurales, fallos en las uniones y defectos en la red. No cubre daños por uso incorrecto o accidentes.',
  },
  {
    q: '¿Puedo comprar porterías de diferentes tamaños en el mismo pedido?',
    a: 'Por supuesto. Muchos clubes y academias realizan pedidos mixtos que combinan, por ejemplo, 4 unidades Grandes (L) para entrenamientos de finalización y 2 unidades Extra (XL) para preparación de porteros. Podemos preparar un presupuesto personalizado para cualquier combinación de modelos y cantidades.',
  },
];

export default function Modelos() {
  return (
    <>
      {/* Page header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Modelos y Precios</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            Encuentra tu modelo<br /><span className="gold">ProGol.</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            Cuatro tamaños diseñados para cada etapa del desarrollo deportivo, tipo de ejercicio y nivel de
            competición. Todos comparten el mismo marco de aluminio aeroespacial 50mm, la misma red de malla
            reforzada y el mismo sistema de montaje instantáneo sin herramientas.
          </p>
        </div>
      </div>

      {/* Guía de elección */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <motion.div style={{ maxWidth: 780, margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">Guía de elección</span></div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>¿Qué modelo es<br /><span className="gold">el más adecuado?</span></h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
              La elección del tamaño correcto de portería es una decisión táctica que afecta directamente
              a la calidad del entrenamiento. Una portería demasiado grande para una categoría infantil
              reduce la dificultad del disparo y limita los beneficios de precisión. Una portería demasiado
              pequeña para ejercicios adultos puede frustrar el desarrollo técnico.
            </p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
              ProGol ofrece <strong>cuatro tamaños</strong> pensados específicamente para cubrir todo el espectro
              del fútbol formativo y de competición. La siguiente guía te ayudará a encontrar el modelo ideal
              según la edad, el nivel y el tipo de ejercicio que practiques habitualmente.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 40 }}>
              {[
                { model: 'Pequeña (S)', dims: '1.20 × 0.75 m', price: '325€', best: 'Prebenjamín y Benjamín (6–10 años). Fútbol sala y fútbol 5. Entrenamiento de pase y precisión en espacios reducidos.', color: '#f8f8f8' },
                { model: 'Mediana (M)', dims: '1.50 × 0.90 m', price: '350€', best: 'Alevín e Infantil (10–14 años). Ejercicios de finalización y tiro. Rondos de presión y transición.', color: '#f8f8f8' },
                { model: 'Grande (L)',  dims: '1.80 × 1.20 m', price: '375€', best: 'Cadete, Juvenil y Amateur adulto. Tamaño recomendado para la mayoría de academias y clubes de competición.', color: '#111' },
                { model: 'Extra (XL)', dims: '2.00 × 1.00 m', price: '375€', best: 'Preparadores de porteros y ejercicios de amplitud. Estiradas, salidas y saques de portero.', color: '#f8f8f8' },
              ].map((m, i) => (
                <motion.div key={i} style={{ padding: '28px', background: m.color, border: m.color === '#111' ? '2px solid #c9a84c' : '1px solid #eee' }}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 9, fontWeight: 900, color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>{m.dims} · {m.price}</p>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: m.color === '#111' ? '#fff' : '#111', marginBottom: 12 }}>{m.model}</h3>
                  <p style={{ fontSize: 13, color: m.color === '#111' ? '#888' : '#666', lineHeight: 1.7, fontWeight: 500 }}>{m.best}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Models />

      {/* Personalización */}
      <section style={{ background: '#f8f8f8', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">Personalización</span></div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>Tu logo,<br /><span className="gold">tu portería.</span></h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                ProGol ofrece la posibilidad de personalizar la red con el <strong>escudo o logo de tu club</strong>.
                Esta opción es especialmente valorada por academias y clubes que quieren reforzar la identidad
                de marca durante los entrenamientos y en fotos y vídeos para redes sociales.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 28 }}>
                Además del logo en la red, las porterías ProGol están disponibles en <strong>varios colores de marco</strong>,
                lo que permite coordinar con los colores corporativos del club. Consulta con nuestro equipo
                las opciones de personalización disponibles para tu pedido.
              </p>
              <Link to="/contacto" className="btn-dark">Solicitar personalización <ArrowRight size={13} /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/Imagenes/ProGol Sports Roja perfil.png" alt="Portería ProGol personalizada en color rojo — vista de perfil"
                style={{ width: '100%', height: 380, objectFit: 'cover', objectPosition: 'center' }} />
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} schemaId="modelos" />
      <Contact />

      <div style={{ background: '#fff', padding: '64px 0', textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
        <div className="container">
          <p style={{ color: '#aaa', fontFamily: 'Orbitron, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>¿Tienes dudas sobre el tamaño?</p>
          <Link to="/contacto" className="btn-dark">Solicitar asesoramiento gratuito <ArrowRight size={13} /></Link>
        </div>
      </div>
    </>
  );
}
