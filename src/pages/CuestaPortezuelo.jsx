import "../App.css"
import cuestaPortezuelo from "../assets/cuesta-portezuelo.jpg"
import portezueloCumbre from "../assets/portezuelo-cumbre.jpg"
import portezueloMirador from "../assets/portezuelo-mirador.jpeg"
import portezueloNoche from "../assets/portezuelo-noche.jpg"
import portezueloCamino from "../assets/portezuelo-camino.jpg"

function CuestaPortezuelo() {
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
              url(${cuestaPortezuelo})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">VALLE CENTRAL</span>

            <h1>Cuesta del Portezuelo</h1>

            <p>
              Una de las postales más emblemáticas de Catamarca,
              con caminos de montaña, vistas panorámicas y paisajes
              inolvidables.
            </p>

            <div className="tour-detail-meta">
              <span>📍 Valle Central</span>
              <span>⏱ Medio día</span>
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

            <h2>Descubrí una de las vistas más famosas de Catamarca</h2>

            <p>
              La Cuesta del Portezuelo es uno de los recorridos más
              representativos de la provincia. Durante el viaje vas a
              disfrutar caminos de montaña, miradores naturales y una
              panorámica privilegiada del Valle Central.
            </p>

            <p>
              Es una experiencia ideal para quienes disponen de medio día
              y quieren conocer uno de los paisajes clásicos de Catamarca
              sin realizar un recorrido de larga distancia.
            </p>
          </div>

          <aside className="tour-detail-card" id="reservar">
            <span>CONSULTÁ TU VIAJE</span>

            <h3>Cuesta del Portezuelo</h3>

            <p>
              Contanos la fecha y cuántas personas viajan para ayudarte
              a organizar la experiencia.
            </p>

            <a
  href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Cuesta%20del%20Portezuelo."
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

        <section className="tour-options-section">
  <div className="section-heading">
    <span className="section-kicker">ELEGÍ TU EXPERIENCIA</span>
    <h2>Dos formas de vivir la Cuesta del Portezuelo</h2>
    <p>
      Elegí la propuesta que mejor se adapte al tiempo que tengas y al tipo
      de experiencia que quieras disfrutar.
    </p>
  </div>

  <div className="tour-options-grid">

    <article className="tour-option-card">
      <span className="tour-option-label">CLÁSICA</span>

     <h3>Cuesta + Mirador</h3>

<p>
  La experiencia clásica para conocer la Cuesta del Portezuelo,
  disfrutar el ascenso y realizar una parada en su tradicional mirador.
</p>

<ul>
  <li>✓ Salida desde Catamarca Capital</li>
  <li>✓ Ascenso por la Cuesta del Portezuelo</li>
  <li>✓ Parada en el mirador</li>
  <li>✓ Tiempo para disfrutar y tomar fotografías</li>
  <li>✓ Regreso a Capital</li>
</ul>

     <a
  href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20experiencia%20Cl%C3%A1sica%20de%20Cuesta%20del%20Portezuelo%20%28Cuesta%20%2B%20Mirador%29."
  target="_blank"
  rel="noopener noreferrer"
  className="tour-option-button"
>
  Consultar experiencia →
</a>
    </article>


    <article className="tour-option-card tour-option-featured">
      <span className="tour-option-label">⭐ EXPERIENCIA MT</span>

      <h3>Cumbre + Polo Giménez</h3>

      <p>
        Nuestra propuesta más completa para disfrutar el Portezuelo sin
        quedarnos únicamente en el mirador.
      </p>

      <ul>
        <li>✓ Todo el recorrido de la experiencia clásica</li>
        <li>✓ Continuación hasta la zona de la cumbre</li>
        <li>✓ Parada en Polo Giménez</li>
        <li>✓ Tiempo para descansar y disfrutar el paisaje</li>
        <li>✓ Opción gastronómica según disponibilidad</li>
        <li>✓ Posibilidad de experiencia al atardecer</li>
      </ul>

      <div className="tour-option-note">
        Gastronomía y alojamiento sujetos a disponibilidad y coordinación previa.
      </div>

     <a
  href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20Experiencia%20MT%20Cuesta%20del%20Portezuelo%20%2B%20Cumbre%20%2B%20Polo%20Gim%C3%A9nez."
  target="_blank"
  rel="noopener noreferrer"
  className="tour-option-button tour-option-button-featured"
>
  Consultar experiencia completa →
</a>
    </article>

  </div>
</section>

<section className="tour-info-section">
  <div className="tour-info-grid">

    <div className="tour-info-block">
      <span className="section-kicker">ITINERARIO</span>
      <h2>Cómo será la experiencia</h2>

      <div className="tour-differential">
  <strong>⭐ DIFERENCIAL MT</strong>
  <span>No nos quedamos en el mirador: continuamos hasta la cumbre.</span>
</div>

      <div className="tour-timeline">

  <div className="tour-step">
    <span>1</span>
    <div>
      <h3>Salida desde Catamarca Capital</h3>
      <p>
        Coordinamos el punto de encuentro y comenzamos el recorrido
        hacia El Portezuelo, atravesando el Valle Central.
      </p>
    </div>
  </div>

  <div className="tour-step">
    <span>2</span>
    <div>
      <h3>Mirador de la Cuesta del Portezuelo</h3>
      <p>
        Realizamos una parada en el mirador ubicado durante el ascenso,
        uno de los puntos clásicos para contemplar y fotografiar las
        impresionantes vistas del Valle Central.
      </p>
    </div>
  </div>

  <div className="tour-step">
    <span>3</span>
    <div>
      <h3>Continuamos hasta la cumbre</h3>
      <p>
        Nuestra experiencia no termina en el mirador. Continuamos el
        ascenso por la Cuesta del Portezuelo hasta llegar a la parte
        alta de la sierra.
      </p>
    </div>
  </div>

  <div className="tour-step">
    <span>4</span>
    <div>
      <h3>Parador Polo Giménez</h3>
      <p>
        Llegamos hasta el tradicional parador de la cumbre, donde tendrás
        tiempo para disfrutar del paisaje y descansar. Las opciones
        gastronómicas se coordinan según disponibilidad.
      </p>
    </div>
  </div>

  <div className="tour-step">
    <span>5</span>
    <div>
      <h3>Regreso a Catamarca Capital</h3>
      <p>
        Después de disfrutar la cumbre iniciamos el regreso hacia la ciudad,
        finalizando una experiencia mucho más completa de la Cuesta del
        Portezuelo.
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

      <h3 className="tour-second-title">Recomendamos llevar</h3>

      <ul>
        <li>• Agua</li>
        <li>• Protector solar</li>
        <li>• Anteojos de sol</li>
        <li>• Calzado cómodo</li>
        <li>• Abrigo según la época del año</li>
      </ul>
    </div>

  </div>
</section>

<section className="tour-gallery-section">
  <div className="section-heading">
    <span className="section-kicker">GALERÍA</span>
    <h2>Mucho más que una parada en el mirador</h2>
    <p>
      Mirador, ascenso, cumbre y vistas del Valle Central forman parte
      de una experiencia más completa por la Cuesta del Portezuelo.
    </p>
  </div>

  <div className="tour-gallery-grid tour-gallery-portezuelo">

    <figure className="tour-gallery-main">
      <img
        src={portezueloCamino}
        alt="Camino y curvas de la Cuesta del Portezuelo"
      />
      <figcaption>
        <strong>El recorrido</strong>
        <span>Ascenso por uno de los caminos más emblemáticos de Catamarca.</span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={portezueloMirador}
        alt="Mirador de la Cuesta del Portezuelo"
      />
      <figcaption>
        <strong>El mirador</strong>
        <span>Una de las grandes paradas panorámicas del recorrido.</span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={portezueloCumbre}
        alt="Vista desde la cumbre de la Cuesta del Portezuelo"
      />
      <figcaption>
        <strong>La cumbre</strong>
        <span>Continuamos más allá del mirador para disfrutar la parte alta.</span>
      </figcaption>
    </figure>

    <figure className="tour-gallery-night">
      <img
        src={portezueloNoche}
        alt="Vista nocturna desde la cumbre de la Cuesta del Portezuelo"
      />
      <figcaption>
        <strong>Portezuelo de noche</strong>
        <span>
          Una vista diferente del Valle Central desde la zona de la cumbre.
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
        La experiencia está pensada como una excursión de medio día.
        El horario final puede variar según las paradas y condiciones del recorrido.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Pueden viajar niños?</h3>
      <p>
        Sí. Es una experiencia apta para familias, siempre teniendo en cuenta
        las necesidades de cada pasajero.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Qué pasa si el clima no acompaña?</h3>
      <p>
        La seguridad es prioritaria. Si las condiciones no permiten realizar
        el recorrido de forma adecuada, coordinamos una alternativa.
      </p>
    </article>
  </div>
</section>



<section className="tour-final-cta">
  <div className="tour-final-cta-content">
    <span className="section-kicker">RESERVÁ TU EXPERIENCIA</span>

    <h2>¿Querés conocer la Cuesta del Portezuelo?</h2>

    <p>
      Contanos la fecha, cuántas personas viajan y desde dónde salís.
      Te ayudamos a organizar el recorrido.
    </p>

   <a
  href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20organizar%20una%20excursi%C3%B3n%20a%20la%20Cuesta%20del%20Portezuelo.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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

export default CuestaPortezuelo