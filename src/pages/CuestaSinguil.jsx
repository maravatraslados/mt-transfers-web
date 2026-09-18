import "../App.css"
import cuestaSinguil from "../assets/cuesta-singuil.jpg"
import frayMamerto from "../assets/fray-mamerto-esquiu.jpg"
import casaNatal from "../assets/casa-natal-esquiu.jpg"
import diquePirquitas from "../assets/dique-pirquitas.jpg"
import diquePirquitas2 from "../assets/dique-pirquitas-2.jpg"
import balcozna from "../assets/balcozna.jpg"
import balcoznaNieve from "../assets/balcozna-nieve.jpg"

function CuestaSinguil() {

  const title =
    "Excursión Cuesta de Singuil y Balcozna desde Catamarca Capital | MT Tours"

  const description =
    "Excursión a Cuesta de Singuil y Balcozna desde San Fernando del Valle de Catamarca. Dique Las Pirquitas, Casa Natal de Fray Mamerto Esquiú y paisajes serranos."

  const canonicalUrl =
    "https://mttransfers.com/excursiones/cuesta-de-singuil-balcozna"

  document.title = title

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  )

  if (!metaDescription) {
    metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    document.head.appendChild(metaDescription)
  }

  metaDescription.content = description

  let canonical = document.querySelector(
    'link[rel="canonical"]'
  )

  if (!canonical) {
    canonical = document.createElement("link")
    canonical.rel = "canonical"
    document.head.appendChild(canonical)
  }

  canonical.href = canonicalUrl

  const setOpenGraph = (property, content) => {

    let meta = document.querySelector(
      `meta[property="${property}"]`
    )

    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("property", property)
      document.head.appendChild(meta)
    }

    meta.setAttribute("content", content)
  }

  setOpenGraph("og:title", title)
  setOpenGraph("og:description", description)
  setOpenGraph("og:url", canonicalUrl)
  setOpenGraph("og:type", "website")


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
              url(${cuestaSinguil})
            `,
          }}
        >

          <div className="tour-detail-hero-content">

            <span className="section-kicker">
              AMBATO · CATAMARCA
            </span>

            <h1>
              Excursión a Cuesta de Singuil y Balcozna desde San Fernando del Valle de Catamarca
            </h1>

            <p>
              De la historia del Valle Central al verde de las sierras:
              descubrí Las Pirquitas, Cuesta de Singuil y Balcozna en
              un recorrido privado lleno de contrastes.
            </p>


            <div className="tour-detail-meta">

              <span>
                📍 Singuil · Balcozna
              </span>

              <span>
                ⏱ 4 a 5 horas aprox.
              </span>

              <span>
                🚘 190 km aprox.
              </span>

              <span>
                💰 $90.000 por persona
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
              Cuesta de Singuil y Balcozna: de Catamarca Capital al verde de las sierras
            </h2>

            <p>
              La{" "}
              <strong>
                excursión a Cuesta de Singuil y Balcozna desde San Fernando
                del Valle de Catamarca
              </strong>{" "}
              combina historia, agua, caminos de montaña y naturaleza
              en un recorrido de aproximadamente 190 kilómetros.
            </p>

            <p>
              Salimos desde{" "}
              <strong>
                Catamarca Capital
              </strong>{" "}
              para descubrir diferentes paisajes de la Región Centro.
              Durante el recorrido visitamos la{" "}
              <strong>
                Casa Natal de Fray Mamerto Esquiú
              </strong>
              , continuamos hacia el{" "}
              <strong>
                Dique Las Pirquitas
              </strong>{" "}
              y luego nos internamos en los caminos serranos que conducen
              hacia Singuil y Balcozna.
            </p>

            <p>
              A medida que avanzamos, el paisaje comienza a transformarse.
              Las montañas, la vegetación y los sectores rurales crean
              un marcado contraste con el ambiente del Valle Central,
              convirtiendo el camino en una parte fundamental de la
              experiencia.
            </p>


            <div className="tour-differential">

              <strong>
                ⭐ DIFERENCIAL MT
              </strong>

              <span>
                En una sola excursión pasamos de la historia del Valle
                Central al verde de las sierras catamarqueñas.
              </span>

            </div>

          </div>


          {/* TARJETA DE RESERVA */}
          <aside
            className="tour-detail-card"
            id="reservar"
          >

            <span>
              CONSULTÁ TU VIAJE
            </span>

            <h3>
              Cuesta de Singuil + Balcozna
            </h3>

            <p>
              Un recorrido privado desde Catamarca Capital combinando
              patrimonio, dique, montaña y naturaleza.
            </p>


            <div
              style={{
                margin: "18px 0",
                lineHeight: 1.9,
              }}
            >

              <strong>
                $90.000 por persona
              </strong>

              <br />

              <span>
                🚘 Aproximadamente 190 km
              </span>

              <br />

              <span>
                ⏱ Duración aproximada: 4 a 5 horas
              </span>

              <br />

              <span>
                👥 Mínimo 2 pasajeros
              </span>

              <br />

              <span>
                👤 1 pasajero: consultar tarifa
              </span>

            </div>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Cuesta%20de%20Singuil%20%2B%20Balcozna%20de%20%2490.000%20por%20persona."
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


                {/* LUGARES QUE VAMOS A DESCUBRIR */}
        <section className="tour-options-section">

          <div className="section-heading">

            <span className="section-kicker">
              LUGARES QUE VAMOS A DESCUBRIR
            </span>

            <h2>
              Mucho más que un paseo por las sierras de Catamarca
            </h2>

            <p>
              Esta experiencia combina patrimonio histórico, paisajes
              de agua, caminos serranos y algunos de los ambientes más
              verdes del centro de Catamarca. Cada parada aporta algo
              diferente y permite descubrir cómo cambia la provincia
              a pocos kilómetros de la Capital.
            </p>

          </div>


          <div className="tour-options-grid">


            {/* CASA NATAL */}
            <article className="tour-option-card">

              <span className="tour-option-label">
                HISTORIA · FRAY MAMERTO ESQUIÚ
              </span>

              <h3>
                Casa Natal de Fray Mamerto Esquiú
              </h3>

              <p>
                Nuestra primera aproximación a esta región de Catamarca
                tiene un fuerte componente histórico. Visitamos la zona
                vinculada a{" "}
                <strong>
                  Fray Mamerto Esquiú
                </strong>
                , una de las figuras más importantes de la historia
                catamarqueña.
              </p>

              <p>
                La parada permite conocer el entorno donde nació y creció
                Esquiú y acercarnos a una parte del patrimonio cultural
                y religioso de la provincia.
              </p>

              <p>
                Es también el punto donde la excursión comienza a mostrar
                uno de sus principales atractivos: en pocos kilómetros
                pasamos del movimiento de Catamarca Capital a localidades
                mucho más tranquilas, rodeadas por las sierras.
              </p>

              <div className="tour-option-note">

                <strong>
                  ¿Por qué vale la pena?
                </strong>

                <br />

                Porque antes de entrar de lleno en los paisajes de
                montaña conocemos una parte de la identidad y la historia
                de Catamarca.

              </div>

            </article>


            {/* DIQUE LAS PIRQUITAS */}
            <article className="tour-option-card">

              <span className="tour-option-label">
                AGUA · SIERRAS · PANORÁMICAS
              </span>

              <h3>
                Dique Las Pirquitas
              </h3>

              <p>
                El{" "}
                <strong>
                  Dique Las Pirquitas
                </strong>{" "}
                cambia por completo el paisaje del viaje. El agua aparece
                rodeada por montañas y crea una de las postales más
                características del Valle Central.
              </p>

              <p>
                Hacemos una parada para contemplar el embalse, disfrutar
                de las vistas y tener tiempo para fotografías. No buscamos
                simplemente pasar por el lugar: queremos que puedas
                detenerte y observar el paisaje.
              </p>

              <p>
                Es uno de esos puntos donde se entiende rápidamente la
                diversidad de Catamarca: después de salir de una ciudad
                rodeada de montañas encontramos un enorme espejo de agua
                integrado al paisaje serrano.
              </p>

              <div className="tour-option-note">

                <strong>
                  Momento destacado
                </strong>

                <br />

                Una de las mejores oportunidades del recorrido para
                fotografías panorámicas del agua y las sierras.

              </div>

            </article>


            {/* CUESTA DE SINGUIL */}
            <article className="tour-option-card">

              <span className="tour-option-label">
                MONTAÑA · NATURALEZA
              </span>

              <h3>
                Cuesta de Singuil
              </h3>

              <p>
                Acá comienza uno de los momentos más atractivos de toda
                la experiencia. La{" "}
                <strong>
                  Cuesta de Singuil
                </strong>{" "}
                no es solamente un camino para llegar a otro destino:
                el camino es parte del atractivo.
              </p>

              <p>
                A medida que avanzamos entre curvas y sectores de montaña,
                aparecen amplias vistas de los valles y un paisaje cada
                vez más verde. En esta zona pueden apreciarse ambientes
                asociados a las{" "}
                <strong>
                  yungas, pastizales naturales y campos cultivados
                </strong>
                .
              </p>

              <p>
                El contraste con Catamarca Capital es notable. En una
                distancia relativamente corta dejamos atrás el paisaje
                más seco del Valle Central para encontrarnos con laderas,
                vegetación y campos que muestran una Catamarca
                completamente diferente.
              </p>

              <div className="tour-option-note">

                <strong>
                  El gran atractivo del camino
                </strong>

                <br />

                Curvas, montaña, vistas abiertas y el cambio progresivo
                hacia los paisajes verdes del este catamarqueño.

              </div>

            </article>


            {/* BALCOZNA */}
            <article className="tour-option-card tour-option-featured">

              <span className="tour-option-label">
                ⭐ NATURALEZA CATAMARQUEÑA
              </span>

              <h3>
                Balcozna
              </h3>

              <p>
                Después del camino de montaña aparece{" "}
                <strong>
                  Balcozna
                </strong>
                , una villa serrana rodeada de montañas, cursos de agua
                y abundante vegetación.
              </p>

              <p>
                Para quien llega desde Catamarca Capital, uno de los
                aspectos que más llama la atención es el cambio del
                paisaje. El verde domina el entorno y los arroyos,
                serranías y caminos crean una atmósfera completamente
                distinta a la del Valle Central.
              </p>

              <p>
                Balcozna invita a bajar el ritmo. Es un lugar para
                observar, respirar aire de montaña, escuchar el agua
                y disfrutar de la tranquilidad característica de las
                pequeñas villas serranas de Catamarca.
              </p>

              <div className="tour-option-note">

                <strong>
                  Otra cara de Catamarca
                </strong>

                <br />

                Montañas, vegetación, agua y tranquilidad convierten
                a Balcozna en uno de los grandes contrastes naturales
                de esta excursión.

              </div>

            </article>

          </div>

        </section>


        {/* POR QUÉ ELEGIR ESTA EXPERIENCIA */}
        <section className="tour-info-section">

          <div className="section-heading">

            <span className="section-kicker">
              UNA CATAMARCA DIFERENTE
            </span>

            <h2>
              Cuatro experiencias diferentes en una misma salida
            </h2>

            <p>
              Esta excursión no busca acumular kilómetros ni pasar
              rápidamente por una lista de lugares. La propuesta es
              descubrir cómo cambian la historia, el paisaje y la
              naturaleza a medida que nos alejamos de Catamarca Capital.
            </p>

          </div>


          <div className="tour-options-grid">

            <article className="tour-option-card">

              <h3>
                🏛️ Historia
              </h3>

              <p>
                Nos acercamos al patrimonio de Fray Mamerto Esquiú y
                conocemos una parte fundamental de la identidad
                cultural catamarqueña.
              </p>

            </article>


            <article className="tour-option-card">

              <h3>
                💧 Agua
              </h3>

              <p>
                Las Pirquitas incorpora al viaje un paisaje completamente
                diferente, con el embalse enmarcado por las sierras del
                Valle Central.
              </p>

            </article>


            <article className="tour-option-card">

              <h3>
                ⛰️ Montaña
              </h3>

              <p>
                La Cuesta de Singuil transforma el traslado en una
                experiencia panorámica, con curvas, valles, pastizales
                y vistas abiertas.
              </p>

            </article>


            <article className="tour-option-card">

              <h3>
                🌿 Naturaleza
              </h3>

              <p>
                Balcozna muestra una Catamarca verde, serrana y tranquila,
                muy diferente del paisaje que el visitante encuentra
                al llegar a la Capital.
              </p>

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
                Cómo será la excursión a Cuesta de Singuil y Balcozna
              </h2>


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
                      Comenzamos el recorrido desde Catamarca Capital
                      y nos dirigimos hacia el departamento
                      Fray Mamerto Esquiú.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    2
                  </span>

                  <div>

                    <h3>
                      Casa Natal de Fray Mamerto Esquiú
                    </h3>

                    <p>
                      Realizamos una parada para conocer uno de los
                      sitios históricos y culturales destacados de
                      Catamarca antes de continuar hacia la zona serrana.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    3
                  </span>

                  <div>

                    <h3>
                      Dique Las Pirquitas
                    </h3>

                    <p>
                      Continuamos hacia Las Pirquitas, donde hacemos
                      una parada para disfrutar el paisaje del embalse,
                      contemplar las sierras y tomar fotografías.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    4
                  </span>

                  <div>

                    <h3>
                      Cuesta de Singuil
                    </h3>

                    <p>
                      Nos internamos en uno de los tramos más atractivos
                      de la excursión. El camino serrano ofrece curvas,
                      vistas panorámicas y un paisaje que se vuelve cada
                      vez más verde a medida que avanzamos.
                    </p>

                  </div>

                </div>


                <div className="tour-step">

                  <span>
                    5
                  </span>

                  <div>

                    <h3>
                      Balcozna
                    </h3>

                    <p>
                      Llegamos a Balcozna, rodeada de montañas y
                      vegetación. Realizamos una parada para disfrutar
                      de la tranquilidad y del entorno natural antes
                      de iniciar el regreso.
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
                      Después de recorrer aproximadamente{" "}
                      <strong>
                        190 kilómetros
                      </strong>{" "}
                      entre historia, agua y montaña, finalizamos la
                      experiencia regresando a San Fernando del Valle
                      de Catamarca.
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
                  ✓ Paradas panorámicas durante el recorrido
                </li>

                <li>
                  ✓ Atención personalizada
                </li>

              </ul>


              <h3 className="tour-second-title">
                Tarifa y recorrido
              </h3>

              <ul>

                <li>
                  <strong>
                    • $90.000 por persona
                  </strong>
                </li>

                <li>
                  • Aproximadamente 190 km
                </li>

                <li>
                  • Duración aproximada: 4 a 5 horas
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
                  • Entradas o servicios adicionales que pudieran corresponder
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

                <li>
                  • Cámara o celular con batería
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
              Cuesta de Singuil, Balcozna y Las Pirquitas
            </h2>

            <p>
              Un recorrido desde Catamarca Capital donde la historia,
              el agua y los paisajes serranos se combinan en una misma
              experiencia.
            </p>

          </div>


          <div className="tour-gallery-grid tour-gallery-portezuelo">


            <figure className="tour-gallery-main">

              <img
                src={cuestaSinguil}
                alt="Cuesta de Singuil en Catamarca excursión desde Catamarca Capital"
              />

              <figcaption>

                <strong>
                  Cuesta de Singuil
                </strong>

                <span>
                  Caminos de montaña y vistas panorámicas en uno de
                  los sectores destacados del recorrido.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={casaNatal}
                alt="Casa Natal de Fray Mamerto Esquiú en Catamarca"
              />

              <figcaption>

                <strong>
                  Casa Natal de Fray Mamerto Esquiú
                </strong>

                <span>
                  Una parada cultural e histórica antes de continuar
                  hacia los paisajes serranos.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={frayMamerto}
                alt="Fray Mamerto Esquiú recorrido turístico en Catamarca"
              />

              <figcaption>

                <strong>
                  Fray Mamerto Esquiú
                </strong>

                <span>
                  Historia y patrimonio forman parte de la primera
                  etapa de nuestra excursión.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={diquePirquitas}
                alt="Dique Las Pirquitas excursión desde San Fernando del Valle de Catamarca"
              />

              <figcaption>

                <strong>
                  Dique Las Pirquitas
                </strong>

                <span>
                  Una parada para disfrutar el paisaje del embalse,
                  las montañas y el entorno natural.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={diquePirquitas2}
                alt="Paisaje del Dique Las Pirquitas en Catamarca Argentina"
              />

              <figcaption>

                <strong>
                  Las Pirquitas
                </strong>

                <span>
                  Agua y sierras crean uno de los grandes contrastes
                  de esta experiencia.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={balcozna}
                alt="Balcozna Catamarca excursión por Cuesta de Singuil"
              />

              <figcaption>

                <strong>
                  Balcozna
                </strong>

                <span>
                  Naturaleza, montañas y tranquilidad en el destino
                  principal del recorrido.
                </span>

              </figcaption>

            </figure>


            <figure className="tour-gallery-night">

              <img
                src={balcoznaNieve}
                alt="Paisaje serrano de Balcozna Catamarca"
              />

              <figcaption>

                <strong>
                  Paisajes de Balcozna
                </strong>

                <span>
                  El entorno serrano cambia notablemente con las
                  estaciones y condiciones climáticas.
                </span>

              </figcaption>

            </figure>

          </div>

        </section>


        {/* FAQ SEO */}
        <section className="tour-faq-section">

          <div className="section-heading">

            <span className="section-kicker">
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Preguntas sobre la excursión a Cuesta de Singuil y Balcozna
            </h2>

            <p>
              Información para organizar tu excursión desde
              San Fernando del Valle de Catamarca.
            </p>

          </div>


          <div className="tour-faq-grid">


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto cuesta la excursión a Cuesta de Singuil y Balcozna?
              </h3>

              <p>
                La excursión cuesta{" "}
                <strong>
                  $90.000 por persona
                </strong>
                , con un mínimo de 2 pasajeros.
                Para 1 pasajero, consultar tarifa.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto dura la excursión?
              </h3>

              <p>
                La duración aproximada es de{" "}
                <strong>
                  4 a 5 horas
                </strong>
                . El tiempo final puede variar de acuerdo con las
                paradas, condiciones del camino y ritmo del recorrido.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuántos kilómetros tiene el recorrido?
              </h3>

              <p>
                El circuito completo tiene aproximadamente{" "}
                <strong>
                  190 kilómetros
                </strong>
                , tomando como referencia la salida y regreso a
                San Fernando del Valle de Catamarca.
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
                , también conocida como Catamarca Capital, o desde
                un punto de encuentro acordado previamente.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué lugares se visitan durante la excursión?
              </h3>

              <p>
                El recorrido incluye la{" "}
                <strong>
                  Casa Natal de Fray Mamerto Esquiú
                </strong>
                , el{" "}
                <strong>
                  Dique Las Pirquitas
                </strong>
                , la{" "}
                <strong>
                  Cuesta de Singuil
                </strong>{" "}
                y{" "}
                <strong>
                  Balcozna
                </strong>
                , además de diferentes paradas panorámicas.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se visita el Dique Las Pirquitas?
              </h3>

              <p>
                Sí. El{" "}
                <strong>
                  Dique Las Pirquitas
                </strong>{" "}
                forma parte del recorrido. Realizamos una parada para
                disfrutar el paisaje y tomar fotografías antes de
                continuar hacia la zona serrana.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué se puede ver en la Cuesta de Singuil?
              </h3>

              <p>
                La Cuesta de Singuil permite disfrutar caminos de
                montaña, vistas panorámicas y un notable cambio de
                paisaje a medida que avanzamos hacia Balcozna.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La comida está incluida?
              </h3>

              <p>
                No. Las comidas y bebidas no están incluidas en la
                tarifa. Al tratarse de una excursión de aproximadamente
                4 a 5 horas, recomendamos llevar agua y lo que cada
                pasajero considere necesario durante el recorrido.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Pueden realizar la excursión familias con niños?
              </h3>

              <p>
                Sí. Es una experiencia que puede realizarse en familia.
                Al momento de reservar, recomendamos indicarnos las
                edades de los menores para organizar mejor el servicio.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿La excursión es privada?
              </h3>

              <p>
                Sí. En{" "}
                <strong>
                  MT Tours & Transfers
                </strong>{" "}
                ofrecemos una experiencia privada y atención
                personalizada durante el recorrido.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué pasa si las condiciones del camino no son adecuadas?
              </h3>

              <p>
                El recorrido está sujeto a las condiciones climáticas
                y del camino. Si algún sector no pudiera realizarse
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
              ¿Querés conocer Cuesta de Singuil y Balcozna?
            </h2>

            <p>
              Salimos desde{" "}
              <strong>
                San Fernando del Valle de Catamarca
              </strong>{" "}
              para recorrer aproximadamente{" "}
              <strong>
                190 kilómetros
              </strong>{" "}
              entre historia, diques, caminos de montaña y paisajes
              serranos.
            </p>

            <p>
              La excursión tiene una duración aproximada de{" "}
              <strong>
                4 a 5 horas
              </strong>{" "}
              y una tarifa de{" "}
              <strong>
                $90.000 por persona
              </strong>
              .
            </p>

            <p>
              <strong>
                Mínimo 2 pasajeros · 1 pasajero: consultar tarifa.
              </strong>
            </p>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Cuesta%20de%20Singuil%20%2B%20Balcozna%20de%20%2490.000%20por%20persona.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-button"
            >
              💬 Consultar disponibilidad por WhatsApp
            </a>


            <small
              style={{
                display: "block",
                marginTop: "16px",
              }}
            >
              Precio por persona · Mínimo 2 pasajeros ·
              Recorrido sujeto a condiciones del camino
            </small>

          </div>

        </section>

      </main>

    </div>
  )
}

export default CuestaSinguil