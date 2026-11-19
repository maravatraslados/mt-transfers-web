import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { excursiones, aeropuerto, aeropuertoACatamarca, pesos, wa } from "../laRiojaData"

const WHATSAPP = wa("Hola, quisiera consultar por un traslado o una excursión en La Rioja.")

const benefits = [
  ["Salimos desde La Rioja capital", "Te buscamos donde estés, sin viajar antes a otra ciudad."],
  ["Vehículo privado con chofer", "Solo vos y tu grupo, con horarios a tu medida."],
  ["Respondemos al instante", "Atención inmediata por teléfono, mail y WhatsApp."],
  ["Cuenta corriente", "Para empresas, hoteles y agencias que necesitan facturar."],
]

const steps = [
  ["01", "Nos escribís", "Por WhatsApp, con la fecha, la cantidad de personas y el lugar donde te buscamos."],
  ["02", "Confirmamos", "Coordinamos horario, recorrido y precio del servicio."],
  ["03", "Salimos desde La Rioja", "Un chofer te busca y te acompaña durante todo el recorrido."],
]

const faq = [
  [
    "¿Hacen excursiones saliendo desde La Rioja capital?",
    "Sí. Todas nuestras excursiones en La Rioja salen y vuelven a La Rioja capital: Chilecito y Cuesta de Miranda, la Costa Riojana y Valle de la Luna con Talampaya.",
  ],
  [
    "¿Cuánto cuesta una excursión desde La Rioja?",
    `El precio es por vehículo con chofer. Va desde ${pesos(excursiones[1].precio)} el circuito de la ciudad y la Costa Riojana hasta ${pesos(excursiones[2].precio)} Valle de la Luna y Talampaya.`,
  ],
  [
    "¿Pueden buscarme en el aeropuerto de La Rioja?",
    "Sí. Te esperamos en el aeropuerto con chofer y te llevamos al hotel o directo a tu excursión.",
  ],
  [
    "¿Hacen traslados entre La Rioja y Catamarca?",
    `Sí. El traslado entre el Aeropuerto de La Rioja y San Fernando del Valle de Catamarca cuesta $${aeropuertoACatamarca}, con un mínimo de 2 pasajeros. También coordinamos servicios hacia Tucumán.`,
  ],
  [
    "¿Cómo reservo?",
    "Escribinos por WhatsApp con la fecha, la cantidad de personas y el servicio que te interesa. Te respondemos al instante.",
  ],
]

function LaRioja() {
  setSeo({
    title: "Traslados y Excursiones en La Rioja | MT Tours & Transfers",
    description:
      "Excursiones y traslados privados en La Rioja saliendo desde la capital: Chilecito, Cuesta de Miranda, Costa Riojana, Talampaya y aeropuerto.",
    path: "/la-rioja",
  })

  return (
    <main className="traslados-page">
      <SiteHeader />

      <section
        className="traslados-hero"
        style={{ background: "linear-gradient(135deg, #111111 0%, #2b2110 60%, #5a4308 100%)", minHeight: "620px" }}
      >
        <div className="traslados-hero-overlay"></div>

        <div className="traslados-hero-content">
          <span className="traslados-kicker">LA RIOJA, ARGENTINA</span>

          <h1>Traslados y excursiones en La Rioja</h1>

          <p>
            Salimos desde La Rioja capital. Te llevamos a Chilecito, a la Cuesta de Miranda,
            a la Costa Riojana y a Talampaya, y te buscamos en el aeropuerto con chofer.
          </p>

          <div className="traslados-hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
            </a>

            <a href="#excursiones">Ver excursiones</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#fff", color: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
          {benefits.map(([title, text]) => (
            <div key={title} style={{ padding: "28px", background: "#111", color: "#fff", borderRadius: "6px" }}>
              <strong style={{ display: "block", fontSize: "1.2rem", color: "#f4b400", marginBottom: "8px" }}>{title}</strong>
              <span style={{ color: "rgba(255,255,255,.75)" }}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="excursiones" style={{ padding: "80px 7%", background: "#f6f6f6", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
          <span style={{ display: "block", marginBottom: "14px", color: "#b07d00", fontWeight: 800, letterSpacing: ".14em" }}>EXCURSIONES DESDE LA RIOJA</span>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Tres excursiones privadas desde La Rioja capital
          </h2>
          <p style={{ margin: "18px auto 0" }}>
            El precio es por el servicio completo con vehículo y chofer, no por persona.
          </p>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {excursiones.map((e) => (
            <article key={e.path} style={{ padding: "28px", background: "#fff", border: "1px solid #e4e4e4", borderRadius: "6px", display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#b07d00", fontWeight: 800, fontSize: ".78rem", letterSpacing: ".14em" }}>{e.kicker}</span>
              <h3 style={{ margin: "10px 0" }}>{e.nombre}</h3>
              <p style={{ color: "#5e5e5e" }}>{e.resumen}</p>
              <p style={{ color: "#5e5e5e", margin: "0 0 18px" }}>{e.km} km ida y vuelta</p>
              <strong style={{ marginTop: "auto", fontSize: "1.65rem" }}>{pesos(e.precio)}</strong>
              <a href={e.path} style={{ marginTop: "14px", color: "#b07d00", fontWeight: 800, textDecoration: "none" }}>
                Ver excursión →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#fff", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
          <span style={{ display: "block", marginBottom: "14px", color: "#b07d00", fontWeight: 800, letterSpacing: ".14em" }}>TRASLADOS</span>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Traslados en La Rioja y hacia otras provincias
          </h2>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <article style={{ padding: "28px", background: "#111", color: "#fff", borderRadius: "6px" }}>
            <h3 style={{ marginTop: 0 }}>{aeropuerto.nombre}</h3>
            <p style={{ color: "rgba(255,255,255,.75)" }}>
              Te esperamos en el aeropuerto con chofer y te llevamos al hotel, a Catamarca o directo a tu excursión.
            </p>
            <a href={aeropuerto.path} style={{ color: "#f4b400", fontWeight: 800, textDecoration: "none" }}>
              Ver traslado →
            </a>
          </article>

          <article style={{ padding: "28px", background: "#111", color: "#fff", borderRadius: "6px" }}>
            <h3 style={{ marginTop: 0 }}>La Rioja ⇄ Catamarca</h3>
            <p style={{ color: "rgba(255,255,255,.75)" }}>
              Aeropuerto de La Rioja a San Fernando del Valle de Catamarca. Mínimo 2 pasajeros.
            </p>
            <strong style={{ display: "block", fontSize: "1.65rem" }}>${aeropuertoACatamarca}</strong>
            <a href="/traslados-catamarca" style={{ display: "inline-block", marginTop: "14px", color: "#f4b400", fontWeight: 800, textDecoration: "none" }}>
              Ver traslados →
            </a>
          </article>
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#f6f6f6", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>Cómo reservar</h2>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {steps.map(([n, name, text]) => (
            <div key={n} style={{ padding: "28px", background: "#fff", borderRadius: "6px", border: "1px solid #e4e4e4" }}>
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

          <h2>Preguntas sobre traslados y excursiones en La Rioja</h2>
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

        <h2>Tu viaje por La Rioja empieza acá</h2>

        <p>Contanos la fecha y qué querés conocer, y lo coordinamos por WhatsApp.</p>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Consultar por WhatsApp →
        </a>
      </section>

      <SiteFooter />
    </main>
  )
}

export default LaRioja
