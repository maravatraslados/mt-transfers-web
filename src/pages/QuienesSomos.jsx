function QuienesSomos() {

  const title =
    "Quiénes Somos | MT Tours & Transfers Catamarca";

  const description =
    "Conocé MT Tours & Transfers, nuestra forma de trabajar, misión, visión y valores. Traslados y experiencias turísticas con atención personalizada en Catamarca.";

  const canonicalUrl =
    "https://mttransfers.com/quienes-somos";

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
    <div className="site quienes-page">

        <a href="/" className="page-back-home">
  ← Volver al inicio
</a>

      {/* HERO */}
      <section className="quienes-hero">
        <div className="quienes-hero-overlay"></div>

        <div className="quienes-hero-content">
          <span className="quienes-eyebrow">
            MT TOURS & TRANSFERS · CATAMARCA
          </span>

          <h1>
            No solo conocemos el camino.
            <br />
            Sabemos lo importante que es llegar bien.
          </h1>

          <p>
            Traslados, turismo y atención personalizada con una forma
            de trabajar basada en la responsabilidad, la planificación
            y el conocimiento de Catamarca.
          </p>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="quienes-intro">
        <div className="quienes-container">

          <span className="quienes-label">QUIÉNES SOMOS</span>

          <h2>
            Experiencia local. Atención personal.
            Compromiso en cada viaje.
          </h2>

          <p>
            MT Tours & Transfers nace de la experiencia en el traslado
            de pasajeros y del conocimiento adquirido recorriendo
            Catamarca y el noroeste argentino.
          </p>

          <p>
            Trabajamos con turistas, pasajeros particulares y empresas
            que necesitan algo más que un vehículo: necesitan
            coordinación, puntualidad, comunicación y una respuesta
            responsable antes, durante y después de cada servicio.
          </p>

          <p>
            Con el tiempo incorporamos experiencias y recorridos
            turísticos para que quienes llegan a Catamarca también
            puedan descubrir sus paisajes, su cultura, su historia
            y algunos de los lugares que hacen única a nuestra
            provincia.
          </p>

        </div>
      </section>

      {/* DOS ÁREAS */}
      <section className="quienes-areas">
        <div className="quienes-container">

          <div className="quienes-section-heading">
            <span className="quienes-label">LO QUE HACEMOS</span>
            <h2>Dos servicios. Una misma forma de trabajar.</h2>
          </div>

          <div className="quienes-areas-grid">

            <article className="quienes-area-card">
              <span className="quienes-number">01</span>

              <h3>Transfers</h3>

              <p>
                Traslados de pasajeros, servicios aeroportuarios,
                viajes corporativos, traslado de personal y servicios
                programados dentro y fuera de Catamarca.
              </p>

              <a
                href="/traslados-catamarca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer nuestros transfers →
              </a>
            </article>

            <article className="quienes-area-card">
              <span className="quienes-number">02</span>

              <h3>Tours & Experiencias</h3>

              <p>
                Recorridos para descubrir Catamarca de una manera
                cercana y organizada, combinando paisajes, historia,
                cultura y conocimiento del territorio.
              </p>

              <a
                href="/excursiones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver excursiones →
              </a>
            </article>

          </div>
        </div>
      </section>

      {/* MISIÓN VISIÓN */}
      <section className="quienes-purpose">
        <div className="quienes-container">

          <div className="quienes-section-heading quienes-center">
            <span className="quienes-label">NUESTRO PROPÓSITO</span>
            <h2>Misión y visión</h2>
          </div>

          <div className="quienes-purpose-grid">

            <article className="quienes-purpose-card">
              <span className="quienes-purpose-icon">M</span>

              <h3>Nuestra misión</h3>

              <p>
                Brindar servicios de traslados y experiencias turísticas
                confiables, organizados y personalizados, acompañando a
                cada pasajero desde la planificación hasta la llegada a
                destino.
              </p>

              <p>
                Queremos que viajar por Catamarca sea más simple,
                seguro y disfrutable, tanto para quien nos visita como
                para las empresas que confían en nosotros para resolver
                sus necesidades de movilidad.
              </p>
            </article>

            <article className="quienes-purpose-card">
              <span className="quienes-purpose-icon">V</span>

              <h3>Nuestra visión</h3>

              <p>
                Convertir a MT Tours & Transfers en una referencia en
                traslados y turismo receptivo en Catamarca, reconocida
                por la calidad del servicio, la atención humana y el
                conocimiento del territorio.
              </p>

              <p>
                Aspiramos a crecer conectando cada vez más viajeros,
                empresas y destinos, sin perder la cercanía y la
                atención personalizada que forman parte de nuestra
                identidad.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="quienes-values">
        <div className="quienes-container">

          <div className="quienes-section-heading">
            <span className="quienes-label">LO QUE NOS DEFINE</span>
            <h2>Nuestros valores se demuestran en el camino.</h2>

            <p>
              No buscamos que sean solamente palabras escritas en una
              página. Son los principios con los que queremos trabajar
              en cada servicio.
            </p>
          </div>

          <div className="quienes-values-grid">

            <article>
              <span>01</span>
              <h3>Responsabilidad</h3>
              <p>
                Entendemos que detrás de cada traslado existe un horario,
                un vuelo, una reunión, un viaje o una persona esperando
                llegar a destino.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Puntualidad</h3>
              <p>
                Planificar correctamente los tiempos es parte esencial
                de nuestro servicio y de la confianza que buscamos
                construir.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Compromiso</h3>
              <p>
                Cada servicio merece atención, seguimiento y una
                respuesta acorde a las necesidades reales del pasajero.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Cercanía</h3>
              <p>
                Creemos en una atención directa y humana, donde cada
                persona pueda consultar, planificar y viajar sabiendo
                con quién está hablando.
              </p>
            </article>

            <article>
              <span>05</span>
              <h3>Conocimiento local</h3>
              <p>
                Conocer las rutas, distancias, destinos y características
                de Catamarca nos permite orientar mejor cada viaje.
              </p>
            </article>

            <article>
              <span>06</span>
              <h3>Mejora continua</h3>
              <p>
                Buscamos aprender de cada experiencia y utilizar nuevas
                herramientas para mejorar la organización, comunicación
                y calidad del servicio.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="quienes-difference">
        <div className="quienes-container">

          <div className="quienes-difference-content">

            <span className="quienes-label">NUESTRA FORMA DE TRABAJAR</span>

            <h2>
              Cada viaje comienza mucho antes de subir al vehículo.
            </h2>

            <p>
              Comienza cuando entendemos qué necesita el pasajero,
              organizamos horarios, evaluamos el recorrido y coordinamos
              cada detalle.
            </p>

            <p>
              Por eso buscamos que MT Tours & Transfers no sea solamente
              una opción de transporte, sino un aliado para organizar
              la movilidad y descubrir Catamarca.
            </p>

          </div>

          <div className="quienes-difference-points">

            <div>
              <strong>01</strong>
              <span>Escuchamos la necesidad</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Planificamos el servicio</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Coordinamos cada detalle</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Acompañamos hasta destino</span>
            </div>

          </div>

        </div>
      </section>

      {/* CATAMARCA */}
      <section className="quienes-catamarca">
        <div className="quienes-container">

          <span className="quienes-label">NUESTRA TIERRA</span>

          <h2>Catamarca no es solamente nuestro destino. Es nuestra casa.</h2>

          <p>
            Desde los caminos de montaña hasta la Puna, desde los
            pueblos históricos hasta los grandes paisajes del oeste,
            conocemos una provincia que todavía tiene muchísimo por
            descubrir.
          </p>

          <p>
            Queremos que cada persona que viaje con nosotros no solo
            llegue a un lugar, sino que se lleve una experiencia y una
            mejor comprensión de Catamarca.
          </p>

          <a
            href="/guia"
            target="_blank"
            rel="noopener noreferrer"
            className="quienes-text-link"
          >
            Descubrir nuestra guía de Catamarca →
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="quienes-cta">
        <div className="quienes-container">

          <span className="quienes-label">MT TOURS & TRANSFERS</span>

          <h2>
            Hay muchos caminos.
            <br />
            Queremos acompañarte en el tuyo.
          </h2>

          <p>
            Contanos qué necesitás y te ayudamos a organizar tu
            traslado o tu próxima experiencia en Catamarca.
          </p>

          <a
            href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20realizar%20una%20consulta%20a%20MT%20Tours%20%26%20Transfers."
            target="_blank"
            rel="noopener noreferrer"
            className="quienes-cta-button"
          >
            Hablar con nosotros por WhatsApp
          </a>

        </div>
      </section>

    </div>
  );
}

export default QuienesSomos;