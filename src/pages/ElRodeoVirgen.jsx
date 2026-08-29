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
          <a href="/#transfers">Transfers</a>
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
                rgba(0, 0, 0, 0.78) 0%,
                rgba(0, 0, 0, 0.48) 50%,
                rgba(0, 0, 0, 0.16) 100%
              ),
              url(${virgenRodeo})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">AMBATO · CATAMARCA</span>

            <h1>El Rodeo + Virgen Más Alta del Mundo</h1>

            <p>
              Naturaleza, caminos de montaña y una experiencia única
              entre los paisajes serranos de Ambato.
            </p>

            <div className="tour-detail-meta">
              <span>📍 El Rodeo · Ambato</span>
              <span>⏱ Día completo</span>
              <span>🚘 Salida desde Capital</span>
            </div>

            <a href="#reservar" className="button button-primary">
              Consultar disponibilidad
            </a>
          </div>
        </section>

<section className="tour-detail-content">
  <div className="tour-detail-main">
    <span className="section-kicker">LA EXPERIENCIA</span>

    <h2>Montaña, naturaleza y una de las imágenes religiosas más impactantes de Catamarca</h2>

    <p>
      Esta experiencia combina los paisajes serranos de Ambato con una visita
      a El Rodeo y al complejo de la Virgen del Valle, ubicado en lo alto de
      la montaña.
    </p>

    <p>
      Es un recorrido pensado para disfrutar caminos panorámicos, naturaleza,
      tranquilidad y un sitio que combina turismo, fe y vistas privilegiadas
      de las sierras catamarqueñas.
    </p>
  </div>

  <aside className="tour-detail-card" id="reservar">
    <span>CONSULTÁ TU VIAJE</span>

    <h3>El Rodeo + Virgen del Valle</h3>

    <p>
      Contanos la fecha y cuántas personas viajan para ayudarte
      a organizar la experiencia.
    </p>

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


<section className="tour-info-section">
  <div className="tour-info-grid">

    <div className="tour-info-block">
      <span className="section-kicker">ITINERARIO</span>
      <h2>Cómo será la experiencia</h2>

      <div className="tour-timeline">

        <div className="tour-step">
          <span>1</span>
          <div>
            <h3>Salida desde Catamarca Capital</h3>
            <p>
              Comenzamos el recorrido hacia el departamento Ambato,
              tomando la ruta serrana en dirección a El Rodeo.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Camino hacia El Rodeo</h3>
            <p>
              Disfrutamos el cambio de paisaje mientras ascendemos hacia
              una de las villas serranas más conocidas de Catamarca.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>El Rodeo</h3>
            <p>
              Realizamos una parada para conocer la localidad, disfrutar
              su entorno natural y recorrer algunos de sus puntos de interés.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Camino de la Fe</h3>
            <p>
              Continuamos hacia el acceso al complejo de la Virgen del Valle,
              ubicado en la zona alta de la montaña.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Virgen del Valle</h3>
            <p>
              Visitamos la imponente imagen de 52 metros de altura y,
              según condiciones de acceso y horarios, disfrutamos del
              complejo y sus vistas panorámicas.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>6</span>
          <div>
            <h3>Regreso a Catamarca Capital</h3>
            <p>
              Después de disfrutar la montaña y el complejo iniciamos
              el regreso hacia la ciudad.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="tour-includes-card">
      <span className="section-kicker">INFORMACIÓN</span>
      <h3>La experiencia incluye</h3>

      <ul>
        <li>✓ Traslado ida y vuelta</li>
        <li>✓ Vehículo con aire acondicionado</li>
        <li>✓ Conductor profesional</li>
        <li>✓ Seguro correspondiente al servicio</li>
        <li>✓ Paradas panorámicas</li>
        <li>✓ Atención personalizada</li>
      </ul>

      <h3 className="tour-second-title">Importante</h3>

      <ul>
        <li>• El acceso al complejo tiene horarios determinados</li>
        <li>• La capacidad puede ser limitada</li>
        <li>• Recomendamos calzado cómodo</li>
        <li>• Llevar abrigo según la época del año</li>
      </ul>
    </div>

  </div>
</section>

<section className="story-section">
  <div className="section-heading">
    <span className="section-kicker">NO SOLO LO VAS A VER</span>

    <h2>Vas a conocer qué hace único a este lugar</h2>

    <p>
      Esta experiencia combina naturaleza, identidad serrana y turismo de fe.
      Queremos que no solo llegues hasta la Virgen: también entiendas el paisaje
      y la historia que rodean a El Rodeo y las sierras de Ambato.
    </p>
  </div>

  <div className="story-grid">

  <article className="story-card">
  <img
    src={elRodeo}
    alt="Ingreso a El Rodeo en Catamarca"
  />

  <div className="story-card-content">
    <span>AMBATO</span>

    <h3>El Rodeo</h3>

    <p>
      El Rodeo forma parte de la región serrana de Ambato, una zona marcada
      por paisajes verdes, cauces de agua, tradición y villas de descanso.
      Su entorno contrasta con los paisajes más áridos de otras regiones de
      Catamarca.
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
        alt="Virgen del Valle en El Rodeo Catamarca"
      />

      <div className="story-card-content">
        <span>CAMINO DE LA FE</span>

        <h3>Una imagen monumental</h3>

        <p>
          La imagen de la Virgen del Valle alcanza 52 metros de altura total.
          Está ubicada en la cima del cerro y se convirtió en uno de los grandes
          puntos de turismo religioso de Catamarca.
        </p>
      </div>
    </article>


    <article className="story-card">
  <img
    src={interiorVirgen}
    alt="Escaleras interiores del monumento de la Virgen del Valle"
  />

  <div className="story-card-content">
    <span>MIRADOR INTERIOR</span>

    <h3>117 escalones hacia las vistas</h3>

    <p>
      En el interior del complejo hay un mirador al que se accede mediante
      117 escalones. Desde allí, la experiencia combina la dimensión
      religiosa con vistas del paisaje serrano.
    </p>
  </div>
</article>

  </div>
</section>

<section className="tour-gallery-section">

  <div className="section-heading">
    <span className="section-kicker">POSTALES DE LA EXPERIENCIA</span>

    <h2>El Rodeo y las sierras de Ambato</h2>

    <p>
      Montañas, caminos serranos, paisajes verdes y algunos de los lugares
      que forman parte de esta experiencia por Ambato.
    </p>
  </div>

  <div className="tour-gallery-grid adobe-gallery-grid">

    <figure>
      <img
        src={virgenPanoramica}
        alt="Vista panorámica de la Virgen del Valle en El Rodeo"
      />

      <figcaption>
        <strong>Virgen del Valle</strong>
        <span>
          Una imagen monumental rodeada por las sierras de Ambato.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={elRodeo2}
        alt="Vista panorámica de El Rodeo Catamarca"
      />

      <figcaption>
        <strong>El Rodeo</strong>
        <span>
          Una villa serrana rodeada de montañas y vegetación.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={elRodeo3}
        alt="Vista aérea de El Rodeo Catamarca"
      />

      <figcaption>
        <strong>Entre las sierras</strong>
        <span>
          El paisaje verde de Ambato acompaña gran parte del recorrido.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={virgenRodeo}
        alt="Camino hacia la Virgen del Valle"
      />

      <figcaption>
        <strong>Camino de la Fe</strong>
        <span>
          El ascenso ofrece vistas panorámicas de las montañas.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={cristoRedentor}
        alt="Cristo Redentor en El Rodeo Catamarca"
      />

      <figcaption>
        <strong>Cristo Redentor</strong>
        <span>
          Otro de los puntos religiosos rodeados por el paisaje serrano.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={capillaVirgen}
        alt="Capilla interior del complejo de la Virgen"
      />

      <figcaption>
        <strong>Capilla interior</strong>
        <span>
          Un espacio de recogimiento dentro del complejo.
        </span>
      </figcaption>
    </figure>

  </div>

</section>

<section className="tour-faq-section">
  <div className="section-heading">
    <span className="section-kicker">PREGUNTAS FRECUENTES</span>
    <h2>Antes de reservar</h2>
  </div>

  <div className="tour-faq-grid">

    <article className="tour-faq-card">
      <h3>¿Desde dónde sale la excursión?</h3>
      <p>
        Coordinamos la salida desde Catamarca Capital o desde un punto de
        encuentro acordado previamente.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Cuánto dura?</h3>
      <p>
        Es una experiencia de día completo. La duración puede variar según
        las paradas, horarios de acceso y condiciones del recorrido.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Se puede subir al mirador interior?</h3>
      <p>
        El acceso depende de los horarios y condiciones del complejo.
        Si está habilitado, el mirador interior se alcanza mediante escaleras.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Es apta para familias?</h3>
      <p>
        Sí. Es una experiencia apta para familias, teniendo en cuenta las
        necesidades de cada pasajero y la caminata que pueda realizarse.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Qué recomendamos llevar?</h3>
      <p>
        Agua, protector solar, calzado cómodo, anteojos de sol y abrigo
        según la época del año.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿La visita a la Virgen está siempre disponible?</h3>
      <p>
        No necesariamente. El acceso puede depender de horarios, capacidad
        y condiciones operativas del complejo.
      </p>
    </article>

  </div>
</section>


<section className="tour-final-cta">
  <div className="tour-final-cta-content">

    <span className="section-kicker">RESERVÁ TU EXPERIENCIA</span>

    <h2>¿Querés conocer El Rodeo y la Virgen del Valle?</h2>

    <p>
      Contanos la fecha y cuántas personas viajan. Te ayudamos a organizar
      una jornada entre sierras, naturaleza y uno de los grandes íconos
      religiosos de Catamarca.
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