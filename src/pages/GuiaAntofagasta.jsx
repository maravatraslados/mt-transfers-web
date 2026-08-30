import antofagasta from "../assets/antofagasta.jpg";
import villaAntofagasta from "../assets/villa antofagasta.jpg";
import volcanes from "../assets/volcanes.jpg";
import tobas from "../assets/tobas.jpg";
import elPenon from "../assets/el peñon.jpg";
import campoPomez from "../assets/campo pomez.jpg";
import carachiPampa from "../assets/carachipampa.jpg";
import salarAntofalla from "../assets/salar antofalla.jpeg";
import volcanGalan from "../assets/volcan galan.jpg";



function GuiaAntofagasta() {

  const title =
    "Antofagasta de la Sierra: Qué Ver y Cómo Llegar | Catamarca";

  const description =
    "Guía de Antofagasta de la Sierra, Catamarca: qué ver, cómo llegar, Campo de Piedra Pómez, El Peñón, Antofalla, Volcán Galán y consejos para recorrer la Puna.";

  const canonicalUrl =
    "https://mttransfers.com/guia/antofagasta-de-la-sierra";

  // TITLE
  document.title = title;

  // META DESCRIPTION
  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description;

  // CANONICAL
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;

  // OPEN GRAPH
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
    <div className="antofagasta-page">

      {/* HEADER */}

      <header className="antofagasta-header">
        <a href="/" className="antofagasta-logo">
          MT TOURS & TRANSFERS
        </a>

        <a
          href="/guia"
          target="_blank"
          rel="noopener noreferrer"
          className="antofagasta-back"
        >
          ← Volver a la guía
        </a>
      </header>

      <main>

        {/* HERO */}

        <section
  className="antofagasta-hero"
  style={{ backgroundImage: `url(${antofagasta})` }}
>
          <div className="antofagasta-hero-overlay"></div>

          <div className="antofagasta-hero-content">
            <span>GUÍA DE VIAJE · PUNA CATAMARQUEÑA</span>

            <h1>Antofagasta de la Sierra</h1>

            <p>
              Volcanes, salares, lagunas, pueblos de altura y algunos de los
              paisajes más extraordinarios de la Puna argentina.
            </p>
          </div>
        </section>

        {/* INTRO */}

        <section className="antofagasta-intro">
          <div className="antofagasta-intro-main">
            <span className="section-kicker">DESCUBRIR LA PUNA</span>

            <h2>Un destino donde el viaje necesita planificación</h2>

            <p>
              Antofagasta de la Sierra se encuentra en plena Puna catamarqueña,
              en un territorio marcado por volcanes, extensos salares, lagunas,
              vegas y enormes paisajes de altura.
            </p>

            <p>
              La Villa de Antofagasta funciona como uno de los principales
              puntos de base para conocer la región y organizar excursiones
              hacia lugares que se encuentran a grandes distancias.
            </p>

            <p>
              A diferencia de otros destinos de Catamarca, aquí no alcanza con
              calcular kilómetros. La altura, el clima, los caminos, el
              combustible y las enormes distancias forman parte de la
              planificación.
            </p>
          </div>

          <div className="antofagasta-quick-info">
            <div>
              <strong>Región</strong>
              <span>Puna catamarqueña</span>
            </div>

            <div>
              <strong>Altitud</strong>
              <span>Más de 3.500 m s. n. m.</span>
            </div>

            <div>
              <strong>Ideal</strong>
              <span>3 a 5 días o más</span>
            </div>

            <div>
              <strong>Experiencias</strong>
              <span>Volcanes · Salares · Lagunas · Cultura · 4x4</span>
            </div>
          </div>
        </section>

       {/* QUÉ CONOCER */}

<section className="antofagasta-places">
  <div className="section-heading">
    <span className="section-kicker">
      QUÉ CONOCER
    </span>

    <h2>Los grandes paisajes de Antofagasta de la Sierra</h2>

    <p>
      La Puna no se recorre como una ciudad. Sus atractivos están
      distribuidos en un territorio enorme y cada jornada puede
      convertirse en una expedición diferente.
    </p>
  </div>

  <div className="antofagasta-place-grid">

    {/* VILLA DE ANTOFAGASTA */}

    <article className="antofagasta-place-card">
      <img
        src={villaAntofagasta}
        alt="Villa de Antofagasta de la Sierra"
      />

      <span>BASE DEL VIAJE</span>

      <h3>Villa de Antofagasta de la Sierra</h3>

      <p>
        La cabecera departamental es el punto de referencia para
        alojarse, descansar, abastecerse y organizar numerosos
        recorridos por la Puna.
      </p>

      <p>
        Su entorno ya permite comenzar a descubrir volcanes, vegas,
        lagunas y el paisaje característico de la región.
      </p>
    </article>


    {/* VOLCANES ANTOFAGASTA Y ALUMBRERA */}

    <article className="antofagasta-place-card">
      <img
        src={volcanes}
        alt="Volcanes Antofagasta y Alumbrera"
      />

      <span>CERCA DE LA VILLA</span>

      <h3>Volcanes Antofagasta y Alumbrera</h3>

      <p>
        Muy cerca de la localidad aparecen estos conos volcánicos,
        protagonistas del paisaje que rodea la Villa.
      </p>

      <p>
        Son una primera aproximación al enorme pasado volcánico que
        modeló esta parte de Catamarca.
      </p>
    </article>


    {/* CAMPO DE LAS TOBAS */}

    <article className="antofagasta-place-card">
      <img
        src={tobas}
        alt="Campo de las Tobas en Antofagasta de la Sierra"
      />

      <span>PATRIMONIO</span>

      <h3>Campo de las Tobas</h3>

      <p>
        Es uno de los sitios arqueológicos más importantes del entorno
        de Antofagasta y conserva centenares de representaciones
        grabadas sobre la roca.
      </p>

      <p>
        El lugar ayuda a comprender que la Puna no es solamente
        naturaleza: también posee una historia humana de miles de años.
      </p>
    </article>


    {/* EL PEÑÓN */}

    <article className="antofagasta-place-card">
      <img
        src={elPenon}
        alt="El Peñón en la Puna de Catamarca"
      />

      <span>PUEBLO DE LA PUNA</span>

      <h3>El Peñón</h3>

      <p>
        El Peñón es una pequeña localidad ubicada al sur de la Villa y
        uno de los puntos estratégicos para realizar excursiones hacia
        Campo de Piedra Pómez, Carachi Pampa y otros paisajes.
      </p>

      <p>
        También puede utilizarse como base para quienes quieren
        dedicar más tiempo a esta zona de la Puna.
      </p>
    </article>


    {/* CAMPO DE PIEDRA PÓMEZ */}

    <article className="antofagasta-place-card antofagasta-place-featured">
      <img
        src={campoPomez}
        alt="Campo de Piedra Pómez en Catamarca"
      />

      <span>ÁREA NATURAL PROTEGIDA</span>

      <h3>Campo de Piedra Pómez</h3>

      <p>
        Un enorme paisaje de roca volcánica blanca modelada durante
        miles de años por la erosión y el viento.
      </p>

      <p>
        El área se encuentra a más de 3.000 metros de altura y el
        recorrido se realiza en vehículos 4x4 con guía habilitado.
      </p>

      <p>
        Desde El Peñón existe un acceso de aproximadamente 35 km y
        desde la Villa de Antofagasta uno de aproximadamente 63 km.
      </p>

      <a
  href="/guia/campo-de-piedra-pomez"
  target="_blank"
  rel="noopener noreferrer"
  className="antofagasta-place-link"
>
  Ver guía completa →
</a>
    </article>


    {/* CARACHI PAMPA */}

    <article className="antofagasta-place-card">
      <img
        src={carachiPampa}
        alt="Carachi Pampa en Antofagasta de la Sierra"
      />

      <span>PAISAJE VOLCÁNICO</span>

      <h3>Carachi Pampa</h3>

      <p>
        El volcán Carachi Pampa aparece junto a una laguna en un
        paisaje donde se combinan lava oscura, arena, salares y
        ambientes frecuentados por flamencos.
      </p>

      <p>
        Es uno de los grandes escenarios que pueden integrarse a los
        recorridos de la zona de Piedra Pómez.
      </p>
    </article>


    {/* SALAR DE ANTOFALLA */}

    <article className="antofagasta-place-card">
      <img
        src={salarAntofalla}
        alt="Salar de Antofalla en la Puna catamarqueña"
      />

      <span>GRANDES EXPEDICIONES</span>

      <h3>Salar de Antofalla</h3>

      <p>
        Antofalla combina un enorme salar, volcanes y una pequeña
        comunidad puneña en uno de los sectores más remotos del
        departamento.
      </p>

      <p>
        Es una excursión de larga duración que debe organizarse
        teniendo en cuenta distancias, altura y condiciones del
        camino.
      </p>
    </article>


    {/* VOLCÁN GALÁN */}

    <article className="antofagasta-place-card">
      <img
        src={volcanGalan}
        alt="Volcán y Caldera del Galán en Catamarca"
      />

      <span>ALTA PUNA</span>

      <h3>Volcán y Caldera del Galán</h3>

      <p>
        Es otro de los grandes recorridos de la región y conduce hacia
        un territorio de volcanes, lagunas y paisajes de extrema
        altura.
      </p>

      <p>
        No debe plantearse como una salida convencional: requiere una
        jornada extensa, planificación y prestadores preparados para
        circular por la Puna.
      </p>
    </article>

  </div>
</section>

        {/* ALTURA */}

        <section className="antofagasta-altitude">
          <div>
            <span className="section-kicker">ALTURA</span>

            <h2>La altura forma parte del viaje</h2>
          </div>

          <div className="antofagasta-altitude-content">
            <p>
              Antofagasta de la Sierra se encuentra a más de 3.500 metros
              sobre el nivel del mar y algunos recorridos alcanzan alturas
              todavía mayores.
            </p>

            <p>
              Por eso conviene organizar las primeras horas con tranquilidad,
              hidratarse, evitar esfuerzos innecesarios y permitir que el
              cuerpo se adapte progresivamente.
            </p>

            <p>
              Las personas con antecedentes médicos deberían consultar con un
              profesional antes de realizar actividades exigentes en altura.
            </p>

            <strong>
              En la Puna, sentirse bien al comenzar el día no significa que
              debamos subestimar la altura.
            </strong>
          </div>
        </section>

        {/* CÓMO LLEGAR */}

        <section className="antofagasta-transport">
          <div className="section-heading">
            <span className="section-kicker">CÓMO LLEGAR</span>

            <h2>Cómo viajar a Antofagasta de la Sierra</h2>

            <p>
              Llegar a la Puna es parte de la experiencia. Conviene organizar
              tanto el viaje de ida como la movilidad una vez en destino.
            </p>
          </div>

          <div className="antofagasta-transport-grid">

            <article>
              <span>01</span>
              <h3>En auto</h3>

              <p>
                Es posible llegar por carretera, pero las distancias son
                grandes y es fundamental verificar previamente estado de
                caminos, combustible y condiciones meteorológicas.
              </p>

              <p>
                Llegar con un vehículo convencional no significa que todos los
                atractivos puedan visitarse con ese mismo vehículo.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Transporte público</h3>

              <p>
                La disponibilidad y frecuencia de servicios hacia la Puna
                puede cambiar según la época y el prestador.
              </p>

              <p>
                Antes de viajar conviene confirmar horarios, días de servicio,
                punto de salida y disponibilidad de regreso.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Transfer</h3>

              <p>
                Un traslado privado permite coordinar origen, horario,
                equipaje y paradas sin depender de las frecuencias del
                transporte público.
              </p>

              <p>
                Para un trayecto tan largo es importante planificar también
                descansos y abastecimiento.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Excursiones 4x4</h3>

              <p>
                Una vez en Antofagasta o El Peñón, muchos de los grandes
                atractivos de la Puna se visitan mediante excursiones en 4x4
                con guías habilitados.
              </p>

              <p>
                Piedra Pómez es uno de los ejemplos más importantes.
              </p>
            </article>

          </div>
        </section>

        {/* SIN AUTO */}

        <section className="antofagasta-no-car">
          <div>
            <span className="section-kicker">VIAJAR SIN AUTO</span>

            <h2>¿Se puede conocer Antofagasta sin vehículo propio?</h2>
          </div>

          <div className="antofagasta-no-car-content">
            <p>
              Sí, pero requiere organizar el viaje con anticipación. Llegar a
              la Villa es solamente una parte del recorrido.
            </p>

            <p>
              Los principales atractivos están dispersos a decenas o incluso
              cientos de kilómetros y muchos no cuentan con transporte público
              turístico regular.
            </p>

            <p>
              Una estrategia posible es llegar hasta Antofagasta o El Peñón,
              alojarse allí y contratar con anticipación las excursiones
              necesarias.
            </p>

            <strong>
              En este destino es más importante planificar cómo recorrer la
              Puna que simplemente cómo llegar a la Villa.
            </strong>
          </div>
        </section>

        {/* SERVICIOS */}

        <section className="antofagasta-services">
          <div className="section-heading">
            <span className="section-kicker">SERVICIOS Y ABASTECIMIENTO</span>

            <h2>Qué conviene resolver antes de salir</h2>

            <p>
              En un territorio tan extenso, depender de encontrar servicios
              durante el recorrido puede convertirse en un problema.
            </p>
          </div>

          <div className="antofagasta-services-grid">

            <article>
              <h3>Combustible</h3>
              <p>
                Salí a los recorridos largos con combustible suficiente y
                consultá dónde podrás volver a abastecerte.
              </p>
            </article>

            <article>
              <h3>Internet y teléfono</h3>
              <p>
                La conectividad puede ser limitada o desaparecer durante
                algunos recorridos alejados de las localidades.
              </p>
            </article>

            <article>
              <h3>Alojamiento</h3>
              <p>
                La oferta es menor que en destinos urbanos. En temporadas de
                mayor movimiento conviene reservar antes de llegar.
              </p>
            </article>

            <article>
              <h3>Agua y alimentos</h3>
              <p>
                Para las excursiones largas llevá agua y provisiones
                suficientes desde el punto de partida.
              </p>
            </article>

          </div>
        </section>

        {/* CUÁNTOS DÍAS */}

        <section className="antofagasta-days">
          <div className="section-heading">
            <span className="section-kicker">ORGANIZAR LA ESTADÍA</span>

            <h2>¿Cuántos días dedicarle a Antofagasta?</h2>
          </div>

          <div className="antofagasta-days-grid">

            <article>
              <span>2 DÍAS</span>
              <h3>Una visita muy ajustada</h3>

              <p>
                Permite conocer la Villa y realizar un recorrido principal,
                pero deja poco margen ante distancias, altura o cambios de
                clima.
              </p>
            </article>

            <article>
              <span>3 DÍAS</span>
              <h3>Una primera experiencia</h3>

              <p>
                Permite combinar la zona de la Villa con una gran excursión,
                como Campo de Piedra Pómez, organizando mejor los tiempos.
              </p>
            </article>

            <article className="antofagasta-days-featured">
              <span>4 O 5 DÍAS</span>
              <h3>Una experiencia mucho más completa</h3>

              <p>
                Da margen para combinar diferentes sectores de la Puna,
                descansar entre jornadas largas y adaptarse mejor a los
                imprevistos propios de la región.
              </p>
            </article>

          </div>
        </section>

        {/* QUÉ LLEVAR */}

        <section className="antofagasta-tips">
          <div className="section-heading">
            <span className="section-kicker">ANTES DE VIAJAR</span>

            <h2>Qué llevar a la Puna</h2>
          </div>

          <div className="antofagasta-tips-grid">

            <article>
              <strong>01</strong>
              <p>
                Ropa de abrigo por capas incluso cuando viajes en meses
                cálidos.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <p>
                Agua suficiente para los trayectos largos y buena hidratación
                durante toda la estadía.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <p>
                Protector solar, gorra, anteojos de sol y protección para los
                labios y la piel.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <p>
                Botiquín personal y cualquier medicación que necesites durante
                el viaje.
              </p>
            </article>

            <article>
              <strong>05</strong>
              <p>
                Mapas descargados y datos importantes guardados para poder
                consultarlos sin conexión.
              </p>
            </article>

            <article>
              <strong>06</strong>
              <p>
                Tiempo extra: en la Puna no conviene organizar jornadas con
                horarios demasiado ajustados.
              </p>
            </article>

          </div>
        </section>

        {/* FAQ */}

        <section className="antofagasta-faq">
          <div className="section-heading">
            <span className="section-kicker">PREGUNTAS FRECUENTES</span>

            <h2>Lo que conviene saber antes de ir</h2>
          </div>

          <div className="antofagasta-faq-grid">

            <article>
              <h3>¿Necesito 4x4 para llegar a Antofagasta?</h3>
              <p>
                No debe confundirse llegar a la Villa con recorrer todos los
                atractivos. Muchos circuitos turísticos sí requieren 4x4 y
                guía habilitado.
              </p>
            </article>

            <article>
              <h3>¿Puedo visitar Piedra Pómez por mi cuenta?</h3>
              <p>
                El recorrido debe realizarse por los caminos habilitados, en
                4x4 y con guía habilitado. Es un área natural protegida.
              </p>
            </article>

            <article>
              <h3>¿Conviene alojarse en Antofagasta o El Peñón?</h3>
              <p>
                Depende del recorrido. La Villa funciona bien como base para
                varios circuitos, mientras El Peñón resulta estratégico para
                Piedra Pómez y los paisajes del sector sur.
              </p>
            </article>

            <article>
              <h3>¿Hay señal de celular durante las excursiones?</h3>
              <p>
                No debe darse por garantizada. En zonas alejadas la
                conectividad puede ser limitada o inexistente.
              </p>
            </article>

            <article>
              <h3>¿Es recomendable ir solamente un día?</h3>
              <p>
                Desde destinos lejanos no suele ser una buena estrategia. Las
                distancias y la altura justifican dedicar varias jornadas a la
                región.
              </p>
            </article>

            <article>
              <h3>¿Se puede viajar durante todo el año?</h3>
              <p>
                Sí puede haber viajes en distintas épocas, pero las
                condiciones cambian considerablemente. Antes de salir hay que
                verificar clima, caminos y funcionamiento de los servicios.
              </p>
            </article>

          </div>
        </section>

        {/* PRÓXIMA GUÍA */}

        <section className="antofagasta-related">
          <div>
            <span>GUÍA RELACIONADA</span>

            <h2>Campo de Piedra Pómez</h2>

            <p>
              Estamos preparando una guía específica con accesos, El Peñón,
              Carachi Pampa, Dunas Blancas, 4x4, recomendaciones y todo lo
              necesario para organizar la visita.
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="antofagasta-final-cta">
          <div>
            <span>MT TOURS & TRANSFERS</span>

            <h2>¿Estás organizando un viaje a la Puna?</h2>

            <p>
              Podemos ayudarte a organizar los traslados y conectar tu viaje
              por Catamarca.
            </p>
          </div>

          <a
            href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20viaje%20a%20Antofagasta%20de%20la%20Sierra."
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp →
          </a>
        </section>

      </main>
    </div>
  );
}

export default GuiaAntofagasta;