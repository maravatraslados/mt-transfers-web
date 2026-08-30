function Catamarca3DiasOMas() {

  const title =
    "Qué Hacer en Catamarca en 3 Días o Más | Itinerario";

  const description =
    "Descubrí qué hacer en Catamarca en 3 días o más. Ideas para combinar destinos, excursiones y recorridos y conocer mejor los paisajes de la provincia.";

  const canonicalUrl =
    "https://mttransfers.com/catamarca-3-dias-o-mas";

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
  setOpenGraph("og:type", "article");

  return (
    <div className="tour-detail-page">

      <header className="header">
        <div className="logo">
          <span className="logo-mark">MT</span>

          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>
        </div>

        <a href="/" className="back-link">
          ← Volver al inicio
        </a>

        <a
          className="whatsapp-button"
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20organizar%20un%20viaje%20de%203%20d%C3%ADas%20o%20m%C3%A1s%20por%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main>

        <section className="three-plus-hero">
          <div className="three-plus-hero-content">

            <span className="section-kicker">
              CATAMARCA EN 3 DÍAS O MÁS
            </span>

            <h1>
              Más tiempo para descubrir Catamarca con tranquilidad.
            </h1>

            <p>
              Con tres días o más podés combinar diferentes regiones,
              paisajes y experiencias para armar un viaje mucho más completo.
            </p>

            <a href="#propuestas" className="button button-primary">
              Ver propuestas
            </a>

          </div>
        </section>

        <section className="three-plus-options" id="propuestas">

          <div className="section-heading">
            <span className="section-kicker">
              ELEGÍ SEGÚN TU TIEMPO
            </span>

            <h2>Una propuesta para cada cantidad de días</h2>

            <p>
              Estas ideas sirven como punto de partida. Después podemos adaptar
              el recorrido según tus intereses, alojamiento y ritmo de viaje.
            </p>
          </div>

          <div className="three-plus-grid">

            <article className="three-plus-card">
              <span className="three-plus-tag">3 DÍAS</span>

              <h3>Primera experiencia por Catamarca</h3>

              <p>
                Una combinación equilibrada entre sierras, cultura y paisajes,
                ideal para una primera visita.
              </p>

              <div className="three-plus-list">
                <span>Día 1 · Cuesta del Portezuelo</span>
                <span>Día 2 · El Rodeo + Virgen</span>
                <span>Día 3 · Vuelta al Cerro Ancasti</span>
              </div>

              <a
                href="/excursiones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver excursiones →
              </a>
            </article>

            <article className="three-plus-card three-plus-card-featured">
              <span className="three-plus-tag">5 DÍAS</span>

              <h3>Catamarca más completa</h3>

              <p>
                Una propuesta con más tiempo para sumar el oeste catamarqueño
                y combinar naturaleza, historia y cultura.
              </p>

              <div className="three-plus-list">
                <span>Día 1 · Cuesta del Portezuelo</span>
                <span>Día 2 · Singuil + Balcozna</span>
                <span>Día 3 · El Rodeo + Virgen</span>
                <span>Día 4 · Ruta del Adobe + Fiambalá</span>
                <span>Día 5 · Vuelta al Oeste Catamarqueño</span>
              </div>

              <a
                href="/excursiones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver excursiones →
              </a>
            </article>

            <article className="three-plus-card">
              <span className="three-plus-tag">7 DÍAS O MÁS</span>

              <h3>Viaje personalizado</h3>

              <p>
                Para quienes quieren recorrer Catamarca con más calma,
                combinar regiones y sumar experiencias según sus intereses.
              </p>

              <div className="three-plus-list">
                <span>Sierras y Valle Central</span>
                <span>Ambato y pueblos serranos</span>
                <span>Oeste catamarqueño</span>
                <span>Historia y cultura</span>
                <span>Experiencias a medida</span>
              </div>

              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20tengo%207%20d%C3%ADas%20o%20m%C3%A1s%20para%20conocer%20Catamarca%20y%20quisiera%20armar%20un%20recorrido."
                target="_blank"
                rel="noopener noreferrer"
              >
                Armar mi viaje →
              </a>
            </article>

          </div>

        </section>

        <section className="tour-final-cta">
          <div className="tour-final-cta-content">

            <span className="section-kicker">
              ARMAMOS TU RECORRIDO
            </span>

            <h2>Tu viaje puede adaptarse a vos.</h2>

            <p>
              Decinos cuántos días tenés, qué tipo de lugares querés conocer
              y dónde te vas a alojar. Podemos ayudarte a organizar una
              propuesta personalizada.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20planificar%20un%20viaje%20de%203%20d%C3%ADas%20o%20m%C3%A1s%20por%20Catamarca."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              Planificar por WhatsApp
            </a>

          </div>
        </section>

      </main>

    </div>
  )
}

export default Catamarca3DiasOMas