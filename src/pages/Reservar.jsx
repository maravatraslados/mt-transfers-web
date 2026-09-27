import { useState } from "react"

const initialForm = {
  service: "",
  date: "",
  passengers: "",
  vehicle: "Auto / vehículo disponible",
  pickup: "",
  details: "",
}

function Reservar() {
  const [form, setForm] = useState(initialForm)

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const message = [
      "Hola, quiero solicitar confirmación para un servicio de MT Tours & Transfers.",
      `Servicio: ${form.service || "A confirmar"}`,
      `Fecha: ${form.date || "A confirmar"}`,
      `Pasajeros: ${form.passengers || "A confirmar"}`,
      `Vehículo: ${form.vehicle}`,
      `Lugar de salida: ${form.pickup || "A confirmar"}`,
      `Detalles: ${form.details || "Sin detalles adicionales"}`,
    ].join("\n")

    window.open(`https://wa.me/5493834696065?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="booking-page">
      <style>{`
        .booking-page{min-height:100vh;background:#fff;color:#111;padding-bottom:0}
        .booking-header{padding:22px 7%;background:#111;color:#fff;display:flex;justify-content:space-between;align-items:center;gap:20px}
        .booking-header a{color:#fff;text-decoration:none;font-weight:700}
        .booking-hero{padding:75px 8%;background:linear-gradient(115deg,rgba(17,17,17,.96),rgba(17,17,17,.75)),url('/hero-traslados-catamarca.png') center/cover;color:#fff}
        .booking-hero h1{max-width:760px;margin:12px 0;font-size:clamp(2.3rem,5vw,4rem);line-height:1.06}
        .booking-hero p{max-width:650px;font-size:1.1rem;line-height:1.7}
        .booking-kicker{color:#d7a660;font-weight:800;letter-spacing:.13em;font-size:.78rem}
        .booking-layout{max-width:1120px;margin:55px auto 0;padding:0 24px;display:grid;grid-template-columns:.8fr 1.2fr;gap:35px}
        .booking-info,.booking-form{background:#fff;border-radius:10px;padding:32px;box-shadow:0 12px 35px rgba(16,43,45,.08)}
        .booking-info h2,.booking-form h2{margin-top:0;font-size:1.8rem}
        .booking-info p,.booking-info li{color:#586667;line-height:1.7}
        .booking-info ul{padding-left:20px}
        .booking-notice{margin-top:25px;padding:18px;background:#f3f3f3;border-left:4px solid #111;color:#333;line-height:1.6}
        .booking-fields{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .booking-field{display:flex;flex-direction:column;gap:7px}
        .booking-field-full{grid-column:1/-1}
        .booking-field label{font-weight:700;font-size:.92rem}
        .booking-field input,.booking-field select,.booking-field textarea{border:1px solid #cbd4d1;border-radius:5px;padding:12px;font:inherit;background:#fff;color:#243637}
        .booking-field textarea{min-height:105px;resize:vertical}
        .booking-submit{margin-top:22px;border:0;border-radius:999px;padding:14px 22px;background:#111;color:#fff;font-weight:800;font-size:1rem;cursor:pointer}
        .booking-back{display:inline-block;margin-top:22px;color:#d7a660;text-decoration:none;font-weight:700}
        @media(max-width:760px){.booking-header{flex-wrap:wrap}.booking-layout{grid-template-columns:1fr;margin-top:30px}.booking-fields{grid-template-columns:1fr}.booking-field-full{grid-column:auto}}
      `}</style>

      <header className="booking-header">
        <a href="/">MT TOURS & TRANSFERS</a>
        <a href="/">← Volver al inicio</a>
      </header>

      <section className="booking-hero">
        <span className="booking-kicker">SOLICITÁ TU SERVICIO</span>
        <h1>Consultá disponibilidad para tu próxima excursión o traslado</h1>
        <p>Completá los datos y te contactamos por WhatsApp para confirmar fecha, vehículo y presupuesto.</p>
      </section>

      <div className="booking-layout">
        <section className="booking-info">
          <h2>¿Cómo funciona?</h2>
          <ul>
            <li>Elegís la excursión o servicio.</li>
            <li>Nos indicás fecha y cantidad de pasajeros.</li>
            <li>Revisamos disponibilidad.</li>
            <li>Te confirmamos todo por WhatsApp.</li>
          </ul>
          <div className="booking-notice">
            La solicitud no bloquea automáticamente un vehículo. La reserva queda confirmada cuando verificamos disponibilidad y te respondemos por WhatsApp.
          </div>
        </section>

        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Datos de la solicitud</h2>
          <div className="booking-fields">
            <div className="booking-field booking-field-full">
              <label htmlFor="service">¿Qué necesitás?</label>
              <select id="service" name="service" value={form.service} onChange={updateField} required>
                <option value="">Seleccioná una opción</option>
                <option>Circuito Integral de Catamarca</option>
<option>Ruta del Adobe + Termas de Fiambalá</option>
<option>El Rodeo + Virgen Más Alta del Mundo</option>
<option>Vuelta al Oeste Catamarqueño</option>
<option>Cuesta de Singuil + Balcozna</option>
<option>Cuesta del Portezuelo</option>
<option>Vuelta al Cerro Ancasti</option>
<option>Aventura en la Puna Catamarqueña</option>
<option>Fiambalá + Ruta de los Seismiles</option>
<option>Transfer aeropuerto / hotel</option>
<option>Traslado para grupos</option>
<option>Traslado corporativo</option>
<option>Otro servicio</option>
              </select>
            </div>
            <div className="booking-field"><label htmlFor="date">Fecha deseada</label><input id="date" name="date" type="date" value={form.date} onChange={updateField} required /></div>
            <div className="booking-field"><label htmlFor="passengers">Cantidad de pasajeros</label><input id="passengers" name="passengers" type="number" min="1" placeholder="Ej.: 4" value={form.passengers} onChange={updateField} required /></div>
            <div className="booking-field"><label htmlFor="vehicle">Vehículo preferido</label><select id="vehicle" name="vehicle" value={form.vehicle} onChange={updateField}><option>Auto / vehículo disponible</option><option>Combi 18/19 pasajeros</option><option>Minibús hasta 22 pasajeros</option><option>A confirmar según disponibilidad</option></select></div>
            <div className="booking-field"><label htmlFor="pickup">Lugar de salida</label><input id="pickup" name="pickup" placeholder="Hotel, aeropuerto o domicilio" value={form.pickup} onChange={updateField} required /></div>
            <div className="booking-field booking-field-full"><label htmlFor="details">Comentarios</label><textarea id="details" name="details" placeholder="Destino, horario, equipaje u otra información" value={form.details} onChange={updateField} /></div>
          </div>
          <button className="booking-submit" type="submit">Solicitar confirmación por WhatsApp →</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-mark">MT</span>
              <div>
                <strong>TOURS & TRANSFERS</strong>
                <small>Catamarca, Argentina</small>
              </div>
            </div>
            <p>Descubrí, planificá y viví Catamarca con experiencias y traslados pensados para vos.</p>
          </div>

          <div className="footer-column">
            <h4>Explorá</h4>
            <a href="/excursiones">Excursiones</a>
            <a href="/traslados-catamarca">Transfers</a>
          </div>

          <div className="footer-column">
            <h4>Planificá</h4>
            <a href="/catamarca-1-dia">Catamarca en 1 día</a>
            <a href="/catamarca-2-dias">Catamarca en 2 días</a>
            <a href="/catamarca-3-dias-o-mas">Catamarca en 3 días o más</a>
            <a href="/reservar">Reservar</a>
          </div>

          <div className="footer-column">
            <h4>MT</h4>
            <a href="/guia">Guía de Catamarca</a>
            <a href="/quienes-somos">Quiénes somos</a>
            <a href="/contacto">Contacto</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MT Tours & Transfers</span>
          <span>Catamarca, Argentina</span>
        </div>
      </footer>
    </main>
  )
}

export default Reservar
