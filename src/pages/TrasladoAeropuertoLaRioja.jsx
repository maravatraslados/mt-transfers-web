import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { aeropuerto, aeropuertoACatamarca, wa } from "../laRiojaData"

const WHATSAPP = wa(
  "Hola, quisiera reservar un traslado desde o hacia el Aeropuerto de La Rioja.",
)

const faq = [
  [
    "¿Cuánto cuesta el traslado desde el Aeropuerto de La Rioja?",
    "El precio depende del destino y de la cantidad de pasajeros. Escribinos por WhatsApp con tu vuelo y el lugar de destino y te pasamos el valor.",
  ],
  [
    "¿Pueden buscarme en el aeropuerto y llevarme a Catamarca?",
    `Sí. El traslado entre el Aeropuerto de La Rioja y San Fernando del Valle de Catamarca cuesta ${aeropuertoACatamarca} pesos, con un mínimo de 2 pasajeros.`,
  ],
  [
    "¿Puedo combinar el traslado con una excursión?",
    "Sí. Podés llegar al aeropuerto de La Rioja y salir directo a Chilecito, a la Costa Riojana o a Talampaya. Lo coordinamos en un solo servicio.",
  ],
  [
    "¿Hacen el traslado en los dos sentidos?",
    "Sí. Te buscamos en el aeropuerto y te llevamos al hotel, y también del hotel al aeropuerto antes de tu vuelo.",
  ],
  [
    "¿Cómo reservo?",
    "Escribinos por WhatsApp con la fecha, el horario de tu vuelo y el destino. Respondemos al instante.",
  ],
]

const steps = [
  ["01", "Nos escribís", "Por WhatsApp, con tu fecha, horario de vuelo y dirección o hotel de destino."],
  ["02", "Confirmamos", "Coordinamos el servicio y el precio según tu destino."],
  ["03", "Te esperamos", "Un chofer te espera en el Aeropuerto Capitán Vicente Almandos Almonacid y te lleva a destino."],
]

function TrasladoAeropuertoLaRioja() {
  setSeo({
    title: "Traslado Aeropuerto La Rioja: Transfer al Centro y Hoteles | MT Transfers",
    description:
      "Traslado privado desde y hacia el Aeropuerto de La Rioja. Te esperamos con chofer y te llevamos al hotel, a Catamarca o directo a tu excursión.",
    path: aeropuerto.path,
  })

  return (
    <main className="traslados-page">
      <SiteHeader />

      <section
        className="traslados-hero"
        style={{ background: "linear-gradient(135deg, #111111 0%, #2b2110 60%, #5a4308 100%)", minHeight: "560px" }}
      >
        <div className="traslados-hero-overlay"></div>

        <div className="traslados-hero-content">
          <span className="traslados-kicker">AEROPUERTO DE LA RIOJA</span>

          <h1>Traslado desde y hacia el Aeropuerto de La Rioja</h1>

          <p>
            Transfer privado entre el Aeropuerto Capitán Vicente Almandos Almonacid y hoteles
            o domicilios de La Rioja capital. También te llevamos a Catamarca o directo a tu
            excursión.
          </p>

          <div className="traslados-hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Reservar por WhatsApp
            </a>

            <a href="#preguntas">Preguntas frecuentes</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#fff", color: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto 48px", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Cómo reservar tu traslado
          </h2>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {steps.map(([n, name, text]) => (
            <div key={n} style={{ padding: "28px", background: "#f6f6f6", borderRadius: "6px", border: "1px solid #e4e4e4" }}>
              <strong style={{ color: "#b07d00" }}>{n}</strong>
              <h3 style={{ margin: "8px 0" }}>{name}</h3>
              <p style={{ margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="traslados-faq" id="preguntas">
        <div className="traslados-section-heading">
          <span>PREGUNTAS FRECUENTES</span>

          <h2>Preguntas sobre el traslado al Aeropuerto de La Rioja</h2>
        </div>

        <div className="traslados-faq-grid">
          {faq.map(([pregunta, respuesta]) => (
            <article key={pregunta}>
              <h3>{pregunta}</h3>
              <p>{respuesta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="traslados-final">
        <span>MT TOURS & TRANSFERS</span>

        <h2>Reservá tu traslado al aeropuerto</h2>

        <p>Enviá tu fecha, horario de vuelo y destino y lo coordinamos.</p>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Consultar por WhatsApp →
        </a>
      </section>

      <SiteFooter />
    </main>
  )
}

export default TrasladoAeropuertoLaRioja
