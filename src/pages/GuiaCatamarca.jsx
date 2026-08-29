import balcoznaNieve from "../assets/balcozna-nieve.jpg";
import cuestaPortezuelo from "../assets/cuesta-portezuelo.jpg";
import piedraPomez from "../assets/piedra-pomez.jpg";
import rutaAdobe from "../assets/ruta-adobe.jpg";
import termasFiambala from "../assets/termas-fiambala.jpg";



function GuiaCatamarca() {
  return (
    <div className="guide-page">
      <header className="guide-header">
        <a href="/" className="guide-logo">
          MT TOURS & TRANSFERS
        </a>

        <a
  href="/"
  className="guide-home-link"
>
  ← Volver al inicio
</a>

        <a
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20organizar%20mi%20viaje%20por%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
          className="guide-whatsapp"
        >
          Consultar por WhatsApp
        </a>
      </header>

      <main>
        <section className="guide-main-hero">
          <div className="guide-main-hero-content">
            <span className="guide-main-kicker">GUÍA DE CATAMARCA</span>

            <h1>Todo lo que necesitás saber para viajar por Catamarca</h1>

            <p>
              Clima, mejores épocas, destinos, Puna, rutas, itinerarios y
              consejos para organizar tu viaje.
            </p>
          </div>
        </section>

        <section className="guide-main-categories">
  <div className="section-heading">
    <span className="section-kicker">PLANIFICÁ TU VIAJE</span>

    <h2>¿Qué necesitás saber sobre Catamarca?</h2>

    <p>
      Elegí un tema y encontrá información práctica para preparar tu viaje.
    </p>
  </div>

  <div className="guide-main-grid">
    <a
      href="/guia/mejor-epoca-catamarca"
      target="_blank"
      rel="noopener noreferrer"
      className="guide-main-card guide-main-card-image"
      style={{ backgroundImage: `url(${balcoznaNieve})` }}
    >
      <div className="guide-main-card-overlay"></div>

      <div className="guide-main-card-content">
        <span>01</span>

        <h3>Cuándo viajar</h3>

        <p>
          Clima, estaciones y mejores momentos para conocer cada región de
          Catamarca.
        </p>

        <strong>Ver guía →</strong>
      </div>
    </a>

    <a
      href="#destinos"
      className="guide-main-card guide-main-card-image"
      style={{ backgroundImage: `url(${cuestaPortezuelo})` }}
    >
      <div className="guide-main-card-overlay"></div>

      <div className="guide-main-card-content">
        <span>02</span>

        <h3>Destinos</h3>

        <p>
          Descubrí Fiambalá, Belén, Antofagasta de la Sierra, Ambato,
          Ancasti y otros lugares de la provincia.
        </p>

        <strong>Explorar destinos →</strong>
      </div>
    </a>

    <a
      href="#puna"
      className="guide-main-card guide-main-card-image"
      style={{ backgroundImage: `url(${piedraPomez})` }}
    >
      <div className="guide-main-card-overlay"></div>

      <div className="guide-main-card-content">
        <span>03</span>

        <h3>Puna y altura</h3>

        <p>
          Información para viajar a zonas de altura, Campo de Piedra Pómez
          y Antofagasta de la Sierra.
        </p>

        <strong>Conocer más →</strong>
      </div>
    </a>

    <a
      href="#planificar"
      className="guide-main-card guide-main-card-image"
      style={{ backgroundImage: `url(${rutaAdobe})` }}
    >
      <div className="guide-main-card-overlay"></div>

      <div className="guide-main-card-content">
        <span>04</span>

        <h3>Planificar el viaje</h3>

        <p>
          Cómo moverse, qué llevar, distancias, rutas y recomendaciones
          antes de salir.
        </p>

        <strong>Planificar →</strong>
      </div>
    </a>

    <a
      href="/catamarca-3-dias-o-mas"
      target="_blank"
      rel="noopener noreferrer"
      className="guide-main-card guide-main-card-image guide-main-card-featured"
      style={{ backgroundImage: `url(${termasFiambala})` }}
    >
      <div className="guide-main-card-overlay"></div>

      <div className="guide-main-card-content">
        <span>05</span>

        <h3>Itinerarios</h3>

        <p>
          Ideas para recorrer Catamarca según el tiempo que tengas
          disponible.
        </p>

        <strong>Ver itinerarios →</strong>
      </div>
    </a>
  </div>
</section>

        <section id="destinos" className="guide-destinations">
  <div className="section-heading">
    <span className="section-kicker">DESTINOS DE CATAMARCA</span>

    <h2>Lugares que vale la pena conocer</h2>

    <p>
      Desde los paisajes de la Puna hasta los pueblos históricos del
      oeste y las sierras cercanas a la Capital. Descubrí qué ofrece
      cada región antes de organizar tu recorrido.
    </p>
  </div>

  <div className="guide-destinations-grid">

    <a
  href="/guia/fiambala"
  target="_blank"
  rel="noopener noreferrer"
  className="guide-destination-card"
>
  <span>OESTE CATAMARQUEÑO</span>

  <h3>Fiambalá</h3>

  <p>
    Termas, Ruta del Adobe, dunas y paisajes cordilleranos hacen
    de Fiambalá una de las grandes bases para descubrir el oeste
    de Catamarca.
  </p>

  <strong>Ver guía completa →</strong>
</a>

    <a
  href="/guia/antofagasta-de-la-sierra"
  target="_blank"
  rel="noopener noreferrer"
  className="guide-destination-card"
>
  <span>PUNA CATAMARQUEÑA</span>

  <h3>Antofagasta de la Sierra</h3>

  <p>
    Volcanes, salares, lagunas y paisajes de altura convierten a
    Antofagasta de la Sierra en una de las grandes puertas de entrada
    a la Puna catamarqueña.
  </p>

  <strong>Ver guía completa →</strong>
</a>

    <a
  href="/guia/campo-de-piedra-pomez"
  target="_blank"
  rel="noopener noreferrer"
  className="guide-destination-card"
>
  <span>PUNA CATAMARQUEÑA</span>

  <h3>Campo de Piedra Pómez</h3>

  <p>
    Un paisaje volcánico extraordinario formado por enormes
    estructuras de piedra clara modeladas durante miles de años
    por la actividad volcánica y la erosión del viento.
  </p>

  <strong>Ver guía completa →</strong>
</a>

    <a
  href="/guia/belen-londres"
  target="_blank"
  rel="noopener noreferrer"
  className="guide-destination-card"
>
  <span>OESTE CATAMARQUEÑO</span>

  <h3>Belén y Londres</h3>

  <p>
    Cultura textil, paisajes del oeste y uno de los grandes sitios
    arqueológicos de Catamarca: El Shincal de Quimivil.
  </p>

  <strong>Ver guía completa →</strong>
</a>

   <a
  href="/guia/el-rodeo-las-juntas"
  target="_blank"
  rel="noopener noreferrer"
  className="guide-destination-card"
>
  <span>AMBATO</span>

  <h3>El Rodeo y Las Juntas</h3>

  <p>
    Villas serranas, ríos, senderos, naturaleza y la imponente
    Virgen del Valle en uno de los paisajes más verdes de Catamarca.
  </p>

  <strong>Ver guía completa →</strong>
</a>

    <a
  href="/guia/san-fernando-del-valle-de-catamarca"
  target="_blank"
  rel="noopener noreferrer"
  className="guide-destination-card"
>
  <span>VALLE CENTRAL</span>

  <h3>San Fernando del Valle de Catamarca</h3>

  <p>
    Historia, cultura, gastronomía, patrimonio religioso y naturaleza,
    además de ser el principal punto de llegada para comenzar a recorrer
    la provincia.
  </p>

   <strong>Ver guía completa →</strong>
</a>

  </div>
</section>

<section id="puna" className="guide-puna">
          <div className="guide-puna-intro">
            <span className="section-kicker">PUNA CATAMARQUEÑA</span>

            <h2>Viajar a la altura requiere información</h2>

            <p>
              La Puna catamarqueña ofrece algunos de los paisajes más
              impresionantes de la provincia, pero también exige una mejor
              planificación por sus distancias, altura, clima y caminos.
            </p>
          </div>

          <div className="guide-puna-grid">

            <article className="guide-puna-card">
              <span>01</span>
              <h3>Altura</h3>
              <p>
                Muchos recorridos superan los 3.000 metros sobre el nivel del
                mar. Conocer la altura del destino ayuda a organizar mejor el
                viaje y los tiempos del recorrido.
              </p>
            </article>

            <article className="guide-puna-card">
              <span>02</span>
              <h3>Clima</h3>
              <p>
                En pocas horas pueden cambiar la temperatura, el viento y las
                condiciones del camino. La época del año influye mucho en la
                experiencia.
              </p>
            </article>

            <article className="guide-puna-card">
              <span>03</span>
              <h3>Distancias</h3>
              <p>
                Las grandes distancias y la baja densidad de servicios hacen
                importante calcular combustible, horarios, paradas y lugar de
                alojamiento.
              </p>
            </article>

            <article className="guide-puna-card">
              <span>04</span>
              <h3>Qué llevar</h3>
              <p>
                Abrigo por capas, agua, protección solar y otros elementos
                básicos pueden marcar una gran diferencia durante una
                excursión por zonas de altura.
              </p>
            </article>

          </div>

          <div className="guide-puna-links">
            <div>
              <span>PRÓXIMAS GUÍAS</span>

              <h3>Información específica para preparar tu viaje</h3>

              <p>
                Estamos organizando guías completas sobre la Puna para que
                puedas conocer cada destino antes de salir.
              </p>
            </div>

            <div className="guide-puna-link-list">
              <span>Campo de Piedra Pómez →</span>
              <span>Antofagasta de la Sierra →</span>
              <span>Qué llevar a la Puna →</span>
              <span>Consejos para viajar a la altura →</span>
            </div>
          </div>
        </section>

                <section id="planificar" className="guide-plan">
          <div className="section-heading">
            <span className="section-kicker">PLANIFICAR EL VIAJE</span>

            <h2>Información práctica antes de recorrer Catamarca</h2>

            <p>
              Organizar bien los traslados, las distancias y lo que necesitás
              llevar puede hacer una gran diferencia durante el viaje.
            </p>
          </div>

          <div className="guide-plan-grid">

            <article className="guide-plan-card">
              <span>01</span>
              <h3>Cómo moverse por Catamarca</h3>
              <p>
                Auto, transfers, excursiones y opciones para conectar la
                Capital con los principales destinos de la provincia.
              </p>
              <strong>Guía próximamente →</strong>
            </article>

            <article className="guide-plan-card">
              <span>02</span>
              <h3>Qué llevar</h3>
              <p>
                Ropa, abrigo, agua, protección solar y elementos útiles según
                la región, la época del año y la altura.
              </p>
              <strong>Guía próximamente →</strong>
            </article>

            <article className="guide-plan-card">
              <span>03</span>
              <h3>Distancias y tiempos</h3>
              <p>
                Catamarca es una provincia extensa. Conocer los kilómetros y
                tiempos aproximados ayuda a evitar itinerarios demasiado
                exigentes.
              </p>
              <strong>Guía próximamente →</strong>
            </article>

            <article className="guide-plan-card">
              <span>04</span>
              <h3>Rutas y caminos</h3>
              <p>
                Qué tener en cuenta antes de viajar por rutas de montaña,
                caminos de altura y accesos a destinos más alejados.
              </p>
              <strong>Guía próximamente →</strong>
            </article>

            <article className="guide-plan-card">
              <span>05</span>
              <h3>Dónde hacer base</h3>
              <p>
                Capital, Fiambalá, Belén y otros puntos estratégicos para
                organizar mejor cada etapa del recorrido.
              </p>
              <strong>Guía próximamente →</strong>
            </article>

            <article className="guide-plan-card guide-plan-card-featured">
              <span>06</span>
              <h3>Armá tu itinerario</h3>
              <p>
                Elegí qué visitar según la cantidad de días que tengas
                disponibles y las regiones que quieras conocer.
              </p>

              <a
                href="/catamarca-3-dias-o-mas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver itinerarios →
              </a>
            </article>

          </div>
        </section>

                <section className="guide-itineraries">
          <div className="guide-itineraries-intro">
            <span className="section-kicker">ITINERARIOS</span>

            <h2>Elegí cómo recorrer Catamarca según tus días</h2>

            <p>
              Organizá tu viaje según el tiempo disponible y descubrí
              distintas formas de combinar paisajes, cultura y experiencias.
            </p>
          </div>

          <div className="guide-itineraries-grid">

            <a
              href="/catamarca-1-dia"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-itinerary-card"
            >
              <span>1 DÍA</span>
              <h3>Una primera experiencia</h3>
              <p>
                Ideal para quienes tienen poco tiempo y quieren conocer uno de
                los grandes recorridos de Catamarca.
              </p>
              <strong>Ver itinerario →</strong>
            </a>

            <a
              href="/catamarca-2-dias"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-itinerary-card"
            >
              <span>2 DÍAS</span>
              <h3>Dos jornadas para descubrir más</h3>
              <p>
                Combiná dos zonas o experiencias y aprovechá mejor tu estadía
                en la provincia.
              </p>
              <strong>Ver itinerario →</strong>
            </a>

            <a
              href="/catamarca-3-dias-o-mas"
              target="_blank"
              rel="noopener noreferrer"
              className="guide-itinerary-card guide-itinerary-featured"
            >
              <span>3 DÍAS O MÁS</span>
              <h3>Un viaje más completo</h3>
              <p>
                Más tiempo permite combinar regiones, reducir apuros y conocer
                Catamarca de una manera mucho más completa.
              </p>
              <strong>Planificar mi viaje →</strong>
            </a>

          </div>

          <div className="guide-final-cta">
            <div>
              <span>MT TOURS & TRANSFERS</span>

              <h2>¿Querés ayuda para organizar tu viaje?</h2>

              <p>
                Contanos cuántos días tenés, qué lugares querés conocer y cómo
                llegás a Catamarca. Te ayudamos a ordenar el recorrido.
              </p>
            </div>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20organizar%20mi%20viaje%20por%20Catamarca."
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp →
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

export default GuiaCatamarca;