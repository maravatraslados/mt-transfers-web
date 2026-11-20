import { useState } from "react"
import SocialLinks from "./SocialLinks"

// Cada ítem es un enlace directo o un grupo con submenú.
const menu = [
  { label: "Inicio", href: "/" },
  {
    label: "Catamarca",
    items: [
      ["/excursiones", "Excursiones"],
      ["/#planifica", "Planificá tu viaje"],
      ["/guia", "Guía de Catamarca"],
    ],
  },
  {
    label: "La Rioja",
    items: [
      ["/la-rioja", "Inicio La Rioja"],
      ["/la-rioja/chilecito-cuesta-de-miranda", "Chilecito y Cuesta de Miranda"],
      ["/la-rioja/paseo-ciudad-costa-riojana", "Ciudad y Costa Riojana"],
      ["/la-rioja/valle-de-la-luna-talampaya", "Valle de la Luna y Talampaya"],
      ["/la-rioja/traslado-aeropuerto-la-rioja", "Traslado aeropuerto"],
    ],
  },
  {
    label: "Traslados",
    items: [
      ["/traslados-catamarca", "Transfers"],
      ["/traslado-aeropuerto-catamarca", "Traslado aeropuerto Catamarca"],
      ["/traslados-la-rioja", "Traslados La Rioja"],
      ["/combi", "Combi, minibús y colectivo"],
      ["/mineria", "Servicios para minería"],
    ],
  },
  { label: "Reservar", href: "/reservar" },
  {
    label: "Nosotros",
    items: [
      ["/quienes-somos", "Quiénes somos"],
      ["/contacto", "Contacto"],
    ],
  },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)

  const closeAll = () => {
    setMenuOpen(false)
    setOpenGroup(null)
  }

  return (
    <>
    <header className="header">
      <a href="#contenido-principal" className="skip-link">
        Saltar al contenido
      </a>
      <a href="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src="/favicon.png"
          alt="MT Tours & Transfers"
          width="46"
          height="46"
          className="logo-mark"
          style={{ objectFit: "contain", padding: "0" }}
        />
        <div>
          <strong>TOURS & TRANSFERS</strong>
          <small>Catamarca y La Rioja, Argentina</small>
        </div>
      </a>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Menú principal">
        {menu.map((item) =>
          item.items ? (
            <div key={item.label} className={`nav-group ${openGroup === item.label ? "open" : ""}`}>
              <button
                type="button"
                aria-expanded={openGroup === item.label}
                onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
              >
                {item.label}
              </button>

              <div className="nav-sub">
                <div className="nav-sub-list">
                  {item.items.map(([href, label]) => (
                    <a key={href} href={href} onClick={closeAll}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <a key={item.href} href={item.href} onClick={closeAll}>
              {item.label}
            </a>
          ),
        )}
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <SocialLinks variant="header" />

      <a
        className="whatsapp-button"
        href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20una%20excursi%C3%B3n%20en%20Catamarca."
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </header>
    <div id="contenido-principal" tabIndex={-1} style={{ outline: "none" }} />
    </>
  )
}

export default SiteHeader
