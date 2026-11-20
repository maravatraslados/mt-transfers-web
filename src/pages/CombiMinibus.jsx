import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { wa } from "../laRiojaData"
import { Hero, Intro, Cards, Services, Process, Highlight, Faq, Final } from "../LaRiojaSections"
import combiMercedes from "../assets/combi-mercedes-ilustrativa.webp"
import minibusIveco from "../assets/minibus-iveco-ilustrativo.webp"
import colectivo from "../assets/colectivo-ilustrativo.webp"

const WHATSAPP = wa("Hola, quiero consultar el precio de una combi, minibús o colectivo con chofer.")

const flota = [
  {
    h: "Combi de 18 asientos",
    p: "Para grupos chicos y medianos, excursiones, transfers de aeropuerto y traslados entre hoteles y destinos turísticos.",
    img: { src: combiMercedes, alt: "Combi de 18 asientos con chofer en Catamarca (imagen ilustrativa)" },
    href: wa("Hola, quiero consultar el precio de una combi de 18 asientos."),
    cta: "Consultar precio →",
  },
  {
    h: "Minibús de 24 asientos",
    p: "Más lugar para equipos de trabajo, contingentes, instituciones, eventos y grupos que necesitan viajar juntos.",
    img: { src: minibusIveco, alt: "Minibús de 24 asientos con chofer en Catamarca (imagen ilustrativa)" },
    href: wa("Hola, quiero consultar el precio de un minibús de 24 asientos."),
    cta: "Consultar precio →",
  },
  {
    h: "Colectivo de 56 asientos",
    p: "La opción para grupos grandes: congresos, eventos, excursiones de escuelas y empresas, y traslados de personal.",
    img: { src: colectivo, alt: "Colectivo de 56 asientos con chofer en Catamarca (imagen ilustrativa)" },
    href: wa("Hola, quiero consultar el precio de un colectivo de 56 asientos."),
    cta: "Consultar precio →",
  },
]

const usos = [
  ["Excursiones y circuitos", "Recorridos de un día o de varios por Catamarca y el NOA, con chofer y horarios a medida."],
  ["Aeropuerto y hoteles", "Recepción de grupos al aterrizar y traslado a hoteles, cabañas o complejos."],
  ["Empresas y personal", "Traslado de equipos de trabajo, visitas, capacitaciones y servicios programados."],
  ["Eventos y congresos", "Movilidad para bodas, congresos, fiestas, encuentros y actividades institucionales."],
  ["Escuelas e instituciones", "Viajes de egresados, torneos, giras y salidas de grupos grandes."],
  ["Agencias de viajes", "Servicio de transporte para contingentes y paquetes turísticos, con facturación."],
]

const pasos = [
  ["01", "Nos escribís", "Por WhatsApp, con la fecha, el recorrido, el horario y la cantidad de pasajeros."],
  ["02", "Elegimos la unidad", "Combi de 18, minibús de 24 o colectivo de 56 asientos, según el grupo y el equipaje."],
  ["03", "Te pasamos el precio", "Revisamos disponibilidad y te confirmamos el valor del servicio."],
  ["04", "Viajan con chofer", "Un chofer se presenta en el punto acordado y los lleva durante todo el recorrido."],
]

const faq = [
  [
    "¿Qué capacidades de vehículo tienen para grupos?",
    "Trabajamos con combi de 18 asientos, minibús de 24 asientos y colectivo de 56 asientos. Elegimos la unidad según la cantidad de pasajeros y el equipaje.",
  ],
  [
    "¿El servicio incluye chofer?",
    "Sí. Todos los servicios se coordinan con chofer, según el recorrido y los horarios acordados.",
  ],
  [
    "¿Cuánto cuesta alquilar una combi, un minibús o un colectivo?",
    "El precio depende del recorrido, los kilómetros, el tiempo de servicio, la fecha y el tipo de unidad. Escribinos por WhatsApp con esos datos y te pasamos el valor.",
  ],
  [
    "¿Con cuánta anticipación conviene reservar?",
    "Recomendamos consultar con al menos 10 días de anticipación, sobre todo para minibús, colectivo y fechas de mucha demanda.",
  ],
  [
    "¿Pueden buscar a un grupo en el aeropuerto?",
    "Sí. Coordinamos la recepción según el horario del vuelo y el traslado a hoteles, empresas o destinos turísticos.",
  ],
  [
    "¿Hacen servicios fuera de Catamarca?",
    "Sí. Coordinamos viajes hacia La Rioja, Tucumán y otros destinos del Noroeste Argentino, con planificación previa.",
  ],
  [
    "¿Se puede contratar para una excursión completa?",
    "Sí. Cotizamos la movilidad para excursiones y circuitos de un día o de varios, con paradas y horarios a medida.",
  ],
  [
    "¿Qué medios de pago aceptan y piden seña?",
    "Aceptamos todos los medios de pago. Para reservar se abona una seña del 10 % y la cancelación es gratuita.",
  ],
  [
    "¿Facturan a empresas y agencias?",
    "Sí. Contamos con modalidades administrativas para empresas y agencias, con facturación y cuenta corriente.",
  ],
]

function CombiMinibus() {
  setSeo({
    title: "Combi, Minibús y Colectivo con Chofer en Catamarca | MT Transfers",
    description:
      "Alquiler de combi de 18 asientos, minibús de 24 y colectivo de 56 con chofer en Catamarca: excursiones, aeropuerto, empresas y eventos. Consultá el precio.",
    path: "/combi",
  })

  return (
    <main className="traslados-page">
      <SiteHeader />

      <Hero
        kicker="TRANSPORTE PARA GRUPOS EN CATAMARCA"
        title="Combi, minibús y colectivo con chofer en Catamarca"
        text="Vehículos de 18, 24 y 56 asientos para excursiones, transfers de aeropuerto, empresas, eventos y grupos que necesitan viajar juntos, con chofer y coordinación previa."
        primary={{ href: WHATSAPP, label: "Consultar precio" }}
        secondary={{ href: "#vehiculos", label: "Ver vehículos" }}
      />

      <Intro
        kicker="UNA SOLUCIÓN PARA CADA GRUPO"
        title="Viajá con tu grupo sin dividirlo en varios autos"
        paragraphs={[
          "Coordinamos combis, minibuses y colectivos con chofer para excursiones, transfers desde el aeropuerto, hoteles, eventos, empresas y recorridos dentro de Catamarca, La Rioja y otros destinos del NOA.",
          "La disponibilidad y el valor se confirman previamente según la fecha, el recorrido, la cantidad de pasajeros y el tipo de unidad.",
        ]}
        data={[
          ["18", "Asientos en combi"],
          ["24", "Asientos en minibús"],
          ["56", "Asientos en colectivo"],
        ]}
      />

      <Cards
        id="vehiculos"
        kicker="NUESTROS VEHÍCULOS"
        title="Combi de 18, minibús de 24 y colectivo de 56 asientos"
        text="Elegimos la unidad más conveniente según la cantidad de pasajeros, el equipaje y el recorrido. Las imágenes de los vehículos son ilustrativas."
        items={flota}
      />

      <Services
        kicker="PARA QUÉ SERVICIOS"
        title="Traslados organizados para cada tipo de grupo"
        text="Elegimos la unidad y coordinamos el servicio según lo que necesite tu grupo."
        items={usos.map(([h, p]) => ({ h, p }))}
      />

      <Process title="Reservá tu vehículo en cuatro pasos" items={pasos} />

      <Highlight
        kicker="SERVICIO A MEDIDA"
        title="Cada grupo es distinto"
        paragraphs={[
          "Analizamos fecha, recorrido, paradas, equipaje y horarios para preparar una propuesta acorde a cada necesidad, ya sea un traslado puntual o un servicio programado.",
          "Si tu empresa necesita transporte de personal, mirá también nuestro servicio para minería.",
        ]}
        bullets={[
          "Combi de 18, minibús de 24 y colectivo de 56 asientos",
          "Siempre con chofer",
          "Servicios puntuales o programados",
          "Facturación y cuenta corriente para empresas y agencias",
        ]}
        href="/mineria"
        label="Ver servicios para minería →"
      />

      <Cards
        kicker="TAMBIÉN TE PUEDE SERVIR"
        title="Otros servicios de MT Tours & Transfers"
        items={[
          { h: "Traslados en Catamarca", p: "Aeropuerto, chofer con auto y servicios para empresas.", href: "/traslados-catamarca", cta: "Ver traslados →" },
          { h: "Excursiones en Catamarca", p: "Circuitos privados de un día o de varios por toda la provincia.", href: "/excursiones", cta: "Ver excursiones →" },
          { h: "Servicios para minería", p: "Traslado de personal, ejecutivos y visitas técnicas.", href: "/mineria", cta: "Ver servicio →" },
        ]}
      />

      <Faq title="Preguntas sobre combi, minibús y colectivo" faq={faq} />

      <Final
        title="¿Necesitás una combi, un minibús o un colectivo?"
        text="Enviá fecha, recorrido, horario y cantidad de pasajeros y te pasamos el precio."
        href={WHATSAPP}
        label="Consultar precio por WhatsApp →"
      />

      <SiteFooter />
    </main>
  )
}

export default CombiMinibus
