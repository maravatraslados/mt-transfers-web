function Contacto() {

  const title =
    "Contacto | MT Tours & Transfers Catamarca";

  const description =
    "Contactá a MT Tours & Transfers para consultar por excursiones, traslados, viajes corporativos y servicios personalizados en Catamarca.";

  const canonicalUrl =
    "https://mttransfers.com/contacto";

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

  return (
    <div className="site contacto-page">
        <a href="/" className="page-back-home">
  ← Volver al inicio
</a>

      {/* HERO */}
      <section className="contacto-hero">
        <div className="contacto-hero-overlay"></div>

        <div className="contacto-hero-content">
          <span className="contacto-eyebrow">
            MT TOURS & TRANSFERS · CATAMARCA
          </span>

          <h1>
            Contanos qué necesitás.
            <br />
            Nosotros te ayudamos a organizarlo.
          </h1>

          <p>
            Excursiones, transfers, viajes corporativos o recorridos
            personalizados. Elegí el tipo de consulta y hablá
            directamente con nosotros.
          </p>
        </div>
            </section>

      {/* CONTACTO RÁPIDO */}
      <section className="contacto-rapido">
        <div className="contacto-container">

          <div className="contacto-rapido-copy">
            <span className="contacto-label">
              CONTACTO DIRECTO
            </span>

            <h2>¿Querés hacer una consulta?</h2>

            <p>
              Elegí cómo preferís comunicarte con MT Tours & Transfers.
            </p>
          </div>

          <div className="contacto-rapido-actions">

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20realizar%20una%20consulta%20a%20MT%20Tours%20%26%20Transfers."
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-rapido-whatsapp"
            >
              WhatsApp
              <span>Respuesta directa →</span>
            </a>

            <a
              href="mailto:contacto@mttransfers.com?subject=Consulta%20desde%20MT%20Tours%20%26%20Transfers"
              className="contacto-rapido-email"
            >
              Email
              <span>contacto@mttransfers.com →</span>
            </a>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="contacto-intro">
        <div className="contacto-container">

          <span className="contacto-label">CONTACTO</span>

          <h2>
            Una consulta clara es el primer paso para organizar un buen viaje.
          </h2>

          <p>
            Para ayudarte mejor, contanos qué tipo de servicio necesitás,
            desde dónde comienza el viaje, la fecha aproximada y cuántas
            personas viajarían.
          </p>

        </div>
      </section>

      {/* OPCIONES */}
      <section className="contacto-options">
        <div className="contacto-container">

          <div className="contacto-heading">
            <span className="contacto-label">¿EN QUÉ PODEMOS AYUDARTE?</span>
            <h2>Elegí tu consulta</h2>
          </div>

          <div className="contacto-grid">

            <article className="contacto-card">
              <span className="contacto-number">01</span>

              <h3>Excursiones y turismo</h3>

              <p>
                Si querés conocer Catamarca, contanos cuántos días tenés,
                qué destinos te interesan y desde dónde comenzarías el recorrido.
              </p>

              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20excursiones%20y%20turismo%20en%20Catamarca."
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar excursiones →
              </a>
            </article>

            <article className="contacto-card">
              <span className="contacto-number">02</span>

              <h3>Transfers</h3>

              <p>
                Aeropuerto, hotel, terminal, traslados privados,
                interprovinciales o recorridos programados.
              </p>

              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20servicio%20de%20transfer."
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar transfer →
              </a>
            </article>

            <article className="contacto-card">
              <span className="contacto-number">03</span>

              <h3>Empresas</h3>

              <p>
                Coordinación de traslados corporativos, pasajeros,
                personal, reuniones, aeropuertos y servicios programados.
              </p>

              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20servicios%20de%20traslados%20para%20empresa."
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta para empresas →
              </a>
            </article>

            <article className="contacto-card">
              <span className="contacto-number">04</span>

              <h3>Viaje personalizado</h3>

              <p>
                Si tu necesidad no encaja en una opción estándar,
                podemos conversar y ayudarte a organizar un recorrido
                adaptado a tu viaje.
              </p>

              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20organizar%20un%20viaje%20personalizado%20en%20Catamarca."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contarnos tu idea →
              </a>
            </article>

          </div>
        </div>
      </section>

      {/* DATOS ÚTILES */}
      <section className="contacto-info">
        <div className="contacto-container">

          <div className="contacto-info-copy">
            <span className="contacto-label">ANTES DE ESCRIBIRNOS</span>

            <h2>
              Con algunos datos podemos responderte mucho mejor.
            </h2>

            <p>
              Cuando nos consultes, si podés incluí la siguiente información:
            </p>
          </div>

          <div className="contacto-info-list">

            <div>
              <strong>01</strong>
              <span>Fecha del viaje</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Cantidad de pasajeros</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Lugar de salida y destino</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Tipo de servicio que necesitás</span>
            </div>

          </div>

        </div>
      </section>

      {/* ENLACES */}
      <section className="contacto-links">
        <div className="contacto-container">

          <div className="contacto-heading">
            <span className="contacto-label">SEGUÍ PLANIFICANDO</span>
            <h2>También podés explorar nuestras opciones</h2>
          </div>

          <div className="contacto-links-grid">

            <a
              href="/excursiones"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Excursiones</strong>
              <span>Ver experiencias →</span>
            </a>

            <a
              href="/traslados-catamarca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Transfers</strong>
              <span>Ver servicios →</span>
            </a>

            <a
              href="/guia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Guía de Catamarca</strong>
              <span>Planificar viaje →</span>
            </a>

            <a
              href="/quienes-somos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Quiénes somos</strong>
              <span>Conocer MT →</span>
            </a>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="contacto-cta">
        <div className="contacto-container">

          <span className="contacto-label">
            HABLEMOS
          </span>

          <h2>
            Tu próximo viaje puede empezar con un mensaje.
          </h2>

          <p>
  Escribinos por WhatsApp o por email y contanos qué necesitás.
  Te orientamos según tu viaje o servicio.
</p>

<div className="contacto-cta-actions">

  <a
    href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20realizar%20una%20consulta%20a%20MT%20Tours%20%26%20Transfers."
    target="_blank"
    rel="noopener noreferrer"
    className="contacto-cta-button"
  >
    Contactar por WhatsApp
  </a>

  <a
    href="mailto:contacto@mttransfers.com?subject=Consulta%20desde%20MT%20Tours%20%26%20Transfers"
    className="contacto-cta-button contacto-cta-button-email"
  >
    Enviar email
  </a>

</div>

        </div>
      </section>

    </div>
  );
}

export default Contacto;