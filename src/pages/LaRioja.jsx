import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { setSeo } from "../seo"
import { Hero, Intro, Cards, Services, Why, Process, Highlight, Coverage, CompanyCta, Faq, Final } from "../LaRiojaSections"
import { excursiones, aeropuerto, aeropuertoACatamarca, precioAeropuertoCentro, pesos, wa } from "../laRiojaData"

const WHATSAPP = wa("Hola, quisiera consultar por un traslado o una excursión en La Rioja.")

const benefits = [
  ["Salimos desde La Rioja capital", "Te buscamos donde estés, sin viajar antes a otra ciudad."],
  ["Vehículo privado con chofer", "Solo vos y tu grupo, con horarios a tu medida."],
  ["Respondemos al instante", "Atención inmediata por teléfono, mail y WhatsApp."],
  ["Cuenta corriente", "Para empresas, hoteles y agencias que necesitan facturar."],
]

const steps = [
  ["01", "Nos escribís", "Por WhatsApp, con la fecha, la cantidad de personas y el lugar donde te buscamos."],
  ["02", "Confirmamos", "Coordinamos horario, recorrido y precio del servicio."],
  ["03", "Salimos desde La Rioja", "Un chofer te busca y te acompaña durante todo el recorrido."],
  ["04", "Disfrutás el viaje", "Te dejamos donde empezamos, o en tu próximo destino."],
]

const faq = [
  [
    "¿Hacen excursiones saliendo desde La Rioja capital?",
    "Sí. Todas nuestras excursiones en La Rioja salen y vuelven a La Rioja capital: Chilecito y Cuesta de Miranda, la Costa Riojana y Valle de la Luna con Talampaya.",
  ],
  [
    "¿Cuánto cuesta una excursión desde La Rioja?",
    `El precio es por vehículo con chofer. Va desde ${pesos(excursiones[1].precio)} el circuito de la ciudad y la Costa Riojana hasta ${pesos(excursiones[2].precio)} Valle de la Luna y Talampaya.`,
  ],
  [
    "¿Pueden buscarme en el aeropuerto de La Rioja?",
    "Sí. Te esperamos en el aeropuerto con chofer y te llevamos al hotel o directo a tu excursión.",
  ],
  [
    "¿Hacen traslados entre La Rioja y Catamarca?",
    `Sí. El traslado entre el Aeropuerto de La Rioja y San Fernando del Valle de Catamarca cuesta $${aeropuertoACatamarca}, con un mínimo de 2 pasajeros. También coordinamos servicios hacia Tucumán.`,
  ],
  [
    "¿Cómo reservo?",
    "Escribinos por WhatsApp con la fecha, la cantidad de personas y el servicio que te interesa. Te respondemos al instante.",
  ],
]

function LaRioja() {
  setSeo({
    title: "Traslados y Excursiones en La Rioja | MT Tours & Transfers",
    description:
      "Excursiones y traslados privados en La Rioja saliendo desde la capital: Chilecito, Cuesta de Miranda, Costa Riojana, Talampaya y aeropuerto.",
    path: "/la-rioja",
  })

  return (
    <main className="traslados-page">
      <SiteHeader />

      <Hero
        kicker="LA RIOJA, ARGENTINA"
        title="Traslados y excursiones en La Rioja"
        text="Salimos desde La Rioja capital. Te llevamos a Chilecito, a la Cuesta de Miranda, a la Costa Riojana y a Talampaya, y te buscamos en el aeropuerto con chofer."
        primary={{ href: WHATSAPP, label: "Consultar por WhatsApp" }}
        secondary={{ href: "#excursiones", label: "Ver excursiones" }}
      />

      <Intro
        kicker="SERVICIO PROFESIONAL DE TRASLADOS"
        title="Una solución de movilidad para cada necesidad"
        paragraphs={[
          "Coordinamos excursiones privadas y traslados desde y hacia La Rioja capital, el aeropuerto, hoteles, empresas y destinos interprovinciales.",
          "Cada servicio se organiza previamente teniendo en cuenta horarios, punto de origen, destino y necesidades del pasajero.",
        ]}
        data={[
          ["24/7", "Coordinación de servicios"],
          ["NOA", "Cobertura regional"],
          ["EMPRESAS", "Servicios programados"],
        ]}
      />

      <Cards
        id="excursiones"
        kicker="EXCURSIONES DESDE LA RIOJA"
        title="Tres excursiones privadas desde La Rioja capital"
        text="El precio es por el servicio completo con vehículo y chofer, no por persona."
        items={excursiones.map((e) => ({
          h: e.nombre,
          p: `${e.resumen} ${e.km} km ida y vuelta. ${pesos(e.precio)} el servicio.`,
          href: e.path,
          cta: "Ver excursión →",
          img: e.imagenes?.[0],
        }))}
      />

      <Highlight
        kicker="TRANSFER AEROPUERTO LA RIOJA"
        title="Aeropuerto de La Rioja ↔ Hotel, empresa o domicilio"
        paragraphs={[
          "Te esperamos en el aeropuerto con chofer y te llevamos al hotel, a Catamarca o directo a tu excursión.",
          `Del aeropuerto al centro y hoteles de La Rioja: ${precioAeropuertoCentro}. Del aeropuerto a San Fernando del Valle de Catamarca: $${aeropuertoACatamarca}, con un mínimo de 2 pasajeros.`,
        ]}
        bullets={["Recepción en aeropuerto", "Traslado puerta a puerta", "Hoteles, empresas y domicilios", "Servicios de llegada y salida"]}
        href={aeropuerto.path}
        label="Ver traslado aeropuerto →"
      />

      <Services
        kicker="TRASLADOS"
        title="Traslados en La Rioja y hacia otras provincias"
        text="Servicios coordinados previamente, según horario, destino y cantidad de pasajeros."
        items={[
          { h: "Aeropuerto de La Rioja", p: "Recepción y traslado entre el aeropuerto, hoteles, domicilios y empresas.", href: aeropuerto.path, cta: "Ver traslado →" },
          { h: "La Rioja ⇄ Catamarca", p: "Del aeropuerto de La Rioja a San Fernando del Valle de Catamarca. Mínimo 2 pasajeros.", href: "/traslados-catamarca", cta: "Ver traslados →" },
          { h: "Traslados para empresas", p: "Personal, ejecutivos, visitantes y servicios recurrentes en La Rioja.", href: "/traslados-la-rioja", cta: "Ver servicio →" },
        ]}
      />

      <Why kicker="POR QUÉ MT TRANSFERS" title="Un servicio pensado para que la movilidad no sea un problema" items={benefits} />

      <Process title="Coordinamos tu viaje en cuatro pasos" items={steps} />

      <Coverage />

      <CompanyCta />

      <Faq title="Preguntas sobre traslados y excursiones en La Rioja" faq={faq} />

      <Final
        title="Tu viaje por La Rioja empieza acá"
        text="Contanos la fecha y qué querés conocer, y lo coordinamos por WhatsApp."
        href={WHATSAPP}
        label="Consultar por WhatsApp →"
      />

      <SiteFooter />
    </main>
  )
}

export default LaRioja
