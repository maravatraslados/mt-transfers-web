// Genera dist/<ruta>/index.md para cada página indexable, a partir del HTML prerenderizado.
// El servidor (.htaccess) lo entrega solo cuando la petición lleva `Accept: text/markdown`;
// los navegadores siguen recibiendo el HTML. Corre después de prerender.mjs.
import fs from "node:fs"
import path from "node:path"
import TurndownService from "turndown"

const root = path.resolve(import.meta.dirname, "..")
const dist = path.join(root, "dist")
const SITE = "https://mttransfers.com"

// Páginas que no deben ofrecerse a agentes (misma lista que NOINDEX en prerender.mjs,
// más el formulario de reserva, bloqueado en robots.txt).
const EXCLUIR = new Set(["reservar", "politica-de-privacidad", "politica-de-cookies", "terminos-y-condiciones"])

const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced", linkStyle: "inlined" })
td.remove(["script", "style", "noscript", "svg", "header", "footer", "nav", "button", "form", "iframe", "video", "picture", "source"])
// Imágenes decorativas (alt vacío) fuera; las que describen algo se conservan con URL absoluta.
td.addRule("imagenes", {
  filter: "img",
  replacement: (_c, nodo) => {
    const alt = (nodo.getAttribute("alt") ?? "").trim()
    const src = nodo.getAttribute("src") ?? ""
    return alt && src ? `![${alt}](${absoluta(src)})` : ""
  },
})
// Enlaces relativos -> absolutos, para que el Markdown funcione fuera del sitio.
td.addRule("enlaces", {
  filter: (n) => n.nodeName === "A" && n.getAttribute("href"),
  replacement: (contenido, nodo) => {
    const href = nodo.getAttribute("href")
    const texto = contenido.trim()
    if (!texto) return ""
    if (href.startsWith("#")) return texto
    return `[${texto}](${absoluta(href)})`
  },
})

function absoluta(url) {
  if (/^(https?:|mailto:|tel:)/i.test(url)) return url
  return SITE + (url.startsWith("/") ? url : `/${url}`)
}

function* paginas(dir, ruta = "") {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || e.name === "assets") continue
    const sub = path.join(dir, e.name)
    const r = ruta ? `${ruta}/${e.name}` : e.name
    if (fs.existsSync(path.join(sub, "index.html"))) yield { ruta: r, archivo: path.join(sub, "index.html") }
    yield* paginas(sub, r)
  }
}

const lista = [{ ruta: "", archivo: path.join(dist, "index.html") }, ...paginas(dist)]
let n = 0
for (const { ruta, archivo } of lista) {
  if (EXCLUIR.has(ruta)) continue
  const html = fs.readFileSync(archivo, "utf8")
  const cuerpo = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]
  if (!cuerpo) continue
  const titulo = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.replace(/&amp;/g, "&").trim()
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  const md = td.turndown(cuerpo).replace(/\n{3,}/g, "\n\n").trim()
  if (md.split(/\s+/).length < 30) continue // no hay contenido que valga la pena
  const cabecera = [`<!-- ${titulo ?? ""} -->`, `<!-- Fuente: ${SITE}/${ruta} -->`, desc ? `<!-- ${desc} -->` : ""].filter(Boolean).join("\n")
  fs.writeFileSync(path.join(path.dirname(archivo), "index.md"), `${cabecera}\n\n${md}\n`)
  n++
}
console.log(`Markdown OK: ${n} páginas`)
