import "../App.css"
import cuestaPortezuelo from "../assets/cuesta-portezuelo.jpg"
import portezueloMirador from "../assets/portezuelo-mirador.jpeg"
import portezueloCumbre from "../assets/portezuelo-cumbre.jpg"
import elRodeo from "../assets/el-rodeo.jpg"

function CircuitoIntegralCatamarca() {
  const title =
    "Circuito Integral de Catamarca | Excursión desde Catamarca Capital"

  const description =
    "Circuito Integral de Catamarca desde Capital: Cuesta del Portezuelo, Valle Viejo, Fray Mamerto Esquiú, Dique Las Pirquitas, La Puerta y El Rodeo. 220 km, 5 horas aprox. Desde $120.000 por persona, mínimo 2 pasajeros."

  const canonicalUrl =
    "https://mttransfers.com/excursiones/circuito-integral-catamarca"

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
          <a href="/traslados-catamarca" target="_blank" rel="noopener noreferrer">
            Transfers
          </a>
          <a href="/guia" target="_blank" rel="noopener noreferrer">Guía</a>
        </nav>

        <a
          className="whatsapp-button"
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20el%20Circuito%20Integral%20de%20Catamarca."
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
                rgba(0, 0, 0, 0.78) 0%,
                rgba(0, 0, 0, 0.48) 50%,
                rgba(0, 0, 0, 0.16) 100%
              ),
              url(${cuestaPortezuelo})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">VALLE CENTRAL · AMBATO</span>
            <h1>Circuito Integral de Catamarca</h1>
            <p>
              Una excursión desde Catamarca Capital para descubrir en un mismo
              recorrido paisajes de montaña, pueblos del Valle Central, historia,
              cultura y algunos de los rincones más representativos de la provincia.
            </p>

            <div className="tour-detail-meta">
              <span>⏱ 5 h aprox.</span>
              <span>🚗 220 km aprox.</span>
              <span>💰 $120.000 por persona · Mín. 2 pax</span>
              <span>📍 Salida desde Capital</span>
            </div>

            <a href="#reservar" className="button button-primary">
              Consultar disponibilidad
            </a>
          </div>
        </section>

        <section className="tour-detail-content">
          <div className="tour-detail-main">
            <span className="section-kicker">LA EXPERIENCIA</span>
            <h2>Una forma completa de conocer los alrededores de Catamarca Capital</h2>

            <p>
              El Circuito Integral de Catamarca está pensado para quienes quieren
              aprovechar su estadía y conocer varios de los paisajes y localidades
              cercanas a San Fernando del Valle de Catamarca en una sola experiencia.
            </p>

            <p>
              El recorrido combina la emblemática Cuesta del Portezuelo con sectores
              de Valle Viejo y Fray Mamerto Esquiú, el Dique Las Pirquitas y los
              paisajes serranos de La Puerta y El Rodeo. Es una propuesta ideal para
              una primera aproximación a la diversidad del Valle Central.
            </p>

            <p>
              A diferencia de una visita rápida a un único atractivo, este circuito
              permite observar cómo cambia el paisaje a medida que dejamos la ciudad:
              zonas urbanas y rurales, caminos serranos, vistas panorámicas, pueblos
              tradicionales y ambientes de montaña.
            </p>
          </div>

          <aside className="tour-detail-card" id="reservar">
            <span>DATOS DEL CIRCUITO</span>
            <h3>Circuito Integral</h3>
            <p><strong>Precio:</strong> $120.000 por persona</p>
            <p><strong>Mínimo:</strong> 2 pasajeros</p>
            <p><strong>Pasajero individual:</strong> consultar tarifa</p>
            <p><strong>Duración:</strong> 5 horas aprox.</p>
            <p><strong>Recorrido:</strong> 220 km aprox.</p>
            <p><strong>Salida:</strong> San Fernando del Valle de Catamarca</p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20el%20Circuito%20Integral%20de%20Catamarca."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              💬 Consultar por WhatsApp
            </a>

            <small>Atención personalizada · Consulta sin compromiso</small>
          </aside>
        </section>

        <section className="tour-info-section">
          <div className="tour-info-grid">
            <div className="tour-info-block">
              <span className="section-kicker">ITINERARIO</span>
              <h2>Qué lugares recorremos</h2>

              <div className="tour-timeline">
                <div className="tour-step">
                  <span>1</span>
                  <div>
                    <h3>Salida desde Catamarca Capital</h3>
                    <p>
                      Coordinamos el punto de encuentro en San Fernando del Valle de
                      Catamarca y comenzamos el recorrido hacia el sector de Valle Viejo.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>2</span>
                  <div>
                    <h3>Valle Viejo</h3>
                    <p>
                      Atravesamos uno de los departamentos que integran el Valle Central,
                      combinando localidades tradicionales, áreas rurales y el paisaje
                      que anticipa nuestro ingreso a la zona serrana.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>3</span>
                  <div>
                    <h3>Cuesta del Portezuelo</h3>
                    <p>
                      Llegamos a uno de los caminos más emblemáticos de Catamarca.
                      Su trazado asfaltado atraviesa la Sierra de Ancasti y ofrece una
                      sucesión de curvas y vistas panorámicas sobre el Valle Central.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>4</span>
                  <div>
                    <h3>Mirador · 1.070 m s. n. m.</h3>
                    <p>
                      Realizamos una parada en el tradicional mirador de la Cuesta del
                      Portezuelo, ubicado aproximadamente a 1.070 metros sobre el nivel
                      del mar. Es uno de los puntos clásicos para contemplar y fotografiar
                      el Valle Central.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>5</span>
                  <div>
                    <h3>Fray Mamerto Esquiú</h3>
                    <p>
                      Continuamos hacia el departamento Fray Mamerto Esquiú, una zona
                      vinculada a la historia, la identidad religiosa y los paisajes
                      tradicionales del Valle Central catamarqueño.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>6</span>
                  <div>
                    <h3>Dique Las Pirquitas</h3>
                    <p>
                      Visitamos uno de los grandes espejos de agua próximos a la Capital.
                      El entorno del dique permite disfrutar del paisaje serrano y realizar
                      una nueva parada panorámica durante el circuito.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>7</span>
                  <div>
                    <h3>La Puerta</h3>
                    <p>
                      Ingresamos al departamento Ambato y recorremos La Puerta, localidad
                      rodeada de vegetación y sierras que marca el cambio hacia un ambiente
                      más fresco y serrano.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>8</span>
                  <div>
                    <h3>El Rodeo</h3>
                    <p>
                      Llegamos a una de las villas turísticas tradicionales de Catamarca,
                      reconocida por su entorno serrano, sus calles tranquilas y su paisaje
                      característico de Ambato.
                    </p>
                  </div>
                </div>

                <div className="tour-step">
                  <span>9</span>
                  <div>
                    <h3>Regreso a Catamarca Capital</h3>
                    <p>
                      Después de recorrer los principales puntos del circuito iniciamos
                      el regreso hacia San Fernando del Valle de Catamarca.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tour-includes-card">
              <span className="section-kicker">INFORMACIÓN</span>
              <h3>Datos principales</h3>
              <ul>
                <li>✓ 220 km aprox. de recorrido total</li>
                <li>✓ 5 horas aprox.</li>
                <li>✓ Salida y regreso a Catamarca Capital</li>
                <li>✓ Precio: $120.000 por persona</li>
                <li>✓ Mínimo 2 pasajeros</li>
                <li>✓ Pasajero individual: consultar tarifa</li>
                <li>✓ Paradas panorámicas</li>
                <li>✓ Recorrido privado</li>
              </ul>

              <h3 className="tour-second-title">El servicio incluye</h3>
              <ul>
                <li>✓ Traslado ida y vuelta</li>
                <li>✓ Vehículo climatizado</li>
                <li>✓ Conductor profesional</li>
                <li>✓ Seguro correspondiente al servicio</li>
                <li>✓ Paradas durante el recorrido</li>
                <li>✓ Atención personalizada</li>
              </ul>

              <h3 className="tour-second-title">Recomendamos llevar</h3>
              <ul>
                <li>• Agua</li>
                <li>• Protector solar</li>
                <li>• Anteojos de sol</li>
                <li>• Calzado cómodo</li>
                <li>• Abrigo, especialmente fuera del verano</li>
                <li>• Cámara o teléfono con espacio para fotografías</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="tour-options-section">
          <div className="section-heading">
            <span className="section-kicker">CUesta DEL PORTEZUELO</span>
            <h2>Mirador incluido y cumbre opcional</h2>
            <p>
              El Circuito Integral contempla la visita al mirador tradicional.
              Si querés conocer todavía más de la Cuesta del Portezuelo, podemos
              coordinar previamente la continuación hacia la parte alta.
            </p>
          </div>

          <div className="tour-options-grid">
            <article className="tour-option-card">
              <span className="tour-option-label">INCLUIDO EN EL CIRCUITO</span>
              <h3>Mirador · 1.070 m s. n. m.</h3>
              <img
                src={portezueloMirador}
                alt="Mirador de la Cuesta del Portezuelo a 1070 metros de altura"
                style={{ width: "100%", borderRadius: "16px", marginBottom: "18px" }}
              />
              <p>
                Parada panorámica en uno de los lugares más fotografiados del Valle
                Central, con tiempo para disfrutar del paisaje y tomar fotografías.
              </p>
            </article>

            <article className="tour-option-card tour-option-featured">
              <span className="tour-option-label">⭐ OPCIONAL</span>
              <h3>Cumbre · hasta 1.680 m s. n. m.</h3>
              <img
                src={portezueloCumbre}
                alt="Cumbre de la Cuesta del Portezuelo a 1680 metros de altura"
                style={{ width: "100%", borderRadius: "16px", marginBottom: "18px" }}
              />
              <p>
                Para quienes quieran extender la experiencia, se puede coordinar la
                continuación por la cuesta hasta la zona alta, donde la ruta alcanza
                aproximadamente los 1.680 metros sobre el nivel del mar.
              </p>
              <div className="tour-option-note">
                La extensión hasta la cumbre es opcional y puede modificar la duración
                total del Circuito Integral. Se coordina previamente.
              </div>
            </article>
          </div>
        </section>

        <section className="tour-gallery-section">
          <div className="section-heading">
            <span className="section-kicker">PAISAJES</span>
            <h2>Del Valle Central a las sierras de Ambato</h2>
            <p>
              En pocas horas el recorrido permite combinar caminos de montaña,
              miradores, pueblos y ambientes serranos muy diferentes entre sí.
            </p>
          </div>

          <div className="tour-gallery-grid tour-gallery-portezuelo">
            <figure className="tour-gallery-main">
              <img src={cuestaPortezuelo} alt="Cuesta del Portezuelo en Catamarca" />
              <figcaption>
                <strong>Cuesta del Portezuelo</strong>
                <span>Uno de los caminos panorámicos más reconocidos de Catamarca.</span>
              </figcaption>
            </figure>

            <figure>
              <img src={portezueloMirador} alt="Mirador de la Cuesta del Portezuelo" />
              <figcaption>
                <strong>Mirador</strong>
                <span>Vista panorámica del Valle Central desde 1.070 m s. n. m.</span>
              </figcaption>
            </figure>

            <figure>
              <img src={elRodeo} alt="El Rodeo en Ambato Catamarca" />
              <figcaption>
                <strong>El Rodeo</strong>
                <span>Paisaje serrano y una de las villas turísticas tradicionales.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="tour-faq-section">
          <div className="section-heading">
            <span className="section-kicker">PREGUNTAS FRECUENTES</span>
            <h2>Antes de reservar el Circuito Integral</h2>
          </div>

          <div className="tour-faq-grid">
            <article className="tour-faq-card">
              <h3>¿Desde dónde sale la excursión?</h3>
              <p>
                La salida se coordina desde San Fernando del Valle de Catamarca.
                Consultanos al reservar para definir el punto de encuentro.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Cuánto dura el Circuito Integral?</h3>
              <p>
                La duración estimada es de 5 horas. Puede variar según las paradas,
                el tránsito, las condiciones del camino y el tiempo que dediquemos
                a cada punto del recorrido.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Cuántos kilómetros se recorren?</h3>
              <p>
                El circuito completo tiene aproximadamente 220 km, considerando
                salida, recorrido por los diferentes atractivos y regreso a Capital.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Cuál es el precio?</h3>
              <p>
                El precio publicado del Circuito Integral es de $120.000 por persona,
                con un mínimo de 2 pasajeros. Si viajás solo, consultanos la tarifa
                individual. Al reservar confirmamos disponibilidad y condiciones
                para la fecha elegida.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿La cumbre del Portezuelo está incluida?</h3>
              <p>
                El circuito contempla el mirador tradicional. La continuación hasta
                la parte alta, donde la ruta alcanza aproximadamente 1.680 m s. n. m.,
                es opcional y debe coordinarse previamente porque extiende el recorrido.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Es una excursión apta para familias?</h3>
              <p>
                Sí. Es un recorrido principalmente vehicular, con diferentes paradas.
                Si viajás con niños o adultos mayores, comentanos al reservar para
                organizar la experiencia de la manera más cómoda posible.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Qué pasa si las condiciones del camino no son adecuadas?</h3>
              <p>
                La realización del recorrido está sujeta a condiciones seguras de
                circulación. Si algún sector no pudiera realizarse, coordinaremos la
                mejor alternativa disponible.
              </p>
            </article>

            <article className="tour-faq-card">
              <h3>¿Conviene reservar con anticipación?</h3>
              <p>
                Sí, especialmente si ya tenés definida la fecha de tu viaje. De esa
                manera podemos confirmar disponibilidad y coordinar el horario de salida.
              </p>
            </article>
          </div>
        </section>

        <section className="tour-final-cta">
          <div className="tour-final-cta-content">
            <span className="section-kicker">DESCUBRÍ CATAMARCA</span>
            <h2>¿Querés hacer el Circuito Integral de Catamarca?</h2>
            <p>
              Contanos la fecha y cuántas personas viajan. Te ayudamos a organizar
              una excursión desde Catamarca Capital para conocer algunos de los
              paisajes más representativos del Valle Central y Ambato.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20reservar%20el%20Circuito%20Integral%20de%20Catamarca.%20Somos%20___%20personas%20y%20queremos%20viajar%20el%20___%2F___%2F___."
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

export default CircuitoIntegralCatamarca
