import campoPomez from "../assets/campo pomez.jpg";
import elPenon from "../assets/el peñon.jpg";
import carachiPampa from "../assets/carachipampa.jpg";


function GuiaCampoPomez() {
  return (
    <div className="pomez-page">

      {/* HEADER */}

      <header className="pomez-header">
        <a href="/" className="pomez-logo">
          MT TOURS & TRANSFERS
        </a>

        <a
          href="/guia/antofagasta-de-la-sierra"
          target="_blank"
          rel="noopener noreferrer"
          className="pomez-back"
        >
          ← Volver a Antofagasta de la Sierra
        </a>
      </header>

      <main>

        {/* HERO */}

        <section
  className="pomez-hero"
  style={{ backgroundImage: `url(${campoPomez})` }}
>
          <div className="pomez-hero-overlay"></div>

          <div className="pomez-hero-content">
            <span>GUÍA DE VIAJE · PUNA CATAMARQUEÑA</span>

            <h1>Campo de Piedra Pómez</h1>

            <p>
              Un paisaje volcánico extraordinario escondido en la inmensidad
              de la Puna de Catamarca.
            </p>
          </div>
        </section>


        {/* INTRO */}

        <section className="pomez-intro">
          <div className="pomez-intro-main">
            <span className="section-kicker">PAISAJE VOLCÁNICO</span>

            <h2>Un lugar que parece pertenecer a otro planeta</h2>

            <p>
              El Campo de Piedra Pómez es una de las grandes maravillas
              naturales de Catamarca. Se encuentra en el departamento
              Antofagasta de la Sierra, en plena Puna catamarqueña.
            </p>

            <p>
              El paisaje está formado por enormes bloques y paredes de piedra
              pómez que fueron modelados por procesos volcánicos y posteriormente
              esculpidos por miles de años de erosión y viento.
            </p>

            <p>
              No se trata solamente de llegar, sacar una fotografía y regresar.
              La altura, las distancias, el aislamiento y las características
              del terreno hacen que conocer Piedra Pómez requiera planificación.
            </p>
          </div>

          <div className="pomez-quick-info">
            <div>
              <strong>Región</strong>
              <span>Puna catamarqueña</span>
            </div>

            <div>
              <strong>Altitud</strong>
              <span>Más de 3.000 m s. n. m.</span>
            </div>

            <div>
              <strong>Acceso habitual</strong>
              <span>Desde El Peñón</span>
            </div>

            <div>
              <strong>Vehículo</strong>
              <span>4x4 + guía habilitado</span>
            </div>
          </div>
        </section>


        {/* QUÉ ES */}

        <section className="pomez-origin">
          <div>
            <span className="section-kicker">ENTENDER EL PAISAJE</span>

            <h2>¿Cómo se formó el Campo de Piedra Pómez?</h2>
          </div>

          <div className="pomez-origin-content">
            <p>
              La piedra pómez tiene origen volcánico. Se produce cuando
              materiales expulsados durante grandes erupciones contienen
              abundantes gases y se enfrían rápidamente.
            </p>

            <p>
              En esta región de Catamarca, la intensa actividad volcánica
              dejó enormes depósitos que posteriormente fueron transformados
              por la erosión.
            </p>

            <p>
              El viento puneño fue tallando corredores, paredes, crestas y
              formas que hoy producen uno de los paisajes más singulares del
              noroeste argentino.
            </p>

            <strong>
              Por eso Piedra Pómez es mucho más que un mirador: es una enorme
              muestra de la historia geológica de la Puna.
            </strong>
          </div>
        </section>


        
{/* RECORRIDO */}

<section className="pomez-places">
  <div className="section-heading">
    <span className="section-kicker">EL RECORRIDO</span>

    <h2>Qué podés encontrar durante la experiencia</h2>

    <p>
      El viaje hacia Piedra Pómez permite atravesar diferentes
      ambientes de la Puna y comprender por qué el recorrido es tan
      importante como el destino final.
    </p>
  </div>

  <div className="pomez-place-grid">

    {/* EL PEÑÓN */}

    <article className="pomez-place-card">
      <img
        src={elPenon}
        alt="El Peñón en la Puna de Catamarca"
      />

      <span>PUNTO DE PARTIDA</span>

      <h3>El Peñón</h3>

      <p>
        Esta pequeña localidad puneña es uno de los principales
        puntos de partida para las excursiones hacia Campo de Piedra
        Pómez.
      </p>

      <p>
        También funciona como lugar de alojamiento y base para
        recorrer otros paisajes del sector sur de Antofagasta de la
        Sierra.
      </p>
    </article>


    {/* CARACHI PAMPA */}

    <article className="pomez-place-card">
      <img
        src={carachiPampa}
        alt="Carachi Pampa en Antofagasta de la Sierra"
      />

      <span>PAISAJE VOLCÁNICO</span>

      <h3>Carachi Pampa</h3>

      <p>
        En el recorrido aparece el volcán Carachi Pampa acompañado
        por extensiones oscuras de lava y una laguna que contrasta
        con el paisaje árido.
      </p>

      <p>
        Según las condiciones y el circuito contratado, este sector
        puede formar parte de la experiencia hacia Piedra Pómez.
      </p>
    </article>


    {/* CAMPO DE PIEDRA PÓMEZ */}

    <article className="pomez-place-card pomez-place-featured">
      <img
        src={campoPomez}
        alt="Campo de Piedra Pómez en Catamarca"
      />

      <span>DESTINO PRINCIPAL</span>

      <h3>Campo de Piedra Pómez</h3>

      <p>
        El área posee kilómetros de formaciones blancas y rosadas,
        corredores naturales y enormes paredes moldeadas por la
        erosión.
      </p>

      <p>
        Su fragilidad ambiental hace imprescindible circular
        únicamente por los sectores y caminos habilitados.
      </p>

      <strong>
        El objetivo no es solamente conocerlo, sino hacerlo sin
        deteriorar un paisaje que tardó miles de años en formarse.
      </strong>
    </article>

  </div>
</section>

        {/* CÓMO LLEGAR */}

        <section className="pomez-access">
          <div className="section-heading">
            <span className="section-kicker">CÓMO LLEGAR</span>

            <h2>Los accesos al Campo de Piedra Pómez</h2>

            <p>
              Existen diferentes formas de aproximarse al área, pero no todas
              tienen la misma dificultad ni funcionan durante todo el año.
            </p>
          </div>

          <div className="pomez-access-grid">

            <article>
              <span>01</span>

              <h3>Desde El Peñón</h3>

              <p>
                Es uno de los accesos turísticos más utilizados. La
                información turística provincial indica aproximadamente
                35 kilómetros entre El Peñón y el área protegida.
              </p>

              <p>
                El recorrido continúa por caminos y huellas de montaña que
                requieren vehículos adecuados.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Desde Antofagasta de la Sierra</h3>

              <p>
                También puede organizarse el recorrido desde la Villa de
                Antofagasta de la Sierra.
              </p>

              <p>
                La distancia indicada oficialmente hasta el área es de
                aproximadamente 63 kilómetros.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Desde Fiambalá por Las Papas</h3>

              <p>
                Existe una alternativa mucho más extensa que conecta el
                sector de Fiambalá con la Puna a través de Las Papas.
              </p>

              <p>
                No debe confundirse con el acceso habitual desde El Peñón:
                requiere guías experimentados, planificación especial y su
                habilitación depende de la época y las condiciones.
              </p>
            </article>

          </div>
        </section>


        {/* 4X4 */}

        <section className="pomez-4x4">
          <div>
            <span className="section-kicker">ACCESO RESPONSABLE</span>

            <h2>¿Por qué se necesita 4x4 y guía?</h2>
          </div>

          <div className="pomez-4x4-content">
            <p>
              Fuera de las rutas principales se circula por caminos y huellas
              de montaña donde aparecen arena, piedra, desniveles y sectores
              alejados de los centros poblados.
            </p>

            <p>
              A esto se suman la altura, los cambios meteorológicos y la baja
              conectividad de muchas zonas de la Puna.
            </p>

            <p>
              El guía no solamente conoce el camino. También permite realizar
              el recorrido por los sectores habilitados y ayuda a proteger un
              ambiente extremadamente frágil.
            </p>

            <strong>
              La visita al área debe realizarse en 4x4, por los caminos
              habilitados y con guía habilitado.
            </strong>
          </div>
        </section>


        {/* ALTURA */}

        <section className="pomez-altitude">
          <div>
            <span className="section-kicker">ALTURA Y CLIMA</span>

            <h2>La Puna puede cambiar durante una misma jornada</h2>
          </div>

          <div className="pomez-altitude-content">
            <p>
              Campo de Piedra Pómez se encuentra por encima de los 3.000
              metros sobre el nivel del mar y algunos sectores del recorrido
              alcanzan alturas superiores.
            </p>

            <p>
              La amplitud térmica puede ser importante: una jornada soleada
              no significa necesariamente que las temperaturas sean altas
              durante todo el día.
            </p>

            <p>
              El viento, el frío y los cambios meteorológicos pueden modificar
              las condiciones del recorrido.
            </p>

            <strong>
              Antes de salir siempre conviene consultar el clima y las
              condiciones actuales del camino.
            </strong>
          </div>
        </section>


        {/* MEJOR ÉPOCA */}

        <section className="pomez-season">
          <div className="section-heading">
            <span className="section-kicker">CUÁNDO VIAJAR</span>

            <h2>¿Cuál es la mejor época para visitar Piedra Pómez?</h2>
          </div>

          <div className="pomez-season-grid">

            <article>
              <span>OTOÑO</span>

              <h3>Marzo a mayo</h3>

              <p>
                Es una época interesante para recorrer la Puna, con
                condiciones que suelen ser más favorables que durante los
                extremos del verano y el invierno.
              </p>
            </article>

            <article>
              <span>INVIERNO</span>

              <h3>Junio a agosto</h3>

              <p>
                El paisaje puede ser espectacular, pero las temperaturas son
                más exigentes y pueden aparecer heladas, nieve y condiciones
                que requieran mayor preparación.
              </p>
            </article>

            <article className="pomez-season-featured">
              <span>PRIMAVERA</span>

              <h3>Septiembre a noviembre</h3>

              <p>
                Es otra de las épocas especialmente interesantes para
                recorrer la Puna, aunque el viento y los cambios de
                temperatura siguen formando parte del ambiente.
              </p>
            </article>

            <article>
              <span>VERANO</span>

              <h3>Diciembre a febrero</h3>

              <p>
                Las lluvias estivales pueden modificar caminos y accesos.
                En esta época es particularmente importante consultar las
                condiciones antes de emprender el recorrido.
              </p>
            </article>

          </div>

          <a
            href="/guia/mejor-epoca-catamarca"
            target="_blank"
            rel="noopener noreferrer"
            className="pomez-season-link"
          >
            Ver guía completa sobre cuándo viajar a Catamarca →
          </a>
        </section>


        {/* QUÉ LLEVAR */}

        <section className="pomez-tips">
          <div className="section-heading">
            <span className="section-kicker">PREPARAR LA EXCURSIÓN</span>

            <h2>Qué llevar a Campo de Piedra Pómez</h2>
          </div>

          <div className="pomez-tips-grid">

            <article>
              <strong>01</strong>
              <h3>Agua</h3>
              <p>
                Llevá suficiente agua para toda la jornada y mantené una
                hidratación constante.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Abrigo</h3>
              <p>
                Vestite por capas. El frío y el viento pueden aparecer incluso
                cuando el día comenzó soleado.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Protección solar</h3>
              <p>
                Protector solar, anteojos, gorra y protección para los labios
                son especialmente importantes en altura.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Calzado</h3>
              <p>
                Utilizá calzado cómodo y adecuado para caminar sobre terreno
                irregular.
              </p>
            </article>

            <article>
              <strong>05</strong>
              <h3>Comida</h3>
              <p>
                Es una excursión extensa. Consultá con el prestador qué
                alimentos incluye y qué conviene llevar.
              </p>
            </article>

            <article>
              <strong>06</strong>
              <h3>Batería</h3>
              <p>
                Llevá el teléfono cargado y, si disponés de una, una batería
                externa. No dependas de tener señal durante el recorrido.
              </p>
            </article>

          </div>
        </section>


        {/* CUIDADO DEL LUGAR */}

        <section className="pomez-care">
          <div>
            <span className="section-kicker">TURISMO RESPONSABLE</span>

            <h2>Un paisaje que debemos proteger</h2>
          </div>

          <div className="pomez-care-content">
            <p>
              La piedra pómez es frágil. Subirse a determinadas formaciones,
              romperlas o extraer fragmentos produce daños que no pueden
              repararse en una escala humana.
            </p>

            <p>
              Tampoco deben abrirse nuevas huellas con vehículos ni circular
              fuera de los sectores permitidos.
            </p>

            <p>
              Todo residuo generado durante la excursión debe regresar con el
              visitante.
            </p>

            <strong>
              La mejor fotografía del viaje no necesita dejar ninguna marca
              en el paisaje.
            </strong>
          </div>
        </section>


        {/* FAQ */}

        <section className="pomez-faq">
          <div className="section-heading">
            <span className="section-kicker">PREGUNTAS FRECUENTES</span>

            <h2>Antes de visitar Campo de Piedra Pómez</h2>
          </div>

          <div className="pomez-faq-grid">

            <article>
              <h3>¿Puedo ir con mi auto particular?</h3>
              <p>
                La visita al área protegida debe organizarse en vehículo 4x4,
                por caminos habilitados y con guía habilitado.
              </p>
            </article>

            <article>
              <h3>¿Puedo llegar caminando desde El Peñón?</h3>
              <p>
                No debe pensarse como una caminata convencional. Las
                distancias, la altura, el terreno y el aislamiento hacen
                necesaria una excursión organizada.
              </p>
            </article>

            <article>
              <h3>¿Hay señal de celular?</h3>
              <p>
                No debe darse por garantizada. En sectores alejados de la Puna
                la conectividad puede ser limitada o inexistente.
              </p>
            </article>

            <article>
              <h3>¿Se paga entrada?</h3>
              <p>
                El acceso al área puede ser arancelado. Conviene verificar el
                valor y las condiciones vigentes antes de viajar, ya que
                pueden modificarse.
              </p>
            </article>

            <article>
              <h3>¿Cuánto dura la excursión?</h3>
              <p>
                Depende del punto de partida y del circuito contratado.
                Desde El Peñón suele plantearse como una experiencia de varias
                horas y puede ocupar buena parte de la jornada.
              </p>
            </article>

            <article>
              <h3>¿Puedo visitar Piedra Pómez desde Fiambalá?</h3>
              <p>
                Existe una alternativa por Las Papas, pero es un recorrido
                diferente, mucho más extenso y sujeto a condiciones
                específicas. Debe organizarse con prestadores experimentados.
              </p>
            </article>

          </div>
        </section>


        {/* ANTOFAGASTA RELACIONADA */}

        <section className="pomez-related">
          <div>
            <span>SEGUÍ DESCUBRIENDO LA PUNA</span>

            <h2>Antofagasta de la Sierra</h2>

            <p>
              Piedra Pómez es solamente una parte de un territorio mucho más
              grande. Descubrí también volcanes, salares, lagunas, El Peñón,
              Antofalla y los grandes paisajes de la Puna catamarqueña.
            </p>

            <a
              href="/guia/antofagasta-de-la-sierra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver guía de Antofagasta de la Sierra →
            </a>
          </div>
        </section>


        {/* CTA */}

        <section className="pomez-final-cta">
          <div>
            <span>MT TOURS & TRANSFERS</span>

            <h2>¿Estás organizando tu viaje a la Puna?</h2>

            <p>
              Consultanos para organizar traslados y conectar las diferentes
              etapas de tu viaje por Catamarca.
            </p>
          </div>

          <a
            href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20un%20viaje%20al%20Campo%20de%20Piedra%20P%C3%B3mez."
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

export default GuiaCampoPomez;