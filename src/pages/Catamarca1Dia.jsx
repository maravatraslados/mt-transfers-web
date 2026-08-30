function Catamarca1Dia() {

  const title =
    "Qué Hacer en Catamarca en 1 Día | Itinerario";

  const description =
    "¿Tenés un día en Catamarca? Descubrí una propuesta para aprovechar tu visita, conocer algunos de sus principales atractivos y organizar mejor tu recorrido.";

  const canonicalUrl =
    "https://mttransfers.com/catamarca-1-dia";

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
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20organizar%20mi%20viaje%20de%201%20d%C3%ADa%20por%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main>

        <section className="one-day-hero">
          <div className="one-day-hero-content">

            <span className="section-kicker">
              CATAMARCA EN 1 DÍA
            </span>

            <h1>
              Un día puede ser suficiente para empezar a descubrir Catamarca.
            </h1>

            <p>
              Si tenés solamente un día, elegí la experiencia que más se adapte
              a lo que querés conocer: montaña, naturaleza, historia, cultura
              o algunos de los grandes paisajes catamarqueños.
            </p>

            <a href="#opciones" className="button button-primary">
              Ver opciones
            </a>

          </div>
        </section>

        <section className="one-day-options" id="opciones">

          <div className="section-heading">
            <span className="section-kicker">
              ELEGÍ TU EXPERIENCIA
            </span>

            <h2>¿Qué Catamarca querés descubrir hoy?</h2>

            <p>
              Estas son algunas de nuestras propuestas para aprovechar tu día.
              Podés elegir según tus intereses y el tipo de experiencia que
              quieras vivir.
            </p>
          </div>

          <div className="one-day-grid">

            <article className="one-day-card">
              <span>MONTAÑA · PAISAJES</span>
              <h3>Cuesta del Portezuelo</h3>
              <p>
                Una de las postales más emblemáticas de Catamarca, con caminos
                de montaña y vistas panorámicas del Valle Central.
              </p>

              <a href="/excursiones/cuesta-del-portezuelo">
                Ver experiencia →
              </a>
            </article>

            <article className="one-day-card">
              <span>AMBATO · NATURALEZA</span>
              <h3>Cuesta de Singuil + Balcozna</h3>
              <p>
                Sierras, vegetación, pueblos y paisajes para recorrer una de
                las zonas más verdes de Catamarca.
              </p>

              <a href="/excursiones/cuesta-de-singuil-balcozna">
                Ver experiencia →
              </a>
            </article>

            <article className="one-day-card">
              <span>SIERRAS · CIRCUITO</span>
              <h3>Vuelta al Cerro Ancasti</h3>
              <p>
                Un recorrido de día completo entre cuestas, pueblos, diques
                y caminos escénicos del este catamarqueño.
              </p>

              <a href="/excursiones/vuelta-al-cerro-ancasti">
                Ver experiencia →
              </a>
            </article>

            <article className="one-day-card">
              <span>OESTE · HISTORIA</span>
              <h3>Ruta del Adobe + Fiambalá</h3>
              <p>
                Arquitectura, historia y paisajes del oeste combinados con
                una visita a uno de los destinos más conocidos de Catamarca.
              </p>

              <a href="/excursiones/ruta-del-adobe-fiambala">
                Ver experiencia →
              </a>
            </article>

            <article className="one-day-card">
              <span>AMBATO · CULTURA</span>
              <h3>El Rodeo + Virgen</h3>
              <p>
                Naturaleza, caminos serranos y uno de los grandes símbolos
                religiosos de Catamarca.
              </p>

              <a href="/excursiones/el-rodeo-virgen">
                Ver experiencia →
              </a>
            </article>

            <article className="one-day-card">
              <span>OESTE CATAMARQUEÑO</span>
              <h3>Vuelta al Oeste Catamarqueño</h3>
              <p>
                Una propuesta para descubrir historia, pueblos, artesanías
                y algunos de los paisajes más representativos del oeste.
              </p>

              <a href="/excursiones/vuelta-oeste-catamarqueno">
                Ver experiencia →
              </a>
            </article>

          </div>

        </section>

        <section className="tour-final-cta">
          <div className="tour-final-cta-content">

            <span className="section-kicker">
              ¿NO SABÉS CUÁL ELEGIR?
            </span>

            <h2>Te ayudamos a aprovechar tu día en Catamarca.</h2>

            <p>
              Contanos dónde estás alojado, qué lugares te interesan y qué tipo
              de experiencia buscás. Podemos ayudarte a elegir la alternativa
              más adecuada para tu viaje.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20tengo%201%20d%C3%ADa%20para%20conocer%20Catamarca%20y%20quisiera%20que%20me%20ayuden%20a%20elegir%20una%20excursi%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              Consultar por WhatsApp
            </a>

          </div>
        </section>

      </main>

    </div>
  )
}

export default Catamarca1Dia