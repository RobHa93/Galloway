import { Mail, Phone, MapPin, Facebook, Instagram, ExternalLink } from 'lucide-react'

const footerLinks = {
  Verband: ['Über uns', 'Vorstand', 'Statuten', 'Mitglied werden'],
  Zucht: ['Rassenstandards', 'Herdebuchführung', 'Zuchtziele', 'Ausstellungen'],
  Service: ['Marktplatz', 'Züchter-Suche', 'Downloads', 'Aktuelles'],
  Partner: ['Schweizer Bauernverband', 'swissherdbook', 'Bio Suisse', 'BTS/RAUS Programm'],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111c16', color: 'rgba(245,240,232,0.7)' }}>
      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px', height: '40px',
                background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem',
              }}>
                🐄
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.2 }}>Galloway</div>
                <div style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Schweiz</div>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)' }}>
              Nationaler Verband für Galloway-Züchterinnen und Züchter in der Schweiz.
              Seit Jahrzehnten für Tierwohl, Nachhaltigkeit und Qualitätszucht.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  title={label}
                  style={{
                    width: '36px', height: '36px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '50%',
                    background: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'rgba(245,240,232,0.6)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(245,240,232,0.6)' }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                color: '#F5F0E8',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                marginTop: 0,
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: '0.6rem' }}>
                    <a
                      href="#"
                      style={{
                        color: 'rgba(245,240,232,0.55)',
                        textDecoration: 'none',
                        fontSize: '0.82rem',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#C9A84C'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(245,240,232,0.55)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{
              color: '#F5F0E8',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              marginTop: 0,
            }}>
              Kontakt
            </h4>
            {[
              { icon: MapPin, text: 'Galloway Schweiz\nPostfach 42\n3001 Bern' },
              { icon: Phone, text: '+41 31 123 45 67', href: 'tel:+41311234567' },
              { icon: Mail, text: 'info@galloway-schweiz.ch', href: 'mailto:info@galloway-schweiz.ch' },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                <Icon size={13} color="#C9A84C" style={{ flexShrink: 0, marginTop: '2px' }} />
                {href ? (
                  <a href={href} style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', textDecoration: 'none', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{text}</a>
                ) : (
                  <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', margin: '0 0 1.5rem' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)' }}>
            © {new Date().getFullYear()} Galloway Schweiz. Alle Rechte vorbehalten.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Impressum', 'Datenschutz', 'AGB'].map((link) => (
              <a key={link} href="#" style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(245,240,232,0.65)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(245,240,232,0.35)'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
