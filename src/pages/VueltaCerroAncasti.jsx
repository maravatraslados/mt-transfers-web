import "../App.css"
import cuestaTintigasta from "../assets/cuesta-tintigasta.jpg"
import guayamba from "../assets/guayamba.jpg"
import guayamba2 from "../assets/guayamba-2.webp"
import diqueIpizca from "../assets/dique-ipizca.jpg"
import diqueIpizca2 from "../assets/dique-ipizca-2.jpg"
import cuestaPortezuelo from "../assets/cuesta-portezuelo.jpg"
import laTunita from "../assets/la-tunita.jpg"

function VueltaCerroAncasti() {

  const title =
    "Vuelta al Cerro Ancasti desde Catamarca Capital | MT Tours";

  const description =
    "Excursiones a Ancasti desde San Fernando del Valle de Catamarca. Vuelta al Cerro Ancasti, Cuesta del Portezuelo, Guayamba, Dique de Ipizca y opción de visitar el Parque Arqueológico La Tunita.";

  const canonicalUrl =
    "https://mttransfers.com/excursiones/vuelta-al-cerro-ancasti";

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

            <strong>
              TOURS & TRANSFERS
            </strong>

            <small>
              Catamarca, Argentina
            </small>

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
              url(${cuestaTintigasta})
            `,
          }}
        >

          <div className="tour-detail-hero-content">

            <span className="section-kicker">
              SIERRA DE ANCASTI · CATAMARCA
            </span>

            <h1>
              Vuelta al Cerro Ancasti desde San Fernando del Valle de Catamarca
            </h1>

            <p>
              Descubrí la Sierra de Ancasti en una excursión privada
              de día completo entre cuestas, pueblos serranos, miradores
              y paisajes completamente diferentes.
            </p>


            <div className="tour-detail-meta">

              <span>
                📍 Sierra de Ancasti
              </span>

              <span>
                ⏱ Día completo
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
              Excursiones a la Sierra de Ancasti desde Catamarca Capital
            </h2>

            <p>
              La{" "}
              <strong>
                Sierra de Ancasti
              </strong>{" "}
              permite descubrir algunos de los paisajes más variados del
              este catamarqueño. El recorrido combina caminos de montaña,
              miradores, pequeñas localidades y ambientes que cambian a
              medida que atravesamos la sierra.
            </p>

            <p>
              Desde{" "}
              <strong>
                San Fernando del Valle de Catamarca
              </strong>{" "}
              ofrecemos dos alternativas de día completo: la{" "}
              <strong>
                Vuelta al Cerro Ancasti
              </strong>{" "}
              y una experiencia hacia{" "}
              <strong>
                Ancasti y el Dique de Ipizca
              </strong>
              .
            </p>

            <p>
              Para quienes quieran sumar una experiencia arqueológica,
              también existe la posibilidad de coordinar una visita al{" "}
              <strong>
                Parque Arqueológico La Tunita
              </strong>
              , sujeta a reserva previa y contratación del servicio
              específico necesario para acceder al sitio.
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
              Sierra de Ancasti
            </h3>

            <p>
              Elegí la experiencia que querés realizar y contanos
              la fecha y cuántas personas viajan.
            </p>


            <div
              style={{
                margin: "18px 0",
                lineHeight: 1.8,
              }}
            >

              <strong>
                Vuelta al Cerro Ancasti · $140.000 por persona
              </strong>

              <br />

              <span>
                🚘 Circuito completo por la Sierra de Ancasti
              </span>

              <br />
              <br />

              <strong>
                Ancasti Día Completo · $190.000 por persona
              </strong>

              <br />

              <span>
                📍 Ancasti + Dique de Ipizca
              </span>

              <br />
              <br />

              <span>
                👥 Mínimo 2 pasajeros · 1 pasajero: consultar tarifa
              </span>

            </div>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20una%20excursi%C3%B3n%20a%20la%20Sierra%20de%20Ancasti."
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
              Dos formas de descubrir la Sierra de Ancasti
            </h2>

            <p>
              Dos excursiones de día completo con salida desde
              Catamarca Capital y recorridos diferentes.
            </p>

          </div>


          <div className="tour-options-grid">


            {/* OPCIÓN 1 */}
            <article className="tour-option-card">

              <span className="tour-option-label">
                CIRCUITO PANORÁMICO
              </span>

              <h3>
                Vuelta al Cerro Ancasti
              </h3>

              <p>
                Una travesía circular para atravesar la Sierra de Ancasti
                y descubrir cómo cambia el paisaje entre el Valle Central
                y el este de Catamarca.
              </p>

              <ul>

                <li>
                  ✓ Salida desde San Fernando del Valle de Catamarca
                </li>

                <li>
                  ✓ Cuesta del Portezuelo
                </li>

                <li>
                  ✓ Mirador y zona de la cumbre
                </li>

                <li>
                  ✓ Cuesta de Tintigasta
                </li>

                <li>
                  ✓ Guayamba
                </li>

                <li>
                  ✓ Los Altos
                </li>

                <li>
                  ✓ Regreso a Catamarca Capital
                </li>

              </ul>


              <div className="tour-option-note">

                <strong>
                  $140.000 por persona
                </strong>

                <br />

                ⏱ Excursión de día completo

                <br />

                👥 Mínimo 2 pasajeros · 1 pasajero: consultar tarifa

              </div>


              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20la%20Vuelta%20al%20Cerro%20Ancasti%20de%20%24140.000%20por%20persona."
                target="_blank"
                rel="noopener noreferrer"
                className="tour-option-button"
              >
                Consultar Vuelta al Cerro →
              </a>

            </article>


            {/* OPCIÓN 2 */}
            <article className="tour-option-card tour-option-featured">

              <span className="tour-option-label">
                ⭐ EXPERIENCIA MT
              </span>

              <h3>
                Ancasti Día Completo
              </h3>

              <p>
                Una jornada dedicada a conocer el corazón de Ancasti,
                combinando paisajes serranos, localidades del departamento
                y el Dique de Ipizca.
              </p>

              <ul>

                <li>
                  ✓ Salida desde San Fernando del Valle de Catamarca
                </li>

                <li>
                  ✓ Cuesta del Portezuelo
                </li>

                <li>
                  ✓ Recorrido hacia Ancasti
                </li>

                <li>
                  ✓ Villa de Ancasti
                </li>

                <li>
                  ✓ Dique de Ipizca
                </li>

                <li>
                  ✓ Paradas panorámicas
                </li>

                <li>
                  ✓ Regreso a Catamarca Capital
                </li>

              </ul>


              <div className="tour-option-note">

                <strong>
                  $190.000 por persona
                </strong>

                <br />

                ⏱ Excursión de día completo

                <br />

                👥 Mínimo 2 pasajeros · 1 pasajero: consultar tarifa

                <br />

                🍽️ Comidas y consumos no incluidos.

              </div>


              <a
                href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20Ancasti%20D%C3%ADa%20Completo%20de%20%24190.000%20por%20persona."
                target="_blank"
                rel="noopener noreferrer"
                className="tour-option-button tour-option-button-featured"
              >
                Consultar Ancasti Día Completo →
              </a>

            </article>

          </div>

        </section>


        {/* LA TUNITA */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              EXPERIENCIA OPCIONAL
            </span>

            <h2>
              Parque Arqueológico La Tunita
            </h2>

            <p>
              Para quienes quieran sumar una experiencia cultural y
              arqueológica al recorrido por Ancasti, podemos ayudar a
              coordinar previamente una visita al{" "}
              <strong>
                Parque Arqueológico La Tunita
              </strong>
              .
            </p>

            <p>
              El sitio permite conocer un extraordinario patrimonio
              arqueológico en plena Sierra de Ancasti, con pinturas
              rupestres conservadas en aleros naturales y un entorno
              característico de esta región de Catamarca.
            </p>


            <div className="tour-differential">

              <strong>
                IMPORTANTE
              </strong>

              <span>
                La visita a La Tunita es opcional y requiere coordinación
                y reserva previa. Para acceder al sitio debe contratarse
                un servicio de vehículo 4x4 específico.
              </span>

            </div>


            <p>
              <strong>
                El servicio 4x4 para La Tunita no está incluido en la
                tarifa de $190.000 por persona de Ancasti Día Completo.
              </strong>{" "}
              Tampoco se consideran incluidos los servicios propios del
              parque, guías, entradas o consumos que pudieran corresponder.
              Estos servicios se coordinan y cotizan por separado.
            </p>

          </div>


          <aside className="tour-detail-card">

            <img
              src={laTunita}
              alt="Pinturas rupestres del Parque Arqueológico La Tunita en Ancasti Catamarca"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "14px",
                marginBottom: "18px",
              }}
            />

            <span>
              LA TUNITA
            </span>

            <h3>
              Patrimonio arqueológico de Ancasti
            </h3>

            <p>
              Una experiencia opcional para sumar al recorrido,
              sujeta a reserva y disponibilidad.
            </p>

            <small>
              4x4 y servicios del parque no incluidos
            </small>

          </aside>

        </section>


        {/* ITINERARIO VUELTA AL CERRO */}
        <section className="tour-info-section">

          <div className="tour-info-grid">

            <div className="tour-info-block">

              <span className="section-kicker">
                ITINERARIO
              </span>

              <h2>
                Vuelta al Cerro Ancasti: recorrido panorámico
              </h2>


              <div className="tour-differential">

                <strong>
                  ⭐ DIFERENCIAL MT
                </strong>

                <span>
                  No hacemos simplemente ida y vuelta: atravesamos la
                  Sierra de Ancasti realizando un circuito completo.
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
                      Comenzamos la jornada desde Catamarca Capital y
                      nos dirigimos hacia la Cuesta del Portezuelo.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    2
                  </span>

                  <div>

                    <h3>
                      Cuesta del Portezuelo
                    </h3>

                    <p>
                      Ascendemos por uno de los caminos de montaña más
                      emblemáticos de Catamarca, realizando paradas para
                      disfrutar las vistas panorámicas del Valle Central.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    3
                  </span>

                  <div>

                    <h3>
                      Cumbre de la Sierra de Ancasti
                    </h3>

                    <p>
                      Continuamos más allá del mirador hasta la zona alta
                      de la sierra, donde comienza a transformarse el paisaje.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    4
                  </span>

                  <div>

                    <h3>
                      Cuesta de Tintigasta
                    </h3>

                    <p>
                      Atravesamos uno de los sectores más atractivos de
                      la Sierra de Ancasti, descendiendo hacia la vertiente
                      oriental.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    5
                  </span>

                  <div>

                    <h3>
                      Guayamba
                    </h3>

                    <p>
                      Llegamos a Guayamba, donde encontramos un ambiente
                      mucho más verde que contrasta con los paisajes del
                      Valle Central.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    6
                  </span>

                  <div>

                    <h3>
                      Los Altos
                    </h3>

                    <p>
                      Continuamos hacia Los Altos para completar la
                      travesía por el este provincial antes de iniciar
                      el regreso hacia Catamarca Capital.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    7
                  </span>

                  <div>

                    <h3>
                      Regreso a Catamarca Capital
                    </h3>

                    <p>
                      Cerramos el circuito regresando a{" "}
                      <strong>
                        San Fernando del Valle de Catamarca
                      </strong>{" "}
                      después de una jornada completa recorriendo la
                      Sierra de Ancasti.
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
                Tarifas
              </h3>

              <ul>

                <li>
                  <strong>
                    • Vuelta al Cerro Ancasti: $140.000 por persona
                  </strong>
                </li>

                <li>
                  <strong>
                    • Ancasti Día Completo: $190.000 por persona
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
                No incluido
              </h3>

              <ul>

                <li>
                  • Comidas y bebidas
                </li>

                <li>
                  • Gastos personales
                </li>

                <li>
                  • Servicio 4x4 para acceder a La Tunita
                </li>

                <li>
                  • Guías, entradas o servicios propios de La Tunita
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
                  • Abrigo
                </li>

                <li>
                  • Cámara o celular con batería
                </li>

              </ul>

            </div>

          </div>

        </section>


        {/* ANCASTI + DIQUE */}
        <section className="tour-info-section">

          <div className="tour-info-grid">

            <div className="tour-info-block">

              <span className="section-kicker">
                ANCASTI DÍA COMPLETO
              </span>

              <h2>
                Ancasti y Dique de Ipizca desde Catamarca Capital
              </h2>

              <p>
                Esta segunda propuesta está pensada para quienes quieren
                dedicar una jornada completa a conocer{" "}
                <strong>
                  Ancasti y el Dique de Ipizca
                </strong>
                , recorriendo paisajes serranos y algunos de los principales
                atractivos de esta zona de Catamarca.
              </p>


              <div className="tour-differential">

                <strong>
                  ⭐ EXPERIENCIA MT
                </strong>

                <span>
                  Una jornada completa desde San Fernando del Valle de
                  Catamarca hacia el corazón de Ancasti.
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
                      Comenzamos temprano desde Catamarca Capital para
                      aprovechar la jornada completa.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    2
                  </span>

                  <div>

                    <h3>
                      Cuesta del Portezuelo
                    </h3>

                    <p>
                      Iniciamos el ascenso por la Cuesta del Portezuelo,
                      realizando paradas panorámicas para contemplar el
                      Valle Central.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    3
                  </span>

                  <div>

                    <h3>
                      Sierra de Ancasti
                    </h3>

                    <p>
                      Continuamos atravesando la sierra y disfrutando
                      los cambios de paisaje característicos de esta
                      región de Catamarca.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    4
                  </span>

                  <div>

                    <h3>
                      Villa de Ancasti
                    </h3>

                    <p>
                      Llegamos a Villa de Ancasti, cabecera departamental,
                      donde realizamos una parada dentro del recorrido.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    5
                  </span>

                  <div>

                    <h3>
                      Dique de Ipizca
                    </h3>

                    <p>
                      Visitamos el{" "}
                      <strong>
                        Dique de Ipizca
                      </strong>
                      , rodeado por el paisaje serrano. Realizamos una
                      parada para descansar, recorrer el sector y tomar
                      fotografías.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    6
                  </span>

                  <div>

                    <h3>
                      Regreso a Catamarca Capital
                    </h3>

                    <p>
                      Luego de completar la jornada iniciamos el regreso
                      hacia{" "}
                      <strong>
                        San Fernando del Valle de Catamarca
                      </strong>
                      .
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="tour-includes-card">

              <span className="section-kicker">
                ANCASTI
              </span>

              <h3>
                Día Completo
              </h3>

              <ul>

                <li>
                  ✓ Cuesta del Portezuelo
                </li>

                <li>
                  ✓ Sierra de Ancasti
                </li>

                <li>
                  ✓ Villa de Ancasti
                </li>

                <li>
                  ✓ Dique de Ipizca
                </li>

                <li>
                  ✓ Paradas panorámicas
                </li>

                <li>
                  ✓ Traslado ida y vuelta
                </li>

              </ul>


              <h3 className="tour-second-title">
                Tarifa
              </h3>

              <p>
                <strong>
                  $190.000 por persona
                </strong>
              </p>

              <p>
                Mínimo 2 pasajeros.
                <br />
                1 pasajero: consultar tarifa.
              </p>


              <h3 className="tour-second-title">
                La Tunita
              </h3>

              <p>
                La visita al Parque Arqueológico La Tunita puede
                coordinarse como experiencia opcional.
              </p>

              <p>
                <strong>
                  El traslado específico en vehículo 4x4 no está incluido
                  en los $190.000 por persona.
                </strong>
              </p>

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
              Sierra de Ancasti: cuestas, diques y patrimonio arqueológico
            </h2>

            <p>
              Dos experiencias para descubrir diferentes paisajes del
              este de Catamarca, desde caminos de montaña hasta el
              patrimonio arqueológico de Ancasti.
            </p>

          </div>


          <div className="tour-gallery-grid tour-gallery-portezuelo">

            <figure className="tour-gallery-main">

              <img
                src={cuestaTintigasta}
                alt="Cuesta de Tintigasta en la Sierra de Ancasti Catamarca"
              />

              <figcaption>

                <strong>
                  Cuesta de Tintigasta
                </strong>

                <span>
                  Uno de los tramos destacados de la Vuelta al Cerro Ancasti.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={diqueIpizca}
                alt="Dique de Ipizca en Ancasti Catamarca"
              />

              <figcaption>

                <strong>
                  Dique de Ipizca
                </strong>

                <span>
                  Sierras, agua y tranquilidad en la experiencia
                  Ancasti Día Completo.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={cuestaPortezuelo}
                alt="Cuesta del Portezuelo camino hacia la Sierra de Ancasti"
              />

              <figcaption>

                <strong>
                  Cuesta del Portezuelo
                </strong>

                <span>
                  Una de las grandes puertas de entrada a la Sierra de Ancasti.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={guayamba2}
                alt="Paisaje de Guayamba durante la Vuelta al Cerro Ancasti"
              />

              <figcaption>

                <strong>
                  Guayamba
                </strong>

                <span>
                  Una de las zonas más verdes del circuito por la
                  Sierra de Ancasti.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={guayamba}
                alt="Guayamba en el departamento El Alto Catamarca"
              />

              <figcaption>

                <strong>
                  Paisajes del este
                </strong>

                <span>
                  El cambio de vegetación es uno de los grandes atractivos
                  de la vuelta completa.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={diqueIpizca2}
                alt="Paisaje del Dique de Ipizca en Ancasti"
              />

              <figcaption>

                <strong>
                  Ipizca
                </strong>

                <span>
                  Una parada para disfrutar del entorno natural de Ancasti.
                </span>

              </figcaption>

            </figure>


            <figure className="tour-gallery-night">

              <img
                src={laTunita}
                alt="Pinturas rupestres del Parque Arqueológico La Tunita en Ancasti Catamarca"
              />

              <figcaption>

                <strong>
                  Parque Arqueológico La Tunita
                </strong>

                <span>
                  Patrimonio arqueológico que puede incorporarse como
                  experiencia opcional con coordinación previa.
                </span>

              </figcaption>

            </figure>

          </div>

        </section>


        {/* FAQ */}
        <section className="tour-faq-section">

          <div className="section-heading">

            <span className="section-kicker">
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Preguntas sobre las excursiones a Ancasti desde Catamarca Capital
            </h2>

          </div>


          <div className="tour-faq-grid">


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto cuesta la Vuelta al Cerro Ancasti?
              </h3>

              <p>
                La{" "}
                <strong>
                  Vuelta al Cerro Ancasti cuesta $140.000 por persona
                </strong>
                . La tarifa corresponde a un mínimo de 2 pasajeros.
                Para 1 pasajero, consultar tarifa.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto cuesta Ancasti Día Completo?
              </h3>

              <p>
                La excursión{" "}
                <strong>
                  Ancasti Día Completo cuesta $190.000 por persona
                </strong>{" "}
                e incluye el traslado y recorrido hacia Ancasti y
                el Dique de Ipizca.
              </p>

              <p>
                La tarifa corresponde a un mínimo de 2 pasajeros.
                Para 1 pasajero, consultar tarifa.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuál es la diferencia entre las dos excursiones?
              </h3>

              <p>
                La{" "}
                <strong>
                  Vuelta al Cerro Ancasti
                </strong>{" "}
                es un circuito panorámico que atraviesa la sierra pasando
                por Cuesta del Portezuelo, Tintigasta, Guayamba y Los Altos.
              </p>

              <p>
                <strong>
                  Ancasti Día Completo
                </strong>{" "}
                está orientada a conocer Villa de Ancasti y el Dique de
                Ipizca, con mayor tiempo destinado a esa zona.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Desde dónde salen las excursiones?
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
                ¿Cuánto duran?
              </h3>

              <p>
                Ambas propuestas son{" "}
                <strong>
                  excursiones de día completo
                </strong>
                . La duración final puede variar según las paradas,
                condiciones del camino y desarrollo del recorrido.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se puede visitar el Parque Arqueológico La Tunita?
              </h3>

              <p>
                Sí. La visita a{" "}
                <strong>
                  La Tunita
                </strong>{" "}
                puede coordinarse previamente como una experiencia
                opcional dentro de la visita a Ancasti.
              </p>

              <p>
                Está sujeta a reserva, disponibilidad y condiciones
                de acceso.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La 4x4 para La Tunita está incluida en los $190.000?
              </h3>

              <p>
                No. El{" "}
                <strong>
                  vehículo 4x4 necesario para realizar el acceso específico
                  a La Tunita se contrata por separado
                </strong>{" "}
                y no está incluido en la tarifa de $190.000 por persona
                de Ancasti Día Completo.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La comida está incluida?
              </h3>

              <p>
                No. Las comidas, bebidas y consumos personales no están
                incluidos. Podemos coordinar las paradas de acuerdo con
                los horarios y disponibilidad del recorrido.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué pasa si algún camino no está en condiciones?
              </h3>

              <p>
                Los recorridos están sujetos a las condiciones climáticas
                y de los caminos. Si algún tramo no pudiera realizarse
                de manera segura, coordinaremos una alternativa.
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
              ¿Querés descubrir la Sierra de Ancasti desde Catamarca Capital?
            </h2>

            <p>
              Salimos desde{" "}
              <strong>
                San Fernando del Valle de Catamarca
              </strong>{" "}
              para disfrutar una jornada completa recorriendo algunos
              de los paisajes más atractivos del este provincial.
            </p>

            <p>
              Elegí entre la{" "}
              <strong>
                Vuelta al Cerro Ancasti por $140.000 por persona
              </strong>{" "}
              o{" "}
              <strong>
                Ancasti Día Completo por $190.000 por persona
              </strong>
              .
            </p>

            <p>
              Para la experiencia de Ancasti también podemos ayudarte
              a coordinar una visita opcional al{" "}
              <strong>
                Parque Arqueológico La Tunita
              </strong>
              . El servicio específico en 4x4 se contrata por separado
              y no está incluido en la tarifa.
            </p>

            <p>
              Mínimo 2 pasajeros · 1 pasajero: consultar tarifa.
            </p>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20por%20una%20excursi%C3%B3n%20a%20la%20Sierra%20de%20Ancasti.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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

export default VueltaCerroAncasti