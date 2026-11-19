import { useEffect } from "react"
import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { wa, excursiones } from "../laRiojaData"

const PATH = "/traslados-la-rioja"
const title = "Servicio de Traslado para Empresas en La Rioja y Aeropuerto | MT Transfers"
const description =
  "Servicio de traslado para empresas en La Rioja: transfer desde el Aeropuerto de La Rioja, traslado de personal, ejecutivos y viajes a Catamarca, Fiambalá y el NOA. Consultá el precio."

const consultar = (texto) =>
  wa(`Hola, quiero consultar el precio de: ${texto}.`)

const WA_GENERAL = wa("Hola, quisiera consultar el precio de un traslado en La Rioja.")
const WA_EMPRESA = wa(
  "Hola, quisiera consultar por un servicio de traslado para una empresa en La Rioja.",
)
const WA_AEROPUERTO = wa(
  "Hola, quiero consultar el precio de un transfer desde/hacia el Aeropuerto de La Rioja.",
)

const transfers = [
  ["Aeropuerto de La Rioja ↔ hotel, empresa o domicilio en La Rioja capital", "Recepción al aterrizar"],
  ["Aeropuerto de La Rioja → Catamarca", "Directo a tu hotel o empresa"],
  ["Aeropuerto de La Rioja → Fiambalá", "Termas, viñedos y Seismiles"],
  ["Catamarca o Fiambalá → Aeropuerto de La Rioja", "Con tiempo para tu vuelo"],
  ["La Rioja → Chilecito", "Cuesta de Miranda y cablecarril"],
  ["La Rioja → Talampaya y Valle de la Luna", "Te esperamos durante la visita"],
]

const empresas = [
  ["Traslado de personal", "Coordinamos servicios para empleados, técnicos y equipos de trabajo, tanto para necesidades puntuales como para traslados programados, según horarios y puntos de encuentro."],
  ["Ejecutivos y profesionales", "Traslados para directivos, profesionales y representantes entre aeropuerto, hoteles, empresas, reuniones y organismos de La Rioja."],
  ["Recepción en aeropuerto", "Coordinamos la llegada y salida de personal, clientes, proveedores e invitados desde el Aeropuerto de La Rioja, según el horario del vuelo."],
  ["Servicios recurrentes", "Si tu empresa necesita movilidad habitual podemos organizar servicios diarios, semanales, mensuales o según una planificación acordada."],
  ["Facturación y cuenta corriente", "Contamos con modalidades administrativas para clientes corporativos, que facilitan la contratación, la facturación y el seguimiento de los servicios."],
  ["Viajes a Catamarca y el NOA", "Organizamos traslados desde La Rioja hacia Catamarca, Fiambalá, Chilecito, Tucumán y otros destinos regionales."],
]

const servicios = [
  ["Traslados ejecutivos", "Servicios para profesionales, empresarios y pasajeros que necesitan movilidad personalizada."],
  ["Chofer con vehículo", "Vehículo con conductor para reuniones, gestiones, visitas o jornadas con múltiples paradas."],
  ["Aeropuerto ↔ Hotel", "Recepción y traslado entre el aeropuerto, alojamientos, domicilios y empresas."],
  ["Traslados corporativos", "Servicios coordinados para empresas, organismos, agencias y organizaciones."],
  ["Traslados interurbanos", "Viajes hacia localidades del interior de La Rioja según disponibilidad y planificación previa."],
  ["Interprovinciales", "Conexiones desde La Rioja hacia Catamarca, Fiambalá, Tucumán y otros destinos."],
]

const porque = [
  ["Puntualidad", "Coordinación previa de cada servicio para reducir esperas y cumplir los horarios previstos."],
  ["Atención personalizada", "Cada traslado se organiza según las características del viaje y las necesidades del cliente."],
  ["Coordinación permanente", "Comunicación antes y durante el servicio para facilitar la logística del pasajero o de la empresa."],
  ["Cobertura regional", "Servicios en La Rioja, Catamarca y distintos puntos del Noroeste Argentino."],
]

const pasos = [
  ["01", "Nos enviás los datos", "Fecha, horario, origen, destino y cantidad de pasajeros."],
  ["02", "Te pasamos el precio", "Revisamos disponibilidad y te confirmamos el valor del servicio."],
  ["03", "Reservás", "Con una seña del 10 %. Aceptamos todos los medios de pago y la cancelación es gratuita."],
  ["04", "Realizamos el traslado", "El conductor se presenta en el punto coordinado para iniciar el recorrido."],
]

const faq = [
  [
    "¿Ofrecen servicio de traslado para empresas en La Rioja?",
    "Sí. Coordinamos traslado de personal, ejecutivos, visitantes y viajes programados, con servicios puntuales o recurrentes.",
  ],
  [
    "¿Realizan transfer desde el Aeropuerto de La Rioja?",
    "Sí. Te esperamos en el aeropuerto y te llevamos a hoteles, empresas o domicilios de La Rioja capital, o directo a Catamarca, Fiambalá y otros destinos.",
  ],
  [
    "¿Cuánto cuesta el traslado?",
    "El precio depende del recorrido, la fecha y la cantidad de pasajeros. Escribinos por WhatsApp y te pasamos el valor.",
  ],
  [
    "¿Cuánto tarda el traslado del aeropuerto al centro de La Rioja?",
    "El aeropuerto está a pocos kilómetros de la ciudad: son unos 15 a 20 minutos hasta el centro y los hoteles.",
  ],
  [
    "¿Hacen traslados de La Rioja a Catamarca y Fiambalá?",
    "Sí. Coordinamos el viaje en los dos sentidos. De La Rioja a Catamarca son unos 150 km, aproximadamente 2 horas.",
  ],
  [
    "¿Qué medios de pago aceptan y piden seña?",
    "Aceptamos todos los medios de pago. Para reservar se abona una seña del 10 %.",
  ],
  [
    "¿Se puede cancelar una reserva?",
    "Sí. La cancelación es gratuita.",
  ],
  [
    "¿Puedo llevar equipaje y niños?",
    "Sí, se puede viajar con equipaje. No contamos con sillas para niños, por lo que conviene llevar la propia si viajás con menores.",
  ],
  [
    "¿Facturan a empresas?",
    "Sí. Contamos con modalidades administrativas para clientes corporativos, con facturación y cuenta corriente.",
  ],
  [
    "¿Puedo contratar un vehículo con chofer por varias horas?",
    "Sí. Podemos organizar servicios para jornadas laborales, reuniones, visitas o recorridos con diferentes paradas.",
  ],
  [
    "¿Cómo solicito el precio?",
    "Enviando fecha, horario, origen, destino, cantidad de pasajeros y cualquier necesidad particular del servicio.",
  ],
]

function TrasladosLaRioja() {
  // Título, descripción y canonical se fijan al renderizar (no en useEffect):
  // el prerenderizado no ejecuta efectos y, si no, la página sale con el título de la home.
  setSeo({ title, description, path: PATH })

  useEffect(() => {
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Servicio de traslado para empresas en La Rioja",
        serviceType: "Traslados corporativos, aeropuerto e interprovinciales",
        description,
        provider: {
          "@type": "TravelAgency",
          name: "MT Tours & Transfers",
          url: "https://mttransfers.com/",
          telephone: "+54 9 383 469-6065",
        },
        areaServed: ["La Rioja", "Catamarca", "Fiambalá", "Chilecito", "Noroeste Argentino"],
        url: "https://mttransfers.com" + PATH,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ]

    let script = document.querySelector('script[data-page="traslados-la-rioja"]')
    if (!script) {
      script = document.createElement("script")
      script.type = "application/ld+json"
      script.dataset.page = "traslados-la-rioja"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    return () => {
      script?.remove()
    }
  }, [])

  return (
    <main className="traslados-page">
      <SiteHeader />

      {/* HERO */}
      <section
        className="traslados-hero"
        style={{ background: "linear-gradient(135deg, #111111 0%, #2b2110 60%, #5a4308 100%)", minHeight: "560px" }}
      >
        <div className="traslados-hero-overlay"></div>

        <div className="traslados-hero-content">
          <span className="traslados-kicker">TRASLADOS EN LA RIOJA</span>

          <h1>Servicio de traslado para empresas en La Rioja</h1>

          <p>
            Soluciones de movilidad para empresas, profesionales, agencias y pasajeros que
            necesitan trasladarse de manera organizada, puntual y segura en La Rioja, Catamarca y
            el NOA, con transfer desde el Aeropuerto de La Rioja.
          </p>

          <div className="traslados-hero-actions">
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
              Consultar precio
            </a>

            <a href="#transfers">Ver traslados</a>
          </div>
        </div>
      </section>

      {/* TRANSFERS */}
      <section id="transfers" className="transfer-rates-section" style={{ padding: "80px 7%", background: "#fff", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto 58px", textAlign: "center" }}>
          <span style={{ display: "block", marginBottom: "18px", color: "#f4b400", fontSize: "1rem", fontWeight: 800, letterSpacing: ".14em" }}>TRASLADOS Y LOGÍSTICA</span>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>Transfers desde y hacia La Rioja, Catamarca y Fiambalá</h2>
          <p style={{ margin: "18px auto 0" }}>
            Servicios de traslado para facilitar tu llegada, conexión y movilidad durante el
            viaje. Todos los servicios se coordinan previamente. Consultá el precio de tu
            recorrido por WhatsApp.
          </p>
        </div>
        <style>{`@media (max-width: 760px) { .transfer-rates-grid { grid-template-columns: 1fr !important; } }`}</style>
        <div className="transfer-rates-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px" }}>
          {transfers.map(([name, note]) => (
            <article key={name} style={{ padding: "28px", background: "#111", color: "#fff", borderRadius: "6px", minHeight: "190px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginTop: 0 }}>{name}</h3>
              <p style={{ color: "rgba(255,255,255,.7)" }}>{note}</p>
              <a href={consultar(name)} target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", paddingTop: "18px", color: "#f4b400", textDecoration: "none", fontWeight: 800 }}>
                Consultar precio →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="traslados-intro">
        <div className="traslados-intro-main">
          <span>SERVICIO PROFESIONAL DE TRASLADOS</span>

          <h2>Una solución de movilidad para cada necesidad</h2>

          <p>
            Coordinamos traslados desde y hacia La Rioja capital, el Aeropuerto Capitán Vicente
            Almandos Almonacid, hoteles, empresas, organismos, localidades del interior y
            destinos interprovinciales.
          </p>

          <p>
            Cada servicio se organiza previamente teniendo en cuenta horarios, punto de origen,
            destino y necesidades particulares del pasajero o de la empresa contratante.
          </p>
        </div>

        <div className="traslados-intro-data">
          <div>
            <strong>24/7</strong>
            <span>Coordinación de servicios</span>
          </div>

          <div>
            <strong>NOA</strong>
            <span>Cobertura regional</span>
          </div>

          <div>
            <strong>EMPRESAS</strong>
            <span>Servicios programados</span>
          </div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section id="empresas" className="traslados-business">
        <div className="traslados-section-heading">
          <span>SOLUCIONES PARA EMPRESAS</span>

          <h2>Traslados corporativos y de personal en La Rioja</h2>

          <p>
            Ayudamos a empresas, organismos, agencias y profesionales a resolver la movilidad de
            su personal y visitantes mediante servicios previamente coordinados, con atención
            personalizada y cobertura en La Rioja, Catamarca y otros destinos del NOA.
          </p>
        </div>

        <div className="traslados-business-grid">
          {empresas.map(([h, p], i) => (
            <article key={h}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>

        <div className="traslados-business-bottom">
          <div>
            <span>¿TU EMPRESA NECESITA TRASLADOS FRECUENTES?</span>

            <h3>Podemos organizar una modalidad de trabajo adaptada a tu operación</h3>

            <p>
              Contanos qué tipo de traslados realizan, frecuencia, destinos y cantidad aproximada
              de pasajeros. Podemos analizar la necesidad y preparar una propuesta para la
              empresa.
            </p>
          </div>

          <a href={WA_EMPRESA} target="_blank" rel="noopener noreferrer">
            Consultar precio para empresa →
          </a>
        </div>
      </section>

      {/* EXPERIENCIA Y CONFIANZA */}
      <section className="traslados-trust">
        <div className="traslados-trust-heading">
          <span>EXPERIENCIA QUE RESPALDA CADA TRASLADO</span>

          <h2>Más de 15 años coordinando traslados y logística de pasajeros</h2>

          <p>
            Nuestra experiencia incluye servicios para empresas, organismos, profesionales y
            pasajeros que necesitan algo más que un vehículo: necesitan coordinación,
            puntualidad y una respuesta confiable.
          </p>
        </div>

        <div className="traslados-trust-grid">
          <article>
            <strong>+15</strong>
            <span>AÑOS DE EXPERIENCIA</span>
            <p>Experiencia desarrollada en servicios de traslados y coordinación logística de pasajeros.</p>
          </article>

          <article>
            <strong>24/7</strong>
            <span>COORDINACIÓN</span>
            <p>Capacidad para organizar servicios según vuelos, horarios de trabajo, reuniones y necesidades previamente programadas.</p>
          </article>

          <article>
            <strong>3</strong>
            <span>PERFILES DE SERVICIO</span>
            <p>Empresas y organizaciones, agencias de viajes y pasajeros particulares con diferentes necesidades de movilidad.</p>
          </article>

          <article>
            <strong>NOA</strong>
            <span>COBERTURA REGIONAL</span>
            <p>Servicios en La Rioja y conexiones hacia Catamarca, localidades del interior y otros destinos del Noroeste Argentino.</p>
          </article>
        </div>
      </section>

      {/* AEROPUERTO */}
      <section className="traslados-airport">
        <div className="traslados-airport-content">
          <span>TRANSFER AEROPUERTO LA RIOJA</span>

          <h2>Aeropuerto de La Rioja ↔ Hotel, empresa o domicilio</h2>

          <p>
            Coordinamos traslados privados desde y hacia el Aeropuerto Capitán Vicente Almandos
            Almonacid para pasajeros particulares, turistas, profesionales y empresas.
          </p>

          <p>
            Organizamos el servicio según el horario del vuelo para que tengas un chofer
            esperándote al aterrizar. También podés viajar directo a Catamarca o Fiambalá.
          </p>

          <ul>
            <li>Recepción en aeropuerto</li>
            <li>Traslado puerta a puerta</li>
            <li>Coordinación según tu vuelo</li>
            <li>Traslado hacia hoteles y empresas</li>
            <li>Servicios de llegada y salida</li>
          </ul>

          <a href={WA_AEROPUERTO} target="_blank" rel="noopener noreferrer">
            Consultar precio del transfer →
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="traslados-services">
        <div className="traslados-section-heading">
          <span>NUESTROS SERVICIOS</span>

          <h2>Más que un traslado de un punto a otro</h2>

          <p>
            La propuesta está pensada para resolver diferentes necesidades de movilidad dentro y
            fuera de La Rioja.
          </p>
        </div>

        <div className="traslados-services-grid">
          {servicios.map(([h, p]) => (
            <article key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section className="traslados-why">
        <div className="traslados-why-title">
          <span>POR QUÉ MT TRANSFERS</span>

          <h2>Un servicio pensado para que la movilidad no sea un problema</h2>
        </div>

        <div className="traslados-why-grid">
          {porque.map(([h, p], i) => (
            <article key={h}>
              <strong>{String(i + 1).padStart(2, "0")}</strong>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="traslados-process">
        <div className="traslados-section-heading">
          <span>CÓMO CONTRATAR</span>

          <h2>Coordinamos tu traslado en cuatro pasos</h2>
        </div>

        <div className="traslados-process-grid">
          {pasos.map(([n, h, p]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXCURSIONES */}
      <section className="traslados-services">
        <div className="traslados-section-heading">
          <span>APROVECHÁ EL VIAJE</span>

          <h2>Sumá una excursión desde La Rioja</h2>

          <p>
            Si tu equipo o tus pasajeros se quedan unos días, podemos combinar el traslado con un
            paseo privado con chofer.
          </p>
        </div>

        <div className="traslados-services-grid">
          {excursiones.map((e) => (
            <article key={e.slug}>
              <h3>{e.nombre}</h3>
              <p>{e.resumen}</p>
              <p>
                <a href={e.path} style={{ color: "#b07d00", fontWeight: 800, textDecoration: "none" }}>
                  Ver excursión →
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* COBERTURA */}
      <section className="traslados-coverage">
        <div>
          <span>COBERTURA</span>

          <h2>La Rioja, Catamarca y conexiones regionales</h2>

          <p>
            Desde La Rioja coordinamos servicios hacia distintos destinos provinciales y
            regionales, con atención personalizada en cada recorrido.
          </p>
        </div>

        <div className="traslados-coverage-list">
          <span>La Rioja capital</span>
          <span>Aeropuerto de La Rioja</span>
          <span>Chilecito</span>
          <span>Talampaya</span>
          <span>Catamarca</span>
          <span>Fiambalá</span>
        </div>
      </section>

      {/* EMPRESA CTA */}
      <section className="traslados-company-cta">
        <div>
          <span>EMPRESAS Y ORGANIZACIONES</span>

          <h2>¿Necesitás una solución habitual de traslados?</h2>

          <p>
            Si tu empresa requiere servicios frecuentes, podemos analizar recorridos, horarios y
            modalidad de trabajo para organizar una propuesta acorde a la operación.
          </p>
        </div>

        <a href={WA_EMPRESA} target="_blank" rel="noopener noreferrer">
          Consultar precio corporativo →
        </a>
      </section>

      {/* FAQ */}
      <section className="traslados-faq">
        <div className="traslados-section-heading">
          <span>PREGUNTAS FRECUENTES</span>

          <h2>Preguntas sobre nuestros traslados en La Rioja</h2>
        </div>

        <div className="traslados-faq-grid">
          {faq.map(([q, a]) => (
            <article key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="traslados-final">
        <span>MT TOURS & TRANSFERS</span>

        <h2>Contanos qué traslado necesitás</h2>

        <p>Enviá origen, destino, fecha y horario y te pasamos el precio.</p>

        <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer">
          Consultar precio por WhatsApp →
        </a>
      </section>

      <SiteFooter />
    </main>
  )
}

export default TrasladosLaRioja
