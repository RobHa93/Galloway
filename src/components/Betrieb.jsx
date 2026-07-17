import { useEffect, useState } from 'react'
import { Leaf, Mountain, Tractor, Handshake, Info } from 'lucide-react'
import rindIcon from '../assets/img/rind.svg'
import hirschIcon from '../assets/img/hirsch.svg'
import lammIcon from '../assets/img/lamm.svg'

const tabs = [
  { id: 'tiere', label: 'Unsere Tiere', icon: Leaf },
  { id: 'alp', label: 'Unsere Alp', icon: Mountain },
  { id: 'felder', label: 'Unsere Felder', icon: Tractor },
  { id: 'partner', label: 'Unsere Partner', icon: Handshake },
]

const partners = [
  {
    name: 'Esti und Beat Kleiber',
    lines: ['Breitenstrasse 180', '5070 Oeschgen'],
    phone: '0041 62 871 54 74',
  },
  {
    name: 'Wildmanufaktur und Metzgerei Arn',
    lines: ['Firmensitz: Hübel 20, 4333 Münchwilen AG', 'Korrespondenzadresse: Burghalde 7a, 5722 Gränichen'],
    phone: '0041 79 523 46 01',
    website: 'https://www.wildmanufaktur-arn.ch',
  },
]

const sectionStyle = {
  backgroundColor: '#F5F0E8',
  padding: '6rem 0',
}

const animalInfo = [
  {
    id: 'rind',
    icon: rindIcon,
    title: 'Galloway Rinder',
    text: 'Wir züchten Galloway Rinder in den Pigmentierungen „black" (schwarz) und „dun" (blond), deren vorzügliches Fleisch schon die Römer zu schätzen wussten. Eine Urrasse aus dem namensgebenden „Galloway" im Südwesten Schottlands, bei der Gourmets ins Schwärmen geraten.',
  },
  {
    id: 'hirsch',
    icon: hirschIcon,
    title: 'Dammhirsch',
    text: 'Auf unseren weitläufigen, landwirtschaftlichen Flächen in Eiken und Münchwilen AG, welche über kleine Waldparteien verfügen, züchten wir seit 1956 Damhirsche. Charakteristisch für die Damhirsche sind das Schaufelgeweih der männlichen Tiere und das häufig gefleckte Sommerfell. Wildliebhaber können diesen Wildspezialitäten nicht widerstehen.',
  },
  {
    id: 'lamm',
    icon: lammIcon,
    title: 'Lamm',
    text: 'Unsere Lämmer werden in Mutterschaftshaltung gross. Das heisst, sie bekommen Muttermilch und bleiben bis zur Schlachtung bei ihrer Mutter. Sie sind das ganze Jahr über draussen auf der Weide. Wir orientieren uns an den natürlichen Abläufen und füttern kein Kraftfutter. Diese artgerechte Tierhaltung erzeugt eine herausragende Fleischqualität. Überzeugen Sie sich selbst!',
  },
]

export default function Betrieb() {
  const [activeTab, setActiveTab] = useState('tiere')
  const [activeAnimal, setActiveAnimal] = useState(null)
  const selectedAnimal = animalInfo.find((animal) => animal.id === activeAnimal)

  useEffect(() => {
    const applyHash = () => {
      const prefix = '#verband:'
      if (!window.location.hash.startsWith(prefix)) return
      const id = window.location.hash.slice(prefix.length)
      if (!tabs.some((tab) => tab.id === id)) return
      setActiveTab(id)
      document.getElementById('verband')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

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
          <div style={{ maxWidth: '820px' }}>
            <div className="fade-in-up">
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
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                Diese Kombination macht unseren Hof vielseitig und lebendig. Sie verbindet
                traditionelle Tierhaltung mit einem klaren Fokus auf Qualität,
                Tierwohl und nachhaltige Produktion.
              </p>
            </div>

            {/* Animal icons */}
            <div className="fade-in-up stagger-2" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {animalInfo.map((animal) => (
                <button
                  key={animal.id}
                  onClick={() => setActiveAnimal(activeAnimal === animal.id ? null : animal.id)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.65rem',
                    minWidth: '130px',
                    padding: '1.25rem 1.5rem',
                    border: activeAnimal === animal.id ? '1.5px solid #B8860B' : '1.5px solid #EAE3D6',
                    backgroundColor: activeAnimal === animal.id ? 'rgba(184,134,11,0.08)' : '#fff',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: activeAnimal === animal.id ? '#B8860B' : '#ADD8E6',
                    color: activeAnimal === animal.id ? '#fff' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s, color 0.2s',
                  }}>
                    <Info size={11} strokeWidth={2.5} />
                  </div>
                  <img src={animal.icon} alt={animal.title} style={{ width: '44px', height: '44px' }} />
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    color: activeAnimal === animal.id ? '#B8860B' : '#1a2e26',
                  }}>
                    {animal.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected animal info */}
            {selectedAnimal && (
              <div className="fade-in-up" style={{
                backgroundColor: '#fff',
                border: '1px solid #EAE3D6',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
              }}>
                <img src={selectedAnimal.icon} alt={selectedAnimal.title} style={{ width: '40px', height: '40px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#1a2e26', marginBottom: '0.5rem' }}>
                    {selectedAnimal.title}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>
                    {selectedAnimal.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'alp' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Image */}
            <div className="fade-in-up" style={{
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid #EAE3D6',
              height: '380px',
            }}>
              <img
                src="https://www.galloway-schweiz.ch/assets/Images/Startseite/dji_0324__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg"
                alt="Unsere Alp"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Text */}
            <div className="fade-in-up stagger-2">
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Unsere Alp im Waadtland umfasst rund 101 Hektaren Gesamtfläche,
                davon etwa 30 Hektaren Weide. Mit zwei Alphäusern bietet sie
                ideale Bedingungen für die Sömmerung unserer Tiere.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Während der Sommermonate verbringen unsere Galloways rund 100 Tage
                auf der Alp und nutzen dort die natürlichen Weiden. Mit rund 40 Kühen
                und 20 Rindern lebt ein grosser Teil der Herde saisonal in den Bergen.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                Die Alp La Vaux liegt auf etwa 1200 m.ü.M., Plan de La Vaux auf rund
                1100 m.ü.M. und bietet dank der Höhenlage ein ideales Klima für den
                Alpsommer.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[['100 Tage', 'Sömmerung'], ['60 Tiere', 'Auf der Alp'], ['1200 m.ü.M.', 'Höhenlage']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#B8860B', lineHeight: 1.2 }}>{num}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.03em', marginTop: '0.25rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'felder' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Image */}
            <div className="fade-in-up" style={{
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid #EAE3D6',
              height: '380px',
            }}>
              <img
                src="https://www.galloway-schweiz.ch/assets/Images/Produktion__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg"
                alt="Unsere Felder"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Text */}
            <div className="fade-in-up stagger-2">
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Unser Betrieb umfasst insgesamt 115 Hektaren, wovon 56 Hektaren als
                Ackerfläche bewirtschaftet werden. Auf diesen Flächen bauen wir eine
                vielseitige Palette an Kulturen an.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Zu unseren Kulturen gehören unter anderem Raps, Gerste, Weizen, Mais,
                Zuckerrüben und Kunstwiesen – eine Fruchtfolge, die den Boden schont
                und für Abwechslung auf den Feldern sorgt.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                Neben dem Ackerbau gehören rund 50 Gallowayrinder, 40 Damhirsche und
                60 Schafe zu unserem Betrieb. Ergänzt wird dies durch unseren Alpbetrieb
                mit rund 30 Hektaren Weidefläche.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[['115 ha', 'Gesamtfläche'], ['56 ha', 'Ackerfläche'], ['150', 'Tiere auf dem Hof']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#B8860B', lineHeight: 1.2 }}>{num}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.03em', marginTop: '0.25rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'partner' && (
          <div style={{ maxWidth: '780px' }}>
            <p className="fade-in-up" style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
              Wir führen eine Betriebsgemeinschaft mit Esti und Beat Kleiber.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {partners.map((partner, i) => (
                <div key={partner.name} className={`fade-in-up stagger-${i + 1}`} style={{
                  backgroundColor: '#fff',
                  border: '1px solid #EAE3D6',
                  borderRadius: '4px',
                  padding: '1.75rem',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#1a2e26', marginBottom: '0.75rem' }}>
                    {partner.name}
                  </div>
                  {partner.lines.map((line) => (
                    <div key={line} style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.7 }}>{line}</div>
                  ))}
                  <div style={{ marginTop: '0.5rem' }}>
                    <a href={`tel:${partner.phone.replace(/\s+/g, '')}`} style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.7, textDecoration: 'none' }}>
                      {partner.phone}
                    </a>
                  </div>
                  {partner.website && (
                    <div style={{ marginTop: '0.25rem' }}>
                      <a href={partner.website} target="_blank" rel="noreferrer" style={{ color: '#B8860B', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none' }}>
                        {partner.website.replace('https://', '')}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
