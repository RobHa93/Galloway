import { Award, Users, HeartHandshake, Quote, ExternalLink } from 'lucide-react'

const memberships = [
  {
    name: 'Swiss Galloway Society',
    text: 'Mitgliedschaft fuer den fachlichen Austausch rund um Galloway-Zucht, Tierhaltung und Direktvermarktung in der Schweiz.',
  },
  {
    name: 'Damhirsch aus schweizer Gehegen',
    text: 'Vernetzung mit Kolleginnen und Kollegen fuer Wissenstransfer in der Damhirschhaltung und Wildvermarktung.',
  },
]

const values = [
  {
    icon: HeartHandshake,
    title: 'Gaeste im Mittelpunkt',
    text: 'Wichtiger als jede Auszeichnung ist fuer uns, dass Gaeste, Kundschaft und Partner sich bei uns wohl fuehlen.',
  },
  {
    icon: Award,
    title: 'Anerkennung als Motivation',
    text: 'Wir freuen uns ueber jede Auszeichnung und verstehen sie als Bestaetigung fuer konsequente Qualitaetsarbeit.',
  },
  {
    icon: Users,
    title: 'Austausch & Netzwerk',
    text: 'Aktive Mitgliedschaften helfen uns, fachlich am Ball zu bleiben und Entwicklungen fruehzeitig aufzunehmen.',
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
            Wir freuen uns ueber jede Auszeichnung. Entscheidend ist fuer uns aber vor allem,
            dass unsere Gaeste, Kunden und Partner gerne auf unseren Hof kommen,
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
              backgroundImage: 'linear-gradient(135deg, rgba(26,46,38,0.3), rgba(26,46,38,0.55)), url(https://www.galloway-schweiz.ch/assets/Images/Startseite/fallback__FocusFillWyIwLjAwIiwiMC4wMCIsMTAyNCw1MTJd.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '1rem',
            }}>
              <span style={{
                backgroundColor: 'rgba(184,134,11,0.92)',
                color: '#1a2e26',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.3rem 0.7rem',
                borderRadius: '2px',
              }}>
                Hof & Qualitaet
              </span>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Quote size={16} color="#B8860B" />
                <div style={{ color: '#1a2e26', fontWeight: 700, fontSize: '0.95rem' }}>Unser Leitgedanke</div>
              </div>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                Anerkennung freut uns, doch im Zentrum steht immer die Zufriedenheit unserer
                Besucherinnen und Besucher sowie die Qualitaet unserer Hofprodukte.
              </p>
            </div>
          </article>

          <article className="fade-in-up stagger-2" style={{
            backgroundColor: '#fff',
            border: '1px solid #EAE3D6',
            borderRadius: '4px',
            padding: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <Users size={18} color="#B8860B" />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1a2e26', fontSize: '1.25rem', margin: 0 }}>
                Mitgliedschaften
              </h3>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.86rem', lineHeight: 1.7, marginTop: 0, marginBottom: '1.2rem' }}>
              Fuer einen regen Austausch mit Kolleginnen und Kollegen engagieren wir uns aktiv in folgenden Verbaenden:
            </p>
            <div style={{ display: 'grid', gap: '0.9rem' }}>
              {memberships.map((item) => (
                <div key={item.name} style={{
                  border: '1px solid #EAE3D6',
                  backgroundColor: '#FFFDF8',
                  borderRadius: '3px',
                  padding: '0.95rem',
                }}>
                  <div style={{ fontWeight: 700, color: '#1a2e26', fontSize: '0.88rem', marginBottom: '0.3rem' }}>
                    {item.name}
                  </div>
                  <div style={{ color: '#64748B', fontSize: '0.8rem', lineHeight: 1.65 }}>{item.text}</div>
                </div>
              ))}
            </div>
            <a
              href="https://www.galloway-schweiz.ch/auszeichnungen-and-mitgliedschaften/"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: '1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                color: '#B8860B',
                fontWeight: 700,
                fontSize: '0.78rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Quelle ansehen <ExternalLink size={13} />
            </a>
          </article>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {values.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`fade-in-up stagger-${(i % 4) + 1}`}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #EAE3D6',
                  borderRadius: '4px',
                  padding: '1.2rem',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(45,74,62,0.08)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.65rem' }}>
                  <Icon size={18} color="#B8860B" />
                </div>
                <div style={{ color: '#1a2e26', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>{item.title}</div>
                <div style={{ color: '#64748B', fontSize: '0.8rem', lineHeight: 1.65 }}>{item.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
