import capitalCatamarca from "../assets/catamarca-capital.jpg";
import plaza25Mayo from "../assets/plaza-25-mayo.jpg";
import catedralBasilica from "../assets/catedral-basilica.jpeg";
import puebloPerdido from "../assets/pueblo-perdido.jpeg";
import diqueJumeal from "../assets/dique-jumeal.jpeg";
import grutaVirgen from "../assets/gruta-virgen.png";




function GuiaCapitalCatamarca() {
  return (
    <main className="capital-page">

      {/* HEADER */}

      <header className="capital-header">
        <a href="/" className="capital-logo">
          MT TOURS & TRANSFERS
        </a>

        <a href="/guia" className="capital-back">
          ← Volver a la guía
        </a>
      </header>


      {/* HERO */}

<section
  className="capital-hero"
  style={{ backgroundImage: `url(${capitalCatamarca})` }}
>
  <div className="capital-hero-overlay"></div>

  <div className="capital-hero-content">
    <span>GUÍA DE VIAJE · CATAMARCA CAPITAL</span>

    <h1>San Fernando del Valle de Catamarca</h1>

    <p>
      Historia, cultura, gastronomía, naturaleza y el mejor punto
      de partida para descubrir todos los rincones de Catamarca.
    </p>
  </div>
</section>


      {/* INTRO */}

      <section className="capital-intro">

        <div className="capital-intro-main">
          <span className="section-kicker">LA PUERTA DE CATAMARCA</span>

          <h2>Mucho más que una ciudad de paso</h2>

          <p>
            San Fernando del Valle de Catamarca es la capital provincial
            y el principal centro urbano de la provincia. Para muchos
            viajeros representa el comienzo de una aventura por los
            valles, la puna, las sierras y los pueblos históricos.
          </p>

          <p>
            La ciudad combina arquitectura colonial, patrimonio religioso,
            museos, espacios verdes, propuestas gastronómicas y una vida
            cultural muy activa durante todo el año.
          </p>

          <p>
            Además, por su ubicación estratégica, funciona como la mejor
            base para organizar excursiones hacia destinos como El Rodeo,
            Fiambalá, Antofagasta de la Sierra, Belén, Londres, Ancasti
            y numerosos atractivos de la provincia.
          </p>
        </div>

        <div className="capital-quick-info">

          <div>
            <strong>REGIÓN</strong>
            <span>Valle Central</span>
          </div>

          <div>
            <strong>FUNCIÓN</strong>
            <span>Capital y base turística</span>
          </div>

          <div>
            <strong>IDEAL</strong>
            <span>1 a 3 días</span>
          </div>

          <div>
            <strong>EXPERIENCIAS</strong>
            <span>Historia · Cultura · Gastronomía · Naturaleza</span>
          </div>

        </div>

      </section>


     {/* QUÉ CONOCER */}

<section className="capital-places">

  <div className="section-heading">
    <span className="section-kicker">QUÉ CONOCER</span>

    <h2>Los lugares imprescindibles de la Capital</h2>

    <p>
      La mayoría de los principales atractivos pueden recorrerse
      cómodamente dentro de la ciudad y otros se encuentran a pocos
      minutos del centro.
    </p>
  </div>

  <div className="capital-place-grid">

    <article className="capital-place-card">
      <img
        src={plaza25Mayo}
        alt="Plaza 25 de Mayo de San Fernando del Valle de Catamarca"
      />

      <div className="capital-place-card-content">
        <span>CORAZÓN DE LA CIUDAD</span>

        <h3>Plaza 25 de Mayo</h3>

        <p>
          Es el punto de encuentro por excelencia de la ciudad y uno
          de los mejores lugares para comenzar cualquier recorrido.
        </p>

        <p>
          A su alrededor se concentran edificios históricos,
          cafeterías, comercios y algunos de los monumentos más
          representativos de San Fernando del Valle.
        </p>
      </div>
    </article>


    <article className="capital-place-card capital-place-featured">
      <img
        src={catedralBasilica}
        alt="Catedral Basílica de Nuestra Señora del Valle en Catamarca"
      />

      <div className="capital-place-card-content">
        <span>PATRIMONIO RELIGIOSO</span>

        <h3>Catedral Basílica del Valle</h3>

        <p>
          Frente a la plaza se levanta uno de los edificios más
          emblemáticos de Catamarca y el principal santuario dedicado
          a Nuestra Señora del Valle.
        </p>

        <p>
          Su arquitectura y su enorme importancia histórica y
          religiosa convierten a este lugar en una visita obligada
          para quienes llegan por primera vez.
        </p>
      </div>
    </article>


    <article className="capital-place-card">
      <img
        src={capitalCatamarca}
        alt="Vista urbana de San Fernando del Valle de Catamarca"
      />

      <div className="capital-place-card-content">
        <span>HISTORIA Y ARTE</span>

        <h3>Museos y espacios culturales</h3>

        <p>
          La ciudad reúne distintos museos y centros culturales donde
          pueden conocerse piezas arqueológicas, arte, historia
          regional y exposiciones temporarias.
        </p>

        <p>
          Son una excelente alternativa para complementar el recorrido
          por el casco histórico.
        </p>
      </div>
    </article>


    <article className="capital-place-card">
      <img
        src={plaza25Mayo}
        alt="Espacios verdes y paseos de la Capital de Catamarca"
      />

      <div className="capital-place-card-content">
        <span>ESPACIO VERDE</span>

        <h3>La Alameda</h3>

        <p>
          Este tradicional paseo arbolado forma parte de la identidad
          urbana de la ciudad y ofrece un ambiente ideal para caminar,
          descansar y disfrutar de la vida cotidiana.
        </p>

        <p>
          Es especialmente agradable durante las tardes y fines de
          semana.
        </p>
      </div>
    </article>


    <article className="capital-place-card">
      <img
        src={capitalCatamarca}
        alt="Ciudad de Catamarca y su patrimonio cultural"
      />

      <div className="capital-place-card-content">
        <span>IDENTIDAD LOCAL</span>

        <h3>Mercados y artesanías</h3>

        <p>
          Catamarca posee una fuerte tradición artesanal vinculada al
          tejido, cerámica, cuero y productos regionales.
        </p>

        <p>
          Recorrer ferias y espacios de producción local permite
          descubrir una parte muy auténtica de la cultura provincial.
        </p>
      </div>
    </article>


    <article className="capital-place-card">
      <img
        src={diqueJumeal}
        alt="Dique El Jumeal en San Fernando del Valle de Catamarca"
      />

      <div className="capital-place-card-content">
        <span>NATURALEZA CERCA DEL CENTRO</span>

        <h3>Dique El Jumeal</h3>

        <p>
          A pocos minutos de la ciudad aparece este espejo de agua
          rodeado por montañas, muy utilizado para actividades al aire
          libre y para disfrutar de excelentes vistas del Valle Central.
        </p>

        <p>
          Es uno de los lugares preferidos para una escapada corta sin
          alejarse demasiado del centro.
        </p>
      </div>
    </article>

  </div>

</section>

      {/* CIRCUITO HISTÓRICO */}

      <section className="capital-history">

        <div className="capital-history-title">
          <span>RECORRIDO URBANO</span>

          <h2>Historia caminando por el centro</h2>
        </div>

        <div className="capital-history-content">

          <p>
            Una de las mejores maneras de conocer San Fernando del Valle
            es recorrer el casco histórico a pie.
          </p>

          <p>
            En pocas cuadras aparecen iglesias, edificios públicos,
            antiguos solares, museos y espacios que permiten comprender
            la evolución de la ciudad desde el período colonial hasta la
            actualidad.
          </p>

          <p>
            El recorrido puede adaptarse fácilmente a una mañana o una
            tarde y combinarse con cafeterías, gastronomía regional y
            paseos comerciales.
          </p>

          <strong>
            Es la mejor forma de descubrir la identidad cultural de la
            Capital sin necesidad de realizar grandes desplazamientos.
          </strong>

        </div>

      </section>


     {/* PUEBLO PERDIDO */}

<section className="capital-pueblo">

  <div className="capital-pueblo-image">
    <img
      src={puebloPerdido}
      alt="Pueblo Perdido de la Quebrada en Catamarca"
    />
  </div>

  <div className="capital-pueblo-info">

    <span>ARQUEOLOGÍA</span>

    <h2>Pueblo Perdido de la Quebrada</h2>

    <p>
      Muy cerca del centro urbano se encuentra este importante sitio
      arqueológico donde pueden observarse reconstrucciones y
      vestigios vinculados a antiguas comunidades que habitaron el
      Valle Central.
    </p>

    <p>
      El espacio permite comprender aspectos de la cultura Aguada y
      acercarse a la historia prehispánica de una manera diferente,
      rodeado por un entorno natural de gran belleza.
    </p>

    <p>
      Es una visita muy recomendable para quienes desean combinar
      ciudad, arqueología y paisaje en una misma jornada.
    </p>

  </div>

</section>

     {/* GRUTA */}

<section className="capital-gruta">

  <div className="capital-gruta-image">
    <img
      src={grutaVirgen}
      alt="Gruta de la Virgen del Valle en Catamarca"
    />
  </div>

  <div className="capital-gruta-info">

    <div className="capital-gruta-title">
      <span>TURISMO DE FE</span>

      <h2>La Gruta de la Virgen del Valle</h2>
    </div>

    <div className="capital-gruta-content">

      <p>
        La devoción por la Virgen del Valle forma parte de la identidad
        de Catamarca y este santuario es uno de los lugares más
        visitados por peregrinos y turistas.
      </p>

      <p>
        Independientemente de las creencias religiosas, el entorno
        ofrece un espacio de tranquilidad y un importante valor
        histórico y cultural dentro de la provincia.
      </p>

      <strong>
        Si visitás la Capital, es uno de los sitios más representativos
        para comprender la relación entre la ciudad y su patrimonio
        religioso.
      </strong>

    </div>

  </div>

</section>

      {/* GASTRONOMÍA */}

      <section className="capital-food">

        <div className="section-heading">
          <span className="section-kicker">SABORES DE CATAMARCA</span>

          <h2>Qué probar durante tu visita</h2>

          <p>
            La gastronomía catamarqueña combina recetas tradicionales,
            productos regionales y propuestas modernas dentro de la ciudad.
          </p>
        </div>

        <div className="capital-food-grid">

          <article>
            <span>01</span>
            <h3>Empanadas catamarqueñas</h3>
            <p>
              Uno de los clásicos de la cocina provincial, presentes en
              restaurantes y casas de comida de toda la ciudad.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Locro y comidas regionales</h3>
            <p>
              Especialmente durante jornadas frescas, los platos tradicionales
              forman parte de la experiencia gastronómica del Valle Central.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Dulces y nueces</h3>
            <p>
              Los productos elaborados con nuez, membrillo, higo y otros frutos
              regionales son excelentes opciones para llevar como recuerdo.
            </p>
          </article>

        </div>

      </section>


      {/* CÓMO MOVERSE */}

      <section className="capital-move">

        <div className="section-heading">
          <span className="section-kicker">MOVERSE POR LA CIUDAD</span>

          <h2>Transporte y traslados</h2>

          <p>
            La Capital concentra el aeropuerto, la terminal y la mayor parte
            de los servicios de transporte de la provincia.
          </p>
        </div>

        <div className="capital-move-grid">

          <article>
            <span>AEROPUERTO</span>

            <h3>Llegadas y salidas</h3>

            <p>
              El Aeropuerto Coronel Felipe Varela se encuentra en el Valle
              Central y es la principal puerta aérea de ingreso para quienes
              visitan Catamarca.
            </p>

            <p>
              Desde allí pueden organizarse transfers hacia hoteles, el centro
              y distintos destinos turísticos de la provincia.
            </p>
          </article>


          <article>
            <span>TERMINAL</span>

            <h3>Conexión con otras ciudades</h3>

            <p>
              Desde la terminal parten servicios terrestres hacia distintas
              localidades de Catamarca y también hacia otras provincias del
              país.
            </p>

            <p>
              Las frecuencias pueden variar según la temporada y la empresa,
              por lo que siempre conviene verificar la información antes de
              viajar.
            </p>
          </article>


          <article>
            <span>DENTRO DE CAPITAL</span>

            <h3>Recorrer cómodamente</h3>

            <p>
              El casco histórico puede recorrerse caminando y muchos atractivos
              urbanos se encuentran a corta distancia entre sí.
            </p>

            <p>
              Para puntos más alejados como El Jumeal, la Gruta o excursiones
              hacia el interior resulta conveniente utilizar vehículo,
              remís, taxi o traslado contratado.
            </p>
          </article>

        </div>

      </section>


      {/* DISTANCIAS */}

<section className="capital-distance">

  <div className="capital-distance-image">
    <img
      src={diqueJumeal}
      alt="Paisaje del Valle Central de Catamarca"
    />
  </div>

  <div className="capital-distance-info">

    <div className="capital-distance-title">
      <span>BASE PARA EXPLORAR</span>

      <h2>Desde Capital hacia otros destinos</h2>
    </div>

    <div className="capital-distance-content">

      <div className="capital-distance-item">
        <strong>El Rodeo y Las Juntas</strong>
        <span>Escapada serrana por Ambato</span>
      </div>

      <div className="capital-distance-item">
        <strong>Cuesta del Portezuelo</strong>
        <span>Uno de los miradores más famosos de Catamarca</span>
      </div>

      <div className="capital-distance-item">
        <strong>Fiambalá</strong>
        <span>Termas, dunas y Ruta del Adobe</span>
      </div>

      <div className="capital-distance-item">
        <strong>Belén y Londres</strong>
        <span>Cultura textil y El Shincal de Quimivil</span>
      </div>

      <div className="capital-distance-item">
        <strong>Antofagasta de la Sierra</strong>
        <span>La gran puerta de entrada a la Puna</span>
      </div>

    </div>

  </div>

</section>

      {/* UN DÍA */}

      <section className="capital-day">

        <div className="section-heading">
          <span className="section-kicker">ITINERARIO SUGERIDO</span>

          <h2>Qué hacer en un día en la Capital</h2>
        </div>

        <div className="capital-day-grid">

          <article>
            <span>MAÑANA</span>

            <h3>Centro histórico</h3>

            <p>
              Plaza 25 de Mayo, Catedral Basílica, calles históricas y un
              recorrido por museos o espacios culturales.
            </p>
          </article>

          <article>
            <span>MEDIODÍA</span>

            <h3>Gastronomía regional</h3>

            <p>
              Almorzar en el centro y aprovechar para conocer productos
              regionales o recorrer locales de artesanías.
            </p>
          </article>

          <article>
            <span>TARDE</span>

            <h3>Naturaleza cercana</h3>

            <p>
              Elegir entre Pueblo Perdido, Dique El Jumeal o la Gruta de la
              Virgen para cerrar el día con otro paisaje de la ciudad.
            </p>
          </article>

        </div>

      </section>


      {/* MEJOR ÉPOCA */}

      <section className="capital-season">

        <div className="capital-season-title">
          <span>CUÁNDO VIAJAR</span>

          <h2>La Capital durante todo el año</h2>
        </div>

        <div className="capital-season-content">

          <p>
            San Fernando del Valle puede visitarse durante las cuatro estaciones,
            aunque cada una ofrece una experiencia diferente.
          </p>

          <p>
            Primavera y otoño suelen resultar muy agradables para caminar por la
            ciudad y disfrutar de espacios verdes y excursiones cercanas.
          </p>

          <p>
            Durante el verano aumentan las temperaturas y también las lluvias
            propias de la región, mientras que el invierno ofrece mañanas y
            noches más frescas.
          </p>

          <a
            href="/guia/mejor-epoca-catamarca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver guía sobre la mejor época para viajar →
          </a>

        </div>

      </section>


      {/* FAQ */}

      <section className="capital-faq">

        <div className="section-heading">
          <span className="section-kicker">PREGUNTAS FRECUENTES</span>

          <h2>Antes de visitar la ciudad</h2>
        </div>

        <div className="capital-faq-grid">

          <article>
            <h3>¿Vale la pena quedarse en Capital?</h3>

            <p>
              Sí. Es el mejor lugar para hacer base si pensás recorrer distintos
              destinos de Catamarca durante varios días.
            </p>
          </article>

          <article>
            <h3>¿Se puede recorrer el centro caminando?</h3>

            <p>
              Sí. Los principales edificios históricos, plazas, museos y
              propuestas gastronómicas se concentran en una zona muy accesible.
            </p>
          </article>

          <article>
            <h3>¿Hay traslados desde el aeropuerto?</h3>

            <p>
              Sí. Pueden organizarse transfers hacia hoteles, el centro y otros
              destinos mediante servicios previamente coordinados.
            </p>
          </article>

          <article>
            <h3>¿Cuántos días necesito?</h3>

            <p>
              Un día permite conocer los principales atractivos urbanos, mientras
              que dos o tres días ofrecen la posibilidad de combinar la ciudad
              con excursiones cercanas.
            </p>
          </article>

        </div>

      </section>


      {/* GUÍAS RELACIONADAS */}

      <section className="capital-related">

        <div>
          <span>SEGUÍ DESCUBRIENDO CATAMARCA</span>

          <h2>Excursiones y destinos desde la Capital</h2>

          <p>
            Desde San Fernando del Valle comienzan muchas de las experiencias
            más importantes de nuestra provincia.
          </p>

          <div className="capital-related-links">

            <a
              href="/guia/el-rodeo-las-juntas"
              target="_blank"
              rel="noopener noreferrer"
            >
              El Rodeo y Las Juntas →
            </a>

            <a
              href="/guia/belen-londres"
              target="_blank"
              rel="noopener noreferrer"
            >
              Belén y Londres →
            </a>

            <a
              href="/guia/fiambala"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiambalá →
            </a>

            <a
  href="/guia/antofagasta-de-la-sierra"
  target="_blank"
  rel="noopener noreferrer"
>
  Antofagasta de la Sierra →
</a>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="capital-final-cta">

        <div>
          <span>MT TOURS & TRANSFERS</span>

          <h2>¿Llegás a Catamarca y necesitás organizar tu viaje?</h2>

          <p>
            Te ayudamos con transfers desde el aeropuerto, traslados entre
            ciudades y excursiones privadas por toda la provincia.
          </p>
        </div>

        <a
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20traslados%20o%20excursiones%20desde%20San%20Fernando%20del%20Valle%20de%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>

      </section>

    </main>
  );
}

export default GuiaCapitalCatamarca;