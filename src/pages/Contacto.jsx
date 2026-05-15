import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

const faqItems = [
  { q: '¿Cuánto tiempo tardan en responder a las solicitudes de presupuesto?', a: 'Respondemos a todas las solicitudes de presupuesto en un plazo máximo de 24 horas laborables. En la mayoría de casos, la respuesta llega en menos de 4 horas. Incluimos en el presupuesto el desglose de precios por modelo, los gastos de envío y las opciones de personalización disponibles.' },
  { q: '¿Cómo se realiza el pago?', a: 'Aceptamos transferencia bancaria, tarjeta de crédito/débito y PayPal. Para pedidos por volumen de clubes o instituciones deportivas, también podemos emitir factura a 30 días. Todos los pagos están protegidos y confirmamos la recepción por email antes de procesar el envío.' },
  { q: '¿Cuánto tarda el envío?', a: 'Los envíos dentro de España peninsular se realizan en 2–4 días laborables a través de agencia de transporte certificada. Para Baleares y Canarias, el plazo es de 5–7 días. Los pedidos internacionales a Europa tienen un plazo de 5–10 días dependiendo del país de destino.' },
  { q: '¿Puedo devolver la portería si no estoy satisfecho?', a: 'Sí. ProGol ofrece un período de devolución de 14 días desde la recepción del pedido, de acuerdo con la normativa europea de ventas a distancia. El producto debe estar en perfectas condiciones y en su embalaje original. Los gastos de devolución corren por cuenta del comprador excepto en casos de defecto de fabricación.' },
  { q: '¿Puedo hacer un pedido para varias instalaciones de mi club?', a: 'Por supuesto. Muchos de nuestros clientes son clubes con múltiples categorías o instalaciones que realizan pedidos consolidados para toda la entidad. Ofrecemos precios especiales para pedidos de 4 o más unidades y podemos organizar el envío a diferentes direcciones dentro del mismo pedido.' },
  { q: '¿Ofrecéis asesoramiento para elegir el modelo correcto?', a: 'Sí. Nuestro equipo está disponible para asesorarte sobre el modelo más adecuado en función de la categoría de edad, el tipo de ejercicio y el número de porterías que necesitas. Puedes plantearnos tu caso concreto en el formulario de contacto o por email y te daremos una recomendación personalizada sin compromiso.' },
];

export default function Contacto() {
  return (
    <>
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)', padding: '140px 0 80px', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line" style={{ background: '#c9a84c' }} />
            <span className="eyebrow-text">Contacto y Presupuesto</span>
          </div>
          <h1 className="section-title" style={{ color: '#111', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 20 }}>
            Lleva ProGol<br /><span className="gold">a tu club.</span>
          </h1>
          <p style={{ color: '#666', fontSize: 16, fontWeight: 500, maxWidth: 560, lineHeight: 1.8 }}>
            Rellena el formulario y te respondemos en menos de 24 horas con tu presupuesto personalizado.
            Descuentos por volumen, personalización con el logo de tu club y envío a toda España y Europa disponibles.
          </p>
        </div>
      </div>

      {/* Por qué contactar */}
      <section style={{ background: '#fff', padding: '72px 0' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Presupuesto sin compromiso<br /><span className="gold">en menos de 24h.</span></h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                Cada club, academia y entrenador tiene unas necesidades diferentes. El número de porterías, los modelos
                más adecuados para cada categoría, las opciones de personalización y las condiciones de envío varían
                según el proyecto. Por eso en ProGol no trabajamos con precios cerrados para grupos: elaboramos
                un presupuesto personalizado para cada solicitud.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500, marginBottom: 20 }}>
                El proceso es simple: rellena el formulario con tu nombre, email, club o academia y una descripción
                básica de lo que necesitas (número de unidades, modelos de interés, si necesitas personalización).
                Nuestro equipo evaluará tu solicitud y te enviará una propuesta detallada en menos de 24 horas.
              </p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 500 }}>
                <strong>No hay mínimos de pedido.</strong> Tanto si necesitas 1 portería como si necesitas 20,
                tratamos cada solicitud con la misma atención y profesionalidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
      <FAQ items={faqItems} schemaId="contacto" />
    </>
  );
}
