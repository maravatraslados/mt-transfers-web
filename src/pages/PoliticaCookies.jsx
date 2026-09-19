import { useEffect } from "react"
import "../App.css"

function PoliticaCookies() {
  useEffect(() => {
    const title = "Política de Cookies | MT Tours & Transfers"
    const description = "Política de cookies de MT Tours & Transfers y explicación sobre el uso de cookies y tecnologías similares en mttransfers.com."
    const canonicalUrl = "https://mttransfers.com/politica-de-cookies"

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
          <h1>Política de Cookies</h1>
          <p><strong>Última actualización: septiembre de 2026.</strong></p>

          <h2>1. Qué son las cookies</h2>
          <p>Las cookies son pequeños archivos o identificadores que un sitio web puede almacenar o consultar en el dispositivo del usuario para permitir determinadas funciones, recordar preferencias u obtener información técnica sobre el uso del sitio.</p>

          <h2>2. Uso de cookies en MT Tours & Transfers</h2>
          <p>MT Tours & Transfers puede utilizar cookies y tecnologías similares necesarias para el funcionamiento y seguridad de mttransfers.com. También podremos incorporar herramientas de medición o análisis para comprender el rendimiento del sitio y mejorar la experiencia de navegación.</p>

          <h2>3. Tipos de cookies</h2>
          <p><strong>Cookies necesarias:</strong> permiten funciones esenciales y el correcto funcionamiento técnico del sitio.</p>
          <p><strong>Cookies de preferencias:</strong> pueden recordar determinadas elecciones realizadas por el usuario.</p>
          <p><strong>Cookies de medición o analítica:</strong> cuando se utilicen, permiten obtener estadísticas generales sobre visitas, páginas consultadas y funcionamiento del sitio.</p>
          <p><strong>Cookies de terceros:</strong> determinados servicios externos enlazados o integrados en la web pueden establecer sus propias cookies conforme a sus políticas.</p>

          <h2>4. Enlaces y plataformas externas</h2>
          <p>El sitio contiene enlaces a servicios externos, como WhatsApp. Al acceder a ellos, el usuario abandona nuestro dominio y esos servicios pueden utilizar sus propias tecnologías de seguimiento o cookies.</p>

          <h2>5. Cómo administrar las cookies</h2>
          <p>El usuario puede configurar su navegador para bloquear, eliminar o limitar cookies. La desactivación de determinadas cookies necesarias puede afectar algunas funciones del sitio.</p>

          <h2>6. Herramientas futuras</h2>
          <p>Si incorporamos nuevas herramientas de analítica, publicidad, mapas, videos u otros servicios que requieran cookies adicionales, esta política podrá actualizarse para reflejar su utilización y, cuando corresponda, se implementarán los mecanismos de información o consentimiento aplicables.</p>

          <h2>7. Cambios en esta política</h2>
          <p>MT Tours & Transfers podrá modificar esta Política de Cookies para adaptarla a cambios técnicos, funcionales o normativos. La versión vigente será siempre la publicada en esta página.</p>

          <h2>8. Contacto</h2>
          <p>Para consultas relacionadas con el uso de cookies o privacidad, podés comunicarte con MT Tours & Transfers mediante los canales disponibles en nuestra página de Contacto.</p>

          <div className="legal-back"><a href="/">← Volver al inicio</a></div>
        </section>
      </main>
    </div>
  )
}

export default PoliticaCookies
