function CatamarcaEnPrimavera() {

  const title =
    "Catamarca en Primavera: Clima y Qué Visitar | Guía de Viaje";

  const description =
    "Descubrí cómo es Catamarca en primavera, qué clima esperar, qué lugares visitar y qué tener en cuenta para organizar tu viaje durante esta temporada.";

  const canonicalUrl =
    "https://mttransfers.com/guia/mejor-epoca-catamarca/catamarca-en-primavera";

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
    <div className="tour-detail-page">

      <header className="header">
        <div className="logo">
          <span className="logo-mark">MT</span>

          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>
        </div>

        <a
          href="/guia/mejor-epoca-catamarca"
          target="_blank"
          rel="noopener noreferrer"
          className="back-link"
        >
          ← Cuándo viajar
        </a>

        <a
          className="whatsapp-button"
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20organizar%20un%20viaje%20a%20Catamarca%20en%20primavera."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </header>


      <main>

        {/* HERO */}

        <section className="guide-season-hero">
          <div className="guide-season-hero-content">

            <span className="section-kicker">
              SEPTIEMBRE · OCTUBRE · NOVIEMBRE
            </span>

            <h1>Catamarca en primavera</h1>

            <p>
              La primavera es una de las épocas más interesantes para recorrer
              Catamarca. Entre septiembre y noviembre las temperaturas comienzan
              a subir, los días se alargan y muchas regiones ofrecen condiciones
              muy favorables para combinar sierras, oeste, valles y Puna.
            </p>

            <a href="#meses" className="button button-primary">
              Ver la guía
            </a>

          </div>
        </section>


        {/* RESPUESTA RÁPIDA */}

        <section className="guide-best-time">

          <div className="guide-best-time-content">

            <span className="section-kicker">
              RESPUESTA RÁPIDA
            </span>

            <h2>¿Vale la pena viajar a Catamarca en primavera?</h2>

            <p className="guide-best-time-intro">
              Sí. Primavera es una de las mejores épocas para quienes quieren
              recorrer distintas regiones en un mismo viaje, especialmente
              durante septiembre, octubre y noviembre.
            </p>

            <div className="guide-best-time-highlight">

              <strong>
                Para la Puna catamarqueña, septiembre a noviembre es uno de los
                períodos más recomendados oficialmente.
              </strong>

              <p>
                Antofagasta de la Sierra y el Campo de Piedra Pómez pueden
                visitarse durante todo el año, pero septiembre, octubre y
                noviembre forman parte del período especialmente recomendado.
              </p>

            </div>

          </div>

        </section>


        {/* MESES */}

        <section className="guide-season-content" id="meses">

          <div className="section-heading">

            <span className="section-kicker">
              LA PRIMAVERA MES A MES
            </span>

            <h2>Septiembre, octubre y noviembre</h2>

            <p>
              Cada mes tiene diferencias en temperatura, viento y condiciones
              generales, por lo que conviene elegir según el recorrido que
              quieras hacer.
            </p>

          </div>


          <div className="guide-season-grid">

            <article className="guide-season-card">

              <span>SEPTIEMBRE</span>

              <h3>Comienza la primavera</h3>

              <p>
                Septiembre combina temperaturas más agradables con mañanas y
                noches todavía frescas. Es una época muy interesante para
                recorridos por sierras, valles y Puna.
              </p>

              <strong>
                Excelente inicio de temporada para recorrer.
              </strong>

            </article>


            <article className="guide-season-card guide-season-card-featured">

              <span>OCTUBRE</span>

              <h3>Uno de los meses más completos</h3>

              <p>
                Octubre suele ofrecer una buena combinación de temperaturas y
                cantidad de horas de luz. También es uno de los meses incluidos
                dentro del período recomendado para visitar la Puna.
              </p>

              <strong>
                Muy buena opción para conocer varias regiones.
              </strong>

            </article>


            <article className="guide-season-card">

              <span>NOVIEMBRE</span>

              <h3>Más calor y días más largos</h3>

              <p>
                En noviembre comienzan a sentirse temperaturas más elevadas,
                especialmente en las zonas bajas, pero sigue siendo un mes muy
                interesante para recorridos por el oeste y la Puna.
              </p>

              <strong>
                Ideal para aprovechar días largos.
              </strong>

            </article>

          </div>

        </section>


        {/* REGIONES */}

<section className="guide-regions">

  <div className="guide-regions-heading">

    <span className="section-kicker">
      DÓNDE IR EN PRIMAVERA
    </span>

    <h2>Qué lugares conocer en Catamarca durante la primavera</h2>

    <p>
      Septiembre, octubre y noviembre son meses muy interesantes para combinar
      sierras, oeste, cultura y Puna. Los días se alargan, las temperaturas
      empiezan a subir y muchas regiones ofrecen condiciones favorables para viajar.
    </p>

  </div>


  <div className="guide-regions-grid">


    {/* CAPITAL */}

    <article className="guide-region-card">

      <span className="guide-region-label">
        VALLE CENTRAL
      </span>

      <h3>San Fernando del Valle de Catamarca</h3>

      <p>
        La Capital es una excelente base para empezar a recorrer la provincia
        y combinar cultura, gastronomía, historia y excursiones cercanas.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Qué podés conocer:</strong><br />
          Centro histórico, plazas, iglesias, museos, espacios culturales y
          distintos puntos vinculados con la identidad catamarqueña.
        </p>

        <p>
          <strong>Por qué interesa en primavera:</strong><br />
          Los días más largos permiten aprovechar mejor las caminatas y las
          excursiones, especialmente durante septiembre y octubre.
        </p>

        <p>
          <strong>Desde aquí podés salir hacia:</strong><br />
          Cuesta del Portezuelo, El Rodeo, Las Juntas, Ambato, Ancasti y
          otros sectores del Valle Central.
        </p>

      </div>

    </article>


    {/* SIERRAS */}

    <article className="guide-region-card">

      <span className="guide-region-label">
        SIERRAS DE AMBATO
      </span>

      <h3>El Rodeo, Las Juntas y Ambato</h3>

      <p>
        Primavera es una excelente época para descubrir el paisaje serrano,
        con temperaturas en ascenso y una transformación progresiva de la vegetación.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>El Rodeo:</strong><br />
          Una de las localidades serranas más tradicionales de Catamarca y
          una alternativa muy accesible desde la Capital.
        </p>

        <p>
          <strong>Las Juntas:</strong><br />
          Combina montaña, tranquilidad y paisajes naturales en un entorno
          diferente del oeste árido de la provincia.
        </p>

        <p>
          <strong>Qué aporta la primavera:</strong><br />
          Los días más largos y el cambio de estación permiten disfrutar
          mejor caminos panorámicos, miradores y actividades al aire libre.
        </p>

      </div>

    </article>


    {/* FIAMBALA */}

    <article className="guide-region-card">

      <span className="guide-region-label">
        OESTE CATAMARQUEÑO
      </span>

      <h3>Tinogasta y Fiambalá</h3>

      <p>
        Esta región reúne patrimonio histórico, paisajes áridos, termas,
        montañas y algunas de las rutas más escénicas del oeste catamarqueño.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Tinogasta:</strong><br />
          Es una de las principales puertas de entrada a la región y punto
          estratégico para recorrer la Ruta del Adobe.
        </p>

        <p>
          <strong>Fiambalá:</strong><br />
          Es conocida por sus aguas termales, sus paisajes cordilleranos y
          por funcionar como base para distintos recorridos del oeste.
        </p>

        <p>
          <strong>Por qué primavera es interesante:</strong><br />
          Las horas de luz aumentan y permiten organizar mejor recorridos
          largos entre pueblos, paisajes y atractivos.
        </p>

      </div>

    </article>


    {/* BELEN */}

    <article className="guide-region-card">

      <span className="guide-region-label">
        HISTORIA · ARTESANÍAS · ARQUEOLOGÍA
      </span>

      <h3>Belén, Londres y El Shincal</h3>

      <p>
        Esta región combina historia, tradiciones textiles, pueblos antiguos
        y sitios arqueológicos dentro de un mismo recorrido por el oeste.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Belén:</strong><br />
          Se destaca por su identidad artesanal, especialmente por el trabajo
          textil, las hilanderas y los productos regionales.
        </p>

        <p>
          <strong>Londres:</strong><br />
          Es una de las localidades históricas de Catamarca y sirve como
          acceso a distintos atractivos culturales de la región.
        </p>

        <p>
          <strong>El Shincal de Quimivil:</strong><br />
          Es uno de los sitios arqueológicos más destacados vinculados a la
          presencia incaica en el actual territorio argentino.
        </p>

      </div>

    </article>


    {/* ANTOFAGASTA */}

    <article className="guide-region-card guide-region-card-featured">

      <span className="guide-region-label">
        PUNA CATAMARQUEÑA
      </span>

      <h3>Antofagasta de la Sierra</h3>

      <p>
        Primavera es uno de los mejores momentos del año para descubrir la
        inmensidad de la Puna catamarqueña.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Por qué primavera es especial:</strong><br />
          Septiembre, octubre y noviembre forman parte del período especialmente
          recomendado para visitar Antofagasta de la Sierra y sus alrededores.
        </p>

        <p>
          <strong>Qué vas a encontrar:</strong><br />
          Volcanes, lagunas altoandinas, salares, fauna de altura, grandes
          extensiones de paisaje y pequeños pueblos de la Puna.
        </p>

        <p>
          <strong>Qué tener en cuenta:</strong><br />
          La localidad se encuentra a más de 3.000 metros de altura, por lo
          que conviene hidratarse bien y realizar una adaptación progresiva.
        </p>

      </div>

    </article>


    {/* PIEDRA POMEZ */}

    <article className="guide-region-card">

      <span className="guide-region-label">
        PAISAJE VOLCÁNICO
      </span>

      <h3>Campo de Piedra Pómez</h3>

      <p>
        Uno de los paisajes más singulares de Catamarca, formado por enormes
        extensiones de piedra volcánica modeladas por el viento.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Dónde está:</strong><br />
          Se encuentra en plena Puna, a más de 3.000 metros sobre el nivel del mar.
        </p>

        <p>
          <strong>Cómo se visita:</strong><br />
          El acceso habitual se realiza desde El Peñón y requiere un vehículo
          apropiado para caminos de alta montaña.
        </p>

        <p>
          <strong>Por qué primavera es tan buena:</strong><br />
          Septiembre, octubre y noviembre están entre los meses especialmente
          recomendados para conocer esta región.
        </p>

      </div>

    </article>


  </div>

</section>


        {/* FLORA Y FAUNA */}

        <section className="guide-season-content">

          <div className="section-heading">

            <span className="section-kicker">
              NATURALEZA EN PRIMAVERA
            </span>

            <h2>Una época con cambios visibles en el paisaje</h2>

            <p>
              La primavera también ofrece experiencias vinculadas a la flora y
              la fauna de Catamarca.
            </p>

          </div>


          <div className="guide-best-time-highlight">

            <strong>
              Entre julio y octubre puede observarse la floración del lapacho.
            </strong>

            <p>
              El sitio oficial de turismo de Catamarca señala que los lapachos
              pueden florecer entre julio y octubre. Además, la floración del
              cardón ocurre entre octubre y febrero, transformando distintos
              paisajes áridos de la provincia.
            </p>

          </div>

        </section>


        {/* CHAKU */}

        <section className="guide-season-content">

          <div className="section-heading">

            <span className="section-kicker">
              CULTURA DE LA PUNA
            </span>

            <h2>El Chaku de vicuñas</h2>

            <p>
              En determinadas fechas de primavera, algunas comunidades de la
              Puna realizan una práctica ancestral vinculada al manejo
              sustentable de la vicuña.
            </p>

          </div>


          <div className="guide-best-time-highlight">

            <strong>
              Entre septiembre y principios de diciembre puede realizarse el
              Chaku en zonas como Laguna Blanca.
            </strong>

            <p>
              Esta práctica tradicional permite obtener fibra de vicuña de
              manera sustentable. La participación depende de la organización
              de las comunidades y de las condiciones de cada temporada.
            </p>

          </div>

        </section>


        {/* QUÉ LLEVAR */}

        <section className="guide-season-tips">

          <div className="section-heading">

            <span className="section-kicker">
              PREPARÁ TU EQUIPAJE
            </span>

            <h2>Qué llevar a Catamarca en primavera</h2>

            <p>
              Aunque las temperaturas aumentan, las diferencias entre regiones
              y alturas siguen siendo importantes.
            </p>

          </div>


          <div className="guide-season-tips-grid">

            <div>
              <strong>🧥 Abrigo liviano</strong>
              <p>
                Útil para mañanas, noches y recorridos de mayor altura.
              </p>
            </div>


            <div>
              <strong>🌬️ Rompevientos</strong>
              <p>
                Recomendable para zonas abiertas, miradores y recorridos por
                la Puna.
              </p>
            </div>


            <div>
              <strong>☀️ Protector solar</strong>
              <p>
                Fundamental durante todo el día, especialmente en zonas de
                altura.
              </p>
            </div>


            <div>
              <strong>🕶️ Anteojos de sol</strong>
              <p>
                Muy importantes en paisajes abiertos y caminos de montaña.
              </p>
            </div>


            <div>
              <strong>👟 Calzado cómodo</strong>
              <p>
                Elegí calzado adecuado para caminatas y terrenos irregulares.
              </p>
            </div>


            <div>
              <strong>💧 Agua</strong>
              <p>
                La hidratación es especialmente importante en ambientes secos
                y de altura.
              </p>
            </div>

          </div>

        </section>


       {/* IDEAS */}

<section className="guide-regions">

  <div className="guide-regions-heading">

    <span className="section-kicker">
      IDEAS PARA TU VIAJE
    </span>

    <h2>Qué recorridos podés hacer en Catamarca durante la primavera</h2>

    <p>
      Entre septiembre y noviembre los días se alargan y las temperaturas
      comienzan a subir. Es una época muy interesante para combinar sierras,
      paisajes del oeste y recorridos culturales.
    </p>

  </div>


  <div className="guide-regions-grid">

    <a
      href="/excursiones/cuesta-del-portezuelo"
      target="_blank"
      rel="noopener noreferrer"
      className="guide-region-card"
    >

      <span className="guide-region-label">
        DESDE CAPITAL
      </span>

      <h3>Cuesta del Portezuelo</h3>

      <p>
        Uno de los recorridos panorámicos más conocidos de Catamarca,
        ideal para descubrir las sierras y contemplar el Valle Central
        desde distintos miradores.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Qué vas a conocer:</strong><br />
          Camino de montaña, curvas panorámicas, miradores y amplias vistas
          sobre el Valle Central y las sierras catamarqueñas.
        </p>

        <p>
          <strong>Por qué hacerla en primavera:</strong><br />
          Los días más largos permiten aprovechar mejor el recorrido y las
          temperaturas suelen ser más agradables antes de la llegada del
          calor más intenso del verano.
        </p>

        <p>
          <strong>Ideal para:</strong><br />
          Quienes buscan una excursión desde la Capital que combine montaña,
          fotografía y paisajes panorámicos.
        </p>

      </div>

      <strong className="guide-card-link">
        Ver Cuesta del Portezuelo →
      </strong>

    </a>


    <a
      href="/excursiones/cuesta-de-singuil-balcozna"
      target="_blank"
      rel="noopener noreferrer"
      className="guide-region-card"
    >

      <span className="guide-region-label">
        SIERRAS
      </span>

      <h3>Cuesta de Singuil + Balcozna</h3>

      <p>
        Una alternativa para internarse en los paisajes serranos de
        Catamarca y descubrir caminos, quebradas y pequeñas localidades
        rodeadas de naturaleza.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Qué vas a conocer:</strong><br />
          La Cuesta de Singuil, paisajes de montaña, Balcozna y diferentes
          sectores de las sierras del departamento Ambato.
        </p>

        <p>
          <strong>Qué hace especial el recorrido:</strong><br />
          A diferencia de los paisajes áridos del oeste, esta zona permite
          descubrir otra cara de Catamarca, marcada por ambientes serranos
          y cambios de vegetación.
        </p>

        <p>
          <strong>Ideal para:</strong><br />
          Viajeros que disfrutan los caminos escénicos, la naturaleza y los
          recorridos menos urbanos.
        </p>

      </div>

      <strong className="guide-card-link">
        Ver Singuil + Balcozna →
      </strong>

    </a>


    <a
      href="/excursiones/ruta-del-adobe-fiambala"
      target="_blank"
      rel="noopener noreferrer"
      className="guide-region-card guide-region-card-featured"
    >

      <span className="guide-region-label">
        OESTE CATAMARQUEÑO
      </span>

      <h3>Ruta del Adobe + Fiambalá</h3>

      <p>
        Una propuesta para combinar patrimonio histórico, pueblos del oeste,
        paisajes cordilleranos y las conocidas aguas termales de Fiambalá.
      </p>

      <div className="guide-card-details">

        <p>
          <strong>Qué vas a conocer:</strong><br />
          Construcciones históricas de adobe, localidades del corredor de
          Tinogasta, Fiambalá y paisajes característicos del oeste provincial.
        </p>

        <p>
          <strong>Por qué primavera es interesante:</strong><br />
          Septiembre, octubre y noviembre permiten aprovechar más horas de luz
          para recorrer una región donde las distancias entre atractivos pueden
          ser importantes.
        </p>

        <p>
          <strong>Podés combinarlo con:</strong><br />
          Termas de Fiambalá y, con más días disponibles, otros paisajes y
          experiencias de la región.
        </p>

      </div>

      <strong className="guide-card-link">
        Ver Ruta del Adobe + Fiambalá →
      </strong>

    </a>

  </div>

</section>


        {/* FAQ */}

        <section className="guide-season-tips">

          <div className="section-heading">

            <span className="section-kicker">
              PREGUNTAS FRECUENTES
            </span>

            <h2>Antes de viajar a Catamarca en primavera</h2>

          </div>


          <div className="guide-season-tips-grid">

            <div>
              <strong>¿Cuál es el mejor mes de primavera?</strong>

              <p>
                Depende del recorrido, aunque octubre suele ofrecer una buena
                combinación para quienes desean visitar distintas regiones.
              </p>
            </div>


            <div>
              <strong>¿Es buena época para la Puna?</strong>

              <p>
                Sí. Septiembre a noviembre se encuentra entre los períodos
                especialmente recomendados oficialmente para Antofagasta de la
                Sierra y Campo de Piedra Pómez.
              </p>
            </div>


            <div>
              <strong>¿Hace calor?</strong>

              <p>
                Las temperaturas aumentan progresivamente, especialmente hacia
                noviembre y en zonas bajas. En altura las condiciones pueden
                seguir siendo mucho más frescas.
              </p>
            </div>


            <div>
              <strong>¿Hay viento?</strong>

              <p>
                Puede presentarse viento en zonas abiertas y de altura, por lo
                que conviene consultar las condiciones antes de recorridos
                largos.
              </p>
            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="tour-final-cta">

          <div className="tour-final-cta-content">

            <span className="section-kicker">
              VIAJÁ EN PRIMAVERA
            </span>

            <h2>¿Pensás visitar Catamarca entre septiembre y noviembre?</h2>

            <p>
              Contanos cuándo viajás, cuántos días tenés y qué lugares querés
              conocer. Te ayudamos a organizar un recorrido acorde a tu viaje.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20voy%20a%20viajar%20a%20Catamarca%20en%20primavera%20y%20quisiera%20organizar%20mi%20recorrido."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              Planificar mi viaje por WhatsApp
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CatamarcaEnPrimavera;