import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"
import { setSeo } from "./seo"
import { excursiones, pesos, wa } from "./laRiojaData"
import { Hero, Cards, Why, Process, Highlight, Coverage, CompanyCta, Faq, Final } from "./LaRiojaSections"

function LaRiojaExcursion({ excursion }) {
  const { nombre, kicker, resumen, km, precio, paradas, seoTitle, seoDescription, faq, path } = excursion

  setSeo({ title: seoTitle, description: seoDescription, path })

  const whatsapp = wa(`Hola, quiero reservar la excursión ${nombre} desde La Rioja.`)
  const otras = excursiones.filter((e) => e.path !== path)

  const datos = [
    { h: pesos(precio), p: "Servicio completo por vehículo con chofer, no por persona." },
    { h: `${km} km`, p: "Recorrido total, ida y vuelta." },
    { h: "La Rioja capital", p: "Te buscamos y te dejamos donde estés." },
    { h: "Privado", p: "Solo vos y tu grupo, sin esperar a otros." },
  ]

  const pasos = [
    ["01", "Nos escribís", "Por WhatsApp, con la fecha, la cantidad de personas y dónde te buscamos."],
    ["02", "Confirmamos", "Coordinamos horario y recorrido, y reservás tu lugar."],
    ["03", "Salimos desde La Rioja", "Un chofer te busca y te lleva a recorrer el circuito completo."],
    ["04", "Disfrutás el recorrido", "Te acompañamos durante todo el día y te dejamos donde empezamos."],
  ]

  return (
    <main className="traslados-page">
      <SiteHeader />

      <Hero
        kicker={kicker}
        title={nombre}
        text={resumen}
        primary={{ href: whatsapp, label: "Reservar por WhatsApp" }}
        secondary={{ href: "#preguntas", label: "Preguntas frecuentes" }}
      />

      <Cards
        kicker="DATOS DEL SERVICIO"
        title="Lo que tenés que saber de esta excursión"
        text="Excursión privada con vehículo y chofer, saliendo y volviendo a La Rioja capital."
        items={datos}
      />

      <Why
        kicker="EL RECORRIDO"
        title="Qué recorrés en esta excursión"
        items={paradas.map((parada) => [parada, ""])}
      />

      <Process title="Reservá tu excursión en cuatro pasos" items={pasos} />

      <Highlight
        kicker="SUMÁ EL TRASLADO"
        title="Llegá al aeropuerto y salí directo a la excursión"
        paragraphs={[
          "Si llegás en avión, podemos buscarte en el Aeropuerto de La Rioja y combinar el traslado con la excursión en un solo servicio.",
          "Si viajan más personas de las que entran en un auto, escribinos y te pasamos opciones en camioneta, combi o minibús.",
        ]}
        href="/traslados-la-rioja"
        label="Ver traslados en La Rioja →"
      />

      <Cards
        kicker="OTRAS EXCURSIONES"
        title="Más excursiones desde La Rioja"
        items={[
          ...otras.map((e) => ({
            h: e.nombre,
            p: `${e.resumen} ${e.km} km ida y vuelta.`,
            href: e.path,
            cta: "Ver excursión →",
          })),
          {
            h: "Todo lo que hacemos en La Rioja",
            p: "Excursiones, traslados al aeropuerto y servicios para empresas.",
            href: "/la-rioja",
            cta: "Ver La Rioja →",
          },
        ]}
      />

      <Coverage />

      <CompanyCta />

      <Faq title={`Preguntas sobre ${nombre}`} faq={faq} />

      <Final
        title={`Reservá ${nombre}`}
        text="Contanos la fecha y cuántos son, y te confirmamos el servicio."
        href={whatsapp}
        label="Consultar por WhatsApp →"
      />

      <SiteFooter />
    </main>
  )
}

export default LaRiojaExcursion
