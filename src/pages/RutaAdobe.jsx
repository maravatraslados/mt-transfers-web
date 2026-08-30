import "../App.css"

import rutaAdobe from "../assets/ruta-adobe.jpg"
import oratorioOrquera from "../assets/oratorio-orquera.jpg"
import andacollo from "../assets/andacollo.jpg"
import iglesiaRosario from "../assets/iglesia-rosario.jpg"
import termasFiambala from "../assets/termas-fiambala.jpg"
import canonIndio from "../assets/canon-indio.jpg"
import mapaCanonIndio from "../assets/mapa-canon-indio.jpg"
import dunasTaton from "../assets/dunas-taton.jpg"
import mapaRutaAdobe from "../assets/mapa-ruta-adobe.jpg"
import sanPedroFiambala from "../assets/san-pedro-fiambala.jpeg"
import mayorazgoAnillaco from "../assets/mayorazgo-anillaco.jpeg"

function RutaAdobe() {

  const title =
    "Ruta del Adobe y Fiambalá: Excursión en Catamarca";

  const description =
    "Excursión por la Ruta del Adobe y Fiambalá en Catamarca. Iglesias históricas, arquitectura de adobe, paisajes del oeste y opción de disfrutar las Termas de Fiambalá.";

  const canonicalUrl =
    "https://mttransfers.com/excursiones/ruta-del-adobe-fiambala";

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
              url(${rutaAdobe})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">OESTE CATAMARQUEÑO</span>

            <h1>Ruta del Adobe + Fiambalá</h1>

            <p>
              Historia, arquitectura, termas y paisajes del oeste de Catamarca
              en una experiencia que podés vivir en uno o dos días.
            </p>

            <div className="tour-detail-meta">
              <span>📍 Tinogasta · Fiambalá</span>
              <span>🗓 1 o 2 días</span>
              <span>🚘 Salida desde Capital</span>
            </div>

            <a href="#experiencias-adobe" className="button button-primary">
              Elegir experiencia
            </a>
          </div>
        </section>

<section className="tour-options-section" id="experiencias-adobe">
  <div className="section-heading">
    <span className="section-kicker">ELEGÍ TU EXPERIENCIA</span>

    <h2>Una o dos jornadas para descubrir el oeste catamarqueño</h2>

    <p>
      Elegí la opción que mejor se adapte al tiempo que tengas y al tipo
      de experiencia que quieras vivir.
    </p>
  </div>

  <div className="tour-options-grid">

    <article className="tour-option-card">
      <span className="tour-option-label">1 DÍA</span>

      <h3>Ruta del Adobe + Termas</h3>

      <p>
        Una jornada completa combinando patrimonio, arquitectura,
        Fiambalá y relax en las termas.
      </p>

      <ul>
        <li>✓ Salida desde Catamarca Capital</li>
        <li>✓ Ruta del Adobe</li>
        <li>✓ Oratorio de los Orquera</li>
        <li>✓ Andacollo y Anillaco</li>
        <li>✓ Llegada a Fiambalá</li>
        <li>✓ Termas de Fiambalá</li>
        <li>✓ Regreso a Capital</li>
      </ul>

      <a
        href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20experiencia%20de%201%20d%C3%ADa%20Ruta%20del%20Adobe%20%2B%20Termas%20de%20Fiambal%C3%A1."
        target="_blank"
        rel="noopener noreferrer"
        className="tour-option-button"
      >
        Consultar experiencia →
      </a>
    </article>


    <article className="tour-option-card tour-option-featured">
      <span className="tour-option-label">⭐ EXPERIENCIA MT · 2 DÍAS</span>

      <h3>Ruta del Adobe + Fiambalá</h3>

      <p>
        Una escapada completa para conocer la historia, los paisajes,
        las termas y la aventura del oeste catamarqueño sin hacerlo a las apuradas.
      </p>

      <ul>
        <li>✓ Todo el recorrido de Ruta del Adobe</li>
        <li>✓ Fiambalá y Termas</li>
        <li>✓ Noche en Fiambalá</li>
        <li>✓ Cañón del Indio</li>
        <li>✓ Dunas de Tatón</li>
        <li>✓ Tiempo para disfrutar Fiambalá</li>
        <li>✓ Regreso a Catamarca Capital</li>
      </ul>

      <div className="tour-option-note">
        Alojamiento, ingreso a termas y actividades específicas se coordinan según disponibilidad.
      </div>

      <a
        href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20Experiencia%20MT%20de%202%20d%C3%ADas%20Ruta%20del%20Adobe%20%2B%20Fiambal%C3%A1."
        target="_blank"
        rel="noopener noreferrer"
        className="tour-option-button tour-option-button-featured"
      >
        Consultar experiencia de 2 días →
      </a>
    </article>

  </div>
</section>

<section className="tour-info-section">
  <div className="tour-info-grid">

    <div className="tour-info-block">
      <span className="section-kicker">ITINERARIO · 1 DÍA</span>
      <h2>Ruta del Adobe + Termas</h2>

      <div className="tour-timeline">

        <div className="tour-step">
          <span>1</span>
          <div>
            <h3>Salida desde Catamarca Capital</h3>
            <p>
              Comenzamos temprano el viaje hacia el oeste catamarqueño,
              rumbo a Tinogasta y la Ruta del Adobe.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Ruta del Adobe</h3>
            <p>
              Recorremos los principales puntos históricos del circuito,
              con paradas en construcciones emblemáticas como el Oratorio
              de los Orquera, Andacollo y Anillaco.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>Llegada a Fiambalá</h3>
            <p>
              Continuamos hacia Fiambalá, donde cambia el paisaje y comienza
              la etapa de relax del recorrido.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Termas de Fiambalá</h3>
            <p>
              Tiempo para disfrutar las piletas termales en plena montaña,
              sujeto a horarios y disponibilidad de ingreso.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Regreso a Catamarca Capital</h3>
            <p>
              Finalizamos la jornada regresando a la ciudad después de una
              experiencia que combina historia, paisaje y relax.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="tour-includes-card">
      <span className="section-kicker">1 DÍA</span>
      <h3>Ideal si tenés poco tiempo</h3>

      <ul>
        <li>✓ Traslado ida y vuelta</li>
        <li>✓ Recorrido por Ruta del Adobe</li>
        <li>✓ Paradas culturales</li>
        <li>✓ Fiambalá</li>
        <li>✓ Termas</li>
        <li>✓ Atención personalizada</li>
      </ul>

      <h3 className="tour-second-title">Importante</h3>

      <ul>
        <li>• Jornada extensa</li>
        <li>• Salida temprana</li>
        <li>• Ingreso a termas sujeto a disponibilidad</li>
      </ul>
    </div>

  </div>
</section>


<section className="tour-info-section" style={{ background: "#ffffff" }}>
  <div className="tour-info-grid">

    <div className="tour-info-block">
      <span className="section-kicker">ITINERARIO · 2 DÍAS</span>
      <h2>Experiencia MT por Fiambalá</h2>

      <div className="tour-timeline">

        <div className="tour-step">
          <span>1</span>
          <div>
            <h3>Día 1 · Ruta del Adobe</h3>
            <p>
              Salimos desde Capital, recorremos Tinogasta y los principales
              sitios históricos de la Ruta del Adobe.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Día 1 · Fiambalá + Termas</h3>
            <p>
              Llegamos a Fiambalá, disfrutamos las termas y cerramos la jornada
              alojándonos en la localidad.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>Día 2 · Cañón del Indio</h3>
            <p>
              Comenzamos el segundo día con una experiencia de naturaleza
              y caminata entre formaciones rocosas.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Día 2 · Dunas de Tatón</h3>
            <p>
              Continuamos hacia el paisaje de dunas, uno de los grandes
              contrastes naturales del oeste catamarqueño.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Regreso a Catamarca Capital</h3>
            <p>
              Después de disfrutar Fiambalá y sus paisajes iniciamos el regreso
              hacia la ciudad.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="tour-includes-card">
      <span className="section-kicker">⭐ EXPERIENCIA MT</span>
      <h3>Dos días para disfrutar sin apuro</h3>

      <ul>
        <li>✓ Ruta del Adobe</li>
        <li>✓ Fiambalá</li>
        <li>✓ Termas</li>
        <li>✓ Noche en Fiambalá</li>
        <li>✓ Cañón del Indio</li>
        <li>✓ Dunas de Tatón</li>
      </ul>

      <h3 className="tour-second-title">Opcional</h3>

      <ul>
        <li>• Excursión 4x4 con prestador local habilitado</li>
        <li>• Sujeto a disponibilidad y coordinación previa</li>
      </ul>
    </div>

  </div>
</section>

<section className="story-section">
  <div className="section-heading">
    <span className="section-kicker">NO SOLO LO VAS A VER</span>
    <h2>Vas a conocer su historia</h2>
    <p>
      En MT creemos que un viaje se disfruta más cuando entendés el lugar
      que estás recorriendo. Por eso, durante esta experiencia no solo
      conectamos destinos: te ayudamos a descubrir las historias, paisajes
      y culturas que hicieron único al oeste catamarqueño.
    </p>
  </div>

  <div className="story-grid">

    <article className="story-card">
      <img
        src={oratorioOrquera}
        alt="Oratorio de los Orquera en la Ruta del Adobe"
      />

      <div className="story-card-content">
        <span>EL PUESTO</span>
        <h3>Oratorio de los Orquera</h3>

        <p>
          Construido alrededor de 1740, es una de las edificaciones más
          representativas de la Ruta del Adobe. Sus muros y técnicas
          constructivas muestran cómo se adaptaban las viviendas y templos
          al clima del oeste catamarqueño.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={andacollo}
        alt="Iglesia de Andacollo en Catamarca"
      />

      <div className="story-card-content">
        <span>LA FALDA</span>
        <h3>Iglesia de Andacollo</h3>

        <p>
          Construida en el siglo XIX, forma parte del patrimonio religioso
          del corredor. Su arquitectura sencilla refleja la historia de las
          pequeñas comunidades que crecieron entre montañas y caminos del oeste.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={iglesiaRosario}
        alt="Iglesia Nuestra Señora del Rosario de Anillaco"
      />

      <div className="story-card-content">
        <span>ANILLACO</span>
        <h3>Nuestra Señora del Rosario</h3>

        <p>
          Datada a comienzos del siglo XVIII, es uno de los grandes testimonios
          históricos de la zona y una de las construcciones religiosas más
          antiguas que permanecen en pie en Catamarca.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={termasFiambala}
        alt="Termas de Fiambalá en Catamarca"
      />

      <div className="story-card-content">
        <span>FIAMBALÁ</span>
        <h3>Termas de Fiambalá</h3>

        <p>
          En una quebrada rodeada de montaña, las aguas termales recorren
          distintas piletas de piedra con temperaturas progresivas. Es el
          contraste perfecto después de una jornada de historia y carretera.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={canonIndio}
        alt="Cañón del Indio en Fiambalá"
      />

      <div className="story-card-content">
        <span>EXPERIENCIA 2 DÍAS</span>
        <h3>Cañón del Indio</h3>

        <p>
          Una caminata entre paredes rocosas y antiguos pasos de agua que
          permite descubrir otra cara de Fiambalá. No es solo una parada:
          es una experiencia de trekking que requiere tiempo y condiciones
          adecuadas.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={dunasTaton}
        alt="Dunas de Tatón en Catamarca"
      />

      <div className="story-card-content">
        <span>EXPERIENCIA 2 DÍAS</span>
        <h3>Dunas de Tatón</h3>

        <p>
          Un paisaje de arena a gran escala, con enormes dunas que contrastan
          con la cordillera y los pueblos del oeste. Es uno de los escenarios
          naturales más impresionantes de la zona de Fiambalá.
        </p>
      </div>
    </article>

  </div>
</section>

<section className="tour-gallery-section">
  <div className="section-heading">
    <span className="section-kicker">GALERÍA</span>

    <h2>Historia, termas y paisajes del oeste</h2>

    <p>
      Un recorrido donde la arquitectura de adobe se combina con montañas,
      aguas termales y paisajes únicos de Fiambalá.
    </p>
  </div>


   <div className="tour-gallery-grid adobe-gallery-grid">

  <figure>
    <img
      src={rutaAdobe}
      alt="Ruta del Adobe en Catamarca"
    />

    <figcaption>
      <strong>Ruta del Adobe</strong>
      <span>
        Construcciones históricas y paisajes del oeste catamarqueño.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={oratorioOrquera}
      alt="Oratorio de los Orquera"
    />

    <figcaption>
      <strong>Oratorio de los Orquera</strong>
      <span>
        Uno de los grandes testimonios de la arquitectura tradicional de adobe.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={andacollo}
      alt="Iglesia de Andacollo"
    />

    <figcaption>
      <strong>Iglesia de Andacollo</strong>
      <span>
        Patrimonio religioso e historia del oeste catamarqueño.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={iglesiaRosario}
      alt="Nuestra Señora del Rosario de Anillaco"
    />

    <figcaption>
      <strong>Nuestra Señora del Rosario</strong>
      <span>
        Una de las construcciones religiosas históricas del recorrido.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={termasFiambala}
      alt="Termas de Fiambalá"
    />

    <figcaption>
      <strong>Termas de Fiambalá</strong>
      <span>
        Relax entre montañas para completar la experiencia.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={canonIndio}
      alt="Cañón del Indio en Fiambalá"
    />

    <figcaption>
      <strong>Cañón del Indio</strong>
      <span>
        Naturaleza y caminata entre formaciones rocosas en la opción de 2 días.
      </span>
    </figcaption>
  </figure>


  <figure className="adobe-gallery-dunas">
    <img
      src={dunasTaton}
      alt="Dunas de Tatón"
    />

    <figcaption>
      <strong>Dunas de Tatón</strong>
      <span>
        Un paisaje de arena único en el oeste catamarqueño.
      </span>
    </figcaption>
  </figure>

  <figure>
  <img
    src={sanPedroFiambala}
    alt="Iglesia de San Pedro de Fiambalá"
  />

  <figcaption>
    <strong>Iglesia de San Pedro</strong>
    <span>
      Patrimonio histórico de Fiambalá y parte de la identidad cultural del oeste catamarqueño.
    </span>
  </figcaption>
</figure>


<figure>
  <img
    src={mayorazgoAnillaco}
    alt="Mayorazgo de Anillaco en la Ruta del Adobe"
  />

  <figcaption>
    <strong>Mayorazgo de Anillaco</strong>
    <span>
      Una antigua construcción de adobe que conserva parte de la historia del valle.
    </span>
  </figcaption>
</figure>

</div>
</section>


<section className="route-maps-section">
  <div className="section-heading">
    <span className="section-kicker">ENTENDÉ EL RECORRIDO</span>

    <h2>Así se vive la experiencia</h2>

    <p>
      Estos mapas te ayudan a entender dónde están los principales puntos
      del recorrido y cómo se conectan entre sí.
    </p>
  </div>

  <div className="route-maps-grid">

    <article className="route-map-card">
      <img
        src={mapaRutaAdobe}
        alt="Mapa de la Ruta del Adobe"
      />

      <div>
        <span>1 DÍA</span>
        <h3>Ruta del Adobe</h3>
        <p>
          El corredor conecta Tinogasta con Fiambalá atravesando algunos
          de los principales sitios históricos del oeste catamarqueño.
        </p>
      </div>
    </article>

    <article className="route-map-card">
      <img
        src={mapaCanonIndio}
        alt="Mapa del Cañón del Indio"
      />

      <div>
        <span>2 DÍAS</span>
        <h3>Cañón del Indio</h3>
        <p>
          La experiencia incluye un recorrido de naturaleza y caminata
          que requiere tiempo, planificación y condiciones adecuadas.
        </p>
      </div>
    </article>

  </div>
</section>


<section className="tour-faq-section">
  <div className="section-heading">
    <span className="section-kicker">PREGUNTAS FRECUENTES</span>
    <h2>Antes de reservar</h2>
  </div>

  <div className="tour-faq-grid">

    <article className="tour-faq-card">
      <h3>¿Desde dónde sale la experiencia?</h3>
      <p>
        Coordinamos la salida desde Catamarca Capital. También podemos
        organizar opciones para pasajeros que ya se encuentren en Tinogasta
        o Fiambalá.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿La opción de 1 día es una jornada larga?</h3>
      <p>
        Sí. Es una experiencia extensa y requiere salida temprana.
        Está pensada para quienes quieren conocer el oeste y disponen
        de poco tiempo.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿El alojamiento está incluido en los 2 días?</h3>
      <p>
        El alojamiento se coordina según disponibilidad y la categoría
        elegida por el pasajero. Te ayudamos a organizar la mejor opción.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿La excursión 4x4 está incluida?</h3>
      <p>
        No. Se ofrece como actividad opcional y se realiza con un prestador
        local habilitado, sujeto a disponibilidad y coordinación previa.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Cañón del Indio requiere caminata?</h3>
      <p>
        Sí. Es una experiencia de naturaleza que incluye caminata,
        por lo que se recomienda calzado adecuado y consultar previamente
        sobre dificultad y condiciones.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿El ingreso a las termas está asegurado?</h3>
      <p>
        El acceso depende de horarios, cupos y disponibilidad. Por eso
        coordinamos la experiencia antes del viaje.
      </p>
    </article>

  </div>
</section>


<section className="tour-final-cta">
  <div className="tour-final-cta-content">

    <span className="section-kicker">ARMÁ TU VIAJE</span>

    <h2>¿Un día o dos días por el oeste catamarqueño?</h2>

    <p>
      Contanos cuánto tiempo tenés, cuántas personas viajan y qué tipo
      de experiencia querés vivir. Te ayudamos a organizar el recorrido.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20por%20Ruta%20del%20Adobe%20%2B%20Fiambal%C3%A1.%20Somos%20___%20personas%20y%20nos%20interesa%20la%20opci%C3%B3n%20de%20___%20d%C3%ADa%2Fs."
      target="_blank"
      rel="noopener noreferrer"
      className="final-cta-button"
    >
      💬 Consultar por WhatsApp
    </a>

  </div>
</section>

      </main>
    </div>
  )
}

export default RutaAdobe