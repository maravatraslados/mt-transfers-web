import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { wa } from "../laRiojaData"
import { Intro, Hero, Cards, Services, Process, Highlight, Faq, Final } from "../LaRiojaSections"

const WHATSAPP = wa("Hola, quisiera consultar por un servicio de traslado de personal para una empresa minera.")

const servicios = [
  { h: "Traslado de personal por turnos", p: "Cambios de guardia y ingreso o egreso de equipos hacia el proyecto, con horarios y puntos de encuentro previamente acordados." },
  { h: "Aeropuerto, hotel y campamento", p: "Recepción de personal, técnicos y contratistas al aterrizar y traslado al alojamiento, la base o el yacimiento." },
  { h: "Ejecutivos, visitas y auditorías", p: "Vehículo con chofer para directivos, inspectores, auditores, proveedores y visitas técnicas." },
  { h: "Camionetas 4x4 para ruta de montaña", p: "Unidades para caminos de montaña y de altura, como los de la Puna catamarqueña, según el recorrido y la época del año." },
  { h: "Combi, minibús y colectivo", p: "Unidades de 18, 24 y 56 asientos para mover cuadrillas completas en un solo servicio." },
  { h: "Servicios programados", p: "Rutas diarias, semanales o por turno, con una planificación fija acordada con tu operación." },
]

const porque = [
  ["Puntualidad", "Coordinación previa de cada servicio para cumplir horarios de turno y de vuelo."],
  ["Unidad según el grupo", "Del auto o la camioneta al colectivo de 56 asientos, según cuántos viajen y cuánto equipaje lleven."],
  ["Atención 24/7", "Coordinamos servicios fuera del horario habitual, según las necesidades de la operación."],
  ["Administración para empresas", "Facturación y cuenta corriente, con seguimiento de los servicios realizados."],
]

const pasos = [
  ["01", "Nos contás la operación", "Origen, destino, turnos, cantidad de personas y frecuencia del servicio."],
  ["02", "Armamos la propuesta", "Definimos unidades, horarios y recorridos según las necesidades del proyecto."],
  ["03", "Confirmamos el precio", "Te pasamos el valor y las condiciones del servicio, puntual o programado."],
  ["04", "Realizamos el traslado", "Los choferes se presentan en el punto y el horario acordados."],
]

const faq = [
  [
    "¿Qué servicios de traslado ofrecen para minería?",
    "Traslado de personal por turnos, recepción en aeropuerto, traslado de ejecutivos, auditores y proveedores, y servicios programados hacia proyectos mineros, con combi, minibús, colectivo o camioneta 4x4.",
  ],
  [
    "¿Qué vehículos usan para mover cuadrillas?",
    "Combi de 18 asientos, minibús de 24 asientos y colectivo de 56 asientos, además de autos y camionetas para grupos chicos y caminos de montaña.",
  ],
  [
    "¿Pueden hacer servicios diarios o por turno?",
    "Sí. Podemos organizar servicios diarios, semanales o por turno, con horarios y recorridos fijos acordados con la empresa.",
  ],
  [
    "¿Llegan a proyectos en la Puna y zonas de montaña?",
    "Coordinamos servicios hacia zonas de montaña y de altura de Catamarca, con la unidad adecuada para cada recorrido. Consultanos el destino y la época del año.",
  ],
  [
    "¿Pueden buscar al personal en el aeropuerto?",
    "Sí. Coordinamos la recepción según el horario del vuelo y el traslado a hoteles, bases o campamentos.",
  ],
  [
    "¿Facturan a empresas mineras y contratistas?",
    "Sí. Contamos con modalidades administrativas para clientes corporativos, con facturación y cuenta corriente.",
  ],
  [
    "¿Cuánto cuesta el servicio?",
    "Depende del recorrido, la cantidad de personas, la frecuencia y el tipo de unidad. Enviá los datos de la operación por WhatsApp y te pasamos una propuesta con el precio.",
  ],
  [
    "¿Qué requisitos de seguridad pueden cumplir?",
    "Contanos los requisitos de tu empresa o proyecto antes de contratar, y analizamos cómo cumplirlos para cada servicio.",
  ],
]

function ServiciosMineria() {
  setSeo({
    title: "Transporte de Personal para Minería en Catamarca | MT Transfers",
    description:
      "Servicios de traslado para minería en Catamarca: personal por turnos, aeropuerto, ejecutivos y visitas técnicas, en combi, minibús, colectivo o 4x4. Consultá el precio.",
    path: "/mineria",
  })

  return (
    <main className="traslados-page">
      <SiteHeader />

      <Hero
        kicker="SERVICIOS PARA MINERÍA"
        title="Traslado de personal y servicios para minería en Catamarca"
        text="Movilidad para empresas mineras, contratistas y proveedores: cuadrillas por turno, recepción en aeropuerto, ejecutivos y visitas técnicas, con combi, minibús, colectivo y camionetas 4x4."
        primary={{ href: WHATSAPP, label: "Consultar precio" }}
        secondary={{ href: "#servicios", label: "Ver servicios" }}
      />

      <Intro
        kicker="MOVILIDAD PARA LA OPERACIÓN"
        title="Un servicio de traslados pensado para proyectos mineros"
        paragraphs={[
          "Coordinamos el traslado de personal y de visitantes desde y hacia ciudades, aeropuertos, hoteles, bases y proyectos en Catamarca, con servicios puntuales o programados.",
          "Cada servicio se organiza según los turnos, los horarios de vuelo, el destino y la cantidad de personas de tu operación.",
        ]}
        data={[
          ["18-24-56", "Asientos por unidad"],
          ["24/7", "Coordinación de servicios"],
          ["4x4", "Para ruta de montaña"],
        ]}
      />

      <Cards
        id="servicios"
        kicker="SERVICIOS PARA MINERÍA"
        title="Lo que podemos resolver para tu operación"
        text="Todos los servicios se coordinan previamente. Contanos la necesidad y te pasamos el precio."
        items={servicios}
        bottom={{
          kicker: "¿TU EMPRESA NECESITA SERVICIOS FRECUENTES?",
          title: "Podemos armar una modalidad adaptada a tu operación",
          text: "Contanos turnos, recorridos, frecuencia y cantidad de personas, y preparamos una propuesta para la empresa.",
          href: WHATSAPP,
          label: "Consultar precio para empresa →",
        }}
      />

      <Services kicker="POR QUÉ MT TRANSFERS" title="Un servicio pensado para que la movilidad no frene la operación" items={porque.map(([h, p]) => ({ h, p }))} />

      <Process title="Coordinamos tu servicio en cuatro pasos" items={pasos} />

      <Highlight
        kicker="TRANSPORTE PARA GRUPOS"
        title="Unidades de 18, 24 y 56 asientos"
        paragraphs={[
          "Para mover cuadrillas completas en un solo servicio contamos con combi, minibús y colectivo, siempre con chofer.",
        ]}
        href="/combi"
        label="Ver combi, minibús y colectivo →"
      />

      <Faq title="Preguntas sobre traslados para minería" faq={faq} />

      <Final
        title="Contanos qué necesita tu operación"
        text="Enviá origen, destino, turnos y cantidad de personas, y te pasamos una propuesta con el precio."
        href={WHATSAPP}
        label="Consultar precio por WhatsApp →"
      />

      <SiteFooter />
    </main>
  )
}

export default ServiciosMineria
