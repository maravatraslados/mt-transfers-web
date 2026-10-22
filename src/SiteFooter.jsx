const columns = [
  {
    title: "Excursiones",
    links: [
      ["/excursiones", "Todas las excursiones"],
      ["/excursiones/cuesta-del-portezuelo", "Cuesta del Portezuelo"],
      ["/excursiones/cuesta-de-singuil-balcozna", "Cuesta de Singuil y Balcozna"],
      ["/excursiones/vuelta-al-cerro-ancasti", "Vuelta al Cerro Ancasti"],
      ["/excursiones/el-rodeo-virgen", "El Rodeo y la Virgen"],
      ["/excursiones/ruta-del-adobe-fiambala", "Ruta del Adobe y Fiambalá"],
      ["/excursiones/vuelta-oeste-catamarqueno", "Vuelta Oeste Catamarqueño"],
      ["/excursiones/circuito-integral-catamarca", "Circuito integral"],
      ["/excursiones/aventura-puna-catamarquena", "Aventura Puna"],
      ["/excursiones/fiambala-ruta-seismiles-4-dias", "Ruta de los Seismiles"],
    ],
  },
  {
    title: "Planificá tu viaje",
    links: [
      ["/catamarca-1-dia", "Catamarca en 1 día"],
      ["/catamarca-2-dias", "Catamarca en 2 días"],
      ["/catamarca-3-dias-o-mas", "Catamarca en 3 días o más"],
      ["/guia/mejor-epoca-catamarca", "Mejor época para viajar"],
      ["/guia/mejor-epoca-catamarca/catamarca-en-verano", "Catamarca en verano"],
      ["/guia/mejor-epoca-catamarca/catamarca-en-otono", "Catamarca en otoño"],
      ["/guia/mejor-epoca-catamarca/catamarca-en-invierno", "Catamarca en invierno"],
      ["/guia/mejor-epoca-catamarca/catamarca-en-primavera", "Catamarca en primavera"],
    ],
  },
  {
    title: "Guía de Catamarca",
    links: [
      ["/guia", "Guía de Catamarca"],
      ["/guia/san-fernando-del-valle-de-catamarca", "San Fernando del Valle"],
      ["/guia/fiambala", "Fiambalá"],
      ["/guia/campo-de-piedra-pomez", "Campo de Piedra Pómez"],
      ["/guia/antofagasta-de-la-sierra", "Antofagasta de la Sierra"],
      ["/guia/belen-londres", "Belén y Londres"],
      ["/guia/el-rodeo-las-juntas", "El Rodeo y Las Juntas"],
    ],
  },
  {
    title: "Traslados y empresa",
    links: [
      ["/traslados-catamarca", "Traslados en Catamarca"],
      ["/traslado-aeropuerto-catamarca", "Traslado al aeropuerto"],
      ["/combi-minibus-catamarca", "Combi y minibús"],
      ["/reservar", "Reservar"],
      ["/quienes-somos", "Quiénes somos"],
      ["/contacto", "Contacto"],
    ],
  },
]

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner footer-inner-wide">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <span className="logo-mark">MT</span>
            <div><strong>TOURS & TRANSFERS</strong><small>Catamarca, Argentina</small></div>
          </div>
          <p>Descubrí, planificá y viví Catamarca con experiencias y traslados pensados para vos.</p>
        </div>
        {columns.map((column) => (
          <nav className="footer-column" key={column.title} aria-label={column.title}>
            <h4>{column.title}</h4>
            {column.links.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 MT Tours & Transfers</span>
        <div className="footer-legal-links">
          <a href="/politica-de-privacidad">Política de privacidad</a>
          <a href="/politica-de-cookies">Política de cookies</a>
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
        </div>
        <span>Catamarca, Argentina</span>
      </div>
    </footer>
  )
}

export default SiteFooter
