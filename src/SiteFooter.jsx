function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <span className="logo-mark">MT</span>
            <div><strong>TOURS & TRANSFERS</strong><small>Catamarca, Argentina</small></div>
          </div>
          <p>Descubrí, planificá y viví Catamarca con experiencias y traslados pensados para vos.</p>
        </div>
        <div className="footer-column">
          <h4>Explorá</h4>
          <a href="/excursiones" target="_blank" rel="noopener noreferrer">Excursiones</a>
        </div>
        <div className="footer-column">
          <h4>Planificá</h4>
          <a href="/catamarca-1-dia" target="_blank" rel="noopener noreferrer">Catamarca en 1 día</a>
          <a href="/catamarca-2-dias" target="_blank" rel="noopener noreferrer">Catamarca en 2 días</a>
          <a href="/catamarca-3-dias-o-mas" target="_blank" rel="noopener noreferrer">Catamarca en 3 días o más</a>
          <a href="/reservar" target="_blank" rel="noopener noreferrer">Reservar</a>
        </div>
        <div className="footer-column">
          <h4>MT</h4>
          <a href="/traslados-catamarca" target="_blank" rel="noopener noreferrer">Transfers</a>
          <a href="/guia" target="_blank" rel="noopener noreferrer">Guía de Catamarca</a>
          <a href="/quienes-somos" target="_blank" rel="noopener noreferrer">Quiénes somos</a>
          <a href="/contacto" target="_blank" rel="noopener noreferrer">Contacto</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MT Tours & Transfers</span>
        <div className="footer-legal-links">
          <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
          <a href="/politica-de-cookies" target="_blank" rel="noopener noreferrer">Política de cookies</a>
          <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">Términos y condiciones</a>
        </div>
        <span>Catamarca, Argentina</span>
      </div>
    </footer>
  )
}

export default SiteFooter
