import "../App.css"
import virgenRodeo from "../assets/virgen-del-rodeo.jpg"
import elRodeo from "../assets/el-rodeo.jpg"
import interiorVirgen from "../assets/interior-virgen-escalones.jpeg"
import virgenPanoramica from "../assets/virgen-rodeo-panoramica.webp"
import elRodeo2 from "../assets/el-rodeo-2.jpeg"
import elRodeo3 from "../assets/el-rodeo-3.jpeg"
import cristoRedentor from "../assets/cristo-redentor-rodeo.jpg"
import capillaVirgen from "../assets/capilla-virgen.jpeg"

function ElRodeoVirgen() {

  const title =
    "Excursión a El Rodeo desde Catamarca Capital | MT Tours";

  const description =
    "Excursión a El Rodeo desde San Fernando del Valle de Catamarca. Dique El Jumeal, Gruta de la Virgen y Camino de la Fe opcional. Tour privado por Ambato.";

  const canonicalUrl =
    "https://mttransfers.com/excursiones/el-rodeo-virgen";

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
          <span className="logo-mark">MT</span>

          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>
        </div>

        <nav className="nav nav-desktop">
          <a href="/">Inicio</a>
          <a href="/excursiones">Excursiones</a>
          <a href="/#planifica">Planificá</a>

          <a
            href="/traslados-catamarca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transfers
          </a>

          <a href="/#guia-catamarca">Guía</a>
          <a href="/#opiniones">Opiniones</a>
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
              url(${virgenRodeo})
            `,
          }}
        >

          <div className="tour-detail-hero-content">

            <span className="section-kicker">
              AMBATO · CATAMARCA
            </span>

            <h1>
              Excursión a El Rodeo desde San Fernando del Valle de Catamarca
            </h1>

            <p>
              Descubrí El Rodeo, las Sierras de Ambato y el Camino de la Fe
              en una excursión privada con salida desde Catamarca Capital.
            </p>

            <div className="tour-detail-meta">
              <span>📍 El Rodeo · Ambato</span>
              <span>⏱ 5 h aprox. · Hasta 8 h con ascenso</span>
              <span>🚘 Salida desde Catamarca Capital</span>
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
              El Rodeo, naturaleza y turismo de fe cerca de Catamarca Capital
            </h2>

            <p>
              La <strong>excursión a El Rodeo desde San Fernando del Valle de Catamarca</strong>{" "}
              combina caminos serranos, naturaleza, historia local y turismo de fe
              en uno de los paisajes más característicos de las{" "}
              <strong>Sierras de Ambato</strong>. El Rodeo se encuentra a unos{" "}
              <strong>40 km de Catamarca Capital</strong> y posee una altitud media
              cercana a <strong>1.250 m s. n. m.</strong>
            </p>

            <p>
              El recorrido base tiene una duración aproximada de{" "}
              <strong>5 horas</strong>. Si el pasajero realiza el ascenso y la visita
              completa al <strong>Camino de la Fe y la Virgen del Valle</strong>,
              la experiencia puede extenderse <strong>hasta unas 8 horas</strong>,
              ya que esta visita puede sumar alrededor de{" "}
              <strong>3 horas adicionales</strong> según horarios, modalidad de
              ascenso, cupos y tiempo de permanencia.
            </p>

            <p>
              El <strong>Camino de la Fe</strong> asciende durante casi{" "}
              <strong>6 km</strong> hasta un sector ubicado aproximadamente a{" "}
              <strong>1.660 m s. n. m.</strong>. Allí se encuentra la monumental
              imagen de la Virgen del Valle, de{" "}
              <strong>52 metros de altura total</strong>, junto a un mirador
              panorámico que permite contemplar Capital, La Puerta, El Rodeo
              y Las Juntas.
            </p>

          </div>


          {/* TARJETA DE RESERVA */}
          <aside
            className="tour-detail-card"
            id="reservar"
          >

            <span>CONSULTÁ TU VIAJE</span>

            <h3>
              El Rodeo + Virgen del Valle
            </h3>

            <p>
              Contanos la fecha y cuántas personas viajan para organizar
              la modalidad de recorrido y confirmar el acceso al Camino de la Fe.
            </p>

            <div
              style={{
                margin: "18px 0",
                lineHeight: 1.8,
              }}
            >

              <strong>
                El Rodeo · $90.000 por persona
              </strong>

              <br />

              <span>
                ⏱ 5 h aprox. · recorrido base
              </span>

              <br />
              <br />

              <strong>
                El Rodeo + Camino de la Fe · Virgen Más Alta del Mundo ·
                $110.000 por persona
              </strong>

              <br />

              <span>
                ⏱ Hasta 8 h aprox. · incluye tiempo de espera para la
                visita a la Virgen
              </span>

              <br />
              <br />

              <span>
                👥 Mínimo 2 pasajeros · 1 pasajero: consultar tarifa
              </span>

              <br />

              <span>
                📍 Salida desde Catamarca Capital
              </span>

            </div>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20El%20Rodeo%20%2B%20Virgen%20del%20Valle."
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


        {/* ITINERARIO */}
        <section className="tour-info-section">

          <div className="tour-info-grid">

            <div className="tour-info-block">

              <span className="section-kicker">
                ITINERARIO
              </span>

              <h2>
                Itinerario de la excursión a El Rodeo desde Catamarca Capital
              </h2>

              <div className="tour-timeline">

                <div className="tour-step">
                  <span>1</span>

                  <div>
                    <h3>
                      Salida desde San Fernando del Valle de Catamarca
                    </h3>

                    <p>
                      Comenzamos la excursión desde{" "}
                      <strong>San Fernando del Valle de Catamarca</strong>{" "}
                      y nos dirigimos hacia el departamento Ambato por la ruta
                      serrana en dirección a El Rodeo.
                    </p>
                  </div>
                </div>


                <div className="tour-step">
                  <span>2</span>

                  <div>
                    <h3>Dique El Jumeal</h3>

                    <p>
                      Antes de internarnos en las Sierras de Ambato realizamos
                      una parada en el <strong>Dique El Jumeal</strong>, uno de
                      los paseos más conocidos de Catamarca Capital. Es un
                      excelente punto para comenzar la experiencia con vistas
                      panorámicas y fotografías.
                    </p>
                  </div>
                </div>


                <div className="tour-step">
                  <span>3</span>

                  <div>
                    <h3>
                      Gruta de la Virgen del Valle
                    </h3>

                    <p>
                      Continuamos hacia la{" "}
                      <strong>Gruta de la Virgen del Valle</strong>, un lugar
                      profundamente ligado a la devoción y a la historia
                      religiosa de Catamarca. Realizamos una parada para conocer
                      el santuario antes de continuar hacia El Rodeo.
                    </p>
                  </div>
                </div>


                <div className="tour-step">
                  <span>4</span>

                  <div>
                    <h3>
                      Camino hacia El Rodeo
                    </h3>

                    <p>
                      Disfrutamos el cambio de paisaje mientras ascendemos hacia
                      una de las villas serranas más conocidas de Catamarca.
                    </p>
                  </div>
                </div>


                <div className="tour-step">
                  <span>5</span>

                  <div>
                    <h3>El Rodeo</h3>

                    <p>
                      Llegamos a <strong>El Rodeo, Catamarca</strong>, una de las
                      villas serranas más tradicionales de Ambato. Recorremos la
                      localidad, disfrutamos su entorno natural y conocemos
                      algunos de sus principales puntos de interés.
                    </p>
                  </div>
                </div>


                <div className="tour-step">
                  <span>6</span>

                  <div>
                    <h3>
                      Camino de la Fe
                    </h3>

                    <p>
                      Continuamos hacia el acceso al complejo de la Virgen del
                      Valle, ubicado en la zona alta de la montaña.
                    </p>
                  </div>
                </div>


                <div className="tour-step">
                  <span>7</span>

                  <div>
                    <h3>
                      Virgen del Valle
                    </h3>

                    <p>
                      Visitamos la imponente imagen de 52 metros de altura y,
                      según condiciones de acceso y horarios, disfrutamos del
                      complejo y sus vistas panorámicas.
                    </p>
                  </div>
                </div>


                <div className="tour-step">
                  <span>8</span>

                  <div>
                    <h3>
                      Regreso a San Fernando del Valle de Catamarca
                    </h3>

                    <p>
                      Después de disfrutar la montaña y el complejo iniciamos
                      el regreso hacia la ciudad.
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
                <li>✓ Traslado ida y vuelta</li>
                <li>✓ Vehículo con aire acondicionado</li>
                <li>✓ Conductor profesional</li>
                <li>✓ Seguro correspondiente al servicio</li>
                <li>✓ Paradas panorámicas</li>
                <li>✓ Atención personalizada</li>
              </ul>


              <h3 className="tour-second-title">
                Duración
              </h3>

              <ul>
                <li>
                  • Recorrido base: 5 horas aprox.
                </li>

                <li>
                  • Con ascenso y visita a la Virgen: hasta 8 horas aprox.
                </li>

                <li>
                  • El ascenso puede sumar alrededor de 3 horas
                </li>
              </ul>


              <h3 className="tour-second-title">
                Horarios de referencia · a confirmar
              </h3>

              <ul>
                <li>
                  • Jueves a domingos y feriados nacionales
                </li>

                <li>
                  • Apertura: 09:30 hs
                </li>

                <li>
                  • Cierre: 20:00 hs
                </li>

                <li>
                  • Último ascenso en combi: 18:00 hs
                </li>

                <li>
                  • Ingreso peatonal: 09:30 a 15:00 hs
                </li>

                <li>
                  <strong>
                    • Días, horarios, cupos y modalidad de ascenso se
                    confirman antes de la excursión.
                  </strong>
                </li>
              </ul>


              <h3 className="tour-second-title">
                Recomendaciones
              </h3>

              <ul>
                <li>• Calzado cómodo</li>
                <li>• Agua y protector solar</li>
                <li>• Abrigo según la época del año</li>
              </ul>

            </div>

          </div>

        </section>


        {/* CONTENIDO SEO */}
        <section className="story-section">

          <div
            className="section-heading"
            style={{
              textAlign: "left",
              maxWidth: "980px",
              margin: "0 auto 34px",
            }}
          >

            <span className="section-kicker">
              EL RODEO · UNA ESCAPADA A LAS SIERRAS DE AMBATO
            </span>

            <h2>
              De San Fernando del Valle de Catamarca a El Rodeo
            </h2>

            <p>
              Viajar a{" "}
              <strong>
                El Rodeo desde San Fernando del Valle de Catamarca
              </strong>{" "}
              significa dejar atrás el paisaje urbano de{" "}
              <strong>Catamarca Capital</strong> y comenzar a internarse en
              las <strong>Sierras de Ambato</strong>. A medida que avanzamos
              por la Ruta Provincial 4 cambia el entorno: aparecen las
              quebradas, la vegetación serrana, los cursos de agua y las
              vistas abiertas hacia las montañas.
            </p>

            <p>
              A unos <strong>40 km de Catamarca Capital</strong> se encuentra
              esta tradicional villa turística, situada a una altitud media
              cercana a los <strong>1.250 m s. n. m.</strong>. Su ambiente
              serrano, sus calles tranquilas y el contraste con las zonas más
              áridas de la provincia hacen que sea una de las alternativas
              clásicas para quienes buscan{" "}
              <strong>
                qué hacer cerca de San Fernando del Valle de Catamarca
              </strong>{" "}
              sin realizar un viaje de larga distancia.
            </p>

            <p>
              Durante la excursión no buscamos solamente llegar a un punto y
              regresar. El recorrido permite disfrutar el camino, realizar
              paradas panorámicas y conocer el entorno de{" "}
              <strong>El Rodeo</strong>, una localidad vinculada
              históricamente al descanso y al turismo de montaña. Según el
              recorrido del día podemos apreciar distintos sectores de la
              villa y sus paisajes, además de puntos religiosos y naturales
              característicos de Ambato.
            </p>

            <p>
              Para quienes quieran ampliar la experiencia ofrecemos la
              modalidad{" "}
              <strong>
                El Rodeo + Camino de la Fe · Virgen Más Alta del Mundo
              </strong>
              . Esta opción incorpora el tiempo necesario para realizar el
              ascenso y la visita al complejo de la Virgen cuando se encuentre
              habilitado. Por ese motivo la excursión base dura unas{" "}
              <strong>5 horas</strong>, mientras que la modalidad con espera
              para el ascenso puede extenderse hasta aproximadamente{" "}
              <strong>8 horas</strong>.
            </p>

            <p>
              Es una propuesta ideal para combinar{" "}
              <strong>turismo en Catamarca</strong>, montaña, fotografía,
              paisajes y cultura local en una{" "}
              <strong>excursión desde Catamarca Capital</strong>. La
              disponibilidad del Camino de la Fe se confirma previamente para
              organizar el recorrido de acuerdo con los horarios y condiciones
              vigentes del complejo.
            </p>

          </div>


          {/* TARJETAS */}
          <div className="story-grid">

            <article className="story-card">

              <img
                src={elRodeo}
                alt="El Rodeo Catamarca excursión desde Catamarca Capital"
              />

              <div className="story-card-content">

                <span>AMBATO</span>

                <h3>
                  El Rodeo, Catamarca
                </h3>

                <p>
                  El Rodeo forma parte de la región serrana de Ambato, una zona
                  marcada por paisajes verdes, cauces de agua, tradición y
                  villas de descanso. Su entorno contrasta con los paisajes más
                  áridos de otras regiones de Catamarca.
                </p>

                <a
                  href="/guia/el-rodeo-las-juntas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="excursion-guide-link"
                >
                  Ver guía completa de El Rodeo y Las Juntas →
                </a>

              </div>

            </article>


            <article className="story-card">

              <img
                src={virgenRodeo}
                alt="Camino de la Fe y Virgen del Valle en El Rodeo Catamarca"
              />

              <div className="story-card-content">

                <span>
                  CAMINO DE LA FE
                </span>

                <h3>
                  Virgen Más Alta del Mundo
                </h3>

                <p>
                  La imagen de la Virgen del Valle alcanza{" "}
                  <strong>52 metros de altura total</strong>. Está ubicada en
                  la cima del cerro y se convirtió en uno de los grandes puntos
                  de turismo religioso de Catamarca.
                </p>

              </div>

            </article>


            <article className="story-card">

              <img
                src={interiorVirgen}
                alt="Mirador interior de la Virgen del Valle en El Rodeo"
              />

              <div className="story-card-content">

                <span>
                  MIRADOR INTERIOR
                </span>

                <h3>
                  117 escalones hacia las vistas
                </h3>

                <p>
                  En el interior del complejo hay un mirador al que se accede
                  mediante <strong>117 escalones</strong>. Desde allí, la
                  experiencia combina la dimensión religiosa con vistas del
                  paisaje serrano.
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* GALERÍA */}
        <section className="tour-gallery-section">

          <div className="section-heading">

            <span className="section-kicker">
              POSTALES DE LA EXPERIENCIA
            </span>

            <h2>
              El Rodeo y las Sierras de Ambato, Catamarca
            </h2>

            <p>
              Montañas, caminos serranos, paisajes verdes y algunos de los
              lugares que forman parte de esta{" "}
              <strong>excursión desde Catamarca Capital</strong> hacia Ambato.
            </p>

          </div>


          <div className="tour-gallery-grid adobe-gallery-grid">

            <figure>

              <img
                src={virgenPanoramica}
                alt="Virgen del Valle Camino de la Fe El Rodeo Catamarca"
              />

              <figcaption>

                <strong>
                  Virgen del Valle
                </strong>

                <span>
                  Una imagen monumental rodeada por las sierras de Ambato.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={elRodeo2}
                alt="El Rodeo Catamarca paisaje de las Sierras de Ambato"
              />

              <figcaption>

                <strong>
                  El Rodeo
                </strong>

                <span>
                  Una villa serrana rodeada de montañas y vegetación.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={elRodeo3}
                alt="Vista aérea de El Rodeo en Catamarca"
              />

              <figcaption>

                <strong>
                  Entre las sierras
                </strong>

                <span>
                  El paisaje verde de Ambato acompaña gran parte del recorrido.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={virgenRodeo}
                alt="Camino de la Fe excursión desde Catamarca Capital"
              />

              <figcaption>

                <strong>
                  Camino de la Fe
                </strong>

                <span>
                  El ascenso ofrece vistas panorámicas de las montañas.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={cristoRedentor}
                alt="Cristo Redentor El Rodeo Catamarca"
              />

              <figcaption>

                <strong>
                  Cristo Redentor
                </strong>

                <span>
                  Otro de los puntos religiosos rodeados por el paisaje serrano.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={capillaVirgen}
                alt="Capilla del complejo Virgen del Valle Camino de la Fe"
              />

              <figcaption>

                <strong>
                  Capilla interior
                </strong>

                <span>
                  Un espacio de recogimiento dentro del complejo.
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
              Preguntas sobre la excursión a El Rodeo desde Catamarca Capital
            </h2>

          </div>


          <div className="tour-faq-grid">

            <article className="tour-faq-card">

              <h3>
                ¿Cuánto cuesta la excursión a El Rodeo?
              </h3>

              <p>
                El recorrido base tiene un valor de{" "}
                <strong>$90.000 por persona</strong>. La modalidad{" "}
                <strong>
                  El Rodeo + Camino de la Fe · Virgen Más Alta del Mundo
                </strong>
                , con tiempo de espera para realizar la visita a la Virgen,
                cuesta <strong>$110.000 por persona</strong>. Las tarifas
                corresponden a un mínimo de 2 pasajeros. Para 1 pasajero,
                consultar.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Desde dónde sale la excursión a El Rodeo?
              </h3>

              <p>
                Coordinamos la salida desde{" "}
                <strong>San Fernando del Valle de Catamarca</strong>, también
                conocida como <strong>Catamarca Capital</strong>, o desde un
                punto de encuentro acordado previamente.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto dura la excursión?
              </h3>

              <p>
                El recorrido base dura aproximadamente{" "}
                <strong>5 horas</strong>. Si realizamos el ascenso y la visita
                completa a la Virgen del Valle, puede extenderse hasta unas{" "}
                <strong>8 horas</strong>, porque esta parte puede sumar
                alrededor de 3 horas.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se puede subir al mirador interior?
              </h3>

              <p>
                El acceso depende de los horarios y condiciones del complejo.
                Si está habilitado, el mirador interior se alcanza mediante
                escaleras.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La excursión a El Rodeo es apta para familias?
              </h3>

              <p>
                Sí. Es una experiencia apta para familias, teniendo en cuenta
                las necesidades de cada pasajero y la caminata que pueda
                realizarse.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué recomendamos llevar?
              </h3>

              <p>
                Agua, protector solar, calzado cómodo, anteojos de sol y abrigo
                según la época del año.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué días se puede visitar la Virgen de El Rodeo?
              </h3>

              <p>
                Los horarios de referencia informan apertura de jueves a
                domingos y feriados nacionales. Como pueden existir cambios
                operativos, climáticos o de capacidad,{" "}
                <strong>
                  confirmamos días y horarios antes del viaje
                </strong>
                .
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La visita a la Virgen está siempre disponible?
              </h3>

              <p>
                No necesariamente. Como referencia, el complejo informa
                apertura de jueves a domingos y feriados nacionales de 09:30 a
                20:00 hs, último ascenso en combi a las 18:00 hs e ingreso
                peatonal de 09:30 a 15:00 hs.{" "}
                <strong>
                  Estos horarios y la disponibilidad se confirman antes de
                  realizar la excursión.
                </strong>
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
              ¿Querés conocer El Rodeo desde Catamarca Capital?
            </h2>

            <p>
              Salimos desde{" "}
              <strong>San Fernando del Valle de Catamarca</strong> para
              disfrutar una experiencia que combina{" "}
              <strong>Dique El Jumeal</strong>,{" "}
              <strong>Gruta de la Virgen del Valle</strong>,{" "}
              <strong>El Rodeo</strong>, las{" "}
              <strong>Sierras de Ambato</strong> y, de manera opcional, el{" "}
              <strong>
                Camino de la Fe y la Virgen Más Alta del Mundo
              </strong>
              .
            </p>

            <p>
              Contanos la fecha y cuántas personas viajan para organizar tu
              excursión privada por Catamarca.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20por%20la%20excursi%C3%B3n%20El%20Rodeo%20%2B%20Virgen%20del%20Valle.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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

export default ElRodeoVirgen