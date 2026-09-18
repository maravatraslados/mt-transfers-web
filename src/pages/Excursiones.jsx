import { useState } from "react"
import "../App.css"

import cuestaPortezuelo from "../assets/cuesta-portezuelo.jpg"
import vueltaCerroAncasti from "../assets/vuelta-cerro-ancasti.jpg"
import cuestaSinguil from "../assets/cuesta-singuil.jpg"
import rutaAdobe from "../assets/ruta-adobe.jpg"
import elRodeo from "../assets/el-rodeo.jpg"
import shincalOeste from "../assets/shincal-1.jpeg"
import fiambala from "../assets/fiambala.jpg"
import piedraPomezPuna from "../assets/piedra-pomez-puna.jpg"
import rutaSeismiles from "../assets/ruta-seismiles.jpg"


function Excursiones() {

  const [filtro, setFiltro] = useState("Todas")

  const title =
    "Excursiones en Catamarca | Tours y Experiencias"

  const description =
    "Descubrí excursiones en Catamarca: Fiambalá, Ruta del Adobe, Cuesta del Portezuelo, El Rodeo, Shincal, Belén y recorridos para conocer la provincia."

  const canonicalUrl =
    "https://mttransfers.com/excursiones"

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

          <a href="/quienes-somos">
            Quiénes somos
          </a>

          <a href="/contacto">
            Contacto
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


      <main className="excursiones-page">

        {/* HERO */}
        <section className="excursiones-hero">

          <div className="excursiones-hero-content">

            <span className="section-kicker">
              EXPERIENCIAS EN CATAMARCA
            </span>

            <h1>
              Excursiones para descubrir Catamarca
            </h1>

            <p>
              Naturaleza, cultura, aventura y paisajes únicos.
              Encontrá la experiencia ideal según dónde estés,
              cuánto tiempo tengas y cómo quieras viajar.
            </p>

            <a
              href="#catalogo"
              className="button button-primary"
            >
              Ver excursiones
            </a>

          </div>

        </section>


        {/* CATÁLOGO */}
        <section
          className="excursiones-content"
          id="catalogo"
        >

          <div className="section-heading">

            <span className="section-kicker">
              EXPLORÁ CATAMARCA
            </span>

            <h2>
              Encontrá tu próxima experiencia
            </h2>

            <p>
              Elegí según el lugar, el tipo de experiencia
              y el tiempo que tengas disponible.
            </p>

          </div>


          {/* FILTROS */}
          <div className="excursion-filters">

            <button
              onClick={() => setFiltro("Todas")}
              style={{
                background:
                  filtro === "Todas"
                    ? "#111111"
                    : "#ffffff",

                color:
                  filtro === "Todas"
                    ? "#ffffff"
                    : "#333333",

                borderColor:
                  filtro === "Todas"
                    ? "#111111"
                    : "#dddddd",
              }}
            >
              Todas
            </button>


            <button
              onClick={() => setFiltro("Desde Capital")}
              style={{
                background:
                  filtro === "Desde Capital"
                    ? "#111111"
                    : "#ffffff",

                color:
                  filtro === "Desde Capital"
                    ? "#ffffff"
                    : "#333333",

                borderColor:
                  filtro === "Desde Capital"
                    ? "#111111"
                    : "#dddddd",
              }}
            >
              Desde Capital
            </button>


            <button
              onClick={() => setFiltro("Oeste")}
              style={{
                background:
                  filtro === "Oeste"
                    ? "#111111"
                    : "#ffffff",

                color:
                  filtro === "Oeste"
                    ? "#ffffff"
                    : "#333333",

                borderColor:
                  filtro === "Oeste"
                    ? "#111111"
                    : "#dddddd",
              }}
            >
              Oeste
            </button>


            <button
              onClick={() => setFiltro("Ambato")}
              style={{
                background:
                  filtro === "Ambato"
                    ? "#111111"
                    : "#ffffff",

                color:
                  filtro === "Ambato"
                    ? "#ffffff"
                    : "#333333",

                borderColor:
                  filtro === "Ambato"
                    ? "#111111"
                    : "#dddddd",
              }}
            >
              Ambato
            </button>


            <button
              onClick={() => setFiltro("Cultural")}
              style={{
                background:
                  filtro === "Cultural"
                    ? "#111111"
                    : "#ffffff",

                color:
                  filtro === "Cultural"
                    ? "#ffffff"
                    : "#333333",

                borderColor:
                  filtro === "Cultural"
                    ? "#111111"
                    : "#dddddd",
              }}
            >
              Cultural
            </button>


            <button
              onClick={() => setFiltro("Día completo")}
              style={{
                background:
                  filtro === "Día completo"
                    ? "#111111"
                    : "#ffffff",

                color:
                  filtro === "Día completo"
                    ? "#ffffff"
                    : "#333333",

                borderColor:
                  filtro === "Día completo"
                    ? "#111111"
                    : "#dddddd",
              }}
            >
              Día completo
            </button>

          </div>


          {/* TARJETAS */}
          <div className="excursion-catalog">


            {/* CIRCUITO INTEGRAL */}
            {(
              filtro === "Todas" ||
              filtro === "Desde Capital" ||
              filtro === "Día completo"
            ) && (

              <article className="excursion-item">

                <div className="excursion-item-image excursion-double-image">

                  <div className="excursion-double-image-part">
                    <img
                      src={cuestaPortezuelo}
                      alt="Cuesta del Portezuelo en el Circuito Integral de Catamarca"
                    />
                  </div>

                  <div className="excursion-double-image-part">
                    <img
                      src={elRodeo}
                      alt="El Rodeo en el Circuito Integral de Catamarca"
                    />
                  </div>

                  <span>
                    VALLE CENTRAL · AMBATO
                  </span>

                </div>


                <div className="excursion-item-content">

                  <h3>
                    Circuito Integral de Catamarca
                  </h3>

                  <p>
                    Descubrí en una jornada algunos de los
                    paisajes y localidades más representativos
                    del Valle Central: Cuesta del Portezuelo,
                    Valle Viejo, Fray Mamerto Esquiú,
                    Dique Las Pirquitas, La Puerta y El Rodeo.
                  </p>


                  <div className="excursion-item-meta">

                    <span>
                      ⏱ 1 día · 5 h aprox.
                    </span>

                    <span>
                      🚗 220 km aprox.
                    </span>

                    <span>
                      💰 $120.000
                    </span>

                  </div>


                  <a
                    href="/excursiones/circuito-integral-catamarca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver experiencia →
                  </a>

                </div>

              </article>
            )}


            {/* RUTA DEL ADOBE + FIAMBALÁ */}
            {(
              filtro === "Todas" ||
              filtro === "Oeste" ||
              filtro === "Cultural" ||
              filtro === "Día completo"
            ) && (

              <article className="excursion-item">

                <div className="excursion-item-image excursion-double-image">

                  <div className="excursion-double-image-part">
                    <img
                      src={rutaAdobe}
                      alt="Ruta del Adobe en Catamarca"
                    />
                  </div>

                  <div className="excursion-double-image-part">
                    <img
                      src={fiambala}
                      alt="Termas de Fiambalá en Catamarca"
                    />
                  </div>

                  <span>
                    TINOGASTA · FIAMBALÁ
                  </span>

                </div>


                <div className="excursion-item-content">

                  <h3>
                    Ruta del Adobe + Termas de Fiambalá
                  </h3>

                  <p>
                    Historia, arquitectura y paisajes del
                    oeste catamarqueño, combinados con una
                    experiencia de relax en las Termas de
                    Fiambalá.
                  </p>


                  <div className="excursion-item-meta">

                    <span>
                      ⏱ Día completo
                    </span>

                    <span>
                      🏛️ Historia + ♨️ Termas
                    </span>

                    <span>
                      💰 $230.000
                    </span>

                  </div>


                  <a
                    href="/excursiones/ruta-del-adobe-fiambala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver experiencia →
                  </a>

                </div>

              </article>
            )}


            {/* EL RODEO + VIRGEN */}
            {(
              filtro === "Todas" ||
              filtro === "Desde Capital" ||
              filtro === "Ambato" ||
              filtro === "Cultural" ||
              filtro === "Día completo"
            ) && (

              <article className="excursion-item">

                <div className="excursion-item-image">

                  <img
                    src={elRodeo}
                    alt="Virgen del Valle en las sierras de El Rodeo, Catamarca"
                  />

                  <span>
                    EL RODEO · AMBATO
                  </span>

                </div>


                <div className="excursion-item-content">

                  <h3>
                    El Rodeo + Virgen Más Alta del Mundo
                  </h3>

                  <p>
                    Un recorrido por las sierras de Ambato
                    que combina El Rodeo, naturaleza,
                    caminos de montaña y uno de los grandes
                    íconos religiosos de Catamarca.
                  </p>


                  <div className="excursion-item-meta">

                    <span>
                      ⏱ Hasta 8 h aprox.
                    </span>

                    <span>
                      ⛰️ Naturaleza + Cultura
                    </span>

                    <span>
                      💰 $110.000
                    </span>

                  </div>


                  <a
                    href="/excursiones/el-rodeo-virgen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver experiencia →
                  </a>

                </div>

              </article>
            )}


            {/* VUELTA AL OESTE */}
            {(
              filtro === "Todas" ||
              filtro === "Oeste" ||
              filtro === "Cultural" ||
              filtro === "Día completo"
            ) && (

              <article className="excursion-item">

                <div className="excursion-item-image">

                  <img
                    src={shincalOeste}
                    alt="Vuelta al Oeste Catamarqueño"
                  />

                  <span>
                    OESTE CATAMARQUEÑO
                  </span>

                </div>


                <div className="excursion-item-content">

                  <h3>
                    Vuelta al Oeste Catamarqueño
                  </h3>

                  <p>
                    Shincal, Belén, hilanderas, Andalgalá,
                    Huasán, Saujil y Pomán en un gran circuito
                    por la historia y los paisajes del oeste.
                  </p>


                  <div className="excursion-item-meta">

                    <span>
                      ⏱ Día completo
                    </span>

                    <span>
                      🚗 600 km aprox.
                    </span>

                    <span>
                      💰 $300.000
                    </span>

                  </div>


                  <a
                    href="/excursiones/vuelta-oeste-catamarqueno"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver experiencia →
                  </a>

                </div>

              </article>
            )}


            {/* CUESTA DE SINGUIL */}
            {(
              filtro === "Todas" ||
              filtro === "Desde Capital" ||
              filtro === "Ambato" ||
              filtro === "Día completo"
            ) && (

              <article className="excursion-item">

                <div className="excursion-item-image">

                  <img
                    src={cuestaSinguil}
                    alt="Cuesta de Singuil y Balcozna en Catamarca"
                  />

                  <span>
                    AMBATO
                  </span>

                </div>


                <div className="excursion-item-content">

                  <h3>
                    Cuesta de Singuil + Balcozna
                  </h3>

                  <p>
                    Un recorrido entre sierras, vegetación
                    y paisajes panorámicos para descubrir
                    una de las rutas más atractivas del
                    centro catamarqueño.
                  </p>


                  <div className="excursion-item-meta">

                    <span>
                      ⏱ 4 a 5 h aprox.
                    </span>

                    <span>
                      🚗 190 km aprox.
                    </span>

                    <span>
                      💰 $90.000
                    </span>

                  </div>


                  <a
                    href="/excursiones/cuesta-de-singuil-balcozna"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver experiencia →
                  </a>

                </div>

              </article>
            )}


            {/* CUESTA DEL PORTEZUELO */}
            {(
              filtro === "Todas" ||
              filtro === "Desde Capital" ||
              filtro === "Cultural"
            ) && (

              <article className="excursion-item">

                <div className="excursion-item-image">

                  <img
                    src={cuestaPortezuelo}
                    alt="Cuesta del Portezuelo en Catamarca"
                  />

                  <span>
                    VALLE CENTRAL
                  </span>

                </div>


                <div className="excursion-item-content">

                  <h3>
                    Cuesta del Portezuelo
                  </h3>

                  <p>
                    Una de las postales más emblemáticas
                    de Catamarca, con curvas de montaña
                    y vistas panorámicas inolvidables.
                  </p>


                  <div className="excursion-item-meta">

                    <span>
                      ⏱ Medio día
                    </span>

                    <span>
                      🚗 Desde 50 km aprox.
                    </span>

                    <span>
                      💰 Desde $40.000
                    </span>

                  </div>


                  <a
                    href="/excursiones/cuesta-del-portezuelo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver experiencia →
                  </a>

                </div>

              </article>
            )}


            {/* VUELTA AL CERRO ANCASTI */}
            {(
              filtro === "Todas" ||
              filtro === "Desde Capital" ||
              filtro === "Día completo"
            ) && (

              <article className="excursion-item">

                <div className="excursion-item-image">

                  <img
                    src={vueltaCerroAncasti}
                    alt="Vuelta al Cerro Ancasti en Catamarca"
                  />

                  <span>
                    ANCASTI
                  </span>

                </div>


                <div className="excursion-item-content">

                  <h3>
                    Vuelta al Cerro Ancasti
                  </h3>

                  <p>
                    Un circuito entre sierras, pueblos
                    y caminos escénicos para recorrer
                    y disfrutar el este de Catamarca.
                  </p>


                  <div className="excursion-item-meta">

                    <span>
                      ⏱ Día completo
                    </span>

                    <span>
                      🚘 Circuito panorámico
                    </span>

                    <span>
                      💰 Desde $140.000
                    </span>

                  </div>


                  <a
                    href="/excursiones/vuelta-al-cerro-ancasti"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver experiencia →
                  </a>

                </div>

              </article>
            )}

            {/* AVENTURA EN LA PUNA */}
{(
  filtro === "Todas" ||
  filtro === "Oeste"
) && (

  <article className="excursion-item">

    <div className="excursion-item-image">

      <img
        src={piedraPomezPuna}
        alt="Aventura en la Puna Catamarqueña y Campo de Piedra Pómez"
      />

      <span>
        PUNA CATAMARQUEÑA · 4X4
      </span>

    </div>


    <div className="excursion-item-content">

      <h3>
        Aventura en la Puna Catamarqueña
      </h3>

      <p>
        Cuatro días para descubrir Antofagasta de la Sierra,
        Salar de Antofalla, Volcán Galán, lagunas de altura,
        fumarolas y el extraordinario Campo de Piedra Pómez.
      </p>


      <div className="excursion-item-meta">

        <span>
          ⏱ 4 días · 3 noches
        </span>

        <span>
          🚙 Travesías 4x4
        </span>

        <span>
          💰 $1.300.000 por persona
        </span>

      </div>


      <a
        href="/excursiones/aventura-puna-catamarquena"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver experiencia →
      </a>

    </div>

  </article>
)}

{/* FIAMBALÁ + RUTA DE LOS SEISMILES */}
{(
  filtro === "Todas" ||
  filtro === "Oeste"
) && (

  <article className="excursion-item">

    <div className="excursion-item-image">

      <img
        src={rutaSeismiles}
        alt="Fiambalá y Ruta de los Seismiles en Catamarca"
      />

      <span>
        FIAMBALÁ · CORDILLERA
      </span>

    </div>


    <div className="excursion-item-content">

      <h3>
        Fiambalá + Ruta de los Seismiles
      </h3>

      <p>
        Cuatro días para descubrir Ruta del Adobe, Dunas de Tatón,
        Termas de Fiambalá, volcanes, lagunas altoandinas
        y el espectacular Balcón del Pissis.
      </p>


      <div className="excursion-item-meta">

        <span>
          ⏱ 4 días · 3 noches
        </span>

        <span>
          🏔️ Cordillera · 4x4
        </span>

        <span>
          💰 $1.300.000 por persona
        </span>

      </div>


      <a
        href="/excursiones/fiambala-ruta-seismiles-4-dias"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver experiencia →
      </a>

    </div>

  </article>
)}

          </div>

        </section>

      </main>

    </div>
  )
}


export default Excursiones