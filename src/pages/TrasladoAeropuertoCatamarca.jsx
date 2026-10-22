import SiteFooter from "../SiteFooter";

const WHATSAPP =
  "https://wa.me/5493834696065?text=Hola%2C%20quisiera%20reservar%20un%20traslado%20desde%20o%20hacia%20el%20Aeropuerto%20de%20Catamarca.";

function TrasladoAeropuertoCatamarca() {

  const title =
    "Traslado Aeropuerto Catamarca: Transfer al Centro y Hoteles | MT Transfers";

  const description =
    "Traslado desde y hacia el Aeropuerto Felipe Varela de Catamarca: $40.000 hasta 3 personas, unos 20 minutos al centro. Aceptamos todos los medios de pago y la cancelación es gratuita.";

  const canonicalUrl =
    "https://mttransfers.com/traslado-aeropuerto-catamarca";

  document.title = title;

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description;

  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;

  const setOpenGraph = (property, content) => {
    let meta = document.querySelector(
      `meta[property="${property}"]`
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
  };

  setOpenGraph("og:title", title);
  setOpenGraph("og:description", description);
  setOpenGraph("og:url", canonicalUrl);
  setOpenGraph("og:type", "website");

  const facts = [
    ["$40.000", "Hasta 3 personas, por trayecto"],
    ["20 min", "Del aeropuerto al centro de la ciudad"],
    ["Ida y vuelta", "Aeropuerto → hotel y hotel → aeropuerto"],
    ["Cancelación gratis", "Seña del 10% y todos los medios de pago"],
  ];

  const steps = [
    ["01", "Nos escribís", "Por WhatsApp, con tu fecha, horario de vuelo y dirección o hotel de destino."],
    ["02", "Confirmamos", "Coordinamos el servicio y reservás con una seña del 10%."],
    ["03", "Te trasladamos", "Un chofer te lleva entre el Aeropuerto Felipe Varela y tu hotel o domicilio."],
  ];

  return (
    <main className="traslados-page">

      <header className="traslados-header">
        <a href="/" className="traslados-logo">
          MT TOURS & TRANSFERS
        </a>

        <a href="/traslados-catamarca" className="traslados-home">
          ← Todos los traslados
        </a>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="traslados-header-whatsapp"
        >
          Reservar traslado
        </a>
      </header>

      <section className="traslados-hero">
        <div className="traslados-hero-overlay"></div>

        <div className="traslados-hero-content">
          <span className="traslados-kicker">
            AEROPUERTO DE CATAMARCA
          </span>

          <h1>
            Traslado desde y hacia el Aeropuerto de Catamarca
          </h1>

          <p>
            Transfer privado entre el Aeropuerto Coronel Felipe Varela y
            hoteles o domicilios de San Fernando del Valle de Catamarca.
            Precio fijo de $40.000 para hasta 3 personas.
          </p>

          <div className="traslados-hero-actions">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar por WhatsApp
            </a>

            <a href="#preguntas">
              Preguntas frecuentes
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#fff", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Lo que tenés que saber del traslado
          </h2>
          <p style={{ margin: "18px auto 0" }}>
            Un servicio simple: llegás, te esperamos y te llevamos a destino.
          </p>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {facts.map(([value, label]) => (
            <div key={value} style={{ padding: "28px", background: "#111", color: "#fff", borderRadius: "6px" }}>
              <strong style={{ display: "block", fontSize: "1.65rem", color: "#f4b400" }}>{value}</strong>
              <span style={{ color: "rgba(255,255,255,.75)" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 7%", background: "#f6f6f6", color: "#111" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Cómo reservar tu transfer al aeropuerto
          </h2>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {steps.map(([n, name, text]) => (
            <div key={n} style={{ padding: "28px", background: "#fff", borderRadius: "6px", border: "1px solid #e4e4e4" }}>
              <strong style={{ color: "#f4b400" }}>{n}</strong>
              <h3 style={{ margin: "8px 0" }}>{name}</h3>
              <p style={{ margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="traslados-faq" id="preguntas">
        <div className="traslados-section-heading">
          <span>PREGUNTAS FRECUENTES</span>

          <h2>
            Preguntas sobre el traslado al Aeropuerto de Catamarca
          </h2>
        </div>

        <div className="traslados-faq-grid">

          <article>
            <h3>¿Cuánto cuesta el traslado del Aeropuerto de Catamarca al centro?</h3>
            <p>
              El traslado cuesta $40.000 para hasta 3 personas. El mismo
              precio aplica para ir del hotel o domicilio al aeropuerto.
            </p>
          </article>

          <article>
            <h3>¿Cuánto tarda el viaje del aeropuerto al centro de Catamarca?</h3>
            <p>
              El trayecto entre el Aeropuerto Felipe Varela y el centro de San
              Fernando del Valle de Catamarca dura unos 20 minutos.
            </p>
          </article>

          <article>
            <h3>¿Hacen el traslado en los dos sentidos?</h3>
            <p>
              Sí. Hacemos traslados desde el aeropuerto a tu hotel o domicilio
              y desde tu hotel o domicilio al aeropuerto.
            </p>
          </article>

          <article>
            <h3>¿Cómo reservo el traslado?</h3>
            <p>
              Escribinos por WhatsApp con la fecha, el horario de tu vuelo y
              el lugar de destino. Para confirmar se abona una seña del 10%.
            </p>
          </article>

          <article>
            <h3>¿Qué medios de pago aceptan?</h3>
            <p>
              Aceptamos todos los medios de pago.
            </p>
          </article>

          <article>
            <h3>¿Se puede cancelar el traslado?</h3>
            <p>
              Sí. La cancelación es gratuita.
            </p>
          </article>

          <article>
            <h3>¿Puedo viajar con equipaje y con niños?</h3>
            <p>
              Sí, se puede viajar con equipaje. No contamos con sillas para
              niños, por lo que conviene llevar la propia si viajás con
              menores.
            </p>
          </article>

          <article>
            <h3>¿Qué pasa si somos más de 3 personas?</h3>
            <p>
              Para grupos más grandes tenemos combi de 18 o 19 pasajeros y
              minibús de hasta 22 pasajeros. Escribinos con la cantidad de
              personas y te pasamos el presupuesto.
            </p>
          </article>

        </div>
      </section>

      <section className="traslados-final">
        <span>MT TOURS & TRANSFERS</span>

        <h2>
          Reservá tu traslado al aeropuerto
        </h2>

        <p>
          Enviá tu fecha, horario de vuelo y destino y lo coordinamos.
        </p>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp →
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}

export default TrasladoAeropuertoCatamarca;
