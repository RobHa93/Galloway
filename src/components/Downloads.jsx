import { Download, FileText } from 'lucide-react'

export default function Downloads() {
  return (
    <section id="downloads" style={{ backgroundColor: '#EAE3D6', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div className="gold-divider" />
            <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Hofladen
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            color: '#1a2e26',
            margin: 0,
            lineHeight: 1.2,
          }}>
            Bestellformular
          </h2>
        </div>

        <div className="fade-in-up" style={{ maxWidth: '760px' }}>
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #DDD5C5',
            borderRadius: '4px',
            padding: '1.75rem',
            display: 'flex',
            gap: '1.1rem',
            alignItems: 'flex-start',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              backgroundColor: 'rgba(45,74,62,0.08)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <FileText size={24} color="#2D4A3E" />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 0.35rem', color: '#1a2e26', fontSize: '1.05rem', fontFamily: "'Playfair Display', serif" }}>
                Fleisch-Bestellformular
              </h3>
              <p style={{ margin: '0 0 0.85rem', color: '#64748B', fontSize: '0.85rem', lineHeight: 1.65 }}>
                Nutzen Sie dieses Formular fuer die Bestellung unserer Hofladenprodukte
                (Rind-, Hirsch- und Lammfleisch).
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#F5F0E8',
                  color: '#475569',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '2px',
                  letterSpacing: '0.08em',
                }}>
                  PDF
                </span>
              </div>

              <a
                href="https://www.galloway-schweiz.ch/assets/Files/fleisch_bestellung.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #2D4A3E, #1a2e26)',
                  color: '#F5F0E8',
                  padding: '0.65rem 1rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                }}
              >
                Formular herunterladen <Download size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Member note */}
        <div className="fade-in-up" style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          backgroundColor: 'rgba(45,74,62,0.06)',
          borderRadius: '3px',
          border: '1px solid rgba(45,74,62,0.12)',
        }}>
          <FileText size={16} color="#2D4A3E" style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: 1.6 }}>
            Bestellungen koennen auch telefonisch oder per E-Mail aufgegeben werden.
            Die Kontaktdaten finden Sie im Footer unter Kontakt & Anfahrt.
            {' '}
            <a href="#kontakt" style={{ color: '#B8860B', fontWeight: 600, textDecoration: 'none' }}>
              Zu den Kontaktdaten →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
