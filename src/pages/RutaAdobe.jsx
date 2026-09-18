import "../App.css"

import rutaAdobe from "../assets/ruta-adobe.jpg"
import oratorioOrquera from "../assets/oratorio-orquera.jpg"
import andacollo from "../assets/andacollo.jpg"
import iglesiaRosario from "../assets/iglesia-rosario.jpg"
import termasFiambala from "../assets/termas-fiambala.jpg"
import canonIndio from "../assets/canon-indio.jpg"
import mapaCanonIndio from "../assets/mapa-canon-indio.jpg"
import dunasTaton from "../assets/dunas-taton.jpg"
import mapaRutaAdobe from "../assets/mapa-ruta-adobe.jpg"
import sanPedroFiambala from "../assets/san-pedro-fiambala.jpeg"
import mayorazgoAnillaco from "../assets/mayorazgo-anillaco.jpeg"

function RutaAdobe() {

  const title =
    "Fiambalá, Termas y Ruta del Adobe | Excursión en Catamarca";

  const description =
    "Excursión a Fiambalá desde Catamarca Capital o Tinogasta: Termas de Fiambalá, Ruta del Adobe, iglesias históricas y paisajes del oeste catamarqueño. Consultá tarifas y disponibilidad.";

  const canonicalUrl =
    "https://mttransfers.com/excursiones/ruta-del-adobe-fiambala";

  document.title = title;

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }

  metaDescription.content = description;

  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;

  const setOpenGraph = (property, content) => {
    let meta = document.querySelector(
      `meta[property="${property}"]`
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
  };

  setOpenGraph("og:title", title);
  setOpenGraph("og:description", description);
  setOpenGraph("og:url", canonicalUrl);
  setOpenGraph("og:type", "website");

  return (
    <div className="site">
      <header className="header">
        <div className="logo">
          <span className="logo-mark">MT</span>

          <div>
            <strong>TOURS & TRANSFERS</strong>
            <small>Catamarca, Argentina</small>
          </div>
        </div>

        <nav className="nav nav-desktop">
          <a href="/">Inicio</a>
          <a href="/excursiones">Excursiones</a>
          <a href="/#planifica">Planificá</a>
          <a
  href="/traslados-catamarca"
  target="_blank"
  rel="noopener noreferrer"
>
  Transfers
</a>
          <a href="/#guia-catamarca">Guía</a>
          <a href="/#opiniones">Opiniones</a>
        </nav>

        <a
  className="whatsapp-button"
  href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20por%20una%20excursi%C3%B3n%20en%20Catamarca."
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp
</a>
      </header>

      <main className="tour-detail-page">
        <section
          className="tour-detail-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.80) 0%,
                rgba(0, 0, 0, 0.50) 50%,
                rgba(0, 0, 0, 0.16) 100%
              ),
              url(${rutaAdobe})
            `,
          }}
        >
          <div className="tour-detail-hero-content">
            <span className="section-kicker">FIAMBALÁ · OESTE CATAMARQUEÑO</span>

            <h1>Fiambalá + Termas y Ruta del Adobe</h1>

            <p>
              Historia, arquitectura, termas y paisajes del oeste de Catamarca
              en una experiencia que podés vivir en uno o dos días.
            </p>

            <div className="tour-detail-meta">
              <span>📍 Fiambalá · Tinogasta</span>
              <span>🗓 1 o 2 días</span>
              <span>🚗 Desde Capital: 585 km aprox.</span>
              <span>🚗 Desde Tinogasta / Fiambalá: 145 km aprox.</span>
              <span>🚘 Salidas desde Capital, Tinogasta o Fiambalá</span>
            </div>

            <a href="#experiencias-adobe" className="button button-primary">
              Elegir experiencia
            </a>
          </div>
        </section>

<section className="tour-options-section" id="experiencias-adobe" style={{ background: "#f4f1eb", padding: "72px 20px" }}>
  <div className="section-heading" style={{ marginBottom: "34px" }}>
    <span className="section-kicker">ELEGÍ TU EXPERIENCIA</span>
    <h2 style={{ color: "#142235", marginBottom: "10px" }}>Dos formas de descubrir Fiambalá</h2>
    <p style={{ color: "#5d6673", maxWidth: "760px", margin: "0 auto" }}>
      Elegí una excursión de día completo o una experiencia de dos días para conocer
      Fiambalá, sus Termas y la histórica Ruta del Adobe.
    </p>
  </div>

  <div className="tour-options-grid" style={{ alignItems: "stretch", gap: "28px" }}>
    <article style={{ background: "#fff", borderRadius: "22px", overflow: "hidden", boxShadow: "0 14px 36px rgba(20,34,53,.10)", border: "1px solid #e8e1d6", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", minHeight: "245px", backgroundImage: `linear-gradient(0deg, rgba(8,20,25,.78) 0%, rgba(8,20,25,.08) 72%), url(${termasFiambala})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <span style={{ position: "absolute", top: "18px", left: "18px", background: "#176b58", color: "#fff", borderRadius: "999px", padding: "8px 15px", fontWeight: "800", fontSize: ".82rem", letterSpacing: ".06em" }}>1 DÍA</span>
        <div style={{ position: "absolute", left: "24px", right: "24px", bottom: "22px", color: "#fff" }}>
          <h3 style={{ margin: 0, color: "#fff", fontSize: "1.65rem", lineHeight: 1.15 }}>Fiambalá, Termas y Ruta del Adobe</h3>
          <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,.92)", lineHeight: 1.5 }}>Historia, paisajes y aguas termales en una jornada por el oeste catamarqueño.</p>
        </div>
      </div>

      <div style={{ padding: "26px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gap: "12px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "18px", alignItems: "center", padding: "17px 18px", borderRadius: "15px", background: "#f8f5ef", border: "1px solid #eadcc7" }}>
            <div><strong style={{ display: "block", color: "#163e39" }}>🚗 Desde Catamarca Capital</strong><small style={{ color: "#66717e" }}>Día completo · mínimo 2 pasajeros</small></div>
            <div style={{ textAlign: "right" }}><strong style={{ display: "block", color: "#b65319", fontSize: "1.45rem" }}>$230.000</strong><small style={{ color: "#66717e" }}>por persona</small></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "18px", alignItems: "center", padding: "17px 18px", borderRadius: "15px", background: "#f8f5ef", border: "1px solid #eadcc7" }}>
            <div><strong style={{ display: "block", color: "#163e39" }}>🚗 Desde Tinogasta / Fiambalá</strong><small style={{ color: "#66717e" }}>Circuito local · mínimo 2 pasajeros</small></div>
            <div style={{ textAlign: "right" }}><strong style={{ display: "block", color: "#b65319", fontSize: "1.45rem" }}>$125.000</strong><small style={{ color: "#66717e" }}>por persona</small></div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "18px", padding: "17px 20px", borderRadius: "15px", background: "#fffaf4", border: "1px solid #ead6c2", marginTop: "14px" }}>
          <div>
            <strong style={{ display: "block", color: "#173f3b", fontSize: "1rem" }}>⭐ Experiencia MT · 2 días</strong>
            <span style={{ color: "#69727e", fontSize: ".86rem" }}>Mínimo 2 pasajeros</span>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <strong style={{ display: "block", color: "#ad5a20", fontSize: "1.55rem", lineHeight: 1 }}>$290.000</strong>
            <span style={{ color: "#69727e", fontSize: ".82rem" }}>por persona</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px 18px", margin: "20px 2px 24px", color: "#263441", fontSize: ".94rem" }}>
          <span>✓ Ruta del Adobe</span><span>✓ Fiambalá</span><span>✓ Oratorio de los Orquera</span><span>✓ Termas de Fiambalá</span><span>✓ Andacollo y Anillaco</span><span>✓ Paradas panorámicas</span>
        </div>

        <a href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20excursi%C3%B3n%20Fiambal%C3%A1%20%2B%20Termas%20%2B%20Ruta%20del%20Adobe." target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "16px 20px", borderRadius: "13px", background: "#176b58", color: "#fff", fontWeight: "800", textDecoration: "none", boxShadow: "0 9px 20px rgba(23,107,88,.20)", marginTop: "auto" }}>💬 Quiero esta experiencia →</a>
        <p style={{ textAlign: "center", color: "#69727e", fontSize: ".82rem", margin: "11px 0 0" }}>Pasajero individual: consultar tarifa</p>
      </div>
    </article>

    <article style={{ background: "#fff", borderRadius: "22px", overflow: "hidden", boxShadow: "0 14px 36px rgba(20,34,53,.10)", border: "1px solid #e8e1d6", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", minHeight: "245px", backgroundImage: `linear-gradient(0deg, rgba(35,18,7,.78) 0%, rgba(35,18,7,.08) 72%), url(${sanPedroFiambala})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <span style={{ position: "absolute", top: "18px", left: "18px", background: "#ad5a20", color: "#fff", borderRadius: "999px", padding: "8px 15px", fontWeight: "800", fontSize: ".82rem", letterSpacing: ".06em" }}>2 DÍAS</span>
        <div style={{ position: "absolute", left: "24px", right: "24px", bottom: "22px", color: "#fff" }}>
          <h3 style={{ margin: 0, color: "#fff", fontSize: "1.65rem", lineHeight: 1.15 }}>Experiencia completa en Fiambalá</h3>
          <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,.92)", lineHeight: 1.5 }}>Más tiempo para disfrutar las Termas, la Ruta del Adobe y los paisajes de Fiambalá.</p>
        </div>
      </div>

      <div style={{ padding: "26px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "18px 20px", borderRadius: "15px", background: "#fbf4ea", border: "1px solid #ecd8bd", color: "#39434e", lineHeight: 1.7 }}>
          <strong style={{ display: "block", color: "#8d4518", marginBottom: "8px" }}>Una escapada para disfrutar sin apuro</strong>
          Incluye el recorrido por la Ruta del Adobe, Fiambalá y Termas, noche en destino y tiempo para sumar atractivos naturales según disponibilidad.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px 18px", margin: "24px 2px", color: "#263441", fontSize: ".94rem" }}>
          <span>✓ Ruta del Adobe</span><span>✓ Fiambalá y Termas</span><span>✓ Noche en Fiambalá</span><span>✓ Cañón del Indio</span><span>✓ Dunas de Tatón</span><span>✓ Regreso a Capital</span>
        </div>

        <div style={{ background: "#fff8e8", borderLeft: "4px solid #d59b32", borderRadius: "10px", padding: "13px 15px", color: "#70551e", fontSize: ".86rem", lineHeight: 1.5, marginBottom: "18px" }}>Alojamiento, ingreso a termas y actividades específicas se coordinan según disponibilidad.</div>

        <a href="https://wa.me/5493834696065?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20la%20Experiencia%20MT%20de%202%20d%C3%ADas%20en%20Fiambal%C3%A1." target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "16px 20px", borderRadius: "13px", background: "#ad5a20", color: "#fff", fontWeight: "800", textDecoration: "none", boxShadow: "0 9px 20px rgba(173,90,32,.18)", marginTop: "auto" }}>Consultar experiencia de 2 días →</a>
        <p style={{ textAlign: "center", color: "#69727e", fontSize: ".82rem", margin: "11px 0 0" }}>Pasajero individual: consultar tarifa</p>
      </div>
    </article>
  </div>
</section>

<section className="tour-info-section">
  <div className="tour-info-grid">

    <div className="tour-info-block">
      <span className="section-kicker">ITINERARIO · 1 DÍA</span>
      <h2>Fiambalá + Termas y Ruta del Adobe</h2>

      <div className="tour-timeline">

        <div className="tour-step">
          <span>1</span>
          <div>
            <h3>Salida desde Catamarca Capital</h3>
            <p>
              Comenzamos temprano el viaje hacia el oeste catamarqueño, rumbo a Tinogasta y Fiambalá. Si ya estás en Tinogasta o Fiambalá, coordinamos el punto de encuentro y adaptamos el inicio del recorrido.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Ruta del Adobe</h3>
            <p>
              La Ruta del Adobe se desarrolla entre Tinogasta y Fiambalá a lo largo de unos 55 km por la RN 60. Recorremos construcciones históricas de adobe, con paradas en sitios como el Oratorio de los Orquera, Andacollo y Anillaco.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>Llegada a Fiambalá</h3>
            <p>
              Llegamos a Fiambalá, uno de los destinos destacados del oeste de Catamarca, rodeado de valles, quebradas y montañas. Hacemos una pausa para conocer su entorno antes de continuar hacia las termas.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Termas de Fiambalá</h3>
            <p>
              Visitamos las Termas de Fiambalá, ubicadas a unos 17 km de la localidad y aproximadamente a 1.750 m s. n. m. El complejo posee 14 piletas de piedra con aguas que van aproximadamente de 28 °C a 51 °C. El ingreso funciona por turnos y está sujeto a cupos y disponibilidad.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Regreso a Catamarca Capital</h3>
            <p>
              Finalizamos la jornada regresando a la ciudad después de una
              experiencia que combina historia, paisaje y relax.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="tour-includes-card">
      <span className="section-kicker">1 DÍA</span>
      <h3>Tarifas de la excursión</h3>

      <ul>
        <li>💰 Desde Catamarca Capital: $230.000 por persona</li>
        <li>💰 Desde Tinogasta / Fiambalá: $125.000 por persona</li>
        <li>👥 Mínimo 2 pasajeros</li>
        <li>👤 Pasajero individual: consultar tarifa</li>
        <li>🚗 Desde Capital: 585 km aprox. ida, circuito y regreso</li>
        <li>🚗 Desde Tinogasta / Fiambalá: 145 km aprox. de circuito</li>
        <li>✓ Ruta del Adobe</li>
        <li>✓ Fiambalá + Termas de Fiambalá</li>
        <li>✓ Atención personalizada</li>
      </ul>

      <h3 className="tour-second-title">Importante</h3>

      <ul>
        <li>• Desde Catamarca Capital es una jornada extensa y requiere salida temprana</li>
        <li>• Desde Tinogasta o Fiambalá el recorrido es más corto</li>
        <li>• Ingreso a Termas de Fiambalá sujeto a turnos, cupos y disponibilidad</li>
      </ul>
    </div>

  </div>
</section>


<section className="tour-info-section" style={{ background: "#ffffff" }}>
  <div className="tour-info-grid">

    <div className="tour-info-block">
      <span className="section-kicker">ITINERARIO · 2 DÍAS</span>
      <h2>Experiencia MT por Fiambalá</h2>

      <div className="tour-timeline">

        <div className="tour-step">
          <span>1</span>
          <div>
            <h3>Día 1 · Ruta del Adobe</h3>
            <p>
              Salimos desde Capital, recorremos Tinogasta y los principales
              sitios históricos de la Ruta del Adobe.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>2</span>
          <div>
            <h3>Día 1 · Fiambalá + Termas</h3>
            <p>
              Llegamos a Fiambalá, disfrutamos las termas y cerramos la jornada
              alojándonos en la localidad.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>3</span>
          <div>
            <h3>Día 2 · Cañón del Indio</h3>
            <p>
              Comenzamos el segundo día con una experiencia de naturaleza
              y caminata entre formaciones rocosas.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>4</span>
          <div>
            <h3>Día 2 · Dunas de Tatón</h3>
            <p>
              Continuamos hacia el paisaje de dunas, uno de los grandes
              contrastes naturales del oeste catamarqueño.
            </p>
          </div>
        </div>

        <div className="tour-step">
          <span>5</span>
          <div>
            <h3>Regreso a Catamarca Capital</h3>
            <p>
              Después de disfrutar Fiambalá y sus paisajes iniciamos el regreso
              hacia la ciudad.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="tour-includes-card">
      <span className="section-kicker">⭐ EXPERIENCIA MT</span>
      <h3>Dos días para disfrutar sin apuro</h3>

      <ul>
        <li>✓ Ruta del Adobe</li>
        <li>✓ Fiambalá</li>
        <li>✓ Termas</li>
        <li>✓ Noche en Fiambalá</li>
        <li>✓ Cañón del Indio</li>
        <li>✓ Dunas de Tatón</li>
      </ul>

      <h3 className="tour-second-title">Opcional</h3>

      <ul>
        <li>• Excursión 4x4 con prestador local habilitado</li>
        <li>• Sujeto a disponibilidad y coordinación previa</li>
      </ul>
    </div>

  </div>
</section>

<section className="story-section">
  <div className="section-heading">
    <span className="section-kicker">FIAMBALÁ · HISTORIA, TERMAS Y PATRIMONIO</span>
    <h2>Descubrí Fiambalá, sus Termas y la histórica Ruta del Adobe</h2>
  </div>

  <div style={{ maxWidth: "1050px", margin: "0 auto 48px", color: "#39434e", fontSize: "1.04rem", lineHeight: 1.85 }}>
    <p>
      <strong>Fiambalá</strong> es uno de los destinos más representativos del oeste de Catamarca
      y un punto estratégico para descubrir paisajes cordilleranos, patrimonio histórico,
      arquitectura tradicional y algunas de las experiencias más reconocidas del
      <strong> turismo en Catamarca</strong>.
    </p>

    <p>
      A solamente <strong>17 km de la ciudad de Fiambalá</strong> se encuentran las famosas
      <strong> Termas de Fiambalá</strong>, enclavadas en una quebrada al pie de la Cordillera
      de los Andes y a aproximadamente <strong>1.750 metros sobre el nivel del mar</strong>.
      El complejo cuenta con <strong>14 piletas de piedra</strong> distribuidas en distintos
      niveles naturales de la montaña.
    </p>

    <p>
      Uno de los grandes atractivos de las <strong>Termas de Fiambalá</strong> es la variedad
      de temperatura de sus aguas. Los diferentes piletones presentan temperaturas que van
      aproximadamente desde los <strong>28 °C hasta los 51 °C</strong>, ofreciendo una
      experiencia termal rodeada por el paisaje árido y montañoso característico de esta
      región de Catamarca.
    </p>

    <p>
      Pero una <strong>excursión a Fiambalá desde Catamarca Capital</strong> permite conocer
      mucho más que sus aguas termales. En el recorrido hacia Fiambalá atravesamos la
      histórica <strong>Ruta del Adobe</strong>, uno de los circuitos culturales más
      representativos del oeste catamarqueño.
    </p>

    <p>
      La <strong>Ruta del Adobe entre Tinogasta y Fiambalá</strong> se extiende por
      aproximadamente <strong>55 km</strong> y reúne antiguas iglesias, capillas, casonas y
      construcciones realizadas con técnicas tradicionales de adobe. Algunas conservan
      <strong> más de 300 años de historia</strong> y permiten comprender cómo la arquitectura
      local se adaptó durante siglos al clima y al paisaje del oeste de Catamarca.
    </p>

    <p>
      Entre los sitios históricos vinculados al circuito se destacan el
      <strong> Oratorio de los Orquera</strong>, la <strong>Iglesia de Andacollo</strong>,
      el <strong>Mayorazgo de Anillaco</strong>, la <strong>Iglesia Nuestra Señora del Rosario</strong>,
      las ruinas de <strong>Watungasta</strong>, la <strong>Iglesia de San Pedro de Fiambalá</strong>
      y la antigua <strong>Comandancia de Armas</strong>.
    </p>

    <p>
      De esta manera, nuestra experiencia <strong>Fiambalá + Termas y Ruta del Adobe</strong>
      combina en una misma propuesta <strong>turismo en Fiambalá</strong>, historia de
      Catamarca, arquitectura de adobe, paisajes del oeste catamarqueño y aguas termales
      en plena montaña. Una alternativa pensada tanto para quienes buscan
      <strong> excursiones desde Catamarca Capital</strong> como para viajeros que ya se
      encuentran alojados en <strong>Tinogasta o Fiambalá</strong>.
    </p>
  </div>

  <div className="story-grid">

    <article className="story-card">
      <img src={oratorioOrquera} alt="Oratorio de los Orquera en la Ruta del Adobe Catamarca" />
      <div className="story-card-content">
        <span>EL PUESTO · RUTA DEL ADOBE</span>
        <h3>Oratorio de los Orquera</h3>
        <p>
          Una de las construcciones históricas más representativas de la
          <strong> Ruta del Adobe</strong>. Su arquitectura permite descubrir las técnicas
          tradicionales que dieron identidad a las viviendas y templos del oeste catamarqueño.
        </p>
      </div>
    </article>

    <article className="story-card">
      <img src={andacollo} alt="Iglesia de Andacollo Ruta del Adobe Tinogasta Catamarca" />
      <div className="story-card-content">
        <span>LA FALDA · PATRIMONIO</span>
        <h3>Iglesia de Andacollo</h3>
        <p>
          Parte del patrimonio religioso del corredor entre
          <strong> Tinogasta y Fiambalá</strong>. Su arquitectura sencilla conserva la
          memoria de las comunidades que crecieron entre montañas y caminos del oeste.
        </p>
      </div>
    </article>

    <article className="story-card">
      <img src={iglesiaRosario} alt="Iglesia Nuestra Señora del Rosario de Anillaco Ruta del Adobe" />
      <div className="story-card-content">
        <span>ANILLACO · HISTORIA</span>
        <h3>Nuestra Señora del Rosario</h3>
        <p>
          Uno de los testimonios religiosos históricos de la zona y parte de un circuito
          donde algunas construcciones conservan <strong>más de 300 años de historia</strong>.
        </p>
      </div>
    </article>

    <article className="story-card">
      <img src={termasFiambala} alt="Termas de Fiambalá Catamarca piletas de aguas termales" />
      <div className="story-card-content">
        <span>FIAMBALÁ · 17 KM DE LA CIUDAD</span>
        <h3>Termas de Fiambalá</h3>
        <p>
          A unos <strong>1.750 m s. n. m.</strong>, las Termas de Fiambalá cuentan con
          <strong> 14 piletas de piedra</strong> y aguas con temperaturas aproximadas de
          <strong> 28 °C a 51 °C</strong>, en un entorno natural de montaña.
        </p>
      </div>
    </article>

    <article className="story-card">
      <img src={canonIndio} alt="Cañón del Indio excursión en Fiambalá Catamarca" />
      <div className="story-card-content">
        <span>FIAMBALÁ · EXPERIENCIA 2 DÍAS</span>
        <h3>Cañón del Indio</h3>
        <p>
          Una experiencia de naturaleza y caminata entre formaciones rocosas que permite
          conocer otra cara de <strong>Fiambalá</strong>. Requiere tiempo, condiciones
          adecuadas y coordinación previa.
        </p>
      </div>
    </article>

    <article className="story-card">
      <img src={dunasTaton} alt="Dunas de Tatón Fiambalá turismo Catamarca" />
      <div className="story-card-content">
        <span>FIAMBALÁ · PAISAJES</span>
        <h3>Dunas de Tatón</h3>
        <p>
          Grandes extensiones de arena que contrastan con la Cordillera de los Andes y
          completan la diversidad de paisajes que puede descubrirse al hacer
          <strong> turismo en Fiambalá</strong>.
        </p>
      </div>
    </article>

  </div>
</section>

<section className="tour-gallery-section">
  <div className="section-heading">
    <span className="section-kicker">GALERÍA</span>

    <h2>Fiambalá: termas, historia y paisajes del oeste catamarqueño</h2>

    <p>
      Un recorrido donde la arquitectura de adobe se combina con montañas,
      aguas termales y paisajes únicos de Fiambalá.
    </p>
  </div>


   <div className="tour-gallery-grid adobe-gallery-grid">

  <figure>
    <img
      src={rutaAdobe}
      alt="Ruta del Adobe entre Tinogasta y Fiambalá Catamarca"
    />

    <figcaption>
      <strong>Ruta del Adobe</strong>
      <span>
        Construcciones históricas y paisajes del oeste catamarqueño.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={oratorioOrquera}
      alt="Oratorio de los Orquera"
    />

    <figcaption>
      <strong>Oratorio de los Orquera</strong>
      <span>
        Uno de los grandes testimonios de la arquitectura tradicional de adobe.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={andacollo}
      alt="Iglesia de Andacollo"
    />

    <figcaption>
      <strong>Iglesia de Andacollo</strong>
      <span>
        Patrimonio religioso e historia del oeste catamarqueño.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={iglesiaRosario}
      alt="Nuestra Señora del Rosario de Anillaco"
    />

    <figcaption>
      <strong>Nuestra Señora del Rosario</strong>
      <span>
        Una de las construcciones religiosas históricas del recorrido.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={termasFiambala}
      alt="Termas de Fiambalá Catamarca excursión"
    />

    <figcaption>
      <strong>Termas de Fiambalá</strong>
      <span>
        Relax entre montañas para completar la experiencia.
      </span>
    </figcaption>
  </figure>


  <figure>
    <img
      src={canonIndio}
      alt="Cañón del Indio en Fiambalá"
    />

    <figcaption>
      <strong>Cañón del Indio</strong>
      <span>
        Naturaleza y caminata entre formaciones rocosas en la opción de 2 días.
      </span>
    </figcaption>
  </figure>


  <figure className="adobe-gallery-dunas">
    <img
      src={dunasTaton}
      alt="Dunas de Tatón"
    />

    <figcaption>
      <strong>Dunas de Tatón</strong>
      <span>
        Un paisaje de arena único en el oeste catamarqueño.
      </span>
    </figcaption>
  </figure>

  <figure>
  <img
    src={sanPedroFiambala}
    alt="Iglesia de San Pedro de Fiambalá"
  />

  <figcaption>
    <strong>Iglesia de San Pedro</strong>
    <span>
      Patrimonio histórico de Fiambalá y parte de la identidad cultural del oeste catamarqueño.
    </span>
  </figcaption>
</figure>


<figure>
  <img
    src={mayorazgoAnillaco}
    alt="Mayorazgo de Anillaco en la Ruta del Adobe"
  />

  <figcaption>
    <strong>Mayorazgo de Anillaco</strong>
    <span>
      Una antigua construcción de adobe que conserva parte de la historia del valle.
    </span>
  </figcaption>
</figure>

</div>
</section>


<section className="route-maps-section">
  <div className="section-heading">
    <span className="section-kicker">ENTENDÉ EL RECORRIDO</span>

    <h2>Mapa de Fiambalá y la Ruta del Adobe</h2>

    <p>
      Estos mapas te ayudan a entender dónde están los principales puntos
      del recorrido y cómo se conectan entre sí.
    </p>
  </div>

  <div className="route-maps-grid">

    <article className="route-map-card">
      <img
        src={mapaRutaAdobe}
        alt="Mapa de la Ruta del Adobe"
      />

      <div>
        <span>1 DÍA</span>
        <h3>Ruta del Adobe</h3>
        <p>
          El corredor conecta Tinogasta con Fiambalá atravesando algunos
          de los principales sitios históricos del oeste catamarqueño.
        </p>
      </div>
    </article>

    <article className="route-map-card">
      <img
        src={mapaCanonIndio}
        alt="Mapa del Cañón del Indio"
      />

      <div>
        <span>2 DÍAS</span>
        <h3>Cañón del Indio</h3>
        <p>
          La experiencia incluye un recorrido de naturaleza y caminata
          que requiere tiempo, planificación y condiciones adecuadas.
        </p>
      </div>
    </article>

  </div>
</section>


<section className="tour-faq-section">
  <div className="section-heading">
    <span className="section-kicker">PREGUNTAS FRECUENTES</span>
    <h2>Antes de reservar</h2>
  </div>

  <div className="tour-faq-grid">

    <article className="tour-faq-card">
      <h3>¿Desde dónde sale la experiencia?</h3>
      <p>
        La excursión puede salir desde Catamarca Capital, Tinogasta o Fiambalá. Desde Capital la tarifa es de $230.000 por persona; desde Tinogasta / Fiambalá, $125.000 por persona. Mínimo 2 pasajeros.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Cuánto cuesta la excursión a Fiambalá y Termas?</h3>
      <p>
        Desde Catamarca Capital: $230.000 por persona. Desde Tinogasta / Fiambalá: $125.000 por persona. Ambas tarifas son para un mínimo de 2 pasajeros; pasajero individual, consultar.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Cuántos kilómetros tiene la excursión a Fiambalá?</h3>
      <p>
        Desde Catamarca Capital calculamos aproximadamente 585 km entre ida, recorrido y regreso. Para la salida desde Tinogasta / Fiambalá, el circuito ronda los 145 km, según el punto de encuentro y las paradas coordinadas.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿El alojamiento está incluido en los 2 días?</h3>
      <p>
        El alojamiento se coordina según disponibilidad y la categoría
        elegida por el pasajero. Te ayudamos a organizar la mejor opción.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿La excursión 4x4 está incluida?</h3>
      <p>
        No. Se ofrece como actividad opcional y se realiza con un prestador
        local habilitado, sujeto a disponibilidad y coordinación previa.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Cañón del Indio requiere caminata?</h3>
      <p>
        Sí. Es una experiencia de naturaleza que incluye caminata,
        por lo que se recomienda calzado adecuado y consultar previamente
        sobre dificultad y condiciones.
      </p>
    </article>

    <article className="tour-faq-card">
      <h3>¿Cómo es el ingreso a las Termas de Fiambalá?</h3>
      <p>
        El acceso funciona por turnos y depende de cupos y disponibilidad. Coordinamos previamente la visita y confirmamos las condiciones antes del viaje.
      </p>
    </article>

  </div>
</section>


<section className="tour-final-cta">
  <div className="tour-final-cta-content">

    <span className="section-kicker">ARMÁ TU VIAJE</span>

    <h2>¿Querés conocer Fiambalá, sus termas y la Ruta del Adobe?</h2>

    <p>
      Contanos desde dónde salís, cuántas personas viajan y cuánto tiempo tenés. Te ayudamos a organizar tu excursión a Fiambalá, las Termas de Fiambalá y la Ruta del Adobe.
    </p>

    <a
      href="https://wa.me/5493834696065?text=Hola%2C%20quiero%20consultar%20por%20Ruta%20del%20Adobe%20%2B%20Fiambal%C3%A1.%20Somos%20___%20personas%20y%20nos%20interesa%20la%20opci%C3%B3n%20de%20___%20d%C3%ADa%2Fs."
      target="_blank"
      rel="noopener noreferrer"
      className="final-cta-button"
    >
      💬 Consultar por WhatsApp
    </a>

  </div>
</section>

      </main>
    </div>
  )
}

export default RutaAdobe