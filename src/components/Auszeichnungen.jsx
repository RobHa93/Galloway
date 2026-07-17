const memberships = [
  {
    name: 'Swiss Galloway Society',
    text: 'Mitgliedschaft für den fachlichen Austausch rund um Galloway-Zucht, Tierhaltung und Direktvermarktung in der Schweiz.',
  },
  {
    name: 'Damhirsch aus schweizer Gehegen',
    text: 'Vernetzung mit Kolleginnen und Kollegen für Wissenstransfer in der Damhirschhaltung und Wildvermarktung.',
  },
]

const values = [
  {
    num: '01',
    title: 'Gäste im Mittelpunkt',
    text: 'Wichtiger als jede Auszeichnung ist für uns, dass Gäste, Kundschaft und Partner sich bei uns wohl fühlen.',
  },
  {
    num: '02',
    title: 'Anerkennung als Motivation',
    text: 'Wir freuen uns über jede Auszeichnung und verstehen sie als Bestätigung für konsequente Qualitätsarbeit.',
  },
  {
    num: '03',
    title: 'Austausch & Netzwerk',
    text: 'Aktive Mitgliedschaften helfen uns, fachlich am Ball zu bleiben und Entwicklungen frühzeitig aufzunehmen.',
  },
]

export default function Auszeichnungen() {
  return (
    <section id="zuechter" style={{ backgroundColor: '#F5F0E8', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="fade-in-up" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div className="gold-divider" />
            <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Vertrauen & Netzwerk
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#1a2e26',
            margin: '0 0 1rem',
            lineHeight: 1.2,
          }}>
            Auszeichnungen & Mitgliedschaften
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '760px', lineHeight: 1.8, margin: 0 }}>
            Wir freuen uns über jede Auszeichnung. Entscheidend ist für uns aber vor allem,
            dass unsere Gäste, Kundschaft und Partner gerne auf unseren Hof kommen,
            um zu geniessen oder unsere Produkte direkt zu kaufen.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
          alignItems: 'stretch',
        }}>
          <article className="fade-in-up" style={{
            backgroundColor: '#fff',
            border: '1px solid #EAE3D6',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '220px',
              position: 'relative',
              backgroundImage: 'linear-gradient(135deg, rgba(26,46,38,0.25), rgba(26,46,38,0.5)), url(https://www.galloway-schweiz.ch/assets/Images/Startseite/fallback__FocusFillWyIwLjAwIiwiMC4wMCIsMTAyNCw1MTJd.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              {/* Seal badge */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                width: '78px',
                height: '78px',
                borderRadius: '50%',
                backgroundColor: '#F5F0E8',
                border: '1px dashed #B8860B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transform: 'rotate(-8deg)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#1a2e26',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  lineHeight: 1.3,
                  textTransform: 'uppercase',
                }}>
                  Hof &<br />Qualität
                </span>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", color: '#B8860B', fontSize: '2.2rem', lineHeight: 1, fontWeight: 700 }}>
                  &ldquo;
                </span>
                <div style={{ color: '#1a2e26', fontWeight: 700, fontSize: '0.95rem', paddingTop: '0.4rem' }}>Unser Leitgedanke</div>
              </div>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
                Anerkennung freut uns, doch im Zentrum steht immer die Zufriedenheit unserer
                Besucherinnen und Besucher sowie die Qualität unserer Hofprodukte.
              </p>
            </div>
          </article>

          <article className="fade-in-up stagger-2" style={{
            backgroundColor: '#fff',
            border: '1px solid #EAE3D6',
            borderRadius: '4px',
            padding: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
              <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #D4B86A)' }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1a2e26', fontSize: '1.25rem', margin: 0 }}>
                Mitgliedschaften
              </h3>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.86rem', lineHeight: 1.7, marginTop: 0, marginBottom: '1.2rem' }}>
              Für einen regen Austausch mit Kolleginnen und Kollegen engagieren wir uns aktiv in folgenden Verbänden:
            </p>
            <div>
              {memberships.map((item, i) => (
                <div key={item.name} style={{
                  paddingTop: i > 0 ? '0.9rem' : 0,
                  paddingBottom: '0.9rem',
                  marginTop: i > 0 ? '0.9rem' : 0,
                  borderTop: i > 0 ? '1px dashed #EAE3D6' : 'none',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1a2e26', fontSize: '0.95rem', marginBottom: '0.3rem', textDecoration: 'underline', textDecorationColor: '#C9A84C', textUnderlineOffset: '3px' }}>
                    {item.name}
                  </div>
                  <div style={{ color: '#64748B', fontSize: '0.8rem', lineHeight: 1.65 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          borderTop: '1px solid #EAE3D6',
          paddingTop: '2.5rem',
        }}>
          {values.map((item, i) => (
            <div
              key={item.title}
              className={`fade-in-up stagger-${(i % 4) + 1}`}
              style={{ borderLeft: '2px solid #C9A84C', paddingLeft: '1.25rem' }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", color: '#C9A84C', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {item.num}
              </div>
              <div style={{ color: '#1a2e26', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', fontFamily: "'Playfair Display', serif" }}>{item.title}</div>
              <div style={{ color: '#64748B', fontSize: '0.82rem', lineHeight: 1.7 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
