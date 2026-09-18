import "../App.css"

import shincal1 from "../assets/shincal-1.jpeg"
import shincal2 from "../assets/shincal-2.jpeg"
import rutaAdobe from "../assets/ruta-adobe.jpg"
import volcanGalan from "../assets/volcan-galan.jpg"
import lagunaDiamante from "../assets/laguna-diamante.webp"
import piedraPomezPuna from "../assets/piedra-pomez-puna.jpg"
import salarAntofalla from "../assets/salar-antofalla.jpg"
import carachiPampa from "../assets/carachi-pampa.jpg"
import antofalla from "../assets/antofalla.jpg"
import antofagastaSierra from "../assets/antofagasta-sierra.jpg"
import fumarolas from "../assets/fumarolas.jpg"
import cuestaRandolfo from "../assets/cuesta-randolfo.jpeg"


function AventuraPuna() {

  const title =
    "Aventura en la Puna Catamarqueña | Tour 4x4 de 4 días | MT Tours"

  const description =
    "Aventura en la Puna Catamarqueña de 4 días y 3 noches desde Catamarca Capital. Antofagasta de la Sierra, Salar de Antofalla, Volcán Galán, Campo de Piedra Pómez, alojamiento, desayuno y travesías 4x4."

  const canonicalUrl =
    "https://mttransfers.com/excursiones/aventura-puna-catamarquena"

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


      {/* HEADER */}
      <header className="header">

        <div className="logo">

          <img
            src="/favicon.png"
            alt="MT Tours & Transfers"
            style={{
              width: "48px",
              height: "48px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />

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

          <a
            href="/quienes-somos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiénes somos
          </a>

          <a
            href="/contacto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>

        </nav>


        <a
          className="whatsapp-button"
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20Aventura%20en%20la%20Puna%20Catamarque%C3%B1a."
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
                rgba(0, 0, 0, 0.80) 0%,
                rgba(0, 0, 0, 0.50) 50%,
                rgba(0, 0, 0, 0.16) 100%
              ),
              url(${piedraPomezPuna})
            `,
          }}
        >

          <div className="tour-detail-hero-content">

            <span className="section-kicker">
              PUNA CATAMARQUEÑA · 4X4
            </span>

            <h1>
              Aventura en la Puna Catamarqueña
            </h1>

            <p>
              Cuatro días para internarnos en uno de los territorios
              más extraordinarios de Catamarca: volcanes, salares,
              lagunas de altura, pueblos de la Puna y el increíble
              Campo de Piedra Pómez.
            </p>


            <div className="tour-detail-meta">

              <span>
                📍 Antofagasta de la Sierra · Puna
              </span>

              <span>
                🚙 Travesías 4x4
              </span>

              <span>
                ⏱ 4 días · 3 noches
              </span>

              <span>
                🏨 Alojamiento + desayuno
              </span>

              <span>
                💰 $1.300.000 por persona
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


        {/* INTRODUCCIÓN */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              UNA EXPERIENCIA EN LA PUNA
            </span>

            <h2>
              Cuatro días para descubrir otra dimensión de Catamarca
            </h2>

            <p>
              Hay lugares que se visitan y hay territorios que necesitan
              tiempo para ser comprendidos.
            </p>

            <p>
              La{" "}
              <strong>
                Puna Catamarqueña
              </strong>{" "}
              pertenece claramente al segundo grupo.
            </p>

            <p>
              Aquí las distancias son enormes, la altura modifica
              completamente el paisaje y las montañas conviven con
              volcanes, salares, lagunas altoandinas y extensiones
              donde prácticamente no existen signos de urbanización.
            </p>

            <p>
              Por eso esta propuesta no está pensada como una excursión
              rápida al{" "}
              <strong>
                Campo de Piedra Pómez
              </strong>
              .
            </p>

            <p>
              Es un programa de{" "}
              <strong>
                4 días y 3 noches
              </strong>{" "}
              que permite avanzar progresivamente hacia el corazón
              de la Puna y descubrir algunos de los paisajes
              más impactantes del territorio catamarqueño.
            </p>

            <p>
              Durante la experiencia conocemos el legado arqueológico
              de{" "}
              <strong>
                El Shincal de Quimivil
              </strong>
              , llegamos hasta{" "}
              <strong>
                Antofagasta de la Sierra
              </strong>
              , atravesamos la Quebrada de Calalaste, exploramos
              el enorme Salar de Antofalla y nos acercamos a uno
              de los ambientes volcánicos más extraordinarios
              de la provincia.
            </p>

            <p>
              La aventura continúa hacia el{" "}
              <strong>
                Volcán Galán
              </strong>
              , lagunas de altura y fumarolas, antes de llegar
              finalmente al escenario que para muchos viajeros
              representa una de las imágenes más buscadas de Catamarca:
              el{" "}
              <strong>
                Campo de Piedra Pómez
              </strong>
              .
            </p>

            <p>
              No se trata solamente de llegar a estos lugares.
              La verdadera experiencia consiste en{" "}
              <strong>
                atravesar la Puna, observar cómo cambia el paisaje
                y comprender la escala de este territorio
              </strong>
              .
            </p>

          </div>


          {/* RESERVA */}
          <aside
            className="tour-detail-card"
            id="reservar"
          >

            <span>
              AVENTURA EN LA PUNA
            </span>

            <h3>
              $1.300.000 por persona
            </h3>

            <p>
              Programa de 4 días y 3 noches para explorar
              algunos de los grandes paisajes de la Puna Catamarqueña.
            </p>


            <ul>

              <li>
                ✓ 4 días / 3 noches
              </li>

              <li>
                ✓ Alojamiento incluido
              </li>

              <li>
                ✓ Desayuno incluido
              </li>

              <li>
                ✓ Travesías en 4x4
              </li>

              <li>
                ✓ Guía baqueano
              </li>

              <li>
                ✓ Seguro al viajero
              </li>

              <li>
                ✓ Mínimo 2 pasajeros
              </li>

              <li>
                ✓ Máximo 4 pasajeros por camioneta
              </li>

            </ul>


            <p>
              <strong>
                Operación:
              </strong>{" "}
              experiencia realizada por prestador local asociado
              especializado en travesías por la Puna.
            </p>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20Aventura%20en%20la%20Puna.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              💬 Consultar por WhatsApp
            </a>

            <small>
              Atención personalizada · Cupos sujetos a disponibilidad
            </small>

          </aside>

        </section>


        {/* LUGARES */}
        <section className="story-section">

          <div className="section-heading">

            <span className="section-kicker">
              LUGARES QUE VAMOS A DESCUBRIR
            </span>

            <h2>
              Mucho más que el Campo de Piedra Pómez
            </h2>

            <p>
              Esta experiencia permite conocer diferentes ambientes
              de Catamarca durante cuatro días. Cada lugar ayuda
              a comprender una parte diferente de la historia,
              la geografía y la enorme escala de la Puna.
            </p>

          </div>


          <div className="story-grid">


            {/* SHINCAL */}
            <article className="story-card">

              <img
                src={shincal2}
                alt="El Shincal de Quimivil durante viaje hacia la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  ARQUEOLOGÍA · CULTURA INCA
                </span>

                <h3>
                  El Shincal de Quimivil
                </h3>

                <p>
                  Antes de internarnos completamente en los paisajes
                  de altura, la experiencia nos conecta con una de
                  las páginas más importantes de la historia
                  prehispánica de Catamarca.
                </p>

                <p>
                  Cerca de Londres se encuentra{" "}
                  <strong>
                    El Shincal de Quimivil
                  </strong>
                  , uno de los sitios arqueológicos vinculados
                  a la presencia inca en el actual territorio argentino.
                </p>

                <p>
                  Sus construcciones, plazas y sectores ceremoniales
                  permiten acercarnos a la organización de un asentamiento
                  que tuvo importancia dentro de una extensa red
                  política y territorial.
                </p>

                <p>
                  La visita incorpora historia y arqueología al comienzo
                  de un viaje que después cambiará completamente
                  de escenario.
                </p>

                <p>
                  Es una forma extraordinaria de comenzar a comprender
                  que Catamarca no solamente posee diversidad geográfica:
                  también conserva un patrimonio cultural de enorme valor.
                </p>

              </div>

            </article>


            {/* CAMINO HACIA LA PUNA */}
            <article className="story-card">

              <img
                src={rutaAdobe}
                alt="Paisajes del oeste camino hacia la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  DEL OESTE A LA ALTURA
                </span>

                <h3>
                  El camino hacia Antofagasta de la Sierra
                </h3>

                <p>
                  Llegar a la Puna forma parte de la experiencia.
                </p>

                <p>
                  A medida que avanzamos hacia el interior de Catamarca,
                  los paisajes comienzan a transformarse y las enormes
                  distancias permiten comprender la escala de la provincia.
                </p>

                <p>
                  Los valles y sectores más poblados van quedando atrás.
                  Aparecen ambientes cada vez más abiertos, montañas
                  de diferentes colores y extensiones donde la presencia
                  humana es mucho menor.
                </p>

                <p>
                  La sensación de aislamiento aumenta progresivamente
                  y anticipa una de las características fundamentales
                  del destino:{" "}
                  <strong>
                    en la Puna, el paisaje domina completamente
                    el territorio
                  </strong>
                  .
                </p>

              </div>

            </article>


            {/* ANTOFAGASTA */}
            <article className="story-card">

              <img
                src={antofagastaSierra}
                alt="Antofagasta de la Sierra en la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  CORAZÓN DE LA PUNA
                </span>

                <h3>
                  Antofagasta de la Sierra
                </h3>

                <p>
                  <strong>
                    Antofagasta de la Sierra
                  </strong>{" "}
                  es nuestra gran base para explorar el territorio
                  puneño durante el programa.
                </p>

                <p>
                  Su ubicación permite acceder a volcanes, salares,
                  lagunas y formaciones geológicas que se encuentran
                  distribuidas a grandes distancias.
                </p>

                <p>
                  Llegar hasta aquí significa ingresar en un territorio
                  donde la altura, el clima y las distancias condicionan
                  completamente la manera de viajar.
                </p>

                <p>
                  También permite descubrir que la Puna no es un territorio
                  vacío. Existen comunidades que durante generaciones
                  desarrollaron formas de vida adaptadas a condiciones
                  geográficas muy particulares.
                </p>

                <p>
                  Las noches en Antofagasta de la Sierra permiten además
                  descansar entre las diferentes travesías y prepararnos
                  para los recorridos 4x4 de los días siguientes.
                </p>

              </div>

            </article>


            {/* CALALASTE */}
            <article className="story-card">

              <img
                src={antofalla}
                alt="Paisaje de la Puna camino hacia Antofalla en Catamarca"
              />

              <div className="story-card-content">

                <span>
                  COLORES DE LA PUNA
                </span>

                <h3>
                  Quebrada de Calalaste
                </h3>

                <p>
                  La travesía hacia Antofalla incorpora uno de esos
                  caminos donde el desplazamiento se convierte
                  en parte central de la experiencia.
                </p>

                <p>
                  La{" "}
                  <strong>
                    Quebrada de Calalaste
                  </strong>{" "}
                  nos introduce en un paisaje mineral dominado
                  por montañas, quebradas y tonalidades que cambian
                  constantemente.
                </p>

                <p>
                  La aridez permite observar con claridad la estructura
                  del terreno y las diferentes capas de color
                  que forman las montañas.
                </p>

                <p>
                  Es uno de los sectores donde resulta más evidente
                  que la Puna no es un paisaje uniforme.
                </p>

                <p>
                  Cada quebrada, salar y formación volcánica posee
                  características propias.
                </p>

              </div>

            </article>


            {/* ANTOFALLA */}
            <article className="story-card">

              <img
                src={salarAntofalla}
                alt="Salar de Antofalla en la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  SALAR · COMUNIDAD · MONTAÑA
                </span>

                <h3>
                  Salar y Pueblo de Antofalla
                </h3>

                <p>
                  El{" "}
                  <strong>
                    Salar de Antofalla
                  </strong>{" "}
                  es uno de los grandes escenarios de esta aventura.
                </p>

                <p>
                  Su enorme extensión genera una sensación difícil
                  de transmitir en fotografías: el horizonte parece
                  alejarse mientras avanzamos y las montañas acompañan
                  el salar durante kilómetros.
                </p>

                <p>
                  Pero Antofalla no es solamente paisaje.
                </p>

                <p>
                  En este territorio también encontramos el{" "}
                  <strong>
                    Pueblo de Antofalla
                  </strong>
                  , una pequeña comunidad puneña que permite descubrir
                  la dimensión humana de una región marcada
                  por grandes distancias y condiciones extremas.
                </p>

                <p>
                  El contraste entre la inmensidad del salar,
                  las montañas y una pequeña comunidad habitando
                  este territorio convierte la jornada en una
                  de las experiencias más particulares del programa.
                </p>

              </div>

            </article>


            {/* GALÁN */}
            <article className="story-card">

              <img
                src={volcanGalan}
                alt="Volcán Galán en la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  VOLCANES · ALTURA · 4X4
                </span>

                <h3>
                  Volcán Galán
                </h3>

                <p>
                  El tercer día nos lleva hacia uno de los grandes
                  protagonistas geológicos de la Puna Catamarqueña:
                  el{" "}
                  <strong>
                    Volcán Galán
                  </strong>
                  .
                </p>

                <p>
                  La travesía permite ingresar en un escenario volcánico
                  de enorme escala, donde las distancias y la altura
                  vuelven a modificar completamente la percepción
                  del paisaje.
                </p>

                <p>
                  Durante el recorrido se alcanzan sectores cercanos
                  a los{" "}
                  <strong>
                    4.800 metros sobre el nivel del mar
                  </strong>
                  , por lo que se trata de una verdadera experiencia
                  de alta montaña.
                </p>

                <p>
                  La geografía volcánica, las lagunas y las manifestaciones
                  geotérmicas convierten esta jornada en una de las
                  más intensas y espectaculares del programa.
                </p>

              </div>

            </article>


            {/* LAGUNAS */}
            <article className="story-card">

              <img
                src={lagunaDiamante}
                alt="Laguna Diamante durante la travesía al Volcán Galán en Catamarca"
              />

              <div className="story-card-content">

                <span>
                  AGUA EN MEDIO DEL DESIERTO
                </span>

                <h3>
                  Laguna Grande y Laguna Diamante
                </h3>

                <p>
                  En medio de un territorio dominado por volcanes,
                  roca y enormes extensiones áridas aparecen
                  las lagunas altoandinas.
                </p>

                <p>
                  <strong>
                    Laguna Grande
                  </strong>{" "}
                  es conocida por ser uno de los ambientes asociados
                  a la presencia de flamencos en esta región.
                </p>

                <p>
                  Más adelante,{" "}
                  <strong>
                    Laguna Diamante
                  </strong>{" "}
                  incorpora otro paisaje extraordinario dentro
                  del entorno volcánico del Galán.
                </p>

                <p>
                  Agua, sal, montañas y cielo se combinan en escenarios
                  donde prácticamente no existen elementos que interrumpan
                  la amplitud del horizonte.
                </p>

                <p>
                  Son lugares donde la escala de la Puna se vuelve
                  especialmente evidente.
                </p>

              </div>

            </article>


            {/* FUMAROLAS */}
            <article className="story-card">

              <img
                src={fumarolas}
                alt="Fumarolas y actividad geotérmica en la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  TIERRA VOLCÁNICA
                </span>

                <h3>
                  Fumarolas y actividad geotérmica
                </h3>

                <p>
                  El entorno del Galán permite observar que este paisaje
                  fue construido por procesos geológicos de enorme fuerza.
                </p>

                <p>
                  Las{" "}
                  <strong>
                    fumarolas
                  </strong>{" "}
                  son una de las manifestaciones que ayudan a comprender
                  esa historia volcánica.
                </p>

                <p>
                  Encontrarlas en medio de un territorio de altura,
                  rodeadas por montañas y lagunas, aporta una dimensión
                  diferente a la travesía.
                </p>

                <p>
                  La Puna deja de ser solamente un paisaje para convertirse
                  en una verdadera demostración de los procesos que
                  transformaron esta parte de los Andes.
                </p>

              </div>

            </article>


            {/* PIEDRA PÓMEZ */}
            <article className="story-card">

              <img
                src={piedraPomezPuna}
                alt="Campo de Piedra Pómez en Antofagasta de la Sierra Catamarca"
              />

              <div className="story-card-content">

                <span>
                  UNO DE LOS ÍCONOS DE CATAMARCA
                </span>

                <h3>
                  Campo de Piedra Pómez
                </h3>

                <p>
                  El último día nos lleva hacia uno de los paisajes
                  más reconocibles y extraordinarios de Catamarca:
                  el{" "}
                  <strong>
                    Campo de Piedra Pómez
                  </strong>
                  .
                </p>

                <p>
                  Aquí encontramos un inmenso conjunto de formaciones
                  de origen volcánico que posteriormente fueron
                  modeladas por la erosión y el viento.
                </p>

                <p>
                  El resultado es un paisaje que puede recordar
                  a enormes paredes, corredores, crestas y esculturas
                  naturales.
                </p>

                <p>
                  Los tonos claros de la piedra contrastan con
                  las montañas, el cielo intensamente azul y los
                  terrenos volcánicos que rodean el área.
                </p>

                <p>
                  Caminar entre estas formaciones permite apreciar
                  detalles que desde la distancia pasan inadvertidos:
                  texturas, cavidades, curvas y figuras que cambian
                  según el ángulo desde donde se observan.
                </p>

                <p>
                  Después de varios días atravesando la Puna,
                  llegar al Campo de Piedra Pómez funciona como
                  uno de los grandes momentos finales de la aventura.
                </p>

              </div>

            </article>


            {/* CARACHI */}
            <article className="story-card">

              <img
                src={carachiPampa}
                alt="Carachi Pampa en la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  SALARES · VOLCANES
                </span>

                <h3>
                  Carachi Pampa
                </h3>

                <p>
                  La jornada del Campo de Piedra Pómez permite
                  continuar descubriendo otros ambientes volcánicos
                  y salinos de la región.
                </p>

                <p>
                  El sector de{" "}
                  <strong>
                    Carachi Pampa
                  </strong>{" "}
                  muestra nuevamente la combinación que caracteriza
                  a buena parte de la Puna: volcanes, superficies
                  salinas, montañas y horizontes inmensos.
                </p>

                <p>
                  Es uno de esos lugares donde detenerse unos minutos
                  ayuda a comprender que el Campo de Piedra Pómez
                  no se encuentra aislado.
                </p>

                <p>
                  Forma parte de un territorio mucho mayor,
                  construido por volcanismo, erosión y condiciones
                  ambientales extremas.
                </p>

              </div>

            </article>


            {/* REGRESO */}
            <article className="story-card">

              <img
                src={cuestaRandolfo}
                alt="Cuesta de Randolfo camino de regreso desde la Puna Catamarqueña"
              />

              <div className="story-card-content">

                <span>
                  EL PAISAJE CONTINÚA
                </span>

                <h3>
                  Pasto Ventura, Cuesta de Randolfo y Barranca Larga
                </h3>

                <p>
                  El regreso desde la Puna no significa que la experiencia
                  haya terminado.
                </p>

                <p>
                  Durante el último tramo atravesamos sectores como{" "}
                  <strong>
                    Pasto Ventura, Cuesta de Randolfo y Barranca Larga
                  </strong>
                  .
                </p>

                <p>
                  El descenso permite observar nuevamente cómo cambia
                  el paisaje mientras dejamos progresivamente
                  los ambientes más altos.
                </p>

                <p>
                  Después de cuatro días entre salares, volcanes,
                  lagunas y caminos de montaña, el regreso hacia
                  San Fernando del Valle de Catamarca ayuda también
                  a dimensionar todo el territorio recorrido.
                </p>

              </div>

            </article>


          </div>

        </section>

                {/* PROGRAMA */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              CUATRO DÍAS DE AVENTURA
            </span>

            <h2>
              Una travesía para entrar de verdad en la Puna Catamarqueña
            </h2>

            <p>
              Las enormes distancias de la Puna hacen que intentar
              conocerla en unas pocas horas signifique perder gran
              parte de la experiencia.
            </p>

            <p>
              Por eso este programa distribuye el recorrido durante{" "}
              <strong>
                4 días y 3 noches
              </strong>
              , combinando los desplazamientos con alojamiento
              y diferentes travesías en vehículos 4x4.
            </p>

            <p>
              El programa puede adaptarse por cuestiones climáticas,
              estado de los caminos, seguridad, disponibilidad
              de los atractivos o indicaciones de las comunidades locales.
            </p>


            <div
              style={{
                marginTop: "34px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >

              <span className="section-kicker">
                DÍA 1
              </span>

              <h3>
                El Shincal de Quimivil y viaje hacia Antofagasta de la Sierra
              </h3>

              <p>
                Comenzamos nuestra aventura dejando progresivamente
                atrás el Valle Central para dirigirnos hacia el oeste
                de Catamarca.
              </p>

              <p>
                Durante esta primera etapa incorporamos la visita a{" "}
                <strong>
                  El Shincal de Quimivil
                </strong>
                , uno de los grandes sitios arqueológicos de la provincia.
              </p>

              <p>
                Después continuamos el viaje hacia el interior
                catamarqueño hasta ingresar progresivamente
                en los ambientes de altura.
              </p>

              <p>
                El destino de esta primera gran jornada es{" "}
                <strong>
                  Antofagasta de la Sierra
                </strong>
                , donde comienza nuestra inmersión en la Puna.
              </p>

            </div>


            <div
              style={{
                marginTop: "34px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >

              <span className="section-kicker">
                DÍA 2
              </span>

              <h3>
                Quebrada de Calalaste, Salar y Pueblo de Antofalla
              </h3>

              <p>
                El segundo día comienza una de las grandes travesías
                4x4 del programa.
              </p>

              <p>
                Avanzamos por paisajes minerales y sectores de montaña
                hasta atravesar la{" "}
                <strong>
                  Quebrada de Calalaste
                </strong>
                .
              </p>

              <p>
                El recorrido continúa hacia el{" "}
                <strong>
                  Salar de Antofalla
                </strong>
                , donde la inmensidad del paisaje se convierte
                en la verdadera protagonista.
              </p>

              <p>
                También nos acercamos al{" "}
                <strong>
                  Pueblo de Antofalla
                </strong>
                , incorporando a la experiencia la dimensión cultural
                y humana de las comunidades que habitan la Puna.
              </p>

            </div>


            <div
              style={{
                marginTop: "34px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >

              <span className="section-kicker">
                DÍA 3
              </span>

              <h3>
                Volcán Galán, lagunas altoandinas y paisajes geotérmicos
              </h3>

              <p>
                El tercer día está dedicado a uno de los ambientes
                más espectaculares y extremos del viaje.
              </p>

              <p>
                La travesía 4x4 avanza hacia el entorno del{" "}
                <strong>
                  Volcán Galán
                </strong>
                , atravesando territorios de gran altura
                y enormes extensiones volcánicas.
              </p>

              <p>
                Durante la jornada aparecen lugares como{" "}
                <strong>
                  Laguna Grande y Laguna Diamante
                </strong>
                , además de sectores donde pueden observarse
                manifestaciones geotérmicas.
              </p>

              <p>
                Es una jornada donde volcanes, agua, sal y montaña
                se combinan en algunos de los escenarios
                más impactantes de la Puna Catamarqueña.
              </p>

            </div>


            <div
              style={{
                marginTop: "34px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >

              <span className="section-kicker">
                DÍA 4
              </span>

              <h3>
                Campo de Piedra Pómez y regreso a Catamarca Capital
              </h3>

              <p>
                El último día incorpora uno de los grandes íconos
                naturales de la provincia: el{" "}
                <strong>
                  Campo de Piedra Pómez
                </strong>
                .
              </p>

              <p>
                La travesía nos lleva entre ambientes volcánicos,
                sectores salinos y paisajes de Carachi Pampa
                antes de acercarnos a las enormes formaciones
                de piedra pómez.
              </p>

              <p>
                Después de conocer este extraordinario paisaje,
                comenzamos el regreso atravesando sectores de{" "}
                <strong>
                  Pasto Ventura, Cuesta de Randolfo y Barranca Larga
                </strong>
                .
              </p>

              <p>
                Finalmente regresamos hacia{" "}
                <strong>
                  San Fernando del Valle de Catamarca
                </strong>{" "}
                después de cuatro días recorriendo algunos de los
                territorios más sorprendentes de la provincia.
              </p>

            </div>

          </div>


          {/* DATOS DEL PROGRAMA */}
          <aside className="tour-detail-card">

            <span>
              DATOS DE LA EXPERIENCIA
            </span>

            <h3>
              Aventura en la Puna
            </h3>

            <ul>

              <li>
                ✓ 4 días / 3 noches
              </li>

              <li>
                ✓ Mínimo 2 pasajeros
              </li>

              <li>
                ✓ Máximo 4 pasajeros por camioneta
              </li>

              <li>
                ✓ Recorridos en vehículos 4x4
              </li>

              <li>
                ✓ Alojamiento incluido
              </li>

              <li>
                ✓ Desayuno incluido
              </li>

            </ul>


            <h3>
              El programa incluye
            </h3>

            <ul>

              <li>
                ✓ Traslados del programa
              </li>

              <li>
                ✓ Excursiones indicadas en el recorrido
              </li>

              <li>
                ✓ Vehículo preparado para caminos de altura
              </li>

              <li>
                ✓ Guía baqueano permanente
              </li>

              <li>
                ✓ Equipamiento de seguridad
              </li>

              <li>
                ✓ Oxígeno para asistencia en altura
              </li>

              <li>
                ✓ Seguro de asistencia al viajero
              </li>

              <li>
                ✓ 3 noches de alojamiento
              </li>

              <li>
                ✓ Desayuno durante la estadía
              </li>

            </ul>


            <p>
              <strong>
                Tarifa MT:
              </strong>
            </p>

            <h3>
              $1.300.000 por persona
            </h3>

            <p>
              Tarifa publicada para un mínimo de 2 pasajeros.
            </p>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20Aventura%20en%20la%20Puna%20de%204%20d%C3%ADas.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              💬 Consultar disponibilidad
            </a>

          </aside>

        </section>


        {/* ALOJAMIENTO */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              ALOJAMIENTO INCLUIDO
            </span>

            <h2>
              Tres noches para descansar entre las travesías
            </h2>

            <p>
              A diferencia de nuestras excursiones tradicionales
              de un solo día,{" "}
              <strong>
                Aventura en la Puna incluye alojamiento
              </strong>{" "}
              dentro del programa.
            </p>

            <p>
              Esto permite organizar las grandes distancias
              de la región de una manera mucho más cómoda
              y dedicar jornadas completas a las diferentes
              travesías 4x4.
            </p>

            <p>
              Después de recorrer salares, volcanes y caminos
              de altura, regresamos al alojamiento para descansar
              antes de comenzar la siguiente experiencia.
            </p>

            <p>
              El programa contempla{" "}
              <strong>
                3 noches de alojamiento con desayuno
              </strong>
              .
            </p>

            <p>
              El establecimiento utilizado puede variar según
              disponibilidad y fecha del viaje, por lo que
              los detalles definitivos se confirman al momento
              de realizar la reserva.
            </p>

          </div>


          <aside className="tour-detail-card">

            <span>
              TU ESTADÍA
            </span>

            <h3>
              Alojamiento + desayuno
            </h3>

            <ul>

              <li>
                ✓ 3 noches
              </li>

              <li>
                ✓ Desayuno incluido
              </li>

              <li>
                ✓ Alojamiento según disponibilidad
              </li>

              <li>
                ✓ Coordinado dentro del programa
              </li>

            </ul>

            <p>
              Al consultar disponibilidad te informamos
              las condiciones y alojamiento previsto
              para las fechas seleccionadas.
            </p>

          </aside>

        </section>


        {/* ALTURA */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              VIAJAR A LA PUNA
            </span>

            <h2>
              Una experiencia extraordinaria que requiere respetar la altura
            </h2>

            <p>
              La Puna Catamarqueña posee condiciones muy diferentes
              a las que encontramos en Catamarca Capital.
            </p>

            <p>
              Durante algunas travesías podemos alcanzar sectores
              de aproximadamente{" "}
              <strong>
                4.800 metros sobre el nivel del mar
              </strong>
              .
            </p>

            <p>
              La menor disponibilidad de oxígeno, la amplitud térmica,
              el viento y la radiación solar hacen necesario viajar
              de una manera diferente.
            </p>

            <p>
              Recomendamos moverse con tranquilidad, mantenerse
              correctamente hidratado y seguir siempre las indicaciones
              del guía responsable de la travesía.
            </p>

            <p>
              Las personas con enfermedades cardiovasculares,
              respiratorias u otras condiciones que puedan verse
              afectadas por la altura deberían consultar previamente
              con su profesional de salud antes de realizar
              este tipo de experiencia.
            </p>

            <p>
              La prioridad durante todo el recorrido es poder
              disfrutar de la Puna{" "}
              <strong>
                respetando las condiciones del territorio
                y las decisiones de seguridad del guía
              </strong>
              .
            </p>

          </div>


          <aside className="tour-detail-card">

            <span>
              RECOMENDACIONES
            </span>

            <h3>
              Qué llevar
            </h3>

            <ul>

              <li>
                ✓ Ropa de abrigo
              </li>

              <li>
                ✓ Vestimenta en capas
              </li>

              <li>
                ✓ Protector solar
              </li>

              <li>
                ✓ Anteojos de sol
              </li>

              <li>
                ✓ Gorra o sombrero
              </li>

              <li>
                ✓ Calzado cómodo
              </li>

              <li>
                ✓ Agua
              </li>

              <li>
                ✓ Medicación personal
              </li>

              <li>
                ✓ Cámara o celular con batería
              </li>

            </ul>


            <h3>
              Importante
            </h3>

            <p>
              El recorrido puede modificarse debido a condiciones
              meteorológicas, estado de caminos, altura,
              disponibilidad de accesos o cuestiones de seguridad.
            </p>

          </aside>

        </section>


        {/* OPERACIÓN */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              EXPERIENCIA CON OPERADOR ESPECIALIZADO
            </span>

            <h2>
              La Puna requiere conocimiento del territorio
            </h2>

            <p>
              Las características de esta región hacen que una travesía
              por la Puna sea muy diferente a una excursión convencional.
            </p>

            <p>
              Existen caminos de montaña, grandes distancias,
              sectores sin servicios cercanos y ambientes
              de elevada altitud.
            </p>

            <p>
              Por este motivo, esta experiencia es realizada por un{" "}
              <strong>
                prestador local asociado especializado en travesías 4x4
                por la Puna Catamarqueña
              </strong>
              .
            </p>

            <p>
              El servicio contempla vehículos preparados para este
              tipo de terreno, guía baqueano, equipamiento para altura
              y asistencia durante el programa.
            </p>

            <p>
              Desde{" "}
              <strong>
                MT Tours & Transfers
              </strong>{" "}
              realizamos la comercialización y coordinación de la experiencia,
              centralizando la consulta y la organización del viaje.
            </p>

          </div>


          <aside className="tour-detail-card">

            <span>
              MODALIDAD
            </span>

            <h3>
              Grupos reducidos
            </h3>

            <ul>

              <li>
                ✓ Mínimo 2 pasajeros
              </li>

              <li>
                ✓ Máximo 4 pasajeros por camioneta
              </li>

              <li>
                ✓ Vehículo 4x4
              </li>

              <li>
                ✓ Guía baqueano
              </li>

              <li>
                ✓ Atención personalizada
              </li>

            </ul>

          </aside>

        </section>


        {/* FAQ */}
        <section className="tour-faq-section">

          <div className="section-heading">

            <span className="section-kicker">
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Aventura en la Puna Catamarqueña
            </h2>

            <p>
              Información importante para organizar tu viaje
              por Antofagasta de la Sierra, Antofalla,
              Volcán Galán y Campo de Piedra Pómez.
            </p>

          </div>


          <div className="tour-faq-grid">


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto cuesta Aventura en la Puna?
              </h3>

              <p>
                La tarifa publicada por MT Tours & Transfers es de{" "}
                <strong>
                  $1.300.000 por persona
                </strong>{" "}
                para un mínimo de 2 pasajeros.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuántos días dura el programa?
              </h3>

              <p>
                La experiencia tiene una duración de{" "}
                <strong>
                  4 días y 3 noches
                </strong>
                .
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿El alojamiento está incluido?
              </h3>

              <p>
                Sí. El programa contempla{" "}
                <strong>
                  3 noches de alojamiento con desayuno incluido
                </strong>
                . El establecimiento se confirma según disponibilidad.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Las excursiones se realizan en 4x4?
              </h3>

              <p>
                Sí. Las travesías por la Puna se realizan
                en vehículos preparados para caminos de altura
                y terrenos propios de la región.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se visita el Campo de Piedra Pómez?
              </h3>

              <p>
                Sí. El{" "}
                <strong>
                  Campo de Piedra Pómez
                </strong>{" "}
                forma parte de la experiencia del cuarto día,
                sujeto siempre a las condiciones de acceso,
                caminos y seguridad.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se visita el Salar de Antofalla?
              </h3>

              <p>
                Sí. Una de las jornadas está dedicada a recorrer
                la zona de{" "}
                <strong>
                  Antofalla, su salar y la comunidad local
                </strong>
                .
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se visita el Volcán Galán?
              </h3>

              <p>
                Sí. El programa contempla una travesía hacia
                el entorno del{" "}
                <strong>
                  Volcán Galán
                </strong>{" "}
                y diferentes paisajes altoandinos de la zona.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿A qué altura se llega?
              </h3>

              <p>
                Durante algunas travesías pueden alcanzarse
                sectores cercanos a los{" "}
                <strong>
                  4.800 metros sobre el nivel del mar
                </strong>
                .
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Hay oxígeno disponible?
              </h3>

              <p>
                El operador dispone de equipamiento destinado
                a la asistencia durante las travesías de altura,
                incluyendo oxígeno.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿El seguro está incluido?
              </h3>

              <p>
                Sí. El programa contempla{" "}
                <strong>
                  seguro de asistencia al viajero
                </strong>{" "}
                durante la experiencia.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuántas personas viajan por camioneta?
              </h3>

              <p>
                La modalidad publicada contempla grupos reducidos,
                con un máximo de{" "}
                <strong>
                  4 pasajeros por camioneta
                </strong>
                .
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿El recorrido puede cambiar?
              </h3>

              <p>
                Sí. En la Puna las condiciones climáticas,
                el estado de los caminos, los accesos y la seguridad
                pueden hacer necesario modificar el orden,
                reemplazar sectores o adaptar el recorrido.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Es necesario reservar con anticipación?
              </h3>

              <p>
                Sí. Al tratarse de un programa de varios días
                que requiere alojamiento, vehículo 4x4 y disponibilidad
                del operador, recomendamos consultar las fechas
                con anticipación.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Quién realiza las excursiones?
              </h3>

              <p>
                La experiencia es operada por un{" "}
                <strong>
                  prestador local asociado especializado en la Puna
                </strong>
                . MT Tours & Transfers realiza la comercialización
                y coordinación del programa.
              </p>

            </article>


          </div>

        </section>


        {/* CTA FINAL */}
        <section className="tour-final-cta">

          <div className="tour-final-cta-content">

            <span className="section-kicker">
              VIVÍ LA PUNA CATAMARQUEÑA
            </span>

            <h2>
              Cuatro días entre volcanes, salares, lagunas y paisajes que parecen de otro planeta
            </h2>

            <p>
              Antofagasta de la Sierra, Antofalla, Volcán Galán,
              Campo de Piedra Pómez y algunos de los paisajes
              más extraordinarios de Catamarca en una experiencia
              4x4 con alojamiento incluido.
            </p>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20Aventura%20en%20la%20Puna%20de%204%20d%C3%ADas.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Consultar disponibilidad por WhatsApp
            </a>

          </div>

        </section>


      </main>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">


          <div className="footer-brand">

            <div className="logo footer-logo">

              <img
                src="/favicon.png"
                alt="MT Tours & Transfers"
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />

              <div>

                <strong>
                  TOURS & TRANSFERS
                </strong>

                <small>
                  Catamarca, Argentina
                </small>

              </div>

            </div>


            <p>
              Descubrí, planificá y viví Catamarca con experiencias y traslados
              pensados para vos.
            </p>

          </div>


          <div className="footer-column">

            <h4>
              Explorá
            </h4>

            <a
              href="/excursiones"
              target="_blank"
              rel="noopener noreferrer"
            >
              Excursiones
            </a>

          </div>


          <div className="footer-column">

            <h4>
              Planificá
            </h4>

            <a
              href="/catamarca-1-dia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Catamarca en 1 día
            </a>

            <a
              href="/catamarca-2-dias"
              target="_blank"
              rel="noopener noreferrer"
            >
              Catamarca en 2 días
            </a>

            <a
              href="/catamarca-3-dias-o-mas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Catamarca en 3 días o más
            </a>

            <a href="/#planifica">
              Armá tu viaje
            </a>

          </div>


          <div className="footer-column">

            <h4>
              MT
            </h4>

            <a
              href="/traslados-catamarca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transfers
            </a>

            <a
              href="/guia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía de Catamarca
            </a>

            <a
              href="/quienes-somos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiénes somos
            </a>

            <a
              href="/contacto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>

          </div>


        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} MT Tours & Transfers
          </span>

          <span>
            Catamarca, Argentina
          </span>

        </div>

      </footer>

    </div>

  )

}


export default AventuraPuna