import "../App.css"

import rutaAdobe from "../assets/ruta-adobe.jpg"
import fiambala from "../assets/fiambala.jpg"
import rutaSeismiles from "../assets/ruta-seismiles.jpg"
import dunasTatonSaujil from "../assets/dunas-taton-saujil.jpeg"
import balconPissis from "../assets/balcon-pissis.jpg"
import lagunasAltoandinas from "../assets/lagunas-altoandinas.jpeg"

function FiambalaSeismiles() {
  const title = "Fiambalá y Ruta de los Seismiles en 4 días | MT Tours"
  const description = "Fiambalá y Ruta de los Seismiles desde San Fernando del Valle de Catamarca. 4 días y 3 noches con Ruta del Adobe, Dunas de Tatón, Termas de Fiambalá, Balcón del Pissis y lagunas altoandinas."
  const canonicalUrl = "https://mttransfers.com/excursiones/fiambala-ruta-seismiles-4-dias"

  document.title = title

  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement("link")
    canonical.rel = "canonical"
    document.head.appendChild(canonical)
  }
  canonical.href = canonicalUrl

  const setOpenGraph = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("property", property)
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", content)
  }

  setOpenGraph("og:title", title)
  setOpenGraph("og:description", description)
  setOpenGraph("og:url", canonicalUrl)
  setOpenGraph("og:type", "website")

  const whatsapp = "https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20disponibilidad%20para%20Fiambal%C3%A1%20y%20Ruta%20de%20los%20Seismiles%20de%204%20d%C3%ADas.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="/favicon.png"
            alt="MT Tours & Transfers"
            style={{ width: "48px", height: "48px", objectFit: "contain", flexShrink: 0 }}
          />
          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>
        </div>

        <nav className="nav nav-desktop">
          <a href="/">Inicio</a>
          <a href="/excursiones">Excursiones</a>
          <a href="/#planifica">Planificá</a>
          <a href="/traslados-catamarca" target="_blank" rel="noopener noreferrer">Transfers</a>
          <a href="/#guia-catamarca">Guía</a>
          <a href="/quienes-somos" target="_blank" rel="noopener noreferrer">Quiénes somos</a>
          <a href="/contacto" target="_blank" rel="noopener noreferrer">Contacto</a>
        </nav>

        <a className="whatsapp-button" href={whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </header>

      <main className="tour-detail-page">

        {/* HERO */}
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
              url(${rutaSeismiles})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">FIAMBALÁ · CORDILLERA · 4X4</span>
            <h1>Fiambalá y Ruta de los Seismiles desde San Fernando del Valle de Catamarca</h1>
            <p>
              Cuatro días para descubrir el oeste catamarqueño entre historia,
              dunas, aguas termales y la inmensidad de la Cordillera de los Andes.
            </p>

            <div className="tour-detail-meta">
              <span>📍 Tinogasta · Fiambalá · Cordillera</span>
              <span>🚙 Travesía de alta montaña</span>
              <span>⏱ 4 días · 3 noches</span>
              <span>🏨 Alojamiento + desayuno</span>
              <span>💰 $1.300.000 por persona</span>
            </div>

            <a href="#reservar" className="button button-primary">
              Consultar disponibilidad
            </a>
          </div>
        </section>

        {/* INTRODUCCIÓN */}
        <section className="tour-detail-content">
          <div className="tour-detail-main">
            <span className="section-kicker">CUATRO DÍAS EN EL OESTE CATAMARQUEÑO</span>
            <h2>De los pueblos de adobe a los gigantes de la Cordillera</h2>

            <p>
              Esta experiencia conecta algunos de los paisajes más representativos
              del oeste de Catamarca en un viaje de <strong>4 días y 3 noches</strong>.
            </p>

            <p>
              Salimos desde <strong>San Fernando del Valle de Catamarca</strong> rumbo
              a Tinogasta y Fiambalá, atravesando un territorio donde la historia,
              la arquitectura tradicional y el paisaje desértico se combinan
              constantemente.
            </p>

            <p>
              La <strong>Ruta del Adobe</strong> nos acerca al patrimonio histórico
              del valle antes de cambiar completamente de escenario y encontrarnos
              con las enormes dunas de Saujil y Tatón.
            </p>

            <p>
              Fiambalá suma otro contraste: las <strong>Termas de Fiambalá</strong>{" "}
              permiten disfrutar de aguas termales rodeadas por montaña antes de
              avanzar hacia la alta Cordillera.
            </p>

            <p>
              El gran cambio llega con la <strong>Ruta de los Seismiles</strong>,
              un corredor andino donde volcanes, lagunas, salares y colores minerales
              dominan el horizonte.
            </p>

            <p>
              Uno de los grandes momentos es el <strong>Balcón del Pissis</strong>,
              un escenario de alta montaña que permite experimentar la enorme escala
              de los Andes catamarqueños.
            </p>
          </div>

          <aside className="tour-detail-card" id="reservar">
            <span>FIAMBALÁ + SEISMILES</span>
            <h3>$1.300.000 por persona</h3>
            <p>Programa de 4 días y 3 noches por Tinogasta, Fiambalá y la Cordillera.</p>

            <ul>
              <li>✓ 4 días / 3 noches</li>
              <li>✓ Alojamiento incluido</li>
              <li>✓ Desayuno incluido</li>
              <li>✓ Traslados y excursiones del programa</li>
              <li>✓ Travesía de alta montaña</li>
              <li>✓ Guía baqueano</li>
              <li>✓ Seguro al viajero</li>
              <li>✓ Mínimo 2 pasajeros</li>
              <li>✓ Máximo 4 pasajeros por camioneta</li>
            </ul>

            <p>
              <strong>Operación:</strong>{" "}
              experiencia realizada por prestador local asociado especializado
              en recorridos de montaña.
            </p>

            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="tour-detail-whatsapp">
              💬 Consultar por WhatsApp
            </a>

            <small>Atención personalizada · Cupos sujetos a disponibilidad</small>
          </aside>
        </section>

        {/* LUGARES */}
        <section className="story-section">
          <div className="section-heading">
            <span className="section-kicker">LUGARES QUE VAMOS A DESCUBRIR</span>
            <h2>Cuatro días, paisajes completamente diferentes</h2>
            <p>
              Patrimonio, desierto, termas y alta montaña en una experiencia
              que muestra distintas caras del oeste catamarqueño.
            </p>
          </div>

          <div className="story-grid">

            <article className="story-card">
              <img src={rutaAdobe} alt="Ruta del Adobe entre Tinogasta y Fiambalá en Catamarca" />
              <div className="story-card-content">
                <span>HISTORIA · ARQUITECTURA · CULTURA</span>
                <h3>Ruta del Adobe</h3>
                <p>
                  Antes de llegar a los grandes paisajes cordilleranos,
                  el viaje comienza descubriendo parte de la historia del oeste catamarqueño.
                </p>
                <p>
                  La <strong>Ruta del Adobe</strong> recorre un corredor donde antiguas
                  construcciones realizadas con tierra forman parte de la identidad
                  histórica y cultural de la región.
                </p>
                <p>
                  Capillas, casonas y construcciones tradicionales muestran técnicas
                  adaptadas durante generaciones al clima seco del oeste.
                </p>
                <p>
                  El adobe no aparece solamente como material de construcción:
                  ayuda a comprender la relación entre las comunidades y el ambiente.
                </p>
              </div>
            </article>

            <article className="story-card">
              <img src={fiambala} alt="Fiambalá en el oeste de Catamarca" />
              <div className="story-card-content">
                <span>OASIS · MONTAÑA · CORDILLERA</span>
                <h3>Fiambalá</h3>
                <p>
                  <strong>Fiambalá</strong> es una de las grandes puertas de entrada
                  a la Cordillera catamarqueña.
                </p>
                <p>
                  Su entorno combina montañas áridas, caminos históricos y una geografía
                  que anticipa los enormes paisajes que aparecen al avanzar hacia el oeste.
                </p>
                <p>
                  Su ubicación permite conectar termas, dunas y recorridos de alta montaña
                  dentro de una misma experiencia.
                </p>
              </div>
            </article>

            <article className="story-card">
              <img src={dunasTatonSaujil} alt="Dunas de Tatón y Saujil cerca de Fiambalá Catamarca" />
              <div className="story-card-content">
                <span>ARENA · DESIERTO · AVENTURA</span>
                <h3>Dunas de Saujil y Tatón</h3>
                <p>
                  El paisaje cambia completamente cuando nos acercamos a las grandes
                  extensiones de arena de la región.
                </p>
                <p>
                  Las <strong>Dunas de Saujil y Tatón</strong> forman enormes mantos
                  modelados continuamente por el viento.
                </p>
                <p>
                  Sus curvas, crestas y pendientes producen un escenario donde las
                  formas parecen cambiar según la posición del sol.
                </p>
                <p>
                  Es uno de los grandes contrastes del viaje: del patrimonio de adobe
                  a un territorio dominado por arena y montaña.
                </p>
              </div>
            </article>

            <article className="story-card">
              <img src={fiambala} alt="Termas de Fiambalá en Catamarca" />
              <div className="story-card-content">
                <span>AGUAS TERMALES · MONTAÑA</span>
                <h3>Termas de Fiambalá</h3>
                <p>
                  Después de los paisajes áridos aparece una experiencia completamente diferente.
                </p>
                <p>
                  Las <strong>Termas de Fiambalá</strong> se encuentran en un entorno
                  serrano donde diferentes piscinas aprovechan aguas termales naturales.
                </p>
                <p>
                  El paisaje de montaña convierte la visita en mucho más que una parada
                  para descansar.
                </p>
                <p>
                  También permite bajar el ritmo antes de la gran jornada de alta montaña.
                </p>
              </div>
            </article>

            <article className="story-card">
              <img src={rutaSeismiles} alt="Ruta de los Seismiles en la Cordillera de Catamarca" />
              <div className="story-card-content">
                <span>CORDILLERA · VOLCANES · ALTURA</span>
                <h3>Ruta de los Seismiles</h3>
                <p>
                  La jornada cordillerana nos lleva hacia uno de los territorios
                  más espectaculares del oeste de Catamarca.
                </p>
                <p>
                  La <strong>Ruta de los Seismiles</strong> atraviesa un corredor andino
                  rodeado por algunos de los grandes volcanes de la región.
                </p>
                <p>
                  A medida que ganamos altura, el paisaje se vuelve cada vez más abierto,
                  mineral y extremo.
                </p>
                <p>
                  Montañas de diferentes tonalidades, vegas, salares y volcanes hacen
                  que el propio camino sea parte fundamental de la experiencia.
                </p>
              </div>
            </article>

            <article className="story-card">
              <img src={balconPissis} alt="Balcón del Pissis en Catamarca" />
              <div className="story-card-content">
                <span>ALTA MONTAÑA · MIRADOR NATURAL</span>
                <h3>Balcón del Pissis</h3>
                <p>
                  Uno de los grandes objetivos de la jornada es alcanzar
                  el <strong>Balcón del Pissis</strong>.
                </p>
                <p>
                  El recorrido llega a un sector de aproximadamente{" "}
                  <strong>4.550 metros sobre el nivel del mar</strong>.
                </p>
                <p>
                  Desde este entorno aparecen volcanes, lagunas y superficies minerales
                  que cambian de color según la luz.
                </p>
                <p>
                  Llegar hasta aquí permite experimentar directamente la altura,
                  el silencio y la inmensidad de los Andes catamarqueños.
                </p>
              </div>
            </article>

            <article className="story-card">
              <img src={lagunasAltoandinas} alt="Lagunas altoandinas en la Cordillera de Catamarca" />
              <div className="story-card-content">
                <span>AGUA · VOLCANES · CORDILLERA</span>
                <h3>Lagunas altoandinas</h3>
                <p>
                  En medio de un territorio dominado por roca, volcanes y aridez
                  aparecen cuerpos de agua que transforman completamente el paisaje.
                </p>
                <p>
                  Las <strong>lagunas altoandinas</strong> generan algunos de los
                  contrastes visuales más extraordinarios de la Ruta de los Seismiles.
                </p>
                <p>
                  Los tonos azules del agua se combinan con montañas ocres, rojizas
                  y grises mientras los volcanes dominan el horizonte.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* PROGRAMA */}
        <section className="tour-detail-content">
          <div className="tour-detail-main">
            <span className="section-kicker">PROGRAMA DE 4 DÍAS</span>
            <h2>Historia, dunas, termas y alta montaña</h2>
            <p>
              El programa distribuye la experiencia durante <strong>4 días y 3 noches</strong>,
              combinando recorridos culturales y naturales con una jornada dedicada
              a la Cordillera.
            </p>
            <p>
              El orden puede modificarse por condiciones meteorológicas, estado de los
              caminos, seguridad, disponibilidad de los atractivos o decisiones operativas.
            </p>

            <div style={{ marginTop: "34px", paddingTop: "28px", borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
              <span className="section-kicker">DÍA 1</span>
              <h3>San Fernando del Valle de Catamarca, Ruta del Adobe y Tinogasta</h3>
              <p>
                Comenzamos desde <strong>San Fernando del Valle de Catamarca</strong>{" "}
                rumbo al oeste de la provincia.
              </p>
              <p>
                Durante la jornada nos introducimos en el corredor histórico de la{" "}
                <strong>Ruta del Adobe</strong>, descubriendo construcciones y paisajes
                característicos de la zona de Tinogasta.
              </p>
              <p>
                La jornada finaliza en la zona de <strong>Tinogasta</strong>,
                donde se realiza el alojamiento.
              </p>
            </div>

            <div style={{ marginTop: "34px", paddingTop: "28px", borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
              <span className="section-kicker">DÍA 2</span>
              <h3>Dunas de Saujil y Tatón + Termas de Fiambalá</h3>
              <p>
                El segundo día está dedicado a dos paisajes completamente diferentes.
              </p>
              <p>
                Primero nos acercamos a las <strong>Dunas de Saujil y Tatón</strong>,
                donde enormes acumulaciones de arena forman uno de los escenarios
                desérticos más llamativos de la región.
              </p>
              <p>
                Después continuamos hacia <strong>Fiambalá</strong> para disfrutar
                del entorno de sus conocidas termas.
              </p>
            </div>

            <div style={{ marginTop: "34px", paddingTop: "28px", borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
              <span className="section-kicker">DÍA 3</span>
              <h3>Ruta de los Seismiles y Balcón del Pissis</h3>
              <p>
                El tercer día representa la gran jornada de alta montaña del programa.
              </p>
              <p>
                Avanzamos por la <strong>Ruta de los Seismiles</strong>, rodeados
                por volcanes y enormes extensiones andinas.
              </p>
              <p>
                La travesía continúa hacia el <strong>Balcón del Pissis</strong>,
                alcanzando un sector de aproximadamente 4.550 metros sobre el nivel del mar.
              </p>
              <p>
                Durante la jornada aparecen lagunas altoandinas, salares y paisajes
                volcánicos.
              </p>
            </div>

            <div style={{ marginTop: "34px", paddingTop: "28px", borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
              <span className="section-kicker">DÍA 4</span>
              <h3>Regreso hacia San Fernando del Valle de Catamarca</h3>
              <p>
                Después de tres jornadas recorriendo el oeste y la Cordillera,
                comenzamos el regreso hacia Catamarca Capital.
              </p>
              <p>
                El itinerario contempla el regreso por el corredor hacia{" "}
                <strong>Aimogasta</strong> antes de continuar hacia
                San Fernando del Valle de Catamarca.
              </p>
              <p>
                Finalizamos así cuatro días que combinan patrimonio,
                desierto, termas y alta montaña.
              </p>
            </div>
          </div>

          <aside className="tour-detail-card">
            <span>DATOS DE LA EXPERIENCIA</span>
            <h3>Fiambalá + Ruta de los Seismiles</h3>

            <ul>
              <li>✓ 4 días / 3 noches</li>
              <li>✓ Mínimo 2 pasajeros</li>
              <li>✓ Máximo 4 pasajeros por camioneta</li>
              <li>✓ Alojamiento incluido</li>
              <li>✓ Desayuno incluido</li>
              <li>✓ Traslados del programa</li>
            </ul>

            <h3>El programa incluye</h3>

            <ul>
              <li>✓ Traslados y excursiones indicadas</li>
              <li>✓ Vehículo preparado para recorridos de altura</li>
              <li>✓ Guía baqueano permanente</li>
              <li>✓ Equipamiento de seguridad</li>
              <li>✓ Oxígeno para asistencia en altura</li>
              <li>✓ Seguro de asistencia al viajero</li>
              <li>✓ 3 noches de alojamiento</li>
              <li>✓ Desayuno durante la estadía</li>
            </ul>

            <p><strong>Tarifa MT:</strong></p>
            <h3>$1.300.000 por persona</h3>
            <p>Tarifa publicada para un mínimo de 2 pasajeros.</p>

            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="tour-detail-whatsapp">
              💬 Consultar disponibilidad
            </a>
          </aside>
        </section>

        {/* ALOJAMIENTO */}
        <section className="tour-detail-content">
          <div className="tour-detail-main">
            <span className="section-kicker">ALOJAMIENTO INCLUIDO</span>
            <h2>Tres noches para disfrutar el recorrido con más tiempo</h2>
            <p>
              El programa contempla <strong>3 noches de alojamiento con desayuno</strong>,
              permitiendo distribuir los recorridos durante cuatro días.
            </p>
            <p>
              Esto permite dedicar jornadas diferentes a la Ruta del Adobe,
              las dunas, las termas y la Cordillera.
            </p>
            <p>
              El establecimiento utilizado puede variar según disponibilidad y fecha del viaje.
              Los detalles definitivos se confirman al momento de la reserva.
            </p>
          </div>

          <aside className="tour-detail-card">
            <span>TU ESTADÍA</span>
            <h3>Alojamiento + desayuno</h3>
            <ul>
              <li>✓ 3 noches</li>
              <li>✓ Desayuno incluido</li>
              <li>✓ Alojamiento según disponibilidad</li>
              <li>✓ Coordinado dentro del programa</li>
            </ul>
            <p>
              Al consultar disponibilidad te informamos las condiciones y alojamiento
              previsto para las fechas seleccionadas.
            </p>
          </aside>
        </section>

        {/* ALTURA */}
        <section className="tour-detail-content">
          <div className="tour-detail-main">
            <span className="section-kicker">ALTA MONTAÑA</span>
            <h2>El Balcón del Pissis requiere viajar respetando la altura</h2>
            <p>
              La jornada de la Ruta de los Seismiles se desarrolla en un ambiente
              muy diferente al de Catamarca Capital y las localidades del valle.
            </p>
            <p>
              El recorrido alcanza sectores de aproximadamente{" "}
              <strong>4.550 metros sobre el nivel del mar</strong>.
            </p>
            <p>
              La altura, la amplitud térmica, el viento y la radiación solar requieren
              viajar con tranquilidad y respetar las indicaciones del guía.
            </p>
            <p>
              Recomendamos una buena hidratación, vestimenta adecuada para cambios
              de temperatura y evitar esfuerzos innecesarios en las paradas de mayor altitud.
            </p>
            <p>
              Las personas con condiciones de salud que puedan verse afectadas por la altura
              deberían consultar previamente con su profesional de salud.
            </p>
          </div>

          <aside className="tour-detail-card">
            <span>RECOMENDACIONES</span>
            <h3>Qué llevar</h3>
            <ul>
              <li>✓ Ropa de abrigo</li>
              <li>✓ Vestimenta en capas</li>
              <li>✓ Protector solar</li>
              <li>✓ Anteojos de sol</li>
              <li>✓ Gorra o sombrero</li>
              <li>✓ Calzado cómodo</li>
              <li>✓ Agua</li>
              <li>✓ Medicación personal</li>
              <li>✓ Cámara o celular con batería</li>
            </ul>

            <h3>Importante</h3>
            <p>
              La jornada cordillerana puede modificarse por condiciones meteorológicas,
              nieve, estado de caminos, altura, accesos o cuestiones de seguridad.
            </p>
          </aside>
        </section>

        {/* OPERACIÓN */}
        <section className="tour-detail-content">
          <div className="tour-detail-main">
            <span className="section-kicker">EXPERIENCIA CON OPERADOR ESPECIALIZADO</span>
            <h2>La Cordillera requiere conocimiento y preparación</h2>
            <p>
              La jornada de alta montaña se desarrolla en un territorio donde las
              distancias, la altura y las condiciones climáticas requieren una
              operación especializada.
            </p>
            <p>
              Por este motivo, esta experiencia es realizada por un{" "}
              <strong>
                prestador local asociado especializado en recorridos por la Cordillera catamarqueña
              </strong>.
            </p>
            <p>
              El servicio contempla vehículos preparados, guía baqueano,
              equipamiento para altura y asistencia durante el programa.
            </p>
            <p>
              Desde <strong>MT Tours & Transfers</strong> realizamos la comercialización
              y coordinación de la experiencia.
            </p>
          </div>

          <aside className="tour-detail-card">
            <span>MODALIDAD</span>
            <h3>Grupos reducidos</h3>
            <ul>
              <li>✓ Mínimo 2 pasajeros</li>
              <li>✓ Máximo 4 pasajeros por camioneta</li>
              <li>✓ Vehículo preparado para montaña</li>
              <li>✓ Guía baqueano</li>
              <li>✓ Atención personalizada</li>
            </ul>
          </aside>
        </section>

        {/* FAQ */}
        <section className="tour-faq-section">
          <div className="section-heading">
            <span className="section-kicker">PREGUNTAS FRECUENTES</span>
            <h2>Fiambalá y Ruta de los Seismiles</h2>
            <p>Información importante para organizar cuatro días por el oeste de Catamarca.</p>
          </div>

          <div className="tour-faq-grid">
            <article className="tour-faq-card">
              <h3>¿Cuánto cuesta la experiencia?</h3>
              <p>
                La tarifa publicada por MT Tours & Transfers es de{" "}
                <strong>$1.300.000 por persona</strong> para un mínimo de 2 pasajeros.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Cuántos días dura?</h3>
              <p>La experiencia tiene una duración de <strong>4 días y 3 noches</strong>.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Desde dónde comienza?</h3>
              <p>
                El programa está planteado desde{" "}
                <strong>San Fernando del Valle de Catamarca</strong> hacia el oeste provincial.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿El alojamiento está incluido?</h3>
              <p>
                Sí. Contempla <strong>3 noches de alojamiento con desayuno</strong>.
                El establecimiento se confirma según disponibilidad.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Se visita la Ruta del Adobe?</h3>
              <p>Sí. La primera jornada incorpora la <strong>Ruta del Adobe</strong>.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Se visitan las Dunas de Tatón?</h3>
              <p>Sí. Se recorre el paisaje de dunas de la zona de <strong>Saujil y Tatón</strong>.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Se visitan las Termas de Fiambalá?</h3>
              <p>Sí. El programa contempla la visita a las <strong>Termas de Fiambalá</strong>.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Se recorre la Ruta de los Seismiles?</h3>
              <p>Sí. El tercer día está dedicado a una jornada de alta montaña por la <strong>Ruta de los Seismiles</strong>.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Se llega al Balcón del Pissis?</h3>
              <p>
                El programa contempla la travesía hacia el <strong>Balcón del Pissis</strong>,
                sujeto a caminos, clima, accesos y seguridad.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿A qué altura se llega?</h3>
              <p>
                Pueden alcanzarse sectores de aproximadamente{" "}
                <strong>4.550 metros sobre el nivel del mar</strong>.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Hay oxígeno disponible?</h3>
              <p>El servicio contempla equipamiento de asistencia para altura, incluyendo oxígeno.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿El seguro está incluido?</h3>
              <p>Sí. El programa contempla <strong>seguro de asistencia al viajero</strong>.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Cuántas personas viajan por camioneta?</h3>
              <p>La modalidad contempla un máximo de <strong>4 pasajeros por camioneta</strong>.</p>
            </article>

            <article className="tour-faq-card">
              <h3>¿El recorrido puede cambiar?</h3>
              <p>
                Sí. El clima, el estado de caminos, la nieve, los accesos y la seguridad
                pueden hacer necesario adaptar el recorrido.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Quién realiza la experiencia?</h3>
              <p>
                La operación es realizada por un <strong>prestador local asociado</strong>.
                MT Tours & Transfers realiza la comercialización y coordinación.
              </p>
            </article>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="tour-final-cta">
          <div className="tour-final-cta-content">
            <span className="section-kicker">DESCUBRÍ EL OESTE CATAMARQUEÑO</span>
            <h2>Cuatro días entre adobe, dunas, termas y volcanes de los Andes</h2>
            <p>
              Tinogasta, Fiambalá, Ruta del Adobe, Dunas de Tatón,
              Termas de Fiambalá, Ruta de los Seismiles y Balcón del Pissis
              en una experiencia de cuatro días.
            </p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button button-primary">
              Consultar disponibilidad por WhatsApp
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <img
                src="/favicon.png"
                alt="MT Tours & Transfers"
                style={{ width: "48px", height: "48px", objectFit: "contain", flexShrink: 0 }}
              />
              <div>
                <strong>TOURS & TRANSFERS</strong>
                <small>Catamarca, Argentina</small>
              </div>
            </div>
            <p>
              Descubrí, planificá y viví Catamarca con experiencias y traslados pensados para vos.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explorá</h4>
            <a href="/excursiones" target="_blank" rel="noopener noreferrer">Excursiones</a>
          </div>

          <div className="footer-column">
            <h4>Planificá</h4>
            <a href="/catamarca-1-dia" target="_blank" rel="noopener noreferrer">Catamarca en 1 día</a>
            <a href="/catamarca-2-dias" target="_blank" rel="noopener noreferrer">Catamarca en 2 días</a>
            <a href="/catamarca-3-dias-o-mas" target="_blank" rel="noopener noreferrer">Catamarca en 3 días o más</a>
            <a href="/#planifica">Armá tu viaje</a>
          </div>

          <div className="footer-column">
            <h4>MT</h4>
            <a href="/traslados-catamarca" target="_blank" rel="noopener noreferrer">Transfers</a>
            <a href="/guia" target="_blank" rel="noopener noreferrer">Guía de Catamarca</a>
            <a href="/quienes-somos" target="_blank" rel="noopener noreferrer">Quiénes somos</a>
            <a href="/contacto" target="_blank" rel="noopener noreferrer">Contacto</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MT Tours & Transfers</span>
          <span>Catamarca, Argentina</span>
        </div>
      </footer>

    </div>
  )
}

export default FiambalaSeismiles
