// Datos compartidos de las páginas de La Rioja.
// Los kilómetros y el valor base los pasó el equipo de La Rioja (Javier Díaz):
// valor base = km x $1.000. Se le suma el 35 % de ganancia y ese es el precio publicado.
import cuestaMiranda from "./assets/la-rioja-cuesta-miranda.jpg"
import edificioPiedra from "./assets/la-rioja-edificio-piedra.jpg"
import miradorCondor from "./assets/la-rioja-mirador-condor.jpg"
import talampaya from "./assets/la-rioja-talampaya.jpg"
import aeropuertoImg from "./assets/la-rioja-aeropuerto.jpg"

const MARGEN = 1.35

export const WHATSAPP_NUMBER = "5493834696065"

export const wa = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const pesos = (n) => "$" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const precio = (base) => Math.round(base * MARGEN)

export const excursiones = [
  {
    slug: "chilecito-cuesta-de-miranda",
    imagenes: [
      { src: cuestaMiranda, alt: "Cuesta de Miranda vista desde el aire, La Rioja" },
      { src: edificioPiedra, alt: "Edificio histórico de piedra rodeado de cerros, La Rioja" },
    ],
    path: "/la-rioja/chilecito-cuesta-de-miranda",
    nombre: "Chilecito y Cuesta de Miranda",
    kicker: "DESDE LA RIOJA CAPITAL",
    resumen:
      "Cuesta de Miranda, el cablecarril, el Cristo Redentor y el centro histórico de Chilecito en un solo día.",
    km: 530,
    precio: precio(530000),
    paradas: [
      "Traslado desde La Rioja capital hacia Chilecito",
      "Cuesta de Miranda",
      "Estación 1 del cablecarril",
      "Museo del cablecarril",
      "Estación 2 del cablecarril",
      "Río Amarillo",
      "Cristo Redentor de Chilecito",
      "Paseo por el centro de Chilecito, donde está la primera sucursal del Banco Nación en el interior del país",
    ],
    seoTitle: "Excursión a Chilecito y Cuesta de Miranda desde La Rioja | MT Transfers",
    seoDescription:
      "Excursión privada desde La Rioja capital a Chilecito: Cuesta de Miranda, cablecarril, museo, Río Amarillo y Cristo Redentor. 530 km, $715.500 el servicio.",
    faq: [
      [
        "¿Cuánto cuesta la excursión a Chilecito desde La Rioja?",
        "El servicio cuesta $715.500 por vehículo con chofer. El recorrido total es de 530 km entre ida y vuelta.",
      ],
      [
        "¿Dónde nos buscan?",
        "En La Rioja capital: hotel, domicilio, terminal o aeropuerto. Lo coordinamos por WhatsApp.",
      ],
      [
        "¿Qué se visita en Chilecito?",
        "La Cuesta de Miranda, las estaciones 1 y 2 del cablecarril, el museo del cablecarril, el Río Amarillo, el Cristo Redentor y el centro de la ciudad.",
      ],
    ],
  },
  {
    slug: "paseo-ciudad-costa-riojana",
    imagenes: [
      { src: miradorCondor, alt: "Mirador en las sierras de La Rioja con un cóndor en vuelo" },
    ],
    path: "/la-rioja/paseo-ciudad-costa-riojana",
    nombre: "La Rioja ciudad y Costa Riojana",
    kicker: "CIRCUITO CERCANO",
    resumen:
      "Paseo por la ciudad, Dique Los Sauces, Sanagasta, bodegas y viñedos, Castillo Dionisi y Anillaco.",
    km: 300,
    precio: precio(300000),
    paradas: [
      "Paseo por la ciudad de La Rioja",
      "Dique Los Sauces",
      "Sanagasta",
      "Bodegas, con recorrido largo por los viñedos",
      "Castillo Dionisi",
      "Anillaco y la casa de Menem",
    ],
    seoTitle: "Paseo por La Rioja ciudad, Sanagasta y Dique Los Sauces | MT Transfers",
    seoDescription:
      "Circuito privado desde La Rioja capital: ciudad, Dique Los Sauces, Sanagasta, bodegas, Castillo Dionisi y Anillaco. 300 km, $405.000 el servicio.",
    faq: [
      [
        "¿Cuánto cuesta el paseo por la Costa Riojana?",
        "El servicio cuesta $405.000 por vehículo con chofer. El recorrido total es de 300 km.",
      ],
      [
        "¿Qué incluye el circuito?",
        "La ciudad de La Rioja, Dique Los Sauces, Sanagasta, una visita a bodegas con recorrido por los viñedos, el Castillo Dionisi y Anillaco.",
      ],
      [
        "¿Sale desde La Rioja capital?",
        "Sí. Te buscamos en La Rioja capital y volvemos al mismo lugar al terminar.",
      ],
    ],
  },
  {
    slug: "valle-de-la-luna-talampaya",
    imagenes: [
      { src: talampaya, alt: "Paredones rojos del Parque Nacional Talampaya, La Rioja" },
    ],
    path: "/la-rioja/valle-de-la-luna-talampaya",
    nombre: "Valle de la Luna y Talampaya",
    kicker: "LOS DOS PARQUES",
    resumen:
      "Te llevamos al Valle de la Luna y al Parque Nacional Talampaya. Vos hacés la visita guiada y nosotros te esperamos y te traemos de vuelta a La Rioja.",
    km: 620,
    precio: precio(600000),
    paradas: [
      "Traslado desde La Rioja capital",
      "Valle de la Luna (Parque Provincial Ischigualasto, en San Juan): recorrido dentro del parque",
      "Parque Nacional Talampaya: excursión del parque",
      "Regreso a La Rioja capital",
    ],
    seoTitle: "Valle de la Luna y Talampaya desde La Rioja capital | MT Transfers",
    seoDescription:
      "Traslado privado desde La Rioja capital al Valle de la Luna y Talampaya. Te llevamos, esperamos mientras hacés la excursión y volvemos. $810.000 el servicio.",
    faq: [
      [
        "¿Cuánto cuesta el traslado a Valle de la Luna y Talampaya desde La Rioja?",
        "El servicio cuesta $810.000 por vehículo con chofer. El recorrido total es de unos 620 km.",
      ],
      [
        "¿Incluye la entrada y el guía de los parques?",
        "No. Nosotros hacemos el traslado y esperamos. La entrada y la excursión dentro de cada parque se contratan en el parque.",
      ],
      [
        "¿El Valle de la Luna está en La Rioja?",
        "No, el Valle de la Luna (Parque Provincial Ischigualasto) está en la provincia de San Juan. Talampaya sí está en La Rioja. Los visitás en la misma excursión.",
      ],
    ],
  },
]

export const aeropuerto = {
  path: "/la-rioja/traslado-aeropuerto-la-rioja",
  nombre: "Traslado Aeropuerto La Rioja",
  imagenes: [{ src: aeropuertoImg, alt: "Aeropuerto de La Rioja y su terminal" }],
}

// Precio publicado en /traslados-catamarca. Va sin "$" a propósito: en la página del
// aeropuerto de La Rioja el prerender lo tomaría como precio de ese servicio.
export const aeropuertoACatamarca = "316.000"

// Traslado del aeropuerto de La Rioja al centro y hoteles de la ciudad.
export const precioAeropuertoCentro = "$40.000"
