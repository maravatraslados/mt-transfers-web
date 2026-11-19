import { useEffect } from "react"
import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { wa, excursiones } from "../laRiojaData"
import catamarcaImg from "../assets/capital-catamarca.jpeg"
import fiambalaImg from "../assets/fiambala.jpg"

const PATH = "/traslado-aeropuerto-la-rioja-catamarca-fiambala"
const title = "Traslado Aeropuerto La Rioja a Catamarca, Fiambalá y todo el NOA"
const description =
  "Traslado privado con chofer desde y hacia el Aeropuerto de La Rioja: Catamarca, Fiambalá, Chilecito, Talampaya y más. Reservá por WhatsApp y consultá el precio."

const consultar = (destino) =>
  wa(`Hola, quiero consultar el precio de un traslado: ${destino}.`)

const WHATSAPP_GENERAL = wa(
  "Hola, quiero consultar el precio de un traslado desde/hacia el Aeropuerto de La Rioja.",
)

const principales = [
  {
    img: catamarcaImg,
    alt: "Plaza y centro de San Fernando del Valle de Catamarca",
    kicker: "EL MÁS PEDIDO",
    h: "Aeropuerto La Rioja → Catamarca",
    p: "Directo a tu hotel o domicilio en San Fernando del Valle de Catamarca. Unas 2 horas de viaje por la Ruta 38, sin esperas ni combinaciones.",
    bullets: ["Chofer en el aeropuerto", "Puerta a puerta", "Ida, vuelta o ida y vuelta"],
    destino: "Aeropuerto La Rioja → Catamarca",
  },
  {
    img: fiambalaImg,
    alt: "Fiambalá, Catamarca",
    kicker: "TERMAS, VIÑEDOS Y SEISMILES",
    h: "Aeropuerto La Rioja → Fiambalá",
    p: "Llegá a Fiambalá sin armar escalas: termas, dunas, viñedos y la ruta de los Seismiles te esperan. Coordinamos el horario según tu vuelo.",
    bullets: ["Servicio privado", "Equipaje sin problema", "Horario según tu vuelo"],
    destino: "Aeropuerto La Rioja → Fiambalá",
  },
]

const otros = [
  ["Aeropuerto ↔ Hoteles de La Rioja capital", "Unos 15 a 20 minutos al centro. Te esperamos al aterrizar y te dejamos en la puerta."],
  ["Catamarca o Fiambalá → Aeropuerto La Rioja", "Para tu vuelo de regreso: calculamos la salida para que llegues con tiempo y sin apuro."],
  ["Aeropuerto → Chilecito", "Cuesta de Miranda, cablecarril y Cristo Redentor. Directo desde el aeropuerto o con paseo incluido."],
  ["Aeropuerto → Talampaya y Valle de la Luna", "Te llevamos, esperamos mientras hacés la visita y volvemos."],
  ["La Rioja → Tucumán y otras ciudades del NOA", "Viajes interprovinciales con chofer, según fecha y disponibilidad."],
  ["Recorrido a medida", "Varias paradas, otro destino o un horario particular: lo armamos con vos."],
]

const beneficios = [
  ["Te esperamos en el aeropuerto", "El chofer te recibe al aterrizar. Sin buscar remises ni depender de aplicaciones que en La Rioja no siempre funcionan."],
  ["Precio cerrado antes de viajar", "Consultás, te confirmamos el valor y sabés qué vas a pagar antes de salir de tu casa."],
  ["Seguimos tu horario", "Coordinamos el servicio según tu vuelo para que nadie te espere de más ni tengas que apurarte."],
  ["Servicio privado", "Viajás solo con quienes vos elijas, con equipaje y a tu ritmo. Sin paradas de otros pasajeros."],
  ["Seña del 10 % y cancelación gratuita", "Reservás con una seña del 10 % y, si cambian tus planes, la cancelación no tiene costo."],
  ["Todos los medios de pago", "Aceptamos todos los medios de pago para que reservar sea simple."],
]

const perfiles = [
  ["Turistas y parejas", "Aterrizás y arrancás tus vacaciones sin vueltas."],
  ["Familias", "Más espacio y comodidad para viajar con equipaje y chicos."],
  ["Grupos de amigos", "Una sola unidad para todos, sin repartirse en varios autos."],
  ["Empresas y profesionales", "Traslados de personal, visitantes y ejecutivos, con servicios programados."],
  ["Agencias de viajes", "Traslados confiables para tus pasajeros, coordinados de punta a punta."],
  ["Viajeros que combinan destinos", "La Rioja, Catamarca y Fiambalá en un mismo viaje."],
]

const pasos = [
  ["01", "Nos escribís por WhatsApp", "Recorrido, fecha, horario de vuelo, cantidad de pasajeros y equipaje."],
  ["02", "Te pasamos el precio", "Revisamos disponibilidad, elegimos la unidad y te confirmamos el valor."],
  ["03", "Reservás con una seña del 10 %", "Aceptamos todos los medios de pago. Cancelación gratuita."],
  ["04", "Te esperamos en el aeropuerto", "Tu chofer está en el punto acordado y te lleva a destino."],
]

const faq = [
  [
    "¿Cuánto cuesta el traslado desde el Aeropuerto de La Rioja?",
    "El precio depende del destino, la fecha y la cantidad de pasajeros. Escribinos por WhatsApp con tu recorrido y te pasamos el valor al instante.",
  ],
  [
    "¿Hacen el traslado del Aeropuerto de La Rioja a Catamarca?",
    "Sí. Te llevamos hasta tu hotel o domicilio en San Fernando del Valle de Catamarca. El viaje es de unos 150 km y dura aproximadamente 2 horas.",
  ],
  [
    "¿Pueden llevarme a Fiambalá directo desde el aeropuerto?",
    "Sí. Coordinamos el traslado privado desde el Aeropuerto de La Rioja hasta Fiambalá y también el regreso al aeropuerto para tu vuelo.",
  ],
  [
    "¿Cuánto tarda el traslado al centro de La Rioja?",
    "El aeropuerto está a pocos kilómetros de la ciudad: son unos 15 a 20 minutos hasta el centro y los hoteles.",
  ],
  [
    "¿Hay Uber o aplicaciones de transporte en La Rioja?",
    "No siempre están disponibles. Por eso conviene reservar tu traslado antes de viajar: así tenés a tu chofer esperándote al aterrizar.",
  ],
  [
    "¿Qué pasa si mi vuelo se demora?",
    "Coordinamos el servicio según el horario de tu vuelo. Avisanos por WhatsApp si hay cambios y ajustamos la recepción.",
  ],
  [
    "¿Con cuánta anticipación tengo que reservar?",
    "Cuanto antes mejor, sobre todo en temporada alta y para recorridos largos. Con tu fecha y horario de vuelo confirmamos disponibilidad.",
  ],
  [
    "¿Cómo se paga y cómo se reserva?",
    "Se reserva con una seña del 10 % y aceptamos todos los medios de pago. La cancelación es gratuita.",
  ],
  [
    "¿Puedo viajar con equipaje y niños?",
    "Sí, se puede viajar con equipaje. No contamos con sillas para niños, por lo que conviene llevar la propia si viajás con menores.",
  ],
  [
    "¿Hacen traslados para grupos o empresas?",
    "Sí. Para grupos grandes y empresas coordinamos una unidad acorde a la cantidad de pasajeros y podemos organizar servicios programados.",
  ],
]

function TrasladoAeropuertoLaRiojaCatamarcaFiambala() {
  // Título, descripción y canonical se fijan al renderizar (no en useEffect):
  // el prerenderizado no ejecuta efectos y, si no, la página sale con el título de la home.
  setSeo({ title, description, path: PATH })

  useEffect(() => {
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Traslado Aeropuerto La Rioja a Catamarca, Fiambalá y el NOA",
        serviceType: "Traslado privado con chofer desde y hacia el aeropuerto",
        description,
        provider: {
          "@type": "TravelAgency",
          name: "MT Tours & Transfers",
          url: "https://mttransfers.com/",
          telephone: "+54 9 383 469-6065",
        },
        areaServed: ["La Rioja", "Catamarca", "Fiambalá", "Chilecito", "Noroeste Argentino"],
        url: "https://mttransfers.com" + PATH,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ]

    let script = document.querySelector('script[data-page="traslado-aeropuerto-la-rioja-catamarca-fiambala"]')
    if (!script) {
      script = document.createElement("script")
      script.type = "application/ld+json"
      script.dataset.page = "traslado-aeropuerto-la-rioja-catamarca-fiambala"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    return () => {
      script?.remove()
    }
  }, [])

  return (
    <main className="group-transport-page rj-page">
      <SiteHeader />

      {/* HERO */}
      <section className="rj-hero">
        <div className="rj-hero-content">
          <span className="rj-kicker">TRASLADOS DESDE EL AEROPUERTO DE LA RIOJA</span>
          <h1>
            Aterrizás en La Rioja y te llevamos a <em>Catamarca, Fiambalá</em> y donde quieras
          </h1>
          <p>
            Traslado privado con chofer, puerta a puerta, coordinado con el horario de tu vuelo.
            Sin esperas, sin combinaciones y con el precio confirmado antes de viajar.
          </p>
          <div className="rj-hero-actions">
            <a className="rj-btn-primary" href={WHATSAPP_GENERAL} target="_blank" rel="noopener noreferrer">
              Consultar precio
            </a>
            <a className="rj-btn-ghost" href="#destinos">Ver destinos</a>
          </div>
          <ul className="rj-hero-points">
            <li>✓ Chofer en el aeropuerto</li>
            <li>✓ Seña del 10 %</li>
            <li>✓ Cancelación gratuita</li>
            <li>✓ Todos los medios de pago</li>
          </ul>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="rj-intro">
        <div>
          <span className="rj-kicker rj-kicker-dark">LLEGAR SIN INCERTIDUMBRE</span>
          <h2>Del aeropuerto a tu destino, sin improvisar</h2>
          <p>
            El Aeropuerto de La Rioja es la puerta de entrada al NOA, pero desde ahí los destinos
            quedan lejos y el transporte público es limitado. Reservar tu traslado antes de viajar
            te asegura un chofer esperándote cuando aterrizás.
          </p>
          <p>
            Hacemos el recorrido en los dos sentidos: del aeropuerto a tu alojamiento, y de tu
            alojamiento al aeropuerto para volver a casa a tiempo.
          </p>
          <a className="rj-btn-primary rj-btn-inline" href={WHATSAPP_GENERAL} target="_blank" rel="noopener noreferrer">
            Consultar precio
          </a>
        </div>
        <div className="rj-stats">
          <div><strong>Ida y vuelta</strong><span>desde y hacia el aeropuerto</span></div>
          <div><strong>Privado</strong><span>solo con quienes vos elijas</span></div>
          <div><strong>NOA</strong><span>La Rioja, Catamarca y más</span></div>
        </div>
      </section>

      {/* DESTINOS PRINCIPALES */}
      <section id="destinos" className="rj-destinos">
        <div className="rj-heading">
          <span className="rj-kicker">DESTINOS MÁS PEDIDOS</span>
          <h2>Elegí tu recorrido y consultá el precio</h2>
          <p>Te respondemos por WhatsApp con el valor y la disponibilidad para tu fecha.</p>
        </div>
        <div className="rj-featured">
          {principales.map((d) => (
            <article key={d.h}>
              <img src={d.img} alt={d.alt} loading="lazy" />
              <div className="rj-featured-body">
                <span className="rj-tag">{d.kicker}</span>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
                <ul>
                  {d.bullets.map((b) => (
                    <li key={b}>✓ {b}</li>
                  ))}
                </ul>
                <a className="rj-btn-primary" href={consultar(d.destino)} target="_blank" rel="noopener noreferrer">
                  Consultar precio
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="rj-others">
          {otros.map(([h, p]) => (
            <article key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
              <a href={consultar(h)} target="_blank" rel="noopener noreferrer">Consultar precio →</a>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="rj-benefits">
        <div className="rj-heading rj-heading-dark">
          <span className="rj-kicker rj-kicker-dark">POR QUÉ RESERVAR CON NOSOTROS</span>
          <h2>Un traslado simple, seguro y sin sorpresas</h2>
        </div>
        <div className="rj-benefits-grid">
          {beneficios.map(([h, p]) => (
            <article key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="rj-who">
        <div className="rj-heading">
          <span className="rj-kicker">PARA TODO TIPO DE VIAJERO</span>
          <h2>Un servicio para cada necesidad</h2>
        </div>
        <div className="rj-who-grid">
          {perfiles.map(([h, p]) => (
            <article key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="rj-steps">
        <div className="rj-heading rj-heading-dark">
          <span className="rj-kicker rj-kicker-dark">CÓMO FUNCIONA</span>
          <h2>Reservá en cuatro pasos</h2>
        </div>
        <div className="rj-steps-grid">
          {pasos.map(([n, h, p]) => (
            <article key={n}>
              <strong>{n}</strong>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMBINAR CON EXCURSIÓN */}
      <section className="rj-excursions">
        <div className="rj-heading">
          <span className="rj-kicker">APROVECHÁ EL VIAJE</span>
          <h2>Combiná tu traslado con una excursión desde La Rioja</h2>
          <p>
            Si vas a estar en La Rioja, podés sumar un paseo privado con chofer y llegar al
            aeropuerto o salir desde él en un solo servicio.
          </p>
        </div>
        <div className="rj-excursions-grid">
          {excursiones.map((e) => (
            <a key={e.slug} href={e.path}>
              <span>{e.kicker}</span>
              <h3>{e.nombre}</h3>
              <p>{e.resumen}</p>
              <em>Ver excursión →</em>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rj-faq">
        <div className="rj-heading">
          <span className="rj-kicker">PREGUNTAS FRECUENTES</span>
          <h2>Todo lo que querés saber antes de reservar</h2>
        </div>
        <div className="rj-faq-grid">
          {faq.map(([q, a]) => (
            <article key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="rj-final">
        <span className="rj-kicker">MT TOURS & TRANSFERS</span>
        <h2>¿Cuándo aterrizás en La Rioja?</h2>
        <p>
          Contanos fecha, horario de vuelo y destino. Te pasamos el precio y dejamos tu traslado
          confirmado.
        </p>
        <a className="rj-btn-primary" href={WHATSAPP_GENERAL} target="_blank" rel="noopener noreferrer">
          Consultar precio por WhatsApp →
        </a>
      </section>

      <SiteFooter />
    </main>
  )
}

export default TrasladoAeropuertoLaRiojaCatamarcaFiambala
