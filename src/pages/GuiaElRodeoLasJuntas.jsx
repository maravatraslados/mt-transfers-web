import elRodeo from "../assets/el-rodeo.jpg";
import virgenRodeo from "../assets/virgen-rodeo.jpg";
import lasJuntas from "../assets/las-juntas.jpg";
import laSilleta from "../assets/la-silleta.jpeg";
import paisajeSerrano from "../assets/paisaje-serrano.jpeg";



function GuiaElRodeoLasJuntas() {
  return (
    <main className="rodeo-page">

      {/* HEADER */}

      <header className="rodeo-header">
        <a href="/" className="rodeo-logo">
          MT TOURS & TRANSFERS
        </a>

        <a href="/guia" className="rodeo-back">
          ← Volver a la guía
        </a>
      </header>


     {/* HERO */}

<section
  className="rodeo-hero"
  style={{ backgroundImage: `url(${elRodeo})` }}
>
  <div className="rodeo-hero-overlay"></div>

  <div className="rodeo-hero-content">
    <span>GUÍA DE VIAJE · AMBATO</span>

    <h1>El Rodeo y Las Juntas</h1>

    <p>
      Montañas, ríos, senderos y dos de las villas turísticas
      más atractivas de la región serrana de Catamarca.
    </p>
  </div>
</section>


      {/* INTRO */}

      <section className="rodeo-intro">

        <div className="rodeo-intro-main">
          <span className="section-kicker">ANTES DE VIAJAR</span>

          <h2>Dos destinos serranos muy cerca de Capital</h2>

          <p>
            El Rodeo y Las Juntas forman parte del departamento Ambato
            y son dos de las escapadas de montaña más conocidas de
            Catamarca.
          </p>

          <p>
            Aunque están relativamente cerca entre sí, cada una tiene
            una identidad diferente: El Rodeo combina vida de villa,
            paisajes serranos y atractivos religiosos, mientras que
            Las Juntas se destaca por su ambiente de montaña,
            senderismo, ríos y naturaleza.
          </p>

          <p>
            Visitarlas juntas permite conocer una cara completamente
            distinta de la provincia, más verde, fresca y serrana.
          </p>
        </div>

        <div className="rodeo-quick-info">

          <div>
            <strong>REGIÓN</strong>
            <span>Ambato · Centro de Catamarca</span>
          </div>

          <div>
            <strong>DESTINOS</strong>
            <span>El Rodeo + Las Juntas</span>
          </div>

          <div>
            <strong>IDEAL</strong>
            <span>1 a 2 días</span>
          </div>

          <div>
            <strong>PERFIL</strong>
            <span>Naturaleza · Montaña · Descanso</span>
          </div>

        </div>

      </section>


      {/* DIFERENCIAS */}

      <section className="rodeo-differences">

        <div className="section-heading">
          <span className="section-kicker">DOS DESTINOS</span>

          <h2>El Rodeo y Las Juntas no son lo mismo</h2>

          <p>
            Se pueden combinar perfectamente, pero cada lugar ofrece
            una experiencia distinta.
          </p>
        </div>

        <div className="rodeo-difference-grid">

          <article>
            <span>EL RODEO</span>

            <h3>Villa serrana y escapada clásica</h3>

            <p>
              El Rodeo combina naturaleza, servicios turísticos,
              gastronomía y una fuerte tradición como destino de
              descanso para quienes buscan salir de la ciudad y
              disfrutar del ambiente serrano.
            </p>

            <p>
              También es punto de acceso a uno de los atractivos
              religiosos más llamativos de la región.
            </p>
          </article>


          <article className="rodeo-difference-featured">
            <span>LAS JUNTAS</span>

            <h3>Montaña, ríos y senderos</h3>

            <p>
              Las Juntas tiene un perfil más ligado al contacto con la
              naturaleza, las caminatas, los ríos y las actividades de
              montaña.
            </p>

            <p>
              Es una buena opción para quienes quieren quedarse más
              tiempo al aire libre y disfrutar un ritmo más tranquilo.
            </p>
          </article>

        </div>

      </section>


      {/* EL RODEO */}

<section className="rodeo-city">

  <div className="section-heading">
    <span className="section-kicker">EL RODEO</span>

    <h2>Una de las villas turísticas más conocidas de Catamarca</h2>

    <p>
      El Rodeo se encuentra en un entorno serrano de gran belleza
      y es una de las escapadas más tradicionales desde San
      Fernando del Valle de Catamarca.
    </p>
  </div>

  <div className="rodeo-place-grid">

    <article className="rodeo-place-card">
      <img
        src={elRodeo}
        alt="Vista panorámica de El Rodeo en Catamarca"
      />

      <div className="rodeo-place-card-content">
        <span>VILLA TURÍSTICA</span>

        <h3>El Rodeo</h3>

        <p>
          Calles tranquilas, casas de descanso, vegetación y
          paisajes de montaña forman parte de la identidad de esta
          localidad.
        </p>

        <p>
          Su cercanía con Capital la convierte en una opción ideal
          para una salida de día o una estadía corta.
        </p>
      </div>
    </article>


    <article className="rodeo-place-card">
      <img
        src={paisajeSerrano}
        alt="Paisaje serrano de Ambato en Catamarca"
      />

      <div className="rodeo-place-card-content">
        <span>PAISAJE</span>

        <h3>Entorno serrano</h3>

        <p>
          El camino y los alrededores de El Rodeo permiten disfrutar
          quebradas, montañas y sectores verdes que contrastan con
          otros paisajes de la provincia.
        </p>

        <p>
          Durante el recorrido aparecen múltiples puntos para
          detenerse, observar el paisaje y disfrutar del ambiente
          de montaña.
        </p>
      </div>
    </article>


    <article className="rodeo-place-card rodeo-place-featured">
      <img
        src={virgenRodeo}
        alt="Virgen del Valle en El Rodeo Catamarca"
      />

      <div className="rodeo-place-card-content">
        <span>IMPERDIBLE</span>

        <h3>Virgen del Valle</h3>

        <p>
          En el sector de El Rodeo se encuentra una gran imagen de
          la Virgen del Valle, uno de los atractivos religiosos y
          panorámicos más destacados de la zona.
        </p>

        <p>
          El conjunto alcanza aproximadamente 52 metros de altura
          total y cuenta con un mirador interior.
        </p>
      </div>
    </article>

  </div>

</section>

      {/* VIRGEN */}

<section className="rodeo-virgen">

  <div className="rodeo-virgen-image">
    <img
      src={virgenRodeo}
      alt="Virgen del Valle en las sierras de El Rodeo"
    />
  </div>

  <div className="rodeo-virgen-info">

    <div className="rodeo-virgen-title">
      <span>CAMINO DE LA FE</span>

      <h2>La Virgen de El Rodeo</h2>
    </div>

    <div className="rodeo-virgen-content">

      <p>
        El acceso se realiza desde la Ruta Provincial 4 por el
        denominado Camino de la Fe.
      </p>

      <p>
        Además de su significado religioso, el lugar ofrece una
        experiencia panorámica muy atractiva por su ubicación en
        medio del paisaje serrano.
      </p>

      <p>
        Como los horarios y condiciones de ingreso pueden variar,
        conviene consultar la información actual antes de organizar
        la visita.
      </p>

      <strong>
        Es uno de los puntos que mejor combina paisaje,
        espiritualidad y vistas panorámicas en esta región.
      </strong>

    </div>

  </div>

</section>

      {/* LAS JUNTAS */}

<section className="rodeo-juntas">

  <div className="section-heading">
    <span className="section-kicker">LAS JUNTAS</span>

    <h2>Una villa para disfrutar la montaña</h2>

    <p>
      Las Juntas es una localidad turística rodeada de naturaleza
      y especialmente atractiva para quienes buscan actividades
      al aire libre.
    </p>
  </div>

  <div className="rodeo-juntas-feature">

    <div className="rodeo-juntas-image">
      <img
        src={lasJuntas}
        alt="Las Juntas y sus ríos en Catamarca"
      />
    </div>

    <div className="rodeo-juntas-text">

      <span>VILLA DE MONTAÑA</span>

      <h3>Las Juntas</h3>

      <p>
        Los cursos de agua, la vegetación y las montañas son
        protagonistas del paisaje de Las Juntas.
      </p>

      <p>
        Es un destino especialmente agradable para caminar,
        descansar y disfrutar del entorno.
      </p>

      <p>
        La zona permite realizar caminatas, trekking, bicicleta,
        cabalgatas y otras actividades vinculadas al ambiente de
        montaña.
      </p>

      <p>
        Aunque puede visitarse en una excursión, pasar una noche
        permite disfrutar mucho mejor la tranquilidad del lugar.
      </p>

    </div>

  </div>

</section>

     {/* LA SILLETA */}

<section className="rodeo-silleta">

  <div className="rodeo-silleta-image">
    <img
      src={laSilleta}
      alt="Sendero de La Silleta en Las Juntas Catamarca"
    />
  </div>

  <div className="rodeo-silleta-info">

    <div className="rodeo-silleta-title">
      <span>SENDERISMO</span>

      <h2>La Silleta</h2>
    </div>

    <div className="rodeo-silleta-content">

      <p>
        La Silleta es uno de los recorridos de senderismo más
        conocidos de la zona de Las Juntas.
      </p>

      <p>
        El punto se encuentra aproximadamente a 2.500 metros de
        altura y el sendero presenta una distancia importante,
        cercana a los 11 kilómetros por tramo.
      </p>

      <p>
        La caminata tiene sectores de pendiente pronunciada y
        requiere preparación física, buen calzado y organización.
      </p>

      <p>
        Antes de iniciar una actividad de este tipo conviene revisar
        el estado del tiempo, llevar suficiente agua y considerar
        las condiciones particulares de cada viajero.
      </p>

      <strong>
        No debe pensarse como una caminata urbana: es una actividad
        de montaña que requiere preparación.
      </strong>

    </div>

  </div>

</section>


      {/* CÓMO LLEGAR */}

      <section className="rodeo-access">

        <div className="section-heading">
          <span className="section-kicker">CÓMO LLEGAR</span>

          <h2>Cómo organizar el recorrido</h2>

          <p>
            Ambos destinos son accesibles por carretera desde San
            Fernando del Valle de Catamarca.
          </p>
        </div>

        <div className="rodeo-access-grid">

          <article>
            <span>DESDE CAPITAL</span>

            <h3>Salida por carretera</h3>

            <p>
              El recorrido hacia Ambato permite abandonar rápidamente
              el ambiente urbano y comenzar a ingresar en un paisaje
              serrano.
            </p>

            <p>
              Antes de viajar conviene consultar el estado de las rutas
              y las condiciones meteorológicas.
            </p>
          </article>


          <article>
            <span>ENTRE DESTINOS</span>

            <h3>El Rodeo + Las Juntas</h3>

            <p>
              Por su ubicación, ambas localidades pueden combinarse
              dentro del mismo recorrido.
            </p>

            <p>
              La mejor organización dependerá del tiempo disponible y
              de las actividades que se quieran realizar.
            </p>
          </article>


          <article>
            <span>SIN AUTO</span>

            <h3>Traslado o transporte</h3>

            <p>
              Las opciones de transporte y sus frecuencias pueden
              cambiar, por lo que conviene verificarlas antes del viaje.
            </p>

            <p>
              Un servicio de traslado permite organizar paradas,
              tiempos y regreso con mayor flexibilidad.
            </p>
          </article>

        </div>

      </section>


      {/* DÓNDE HACER BASE */}

      <section className="rodeo-base">

        <div className="rodeo-base-title">
          <span>DÓNDE QUEDARSE</span>

          <h2>¿El Rodeo o Las Juntas?</h2>
        </div>

        <div className="rodeo-base-content">

          <p>
            El Rodeo puede resultar más práctico para quienes buscan
            una escapada corta, servicios y cercanía con otros puntos
            del recorrido.
          </p>

          <p>
            Las Juntas es especialmente interesante para quienes
            priorizan tranquilidad, naturaleza y actividades de
            montaña.
          </p>

          <p>
            Si el viaje dura dos días, una buena alternativa es
            dedicar tiempo a ambas localidades sin intentar hacer todo
            con apuro.
          </p>

        </div>

      </section>


      {/* CUÁNTOS DÍAS */}

      <section className="rodeo-days">

        <div className="section-heading">
          <span className="section-kicker">TIEMPO DE VIAJE</span>

          <h2>¿Un día o dos?</h2>
        </div>

        <div className="rodeo-days-grid">

          <article>
            <span>1 DÍA</span>

            <h3>Escapada desde Capital</h3>

            <p>
              Permite conocer El Rodeo, visitar sus principales puntos
              y combinar parte del recorrido con Las Juntas.
            </p>

            <p>
              Es ideal para quienes quieren descubrir la región serrana
              pero tienen poco tiempo.
            </p>
          </article>


          <article className="rodeo-days-featured">
            <span>2 DÍAS</span>

            <h3>Para disfrutar la montaña</h3>

            <p>
              Con una noche en la zona se puede viajar con mayor calma,
              disfrutar de los pueblos y sumar caminatas o actividades
              al aire libre.
            </p>

            <p>
              Es la mejor opción para quienes buscan una experiencia
              menos apurada.
            </p>
          </article>

        </div>

      </section>


      {/* MEJOR ÉPOCA */}

      <section className="rodeo-season">

        <div className="rodeo-season-title">
          <span>CUÁNDO VIAJAR</span>

          <h2>Mejor época para conocer Ambato</h2>
        </div>

        <div className="rodeo-season-content">

          <p>
            El Rodeo y Las Juntas pueden disfrutarse durante distintas
            épocas del año, pero cada estación cambia por completo la
            experiencia.
          </p>

          <p>
            Primavera y otoño suelen ofrecer condiciones agradables
            para recorrer y realizar actividades al aire libre.
          </p>

          <p>
            En invierno las temperaturas pueden ser bajas,
            especialmente durante la mañana y la noche.
          </p>

          <p>
            Durante el verano hay que prestar especial atención a las
            lluvias y a posibles crecidas de ríos y arroyos.
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


      {/* SEGURIDAD */}

      <section className="rodeo-safety">

        <div className="rodeo-safety-title">
          <span>IMPORTANTE EN VERANO</span>

          <h2>Ríos, tormentas y crecidas</h2>
        </div>

        <div className="rodeo-safety-content">

          <p>
            Durante la temporada de lluvias pueden producirse crecidas
            repentinas en ríos y arroyos de montaña.
          </p>

          <p>
            No conviene instalarse, estacionar o acampar dentro de
            cauces secos, zonas bajas o sectores próximos a cursos de
            agua cuando existen condiciones de tormenta.
          </p>

          <p>
            También es importante consultar el pronóstico antes de
            realizar senderismo o actividades alejadas de las zonas
            urbanas.
          </p>

        </div>

      </section>


      {/* QUÉ LLEVAR */}

      <section className="rodeo-tips">

        <div className="section-heading">
          <span className="section-kicker">PREPARAR LA SALIDA</span>

          <h2>Qué conviene llevar</h2>
        </div>

        <div className="rodeo-tips-grid">

          <article>
            <strong>01</strong>
            <h3>Abrigo</h3>
            <p>
              En montaña la temperatura puede cambiar rápidamente,
              incluso durante jornadas agradables.
            </p>
          </article>

          <article>
            <strong>02</strong>
            <h3>Agua y protección solar</h3>
            <p>
              Son fundamentales especialmente si se realizan caminatas
              o actividades prolongadas al aire libre.
            </p>
          </article>

          <article>
            <strong>03</strong>
            <h3>Calzado adecuado</h3>
            <p>
              Para senderos y sectores de montaña conviene utilizar
              calzado cómodo y con buen agarre.
            </p>
          </article>

        </div>

      </section>


      {/* FAQ */}

      <section className="rodeo-faq">

        <div className="section-heading">
          <span className="section-kicker">PREGUNTAS FRECUENTES</span>

          <h2>Antes de viajar</h2>
        </div>

        <div className="rodeo-faq-grid">

          <article>
            <h3>¿Se pueden conocer El Rodeo y Las Juntas el mismo día?</h3>

            <p>
              Sí. Es posible combinar ambos destinos en una jornada,
              especialmente si el recorrido está organizado.
            </p>
          </article>


          <article>
            <h3>¿Vale la pena quedarse una noche?</h3>

            <p>
              Sí, especialmente si se quiere disfrutar la tranquilidad
              del lugar o realizar caminatas y actividades de montaña.
            </p>
          </article>


          <article>
            <h3>¿La Silleta es para cualquier persona?</h3>

            <p>
              No necesariamente. Es una caminata de montaña de distancia
              considerable y requiere evaluar la condición física y las
              condiciones meteorológicas.
            </p>
          </article>


          <article>
            <h3>¿Hay que tener cuidado con los ríos en verano?</h3>

            <p>
              Sí. Las tormentas pueden producir crecidas repentinas,
              por lo que siempre conviene consultar el clima y evitar
              zonas de riesgo.
            </p>
          </article>

        </div>

      </section>


      {/* EXCURSIÓN RELACIONADA */}

      <section className="rodeo-related">

        <div>
          <span>EXPERIENCIA RELACIONADA</span>

          <h2>El Rodeo + Virgen del Valle</h2>

          <p>
            Si preferís conocer parte de esta región con el traslado
            organizado, podés consultar nuestra excursión desde
            Catamarca Capital.
          </p>

          <a
            href="/excursiones/el-rodeo-virgen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver excursión →
          </a>
        </div>

      </section>


      {/* CTA FINAL */}

      <section className="rodeo-final-cta">

        <div>
          <span>MT TOURS & TRANSFERS</span>

          <h2>¿Querés conocer El Rodeo y Las Juntas?</h2>

          <p>
            Consultanos para organizar tu traslado o recorrido por
            Ambato.
          </p>
        </div>

        <a
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20viaje%20a%20El%20Rodeo%20y%20Las%20Juntas."
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>

      </section>

    </main>
  );
}

export default GuiaElRodeoLasJuntas;