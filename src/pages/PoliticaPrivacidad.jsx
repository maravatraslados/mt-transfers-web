import { useEffect } from "react"
import "../App.css"

function PoliticaPrivacidad() {
  useEffect(() => {
    const title = "Política de Privacidad | MT Tours & Transfers"
    const description = "Política de privacidad de MT Tours & Transfers: información sobre el tratamiento y protección de datos personales de usuarios y pasajeros."
    const canonicalUrl = "https://mttransfers.com/politica-de-privacidad"

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
          <h1>Política de Privacidad</h1>
          <p><strong>Última actualización: septiembre de 2026.</strong></p>

          <h2>1. Alcance</h2>
          <p>Esta Política de Privacidad explica cómo MT Tours & Transfers trata la información personal que los usuarios proporcionan al consultar, solicitar información o contratar transfers, excursiones y experiencias turísticas a través de nuestro sitio web, WhatsApp u otros canales de contacto.</p>

          <h2>2. Datos que podemos recibir</h2>
          <p>Podemos recibir datos como nombre y apellido, teléfono, correo electrónico, cantidad de pasajeros, fechas de viaje, lugar de origen o destino del traslado, alojamiento, preferencias de viaje y cualquier otra información que el usuario decida brindar para organizar o cotizar un servicio.</p>

          <h2>3. Para qué utilizamos los datos</h2>
          <p>Utilizamos la información para responder consultas, preparar cotizaciones, coordinar reservas, organizar traslados y excursiones, comunicarnos con los pasajeros antes o durante el servicio, gestionar cambios o cancelaciones y cumplir obligaciones administrativas, contables o legales.</p>

          <h2>4. Prestadores asociados</h2>
          <p>Cuando una experiencia sea realizada por un prestador local asociado, podremos compartir únicamente los datos necesarios para coordinar y prestar el servicio contratado. MT Tours & Transfers procura limitar esa información a lo estrictamente necesario para la operación.</p>

          <h2>5. WhatsApp y servicios de terceros</h2>
          <p>Si el usuario se comunica mediante WhatsApp u otra plataforma externa, el tratamiento de información realizado por esa plataforma también estará sujeto a sus propias políticas y condiciones. Nuestro sitio puede contener enlaces hacia servicios o sitios de terceros.</p>

          <h2>6. Cookies y datos técnicos</h2>
          <p>El sitio puede utilizar cookies o tecnologías similares necesarias para su funcionamiento y, cuando corresponda, herramientas de medición que permitan conocer de forma general cómo se utiliza la web. Más información se encuentra en nuestra Política de Cookies.</p>

          <h2>7. Conservación y seguridad</h2>
          <p>Conservamos los datos durante el tiempo razonablemente necesario para gestionar la relación con el usuario, prestar los servicios, atender reclamos y cumplir obligaciones legales. Adoptamos medidas razonables para proteger la información, aunque ningún sistema conectado a Internet puede garantizar seguridad absoluta.</p>

          <h2>8. Derechos sobre los datos personales</h2>
          <p>Los titulares pueden solicitar acceso, actualización, rectificación o supresión de sus datos personales cuando corresponda conforme a la normativa argentina aplicable, incluida la Ley 25.326 de Protección de los Datos Personales y sus normas complementarias.</p>

          <h2>9. Contacto</h2>
          <p>Para consultas relacionadas con privacidad o datos personales, el usuario puede comunicarse con MT Tours & Transfers a través de los medios publicados en nuestra página de Contacto.</p>

          <h2>10. Cambios en esta política</h2>
          <p>Podremos actualizar esta Política de Privacidad cuando cambien nuestros servicios, herramientas o requisitos legales. La versión vigente será la publicada en esta página.</p>

          <div className="legal-back"><a href="/">← Volver al inicio</a></div>
        </section>
      </main>
    </div>
  )
}

export default PoliticaPrivacidad
