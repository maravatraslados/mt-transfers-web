import belen from "../assets/belen.jpg";
import londres from "../assets/londres.jpg";
import shincal from "../assets/shincal.jpg";
import hilanderas from "../assets/hilanderas(1).jpg";
import quebrada from "../assets/quebrada.jpeg";





function GuiaBelenLondres() {

  const title =
    "Belén y Londres, Catamarca: Qué Ver y Qué Hacer | Guía";

  const description =
    "Guía de Belén y Londres en Catamarca: Shincal de Quimivil, artesanías, historia, paisajes y lugares para conocer durante un recorrido por el oeste catamarqueño.";

  const canonicalUrl =
    "https://mttransfers.com/guia/belen-londres";

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
  setOpenGraph("og:type", "article");

  return (
    <main className="belen-page">

      {/* HEADER */}

      <header className="belen-header">
        <a href="/" className="belen-logo">
          MT TOURS & TRANSFERS
        </a>

        <a href="/guia" className="belen-back">
          ← Volver a la guía
        </a>
      </header>


     {/* HERO */}

<section
  className="belen-hero"
  style={{ backgroundImage: `url(${belen})` }}
>
  <div className="belen-hero-overlay"></div>

  <div className="belen-hero-content">
    <span>GUÍA DE VIAJE · OESTE DE CATAMARCA</span>

    <h1>Belén y Londres</h1>

    <p>
      Historia, arqueología, artesanías y paisajes del oeste
      catamarqueño en dos destinos que se complementan.
    </p>
  </div>
</section>


      {/* INTRO */}

      <section className="belen-intro">

        <div className="belen-intro-main">
          <span className="section-kicker">ANTES DE VIAJAR</span>

          <h2>¿Por qué conocer Belén y Londres?</h2>

          <p>
            Belén es una de las ciudades más importantes del oeste de
            Catamarca y funciona como punto estratégico para conocer
            una región marcada por montañas, cultura textil y
            tradiciones profundamente arraigadas.
          </p>

          <p>
            A pocos kilómetros se encuentra Londres, una de las
            localidades históricas más antiguas de la provincia y
            puerta de entrada al sitio arqueológico El Shincal de
            Quimivil.
          </p>

          <p>
            Visitar ambos destinos permite combinar cultura,
            arqueología, artesanías y paisajes en un mismo recorrido.
          </p>
        </div>

        <div className="belen-quick-info">

          <div>
            <strong>REGIÓN</strong>
            <span>Oeste de Catamarca</span>
          </div>

          <div>
            <strong>DESTINOS</strong>
            <span>Belén + Londres</span>
          </div>

          <div>
            <strong>IDEAL</strong>
            <span>1 a 2 días</span>
          </div>

          <div>
            <strong>IMPERDIBLE</strong>
            <span>El Shincal de Quimivil</span>
          </div>

        </div>

      </section>


     {/* BELÉN */}

<section className="belen-city">

  <div className="section-heading">
    <span className="section-kicker">BELÉN</span>

    <h2>Una de las grandes puertas del oeste catamarqueño</h2>

    <p>
      Belén concentra servicios, alojamiento, gastronomía,
      comercios y movimiento turístico, por lo que suele ser una
      excelente base para recorrer distintos puntos de la región.
    </p>
  </div>

  <div className="belen-place-grid">

    <article className="belen-place-card">
      <img
        src={belen}
        alt="Ciudad de Belén en Catamarca"
      />

      <span>CIUDAD</span>

      <h3>Belén</h3>

      <p>
        La ciudad combina vida cotidiana, historia y una fuerte
        identidad cultural ligada al oeste provincial.
      </p>

      <p>
        Es un buen lugar para alojarse, conocer comercios regionales
        y organizar recorridos hacia Londres, El Shincal y otras
        localidades cercanas.
      </p>
    </article>


    <article className="belen-place-card">
      <img
        src={quebrada}
        alt="Paisaje de la quebrada y entorno natural de Belén"
      />

      <span>PAISAJE</span>

      <h3>Quebrada y entorno de Belén</h3>

      <p>
        Las montañas y quebradas forman parte inseparable del paisaje
        de Belén y acompañan muchos de los recorridos que permiten
        conocer esta región del oeste catamarqueño.
      </p>

      <p>
        Miradores y caminos permiten descubrir otra faceta del
        destino, especialmente atractiva para quienes buscan combinar
        cultura y naturaleza.
      </p>
    </article>


    <article className="belen-place-card belen-place-featured">
      <img
        src={hilanderas}
        alt="Trabajo artesanal en telar tradicional de Catamarca"
      />

      <span>IDENTIDAD LOCAL</span>

      <h3>Tradición textil</h3>

      <p>
        Belén es uno de los grandes referentes de la producción
        artesanal textil de Catamarca.
      </p>

      <p>
        El trabajo de artesanas y artesanos mantiene vivas técnicas
        vinculadas al hilado y al tejido, dando origen a ponchos,
        mantas y otras piezas que forman parte de la identidad
        cultural de la región.
      </p>
    </article>

  </div>

</section>


      {/* RUTA DEL TELAR */}

      <section className="belen-telar">

        <div className="belen-telar-title">
          <span>ARTESANÍAS Y TRADICIÓN</span>
          <h2>La Ruta del Telar</h2>
        </div>

        <div className="belen-telar-content">

          <p>
            La Ruta del Telar reúne artesanas y artesanos de distintas
            localidades del departamento Belén que mantienen viva una
            tradición textil reconocida en toda la provincia.
          </p>

          <p>
            El trabajo puede incluir hilado, teñido, preparación de
            fibras y tejido en telar criollo, dando origen a piezas
            únicas elaboradas de manera artesanal.
          </p>

          <p>
            Para el visitante, conocer este trabajo permite comprender
            mejor la relación entre territorio, cultura y producción
            local.
          </p>

          <strong>
            Comprar directamente a los artesanos también ayuda a
            sostener este patrimonio cultural.
          </strong>

        </div>

      </section>


     {/* LONDRES */}

<section className="belen-londres">

  <div className="section-heading">
    <span className="section-kicker">LONDRES</span>

    <h2>Historia viva a pocos kilómetros de Belén</h2>

    <p>
      Londres posee una fuerte identidad histórica y cultural y
      constituye uno de los puntos esenciales para quienes recorren
      el oeste catamarqueño.
    </p>
  </div>

  <div className="belen-londres-feature">

    <img
      src={londres}
      alt="Paisaje y acceso a Londres en Catamarca"
    />

    <div className="belen-londres-feature-content">
      <span>OESTE CATAMARQUEÑO</span>

      <h3>Londres</h3>

      <p>
        La localidad forma parte de la historia temprana del período
        colonial de Catamarca y conserva una identidad propia entre
        montañas y paisajes característicos del oeste.
      </p>

      <p>
        Su cercanía con Belén permite combinar ambos destinos dentro
        del mismo recorrido y utilizar Londres como puerta de entrada
        a uno de los grandes tesoros arqueológicos de la provincia.
      </p>

      <strong>
        A pocos kilómetros se encuentra El Shincal de Quimivil.
      </strong>
    </div>

  </div>

</section>

      {/* SHINCAL */}

<section className="belen-shincal">

  <div className="belen-shincal-image">
    <img
      src={shincal}
      alt="Sitio arqueológico El Shincal de Quimivil en Londres Catamarca"
    />
  </div>

  <div className="belen-shincal-content">

    <span>ARQUEOLOGÍA · PATRIMONIO</span>

    <h2>El Shincal de Quimivil</h2>

    <p>
      El Shincal de Quimivil es uno de los sitios arqueológicos más
      importantes de Argentina vinculados a la presencia inca en el
      actual territorio nacional.
    </p>

    <p>
      Durante los siglos XV y XVI funcionó como un importante centro
      político, administrativo y ceremonial dentro de la expansión
      inca hacia esta región de los Andes.
    </p>

    <p>
      En el complejo pueden reconocerse una gran plaza, el ushnu
      ceremonial, kallankas, sectores de almacenamiento y numerosos
      recintos que ayudan a comprender la organización del lugar.
    </p>

    <p>
      Recorrerlo acompañado por una visita guiada permite interpretar
      el paisaje y comprender mucho mejor la importancia que tuvo este
      centro dentro de la historia prehispánica de Catamarca.
    </p>

    <strong>
      El Shincal está declarado Monumento Histórico Nacional y
      constituye uno de los grandes patrimonios arqueológicos del
      oeste catamarqueño.
    </strong>

  </div>

</section>


      {/* CÓMO LLEGAR */}

      <section className="belen-access">

        <div className="section-heading">
          <span className="section-kicker">CÓMO LLEGAR</span>

          <h2>Cómo organizar el viaje a Belén y Londres</h2>

          <p>
            La elección depende del punto de partida, el tiempo
            disponible y si viajás con vehículo propio, transporte
            público o servicio contratado.
          </p>
        </div>

        <div className="belen-access-grid">

          <article>
            <span>DESDE CATAMARCA CAPITAL</span>

            <h3>Por carretera</h3>

            <p>
              Belén está conectada por rutas provinciales y nacionales
              con San Fernando del Valle de Catamarca y otras
              localidades del oeste.
            </p>

            <p>
              Es recomendable salir con tiempo suficiente y consultar
              el estado de las rutas antes de viajar.
            </p>
          </article>


          <article>
            <span>ENTRE BELÉN Y LONDRES</span>

            <h3>Distancia corta</h3>

            <p>
              Ambas localidades se encuentran relativamente cerca, lo
              que facilita visitarlas dentro del mismo recorrido.
            </p>

            <p>
              Londres suele incluirse junto con El Shincal de
              Quimivil.
            </p>
          </article>


          <article>
            <span>SIN AUTO</span>

            <h3>Transporte público o traslado</h3>

            <p>
              Existen servicios de transporte hacia localidades del
              oeste, aunque las frecuencias y operadores pueden
              modificarse.
            </p>

            <p>
              Conviene verificar horarios antes del viaje o contratar
              un traslado si se busca mayor flexibilidad.
            </p>
          </article>

        </div>

      </section>


      {/* BASE */}

      <section className="belen-base">

        <div className="belen-base-title">
          <span>DÓNDE HACER BASE</span>

          <h2>Belén es la opción más práctica</h2>
        </div>

        <div className="belen-base-content">

          <p>
            Para la mayoría de los viajeros, Belén es el punto más
            práctico para alojarse gracias a su oferta de servicios,
            gastronomía y ubicación.
          </p>

          <p>
            Desde allí es posible organizar una visita a Londres,
            recorrer El Shincal y continuar hacia otros destinos del
            oeste.
          </p>

          <p>
            Quienes buscan un ritmo más tranquilo también pueden
            considerar alojarse en Londres y dedicar más tiempo a su
            entorno.
          </p>

        </div>

      </section>


      {/* CUÁNTOS DÍAS */}

      <section className="belen-days">

        <div className="section-heading">
          <span className="section-kicker">TIEMPO DE VIAJE</span>

          <h2>¿Cuántos días conviene dedicar?</h2>
        </div>

        <div className="belen-days-grid">

          <article>
            <span>1 DÍA</span>

            <h3>Recorrido esencial</h3>

            <p>
              Con un día completo se puede combinar Belén, Londres y
              una visita organizada a El Shincal.
            </p>

            <p>
              Es una buena opción para quienes atraviesan el oeste
              dentro de un itinerario más amplio.
            </p>
          </article>


          <article className="belen-days-featured">
            <span>2 DÍAS</span>

            <h3>La opción recomendada</h3>

            <p>
              Dos días permiten conocer la zona con más tranquilidad,
              dedicar tiempo a artesanos y comprender mejor la
              historia de cada lugar.
            </p>

            <p>
              También brinda mayor flexibilidad para incluir paisajes
              y recorridos cercanos.
            </p>
          </article>

        </div>

      </section>


      {/* MEJOR ÉPOCA */}

      <section className="belen-season">

        <div className="belen-season-title">
          <span>CUÁNDO VIAJAR</span>

          <h2>Mejor época para visitar Belén y Londres</h2>
        </div>

        <div className="belen-season-content">

          <p>
            Belén y Londres pueden visitarse durante gran parte del
            año, aunque las condiciones cambian según la estación.
          </p>

          <p>
            Primavera y otoño suelen ofrecer temperaturas agradables
            para recorridos culturales y arqueológicos.
          </p>

          <p>
            En verano las temperaturas pueden ser elevadas durante el
            día, mientras que en invierno las mañanas y noches pueden
            ser frías.
          </p>

          <a
            href="/guia/mejor-epoca-catamarca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver guía completa sobre cuándo viajar a Catamarca →
          </a>

        </div>

      </section>


      {/* QUÉ LLEVAR */}

      <section className="belen-tips">

        <div className="section-heading">
          <span className="section-kicker">PREPARAR EL VIAJE</span>

          <h2>Qué conviene llevar</h2>
        </div>

        <div className="belen-tips-grid">

          <article>
            <strong>01</strong>
            <h3>Protección solar</h3>
            <p>
              Protector solar, gorra o sombrero y lentes de sol son
              útiles durante todo el año.
            </p>
          </article>

          <article>
            <strong>02</strong>
            <h3>Agua</h3>
            <p>
              Llevá suficiente hidratación, especialmente durante los
              recorridos al aire libre.
            </p>
          </article>

          <article>
            <strong>03</strong>
            <h3>Calzado cómodo</h3>
            <p>
              Un buen calzado mejora mucho la experiencia en visitas
              arqueológicas y caminatas.
            </p>
          </article>

        </div>

      </section>


      {/* FAQ */}

      <section className="belen-faq">

        <div className="section-heading">
          <span className="section-kicker">PREGUNTAS FRECUENTES</span>

          <h2>Antes de viajar</h2>
        </div>

        <div className="belen-faq-grid">

          <article>
            <h3>¿Belén y Londres se pueden visitar en el mismo día?</h3>

            <p>
              Sí. Por su cercanía es posible combinarlos, especialmente
              si el recorrido está bien organizado.
            </p>
          </article>


          <article>
            <h3>¿Vale la pena visitar El Shincal?</h3>

            <p>
              Sí. Es uno de los sitios arqueológicos más importantes
              de Catamarca y uno de los grandes atractivos culturales
              del oeste provincial.
            </p>
          </article>


          <article>
            <h3>¿Conviene dormir en Belén?</h3>

            <p>
              Para la mayoría de los viajeros sí, porque concentra más
              servicios y permite organizar distintos recorridos desde
              allí.
            </p>
          </article>


          <article>
            <h3>¿Se puede viajar sin vehículo propio?</h3>

            <p>
              Sí, aunque conviene revisar previamente las frecuencias
              de transporte o considerar un servicio de traslado para
              moverse con mayor libertad.
            </p>
          </article>

        </div>

      </section>


      {/* EXCURSIÓN RELACIONADA */}

      <section className="belen-related">

        <div>
          <span>EXPERIENCIA RELACIONADA</span>

          <h2>Vuelta al Oeste Catamarqueño</h2>

          <p>
            Belén, Londres y El Shincal pueden formar parte de un
            recorrido mucho más amplio por el oeste de Catamarca.
          </p>

          <a
            href="/excursiones/vuelta-al-oeste-catamarqueno"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver excursión →
          </a>
        </div>

      </section>


      {/* CTA FINAL */}

      <section className="belen-final-cta">

        <div>
          <span>MT TOURS & TRANSFERS</span>

          <h2>¿Querés conocer Belén y Londres?</h2>

          <p>
            Consultanos para organizar tu traslado o recorrido por el
            oeste catamarqueño.
          </p>
        </div>

        <a
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20viaje%20a%20Bel%C3%A9n%20y%20Londres."
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>

      </section>

    </main>
  );
}

export default GuiaBelenLondres;