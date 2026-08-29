import "../App.css"
import cuestaSinguil from "../assets/cuesta-singuil.jpg"
import frayMamerto from "../assets/fray-mamerto-esquiu.jpg"
import casaNatal from "../assets/casa-natal-esquiu.jpg"
import diquePirquitas from "../assets/dique-pirquitas.jpg"
import diquePirquitas2 from "../assets/dique-pirquitas-2.jpg"
import balcozna from "../assets/balcozna.jpg"
import balcoznaNieve from "../assets/balcozna-nieve.jpg"

function CuestaSinguil() {
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
              url(${cuestaSinguil})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">SIERRAS DEL CENTRO</span>

            <h1>Cuesta de Singuil + Balcozna</h1>

            <p>
              Un circuito de día completo que combina historia, naturaleza,
              paisajes serranos y algunos de los rincones más atractivos del
              centro de Catamarca.
            </p>

            <div className="tour-detail-meta">
              <span>📍 Fray Mamerto Esquiú · Ambato</span>
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

    <h2>Historia, dique y paisajes serranos en un solo recorrido</h2>

    <p>
      Este circuito combina patrimonio, naturaleza y caminos de montaña
      en una excursión de día completo desde Catamarca Capital.
    </p>

    <p>
      Durante el recorrido visitamos la Casa Natal de Fray Mamerto Esquiú,
      el Dique Las Pirquitas, la Cuesta de Singuil y Balcozna, disfrutando
      diferentes paisajes y ambientes en una misma jornada.
    </p>
  </div>

  <aside className="tour-detail-card" id="reservar">
    <span>CONSULTÁ TU VIAJE</span>

    <h3>Cuesta de Singuil + Balcozna</h3>

    <p>
      Contanos la fecha y cuántas personas viajan para ayudarte
      a organizar el circuito.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Cuesta%20de%20Singuil%20%2B%20Balcozna."
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
              Comenzamos el recorrido desde la ciudad y nos dirigimos hacia
              el departamento Fray Mamerto Esquiú.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Casa Natal de Fray Mamerto Esquiú</h3>
            <p>
              Primera parada cultural del recorrido para conocer uno de los
              sitios históricos más representativos de Catamarca.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>Dique Las Pirquitas</h3>
            <p>
              Continuamos hacia el dique para disfrutar el paisaje,
              realizar fotografías y conocer uno de los embalses más
              importantes de la región.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Cuesta de Singuil</h3>
            <p>
              Iniciamos el tramo serrano del circuito, recorriendo caminos
              de montaña, vegetación y vistas panorámicas.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Balcozna</h3>
            <p>
              Llegamos a Balcozna para disfrutar su entorno natural,
              descansar y conocer uno de los paisajes más atractivos
              del centro provincial.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>6</span>
          <div>
            <h3>Regreso a Catamarca Capital</h3>
            <p>
              Finalizamos el circuito regresando hacia la ciudad después
              de una jornada completa recorriendo historia y naturaleza.
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
        <li>✓ Paradas durante el recorrido</li>
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

    <h2>Un recorrido que cambia a cada parada</h2>

    <p>
      Historia, agua, montaña y naturaleza en un circuito completo
      desde Catamarca Capital hasta Balcozna.
    </p>
  </div>

  <div className="tour-gallery-grid tour-gallery-portezuelo">

    <figure className="tour-gallery-main">
      <img
        src={cuestaSinguil}
        alt="Cuesta de Singuil en Catamarca"
      />

      <figcaption>
        <strong>Cuesta de Singuil</strong>
        <span>
          Caminos serranos, vegetación y vistas panorámicas durante el recorrido.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={casaNatal}
        alt="Casa Natal de Fray Mamerto Esquiú en Catamarca"
      />

      <figcaption>
        <strong>Casa Natal de Fray Mamerto Esquiú</strong>
        <span>
          Una parada histórica antes de continuar hacia la zona serrana.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={diquePirquitas}
        alt="Dique Las Pirquitas en Catamarca"
      />

      <figcaption>
        <strong>Dique Las Pirquitas</strong>
        <span>
          Paisaje, agua y una parada ideal para disfrutar y tomar fotografías.
        </span>
      </figcaption>
    </figure>

    <figure className="tour-gallery-night">
      <img
        src={balcozna}
        alt="Balcozna en Catamarca"
      />

      <figcaption>
        <strong>Balcozna</strong>
        <span>
          Naturaleza y tranquilidad para cerrar una jornada llena de contrastes.
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
        Es una excursión de día completo. La duración puede variar según las
        paradas, el tránsito y las condiciones del recorrido.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Incluye comida?</h3>
      <p>
        La comida no está incluida. Podemos coordinar paradas y recomendaciones
        según el recorrido y la disponibilidad del día.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Pueden viajar niños?</h3>
      <p>
        Sí. Es un circuito apto para familias, teniendo en cuenta la duración
        total de la excursión y las necesidades de cada pasajero.
      </p>
    </article>
  </div>
</section>

<section className="tour-final-cta">
  <div className="tour-final-cta-content">
    <span className="section-kicker">RESERVÁ TU EXPERIENCIA</span>

    <h2>¿Querés descubrir Singuil y Balcozna?</h2>

    <p>
      Contanos la fecha, cuántas personas viajan y desde dónde salís.
      Te ayudamos a organizar el circuito completo.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20por%20la%20excursi%C3%B3n%20Cuesta%20de%20Singuil%20%2B%20Balcozna.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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

export default CuestaSinguil