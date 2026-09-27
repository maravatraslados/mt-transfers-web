import { useEffect } from "react"
import combiMercedes from "../assets/combi-mercedes-ilustrativa.png"
import minibusIveco from "../assets/minibus-iveco-ilustrativo.png"

const whatsappMessage = encodeURIComponent(
  "Hola, quiero solicitar presupuesto para una combi o minibús en Catamarca."
)

function CombiMinibusCatamarca() {
  useEffect(() => {
    const title = "Combi y Minibús en Catamarca | Traslados para Grupos"
    const description =
      "Combi de 18 o 19 pasajeros y minibús de hasta 22 pasajeros para excursiones, grupos, empresas y eventos en Catamarca. Solicita presupuesto."
    const canonicalUrl = "https://mttransfers.com/combi-minibus-catamarca"

    document.title = title

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement("meta")
      metaDescription.name = "description"
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = description

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Combi y minibús para grupos en Catamarca",
      serviceType: "Traslados turísticos y excursiones para grupos",
      description,
      provider: {
        "@type": "TravelAgency",
        name: "MT Tours & Transfers",
        url: "https://mttransfers.com/",
        telephone: "+54 9 383 469-6065",
      },
      areaServed: ["Catamarca", "La Rioja", "Noroeste Argentino"],
      url: canonicalUrl,
    }

    let structuredDataScript = document.querySelector(
      'script[data-page="combi-minibus-catamarca"]'
    )
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script")
      structuredDataScript.type = "application/ld+json"
      structuredDataScript.dataset.page = "combi-minibus-catamarca"
      document.head.appendChild(structuredDataScript)
    }
    structuredDataScript.textContent = JSON.stringify(structuredData)

    return () => {
      structuredDataScript?.remove()
    }
  }, [])

  return (
    <main className="group-transport-page">
      <header className="group-transport-header">
        <a href="/" className="group-transport-logo">MT TOURS & TRANSFERS</a>
        <nav>
          <a href="/">Inicio</a>
          <a href="/traslados-catamarca">Traslados</a>
          <a href="/contacto">Contacto</a>
        </nav>
        <a
          href={`https://wa.me/5493834696065?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group-transport-header-cta"
        >
          Solicitar presupuesto
        </a>
      </header>

      <section className="group-transport-hero">
      <img src={combiMercedes} alt="" className="group-transport-hero-image hero-image-left" />
<img src={minibusIveco} alt="" className="group-transport-hero-image hero-image-right" />
        <div className="group-transport-hero-content">
          <span>TRANSPORTE PARA GRUPOS EN CATAMARCA</span>
          <h1>Combi y minibús para excursiones y traslados en Catamarca</h1>
          <p>
            Organizamos la movilidad de grupos, empresas, agencias y pasajeros
            que necesitan viajar juntos con chofer y coordinación previa.
          </p>
          <div className="group-transport-actions">
            <a
              href={`https://wa.me/5493834696065?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir presupuesto
            </a>
            <a href="#vehiculos">Ver vehículos</a>
          </div>
        </div>
      </section>

      <section className="group-transport-intro">
        <div>
          <span className="group-transport-kicker">UNA SOLUCIÓN PARA CADA GRUPO</span>
          <h2>Viajá con tu grupo sin dividirlo en varios autos</h2>
          <p>
            Coordinamos combis y minibuses para excursiones de un día,
            transfers desde el aeropuerto, hoteles, eventos, empresas y
            recorridos dentro de Catamarca, La Rioja y otros destinos del NOA.
          </p>
          <p>
            La disponibilidad y el valor se confirman previamente según la
            fecha, el recorrido, la cantidad de pasajeros y el tipo de unidad.
          </p>
        </div>
        <div className="group-transport-stats">
          <strong>18–19</strong><span>pasajeros en combi</span>
          <strong>22</strong><span>pasajeros en minibús</span>
          <strong>10 días</strong><span>anticipación recomendada</span>
        </div>
      </section>

      <section id="vehiculos" className="group-transport-vehicles">
        <div className="group-transport-heading">
          <span className="group-transport-kicker">NUESTRA PROPUESTA</span>
          <h2>Vehículos para grupos y servicios programados</h2>
          <p>
            Elegimos la unidad más conveniente de acuerdo con la cantidad de
            pasajeros, el equipaje y las características del recorrido.
          </p>
        </div>
        <div className="group-transport-vehicle-grid">
          <article>

          <img
  src={combiMercedes}
  alt="Combi Mercedes ilustrativa para grupos en Catamarca"
/>
            <span>01</span>
            <h3>Combi para 18 o 19 pasajeros</h3>
            <p>
              Una alternativa práctica para grupos, excursiones, transfers y
              traslados entre aeropuerto, hoteles y destinos turísticos.
            </p>
          </article>
          <article>

          <img
  src={minibusIveco}
  alt="Minibús Iveco ilustrativo para grupos en Catamarca"
/>
            <span>02</span>
            <h3>Minibús de hasta 22 pasajeros</h3>
            <p>
              Más capacidad para contingentes, empresas, instituciones,
              eventos y grupos que necesitan trasladarse juntos.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Servicio a medida</h3>
            <p>
              Analizamos fecha, recorrido, paradas, equipaje y horarios para
              preparar una propuesta adecuada a cada necesidad.
            </p>
          </article>
        </div>
      </section>

      <section className="group-transport-use-cases">
        <div>
          <span className="group-transport-kicker">¿PARA QUÉ SERVICIOS?</span>
          <h2>Traslados organizados para distintas ocasiones</h2>
        </div>
        <ul>
          <li>Excursiones de un día y circuitos turísticos.</li>
          <li>Transfers desde y hacia el aeropuerto.</li>
          <li>Grupos alojados en hoteles o complejos turísticos.</li>
          <li>Eventos, congresos y celebraciones.</li>
          <li>Traslados corporativos y de personal.</li>
          <li>Servicios para agencias de viajes.</li>
        </ul>
      </section>

      <section className="group-transport-process">
        <div className="group-transport-heading">
          <span className="group-transport-kicker">CÓMO FUNCIONA</span>
          <h2>Solicitá tu presupuesto en tres pasos</h2>
        </div>
        <div className="group-transport-process-grid">
          <article><strong>01</strong><h3>Nos contás tu necesidad</h3><p>Fecha, destino, horarios, pasajeros y equipaje.</p></article>
          <article><strong>02</strong><h3>Revisamos disponibilidad</h3><p>Confirmamos la unidad y organizamos el servicio.</p></article>
          <article><strong>03</strong><h3>Recibís la propuesta</h3><p>Te enviamos el presupuesto y las condiciones de contratación.</p></article>
        </div>
      </section>

      <section className="group-transport-faq">
        <div className="group-transport-heading">
          <span className="group-transport-kicker">PREGUNTAS FRECUENTES</span>
          <h2>Información sobre combis y minibuses en Catamarca</h2>
        </div>
        <div className="group-transport-faq-grid">
          <article><h3>¿Con cuánta anticipación debo reservar?</h3><p>Recomendamos consultar con al menos 10 días de anticipación, especialmente para minibuses y grupos grandes.</p></article>
          <article><h3>¿El servicio incluye chofer?</h3><p>La propuesta se coordina con chofer y se cotiza según el recorrido y los horarios solicitados.</p></article>
          <article><h3>¿Puedo contratar una excursión completa?</h3><p>Sí. Podemos cotizar la movilidad para excursiones y circuitos turísticos de un día o recorridos personalizados.</p></article>
          <article><h3>¿Cómo solicito el precio?</h3><p>Enviá fecha, cantidad de pasajeros, origen, destino, horarios y equipaje para revisar disponibilidad.</p></article>
        </div>
      </section>

      <section className="group-transport-final-cta">
        <span className="group-transport-kicker">MT TOURS & TRANSFERS</span>
        <h2>¿Necesitás una combi o minibús en Catamarca?</h2>
        <p>Contanos qué traslado necesitás y preparamos una propuesta para tu grupo.</p>
        <a
          href={`https://wa.me/5493834696065?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar presupuesto por WhatsApp →
        </a>
      </section>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-mark">MT</span>
              <div>
                <strong>TOURS & TRANSFERS</strong>
                <small>Catamarca, Argentina</small>
              </div>
            </div>
            <p>Descubrí, planificá y viví Catamarca con experiencias y traslados pensados para vos.</p>
          </div>
          <div className="footer-column">
            <h4>Explorá</h4>
            <a href="/excursiones">Excursiones</a>
            <a href="/traslados-catamarca">Transfers</a>
          </div>
          <div className="footer-column">
            <h4>Planificá</h4>
            <a href="/catamarca-1-dia">Catamarca en 1 día</a>
            <a href="/catamarca-2-dias">Catamarca en 2 días</a>
            <a href="/catamarca-3-dias-o-mas">Catamarca en 3 días o más</a>
            <a href="/reservar">Reservar</a>
          </div>
          <div className="footer-column">
            <h4>MT</h4>
            <a href="/guia">Guía de Catamarca</a>
            <a href="/quienes-somos">Quiénes somos</a>
            <a href="/contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MT Tours & Transfers</span>
          <span>Catamarca, Argentina</span>
        </div>
      </footer>
    </main>
  )
}

export default CombiMinibusCatamarca
