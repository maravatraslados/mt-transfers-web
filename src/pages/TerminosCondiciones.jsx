import { useEffect } from "react"
import "../App.css"

function TerminosCondiciones() {
  useEffect(() => {
    const title = "Términos y Condiciones | MT Tours & Transfers"
    const description = "Términos y condiciones de contratación de transfers, excursiones y experiencias turísticas de MT Tours & Transfers en Catamarca."
    const canonicalUrl = "https://mttransfers.com/terminos-y-condiciones"

    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }
    meta.content = description

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [])

  return (
    <div className="site">
      <style>{`
        .legal-page {
          background: #f6f7f9;
          min-height: calc(100vh - 84px);
          padding: 64px 20px 80px;
        }
        .legal-content {
          width: min(920px, 100%);
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid #e7e7e7;
          border-radius: 20px;
          padding: 52px 58px;
          box-shadow: 0 12px 36px rgba(0,0,0,.06);
        }
        .legal-content .section-kicker {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          color: #b77b00;
        }
        .legal-content h1 {
          margin: 0 0 10px;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.08;
          color: #111111;
        }
        .legal-content > p:first-of-type {
          margin: 0 0 38px;
          color: #6b6b6b;
          font-size: 14px;
          padding-bottom: 26px;
          border-bottom: 1px solid #ececec;
        }
        .legal-content h2 {
          margin: 32px 0 10px;
          font-size: 21px;
          line-height: 1.3;
          color: #171717;
        }
        .legal-content p {
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
          color: #4b4b4b;
        }
        .legal-content a { color: #8a5c00; font-weight: 700; }
        .legal-back {
          margin-top: 44px;
          padding-top: 26px;
          border-top: 1px solid #ececec;
        }
        .legal-back a {
          display: inline-flex;
          text-decoration: none;
          background: #111111;
          color: #ffffff;
          padding: 13px 20px;
          border-radius: 10px;
        }
        @media (max-width: 700px) {
          .legal-page { padding: 28px 14px 56px; }
          .legal-content { padding: 30px 22px; border-radius: 14px; }
          .legal-content h2 { font-size: 19px; margin-top: 26px; }
          .legal-content p { font-size: 15px; line-height: 1.68; }
        }
      `}</style>
      <header className="header">
        <a href="/" className="logo">
          <img src="/favicon.png" alt="MT Tours & Transfers" className="logo-mark" style={{ objectFit: "contain", padding: "0" }} />
          <div><strong>TOURS & TRANSFERS</strong><small>Catamarca, Argentina</small></div>
        </a>
        <a className="whatsapp-button" href="https://wa.me/5493834696065" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </header>

      <main className="legal-page">
        <section className="legal-content">
          <span className="section-kicker">INFORMACIÓN LEGAL</span>
          <h1>Términos y Condiciones</h1>
          <p><strong>Última actualización: septiembre de 2026.</strong></p>

          <h2>1. Alcance</h2>
          <p>Estos términos regulan las consultas, reservas y contrataciones realizadas con MT Tours & Transfers respecto de transfers, traslados privados, excursiones, recorridos turísticos y experiencias ofrecidas o comercializadas a través de nuestros canales.</p>

          <h2>2. Información y cotizaciones</h2>
          <p>Las descripciones, itinerarios, duraciones, distancias y horarios publicados son informativos y pueden sufrir ajustes razonables por condiciones operativas, climáticas, viales, de seguridad o por disposiciones de autoridades. Una cotización queda sujeta a disponibilidad hasta que la reserva sea confirmada por MT Tours & Transfers.</p>

          <h2>3. Precios</h2>
          <p>Los precios publicados corresponden a las condiciones indicadas en cada servicio y pueden modificarse. Antes de confirmar una contratación se informará al pasajero el precio aplicable, qué incluye y, cuando corresponda, qué conceptos no están incluidos. Una modificación posterior de precios no altera una reserva ya confirmada salvo que exista un cambio solicitado por el cliente.</p>

          <h2>4. Reservas y pagos</h2>
          <p>Una reserva se considera confirmada cuando MT Tours & Transfers lo comunica expresamente y se cumplen las condiciones de pago informadas para el servicio. Cuando se solicite una seña o pago anticipado, la disponibilidad no quedará garantizada hasta su acreditación y confirmación.</p>

          <h2>5. Cancelaciones, cambios y devoluciones</h2>
          <p>Las condiciones de cancelación, reprogramación y devolución pueden variar según el tipo de servicio y el prestador involucrado. Las condiciones específicas serán informadas al momento de reservar. Si el pasajero solicita cambios de fecha, horario, recorrido o cantidad de personas, estos estarán sujetos a disponibilidad y podrán generar diferencias de tarifa.</p>

          <h2>6. Condiciones climáticas y de los caminos</h2>
          <p>Catamarca posee destinos de montaña, Puna y alta cordillera donde el clima y el estado de los caminos pueden cambiar rápidamente. Por razones de seguridad, un recorrido puede modificarse, demorarse, reprogramarse o cancelarse cuando las condiciones no permitan realizarlo de manera adecuada. La seguridad de pasajeros, conductores y guías tendrá prioridad sobre el cumplimiento exacto del itinerario previsto.</p>

          <h2>7. Altura y condiciones personales</h2>
          <p>Algunas experiencias alcanzan grandes altitudes y pueden implicar caminos de montaña, largas distancias o condiciones ambientales exigentes. El pasajero debe informar antes de contratar cualquier circunstancia relevante que pueda afectar su participación y consultar a un profesional de la salud cuando tenga dudas sobre su aptitud para realizar actividades en altura. La información turística publicada no reemplaza asesoramiento médico.</p>

          <h2>8. Equipaje y pertenencias</h2>
          <p>El pasajero es responsable de sus documentos, dinero, dispositivos y demás pertenencias personales. Para transfers con equipaje especial, voluminoso o en cantidades fuera de lo habitual, deberá informarlo previamente para verificar la capacidad del vehículo.</p>

          <h2>9. Puntualidad y datos de traslado</h2>
          <p>El pasajero debe proporcionar correctamente horarios, vuelos, alojamientos, puntos de encuentro y demás datos necesarios. En servicios vinculados con vuelos u horarios específicos, cualquier cambio conocido debe comunicarse con la mayor anticipación posible.</p>

          <h2>10. Prestadores locales asociados</h2>
          <p>Algunas experiencias publicadas por MT Tours & Transfers son comercializadas y coordinadas por nosotros, pero ejecutadas total o parcialmente por prestadores locales asociados especializados. Cuando corresponda, esta situación se informará en la experiencia o durante el proceso de contratación. Las condiciones operativas particulares del prestador también podrán resultar aplicables al servicio.</p>

          <h2>11. Itinerarios y atractivos</h2>
          <p>El acceso a determinados atractivos puede depender de horarios, reservas previas, cupos, permisos, estado de rutas o decisiones de organismos y administradores externos. Cuando un atractivo no pueda visitarse por causas ajenas a la operación, se procurará informar al pasajero y, cuando sea posible, adaptar el recorrido.</p>

          <h2>12. Conducta del pasajero</h2>
          <p>Los pasajeros deberán respetar las indicaciones de seguridad del conductor, guía o prestador, cuidar los espacios naturales y culturales visitados y mantener una conducta que no ponga en riesgo al grupo, al personal, al vehículo ni a terceros.</p>

          <h2>13. Menores de edad</h2>
          <p>Los menores deberán viajar acompañados por un adulto responsable y cumplir los requisitos de documentación y seguridad que correspondan al servicio y a la normativa aplicable.</p>

          <h2>14. Contenido del sitio</h2>
          <p>Los textos, fotografías, recorridos y demás contenidos del sitio tienen finalidad informativa y comercial. Las imágenes pueden ser ilustrativas y las condiciones naturales de los destinos pueden variar según la época del año.</p>

          <h2>15. Protección de datos</h2>
          <p>El tratamiento de los datos personales se rige por nuestra Política de Privacidad, disponible en este sitio.</p>

          <h2>16. Legislación aplicable</h2>
          <p>Estos términos se interpretarán conforme a la legislación vigente de la República Argentina, incluyendo las normas de defensa del consumidor que resulten aplicables. Ninguna disposición de estos términos pretende limitar derechos que la legislación reconozca al consumidor con carácter irrenunciable.</p>

          <h2>17. Contacto</h2>
          <p>Para consultas sobre una reserva o sobre estos términos, podés comunicarte con MT Tours & Transfers mediante los canales indicados en nuestra página de Contacto.</p>

          <div className="legal-back"><a href="/">← Volver al inicio</a></div>
        </section>
      </main>
    </div>
  )
}

export default TerminosCondiciones
