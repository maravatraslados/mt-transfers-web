import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"
import { setSeo } from "./seo"
import { excursiones, pesos, wa } from "./laRiojaData"

const heroStyle = {
  background: "linear-gradient(135deg, #111111 0%, #2b2110 60%, #5a4308 100%)",
  minHeight: "560px",
}

function LaRiojaExcursion({ excursion }) {
  const { nombre, kicker, resumen, km, precio, paradas, seoTitle, seoDescription, faq, path } = excursion

  setSeo({ title: seoTitle, description: seoDescription, path })

  const whatsapp = wa(`Hola, quiero reservar la excursión ${nombre} desde La Rioja.`)
  const otras = excursiones.filter((e) => e.path !== path)

  const facts = [
    [pesos(precio), "Servicio completo por vehículo con chofer"],
    [`${km} km`, "Recorrido total, ida y vuelta"],
    ["La Rioja capital", "Te buscamos y te dejamos donde estés"],
    ["Privado", "Solo vos y tu grupo, sin esperar a otros"],
  ]

  const steps = [
    ["01", "Nos escribís", "Por WhatsApp, con la fecha, la cantidad de personas y dónde te buscamos."],
    ["02", "Confirmamos", "Coordinamos horario y recorrido, y reservás tu lugar."],
    ["03", "Salimos desde La Rioja", "Un chofer te busca y te lleva a recorrer el circuito completo."],
  ]

  return (
    <main className="traslados-page">
      <SiteHeader />

      <section className="traslados-hero" style={heroStyle}>
        <div className="traslados-hero-overlay"></div>

        <div className="traslados-hero-content">
          <span className="traslados-kicker">{kicker}</span>

          <h1>{nombre}</h1>

          <p>{resumen}</p>

          <div className="traslados-hero-actions">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              Reservar por WhatsApp
            </a>

            <a href="#preguntas">Preguntas frecuentes</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#fff", color: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {facts.map(([value, label]) => (
            <div key={label} style={{ padding: "28px", background: "#111", color: "#fff", borderRadius: "6px" }}>
              <strong style={{ display: "block", fontSize: "1.65rem", color: "#f4b400" }}>{value}</strong>
              <span style={{ color: "rgba(255,255,255,.75)" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#f6f6f6", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 28px", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Qué recorrés en esta excursión
          </h2>

          <ol style={{ margin: 0, padding: "0 0 0 22px", lineHeight: 1.9, fontSize: "1.08rem" }}>
            {paradas.map((parada) => (
              <li key={parada}>{parada}</li>
            ))}
          </ol>

          <p style={{ marginTop: "28px", color: "#5e5e5e" }}>
            El precio es por el servicio completo con vehículo y chofer, no por persona. Si
            viajan más personas de las que entran en un auto, escribinos y te pasamos opciones
            en camioneta, combi o minibús.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#fff", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Cómo reservar
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

          <h2>Preguntas sobre {nombre}</h2>
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

      <section style={{ padding: "80px 7%", background: "#f6f6f6", color: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 28px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Otras excursiones desde La Rioja
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {otras.map((e) => (
              <a key={e.path} href={e.path} style={{ padding: "24px", background: "#fff", border: "1px solid #e4e4e4", borderRadius: "6px", color: "#111", textDecoration: "none" }}>
                <strong style={{ display: "block", marginBottom: "6px" }}>{e.nombre}</strong>
                <span style={{ color: "#5e5e5e" }}>{e.km} km ida y vuelta</span>
              </a>
            ))}
            <a href="/la-rioja" style={{ padding: "24px", background: "#111", borderRadius: "6px", color: "#f4b400", textDecoration: "none", fontWeight: 800 }}>
              Ver todo lo que hacemos en La Rioja →
            </a>
          </div>
        </div>
      </section>

      <section className="traslados-final">
        <span>MT TOURS & TRANSFERS</span>

        <h2>Reservá {nombre}</h2>

        <p>Contanos la fecha y cuántos son, y te confirmamos el servicio.</p>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          Consultar por WhatsApp →
        </a>
      </section>

      <SiteFooter />
    </main>
  )
}

export default LaRiojaExcursion
