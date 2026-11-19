import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { Hero, Intro, Cards, Services, Why, Process, Highlight, Coverage, CompanyCta, Faq, Final } from "../LaRiojaSections"
import { aeropuerto, aeropuertoACatamarca, wa } from "../laRiojaData"

const WHATSAPP = wa(
  "Hola, quisiera reservar un traslado desde o hacia el Aeropuerto de La Rioja.",
)

const faq = [
  [
    "¿Cuánto cuesta el traslado desde el Aeropuerto de La Rioja?",
    "El precio depende del destino y de la cantidad de pasajeros. Escribinos por WhatsApp con tu vuelo y el lugar de destino y te pasamos el valor.",
  ],
  [
    "¿Pueden buscarme en el aeropuerto y llevarme a Catamarca?",
    `Sí. El traslado entre el Aeropuerto de La Rioja y San Fernando del Valle de Catamarca cuesta ${aeropuertoACatamarca} pesos, con un mínimo de 2 pasajeros.`,
  ],
  [
    "¿Puedo combinar el traslado con una excursión?",
    "Sí. Podés llegar al aeropuerto de La Rioja y salir directo a Chilecito, a la Costa Riojana o a Talampaya. Lo coordinamos en un solo servicio.",
  ],
  [
    "¿Hacen el traslado en los dos sentidos?",
    "Sí. Te buscamos en el aeropuerto y te llevamos al hotel, y también del hotel al aeropuerto antes de tu vuelo.",
  ],
  [
    "¿Cómo reservo?",
    "Escribinos por WhatsApp con la fecha, el horario de tu vuelo y el destino. Respondemos al instante.",
  ],
]

const steps = [
  ["01", "Nos escribís", "Por WhatsApp, con tu fecha, horario de vuelo y dirección o hotel de destino."],
  ["02", "Confirmamos", "Coordinamos el servicio y el precio según tu destino."],
  ["03", "Te esperamos", "Un chofer te espera en el Aeropuerto Capitán Vicente Almandos Almonacid."],
  ["04", "Te llevamos a destino", "Viajás directo a tu hotel, empresa, domicilio o excursión."],
]

function TrasladoAeropuertoLaRioja() {
  setSeo({
    title: "Traslado Aeropuerto La Rioja: Transfer al Centro y Hoteles | MT Transfers",
    description:
      "Traslado privado desde y hacia el Aeropuerto de La Rioja. Te esperamos con chofer y te llevamos al hotel, a Catamarca o directo a tu excursión.",
    path: aeropuerto.path,
  })

  return (
    <main className="traslados-page">
      <SiteHeader />

      <Hero
        kicker="AEROPUERTO DE LA RIOJA"
        title="Traslado desde y hacia el Aeropuerto de La Rioja"
        text="Transfer privado entre el Aeropuerto Capitán Vicente Almandos Almonacid y hoteles o domicilios de La Rioja capital. También te llevamos a Catamarca o directo a tu excursión."
        primary={{ href: WHATSAPP, label: "Reservar por WhatsApp" }}
        secondary={{ href: "#preguntas", label: "Preguntas frecuentes" }}
      />

      <Intro
        kicker="TRANSFER DE AEROPUERTO"
        title="Del aeropuerto a tu destino, sin improvisar"
        paragraphs={[
          "Te esperamos con chofer cuando aterrizás y te llevamos a tu hotel, empresa o domicilio. También hacemos el recorrido inverso para que llegues a tiempo a tu vuelo.",
          "Organizamos cada servicio según el horario del vuelo, el destino y la cantidad de pasajeros.",
        ]}
        data={[
          ["15-20 min", "Aeropuerto al centro"],
          ["Ida y vuelta", "Desde y hacia el aeropuerto"],
          ["Privado", "Solo con quienes vos elijas"],
        ]}
      />

      <Highlight
        kicker="TRANSFER AEROPUERTO LA RIOJA"
        title="Aeropuerto de La Rioja ↔ Hotel, empresa o domicilio"
        paragraphs={[
          "Coordinamos traslados privados desde y hacia el aeropuerto para pasajeros particulares, turistas, profesionales y empresas.",
          `El traslado entre el Aeropuerto de La Rioja y San Fernando del Valle de Catamarca cuesta ${aeropuertoACatamarca} pesos, con un mínimo de 2 pasajeros.`,
        ]}
        bullets={["Recepción en aeropuerto", "Traslado puerta a puerta", "Coordinación según tu vuelo", "Hoteles, empresas y domicilios", "Servicios de llegada y salida"]}
        href={WHATSAPP}
        label="Consultar transfer aeropuerto →"
      />

      <Services
        kicker="NUESTROS SERVICIOS"
        title="Más que un traslado de un punto a otro"
        text="Elegí el servicio que mejor se adapta a tu viaje."
        items={[
          { h: "Aeropuerto ↔ Hotel", p: "Recepción y traslado entre el aeropuerto, alojamientos y domicilios de La Rioja capital." },
          { h: "Aeropuerto → Catamarca", p: "Viaje directo a San Fernando del Valle de Catamarca, con chofer y puerta a puerta." },
          { h: "Aeropuerto → excursión", p: "Llegá y salí directo a Chilecito, la Costa Riojana o Talampaya.", href: "/la-rioja", cta: "Ver excursiones →" },
          { h: "Traslados para empresas", p: "Personal, ejecutivos y visitantes, con servicios puntuales o programados.", href: "/traslados-la-rioja", cta: "Ver servicio →" },
          { h: "Regreso al aeropuerto", p: "Calculamos la salida para que llegues con tiempo a tu vuelo." },
          { h: "Interprovinciales", p: "Conexiones desde La Rioja hacia Catamarca, Fiambalá, Tucumán y otros destinos." },
        ]}
      />

      <Why
        kicker="POR QUÉ MT TRANSFERS"
        title="Un servicio pensado para que llegues sin complicaciones"
        items={[
          ["Puntualidad", "Coordinación previa de cada servicio para reducir esperas y cumplir los horarios."],
          ["Atención personalizada", "Cada traslado se organiza según tu vuelo y tus necesidades."],
          ["Coordinación permanente", "Comunicación antes y durante el servicio."],
          ["Cobertura regional", "Servicios en La Rioja, Catamarca y el NOA."],
        ]}
      />

      <Process title="Reservá tu traslado en cuatro pasos" items={steps} />

      <Coverage />

      <CompanyCta />

      <Faq title="Preguntas sobre el traslado al Aeropuerto de La Rioja" faq={faq} />

      <Final
        title="Reservá tu traslado al aeropuerto"
        text="Enviá tu fecha, horario de vuelo y destino y lo coordinamos."
        href={WHATSAPP}
        label="Consultar por WhatsApp →"
      />

      <SiteFooter />
    </main>
  )
}

export default TrasladoAeropuertoLaRioja
