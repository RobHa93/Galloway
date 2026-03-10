import { useState } from 'react'

const breeds = [
  {
    id: 'black',
    name: 'Black Galloway',
    description: 'Der klassische, tiefschwarze Galloway. Vollständig hornlos, mit dichtem, zottigem Doppelmantel. Besonders robust und anpassungsfähig.',
    traits: [{ label: 'Farbe', value: 'Tiefschwarz, homogen' }, { label: 'Horn', value: 'Hornlos (polled)' }, { label: 'Gewicht Kuh', value: '450–550 kg' }, { label: 'Gewicht Stier', value: '700–900 kg' }, { label: 'Haltung', value: 'Extensiv, ganzjährig Weide' }],
    emoji: '🐄',
    color: '#1a2e26',
  },
  {
    id: 'belted',
    name: 'Belted Galloway',
    description: 'Das «Oreo Cow» – charakteristisch durch ein weisses Band rund um den Bauch auf schwarzem oder braunem Körper. Sehr beliebt durch sein markantes Erscheinungsbild.',
    traits: [{ label: 'Farbe', value: 'Schwarz/Braun mit weissem Gürtel' }, { label: 'Horn', value: 'Hornlos (polled)' }, { label: 'Gewicht Kuh', value: '450–550 kg' }, { label: 'Gewicht Stier', value: '700–900 kg' }, { label: 'Haltung', value: 'Extensiv, Weide-Agroforst' }],
    emoji: '🐄',
    color: '#2D4A3E',
  },
  {
    id: 'riggit',
    name: 'Riggit Galloway',
    description: 'Seltene Variante mit weissem Rückenstreifen. Historisch besonders angepasst an feuchte, moorige Weidegebiete der schottischen Highlands.',
    traits: [{ label: 'Farbe', value: 'Schwarz/Braun mit Rückenstreifen' }, { label: 'Horn', value: 'Hornlos (polled)' }, { label: 'Gewicht Kuh', value: '420–500 kg' }, { label: 'Gewicht Stier', value: '650–850 kg' }, { label: 'Haltung', value: 'Extensiv, Moorgebiete' }],
    emoji: '🐄',
    color: '#3D6B59',
  },
  {
    id: 'blue',
    name: 'Blue Galloway',
    description: 'Aus der Kreuzung von Black Galloway mit weissen Tieren entstandene Variante mit blaugrauem Fell. Selten und besonders geschätzt für ihre Genügsamkeit.',
    traits: [{ label: 'Farbe', value: 'Blaugrau (roan)' }, { label: 'Horn', value: 'Hornlos (polled)' }, { label: 'Gewicht Kuh', value: '430–520 kg' }, { label: 'Gewicht Stier', value: '650–850 kg' }, { label: 'Haltung', value: 'Extensiv, Hochlagen' }],
    emoji: '🐄',
    color: '#4e8a72',
  },
]

const breedingGoals = [
  { icon: '🌿', title: 'Mutterkuhhaltung', text: 'Optimale Eignung für extensive Mutterkuhhaltung ohne Zufütterung' },
  { icon: '🏆', title: 'Fleischqualität', text: 'Hochwertige Marmorierung, intramuskuläres Fett, feinfaserig' },
  { icon: '💪', title: 'Gesundheit', text: 'Hohe Lebenserwartung, geringe Tierarztkosten, natürliche Kalbung' },
  { icon: '❄️', title: 'Winterhärte', text: 'Ganzjährige Außenhaltung in der Schweizer Hügel- und Berglandschaft' },
  { icon: '🌱', title: 'Biodiversität', text: 'Beitrag zur Landschaftspflege und Erhalt artenreicher Weiden' },
  { icon: '📊', title: 'Zuchtwerte', text: 'Wissenschaftlich basierte Leistungsprüfung und Indexzucht' },
]

export default function Zucht() {
  const [selected, setSelected] = useState('black')
  const breed = breeds.find((b) => b.id === selected)

  return (
    <section id="zucht" style={{ backgroundColor: '#1a2e26', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #D4B86A)' }} />
            <span style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Züchtung & Rassenstandard
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#F5F0E8',
            margin: 0,
            lineHeight: 1.2,
          }}>
            Die Galloway-Rasse
          </h2>
        </div>

        {/* Breed Selector */}
        <div className="fade-in-up" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {breeds.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelected(b.id)}
              style={{
                padding: '0.55rem 1.25rem',
                border: selected === b.id ? '1.5px solid #C9A84C' : '1.5px solid rgba(245,240,232,0.2)',
                background: selected === b.id ? 'rgba(201,168,76,0.12)' : 'transparent',
                color: selected === b.id ? '#C9A84C' : 'rgba(245,240,232,0.65)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Breed Detail */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          {/* Visual */}
          <div className="fade-in-up" style={{
            aspectRatio: '4/3',
            background: `linear-gradient(135deg, ${breed.color}, ${breed.color}cc)`,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.15)',
          }}>
            <div style={{ textAlign: 'center', opacity: 0.25 }}>
              <div style={{ fontSize: '8rem' }}>🐄</div>
              <div style={{ color: '#F5F0E8', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                FOTO {breed.name.toUpperCase()}
              </div>
            </div>
            <div style={{
              position: 'absolute',
              top: '1rem', left: '1rem',
              backgroundColor: 'rgba(201,168,76,0.9)',
              color: '#1a2e26',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              padding: '0.3rem 0.75rem',
              borderRadius: '2px',
              textTransform: 'uppercase',
            }}>
              {breed.name}
            </div>
          </div>

          {/* Info */}
          <div className="fade-in-up stagger-2">
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#F5F0E8', fontSize: '1.75rem', marginTop: 0, marginBottom: '1rem' }}>
              {breed.name}
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.75)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              {breed.description}
            </p>
            {/* Traits grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {breed.traits.map((t) => (
                <div key={t.label} style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '3px',
                  padding: '0.85rem',
                }}>
                  <div style={{ color: '#C9A84C', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{t.label}</div>
                  <div style={{ color: '#F5F0E8', fontSize: '0.85rem', fontWeight: 500 }}>{t.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Breeding Goals */}
        <div>
          <h3 className="fade-in-up" style={{
            fontFamily: "'Playfair Display', serif",
            color: '#F5F0E8',
            fontSize: '1.6rem',
            marginBottom: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            Zuchtziele & Herdebuchprogramm
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {breedingGoals.map((goal, i) => (
              <div key={i} className={`fade-in-up stagger-${(i % 4) + 1}`} style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: '4px',
                padding: '1.5rem',
                transition: 'background 0.2s, border-color 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.06)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{goal.icon}</div>
                <div style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{goal.title}</div>
                <div style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.82rem', lineHeight: 1.65 }}>{goal.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
