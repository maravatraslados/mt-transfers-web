import { useEffect, useState } from "react"

import { Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import piedraPomez from "./assets/piedra-pomez.jpg"
import fiambala from "./assets/fiambala.jpg"
import shincal from "./assets/shincal.jpg"
import Excursiones from "./pages/Excursiones"
import CuestaPortezuelo from "./pages/CuestaPortezuelo"
import CuestaSinguil from "./pages/CuestaSinguil"
import VueltaCerroAncasti from "./pages/VueltaCerroAncasti"
import RutaAdobe from "./pages/RutaAdobe"
import ElRodeoVirgen from "./pages/ElRodeoVirgen"
import VueltaOeste from "./pages/VueltaOeste"
import Catamarca1Dia from "./pages/Catamarca1Dia"
import Catamarca2Dias from "./pages/Catamarca2Dias"
import Catamarca3DiasOMas from "./pages/Catamarca3DiasOMas"
import MejorEpocaCatamarca from "./pages/MejorEpocaCatamarca"
import GuiaCatamarca from "./pages/GuiaCatamarca"
import CatamarcaEnOtono from "./pages/CatamarcaEnOtono"
import CatamarcaEnInvierno from "./pages/CatamarcaEnInvierno"
import CatamarcaEnPrimavera from "./pages/CatamarcaEnPrimavera"
import CatamarcaEnVerano from "./pages/CatamarcaEnVerano"
import GuiaFiambala from "./pages/GuiaFiambala";
import GuiaAntofagasta from "./pages/GuiaAntofagasta";
import GuiaCampoPomez from "./pages/GuiaCampoPomez";
import GuiaBelenLondres from "./pages/GuiaBelenLondres";
import GuiaElRodeoLasJuntas from "./pages/GuiaElRodeoLasJuntas";
import GuiaCapitalCatamarca from "./pages/GuiaCapitalCatamarca";
import TrasladosCatamarca from "./pages/TrasladosCatamarca";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";

function App() {

  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    if (location.pathname !== "/") return

    const title =
      "Excursiones y Traslados en Catamarca | MT Tours & Transfers"

    const description =
      "Descubrí Catamarca con excursiones, transfers, itinerarios y una guía para planificar tu viaje. Experiencias y traslados en Catamarca."

    const canonicalUrl =
      "https://mttransfers.com/"

    // TITLE
    document.title = title

    // META DESCRIPTION
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (!metaDescription) {
      metaDescription = document.createElement("meta")
      metaDescription.name = "description"
      document.head.appendChild(metaDescription)
    }

    metaDescription.content = description

    // CANONICAL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    )

    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }

    canonical.href = canonicalUrl

    // OPEN GRAPH
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

  }, [location.pathname])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="site">
      <header className="header">
        <div className="logo">
          <span className="logo-mark">MT</span>
          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
  <a href="/" onClick={() => setMenuOpen(false)}>
    Inicio
  </a>

 <a
  href="/excursiones"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Excursiones
</a>

<a href="#planifica" onClick={() => setMenuOpen(false)}>
  Planificá
</a>

 <a
  href="/traslados-catamarca"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Transfers
</a>

 <a
  href="/guia"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Guía
</a>

<a
  href="/quienes-somos"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Quiénes somos
</a>

<a
  href="/contacto"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Contacto
</a>



  
</nav>

<button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Abrir menú"
>
  {menuOpen ? "✕" : "☰"}
</button>

        <a
  className="whatsapp-button"
  href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20una%20excursi%C3%B3n%20en%20Catamarca."
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp
</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="eyebrow">CATAMARCA TE ESPERA</span>

            <h1>
              Descubrí Catamarca
              <span>a tu manera.</span>
            </h1>

            <p>
              Todo lo que necesitás para descubrir, planificar y vivir
              Catamarca.
            </p>

            <div className="hero-actions">
              <a href="#planifica" className="button button-primary">
                Planificá tu viaje
              </a>

              <a
  href="/excursiones"
  target="_blank"
  rel="noopener noreferrer"
  className="button button-secondary"
>
  Ver excursiones
</a>
            </div>

            <div className="hero-benefits">
              <span>✓ Experiencias locales</span>
              <span>✓ Tours privados</span>
              <span>✓ Transfers</span>
              <span>✓ Atención personalizada</span>
            </div>
          </div>
        </section>

<section className="journey-start" id="planifica">

  <div className="section-heading">
    <span className="section-kicker">EMPEZÁ POR ACÁ</span>

    <h2>¿Qué necesitás para tu viaje?</h2>

    <p>
      Elegí una opción y encontrá rápidamente lo que estás buscando.
    </p>
  </div>

  <div className="journey-grid">

    {/* EXCURSIONES */}
    <article className="journey-card">
      <div className="journey-icon">🧭</div>

      <h3>Quiero hacer excursiones</h3>

      <p>
        Quiero conocer los principales paisajes, pueblos y experiencias
        de Catamarca.
      </p>

      <a
        href="/excursiones"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver excursiones →
      </a>
    </article>


    {/* ORGANIZAR POR DÍAS */}
    <article className="journey-card">
      <div className="journey-icon">🗓️</div>

      <h3>Quiero organizar mi viaje</h3>

      <p>
        Tengo uno o varios días y quiero saber cómo aprovechar mejor
        mi estadía en Catamarca.
      </p>

      <a href="#dias">
        Elegir por cantidad de días →
      </a>
    </article>


    {/* TRANSFERS */}
    <article className="journey-card">
      <div className="journey-icon">🚘</div>

      <h3>Necesito un transfer</h3>

      <p>
        Aeropuerto, hotel, traslados privados o recorridos dentro
        y fuera de Catamarca.
      </p>

      <a
  href="/traslados-catamarca"
  target="_blank"
  rel="noopener noreferrer"
>
  Ver traslados →
</a>
    </article>

  </div>

</section>



<section className="experiences-section" id="experiencias">

  <div className="section-heading">
    <span className="section-kicker">EXPERIENCIAS IMPERDIBLES</span>

    <h2>Viví algunos de los lugares más increíbles de Catamarca</h2>

    <p>
      Naturaleza, historia y paisajes únicos en experiencias pensadas
      para descubrir Catamarca a tu manera.
    </p>
  </div>

  <div className="experiences-grid">

    <article className="experience-card">
      <div className="experience-image">
        <img
          src={piedraPomez}
          alt="Campo de Piedra Pómez en Catamarca"
        />
        <span className="experience-tag">PUNA CATAMARQUEÑA</span>
      </div>

      <div className="experience-content">
        <h3>Campo de Piedra Pómez</h3>

        <p>
          Un paisaje blanco y surrealista modelado por la naturaleza
          en plena Puna catamarqueña.
        </p>

        <div className="experience-meta">
          <span>⏱ Día completo</span>
          <span>🚙 4x4</span>
        </div>

        <a
  href="/excursiones"
  target="_blank"
  rel="noopener noreferrer"
>
  Ver excursiones →
</a>
      </div>
    </article>


    <article className="experience-card">
      <div className="experience-image">
        <img
          src={fiambala}
          alt="Termas de Fiambalá en Catamarca"
        />
        <span className="experience-tag">FIAMBALÁ</span>
      </div>

      <div className="experience-content">
        <h3>Fiambalá + Termas</h3>

        <p>
          Paisajes cordilleranos, tranquilidad y aguas termales
          en uno de los destinos más especiales de Catamarca.
        </p>

        <div className="experience-meta">
          <span>⏱ Día completo</span>
          <span>♨️ Termas</span>
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


    <article className="experience-card">
      <div className="experience-image">
        <img
          src={shincal}
          alt="Shincal de Quimivil en Londres Catamarca"
        />
        <span className="experience-tag">LONDRES</span>
      </div>

      <div className="experience-content">
        <h3>Shincal de Quimivil</h3>

        <p>
          Historia y cultura inca en uno de los sitios arqueológicos
          más importantes de Argentina.
        </p>

        <div className="experience-meta">
          <span>⏱ Medio día</span>
          <span>🏛 Cultura</span>
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

  </div>

  <div className="experiences-footer">
    <a
  href="/excursiones"
  target="_blank"
  rel="noopener noreferrer"
  className="all-experiences-button"
>
  Ver todas las experiencias →
</a>
  </div>

</section>


<section className="days-section" id="dias">
  <div className="section-heading">
    <span className="section-kicker">ARMÁ TU EXPERIENCIA</span>

    <h2>¿Cuántos días tenés para descubrir Catamarca?</h2>

    <p>
      Elegí el tiempo disponible y te mostramos una propuesta pensada para aprovecharlo mejor.
    </p>
  </div>

  <div className="days-grid">

    <a
  href="/catamarca-1-dia"
  target="_blank"
  rel="noopener noreferrer"
  className="day-card"
>
      <span className="day-number">1</span>
      <strong>DÍA</strong>
      <p>Una primera experiencia para descubrir Catamarca.</p>
      <span className="day-link">Ver itinerario →</span>
    </a>

    <a
  href="/catamarca-2-dias"
  target="_blank"
  rel="noopener noreferrer"
  className="day-card"
>
  <span className="day-number">2</span>
  <strong>DÍAS</strong>
  <p>Naturaleza, cultura y algunos de sus grandes paisajes.</p>
  <span className="day-link">Ver itinerario →</span>
</a>

<a
  href="/catamarca-3-dias-o-mas"
  target="_blank"
  rel="noopener noreferrer"
  className="day-card day-card-featured"
>
  <span className="recommended">RECOMENDADO</span>
  <span className="day-number">3+</span>
  <strong>DÍAS O MÁS</strong>
  <p>Una propuesta más completa para descubrir Catamarca con más tiempo.</p>
  <span className="day-link">Planificar mi viaje →</span>
</a>

    
  </div>
</section>


<section className="mt-service-section" id="transfers">
  <div className="mt-service-inner">

    <div className="mt-service-content">
      <span className="section-kicker service-kicker">
        TOURS + TRANSFERS
      </span>

      <h2>
        Tu viaje no empieza en la excursión.
        <span> Empieza cuando llegás.</span>
      </h2>

      <p>
        Podemos acompañarte desde tu llegada a Catamarca y ayudarte
        a organizar traslados, excursiones y recorridos privados.
      </p>

      <div className="mt-service-list">
        <span>✈️ Recepción en aeropuerto</span>
        <span>🏨 Traslado al alojamiento</span>
        <span>🚘 Excursiones privadas</span>
        <span>🗺️ Recorridos personalizados</span>
        <span>🔄 Traslado de regreso</span>
      </div>

    <a
  href="/traslados-catamarca"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-service-button"
>
  Ver servicios de traslados →
</a>
    </div>

    <div className="mt-service-quote">
      <p>
        Vos disfrutá Catamarca.
        <strong> Nosotros nos ocupamos del camino.</strong>
      </p>
    </div>

  </div>
</section>



<section className="guide-section" id="guia-catamarca">

  <div className="section-heading">
    <span className="section-kicker">GUÍA DE CATAMARCA</span>

    <h2>Información para entender y preparar mejor tu viaje</h2>

    <p>
      Clima, destinos, altura y consejos prácticos para planificar tu recorrido
      por Catamarca antes de salir.
    </p>
  </div>

  <div className="guide-grid">

    <article className="guide-card">
      <span className="guide-icon">🌡️</span>

      <h3>Mejor época para viajar</h3>

      <p>
        Conocé cómo cambia Catamarca durante el año, qué zonas conviene visitar
        en cada temporada y qué tener en cuenta antes de elegir la fecha.
      </p>

      <a
        href="/guia/mejor-epoca-catamarca"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mejor época →
      </a>
    </article>


    <article className="guide-card">
      <span className="guide-icon">🏔️</span>

      <h3>Puna y altura</h3>

      <p>
        Información para entender las grandes alturas de Catamarca, cómo
        prepararte para recorrer la Puna y qué cuidados considerar durante el viaje.
      </p>

      <a
        href="/guia#puna"
        target="_blank"
        rel="noopener noreferrer"
      >
        Conocer la Puna →
      </a>
    </article>


    <article className="guide-card">
      <span className="guide-icon">📍</span>

      <h3>Destinos de Catamarca</h3>

      <p>
        Descubrí las distintas regiones, pueblos y paisajes de la provincia
        para decidir qué lugares incluir en tu recorrido.
      </p>

      <a
        href="/guia#destinos"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explorar destinos →
      </a>
    </article>

  </div>


  <div className="guide-footer">

    <a
      href="/guia"
      target="_blank"
      rel="noopener noreferrer"
      className="guide-button"
    >
      Ver toda la Guía de Catamarca →
    </a>

  </div>

</section>

<section className="final-cta" id="contacto">
  <div className="final-cta-content">
    <span className="section-kicker final-kicker">TU VIAJE EMPIEZA ACÁ</span>

    <h2>¿Listo para descubrir Catamarca?</h2>

    <p>
      Contanos cuántos días tenés, qué lugares querés conocer y desde dónde
      empezás tu viaje. Te ayudamos a organizar una experiencia a tu medida.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20planificar%20mi%20viaje%20por%20Catamarca."
      target="_blank"
      rel="noreferrer"
      className="final-cta-button"
    >
      💬 Planificar mi viaje por WhatsApp
    </a>

    <span className="final-note">
      Atención personalizada · Consulta sin compromiso
    </span>
  </div>
</section>

      </main>

<footer className="footer">
  <div className="footer-inner">

    <div className="footer-brand">
      <div className="logo footer-logo">
        <span className="logo-mark">MT</span>

        <div>
          <strong>TOURS & TRANSFERS</strong>
          <small>Catamarca, Argentina</small>
        </div>
      </div>

      <p>
        Descubrí, planificá y viví Catamarca con experiencias y traslados
        pensados para vos.
      </p>
    </div>

    <div className="footer-column">
      <h4>Explorá</h4>
     <a
  href="/excursiones"
  target="_blank"
  rel="noopener noreferrer"
>
  Excursiones
</a>
      
     
    </div>

    <div className="footer-column">
  <h4>Planificá</h4>

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

  <a href="#planifica">
    Armá tu viaje
  </a>
</div>

   <div className="footer-column">
  <h4>MT</h4>

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
    <span>© 2026 MT Tours & Transfers</span>
    <span>Catamarca, Argentina</span>
  </div>
      </footer>
    </div>
        }
      />

      <Route
        path="/excursiones"
        element={<Excursiones />}
      />

      <Route
  path="/excursiones/cuesta-del-portezuelo"
  element={<CuestaPortezuelo />}
/>

<Route
  path="/excursiones/cuesta-de-singuil-balcozna"
  element={<CuestaSinguil />}
/>

<Route
  path="/excursiones/vuelta-al-cerro-ancasti"
  element={<VueltaCerroAncasti />}
/>

<Route
  path="/excursiones/ruta-del-adobe-fiambala"
  element={<RutaAdobe />}
/>

<Route
  path="/excursiones/el-rodeo-virgen"
  element={<ElRodeoVirgen />}
/>

<Route
  path="/excursiones/vuelta-oeste-catamarqueno"
  element={<VueltaOeste />}
/>

<Route path="/catamarca-1-dia" element={<Catamarca1Dia />} />

<Route path="/catamarca-2-dias" element={<Catamarca2Dias />} />

<Route
  path="/catamarca-3-dias-o-mas"
  element={<Catamarca3DiasOMas />}
/>

<Route
  path="/guia/mejor-epoca-catamarca"
  element={<MejorEpocaCatamarca />}
/>

<Route
  path="/guia/mejor-epoca-catamarca/catamarca-en-otono"
  element={<CatamarcaEnOtono />}
/>

<Route
  path="/guia/mejor-epoca-catamarca/catamarca-en-invierno"
  element={<CatamarcaEnInvierno />}
/>

<Route
  path="/guia/mejor-epoca-catamarca/catamarca-en-primavera"
  element={<CatamarcaEnPrimavera />}
/>

<Route
  path="/guia/mejor-epoca-catamarca/catamarca-en-verano"
  element={<CatamarcaEnVerano />}
/>

<Route path="/guia" element={<GuiaCatamarca />} />

<Route path="/guia/fiambala" element={<GuiaFiambala />} />

<Route
  path="/guia/antofagasta-de-la-sierra"
  element={<GuiaAntofagasta />}
/>

<Route
  path="/guia/campo-de-piedra-pomez"
  element={<GuiaCampoPomez />}
/>
<Route
  path="/guia/belen-londres"
  element={<GuiaBelenLondres />}
/>
<Route
  path="/guia/el-rodeo-las-juntas"
  element={<GuiaElRodeoLasJuntas />}
/>
<Route
  path="/guia/san-fernando-del-valle-de-catamarca"
  element={<GuiaCapitalCatamarca />}
/>

<Route
  path="/traslados-catamarca"
  element={<TrasladosCatamarca />}
/>

<Route
  path="/quienes-somos"
  element={<QuienesSomos />}
/>

<Route
  path="/contacto"
  element={<Contacto />}
/>

</Routes>


  
  )
}

export default App