// Secciones compartidas de las páginas de La Rioja, con el mismo estilo (clases traslados-*)
// que la página de transfers de Catamarca: portada con foto, tarjetas claras y oscuras, etc.
import { wa } from "./laRiojaData"

const num = (i) => String(i + 1).padStart(2, "0")

export const WA_EMPRESA = wa(
  "Hola, quisiera consultar por servicios de traslado para una empresa en La Rioja.",
)

export function Hero({ kicker, title, text, primary, secondary }) {
  return (
    <section className="traslados-hero">
      <div className="traslados-hero-overlay"></div>

      <div className="traslados-hero-content">
        <span className="traslados-kicker">{kicker}</span>

        <h1>{title}</h1>

        <p>{text}</p>

        <div className="traslados-hero-actions">
          <a href={primary.href} target="_blank" rel="noopener noreferrer">
            {primary.label}
          </a>

          <a href={secondary.href}>{secondary.label}</a>
        </div>
      </div>
    </section>
  )
}

export function Intro({ kicker, title, paragraphs, data }) {
  return (
    <section className="traslados-intro">
      <div className="traslados-intro-main">
        <span>{kicker}</span>

        <h2>{title}</h2>

        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="traslados-intro-data">
        {data.map(([strong, label]) => (
          <div key={label}>
            <strong>{strong}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// Tarjetas claras numeradas (fondo gris, como "Soluciones para empresas")
export function Cards({ id, kicker, title, text, items, bottom }) {
  return (
    <section id={id} className="traslados-business">
      <div className="traslados-section-heading">
        <span>{kicker}</span>

        <h2>{title}</h2>

        {text && <p>{text}</p>}
      </div>

      <div className="traslados-business-grid">
        {items.map(({ h, p, href, cta }, i) => (
          <article key={h}>
            <span>{num(i)}</span>
            <h3>{h}</h3>
            <p>{p}</p>
            {href && (
              <p>
                <a href={href} style={{ color: "#b07d00", fontWeight: 800, textDecoration: "none" }}>
                  {cta || "Ver más →"}
                </a>
              </p>
            )}
          </article>
        ))}
      </div>

      {bottom && (
        <div className="traslados-business-bottom">
          <div>
            <span>{bottom.kicker}</span>
            <h3>{bottom.title}</h3>
            <p>{bottom.text}</p>
          </div>

          <a href={bottom.href} target="_blank" rel="noopener noreferrer">
            {bottom.label}
          </a>
        </div>
      )}
    </section>
  )
}

// Tarjetas blancas (fondo blanco, como "Nuestros servicios")
export function Services({ kicker, title, text, items }) {
  return (
    <section className="traslados-services">
      <div className="traslados-section-heading">
        <span>{kicker}</span>

        <h2>{title}</h2>

        {text && <p>{text}</p>}
      </div>

      <div className="traslados-services-grid">
        {items.map(({ h, p, href, cta }) => (
          <article key={h}>
            <h3>{h}</h3>
            <p>{p}</p>
            {href && (
              <p>
                <a href={href} style={{ color: "#b07d00", fontWeight: 800, textDecoration: "none" }}>
                  {cta || "Ver más →"}
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

// Fondo negro con tarjetas de borde (como "Por qué MT Transfers")
export function Why({ kicker, title, items }) {
  return (
    <section className="traslados-why">
      <div className="traslados-why-title">
        <span>{kicker}</span>

        <h2>{title}</h2>
      </div>

      <div className="traslados-why-grid">
        {items.map(([h, p], i) => (
          <article key={h}>
            <strong>{num(i)}</strong>
            <h3>{h}</h3>
            {p && <p>{p}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

export function Process({ title, items }) {
  return (
    <section className="traslados-process">
      <div className="traslados-section-heading">
        <span>CÓMO CONTRATAR</span>

        <h2>{title}</h2>
      </div>

      <div className="traslados-process-grid">
        {items.map(([n, h, p]) => (
          <article key={n}>
            <span>{n}</span>
            <h3>{h}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

// Bloque oscuro con lista, como "Transfer aeropuerto"
export function Highlight({ kicker, title, paragraphs, bullets, href, label }) {
  return (
    <section className="traslados-airport">
      <div className="traslados-airport-content">
        <span>{kicker}</span>

        <h2>{title}</h2>

        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        {bullets && (
          <ul>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {label}
        </a>
      </div>
    </section>
  )
}

export function Coverage() {
  return (
    <section className="traslados-coverage">
      <div>
        <span>COBERTURA</span>

        <h2>La Rioja, Catamarca y conexiones regionales</h2>

        <p>
          Salimos desde La Rioja capital y coordinamos servicios hacia distintos destinos
          provinciales y regionales, con atención personalizada en cada recorrido.
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
  )
}

export function CompanyCta() {
  return (
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
        Solicitar propuesta corporativa →
      </a>
    </section>
  )
}

export function Faq({ title, faq }) {
  return (
    <section className="traslados-faq" id="preguntas">
      <div className="traslados-section-heading">
        <span>PREGUNTAS FRECUENTES</span>

        <h2>{title}</h2>
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
  )
}

export function Final({ title, text, href, label }) {
  return (
    <section className="traslados-final">
      <span>MT TOURS & TRANSFERS</span>

      <h2>{title}</h2>

      <p>{text}</p>

      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </section>
  )
}
