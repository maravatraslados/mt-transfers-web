import "../App.css"
import cuestaTintigasta from "../assets/cuesta-tintigasta.jpg"
import guayamba from "../assets/guayamba.jpg"
import guayamba2 from "../assets/guayamba-2.webp"
import diqueIpizca from "../assets/dique-ipizca.jpg"
import diqueIpizca2 from "../assets/dique-ipizca-2.jpg"
import cuestaPortezuelo from "../assets/cuesta-portezuelo.jpg"

function VueltaCerroAncasti() {
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
              url(${cuestaTintigasta})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">SIERRA DE ANCASTI</span>

            <h1>Vuelta al Cerro Ancasti</h1>

            <p>
              Un circuito de día completo para descubrir las dos caras de la
              Sierra de Ancasti, entre cuestas, pueblos, diques y paisajes del
              este catamarqueño.
            </p>

            <div className="tour-detail-meta">
              <span>📍 Ancasti · El Alto</span>
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

    <h2>Una vuelta completa por la Sierra de Ancasti</h2>

    <p>
      Este circuito de día completo recorre distintas caras de la Sierra de
      Ancasti, combinando caminos de montaña, pueblos, diques y paisajes del
      este catamarqueño.
    </p>

    <p>
      La propuesta está pensada para quienes quieren conocer mucho más que un
      solo punto panorámico y vivir una travesía completa desde Catamarca Capital.
    </p>
  </div>

  <aside className="tour-detail-card" id="reservar">
    <span>CONSULTÁ TU VIAJE</span>

    <h3>Vuelta al Cerro Ancasti</h3>

    <p>
      Contanos la fecha y cuántas personas viajan para ayudarte
      a organizar el circuito completo.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Vuelta%20al%20Cerro%20Ancasti."
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

      <div className="tour-differential">
        <strong>⭐ DIFERENCIAL MT</strong>
        <span>
          No hacemos solo ida y vuelta: recorremos la Sierra de Ancasti como un circuito completo.
        </span>
      </div>

      <div className="tour-timeline">

        <div className="tour-step">
          <span>1</span>
          <div>
            <h3>Salida desde Catamarca Capital</h3>
            <p>
              Comenzamos la jornada desde la ciudad y nos dirigimos hacia
              la Cuesta del Portezuelo.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Cuesta del Portezuelo y cumbre</h3>
            <p>
              Ascendemos por uno de los caminos más emblemáticos de Catamarca,
              disfrutando vistas panorámicas del Valle Central.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>Villa de Ancasti</h3>
            <p>
              Continuamos hacia Villa de Ancasti, con una parada para conocer
              el entorno y disfrutar de los paisajes serranos.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Dique de Ipizca</h3>
            <p>
              Visitamos el dique y realizamos una parada para descansar,
              disfrutar del paisaje y tomar fotografías.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Cuesta de Tintigasta</h3>
            <p>
              Recorremos uno de los tramos más atractivos del circuito,
              atravesando la sierra y descubriendo una nueva perspectiva del paisaje.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>6</span>
          <div>
            <h3>Guayamba</h3>
            <p>
              Llegamos a la zona de Guayamba, donde el paisaje cambia
              completamente y aparecen ambientes más verdes y húmedos.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>7</span>
          <div>
            <h3>Regreso a Catamarca Capital</h3>
            <p>
              Finalizamos la vuelta cerrando el circuito y regresando a la ciudad.
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
        <li>• Abrigo</li>
      </ul>
    </div>

  </div>
</section>

<section className="tour-gallery-section">
  <div className="section-heading">
    <span className="section-kicker">GALERÍA</span>

    <h2>Una vuelta completa por la Sierra de Ancasti</h2>

    <p>
      Cuestas, diques y paisajes verdes que muestran las distintas caras
      de este circuito de día completo.
    </p>
  </div>

  <div className="tour-gallery-grid tour-gallery-portezuelo">

    <figure className="tour-gallery-main">
      <img
        src={cuestaTintigasta}
        alt="Cuesta de Tintigasta en Catamarca"
      />

      <figcaption>
        <strong>Cuesta de Tintigasta</strong>
        <span>
          Uno de los tramos más atractivos del circuito serrano.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={diqueIpizca}
        alt="Dique de Ipizca en Catamarca"
      />

      <figcaption>
        <strong>Dique de Ipizca</strong>
        <span>
          Agua, sierras y una parada ideal para descansar y disfrutar el paisaje.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={cuestaPortezuelo}
        alt="Cuesta del Portezuelo en Catamarca"
      />

      <figcaption>
        <strong>Cuesta del Portezuelo</strong>
        <span>
          El inicio de la travesía por la Sierra de Ancasti.
        </span>
      </figcaption>
    </figure>

    <figure className="tour-gallery-night">
      <img
        src={guayamba2}
        alt="Guayamba en Catamarca"
      />

      <figcaption>
        <strong>Guayamba</strong>
        <span>
          El paisaje cambia por completo al llegar a la vertiente más verde de la sierra.
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
        Coordinamos la salida desde Catamarca Capital o desde un punto
        de encuentro acordado previamente.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Cuánto dura?</h3>
      <p>
        Es una experiencia de día completo. La duración puede variar
        según las paradas y las condiciones del recorrido.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Incluye comida?</h3>
      <p>
        La comida no está incluida. Podemos coordinar paradas durante
        el recorrido según horarios y disponibilidad.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿El recorrido se realiza siempre completo?</h3>
      <p>
        El circuito está sujeto a las condiciones de los caminos y del
        clima. Si algún tramo no pudiera realizarse de manera segura,
        coordinaremos una alternativa.
      </p>
    </article>

  </div>
</section>


<section className="tour-final-cta">
  <div className="tour-final-cta-content">

    <span className="section-kicker">RESERVÁ TU EXPERIENCIA</span>

    <h2>¿Querés dar la Vuelta al Cerro Ancasti?</h2>

    <p>
      Contanos la fecha y cuántas personas viajan. Te ayudamos a organizar
      una jornada completa recorriendo las distintas caras de la Sierra
      de Ancasti.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20por%20la%20excursi%C3%B3n%20Vuelta%20al%20Cerro%20Ancasti.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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