function Catamarca2Dias() {
  return (
    <div className="tour-detail-page">

      <header className="header">
        <div className="logo">
          <span className="logo-mark">MT</span>

          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>
        </div>

        <a href="/" className="back-link">
          ← Volver al inicio
        </a>

        <a
          className="whatsapp-button"
          href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20organizar%20un%20viaje%20de%202%20d%C3%ADas%20por%20Catamarca."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main>

        <section className="two-days-hero">
          <div className="two-days-hero-content">

            <span className="section-kicker">
              CATAMARCA EN 2 DÍAS
            </span>

            <h1>
              Dos días para combinar paisajes, historia y experiencias.
            </h1>

            <p>
              Si disponés de dos días, podés conocer más de una zona de Catamarca
              y combinar distintos tipos de experiencias en un mismo viaje.
            </p>

            <a href="#propuestas" className="button button-primary">
              Ver propuestas
            </a>

          </div>
        </section>

        <section className="two-days-options" id="propuestas">

          <div className="section-heading">
            <span className="section-kicker">
              PROPUESTAS DE 2 DÍAS
            </span>

            <h2>Elegí la combinación que mejor se adapte a tu viaje</h2>

            <p>
              Estas propuestas combinan dos jornadas diferentes para que puedas
              conocer más de Catamarca sin apurarte.
            </p>
          </div>

          <div className="two-days-grid">

            <article className="two-days-card">
              <span className="two-days-tag">OPCIÓN 1</span>

              <h3>Montaña + Ambato</h3>

              <div className="two-days-day">
                <strong>DÍA 1</strong>
                <p>Cuesta del Portezuelo.</p>
              </div>

              <div className="two-days-day">
                <strong>DÍA 2</strong>
                <p>Cuesta de Singuil + Balcozna.</p>
              </div>

              <a href="/excursiones">
                Ver excursiones →
              </a>
            </article>

            <article className="two-days-card two-days-card-featured">
              <span className="two-days-tag">RECOMENDADO</span>

              <h3>Oeste Catamarqueño</h3>

              <div className="two-days-day">
                <strong>DÍA 1</strong>
                <p>Ruta del Adobe + Fiambalá.</p>
              </div>

              <div className="two-days-day">
                <strong>DÍA 2</strong>
                <p>Continuación por Fiambalá y Termas.</p>
              </div>

              <a href="/excursiones/ruta-del-adobe-fiambala">
                Ver experiencia →
              </a>
            </article>

            <article className="two-days-card">
              <span className="two-days-tag">OPCIÓN 3</span>

              <h3>Sierras + Cultura</h3>

              <div className="two-days-day">
                <strong>DÍA 1</strong>
                <p>El Rodeo + Virgen.</p>
              </div>

              <div className="two-days-day">
                <strong>DÍA 2</strong>
                <p>Vuelta al Cerro Ancasti.</p>
              </div>

              <a href="/excursiones">
                Ver excursiones →
              </a>
            </article>

          </div>

        </section>

        <section className="tour-final-cta">
          <div className="tour-final-cta-content">

            <span className="section-kicker">
              ¿QUERÉS OTRA COMBINACIÓN?
            </span>

            <h2>Podemos organizar tus dos días según tus intereses.</h2>

            <p>
              Contanos qué lugares querés conocer, dónde te alojás y qué tipo
              de experiencia buscás. Podemos ayudarte a armar una propuesta
              personalizada.
            </p>

            <a
              href="https://wa.me/5493834696065?text=Hola%2C%20tengo%202%20d%C3%ADas%20para%20conocer%20Catamarca%20y%20quisiera%20armar%20un%20itinerario."
              target="_blank"
              rel="noopener noreferrer"
              className="tour-detail-whatsapp"
            >
              Planificar por WhatsApp
            </a>

          </div>
        </section>

      </main>

    </div>
  )
}

export default Catamarca2Dias