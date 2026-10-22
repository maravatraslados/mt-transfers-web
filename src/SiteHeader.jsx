import { useState } from "react"

const links = [
  ["/", "Inicio"],
  ["/excursiones", "Excursiones"],
  ["/#planifica", "Planificá"],
  ["/traslados-catamarca", "Transfers"],
  ["/traslado-aeropuerto-catamarca", "Traslado aeropuerto"],
  ["/combi-minibus-catamarca", "Combi y minibús"],
  ["/guia", "Guía"],
  ["/reservar", "Reservar"],
  ["/quienes-somos", "Quiénes somos"],
  ["/contacto", "Contacto"],
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <a href="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src="/favicon.png"
          alt="MT Tours & Transfers"
          className="logo-mark"
          style={{ objectFit: "contain", padding: "0" }}
        />
        <div>
          <strong>TOURS & TRANSFERS</strong>
          <small>Catamarca, Argentina</small>
        </div>
      </a>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Menú principal">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <a
        className="whatsapp-button"
        href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20una%20excursi%C3%B3n%20en%20Catamarca."
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </header>
  )
}

export default SiteHeader
