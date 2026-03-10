import { useState } from 'react'
import { Users, FileText, BookOpen, ChevronRight } from 'lucide-react'
import { vorstand } from '../data/content'

const tabs = [
  { id: 'ueber', label: 'Über uns', icon: BookOpen },
  { id: 'vorstand', label: 'Vorstand', icon: Users },
  { id: 'statuten', label: 'Statuten', icon: FileText },
]

const sectionStyle = {
  backgroundColor: '#F5F0E8',
  padding: '6rem 0',
}

export default function Verband() {
  const [activeTab, setActiveTab] = useState('ueber')

  return (
    <section id="verband" style={sectionStyle}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div className="gold-divider" />
            <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Über uns
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
            Der Galloway Schweiz Verband
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
        {activeTab === 'ueber' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Image placeholder */}
            <div className="fade-in-up" style={{
              aspectRatio: '4/3',
              background: 'linear-gradient(135deg, #2D4A3E, #3D6B59)',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center', opacity: 0.3 }}>
                <div style={{ fontSize: '6rem' }}>🏔️</div>
                <div style={{ color: '#F5F0E8', fontSize: '0.75rem', letterSpacing: '0.1em' }}>FOTO GALLOWAY SCHWEIZ</div>
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #C9A84C, #B8860B)',
              }} />
            </div>
            {/* Text */}
            <div className="fade-in-up stagger-2">
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Der Verband Galloway Schweiz ist die nationale Organisation für Züchterinnen
                und Züchter der Galloway-Rasse. Gegründet mit dem Ziel, diese besondere
                Rinderrasse in der Schweiz zu fördern, verbinden wir heute Tradition
                mit moderner, nachhaltiger Landwirtschaft.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Galloways stammen ursprünglich aus der Region Galloway in Südwestschottland.
                Sie zeichnen sich durch ihre winterharte, robuste Natur aus und kommen in
                der Schweizer Hügellandschaft hervorragend zurecht – auch auf extensiven
                Flächen und in rauen Lagen.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                Unser Verband führt das offizielle Herdebuch, setzt Zuchtstandards,
                organisiert Ausstellungen und vertritt die Interessen unserer Mitglieder
                gegenüber Behörden und Verbänden auf nationaler und internationaler Ebene.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[['120+', 'Mitglieder'], ['1\'800+', 'Tiere im Herdebuch'], ['26', 'Kantone vertreten']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#B8860B', lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vorstand' && (
          <div>
            <p className="fade-in-up" style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '680px' }}>
              Der Vorstand von Galloway Schweiz besteht aus engagierten Züchterinnen und Züchtern,
              die ehrenamtlich für die Interessen des Verbandes arbeiten.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {vorstand.map((person, i) => (
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
                    👤
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: '#1a2e26', marginBottom: '0.25rem' }}>
                    {person.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#B8860B', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    {person.role}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '0.25rem' }}>Kanton: {person.cantonFull || person.canton}</div>
                  <a href={`mailto:${person.email}`} style={{ fontSize: '0.78rem', color: '#2D4A3E', textDecoration: 'none' }}>{person.email}</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'statuten' && (
          <div style={{ maxWidth: '780px' }}>
            <div className="fade-in-up" style={{
              backgroundColor: '#fff',
              border: '1px solid #EAE3D6',
              borderRadius: '4px',
              padding: '2.5rem',
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1a2e26', marginTop: 0, marginBottom: '1.5rem' }}>
                Statuten Galloway Schweiz
              </h3>
              {[
                { art: 'Art. 1', title: 'Name und Sitz', text: 'Unter dem Namen «Galloway Schweiz» besteht ein Verein im Sinne von Art. 60 ff. ZGB mit Sitz in der Schweiz. Der Verein ist politisch und konfessionell neutral.' },
                { art: 'Art. 2', title: 'Zweck', text: 'Der Verein bezweckt die Förderung der Galloway-Rasse in der Schweiz, die Führung des Herdebuchs, die Durchführung von Ausstellungen sowie die Interessenvertretung der Mitglieder gegenüber Behörden.' },
                { art: 'Art. 3', title: 'Mitgliedschaft', text: 'Mitglied kann jede natürliche oder juristische Person werden, die die Ziele des Vereins unterstützt. Aufnahme durch Antrag an den Vorstand.' },
                { art: 'Art. 4', title: 'Jahresbeitrag', text: 'Die Mitgliederversammlung setzt den Jahresbeitrag fest. Aktivmitglieder entrichten einen ordentlichen Beitrag; Ehrenmitglieder sind beitragsfrei.' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: i < 3 ? '1px solid #EAE3D6' : 'none' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ background: 'linear-gradient(135deg, #C9A84C, #B8860B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.05em', flexShrink: 0, paddingTop: '2px' }}>{item.art}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1a2e26', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</div>
                      <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <a href="#downloads" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                textDecoration: 'none',
                color: '#B8860B', fontWeight: 700, fontSize: '0.85rem',
                borderBottom: '1px solid #C9A84C', paddingBottom: '2px',
              }}>
                Vollständige Statuten herunterladen <ChevronRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
