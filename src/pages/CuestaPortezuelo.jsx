import "../App.css"
import cuestaPortezuelo from "../assets/cuesta-portezuelo.jpg"
import portezueloCumbre from "../assets/portezuelo-cumbre.jpg"
import portezueloMirador from "../assets/portezuelo-mirador.jpeg"
import portezueloNoche from "../assets/portezuelo-noche.jpg"
import portezueloCamino from "../assets/portezuelo-camino.jpg"

function CuestaPortezuelo() {

  const title =
    "Excursión a Cuesta del Portezuelo desde Catamarca Capital | MT Tours";

  const description =
    "Excursión a la Cuesta del Portezuelo desde San Fernando del Valle de Catamarca. Miradores, paisajes de Ambato y recorrido por uno de los caminos más emblemáticos de Catamarca.";

  const canonicalUrl =
    "https://mttransfers.com/excursiones/cuesta-del-portezuelo";

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
    <div className="site">

      <header className="header">

        <div className="logo">

          <span className="logo-mark">
            MT
          </span>

          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>

        </div>


        <nav className="nav nav-desktop">

          <a href="/">
            Inicio
          </a>

          <a href="/excursiones">
            Excursiones
          </a>

          <a href="/#planifica">
            Planificá
          </a>

          <a
            href="/traslados-catamarca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transfers
          </a>

          <a href="/#guia-catamarca">
            Guía
          </a>

          <a href="/#opiniones">
            Opiniones
          </a>

        </nav>


        <a
          className="whatsapp-button"
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20una%20excursi%C3%B3n%20en%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

      </header>


      <main className="tour-detail-page">

        {/* HERO */}
        <section
          className="tour-detail-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.78) 0%,
                rgba(0, 0, 0, 0.48) 50%,
                rgba(0, 0, 0, 0.16) 100%
              ),
              url(${cuestaPortezuelo})
            `,
          }}
        >

          <div className="tour-detail-hero-content">

            <span className="section-kicker">
              VALLE CENTRAL · CATAMARCA
            </span>

            <h1>
              Excursión a la Cuesta del Portezuelo desde San Fernando del Valle de Catamarca
            </h1>

            <p>
              Descubrí uno de los caminos más emblemáticos de Catamarca
              en una excursión privada con salida desde Catamarca Capital.
            </p>

            <div className="tour-detail-meta">

              <span>
                📍 Cuesta del Portezuelo
              </span>

              <span>
                ⏱ Medio día
              </span>

              <span>
                🚘 Salida desde Catamarca Capital
              </span>

            </div>

            <a
              href="#reservar"
              className="button button-primary"
            >
              Consultar disponibilidad
            </a>

          </div>

        </section>


        {/* EXPERIENCIA */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              LA EXPERIENCIA
            </span>

            <h2>
              Cuesta del Portezuelo: miradores y paisajes cerca de Catamarca Capital
            </h2>

            <p>
              La{" "}
              <strong>
                excursión a la Cuesta del Portezuelo desde San Fernando del Valle de Catamarca
              </strong>{" "}
              permite conocer uno de los recorridos más representativos de
              la provincia. Durante el viaje vas a disfrutar caminos de
              montaña, miradores naturales y una panorámica privilegiada
              del <strong>Valle Central de Catamarca</strong>.
            </p>

            <p>
              Es una experiencia ideal para quienes disponen de medio día
              y buscan{" "}
              <strong>
                qué hacer cerca de Catamarca Capital
              </strong>{" "}
              sin realizar un recorrido de larga distancia.
            </p>

          </div>


          {/* TARJETA PRINCIPAL */}
          <aside
            className="tour-detail-card"
            id="reservar"
          >

            <span>
              CONSULTÁ TU VIAJE
            </span>

            <h3>
              Cuesta del Portezuelo
            </h3>

            <p>
              Contanos la fecha y cuántas personas viajan para ayudarte
              a organizar la experiencia.
            </p>

            <div
              style={{
                margin: "18px 0",
                lineHeight: 1.8,
              }}
            >

              <strong>
                Cuesta + Mirador · $40.000 por persona
              </strong>

              <br />

              <span>
                📍 Mirador a 25 km de Catamarca Capital
              </span>

              <br />

              <span>
                🚘 50 km aprox. de recorrido total ida y vuelta
              </span>

              <br />
              <br />

              <strong>
                Cumbre + Polo Giménez · $60.000 por persona
              </strong>

              <br />

              <span>
                📍 25 km hasta el mirador + 12 km hasta la cumbre
              </span>

              <br />

              <span>
                🚘 74 km aprox. de recorrido total ida y vuelta
              </span>

              <br />
              <br />

              <span>
                👥 Mínimo 2 pasajeros · 1 pasajero: consultar tarifa
              </span>

            </div>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Cuesta%20del%20Portezuelo."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              💬 Consultar por WhatsApp
            </a>

            <small>
              Atención personalizada · Consulta sin compromiso
            </small>

          </aside>

        </section>


        {/* OPCIONES */}
        <section className="tour-options-section">

          <div className="section-heading">

            <span className="section-kicker">
              ELEGÍ TU EXPERIENCIA
            </span>

            <h2>
              Dos formas de conocer la Cuesta del Portezuelo desde Catamarca Capital
            </h2>

            <p>
              Elegí la propuesta que mejor se adapte al tiempo que tengas
              y al tipo de experiencia que quieras disfrutar.
            </p>

          </div>


          <div className="tour-options-grid">

            {/* OPCIÓN MIRADOR */}
            <article className="tour-option-card">

              <span className="tour-option-label">
                CLÁSICA
              </span>

              <h3>
                Cuesta + Mirador
              </h3>

              <p>
                La experiencia clásica para conocer la Cuesta del Portezuelo,
                disfrutar el ascenso y realizar una parada en su tradicional
                mirador.
              </p>

              <ul>

                <li>
                  ✓ Salida desde San Fernando del Valle de Catamarca
                </li>

                <li>
                  ✓ Ascenso por la Cuesta del Portezuelo
                </li>

                <li>
                  ✓ Parada en el mirador
                </li>

                <li>
                  ✓ Tiempo para disfrutar y tomar fotografías
                </li>

                <li>
                  ✓ Regreso a Catamarca Capital
                </li>

              </ul>


              <div className="tour-option-note">

                <strong>
                  $40.000 por persona
                </strong>

                <br />

                📍 Mirador a 25 km de Catamarca Capital

                <br />

                🚘 50 km aprox. de recorrido total ida y vuelta

                <br />

                👥 Mínimo 2 pasajeros · 1 pasajero: consultar tarifa

              </div>


              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20experiencia%20Cl%C3%A1sica%20de%20Cuesta%20del%20Portezuelo%20%28Cuesta%20%2B%20Mirador%29."
                target="_blank"
                rel="noopener noreferrer"
                className="tour-option-button"
              >
                Consultar experiencia →
              </a>

            </article>


            {/* OPCIÓN CUMBRE */}
            <article className="tour-option-card tour-option-featured">

              <span className="tour-option-label">
                ⭐ EXPERIENCIA MT
              </span>

              <h3>
                Cumbre + Polo Giménez
              </h3>

              <p>
                Nuestra propuesta más completa para disfrutar la Cuesta del
                Portezuelo sin quedarnos únicamente en el mirador.
              </p>

              <ul>

                <li>
                  ✓ Todo el recorrido de la experiencia clásica
                </li>

                <li>
                  ✓ Continuación hasta la zona de la cumbre
                </li>

                <li>
                  ✓ Parada en Polo Giménez
                </li>

                <li>
                  ✓ Tiempo para descansar y disfrutar el paisaje
                </li>

                <li>
                  ✓ Opción gastronómica según disponibilidad
                </li>

                <li>
                  ✓ Posibilidad de experiencia al atardecer
                </li>

              </ul>


              <div className="tour-option-note">

                <strong>
                  $60.000 por persona
                </strong>

                <br />

                📍 25 km hasta el mirador + 12 km hasta la zona de la cumbre

                <br />

                🚘 74 km aprox. de recorrido total ida y vuelta

                <br />

                👥 Mínimo 2 pasajeros · 1 pasajero: consultar tarifa

                <br />

                Gastronomía y alojamiento sujetos a disponibilidad
                y coordinación previa.

              </div>


              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20Experiencia%20MT%20Cuesta%20del%20Portezuelo%20%2B%20Cumbre%20%2B%20Polo%20Gim%C3%A9nez."
                target="_blank"
                rel="noopener noreferrer"
                className="tour-option-button tour-option-button-featured"
              >
                Consultar experiencia completa →
              </a>

            </article>

          </div>

        </section>


        {/* ITINERARIO */}
        <section className="tour-info-section">

          <div className="tour-info-grid">

            <div className="tour-info-block">

              <span className="section-kicker">
                ITINERARIO
              </span>

              <h2>
                Itinerario de la excursión a la Cuesta del Portezuelo
              </h2>


              <div className="tour-differential">

                <strong>
                  ⭐ DIFERENCIAL MT
                </strong>

                <span>
                  No nos quedamos en el mirador: continuamos hasta la cumbre.
                </span>

              </div>


              <div className="tour-timeline">

                <div className="tour-step">

                  <span>
                    1
                  </span>

                  <div>

                    <h3>
                      Salida desde San Fernando del Valle de Catamarca
                    </h3>

                    <p>
                      Coordinamos el punto de encuentro en{" "}
                      <strong>
                        San Fernando del Valle de Catamarca
                      </strong>{" "}
                      y comenzamos el recorrido hacia El Portezuelo,
                      atravesando el Valle Central.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    2
                  </span>

                  <div>

                    <h3>
                      Mirador de la Cuesta del Portezuelo
                    </h3>

                    <p>
                      Realizamos una parada en el mirador durante el ascenso,
                      uno de los puntos clásicos para contemplar y fotografiar
                      las impresionantes vistas del Valle Central. El mirador
                      se encuentra aproximadamente a{" "}
                      <strong>
                        25 km de Catamarca Capital
                      </strong>
                      .
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    3
                  </span>

                  <div>

                    <h3>
                      Continuamos hasta la cumbre
                    </h3>

                    <p>
                      En la Experiencia MT el recorrido no termina en el
                      mirador. Continuamos el ascenso por la Cuesta del
                      Portezuelo durante aproximadamente{" "}
                      <strong>
                        12 km más
                      </strong>{" "}
                      hasta llegar a la zona de la cumbre.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    4
                  </span>

                  <div>

                    <h3>
                      Parador Polo Giménez
                    </h3>

                    <p>
                      Llegamos hasta el tradicional parador de la cumbre,
                      donde tendrás tiempo para disfrutar del paisaje y
                      descansar. Las opciones gastronómicas se coordinan
                      según disponibilidad.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    5
                  </span>

                  <div>

                    <h3>
                      Regreso a San Fernando del Valle de Catamarca
                    </h3>

                    <p>
                      Después de disfrutar la cumbre iniciamos el regreso
                      hacia la ciudad, finalizando una experiencia mucho
                      más completa de la Cuesta del Portezuelo.
                    </p>

                  </div>

                </div>

              </div>

            </div>
                        {/* INFORMACIÓN */}
            <div className="tour-includes-card">

              <span className="section-kicker">
                INFORMACIÓN
              </span>

              <h3>
                La experiencia incluye
              </h3>

              <ul>

                <li>
                  ✓ Traslado ida y vuelta
                </li>

                <li>
                  ✓ Vehículo con aire acondicionado
                </li>

                <li>
                  ✓ Conductor profesional
                </li>

                <li>
                  ✓ Seguro correspondiente al servicio
                </li>

                <li>
                  ✓ Paradas panorámicas
                </li>

                <li>
                  ✓ Atención personalizada
                </li>

              </ul>


              <h3 className="tour-second-title">
                Distancias
              </h3>

              <ul>

                <li>
                  • Mirador: aproximadamente 25 km desde Catamarca Capital
                </li>

                <li>
                  • Cuesta + Mirador: aproximadamente 50 km totales ida y vuelta
                </li>

                <li>
                  • Desde el mirador hasta la zona de la cumbre: aproximadamente 12 km
                </li>

                <li>
                  • Cumbre + Polo Giménez: aproximadamente 74 km totales ida y vuelta
                </li>

              </ul>


              <h3 className="tour-second-title">
                Tarifas
              </h3>

              <ul>

                <li>
                  <strong>
                    • Cuesta + Mirador: $40.000 por persona
                  </strong>
                </li>

                <li>
                  <strong>
                    • Cumbre + Polo Giménez: $60.000 por persona
                  </strong>
                </li>

                <li>
                  • Mínimo 2 pasajeros
                </li>

                <li>
                  • 1 pasajero: consultar tarifa
                </li>

              </ul>


              <h3 className="tour-second-title">
                Recomendamos llevar
              </h3>

              <ul>

                <li>
                  • Agua
                </li>

                <li>
                  • Protector solar
                </li>

                <li>
                  • Anteojos de sol
                </li>

                <li>
                  • Calzado cómodo
                </li>

                <li>
                  • Abrigo según la época del año
                </li>

              </ul>

            </div>

          </div>

        </section>


        {/* GALERÍA */}
        <section className="tour-gallery-section">

          <div className="section-heading">

            <span className="section-kicker">
              GALERÍA
            </span>

            <h2>
              Cuesta del Portezuelo: mirador, cumbre y Valle Central
            </h2>

            <p>
              Mirador, ascenso, cumbre y vistas del Valle Central forman
              parte de esta{" "}
              <strong>
                excursión desde Catamarca Capital
              </strong>{" "}
              por la Cuesta del Portezuelo.
            </p>

          </div>


          <div className="tour-gallery-grid tour-gallery-portezuelo">

            <figure className="tour-gallery-main">

              <img
                src={portezueloCamino}
                alt="Camino y curvas de la Cuesta del Portezuelo en Catamarca"
              />

              <figcaption>

                <strong>
                  El recorrido
                </strong>

                <span>
                  Ascenso por uno de los caminos más emblemáticos de Catamarca.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={portezueloMirador}
                alt="Mirador de la Cuesta del Portezuelo y Valle Central de Catamarca"
              />

              <figcaption>

                <strong>
                  El mirador
                </strong>

                <span>
                  Una de las grandes paradas panorámicas del recorrido,
                  aproximadamente a 25 km de Catamarca Capital.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={portezueloCumbre}
                alt="Vista desde la cumbre de la Cuesta del Portezuelo en Catamarca"
              />

              <figcaption>

                <strong>
                  La cumbre
                </strong>

                <span>
                  Continuamos aproximadamente 12 km más allá del mirador
                  para disfrutar la parte alta.
                </span>

              </figcaption>

            </figure>


            <figure className="tour-gallery-night">

              <img
                src={portezueloNoche}
                alt="Vista nocturna desde la cumbre de la Cuesta del Portezuelo"
              />

              <figcaption>

                <strong>
                  Portezuelo de noche
                </strong>

                <span>
                  Una vista diferente del Valle Central desde la zona
                  de la cumbre.
                </span>

              </figcaption>

            </figure>

          </div>

        </section>


        {/* PREGUNTAS FRECUENTES */}
        <section className="tour-faq-section">

          <div className="section-heading">

            <span className="section-kicker">
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Preguntas sobre la excursión a la Cuesta del Portezuelo
            </h2>

          </div>


          <div className="tour-faq-grid">

            <article className="tour-faq-card">

              <h3>
                ¿Cuánto cuesta la excursión a la Cuesta del Portezuelo?
              </h3>

              <p>
                La experiencia{" "}
                <strong>
                  Cuesta + Mirador cuesta $40.000 por persona
                </strong>{" "}
                y contempla aproximadamente{" "}
                <strong>
                  50 km totales ida y vuelta
                </strong>
                . La experiencia{" "}
                <strong>
                  Cumbre + Polo Giménez cuesta $60.000 por persona
                </strong>{" "}
                y contempla aproximadamente{" "}
                <strong>
                  74 km totales ida y vuelta
                </strong>
                .
              </p>

              <p>
                Ambas tarifas corresponden a un mínimo de{" "}
                <strong>
                  2 pasajeros
                </strong>
                . Para 1 pasajero, consultar tarifa.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿A qué distancia está el mirador?
              </h3>

              <p>
                El mirador de la Cuesta del Portezuelo se encuentra
                aproximadamente a{" "}
                <strong>
                  25 km de Catamarca Capital
                </strong>
                . La experiencia de ida y vuelta hasta el mirador contempla
                aproximadamente{" "}
                <strong>
                  50 km de recorrido total
                </strong>
                .
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿A qué distancia está la cumbre?
              </h3>

              <p>
                Desde el mirador continuamos aproximadamente{" "}
                <strong>
                  12 km adicionales
                </strong>{" "}
                para llegar a la zona de la cumbre y Polo Giménez. Desde
                Catamarca Capital son aproximadamente{" "}
                <strong>
                  37 km de ida
                </strong>{" "}
                y unos{" "}
                <strong>
                  74 km totales ida y vuelta
                </strong>
                .
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Desde dónde sale la excursión?
              </h3>

              <p>
                Coordinamos la salida desde{" "}
                <strong>
                  San Fernando del Valle de Catamarca
                </strong>
                , también conocida como{" "}
                <strong>
                  Catamarca Capital
                </strong>
                , o desde un punto de encuentro acordado previamente.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto dura?
              </h3>

              <p>
                La experiencia está pensada como una{" "}
                <strong>
                  excursión de medio día
                </strong>
                . El horario final puede variar según la opción elegida,
                las paradas y las condiciones del recorrido.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La excursión termina en el mirador?
              </h3>

              <p>
                Depende de la experiencia elegida. La opción{" "}
                <strong>
                  Cuesta + Mirador
                </strong>{" "}
                llega hasta el tradicional mirador. En la{" "}
                <strong>
                  Experiencia MT
                </strong>{" "}
                continuamos aproximadamente 12 km más hasta la zona de
                la cumbre y Polo Giménez.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Pueden viajar niños?
              </h3>

              <p>
                Sí. Es una experiencia apta para familias, siempre teniendo
                en cuenta las necesidades de cada pasajero.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué pasa si el clima no acompaña?
              </h3>

              <p>
                La seguridad es prioritaria. Si las condiciones climáticas
                o del camino no permiten realizar el recorrido de forma
                adecuada, coordinamos una alternativa.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La gastronomía está incluida?
              </h3>

              <p>
                No. En la experiencia hasta la cumbre podemos coordinar
                una opción gastronómica en{" "}
                <strong>
                  Polo Giménez
                </strong>{" "}
                según disponibilidad. El consumo gastronómico no está
                incluido en la tarifa de la excursión salvo que se acuerde
                previamente.
              </p>

            </article>

          </div>

        </section>


        {/* CTA FINAL */}
        <section className="tour-final-cta">

          <div className="tour-final-cta-content">

            <span className="section-kicker">
              RESERVÁ TU EXPERIENCIA
            </span>

            <h2>
              ¿Querés conocer la Cuesta del Portezuelo desde Catamarca Capital?
            </h2>

            <p>
              Salimos desde{" "}
              <strong>
                San Fernando del Valle de Catamarca
              </strong>{" "}
              para recorrer uno de los caminos de montaña más emblemáticos
              de la provincia.
            </p>

            <p>
              Podés elegir la experiencia{" "}
              <strong>
                Cuesta + Mirador por $40.000 por persona
              </strong>{" "}
              o continuar hasta la cumbre con nuestra{" "}
              <strong>
                Experiencia MT + Polo Giménez por $60.000 por persona
              </strong>
              .
            </p>

            <p>
              Ambas opciones requieren un mínimo de 2 pasajeros.
              Para 1 pasajero, consultanos la tarifa.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20organizar%20una%20excursi%C3%B3n%20a%20la%20Cuesta%20del%20Portezuelo.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-button"
            >
              💬 Consultar disponibilidad por WhatsApp
            </a>

          </div>

        </section>

      </main>

    </div>
  )
}

export default CuestaPortezuelo