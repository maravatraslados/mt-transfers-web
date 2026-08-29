function TrasladosCatamarca() {

  document.title =
    "Traslados en Catamarca para Empresas y Aeropuerto | MT Transfers";

  const description =
    "Traslados en Catamarca para empresas, ejecutivos y pasajeros. Transfer al Aeropuerto Felipe Varela, traslado de personal, chofer con auto y viajes a La Rioja y el NOA.";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description;

  return (
    <main className="traslados-page">

      {/* HEADER */}
      <header className="traslados-header">
        <a href="/" className="traslados-logo">
          MT TOURS & TRANSFERS
        </a>

        <a href="/" className="traslados-home">
          ← Volver al inicio
        </a>

        <a
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20servicio%20de%20traslado%20en%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
          className="traslados-header-whatsapp"
        >
          Solicitar traslado
        </a>
      </header>


      {/* HERO */}
      <section className="traslados-hero">
        <div className="traslados-hero-overlay"></div>

        <div className="traslados-hero-content">
          <span className="traslados-kicker">
            TRASLADOS EN CATAMARCA
          </span>

          <h1>
            Traslados ejecutivos, corporativos y aeropuerto en Catamarca
          </h1>

          <p>
            Soluciones de movilidad para empresas, profesionales, agencias
            y pasajeros que necesitan trasladarse de manera organizada,
            puntual y segura en Catamarca, La Rioja y el NOA.
          </p>

          <div className="traslados-hero-actions">
            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20solicitar%20un%20traslado%20en%20Catamarca."
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar presupuesto
            </a>

            <a href="#empresas">
              Servicios para empresas
            </a>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="traslados-intro">
        <div className="traslados-intro-main">
          <span>SERVICIO PROFESIONAL DE TRASLADOS</span>

          <h2>
            Una solución de movilidad para cada necesidad
          </h2>

          <p>
            Coordinamos traslados desde y hacia San Fernando del Valle de
            Catamarca, el Aeropuerto Coronel Felipe Varela, hoteles,
            empresas, organismos, localidades del interior y destinos
            interprovinciales.
          </p>

          <p>
            Cada servicio se organiza previamente teniendo en cuenta
            horarios, punto de origen, destino y necesidades particulares
            del pasajero o de la empresa contratante.
          </p>
        </div>

        <div className="traslados-intro-data">
          <div>
            <strong>24/7</strong>
            <span>Coordinación de servicios</span>
          </div>

          <div>
            <strong>NOA</strong>
            <span>Cobertura regional</span>
          </div>

          <div>
            <strong>EMPRESAS</strong>
            <span>Servicios programados</span>
          </div>
        </div>
      </section>


     {/* EMPRESAS */}
<section id="empresas" className="traslados-business">

  <div className="traslados-section-heading">
    <span>SOLUCIONES PARA EMPRESAS</span>

    <h2>
      Traslados corporativos y de personal en Catamarca
    </h2>

    <p>
      Ayudamos a empresas, organismos, agencias y profesionales a resolver
      la movilidad de su personal y visitantes mediante servicios previamente
      coordinados, con atención personalizada y cobertura en Catamarca,
      La Rioja y otros destinos del NOA.
    </p>
  </div>

  <div className="traslados-business-grid">

    <article>
      <span>01</span>
      <h3>Traslado de personal</h3>
      <p>
        Coordinamos servicios para empleados, técnicos y equipos de trabajo,
        tanto para necesidades puntuales como para traslados programados.
        Los recorridos pueden organizarse de acuerdo con horarios, puntos
        de encuentro y requerimientos de cada operación.
      </p>
    </article>

    <article>
      <span>02</span>
      <h3>Ejecutivos y profesionales</h3>
      <p>
        Traslados para directivos, profesionales y representantes que
        necesitan movilizarse entre aeropuerto, hoteles, empresas,
        reuniones, organismos y distintos puntos de la provincia.
      </p>
    </article>

    <article>
      <span>03</span>
      <h3>Recepción en aeropuerto</h3>
      <p>
        Coordinamos la llegada y salida de personal, clientes, proveedores
        e invitados desde el Aeropuerto Coronel Felipe Varela, incluyendo
        seguimiento del vuelo para organizar mejor la recepción.
      </p>
    </article>

    <article>
      <span>04</span>
      <h3>Servicios recurrentes</h3>
      <p>
        Para empresas que necesitan movilidad de manera habitual podemos
        organizar servicios diarios, semanales, mensuales o según una
        planificación previamente acordada.
      </p>
    </article>

    <article>
      <span>05</span>
      <h3>Facturación y cuenta corriente</h3>
      <p>
        Contamos con modalidades administrativas orientadas a clientes
        corporativos, facilitando la contratación, facturación y seguimiento
        de los servicios realizados.
      </p>
    </article>

    <article>
      <span>06</span>
      <h3>Viajes al interior y otras provincias</h3>
      <p>
        Organizamos traslados desde San Fernando del Valle de Catamarca
        hacia localidades del interior, La Rioja y otros destinos regionales,
        de acuerdo con las necesidades de cada empresa.
      </p>
    </article>

  </div>

  <div className="traslados-business-bottom">

    <div>
      <span>¿TU EMPRESA NECESITA TRASLADOS FRECUENTES?</span>

      <h3>
        Podemos organizar una modalidad de trabajo adaptada a tu operación
      </h3>

      <p>
        Contanos qué tipo de traslados realizan, frecuencia, destinos y
        cantidad aproximada de pasajeros. Podemos analizar la necesidad
        y preparar una propuesta para la empresa.
      </p>
    </div>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20servicios%20de%20traslados%20para%20una%20empresa."
      target="_blank"
      rel="noopener noreferrer"
    >
      Solicitar propuesta para empresa →
    </a>

  </div>

</section>

{/* EXPERIENCIA Y CONFIANZA */}
<section className="traslados-trust">

  <div className="traslados-trust-heading">
    <span>EXPERIENCIA QUE RESPALDA CADA TRASLADO</span>

    <h2>
      Más de 15 años coordinando traslados y logística de pasajeros
    </h2>

    <p>
      Nuestra experiencia incluye servicios para empresas, organismos,
      profesionales y pasajeros que necesitan algo más que un vehículo:
      necesitan coordinación, puntualidad y una respuesta confiable.
    </p>
  </div>

  <div className="traslados-trust-grid">

    <article>
      <strong>+15</strong>
      <span>AÑOS DE EXPERIENCIA</span>
      <p>
        Experiencia desarrollada en servicios de traslados y coordinación
        logística de pasajeros.
      </p>
    </article>

    <article>
      <strong>24/7</strong>
      <span>COORDINACIÓN</span>
      <p>
        Capacidad para organizar servicios según vuelos, horarios de trabajo,
        reuniones y necesidades previamente programadas.
      </p>
    </article>

    <article>
      <strong>3</strong>
      <span>PERFILES DE SERVICIO</span>
      <p>
        Empresas y organizaciones, agencias de viajes y pasajeros
        particulares con diferentes necesidades de movilidad.
      </p>
    </article>

    <article>
      <strong>NOA</strong>
      <span>COBERTURA REGIONAL</span>
      <p>
        Servicios con base en Catamarca y conexiones hacia La Rioja,
        localidades del interior y otros destinos del Noroeste Argentino.
      </p>
    </article>

  </div>

  <div className="traslados-trust-experience">

    <div>
      <span>EXPERIENCIA CORPORATIVA</span>

      <h3>
        Sabemos que detrás de un traslado empresarial hay una operación
        que tiene que funcionar
      </h3>
    </div>

    <div>
      <p>
        Un vuelo que llega, un profesional que debe asistir a una reunión,
        personal que necesita estar a horario o un visitante que debe ser
        recibido forman parte de una logística mayor.
      </p>

      <p>
        Por eso trabajamos cada servicio desde la coordinación previa,
        manteniendo comunicación y adaptándonos a las características de
        cada operación.
      </p>
    </div>

  </div>

</section>


      {/* AEROPUERTO */}
      <section className="traslados-airport">
        <div className="traslados-airport-content">
          <span>TRANSFER AEROPUERTO CATAMARCA</span>

          <h2>
            Aeropuerto Coronel Felipe Varela ↔ Hotel, empresa o domicilio
          </h2>

          <p>
            Coordinamos traslados privados desde y hacia el Aeropuerto
            Coronel Felipe Varela para pasajeros particulares, turistas,
            profesionales y empresas.
          </p>

          <p>
            Podemos organizar el servicio según el horario del vuelo y
            realizar seguimiento de la llegada para mejorar la coordinación
            de la recepción.
          </p>

          <ul>
            <li>Recepción en aeropuerto</li>
            <li>Traslado puerta a puerta</li>
            <li>Seguimiento de vuelos</li>
            <li>Traslado hacia hoteles y empresas</li>
            <li>Servicios de llegada y salida</li>
          </ul>

          <a
            href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20transfer%20desde%20el%20Aeropuerto%20de%20Catamarca."
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar transfer aeropuerto →
          </a>
        </div>
      </section>


      {/* SERVICIOS */}
      <section className="traslados-services">
        <div className="traslados-section-heading">
          <span>NUESTROS SERVICIOS</span>

          <h2>
            Más que un traslado de un punto a otro
          </h2>

          <p>
            La propuesta está pensada para resolver diferentes necesidades
            de movilidad dentro y fuera de Catamarca.
          </p>
        </div>

        <div className="traslados-services-grid">

          <article>
            <h3>Traslados ejecutivos</h3>
            <p>
              Servicios para profesionales, empresarios y pasajeros que
              necesitan movilidad personalizada.
            </p>
          </article>

          <article>
            <h3>Chofer con auto</h3>
            <p>
              Vehículo con conductor para reuniones, gestiones, visitas o
              jornadas con múltiples paradas.
            </p>
          </article>

          <article>
            <h3>Aeropuerto ↔ Hotel</h3>
            <p>
              Recepción y traslado entre el aeropuerto, alojamientos,
              domicilios y empresas.
            </p>
          </article>

          <article>
            <h3>Traslados corporativos</h3>
            <p>
              Servicios coordinados para empresas, organismos, agencias y
              organizaciones.
            </p>
          </article>

          <article>
            <h3>Traslados interurbanos</h3>
            <p>
              Viajes hacia localidades del interior de Catamarca según
              disponibilidad y planificación previa.
            </p>
          </article>

          <article>
            <h3>Interprovinciales</h3>
            <p>
              Conexiones desde Catamarca hacia La Rioja y otros destinos
              regionales.
            </p>
          </article>

        </div>
      </section>


      {/* DIFERENCIALES */}
      <section className="traslados-why">
        <div className="traslados-why-title">
          <span>POR QUÉ MT TRANSFERS</span>

          <h2>
            Un servicio pensado para que la movilidad no sea un problema
          </h2>
        </div>

        <div className="traslados-why-grid">

          <article>
            <strong>01</strong>
            <h3>Puntualidad</h3>
            <p>
              Coordinación previa de cada servicio para reducir esperas y
              cumplir los horarios previstos.
            </p>
          </article>

          <article>
            <strong>02</strong>
            <h3>Atención personalizada</h3>
            <p>
              Cada traslado se organiza según las características del viaje
              y las necesidades del cliente.
            </p>
          </article>

          <article>
            <strong>03</strong>
            <h3>Coordinación permanente</h3>
            <p>
              Comunicación antes y durante el servicio para facilitar la
              logística del pasajero o de la empresa.
            </p>
          </article>

          <article>
            <strong>04</strong>
            <h3>Cobertura regional</h3>
            <p>
              Servicios en Catamarca, La Rioja y distintos puntos del
              Noroeste Argentino.
            </p>
          </article>

        </div>
      </section>


      {/* CÓMO FUNCIONA */}
      <section className="traslados-process">
        <div className="traslados-section-heading">
          <span>CÓMO CONTRATAR</span>

          <h2>
            Coordinamos tu traslado en cuatro pasos
          </h2>
        </div>

        <div className="traslados-process-grid">

          <article>
            <span>01</span>
            <h3>Nos enviás los datos</h3>
            <p>
              Fecha, horario, origen, destino y cantidad de pasajeros.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Organizamos el servicio</h3>
            <p>
              Revisamos disponibilidad y características del traslado.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Confirmamos</h3>
            <p>
              Recibís la información necesaria antes de la realización del
              servicio.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Realizamos el traslado</h3>
            <p>
              El conductor se presenta en el punto coordinado para iniciar
              el recorrido.
            </p>
          </article>

        </div>
      </section>


      {/* COBERTURA */}
      <section className="traslados-coverage">
        <div>
          <span>COBERTURA</span>

          <h2>
            Catamarca, La Rioja y conexiones regionales
          </h2>

          <p>
            San Fernando del Valle de Catamarca funciona como nuestro
            principal punto operativo para coordinar servicios hacia
            distintos destinos provinciales y regionales.
          </p>
        </div>

        <div className="traslados-coverage-list">
          <span>San Fernando del Valle de Catamarca</span>
          <span>Aeropuerto Coronel Felipe Varela</span>
          <span>Valle Central</span>
          <span>Interior de Catamarca</span>
          <span>La Rioja</span>
          <span>NOA</span>
        </div>
      </section>


      {/* EMPRESA CTA */}
      <section className="traslados-company-cta">
        <div>
          <span>EMPRESAS Y ORGANIZACIONES</span>

          <h2>
            ¿Necesitás una solución habitual de traslados?
          </h2>

          <p>
            Si tu empresa requiere servicios frecuentes, podemos analizar
            recorridos, horarios y modalidad de trabajo para organizar una
            propuesta acorde a la operación.
          </p>
        </div>

        <a
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20servicios%20de%20traslados%20para%20una%20empresa."
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar propuesta corporativa →
        </a>
      </section>


      {/* FAQ */}
      <section className="traslados-faq">
        <div className="traslados-section-heading">
          <span>PREGUNTAS FRECUENTES</span>

          <h2>
            Preguntas sobre nuestros traslados en Catamarca
          </h2>
        </div>

        <div className="traslados-faq-grid">

          <article>
            <h3>¿Realizan transfer desde el Aeropuerto de Catamarca?</h3>
            <p>
              Sí. Coordinamos traslados desde y hacia el Aeropuerto Coronel
              Felipe Varela hacia hoteles, domicilios y empresas.
            </p>
          </article>

          <article>
            <h3>¿Trabajan con empresas?</h3>
            <p>
              Sí. Podemos organizar servicios corporativos, traslado de
              personal, ejecutivos, visitantes y viajes programados.
            </p>
          </article>

          <article>
            <h3>¿Realizan viajes al interior de Catamarca?</h3>
            <p>
              Sí. Los servicios se coordinan previamente de acuerdo con el
              destino, horario y disponibilidad.
            </p>
          </article>

          <article>
            <h3>¿Realizan traslados a La Rioja?</h3>
            <p>
              Sí. También coordinamos servicios interprovinciales y
              conexiones regionales.
            </p>
          </article>

          <article>
            <h3>¿Puedo contratar un vehículo con chofer por varias horas?</h3>
            <p>
              Sí. Podemos organizar servicios para jornadas laborales,
              reuniones, visitas o recorridos con diferentes paradas.
            </p>
          </article>

          <article>
            <h3>¿Cómo solicito presupuesto?</h3>
            <p>
              Enviando fecha, horario, origen, destino, cantidad de
              pasajeros y cualquier necesidad particular del servicio.
            </p>
          </article>

        </div>
      </section>


      {/* CTA FINAL */}
      <section className="traslados-final">
        <span>MT TOURS & TRANSFERS</span>

        <h2>
          Contanos qué traslado necesitás
        </h2>

        <p>
          Enviá origen, destino, fecha y horario y coordinamos tu servicio.
        </p>

        <a
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20solicitar%20presupuesto%20para%20un%20traslado."
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp →
        </a>
      </section>

    </main>
  );
}

export default TrasladosCatamarca;