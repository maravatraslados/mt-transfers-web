// Escribe title, descripción, canonical y Open Graph de una página.
// Se ejecuta al renderizar, así que también lo usa el prerender (document simulado).
const SITE = "https://mttransfers.com"

function upsert(selector, create) {
  let el = document.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

export function setSeo({ title, description, path }) {
  const canonicalUrl = SITE + path

  document.title = title

  const metaDescription = upsert('meta[name="description"]', () => {
    const m = document.createElement("meta")
    m.name = "description"
    return m
  })
  metaDescription.content = description

  const canonical = upsert('link[rel="canonical"]', () => {
    const l = document.createElement("link")
    l.rel = "canonical"
    return l
  })
  canonical.href = canonicalUrl

  const og = {
    "og:title": title,
    "og:description": description,
    "og:url": canonicalUrl,
    "og:type": "website",
  }
  for (const [property, content] of Object.entries(og)) {
    const meta = upsert(`meta[property="${property}"]`, () => {
      const m = document.createElement("meta")
      m.setAttribute("property", property)
      return m
    })
    meta.setAttribute("content", content)
  }
}
