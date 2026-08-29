import fiambala from "../assets/fiambala.jpg";
import termasFiambala from "../assets/termas-fiambala.jpg";
import rutaAdobe from "../assets/ruta-adobe.jpg";
import sanPedroFiambala from "../assets/san-pedro-fiambala.jpeg";
import dunas from "../assets/dunas-taton2.jpg";

function GuiaFiambala() {
  return (
    <div className="fiambala-page">

      {/* HEADER */}

      <header className="fiambala-header">
        <a href="/" className="fiambala-logo">
          MT TOURS & TRANSFERS
        </a>

        <a
          href="/guia"
          target="_blank"
          rel="noopener noreferrer"
          className="fiambala-back"
        >
          ← Volver a la guía
        </a>
      </header>


      <main>

        {/* HERO */}

        <section
          className="fiambala-hero"
          style={{ backgroundImage: `url(${fiambala})` }}
        >
          <div className="fiambala-hero-overlay"></div>

          <div className="fiambala-hero-content">
            <span>GUÍA DE VIAJE · OESTE CATAMARQUEÑO</span>

            <h1>Fiambalá</h1>

            <p>
              Termas entre montañas, dunas gigantes, pueblos históricos,
              arquitectura de adobe y una de las puertas de entrada a la
              Cordillera de los Andes.
            </p>
          </div>
        </section>


        {/* INTRODUCCIÓN */}

        <section className="fiambala-intro">
          <div className="fiambala-intro-main">

            <span className="section-kicker">
              DESCUBRIR FIAMBALÁ
            </span>

            <h2>
              Mucho más que sus famosas termas
            </h2>

            <p>
              Fiambalá se encuentra en el oeste de Catamarca, dentro del
              departamento Tinogasta, y es uno de los principales destinos
              turísticos de la provincia.
            </p>

            <p>
              Su ubicación permite combinar experiencias completamente
              diferentes en pocos días: aguas termales, arquitectura histórica,
              dunas, viñedos, paisajes desérticos y recorridos de alta montaña
              por la Cordillera de los Andes.
            </p>

            <p>
              También es una excelente base para recorrer la Ruta del Adobe,
              conocer pequeños pueblos del oeste y comenzar viajes hacia la
              Ruta de los Seismiles y el Paso de San Francisco.
            </p>

          </div>


          <div className="fiambala-quick-info">

            <div>
              <strong>Región</strong>
              <span>Oeste de Catamarca</span>
            </div>

            <div>
              <strong>Departamento</strong>
              <span>Tinogasta</span>
            </div>

            <div>
              <strong>Ideal</strong>
              <span>2 a 4 días</span>
            </div>

            <div>
              <strong>Experiencias</strong>
              <span>Naturaleza · Cultura · Termas · Montaña</span>
            </div>

          </div>
        </section>


        {/* QUÉ HACER */}

        <section className="fiambala-places">

          <div className="section-heading">
            <span className="section-kicker">
              QUÉ HACER EN FIAMBALÁ
            </span>

            <h2>
              Los lugares que ayudan a entender este rincón de Catamarca
            </h2>

            <p>
              Fiambalá permite combinar descanso, historia, naturaleza y
              aventura. Estos son algunos de los lugares más importantes para
              considerar al organizar el viaje.
            </p>
          </div>


          <div className="fiambala-place-grid">

            {/* TERMAS */}

            <article className="fiambala-place-card">

              <img
                src={termasFiambala}
                alt="Termas de Fiambalá en Catamarca"
              />

              <div>
                <span>17 KM DE FIAMBALÁ</span>

                <h3>Termas de Fiambalá</h3>

                <p>
                  En una quebrada rodeada por montañas se encuentran las
                  famosas Termas de Fiambalá.
                </p>

                <p>
                  El complejo posee piletas de piedra alimentadas por aguas
                  termales naturales con diferentes temperaturas.
                </p>

                <p>
                  Es uno de los lugares más elegidos para descansar después
                  de recorrer el oeste catamarqueño.
                </p>

                <strong>
                  Conviene verificar turnos y condiciones de ingreso antes de
                  la visita.
                </strong>
              </div>

            </article>


            {/* RUTA DEL ADOBE */}

            <article className="fiambala-place-card">

              <img
                src={rutaAdobe}
                alt="Ruta del Adobe entre Tinogasta y Fiambalá"
              />

              <div>
                <span>RECORRIDO CULTURAL</span>

                <h3>Ruta del Adobe</h3>

                <p>
                  Entre Tinogasta y Fiambalá se extiende un corredor histórico
                  de aproximadamente 55 kilómetros por la Ruta Nacional 60.
                </p>

                <p>
                  El recorrido conserva antiguas iglesias, casonas, oratorios
                  y construcciones realizadas con adobe.
                </p>

                <p>
                  Algunas de estas edificaciones tienen varios siglos de
                  historia y permiten conocer cómo se desarrolló la vida en
                  esta región del oeste catamarqueño.
                </p>

              </div>

            </article>


            {/* SAN PEDRO */}

            <article className="fiambala-place-card">

              <img
                src={sanPedroFiambala}
                alt="Iglesia de San Pedro cerca de Fiambalá"
              />

              <div>
                <span>HISTORIA Y PATRIMONIO</span>

                <h3>San Pedro y los pueblos del Adobe</h3>

                <p>
                  Cerca de Fiambalá aparecen pequeños pueblos y construcciones
                  que forman parte de la historia del departamento Tinogasta.
                </p>

                <p>
                  La Iglesia de San Pedro es uno de los grandes testimonios
                  arquitectónicos de la región y forma parte del patrimonio
                  histórico del oeste de Catamarca.
                </p>

                <p>
                  Recorrer estos lugares permite comprender que la Ruta del
                  Adobe no es solamente un paseo paisajístico: también cuenta
                  la historia de las comunidades que habitaron esta zona.
                </p>

              </div>

            </article>


            {/* DUNAS */}

            <article className="fiambala-place-card">
  <img
    src={dunas}
    alt="Dunas de Saujil y Tatón cerca de Fiambalá"
  />

  <div>
    <span>PAISAJES DEL DESIERTO</span>

    <h3>Dunas de Saujil y Tatón</h3>

    <p>
      Alrededor de Fiambalá aparecen enormes extensiones de arena que
      contrastan con las montañas de la Cordillera.
    </p>

    <p>
      Saujil y Tatón son dos de los sectores más conocidos para
      descubrir estos paisajes y realizar actividades relacionadas
      con las dunas.
    </p>

    <p>
      Las distancias y condiciones de los caminos hacen recomendable
      organizar previamente el recorrido.
    </p>
  </div>
</article>


            {/* SEISMILES */}

            <article className="fiambala-place-card fiambala-place-featured">

              <div>
                <span>ALTA MONTAÑA</span>

                <h3>Ruta de los Seismiles</h3>

                <p>
                  Desde Fiambalá la Ruta Nacional 60 avanza hacia uno de los
                  sectores más espectaculares de la Cordillera de los Andes.
                </p>

                <p>
                  En el recorrido aparecen volcanes y cumbres que superan los
                  6.000 metros de altura, entre ellas Ojos del Salado, Pissis,
                  Incahuasi y San Francisco.
                </p>

                <p>
                  Es un ambiente de alta montaña con grandes distancias,
                  temperaturas cambiantes y poca infraestructura.
                </p>

                <strong>
                  Para recorridos fuera de la RN 60 y accesos como Balcón del
                  Pissis se recomienda guía habilitado y vehículo adecuado.
                </strong>
              </div>

            </article>

          </div>
        </section>


        {/* CÓMO LLEGAR */}

        <section className="fiambala-transport">

          <div className="section-heading">
            <span className="section-kicker">
              CÓMO LLEGAR
            </span>

            <h2>
              Cómo viajar a Fiambalá
            </h2>

            <p>
              La distancia no es el único dato importante. También conviene
              pensar cómo vas a moverte una vez que llegues.
            </p>
          </div>


          <div className="fiambala-transport-grid">

            <article>
              <span>01</span>

              <h3>En auto</h3>

              <p>
                La Ruta Nacional 60 es el principal acceso a Fiambalá y conecta
                la localidad con Tinogasta y posteriormente con la Cordillera.
              </p>

              <p>
                Viajar en vehículo propio permite mayor libertad para recorrer
                pueblos, termas y otros atractivos de la región.
              </p>
            </article>


            <article>
              <span>02</span>

              <h3>En ómnibus</h3>

              <p>
                Existen servicios de transporte de pasajeros que permiten
                llegar al oeste de Catamarca y a Fiambalá.
              </p>

              <p>
                Las empresas, frecuencias, horarios y tarifas pueden cambiar,
                por lo que conviene verificar el servicio disponible antes de
                organizar el viaje.
              </p>
            </article>


            <article>
              <span>03</span>

              <h3>En transfer</h3>

              <p>
                Un transfer permite coordinar el traslado desde Catamarca,
                aeropuerto, terminal u otras ciudades directamente hacia
                Fiambalá.
              </p>

              <p>
                Puede ser especialmente útil cuando el horario de llegada no
                coincide con el transporte público o cuando se viaja con
                equipaje y varias personas.
              </p>
            </article>


            <article>
              <span>04</span>

              <h3>Con excursiones</h3>

              <p>
                Algunos viajeros llegan a Fiambalá en transporte público y
                luego contratan excursiones para visitar los atractivos que se
                encuentran fuera de la ciudad.
              </p>

              <p>
                Esta opción resulta especialmente práctica para recorridos de
                alta montaña o lugares donde se requiere vehículo adecuado.
              </p>
            </article>

          </div>
        </section>


        {/* DISTANCIAS */}

        <section className="fiambala-distances">

          <div className="fiambala-distances-intro">

            <span className="section-kicker">
              DISTANCIAS
            </span>

            <h2>
              Distancias aproximadas desde Fiambalá
            </h2>

            <p>
              Catamarca tiene grandes distancias. Conocerlas ayuda a evitar
              recorridos demasiado exigentes y permite calcular mejor cada
              jornada.
            </p>

          </div>


          <div className="fiambala-distance-table">

            <div className="fiambala-distance-row">
              <strong>Termas de Fiambalá</strong>
              <span>aprox. 17 km</span>
            </div>

            <div className="fiambala-distance-row">
              <strong>Tinogasta</strong>
              <span>aprox. 50 km</span>
            </div>

            <div className="fiambala-distance-row">
              <strong>Balcón del Pissis</strong>
              <span>aprox. 125 km</span>
            </div>

            <div className="fiambala-distance-row">
              <strong>Belén</strong>
              <span>aprox. 200 km</span>
            </div>

            <div className="fiambala-distance-row">
              <strong>Paso de San Francisco</strong>
              <span>aprox. 201 km</span>
            </div>

            <div className="fiambala-distance-row">
              <strong>La Rioja Capital</strong>
              <span>aprox. 274 km</span>
            </div>

            <div className="fiambala-distance-row">
              <strong>San Fernando del Valle de Catamarca</strong>
              <span>aprox. 323 km</span>
            </div>

          </div>


          <p className="fiambala-distance-note">
            Las distancias son orientativas y pueden variar según el camino,
            punto exacto de salida y condiciones de la ruta.
          </p>

        </section>


        {/* SIN AUTO */}

        <section className="fiambala-no-car">

          <div>
            <span className="section-kicker">
              VIAJAR SIN AUTO
            </span>

            <h2>
              ¿Se puede conocer Fiambalá sin vehículo propio?
            </h2>
          </div>


          <div className="fiambala-no-car-content">

            <p>
              Sí. Es posible llegar a Fiambalá utilizando transporte público
              y alojarse en la ciudad, pero muchos de sus principales
              atractivos no se encuentran dentro del área urbana.
            </p>

            <p>
              Las Termas están a unos 17 kilómetros, la Ruta del Adobe se
              extiende entre Fiambalá y Tinogasta y los paisajes de alta
              montaña se encuentran todavía más alejados.
            </p>

            <p>
              Por eso, quien viaje sin auto debería considerar previamente
              cómo realizará cada visita: transfer, taxi, remis, excursión o
              transporte turístico habilitado.
            </p>

            <strong>
              Llegar a Fiambalá sin auto es posible. Recorrer sus alrededores
              requiere un poco más de planificación.
            </strong>

          </div>
        </section>


        {/* MEJOR ÉPOCA */}

        <section className="fiambala-season">

          <div className="section-heading">
            <span className="section-kicker">
              CUÁNDO VIAJAR
            </span>

            <h2>
              ¿Cuál es la mejor época para conocer Fiambalá?
            </h2>
          </div>


          <div className="fiambala-season-grid">

            <article>
              <h3>Otoño</h3>

              <p>
                Las temperaturas más moderadas favorecen los recorridos al
                aire libre y permiten combinar termas, pueblos y paisajes del
                oeste.
              </p>
            </article>


            <article>
              <h3>Invierno</h3>

              <p>
                Los días pueden ser agradables, pero las noches son frías y la
                alta montaña puede presentar condiciones más exigentes.
              </p>
            </article>


            <article>
              <h3>Primavera</h3>

              <p>
                Es una época interesante para recorrer la región, aunque el
                viento y los cambios de temperatura deben tenerse en cuenta.
              </p>
            </article>


            <article>
              <h3>Verano</h3>

              <p>
                Las temperaturas pueden ser elevadas en los sectores bajos.
                Conviene planificar actividades temprano y llevar buena
                hidratación y protección solar.
              </p>
            </article>

          </div>


          <a
            href="/guia/mejor-epoca-catamarca"
            target="_blank"
            rel="noopener noreferrer"
            className="fiambala-season-link"
          >
            Ver guía completa sobre cuándo viajar a Catamarca →
          </a>

        </section>


        {/* CUÁNTOS DÍAS */}

        <section className="fiambala-days">

          <div className="section-heading">
            <span className="section-kicker">
              ORGANIZAR LA ESTADÍA
            </span>

            <h2>
              ¿Cuántos días quedarse en Fiambalá?
            </h2>
          </div>


          <div className="fiambala-days-grid">

            <article>
              <span>1 DÍA</span>

              <h3>Una visita rápida</h3>

              <p>
                Permite concentrarse en uno o dos atractivos cercanos, pero
                deja poco margen para conocer realmente la región.
              </p>
            </article>


            <article>
              <span>2 DÍAS</span>

              <h3>Una primera experiencia completa</h3>

              <p>
                Permite combinar Ruta del Adobe, pueblos históricos y Termas
                de Fiambalá sin concentrar todo en una sola jornada.
              </p>
            </article>


            <article className="fiambala-days-featured">
              <span>3 O 4 DÍAS</span>

              <h3>La opción más completa</h3>

              <p>
                Da margen para sumar dunas, recorridos cordilleranos o una
                jornada de alta montaña, además de disfrutar Fiambalá con
                menos apuro.
              </p>
            </article>

          </div>
        </section>


        {/* CONSEJOS */}

        <section className="fiambala-tips">

          <div className="section-heading">
            <span className="section-kicker">
              ANTES DE VIAJAR
            </span>

            <h2>
              Consejos para organizar mejor el recorrido
            </h2>
          </div>


          <div className="fiambala-tips-grid">

            <article>
              <strong>01</strong>
              <p>
                Cargá combustible antes de realizar recorridos largos hacia
                zonas de montaña.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <p>
                Llevá agua, protección solar, gorra y abrigo incluso cuando
                el día comienza con temperaturas agradables.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <p>
                Descargá mapas antes de salir hacia zonas donde la señal de
                celular puede ser limitada.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <p>
                Consultá el estado del camino y el pronóstico antes de realizar
                recorridos de alta montaña.
              </p>
            </article>

            <article>
              <strong>05</strong>
              <p>
                Para Balcón del Pissis y caminos secundarios utilizá
                prestadores habilitados y vehículos adecuados.
              </p>
            </article>

            <article>
              <strong>06</strong>
              <p>
                No calcules solamente kilómetros: la altura, el estado del
                camino y las paradas pueden aumentar considerablemente los
                tiempos.
              </p>
            </article>

          </div>
        </section>


        {/* FAQ */}

        <section className="fiambala-faq">

          <div className="section-heading">
            <span className="section-kicker">
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Lo que conviene saber antes de viajar
            </h2>
          </div>


          <div className="fiambala-faq-grid">

            <article>
              <h3>¿Fiambalá sirve como base para alojarse?</h3>

              <p>
                Sí. Es una base estratégica para visitar las Termas, sectores
                de la Ruta del Adobe, dunas y comenzar recorridos hacia la
                Cordillera.
              </p>
            </article>


            <article>
              <h3>¿Necesito 4x4 para llegar a Fiambalá?</h3>

              <p>
                No para llegar a la ciudad por la ruta principal. Sin embargo,
                determinados recorridos de montaña y caminos secundarios sí
                requieren vehículos adecuados.
              </p>
            </article>


            <article>
              <h3>¿Puedo llegar en transporte público?</h3>

              <p>
                Sí existen servicios de pasajeros hacia Fiambalá, aunque las
                frecuencias pueden cambiar. Conviene verificar el servicio
                vigente antes de viajar.
              </p>
            </article>


            <article>
              <h3>¿Puedo conocer las Termas sin auto?</h3>

              <p>
                Sí, pero están fuera de la ciudad. Si no tenés vehículo propio
                deberás organizar taxi, remis, transfer o excursión.
              </p>
            </article>


            <article>
              <h3>¿Se puede hacer la Ruta del Adobe en un día?</h3>

              <p>
                Sí. La distancia total del corredor permite realizarla en una
                jornada, aunque conviene disponer de tiempo para detenerse y
                conocer los principales sitios históricos.
              </p>
            </article>


            <article>
              <h3>¿Fiambalá es solamente un destino de termas?</h3>

              <p>
                No. Las Termas son uno de sus atractivos principales, pero la
                región también ofrece patrimonio histórico, dunas, vinos,
                pueblos y algunos de los paisajes cordilleranos más
                impresionantes de Catamarca.
              </p>
            </article>

          </div>
        </section>


        {/* EXCURSIÓN RELACIONADA */}

        <section className="fiambala-related">

          <div>
            <span>EXPERIENCIA RELACIONADA</span>

            <h2>
              Ruta del Adobe + Fiambalá
            </h2>

            <p>
              Si preferís realizar parte del recorrido acompañado y con los
              traslados organizados, conocé nuestra propuesta para descubrir
              el oeste catamarqueño.
            </p>
          </div>

          <a
            href="/excursiones/ruta-del-adobe-fiambala"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver excursión →
          </a>

        </section>


        {/* CTA FINAL */}

        <section className="fiambala-final-cta">

          <div>
            <span>MT TOURS & TRANSFERS</span>

            <h2>
              ¿Estás organizando un viaje a Fiambalá?
            </h2>

            <p>
              Podemos ayudarte con transfers, recorridos privados y la
              planificación de tus traslados por Catamarca.
            </p>
          </div>

          <a
            href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20viaje%20a%20Fiambal%C3%A1."
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

export default GuiaFiambala;