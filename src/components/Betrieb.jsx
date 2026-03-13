import { useState } from 'react'
import { Leaf, Mountain, Tractor } from 'lucide-react'

const tabs = [
  { id: 'tiere', label: 'Unsere Tiere', icon: Leaf },
  { id: 'alp', label: 'Unsere Alp', icon: Mountain },
  { id: 'felder', label: 'Unsere Felder', icon: Tractor },
]

const sectionStyle = {
  backgroundColor: '#F5F0E8',
  padding: '6rem 0',
}

const animalCards = [
  {
    name: 'Gallowayrind',
    note: 'Robust und wetterfest',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Startseite/2a9b721f-18fa-487d-b1aa-c746746c3b9b__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
  },
  {
    name: 'Damhirsch',
    note: 'Seit 1956 auf unseren Flaechen',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Startseite/IMG_0797__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
  },
  {
    name: 'Schafe',
    note: 'Muttertierhaltung und Weidegang',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Einkaufen-Degustieren/IMG_2590__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
  },
]

export default function Betrieb() {
  const [activeTab, setActiveTab] = useState('tiere')

  return (
    <section id="verband" style={sectionStyle}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div className="gold-divider" />
            <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Unser Betrieb
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
            Landwirtschaft in der Schweiz
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="fade-in-up" style={{
          display: 'flex',
          gap: '0',
          borderBottom: '2px solid #EAE3D6',
          marginBottom: '3rem',
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.75rem',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #B8860B' : '2px solid transparent',
                marginBottom: '-2px',
                background: 'none',
                cursor: 'pointer',
                color: activeTab === tab.id ? '#B8860B' : '#475569',
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
                transition: 'color 0.2s, border-color 0.2s',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'tiere' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Animal cards */}
            <div className="fade-in-up" style={{ display: 'grid', gap: '1rem' }}>
              {animalCards.map((animal, i) => (
                <div key={animal.name} className={`fade-in-up stagger-${i + 1}`} style={{
                  backgroundColor: '#fff',
                  border: '1px solid #EAE3D6',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  alignItems: 'stretch',
                }}>
                  <img
                    src={animal.image}
                    alt={animal.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '104px' }}
                  />
                  <div style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#1a2e26', lineHeight: 1.2 }}>
                      {animal.name}
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '0.3rem', lineHeight: 1.55 }}>
                      {animal.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Text */}
            <div className="fade-in-up stagger-2">
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Auf unserem Hof arbeiten wir mit drei Tierarten, die optimal zu unserer
                naturnahen Bewirtschaftung passen: Gallowayrinder, Damhirsche und Schafe.
                Alle Tiere leben möglichst artgerecht auf Weiden und werden mit viel
                Erfahrung und Sorgfalt betreut.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Unsere Gallowayrinder sind robust, widerstandsfähig und ideal für jede
                Jahreszeit. Die Damhirsche werden seit Jahrzehnten auf grosszügigen
                Flächen gehalten und gehören fest zu unserem Betrieb. Bei den Schafen
                setzen wir auf eine natürliche Aufzucht mit Muttertierhaltung und Weidegang.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                Diese Kombination macht unseren Hof vielseitig und lebendig. Sie verbindet
                traditionelle Tierhaltung mit einem klaren Fokus auf Qualität,
                Tierwohl und nachhaltige Produktion.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[['Gallowayrind', 'robust & wetterfest'], ['Damhirsch', 'seit 1956 auf unseren Flächen'], ['Schafe', 'Muttertierhaltung & Weidegang']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#B8860B', lineHeight: 1.2 }}>{num}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.03em', marginTop: '0.25rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'alp' && (
          <div>
            <div className="fade-in-up" style={{
              marginBottom: '1.5rem',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid #EAE3D6',
              height: '280px',
            }}>
              <img
                src="https://www.galloway-schweiz.ch/assets/Images/Startseite/dji_0324__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg"
                alt="Unsere Alp"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p className="fade-in-up" style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '680px' }}>
              Unsere Alp im Waadtland umfasst rund 101 Hektaren Gesamtfläche,
              davon etwa 30 Hektaren Weide. Mit zwei Alphäusern bietet sie
              ideale Bedingungen für die Sömmerung unserer Tiere.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  title: '100 Tage Sömmerung',
                  text: 'Während der Sommermonate verbringen unsere Galloways rund 100 Tage auf der Alp und nutzen dort die natürlichen Weiden.',
                },
                {
                  title: 'Tierbestand auf der Alp',
                  text: 'Mit rund 40 Kühen und 20 Rindern lebt ein grosser Teil der Herde saisonal in den Bergen.',
                },
                {
                  title: 'Höhenlage',
                  text: 'Die Alp La Vaux liegt auf etwa 1200 m.ü.M., Plan de La Vaux auf rund 1100 m.ü.M. und bietet ein ideales Klima für den Alpsommer.',
                },
              ].map((item, i) => (
                <div key={i} className={`fade-in-up stagger-${i + 1}`} style={{
                  backgroundColor: '#fff',
                  border: '1px solid #EAE3D6',
                  borderRadius: '4px',
                  padding: '1.75rem',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(45,74,62,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    width: '52px', height: '52px',
                    background: 'linear-gradient(135deg, #2D4A3E, #3D6B59)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                    fontSize: '1.3rem',
                  }}>
                    🏡
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: '#1a2e26', marginBottom: '0.25rem' }}>
                    {item.title}
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'felder' && (
          <div style={{ maxWidth: '780px' }}>
            <div className="fade-in-up" style={{
              backgroundColor: '#fff',
              border: '1px solid #EAE3D6',
              borderRadius: '4px',
              padding: '2.5rem',
            }}>
              <div style={{
                marginBottom: '1.5rem',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid #EAE3D6',
                height: '250px',
              }}>
                <img
                  src="https://www.galloway-schweiz.ch/assets/Images/Produktion__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg"
                  alt="Unsere Felder"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1a2e26', marginTop: 0, marginBottom: '1.5rem' }}>
                Unsere Felder
              </h3>
              {[
                { art: '115 ha', title: 'Gesamtfläche', text: 'Unser Betrieb umfasst insgesamt 115 Hektaren. Davon werden 56 Hektaren als Ackerfläche bewirtschaftet.' },
                { art: 'Ackerbau', title: 'Kulturen', text: 'Auf unseren Feldern wachsen unter anderem Raps, Gerste, Weizen, Mais, Zuckerrüben und Kunstwiesen.' },
                { art: 'Tierhaltung', title: 'Viehbestand', text: 'Zum Hof gehören rund 50 Gallowayrinder, 40 Damhirsche und 60 Schafe. Ergänzt wird der Betrieb durch den Alpbetrieb mit ca. 30 Hektaren Weidefläche.' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: i < 2 ? '1px solid #EAE3D6' : 'none' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ background: 'linear-gradient(135deg, #C9A84C, #B8860B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.05em', flexShrink: 0, paddingTop: '2px' }}>{item.art}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1a2e26', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</div>
                      <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
