import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', betreff: 'allgemein', nachricht: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1.5px solid #EAE3D6',
    borderRadius: '3px',
    fontSize: '0.9rem',
    fontFamily: "'Montserrat', sans-serif",
    outline: 'none',
    backgroundColor: '#fff',
    color: '#1C1C1C',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <section id="kontakt" style={{ backgroundColor: '#F5F0E8', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div className="gold-divider" />
            <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Kontakt & Mitgliedschaft
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#1a2e26',
            margin: 0,
            lineHeight: 1.2,
          }}>
            Schreiben Sie uns
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Contact Info */}
          <div>
            <div className="fade-in-up">
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Haben Sie Fragen zur Mitgliedschaft, zum Herdebuch oder zur Galloway-Zucht?
                Unser Sekretariat berät Sie gerne.
              </p>

              {[
                { Icon: Mail, label: 'E-Mail', value: 'info@galloway-schweiz.ch', href: 'mailto:info@galloway-schweiz.ch' },
                { Icon: Phone, label: 'Telefon', value: '+41 31 123 45 67', href: 'tel:+41311234567' },
                { Icon: MapPin, label: 'Sekretariat', value: 'Galloway Schweiz\nPostfach 42\n3001 Bern', href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: 'linear-gradient(135deg, #2D4A3E, #1a2e26)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color="#C9A84C" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} style={{ fontSize: '0.9rem', color: '#1a2e26', textDecoration: 'none', fontWeight: 500 }}>{value}</a>
                    ) : (
                      <div style={{ fontSize: '0.9rem', color: '#1a2e26', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="fade-in-up stagger-2" style={{
              marginTop: '2rem',
              height: '220px',
              backgroundColor: '#DDD5C5',
              borderRadius: '4px',
              border: '1px solid #C5BC9E',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Decorative map grid */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} viewBox="0 0 400 220">
                {[0,40,80,120,160,200].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#2D4A3E" strokeWidth="1" />)}
                {[0,50,100,150,200,250,300,350,400].map(x => <line key={x} x1={x} y1="0" x2={x} y2="220" stroke="#2D4A3E" strokeWidth="1" />)}
              </svg>
              <MapPin size={28} color="#2D4A3E" style={{ opacity: 0.6 }} />
              <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Google Maps – Bern, Schweiz
              </span>
              <span style={{ fontSize: '0.65rem', color: '#64748B' }}>Karte wird geladen...</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up stagger-2">
            {sent ? (
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #EAE3D6',
                borderRadius: '4px',
                padding: '3rem 2rem',
                textAlign: 'center',
              }}>
                <CheckCircle size={48} color="#2D4A3E" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1a2e26', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                  Nachricht gesendet!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 2 Werktagen bei Ihnen.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', betreff: 'allgemein', nachricht: '' }) }}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.65rem 1.5rem',
                    background: 'linear-gradient(135deg, #2D4A3E, #1a2e26)',
                    color: '#F5F0E8',
                    border: 'none',
                    borderRadius: '2px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.08em',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                backgroundColor: '#fff',
                border: '1px solid #EAE3D6',
                borderRadius: '4px',
                padding: '2.5rem',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr vollständiger Name"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = '#B8860B'}
                      onBlur={(e) => e.target.style.borderColor = '#EAE3D6'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="ihre@email.ch"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = '#B8860B'}
                      onBlur={(e) => e.target.style.borderColor = '#EAE3D6'}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Betreff
                  </label>
                  <select
                    name="betreff"
                    value={form.betreff}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => e.target.style.borderColor = '#B8860B'}
                    onBlur={(e) => e.target.style.borderColor = '#EAE3D6'}
                  >
                    <option value="allgemein">Allgemeine Anfrage</option>
                    <option value="mitgliedschaft">Mitgliedschaft</option>
                    <option value="herdebuch">Herdebuch / Zucht</option>
                    <option value="marktplatz">Marktplatz / Inserat</option>
                    <option value="veranstaltung">Veranstaltung</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Nachricht *
                  </label>
                  <textarea
                    name="nachricht"
                    value={form.nachricht}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Schreiben Sie Ihre Anfrage hier..."
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={(e) => e.target.style.borderColor = '#B8860B'}
                    onBlur={(e) => e.target.style.borderColor = '#EAE3D6'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: loading ? '#94a3b8' : 'linear-gradient(135deg, #2D4A3E, #1a2e26)',
                    color: '#F5F0E8',
                    border: 'none',
                    borderRadius: '2px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    transition: 'opacity 0.2s',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {loading ? 'Wird gesendet...' : (<><Send size={15} /> Nachricht senden</>)}
                </button>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '1rem', textAlign: 'center', lineHeight: 1.6 }}>
                  Mit dem Absenden stimmen Sie der Datenschutzerklärung zu. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
