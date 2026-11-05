// Prerenderiza cada ruta a HTML estático (dist/<ruta>/index.html) para que
// Google y los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot...) que no
// ejecutan JavaScript lean el contenido, el título, la meta y los datos
// estructurados reales de cada página.
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { execFileSync } from "node:child_process"

const root = path.resolve(import.meta.dirname, "..")
const dist = path.join(root, "dist")
const ssrDir = path.join(root, "dist-ssr")
const SITE = "https://mttransfers.com"
const OG_IMAGE = `${SITE}/og-image.jpg`

// Las rutas se leen de App.jsx para no mantener dos listas.
const appSrc = fs.readFileSync(path.join(root, "src/App.jsx"), "utf8")
const routes = [...appSrc.matchAll(/path="([^"*]+)"/g)].map((m) => m[1])

// "document" mínimo: las páginas escriben title/meta/canonical al renderizar.
const store = { title: "", tags: new Map() }
const makeEl = (tag) => {
  const attrs = {}
  const el = {
    tag,
    attrs,
    setAttribute: (k, v) => (attrs[k] = v),
    getAttribute: (k) => attrs[k],
  }
  for (const k of ["name", "content", "rel", "href"]) {
    Object.defineProperty(el, k, { get: () => attrs[k], set: (v) => (attrs[k] = v) })
  }
  return el
}
globalThis.document = {
  set title(v) {
    store.title = v
  },
  get title() {
    return store.title
  },
  querySelector: (sel) => store.tags.get(sel) ?? null,
  createElement: makeEl,
  getElementById: () => null,
  head: {
    appendChild(el) {
      const k = el.attrs.property
        ? `meta[property="${el.attrs.property}"]`
        : el.attrs.name
          ? `meta[name="${el.attrs.name}"]`
          : `link[rel="${el.attrs.rel}"]`
      store.tags.set(k, el)
    },
  },
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")

const SEGMENT_NAMES = {
  excursiones: "Excursiones",
  guia: "Guía de Catamarca",
  "mejor-epoca-catamarca": "Mejor época para viajar a Catamarca",
}

function breadcrumb(route, cleanTitle) {
  const parts = route.split("/").filter(Boolean)
  const items = [{ name: "Inicio", url: `${SITE}/` }]
  let acc = ""
  parts.forEach((p, i) => {
    acc += `/${p}`
    items.push({
      name: i === parts.length - 1 ? cleanTitle : (SEGMENT_NAMES[p] ?? p),
      url: SITE + acc,
    })
  })
  return items
}

function jsonLd(route, title, description) {
  const graph = []
  const url = SITE + route
  const cleanTitle = title.split("|")[0].trim()
  if (route !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb(route, cleanTitle).map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: it.url,
      })),
    })
  }
  const isArticle = route.startsWith("/guia/") || /^\/catamarca-\d/.test(route)
  const isTrip = route.startsWith("/excursiones/")
  const isService = ["/traslados-catamarca", "/combi-minibus-catamarca", "/traslado-aeropuerto-catamarca"].includes(route)
  const base = {
    url,
    name: cleanTitle,
    description,
    inLanguage: "es-AR",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
  }
  if (isArticle) {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: cleanTitle,
      description,
      url,
      inLanguage: "es-AR",
      image: OG_IMAGE,
      author: { "@id": `${SITE}/#organization` },
      publisher: { "@id": `${SITE}/#organization` },
      mainEntityOfPage: url,
    })
  } else if (isTrip) {
    graph.push({
      "@type": "TouristTrip",
      "@id": `${url}#trip`,
      name: cleanTitle,
      description,
      url,
      image: OG_IMAGE,
      touristType: "Turistas en Catamarca, Argentina",
      provider: { "@id": `${SITE}/#organization` },
    })
  } else if (isService) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: cleanTitle,
      description,
      url,
      serviceType: "Transfer y traslado de pasajeros",
      areaServed: ["Catamarca", "La Rioja", "Tucumán", "Noroeste Argentino"],
      provider: { "@id": `${SITE}/#organization` },
    })
  } else if (route !== "/") {
    const type = route === "/contacto" ? "ContactPage" : route === "/quienes-somos" ? "AboutPage" : "WebPage"
    graph.push({ "@type": type, ...base })
  }
  return { "@context": "https://schema.org", "@graph": graph }
}

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8")
const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href)

const NOINDEX = new Set(["/reservar", "/politica-de-privacidad", "/politica-de-cookies", "/terminos-y-condiciones"])

const tplTitle = template.match(/<title>([\s\S]*?)<\/title>/)[1].replace(/&amp;/g, "&")
const tplDesc = template.match(/<meta\s+name="description"\s+content="([^"]*)"/)[1]

function inject(html, body, extraHead) {
  const out = html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/i, "")
    .replace("</head>", `${extraHead}\n  </head>`)
  return out.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
}

// Preguntas frecuentes visibles (<article><h3>¿...?</h3><p>...</p>) -> FAQPage
function faqLd(body) {
  const qa = [...body.matchAll(/<article[^>]*><h3[^>]*>([^<]*\?)<\/h3><p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => ({
    "@type": "Question",
    name: m[1].replace(/&amp;/g, "&").replace(/&#x27;/g, "'"),
    acceptedAnswer: { "@type": "Answer", text: m[2].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'") },
  }))
  return qa.length ? { "@type": "FAQPage", mainEntity: qa } : null
}

function withFaq(ld, body) {
  const faq = faqLd(body)
  if (faq) ld["@graph"].push(faq)
  return ld
}

// --- Fecha de última modificación de cada página -----------------------------
// Sale del último commit que tocó el archivo de la página (dato verificable, no la
// fecha del build). Vercel clona en superficial y ahí todos los archivos darían la
// misma fecha: en ese caso se usa scripts/fechas.json, que se regenera en local.
function git(args) {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim()
  } catch {
    return ""
  }
}
const gitCompleto = git(["rev-parse", "--is-shallow-repository"]) === "false"
const fechasFile = path.join(root, "scripts/fechas.json")
const fechasGuardadas = fs.existsSync(fechasFile) ? JSON.parse(fs.readFileSync(fechasFile, "utf8")) : {}
const fechasNuevas = {}

function archivoDeRuta(route) {
  if (route === "/") return "src/App.jsx"
  const i = appSrc.indexOf(`path="${route}"`)
  const comp = i < 0 ? null : appSrc.slice(i, i + 250).match(/<(\w+)\s*\/>/)?.[1]
  return comp ? `src/pages/${comp}.jsx` : null
}

function fechaModificacion(route) {
  const archivo = archivoDeRuta(route)
  const f = gitCompleto && archivo ? git(["log", "-1", "--format=%cs", "--", archivo]) : ""
  if (f) fechasNuevas[route] = f
  return f || fechasGuardadas[route] || null
}

// --- Datos estructurados que dependen del contenido visible ------------------
// Precios: solo los que la página muestra. Uno -> Offer; varios -> AggregateOffer (rango).
function ofertas(body, url) {
  const texto = body.replace(/<[^>]+>/g, " ")
  const valores = [...new Set([...texto.matchAll(/\$\s?(\d{1,3}(?:\.\d{3})+)/g)].map((m) => Number(m[1].replace(/\./g, ""))))].sort((a, b) => a - b)
  if (!valores.length) return null
  if (valores.length === 1) return { "@type": "Offer", price: valores[0], priceCurrency: "ARS", url }
  return { "@type": "AggregateOffer", lowPrice: valores[0], highPrice: valores[valores.length - 1], priceCurrency: "ARS", url }
}

function enriquecer(ld, body, route, fecha) {
  const url = SITE + route
  const nodos = ld["@graph"]
  const oferta = ofertas(body, url)
  for (const n of nodos) {
    if (oferta && (n["@type"] === "TouristTrip" || n["@type"] === "Service")) n.offers = oferta
  }
  if (fecha) {
    const pagina = nodos.find((n) => ["Article", "WebPage", "ContactPage", "AboutPage"].includes(n["@type"]))
    if (pagina) pagina.dateModified = fecha
    else nodos.push({ "@type": "WebPage", "@id": `${url}#pagina`, url, dateModified: fecha, isPartOf: { "@id": `${SITE}/#website` }, about: { "@id": `${SITE}/#organization` } })
  }
  return ld
}

function reset() {
  store.title = ""
  store.tags = new Map()
}

for (const route of routes) {
  reset()
  const body = render(route)
  const t = (k) => store.tags.get(k)?.attrs
  const title = store.title || tplTitle
  const description = t('meta[name="description"]')?.content ?? tplDesc
  const canonical = t('link[rel="canonical"]')?.href ?? SITE + route
  const ogTitle = t('meta[property="og:title"]')?.content ?? title
  const ogDesc = t('meta[property="og:description"]')?.content ?? description

  const fecha = fechaModificacion(route)
  const head = [
    `<title>${esc(title)}</title>`,
    ...(fecha ? [`<meta property="article:modified_time" content="${fecha}" />`] : []),
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    NOINDEX.has(route)
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link rel="alternate" hreflang="es-AR" href="${esc(canonical)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${esc(canonical)}" />`,
    `<meta property="og:site_name" content="MT Tours &amp; Transfers" />`,
    `<meta property="og:locale" content="es_AR" />`,
    `<meta property="og:type" content="${t('meta[property="og:type"]')?.content ?? "website"}" />`,
    `<meta property="og:title" content="${esc(ogTitle)}" />`,
    `<meta property="og:description" content="${esc(ogDesc)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(ogDesc)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${JSON.stringify(withFaq(enriquecer(jsonLd(route, title, description), body, route, fecha), body))}</script>`,
  ]
  const page = inject(template, body, head.map((h) => "    " + h).join("\n"))
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html")
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page)
}

if (gitCompleto && Object.keys(fechasNuevas).length) {
  fs.writeFileSync(fechasFile, JSON.stringify({ ...fechasGuardadas, ...fechasNuevas }, null, 2) + "\n")
}

reset()
const notFound = render("/__404__")
fs.writeFileSync(
  path.join(dist, "404.html"),
  inject(
    template,
    notFound,
    `    <title>Página no encontrada | MT Tours &amp; Transfers</title>\n    <meta name="robots" content="noindex" />`,
  ),
)

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerender OK: ${routes.length} rutas + 404.html`)
