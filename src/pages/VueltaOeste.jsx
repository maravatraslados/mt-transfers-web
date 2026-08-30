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
    "Vuelta al Oeste Catamarqueño: Belén, Londres y Shincal";

  const description =
    "Excursión Vuelta al Oeste Catamarqueño: Cuesta de la Cébila, Londres, Shincal de Quimivil, Belén, Andalgalá y paisajes del oeste de Catamarca.";

  const canonicalUrl =
    "https://mttransfers.com/excursiones/vuelta-oeste-catamarqueno";

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
              url(${shincal1})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">OESTE CATAMARQUEÑO</span>

            <h1>Vuelta al Oeste Catamarqueño</h1>

            <p>
              Historia inca, artesanías, pueblos y paisajes del oeste
              en un gran circuito por Catamarca.
            </p>

            <div className="tour-detail-meta">
              <span>📍 Londres · Belén · Andalgalá · Pomán</span>
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

    <h2>Una gran vuelta por la historia, los pueblos y los paisajes del oeste</h2>

    <p>
      Este circuito conecta algunos de los lugares más representativos del
      oeste catamarqueño en una jornada extensa que combina arqueología,
      artesanías, pueblos históricos y paisajes de montaña.
    </p>

    <p>
      La propuesta no se limita a visitar un solo destino: recorremos distintas
      regiones y vamos descubriendo cómo cambia el paisaje y la identidad
      cultural a medida que avanzamos.
    </p>
  </div>

  <aside className="tour-detail-card" id="reservar">
    <span>CONSULTÁ TU VIAJE</span>

    <h3>Vuelta al Oeste Catamarqueño</h3>

    <p>
      Contanos la fecha y cuántas personas viajan para ayudarte
      a organizar el circuito.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Vuelta%20al%20Oeste%20Catamarque%C3%B1o."
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
          Un circuito amplio por el oeste, sin repetir el mismo camino de ida y vuelta.
        </span>
      </div>

      <div className="tour-timeline">

        <div className="tour-step">
          <span>1</span>
          <div>
            <h3>Salida desde Catamarca Capital</h3>
            <p>
              Comenzamos temprano el viaje rumbo al oeste de la provincia.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Cuesta de la Cébila</h3>
            <p>
              Atravesamos uno de los grandes pasos serranos del recorrido,
              disfrutando el cambio de paisaje hacia el oeste catamarqueño.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>Cerro Negro y Londres</h3>
            <p>
              Continuamos por el corredor de la RN 40 hasta llegar a Londres,
              una de las localidades históricas del oeste.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Shincal de Quimivil</h3>
            <p>
              Visitamos uno de los sitios arqueológicos más importantes de
              Catamarca, con recorrido sujeto a horarios y disponibilidad
              de visita guiada.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Belén + Hilanderas</h3>
            <p>
              Llegamos a Belén para conocer su tradición textil, sus artesanas
              y parte de la identidad cultural vinculada al tejido y al telar.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>6</span>
          <div>
            <h3>Andalgalá</h3>
            <p>
              Continuamos hacia la denominada Perla del Oeste para recorrer
              parte de su entorno urbano y serrano.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>7</span>
          <div>
            <h3>Condado de Huasán</h3>
            <p>
              Realizamos una parada en este entorno histórico y rural de
              Andalgalá, sujeto a disponibilidad de acceso y coordinación previa.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>8</span>
          <div>
            <h3>Saujil y Pomán</h3>
            <p>
              Cerramos el recorrido atravesando los pueblos del departamento
              Pomán antes de iniciar el regreso.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>9</span>
          <div>
            <h3>Regreso</h3>
            <p>
              Finalizamos la vuelta regresando hacia la zona de Capital,
              completando un gran circuito por el oeste de Catamarca.
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
        <li>✓ Paradas durante el circuito</li>
        <li>✓ Atención personalizada</li>
      </ul>

      <h3 className="tour-second-title">Importante</h3>

      <ul>
        <li>• Jornada extensa</li>
        <li>• Salida temprana</li>
        <li>• Shincal sujeto a horarios de visita</li>
        <li>• Huasán sujeto a disponibilidad y coordinación</li>
      </ul>
    </div>

  </div>
</section>

<section className="story-section">
  <div className="section-heading">
    <span className="section-kicker">NO SOLO LO VAS A VER</span>

    <h2>Vas a conocer la historia del oeste catamarqueño</h2>

    <p>
      Este circuito atraviesa pueblos, sitios arqueológicos, caminos serranos
      y tradiciones que forman parte de la identidad del oeste de Catamarca.
      La idea no es solamente llegar: queremos que entiendas qué estás viendo
      y por qué cada lugar es importante.
    </p>
  </div>

  <div className="story-grid">

    <article className="story-card">
      <img
        src={cebila1}
        alt="Cuesta de la Cébila en Catamarca"
      />

      <div className="story-card-content">
        <span>PUERTA AL OESTE</span>
        <h3>Cuesta de la Cébila</h3>

        <p>
          Es uno de los grandes pasos serranos que conectan el Valle Central
          con el oeste catamarqueño. Durante el ascenso cambia por completo
          el paisaje y comienza una de las travesías más interesantes de la provincia.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={shincal2}
        alt="Shincal de Quimivil en Londres Catamarca"
      />

      <div className="story-card-content">
        <span>LONDRES</span>
        <h3>Shincal de Quimivil</h3>

        <p>
          Fue uno de los centros administrativos incas más importantes del
          actual territorio argentino. Sus plazas, plataformas ceremoniales
          y construcciones permiten comprender cómo se organizaba esta región
          durante la expansión del Tawantinsuyo.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={londres}
        alt="Londres Catamarca"
      />

      <div className="story-card-content">
        <span>LONDRES</span>
        <h3>Una de las ciudades históricas de Catamarca</h3>

        <p>
          Londres forma parte de la historia más antigua de la provincia y
          funciona como puerta de entrada al Shincal. Su identidad combina
          pasado colonial, cultura local y paisajes del oeste.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={hilanderas}
        alt="Hilanderas y tradición textil de Belén"
      />

      <div className="story-card-content">
        <span>BELÉN</span>
        <h3>La tradición de las hilanderas</h3>

        <p>
          Belén es uno de los grandes centros textiles de Catamarca.
          La tradición del hilado y el telar sigue viva en talleres familiares
          donde se trabajan fibras como llama, oveja, alpaca y, en ámbitos
          autorizados, vicuña.
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


    <article className="story-card">
      <img
        src={andalgala}
        alt="Andalgalá Catamarca"
      />

      <div className="story-card-content">
        <span>ANDALGALÁ</span>
        <h3>La Perla del Oeste</h3>

        <p>
          Andalgalá se encuentra rodeada de montañas y posee una identidad
          cultural muy marcada. Su historia, producción regional y entorno
          serrano la convierten en uno de los grandes puntos del oeste catamarqueño.
        </p>
      </div>
    </article>


    <article className="story-card">
      <img
        src={condadoHuasan}
        alt="Condado de Huasán en Andalgalá"
      />

      <div className="story-card-content">
        <span>HUASÁN</span>
        <h3>Condado de Huasán</h3>

        <p>
          Un entorno histórico y rural que conserva construcciones tradicionales
          y una fuerte relación con la producción del valle. Su visita permite
          sumar una mirada diferente sobre la vida y la historia de Andalgalá.
        </p>
      </div>
    </article>
      </div>
</section>

<section className="tour-gallery-section">
  <div className="section-heading">
    <span className="section-kicker">POSTALES DEL RECORRIDO</span>

    <h2>Un circuito que cambia a cada tramo</h2>

    <p>
      Quebradas, arqueología, pueblos, artesanías y paisajes serranos
      en una vuelta completa por el oeste catamarqueño.
    </p>
  </div>

  <div className="tour-gallery-grid adobe-gallery-grid">

    <figure>
      <img
        src={cebila2}
        alt="Cuesta de la Cébila en Catamarca"
      />

      <figcaption>
        <strong>Cuesta de la Cébila</strong>
        <span>
          La gran puerta de entrada al oeste catamarqueño.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={shincal1}
        alt="Shincal de Quimivil"
      />

      <figcaption>
        <strong>Shincal de Quimivil</strong>
        <span>
          Uno de los grandes sitios arqueológicos de Catamarca.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={londres}
        alt="Londres Catamarca"
      />

      <figcaption>
        <strong>Londres</strong>
        <span>
          Historia y paisajes en la antesala del Shincal.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={belen}
        alt="Belén Catamarca"
      />

      <figcaption>
        <strong>Belén</strong>
        <span>
          Una de las grandes ciudades del oeste catamarqueño.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={hilanderas}
        alt="Hilanderas de Belén"
      />

      <figcaption>
        <strong>Tradición textil</strong>
        <span>
          Hilado, telar y saberes que siguen vivos en Belén.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={andalgala}
        alt="Andalgalá Catamarca"
      />

      <figcaption>
        <strong>Andalgalá</strong>
        <span>
          La Perla del Oeste y sus paisajes serranos.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={condadoHuasan}
        alt="Condado de Huasán Andalgalá"
      />

      <figcaption>
        <strong>Condado de Huasán</strong>
        <span>
          Historia, campo y tradición rural en Andalgalá.
        </span>
      </figcaption>
    </figure>

    <figure>
      <img
        src={saujil}
        alt="Saujil Pomán Catamarca"
      />

      <figcaption>
        <strong>Saujil · Pomán</strong>
        <span>
          El tramo final de una gran vuelta por el oeste.
        </span>
      </figcaption>
    </figure>

   </div>
</section>

<section className="tour-faq-section">
  <div className="section-heading">
    <span className="section-kicker">PREGUNTAS FRECUENTES</span>
    <h2>Antes de reservar</h2>

    <p>
      Algunos detalles importantes para organizar una jornada completa
      por el oeste catamarqueño.
    </p>
  </div>

  <div className="tour-faq-grid">

    <article className="tour-faq-card">
      <h3>¿Desde dónde sale la excursión?</h3>
      <p>
        La salida se coordina desde Catamarca Capital o desde un punto
        de encuentro acordado previamente.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Es una excursión de día completo?</h3>
      <p>
        Sí. Es un circuito extenso, por lo que recomendamos salir temprano
        para aprovechar mejor las distintas paradas del recorrido.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿La visita al Shincal está incluida?</h3>
      <p>
        El recorrido contempla la visita al Shincal de Quimivil.
        El ingreso y la visita guiada dependen de horarios, disponibilidad
        y condiciones del sitio.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Visitamos artesanas e hilanderas en Belén?</h3>
      <p>
        Buscamos incorporar el contacto con la tradición textil de Belén
        durante el recorrido, sujeto a disponibilidad de los talleres
        y artesanas al momento de la visita.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Se ingresa al Condado de Huasán?</h3>
      <p>
        La visita al Condado de Huasán requiere coordinación previa y
        está sujeta a disponibilidad. Confirmamos esta posibilidad
        antes de realizar la experiencia.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Qué recomendamos llevar?</h3>
      <p>
        Agua, protector solar, calzado cómodo, anteojos de sol y abrigo.
        Al ser un recorrido extenso, recomendamos también llevar lo necesario
        para pasar gran parte del día fuera.
      </p>
    </article>

  </div>
</section>


<section className="tour-final-cta">
  <div className="tour-final-cta-content">

    <span className="section-kicker">DESCUBRÍ EL OESTE</span>

    <h2>Una vuelta diferente por Catamarca</h2>

    <p>
      Shincal, Belén, hilanderas, Andalgalá, Huasán, Saujil y Pomán
      forman parte de una jornada donde cada tramo muestra una cara
      diferente del oeste catamarqueño.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20por%20la%20Vuelta%20al%20Oeste%20Catamarque%C3%B1o.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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

export default VueltaOeste