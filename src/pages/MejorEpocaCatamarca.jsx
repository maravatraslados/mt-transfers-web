function MejorEpocaCatamarca() {

  const title =
    "Mejor Época para Viajar a Catamarca | Clima y Temporadas";

  const description =
    "Descubrí cuál es la mejor época para viajar a Catamarca según el clima, la temporada y las zonas que quieras visitar: Puna, valles, Fiambalá y más.";

  const canonicalUrl =
    "https://mttransfers.com/guia/mejor-epoca-catamarca";

  // TITLE
  document.title = title;

  // META DESCRIPTION
  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description;

  // CANONICAL
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;

  // OPEN GRAPH
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
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20sobre%20cu%C3%A1l%20es%20la%20mejor%20%C3%A9poca%20para%20viajar%20a%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main>

        {/* HERO */}

        <section className="guide-season-hero">
          <div className="guide-season-hero-content">

            <span className="section-kicker">
              GUÍA DE CATAMARCA
            </span>

            <h1>
              ¿Cuál es la mejor época para viajar a Catamarca?
            </h1>

            <p>
              Catamarca puede visitarse durante gran parte del año, pero cada
              estación ofrece paisajes, temperaturas y condiciones diferentes.
              Elegir bien la fecha puede ayudarte a disfrutar mucho más el viaje.
            </p>

            <a href="#guia" className="button button-primary">
              Ver la guía
            </a>

          </div>
        </section>


        {/* RESPUESTA RÁPIDA */}

        <section className="guide-best-time" id="guia">
          <div className="guide-best-time-content">

            <span className="section-kicker">
              RESPUESTA RÁPIDA
            </span>

            <h2>
              Entonces, ¿cuál es la mejor época para viajar a Catamarca?
            </h2>

            <p className="guide-best-time-intro">
              Si querés recorrer diferentes regiones de Catamarca en un mismo
              viaje, el otoño y la primavera suelen ofrecer condiciones muy
              agradables. Pero la respuesta cambia según los lugares que quieras
              conocer.
            </p>

            <div className="guide-best-time-highlight">
              <strong>
                No existe una única mejor época para toda Catamarca.
              </strong>

              <p>
                La provincia combina valles, sierras, desiertos, Puna y alta
                montaña. En un mismo viaje podés pasar de zonas cálidas a lugares
                ubicados a más de 3.000 metros de altura, donde las temperaturas
                y las condiciones pueden ser completamente diferentes.
              </p>
            </div>

            <div className="guide-best-time-summary">

              <div>
                <span>🍂</span>
                <strong>Otoño</strong>
                <p>
                  Muy buena época para combinar distintas regiones, con
                  temperaturas generalmente más moderadas.
                </p>
              </div>

              <div>
                <span>🌸</span>
                <strong>Primavera</strong>
                <p>
                  Otra excelente alternativa para recorrer Catamarca, aunque
                  el viento puede tener mayor protagonismo en zonas abiertas.
                </p>
              </div>

              <div>
                <span>☀️</span>
                <strong>Verano</strong>
                <p>
                  Se puede viajar, pero conviene considerar el calor, las lluvias
                  estivales y los horarios de cada recorrido.
                </p>
              </div>

              <div>
                <span>❄️</span>
                <strong>Invierno</strong>
                <p>
                  Puede ofrecer días agradables en los valles, mientras que el
                  frío aumenta considerablemente en las zonas de altura.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ESTACIONES */}

        <section className="guide-season-content">

          <div className="section-heading">
            <span className="section-kicker">
              CATAMARCA DURANTE EL AÑO
            </span>

            <h2>Elegí la época según cuándo quieras viajar</h2>

            <p>
              Cada estación tiene características diferentes. En nuestras guías
              vas a encontrar información sobre sus meses, clima, destinos y
              recomendaciones.
            </p>
          </div>

          <div className="guide-season-grid">

            <a
              href="/guia/mejor-epoca-catamarca/catamarca-en-otono"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-season-card"
            >
              <span>MARZO · ABRIL · MAYO</span>
              <h3>Otoño</h3>

              <p>
                Temperaturas más moderadas y una época muy interesante para
                combinar diferentes regiones de la provincia.
              </p>

              <strong>Ver Catamarca en otoño →</strong>
            </a>


            <a
              href="/guia/mejor-epoca-catamarca/catamarca-en-invierno"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-season-card guide-season-card-featured"
            >
              <span>JUNIO · JULIO · AGOSTO</span>
              <h3>Invierno</h3>

              <p>
                Días que pueden ser agradables en los valles, noches frías y
                condiciones mucho más exigentes cuando aumenta la altura.
              </p>

              <strong>Ver Catamarca en invierno →</strong>
            </a>


            <a
              href="/guia/mejor-epoca-catamarca/catamarca-en-primavera"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-season-card"
            >
              <span>SEPTIEMBRE · OCTUBRE · NOVIEMBRE</span>
              <h3>Primavera</h3>

              <p>
                Una temporada muy interesante para recorrer sierras, valles,
                destinos del oeste y diferentes regiones en un mismo viaje.
              </p>

              <strong>Ver Catamarca en primavera →</strong>
            </a>


            <a
              href="/guia/mejor-epoca-catamarca/catamarca-en-verano"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-season-card"
            >
              <span>DICIEMBRE · ENERO · FEBRERO</span>
              <h3>Verano</h3>

              <p>
                Días largos, temperaturas elevadas en zonas bajas y una época
                donde conviene prestar especial atención al clima y los horarios.
              </p>

              <strong>Ver Catamarca en verano →</strong>
            </a>

          </div>
        </section>


        {/* REGIONES */}

        <section className="guide-regions">

          <div className="guide-regions-heading">

            <span className="section-kicker">
              MEJOR ÉPOCA SEGÚN EL DESTINO
            </span>

            <h2>
              ¿Cuándo conviene viajar a cada zona de Catamarca?
            </h2>

            <p>
              No todas las regiones tienen el mismo clima ni la misma altura.
              La fecha ideal depende en gran medida del lugar que quieras conocer.
            </p>

          </div>


          <div className="guide-regions-grid">

            <article className="guide-region-card">
              <span className="guide-region-label">
                VALLE CENTRAL
              </span>

              <h3>San Fernando del Valle de Catamarca</h3>

              <p>
                La Capital puede visitarse durante todo el año. Durante el verano
                conviene organizar los paseos evitando las horas de mayor calor.
              </p>

              <div className="guide-region-best">
                <strong>Época orientativa</strong>
                <span>Marzo a mayo · Septiembre a noviembre</span>
              </div>
            </article>


            <article className="guide-region-card">
              <span className="guide-region-label">
                SIERRAS
              </span>

              <h3>El Rodeo, Las Juntas y Ambato</h3>

              <p>
                Las zonas serranas presentan condiciones diferentes al Valle
                Central. En verano pueden verse más verdes, mientras que otoño
                y primavera permiten disfrutar temperaturas más moderadas.
              </p>

              <div className="guide-region-best">
                <strong>Época orientativa</strong>
                <span>Marzo a mayo · Septiembre a noviembre</span>
              </div>
            </article>


            <article className="guide-region-card">
              <span className="guide-region-label">
                ESTE Y SIERRAS
              </span>

              <h3>Cuesta del Portezuelo y Ancasti</h3>

              <p>
                Pueden recorrerse durante buena parte del año, considerando
                siempre las condiciones meteorológicas y del camino.
              </p>

              <div className="guide-region-best">
                <strong>Época orientativa</strong>
                <span>Otoño y primavera</span>
              </div>
            </article>


            <article className="guide-region-card">
              <span className="guide-region-label">
                OESTE CATAMARQUEÑO
              </span>

              <h3>Belén, Londres y Andalgalá</h3>

              <p>
                El oeste puede visitarse durante gran parte del año. En verano
                conviene considerar las temperaturas y organizar bien los
                recorridos más largos.
              </p>

              <div className="guide-region-best">
                <strong>Época orientativa</strong>
                <span>Marzo a mayo · Septiembre a noviembre</span>
              </div>
            </article>


            <article className="guide-region-card guide-region-card-featured">
              <span className="guide-region-label">
                FIAMBALÁ Y TINOGASTA
              </span>

              <h3>Ruta del Adobe, Fiambalá y Termas</h3>

              <p>
                Otoño y primavera suelen ofrecer condiciones agradables para
                combinar recorridos culturales, paisajes y experiencias en el
                oeste catamarqueño.
              </p>

              <div className="guide-region-best">
                <strong>Época orientativa</strong>
                <span>Marzo a mayo · Septiembre a noviembre</span>
              </div>
            </article>


            <article className="guide-region-card">
              <span className="guide-region-label">
                PUNA CATAMARQUEÑA
              </span>

              <h3>Antofagasta de la Sierra y Campo de Piedra Pómez</h3>

              <p>
                La altura, el frío, el viento y las grandes distancias hacen que
                estos destinos requieran una planificación diferente.
              </p>

              <div className="guide-region-best">
                <strong>Época orientativa</strong>
                <span>Abril a mayo · Septiembre a noviembre</span>
              </div>
            </article>


            <article className="guide-region-card">
              <span className="guide-region-label">
                ALTA MONTAÑA
              </span>

              <h3>Seismiles y Cordillera de los Andes</h3>

              <p>
                Estos recorridos requieren evaluar las condiciones actuales de
                clima, altura, viento, nieve y caminos antes de cada salida.
              </p>

              <div className="guide-region-best">
                <strong>Clave</strong>
                <span>Consultar condiciones antes de viajar</span>
              </div>
            </article>

          </div>


          <div className="guide-regions-note">
            <strong>Un dato que muchos viajeros subestiman</strong>

            <p>
              En pocas horas de viaje podés pasar del Valle Central a zonas de
              más de 3.000 metros de altura. Por eso conviene preparar cada
              recorrido según el destino y no solamente según el clima de la
              Capital.
            </p>
          </div>

        </section>


        {/* PREGUNTAS FRECUENTES */}

        <section className="guide-season-tips">

          <div className="section-heading">
            <span className="section-kicker">
              PREGUNTAS FRECUENTES
            </span>

            <h2>Dudas habituales antes de elegir la fecha del viaje</h2>
          </div>

          <div className="guide-season-tips-grid">

            <div>
              <strong>¿Se puede viajar a Catamarca todo el año?</strong>
              <p>
                Sí, pero las condiciones cambian mucho según la región, la
                altura y la época. Por eso conviene planificar cada destino
                individualmente.
              </p>
            </div>

            <div>
              <strong>¿Otoño o primavera?</strong>
              <p>
                Ambas estaciones suelen ser muy interesantes para combinar
                diferentes regiones debido a temperaturas generalmente más
                moderadas.
              </p>
            </div>

            <div>
              <strong>¿Hace el mismo clima en toda la provincia?</strong>
              <p>
                No. Catamarca presenta grandes diferencias de altura y paisaje,
                por lo que las condiciones pueden cambiar considerablemente
                durante un mismo recorrido.
              </p>
            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="tour-final-cta">
          <div className="tour-final-cta-content">

            <span className="section-kicker">
              PLANIFICÁ SEGÚN TU FECHA
            </span>

            <h2>¿Ya sabés cuándo vas a viajar?</h2>

            <p>
              Contanos la fecha aproximada, cuántos días tenés y qué lugares
              querés conocer. Podemos ayudarte a organizar un recorrido acorde
              a tu viaje.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20planificar%20mi%20viaje%20a%20Catamarca%20seg%C3%BAn%20la%20%C3%A9poca%20del%20a%C3%B1o."
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
  );
}

export default MejorEpocaCatamarca;