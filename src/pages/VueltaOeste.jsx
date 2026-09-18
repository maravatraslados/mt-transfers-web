import "../App.css"

import cebila1 from "../assets/cebila-1.jpeg"
import cebila2 from "../assets/cebila-2.jpeg"
import shincal1 from "../assets/shincal-1.jpeg"
import shincal2 from "../assets/shincal-2.jpeg"
import londres from "../assets/londres.webp"
import belen from "../assets/belen.jpeg"
import hilanderas from "../assets/hilanderas.jpg"
import andalgala from "../assets/andalgala.jpeg"
import condadoHuasan from "../assets/condado-huasan.jpeg"
import huasan from "../assets/huasan.jpeg"
import saujil from "../assets/saujil.jpeg"


function VueltaOeste() {

  const title =
    "Vuelta al Oeste Catamarqueño desde Catamarca Capital | MT Tours"

  const description =
    "Vuelta al Oeste Catamarqueño desde San Fernando del Valle de Catamarca. El Shincal, Londres, Belén, Andalgalá y paisajes del oeste en una excursión de día completo."

  const canonicalUrl =
    "https://mttransfers.com/excursiones/vuelta-oeste-catamarqueno"

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


      {/* HEADER ORIGINAL */}
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
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20la%20Vuelta%20al%20Oeste%20Catamarque%C3%B1o."
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
              url(${shincal1})
            `,
          }}
        >

          <div className="tour-detail-hero-content">

            <span className="section-kicker">
              OESTE CATAMARQUEÑO
            </span>

            <h1>
              Vuelta al Oeste Catamarqueño desde San Fernando del Valle de Catamarca
            </h1>

            <p>
              Una gran travesía para descubrir arqueología,
              pueblos históricos, artesanías, montañas y diferentes
              paisajes del oeste de Catamarca.
            </p>


            <div className="tour-detail-meta">

              <span>
                📍 Londres · Belén · Andalgalá · Pomán
              </span>

              <span>
                🚘 Aprox. 600 km
              </span>

              <span>
                ⏱ Día completo
              </span>

              <span>
                💰 $300.000 por persona
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


        {/* LA EXPERIENCIA */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              LA EXPERIENCIA
            </span>

            <h2>
              Una gran vuelta por el oeste de Catamarca
            </h2>

            <p>
              La{" "}
              <strong>
                Vuelta al Oeste Catamarqueño
              </strong>{" "}
              es una de nuestras experiencias más completas con salida
              desde{" "}
              <strong>
                San Fernando del Valle de Catamarca
              </strong>
              .
            </p>

            <p>
              A diferencia de una excursión donde viajamos hacia
              un único atractivo y regresamos, esta propuesta conecta
              diferentes regiones del oeste dentro de un gran circuito
              de aproximadamente{" "}
              <strong>
                600 kilómetros
              </strong>
              .
            </p>

            <p>
              Durante la jornada atravesamos la Quebrada de la Cébila,
              conocemos el legado arqueológico de El Shincal de Quimivil,
              descubrimos Londres y Belén, continuamos hacia Andalgalá
              y completamos la vuelta atravesando otros sectores
              del oeste catamarqueño.
            </p>

            <p>
              Pero la distancia no es lo que define esta experiencia.
              Lo que la hace diferente es que{" "}
              <strong>
                los paisajes, los pueblos y la historia aparecen
                durante todo el camino
              </strong>
              .
            </p>

            <p>
              La montaña cambia, aparecen nuevos valles, conocemos
              sitios arqueológicos, encontramos tradiciones que siguen
              vivas y atravesamos pueblos que poseen su propia identidad.
            </p>

            <p>
              Por eso no pensamos esta excursión como una lista
              de paradas. La pensamos como una forma de descubrir
              cómo cambia Catamarca mientras la recorremos.
            </p>

          </div>


          {/* RESERVA */}
          <aside
            className="tour-detail-card"
            id="reservar"
          >

            <span>
              VUELTA AL OESTE
            </span>

            <h3>
              $300.000 por persona
            </h3>

            <p>
              Una jornada completa para recorrer aproximadamente
              600 km por diferentes regiones del oeste catamarqueño.
            </p>


            <ul>

              <li>
                ✓ Día completo
              </li>

              <li>
                ✓ Aproximadamente 600 km
              </li>

              <li>
                ✓ Mínimo 2 pasajeros
              </li>

              <li>
                ✓ Salida desde Catamarca Capital
              </li>

            </ul>


            <p>
              <strong>
                1 pasajero:
              </strong>{" "}
              consultar tarifa.
            </p>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20la%20Vuelta%20al%20Oeste%20Catamarque%C3%B1o.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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


        {/* LUGARES */}
        <section className="story-section">

          <div className="section-heading">

            <span className="section-kicker">
              LUGARES QUE VAMOS A DESCUBRIR
            </span>

            <h2>
              Cada lugar cuenta una parte diferente de Catamarca
            </h2>

            <p>
              No queremos mostrarte solamente dónde vamos.
              Queremos que conozcas qué hace especial a cada lugar
              y por qué forma parte de esta gran vuelta por el oeste.
            </p>

          </div>


          <div className="story-grid">


            {/* CÉBILA */}
            <article className="story-card">

              <img
                src={cebila1}
                alt="Quebrada de la Cébila camino al oeste de Catamarca"
              />

              <div className="story-card-content">

                <span>
                  PUERTA AL OESTE
                </span>

                <h3>
                  Quebrada de la Cébila
                </h3>

                <p>
                  El viaje comienza a transformarse mucho antes
                  de llegar a los grandes destinos del oeste.
                </p>

                <p>
                  Al ingresar en la{" "}
                  <strong>
                    Quebrada de la Cébila
                  </strong>{" "}
                  dejamos progresivamente atrás el paisaje del
                  Valle Central y comenzamos a internarnos
                  entre montañas.
                </p>

                <p>
                  La ruta avanza por un corredor natural donde
                  las formaciones rocosas, las curvas y las vistas
                  serranas comienzan a anticipar la enorme diversidad
                  geográfica que encontraremos durante la jornada.
                </p>

                <p>
                  No es simplemente un camino para llegar al oeste.
                  Es el primer gran escenario de la excursión
                  y el momento donde empezamos a percibir que
                  el paisaje va a cambiar constantemente.
                </p>

              </div>

            </article>


            {/* SHINCAL */}
            <article className="story-card">

              <img
                src={shincal2}
                alt="El Shincal de Quimivil Londres Catamarca"
              />

              <div className="story-card-content">

                <span>
                  ARQUEOLOGÍA · CULTURA INCA
                </span>

                <h3>
                  El Shincal de Quimivil
                </h3>

                <p>
                  Cerca de Londres encontramos uno de los grandes
                  protagonistas históricos de nuestra Vuelta al Oeste:{" "}
                  <strong>
                    El Shincal de Quimivil
                  </strong>
                  .
                </p>

                <p>
                  Este importante sitio arqueológico permite acercarnos
                  a la presencia inca en el actual territorio argentino
                  y comprender la relevancia que tuvo esta región
                  dentro de una extensa red política, administrativa
                  y ceremonial.
                </p>

                <p>
                  Al recorrer el lugar aparecen plazas, construcciones,
                  sectores ceremoniales y caminos que ayudan
                  a imaginar cómo funcionaba este asentamiento
                  hace siglos.
                </p>

                <p>
                  El valor de la visita no está solamente en observar
                  estructuras antiguas. El paisaje que rodea al sitio
                  también ayuda a comprender por qué este territorio
                  tuvo una importancia estratégica.
                </p>

                <p>
                  Es uno de los momentos de la excursión donde
                  naturaleza e historia se unen de una manera
                  especialmente fuerte.
                </p>

                <small>
                  El ingreso y la modalidad de visita están sujetos
                  a los horarios y disponibilidad del sitio.
                </small>

              </div>

            </article>


            {/* LONDRES */}
            <article className="story-card">

              <img
                src={londres}
                alt="Londres Catamarca Vuelta al Oeste"
              />

              <div className="story-card-content">

                <span>
                  HISTORIA · RUTA 40
                </span>

                <h3>
                  Londres
                </h3>

                <p>
                  Muy cerca de El Shincal encontramos{" "}
                  <strong>
                    Londres
                  </strong>
                  , una localidad profundamente vinculada
                  con la historia del oeste catamarqueño.
                </p>

                <p>
                  Su ubicación dentro del corredor de la Ruta 40
                  la convierte en un punto natural de conexión
                  entre paisajes de montaña, historia y arqueología.
                </p>

                <p>
                  Pero Londres no es solamente la localidad
                  desde donde accedemos a El Shincal.
                </p>

                <p>
                  Su territorio permite observar cómo distintas
                  etapas de la historia fueron dejando huellas
                  en una misma región, desde las culturas originarias
                  hasta los posteriores asentamientos históricos.
                </p>

                <p>
                  Su tranquilidad y su entorno serrano aportan
                  además otro ritmo a la experiencia antes
                  de continuar hacia Belén.
                </p>

              </div>

            </article>


            {/* BELÉN */}
            <article className="story-card">

              <img
                src={belen}
                alt="Belén Catamarca excursión desde Catamarca Capital"
              />

              <div className="story-card-content">

                <span>
                  CULTURA · IDENTIDAD
                </span>

                <h3>
                  Belén
                </h3>

                <p>
                  Continuamos hacia{" "}
                  <strong>
                    Belén
                  </strong>
                  , uno de los grandes centros culturales
                  y turísticos del oeste de Catamarca.
                </p>

                <p>
                  Rodeada por montañas, la ciudad posee una identidad
                  profundamente relacionada con su territorio,
                  sus artesanías y las tradiciones que continúan
                  transmitiéndose entre generaciones.
                </p>

                <p>
                  Una de sus expresiones más reconocidas es
                  la producción textil artesanal.
                </p>

                <p>
                  Ponchos, mantas y diferentes trabajos realizados
                  en telar muestran conocimientos que requieren
                  tiempo, técnica y una relación muy particular
                  con las materias primas de la región.
                </p>

                <p>
                  Conocer Belén permite descubrir que el patrimonio
                  de Catamarca no se encuentra únicamente
                  en sitios arqueológicos o edificios históricos.
                </p>

                <p>
                  <strong>
                    También permanece vivo en los oficios,
                    las familias y las manos de sus artesanos.
                  </strong>
                </p>


                <a
                  href="/guia/belen-londres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="excursion-guide-link"
                >
                  Ver guía completa de Belén y Londres →
                </a>

              </div>

            </article>


            {/* HILANDERAS */}
            <article className="story-card">

              <img
                src={hilanderas}
                alt="Hilanderas y tradición textil de Belén Catamarca"
              />

              <div className="story-card-content">

                <span>
                  SABERES QUE SIGUEN VIVOS
                </span>

                <h3>
                  Hilanderas y tradición textil
                </h3>

                <p>
                  Una de las formas más interesantes de acercarnos
                  a la identidad de Belén es conocer el trabajo
                  de sus{" "}
                  <strong>
                    hilanderas y artesanos textiles
                  </strong>
                  .
                </p>

                <p>
                  Detrás de una pieza artesanal existe mucho más
                  que el resultado final.
                </p>

                <p>
                  La preparación de las fibras, el hilado, el teñido
                  y el trabajo en telar forman parte de procesos
                  que requieren conocimientos transmitidos
                  durante generaciones.
                </p>

                <p>
                  Cuando existe disponibilidad buscamos acercarnos
                  a estos espacios porque permiten entender
                  el verdadero valor de una tradición que todavía
                  forma parte de la vida cotidiana de muchas
                  familias del oeste.
                </p>

                <p>
                  Es una experiencia cultural diferente:
                  no observamos solamente un producto terminado,
                  sino que descubrimos la historia y el trabajo
                  que existen detrás de él.
                </p>

              </div>

            </article>


            {/* ANDALGALÁ */}
            <article className="story-card">

              <img
                src={andalgala}
                alt="Andalgalá Perla del Oeste Catamarca"
              />

              <div className="story-card-content">

                <span>
                  LA PERLA DEL OESTE
                </span>

                <h3>
                  Andalgalá
                </h3>

                <p>
                  La Vuelta al Oeste continúa hacia{" "}
                  <strong>
                    Andalgalá
                  </strong>
                  , conocida tradicionalmente como{" "}
                  <strong>
                    La Perla del Oeste
                  </strong>
                  .
                </p>

                <p>
                  Rodeada por montañas, la ciudad nos recibe
                  con un escenario diferente al que encontramos
                  anteriormente en Londres y Belén.
                </p>

                <p>
                  Andalgalá combina paisaje serrano, historia
                  y una fuerte identidad productiva.
                </p>

                <p>
                  El olivo, los nogales y diferentes productos
                  regionales forman parte de una relación histórica
                  entre las comunidades del valle y su territorio.
                </p>

                <p>
                  La ciudad también posee una importante tradición
                  artesanal y funciona como punto de conexión
                  con numerosos paisajes y localidades
                  de esta región de Catamarca.
                </p>

                <p>
                  Llegar hasta Andalgalá vuelve a mostrar algo
                  que se repite durante toda nuestra vuelta:
                  avanzamos algunos kilómetros y parece que
                  estamos descubriendo otra provincia.
                </p>

              </div>

            </article>


            {/* HUASÁN */}
            <article className="story-card">

              <img
                src={condadoHuasan}
                alt="Condado de Huasán Andalgalá Catamarca"
              />

              <div className="story-card-content">

                <span>
                  HISTORIA · PATRIMONIO RURAL
                </span>

                <h3>
                  Condado de Huasán
                </h3>

                <p>
                  En los alrededores de Andalgalá encontramos
                  el{" "}
                  <strong>
                    Condado de Huasán
                  </strong>
                  , un lugar que incorpora otra dimensión
                  histórica a nuestra experiencia.
                </p>

                <p>
                  Después de conocer el legado prehispánico
                  de El Shincal y las tradiciones culturales
                  de Belén, Huasán nos permite acercarnos
                  a la historia rural y productiva de esta región.
                </p>

                <p>
                  La antigua estancia conserva construcciones
                  tradicionales y una arquitectura vinculada
                  con otras etapas de la historia de Andalgalá.
                </p>

                <p>
                  Sus muros, espacios rurales y entorno permiten
                  imaginar cómo funcionaban antiguamente
                  las grandes propiedades productivas del valle.
                </p>

                <p>
                  Huasán también mantiene una estrecha relación
                  con la{" "}
                  <strong>
                    tradición olivícola
                  </strong>{" "}
                  de la zona.
                </p>

                <p>
                  El cultivo del olivo y las actividades asociadas
                  a esta producción forman parte de una identidad
                  que todavía puede reconocerse en el paisaje
                  y en la actividad regional.
                </p>

                <p>
                  Por eso no incorporamos Huasán solamente
                  como una parada fotográfica.
                </p>

                <p>
                  Su valor está en ayudarnos a comprender
                  otra parte de la historia del oeste:
                  la relación entre territorio, producción,
                  vida rural y desarrollo de las comunidades.
                </p>

                <small>
                  Las posibilidades de ingreso y actividades
                  dentro del establecimiento están sujetas
                  a disponibilidad y coordinación previa.
                </small>

              </div>

            </article>


            {/* POMÁN */}
            <article className="story-card">

              <img
                src={saujil}
                alt="Colpes Saujil y Pomán Catamarca"
              />

              <div className="story-card-content">

                <span>
                  PUEBLOS · PAISAJES DEL OESTE
                </span>

                <h3>
                  Colpes, Saujil y Pomán
                </h3>

                <p>
                  Después de Andalgalá comenzamos otro tramo
                  fundamental de nuestra gran vuelta.
                </p>

                <p>
                  El camino por sectores de{" "}
                  <strong>
                    Colpes, Saujil y Pomán
                  </strong>{" "}
                  incorpora pequeños pueblos, paisajes rurales
                  y nuevas vistas de las montañas.
                </p>

                <p>
                  Este sector tiene además un valor especial:
                  permite que la experiencia continúe mientras
                  comenzamos progresivamente el regreso
                  hacia el Valle Central.
                </p>

                <p>
                  No necesitamos simplemente desandar todo
                  el camino realizado durante la ida.
                </p>

                <p>
                  Seguimos atravesando otros sectores
                  de Catamarca y descubriendo nuevos escenarios
                  mientras completamos la gran Vuelta al Oeste.
                </p>

              </div>

            </article>


          </div>

        </section>
                {/* EL VALOR DE LA VUELTA */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              EL VIAJE TAMBIÉN ES PARTE DE LA EXPERIENCIA
            </span>

            <h2>
              Aproximadamente 600 km para descubrir diferentes caras de Catamarca
            </h2>

            <p>
              Hablar de aproximadamente{" "}
              <strong>
                600 kilómetros
              </strong>{" "}
              puede dar la impresión de que se trata de una gran
              distancia para llegar a un único atractivo.
              En esta excursión sucede exactamente lo contrario.
            </p>

            <p>
              La{" "}
              <strong>
                Vuelta al Oeste Catamarqueño
              </strong>{" "}
              comienza a mostrarnos lugares interesantes prácticamente
              desde que dejamos San Fernando del Valle de Catamarca.
              El paisaje se transforma mientras avanzamos y cada
              región aporta algo diferente.
            </p>

            <p>
              Primero dejamos atrás el Valle Central y comenzamos
              a atravesar sectores montañosos. La Quebrada de la Cébila
              funciona como una verdadera puerta natural hacia
              el oeste y marca uno de los primeros grandes cambios
              del paisaje.
            </p>

            <p>
              Más adelante, la experiencia incorpora arqueología
              e historia con El Shincal de Quimivil y Londres.
              En Belén aparecen las artesanías y una tradición textil
              que continúa formando parte de la identidad local.
            </p>

            <p>
              Cuando llegamos a Andalgalá, el escenario vuelve
              a modificarse. Encontramos otro valle, nuevas montañas
              y una región con una fuerte relación con la agricultura,
              los productos regionales y la vida rural.
            </p>

            <p>
              Huasán suma otra etapa de la historia y el paso
              por sectores de Colpes, Saujil y Pomán permite
              continuar descubriendo pueblos y paisajes mientras
              comenzamos el regreso hacia Catamarca Capital.
            </p>


            <div
              style={{
                marginTop: "34px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >

              <span className="section-kicker">
                UNA VERDADERA VUELTA
              </span>

              <h3>
                No viajamos 600 km para conocer un solo lugar
              </h3>

              <p>
                Los aproximadamente 600 kilómetros corresponden
                al conjunto de la experiencia.
              </p>

              <p>
                Los caminos, las quebradas, los pueblos,
                los sitios culturales y los diferentes paisajes
                aparecen durante toda la jornada.
              </p>

              <p>
                Esto hace que los desplazamientos entre un lugar
                y otro no sean simplemente tiempo de traslado.
                Mirar por la ventanilla también forma parte
                de conocer Catamarca.
              </p>

              <p>
                Hay momentos donde el protagonista es un sitio
                arqueológico, otros donde lo es un pueblo,
                una tradición o una antigua estancia y otros
                donde la propia geografía se convierte
                en el principal atractivo.
              </p>

              <p>
                <strong>
                  Esa diversidad es el verdadero valor
                  de la Vuelta al Oeste Catamarqueño.
                </strong>
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
                DE ESTE A OESTE
              </span>

              <h3>
                Una jornada para comprender la diversidad de Catamarca
              </h3>

              <p>
                En una sola excursión pasamos de los paisajes
                del Valle Central a corredores montañosos,
                sitios arqueológicos, localidades históricas,
                centros artesanales y ambientes rurales.
              </p>

              <p>
                También atravesamos diferentes momentos
                de la historia. El legado prehispánico aparece
                en El Shincal; Londres y otros pueblos incorporan
                nuevas etapas; Belén mantiene vivas tradiciones
                artesanales y Huasán permite acercarnos
                a la historia rural y productiva.
              </p>

              <p>
                Por eso esta experiencia está pensada especialmente
                para quienes quieren aprovechar un día completo
                para llevarse una visión mucho más amplia
                de la provincia.
              </p>

              <p>
                Al regresar a San Fernando del Valle de Catamarca,
                no habremos conocido solamente varios atractivos.
                Habremos atravesado diferentes territorios,
                paisajes e historias que ayudan a comprender
                por qué el oeste posee una identidad tan particular.
              </p>

            </div>

          </div>


          {/* DATOS DEL SERVICIO */}
          <aside className="tour-detail-card">

            <span>
              DATOS DE LA EXPERIENCIA
            </span>

            <h3>
              Vuelta al Oeste Catamarqueño
            </h3>


            <ul>

              <li>
                ✓ Salida desde Catamarca Capital
              </li>

              <li>
                ✓ Aproximadamente 600 km
              </li>

              <li>
                ✓ Excursión de día completo
              </li>

              <li>
                ✓ Mínimo 2 pasajeros
              </li>

              <li>
                ✓ 1 pasajero: consultar tarifa
              </li>

            </ul>


            <h3>
              El servicio incluye
            </h3>


            <ul>

              <li>
                ✓ Traslado durante todo el circuito
              </li>

              <li>
                ✓ Vehículo climatizado
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


            <p>
              <strong>
                Tarifa:
              </strong>
            </p>

            <h3>
              $300.000 por persona
            </h3>

            <p>
              Tarifa para un mínimo de 2 pasajeros.
            </p>

            <p>
              Para 1 pasajero, consultar tarifa especial.
            </p>


            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20la%20Vuelta%20al%20Oeste%20Catamarque%C3%B1o.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              💬 Consultar disponibilidad
            </a>

          </aside>

        </section>


        {/* ANTES DE VIAJAR */}
        <section className="tour-detail-content">

          <div className="tour-detail-main">

            <span className="section-kicker">
              ANTES DE VIAJAR
            </span>

            <h2>
              Una jornada extensa que conviene comenzar temprano
            </h2>

            <p>
              Por la extensión del circuito, recomendamos realizar
              una{" "}
              <strong>
                salida temprana desde San Fernando del Valle de Catamarca
              </strong>
              .
            </p>

            <p>
              Esto permite aprovechar mejor las horas de luz
              y organizar las diferentes visitas con mayor comodidad.
            </p>

            <p>
              El orden de algunos lugares puede adaptarse según
              los horarios de funcionamiento de los atractivos,
              las condiciones climáticas y el estado de los caminos.
            </p>

            <p>
              En{" "}
              <strong>
                El Shincal de Quimivil
              </strong>
              , el ingreso y la modalidad de visita dependen
              de los horarios y condiciones establecidas por el sitio.
            </p>

            <p>
              Los encuentros con artesanos o hilanderas de Belén
              dependen de la disponibilidad de los talleres
              durante el día de la excursión.
            </p>

            <p>
              En el caso del Condado de Huasán, cualquier posibilidad
              de ingreso o actividad dentro del establecimiento
              requiere coordinación previa y está sujeta
              a disponibilidad.
            </p>

          </div>


          {/* RECOMENDACIONES */}
          <aside className="tour-detail-card">

            <span>
              RECOMENDACIONES
            </span>

            <h3>
              Qué llevar
            </h3>


            <ul>

              <li>
                ✓ Agua
              </li>

              <li>
                ✓ Protector solar
              </li>

              <li>
                ✓ Anteojos de sol
              </li>

              <li>
                ✓ Calzado cómodo
              </li>

              <li>
                ✓ Abrigo
              </li>

              <li>
                ✓ Celular con batería
              </li>

              <li>
                ✓ Cámara fotográfica si lo deseás
              </li>

            </ul>


            <h3>
              Comidas
            </h3>

            <p>
              Las comidas y bebidas no están incluidas
              en la tarifa.
            </p>

            <p>
              Durante la jornada se coordinan las paradas
              necesarias de acuerdo con los tiempos
              y el desarrollo de la excursión.
            </p>

          </aside>

        </section>


        {/* GALERÍA */}
        <section className="tour-gallery-section">

          <div className="section-heading">

            <span className="section-kicker">
              POSTALES DEL OESTE
            </span>

            <h2>
              Paisajes e historias que cambian durante toda la vuelta
            </h2>

            <p>
              Una selección de los escenarios que forman parte
              de esta gran experiencia por el oeste de Catamarca.
            </p>

          </div>


          <div className="tour-gallery-grid adobe-gallery-grid">


            <figure>

              <img
                src={cebila2}
                alt="Quebrada de la Cébila Catamarca"
              />

              <figcaption>

                <strong>
                  Quebrada de la Cébila
                </strong>

                <span>
                  La puerta natural hacia el oeste.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={shincal1}
                alt="El Shincal de Quimivil Catamarca"
              />

              <figcaption>

                <strong>
                  El Shincal de Quimivil
                </strong>

                <span>
                  Arqueología y paisaje en un mismo lugar.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={londres}
                alt="Londres Catamarca"
              />

              <figcaption>

                <strong>
                  Londres
                </strong>

                <span>
                  Historia junto al corredor de la Ruta 40.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={belen}
                alt="Belén Catamarca"
              />

              <figcaption>

                <strong>
                  Belén
                </strong>

                <span>
                  Cultura e identidad del oeste.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={hilanderas}
                alt="Hilanderas de Belén Catamarca"
              />

              <figcaption>

                <strong>
                  Tradición textil
                </strong>

                <span>
                  Saberes que continúan pasando de generación en generación.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={andalgala}
                alt="Andalgalá Catamarca"
              />

              <figcaption>

                <strong>
                  Andalgalá
                </strong>

                <span>
                  La Perla del Oeste.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={huasan}
                alt="Huasán Andalgalá Catamarca"
              />

              <figcaption>

                <strong>
                  Huasán
                </strong>

                <span>
                  Historia rural y tradición productiva.
                </span>

              </figcaption>

            </figure>


            <figure>

              <img
                src={saujil}
                alt="Saujil Pomán Catamarca"
              />

              <figcaption>

                <strong>
                  Saujil · Pomán
                </strong>

                <span>
                  El oeste continúa durante el regreso.
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
              Vuelta al Oeste Catamarqueño desde Catamarca Capital
            </h2>

            <p>
              Información útil para organizar esta experiencia
              desde San Fernando del Valle de Catamarca.
            </p>

          </div>


          <div className="tour-faq-grid">


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto cuesta la Vuelta al Oeste Catamarqueño?
              </h3>

              <p>
                La tarifa es de{" "}
                <strong>
                  $300.000 por persona
                </strong>{" "}
                con un mínimo de 2 pasajeros.
                Para 1 pasajero, consultar tarifa.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuántos kilómetros tiene el circuito?
              </h3>

              <p>
                La Vuelta al Oeste tiene aproximadamente{" "}
                <strong>
                  600 kilómetros de recorrido total
                </strong>{" "}
                con salida y regreso a San Fernando del Valle
                de Catamarca.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Cuánto dura la excursión?
              </h3>

              <p>
                Es una experiencia de{" "}
                <strong>
                  día completo
                </strong>
                . Por la extensión del circuito recomendamos
                comenzar temprano.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Desde dónde sale?
              </h3>

              <p>
                La salida se realiza desde{" "}
                <strong>
                  San Fernando del Valle de Catamarca
                </strong>
                , también conocida como Catamarca Capital,
                o desde un punto previamente coordinado.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Qué lugares se conocen durante la vuelta?
              </h3>

              <p>
                El circuito conecta la Quebrada de la Cébila,
                Londres, El Shincal de Quimivil, Belén,
                Andalgalá, Huasán y sectores de Colpes,
                Saujil y Pomán.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se visita El Shincal de Quimivil?
              </h3>

              <p>
                Sí. El circuito contempla El Shincal de Quimivil.
                El ingreso y modalidad de visita dependen
                de los horarios y disponibilidad del sitio.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se pueden conocer artesanos de Belén?
              </h3>

              <p>
                Cuando existe disponibilidad buscamos incorporar
                el contacto con artesanos o hilanderas para acercarnos
                a la tradición textil de Belén.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Se puede ingresar al Condado de Huasán?
              </h3>

              <p>
                La posibilidad de ingreso o realización de actividades
                dentro del establecimiento está sujeta a disponibilidad
                y coordinación previa.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Por qué se llama Vuelta al Oeste?
              </h3>

              <p>
                Porque la experiencia conecta diferentes regiones
                del oeste catamarqueño dentro de un gran circuito,
                en lugar de realizar únicamente un viaje de ida
                y regreso hacia un solo destino.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Las comidas están incluidas?
              </h3>

              <p>
                No. Las comidas y bebidas no están incluidas.
                Durante la jornada coordinamos las paradas necesarias.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿Puedo hacer la excursión si viajo solo?
              </h3>

              <p>
                Sí. La tarifa publicada corresponde a servicios
                con un mínimo de 2 pasajeros.
                Para 1 pasajero, consultar tarifa especial.
              </p>

            </article>


            <article className="tour-faq-card">

              <h3>
                ¿El recorrido puede modificarse?
              </h3>

              <p>
                Sí. El orden de algunos lugares puede adaptarse
                según horarios de los atractivos, condiciones
                climáticas, estado de los caminos o cuestiones
                de seguridad.
              </p>

            </article>


          </div>

        </section>


        {/* CTA FINAL */}
        <section className="tour-final-cta">

          <div className="tour-final-cta-content">

            <span className="section-kicker">
              VIVÍ EL OESTE CATAMARQUEÑO
            </span>

            <h2>
              Una gran vuelta para descubrir mucho más de Catamarca
            </h2>

            <p>
              Montañas, arqueología, pueblos históricos,
              tradiciones textiles, paisajes rurales
              y aproximadamente 600 km de una provincia
              que cambia durante todo el camino.
            </p>
            

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20la%20Vuelta%20al%20Oeste%20Catamarque%C3%B1o.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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


          {/* MARCA */}
          <div className="footer-brand">

            <div className="logo footer-logo">

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


            <p>
              Descubrí, planificá y viví Catamarca con experiencias y traslados
              pensados para vos.
            </p>

          </div>


          {/* EXPLORÁ */}
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


          {/* PLANIFICÁ */}
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


          {/* MT */}
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


        {/* PARTE INFERIOR */}
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


export default VueltaOeste