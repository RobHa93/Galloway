import { useState } from 'react'
import { MapPin, Filter, Search, Phone, Mail } from 'lucide-react'
import { marketplaceListings } from '../data/content'

const typeFilter = ['Alle', 'Stier', 'Kuh mit Kalb', 'Färsen', 'Mutterkuh', 'Zuchtbulle', 'Absetzer']
const breedFilter = ['Alle Rassen', 'Black Galloway', 'Belted Galloway', 'Riggit Galloway', 'Blue Galloway']

export default function Marktplatz() {
  const [activeType, setActiveType] = useState('Alle')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = marketplaceListings.filter((item) => {
    const typeMatch = activeType === 'Alle' || item.type.includes(activeType)
    const searchMatch = !searchTerm || item.breed.toLowerCase().includes(searchTerm.toLowerCase()) || item.canton.toLowerCase().includes(searchTerm.toLowerCase())
    return typeMatch && searchMatch
  })

  return (
    <section id="marktplatz" style={{ backgroundColor: '#F5F0E8', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="fade-in-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="gold-divider" />
              <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Ankauf & Verkauf</span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#1a2e26',
              margin: 0,
              lineHeight: 1.2,
            }}>
              Marktplatz
            </h2>
          </div>
          <a
            href="#kontakt"
            className="fade-in-up"
            style={{
              textDecoration: 'none',
              padding: '0.7rem 1.5rem',
              background: 'linear-gradient(135deg, #2D4A3E, #1a2e26)',
              color: '#F5F0E8',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '2px',
            }}
          >
            + Inserat aufgeben
          </a>
        </div>

        {/* Filters */}
        <div className="fade-in-up" style={{
          backgroundColor: '#fff',
          border: '1px solid #EAE3D6',
          borderRadius: '4px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: '1 1 200px' }}>
            <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Rasse, Kanton suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                border: '1.5px solid #EAE3D6',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontFamily: "'Montserrat', sans-serif",
                outline: 'none',
                color: '#1C1C1C',
                backgroundColor: '#F5F0E8',
              }}
            />
          </div>
          {/* Type filter chips */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {typeFilter.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                style={{
                  padding: '0.4rem 0.85rem',
                  border: activeType === t ? '1.5px solid #B8860B' : '1.5px solid #EAE3D6',
                  background: activeType === t ? 'rgba(184,134,11,0.08)' : '#fff',
                  color: activeType === t ? '#B8860B' : '#475569',
                  fontSize: '0.75rem',
                  fontWeight: activeType === t ? 700 : 500,
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p>Keine Inserate gefunden. Versuche andere Filterkriterien.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((item, i) => (
              <div key={item.id} className={`fade-in-up stagger-${(i % 4) + 1}`} style={{
                backgroundColor: '#fff',
                border: '1px solid #EAE3D6',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s, transform 0.2s',
                position: 'relative',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(45,74,62,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {item.premium && (
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
                    color: '#1a2e26', fontSize: '0.6rem', fontWeight: 700,
                    padding: '0.2rem 0.6rem', borderRadius: '2px', letterSpacing: '0.1em',
                    textTransform: 'uppercase', zIndex: 1,
                  }}>
                    Premium
                  </div>
                )}
                {/* Image placeholder */}
                <div style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, #2D4A3E, #3D6B59)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center', opacity: 0.25 }}>
                    <div style={{ fontSize: '3.5rem' }}>🐄</div>
                    <div style={{ color: '#F5F0E8', fontSize: '0.6rem', letterSpacing: '0.12em' }}>FOTO {item.type.toUpperCase()}</div>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: '#1a2e26', marginBottom: '0.4rem' }}>
                    {item.type}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#B8860B', fontWeight: 600, marginBottom: '0.75rem' }}>{item.breed}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {[['Alter', item.age], ['Kanton', item.canton], ['Herdbuch', item.herdno]].map(([label, val]) => (
                      <span key={label} style={{
                        backgroundColor: '#F5F0E8',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '3px',
                        fontSize: '0.7rem',
                        color: '#475569',
                        fontWeight: 500,
                      }}>
                        {label}: {val}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid #EAE3D6' }}>
                    <span style={{ fontSize: '0.82rem', color: '#64748B' }}>{item.price}</span>
                    <button style={{
                      padding: '0.45rem 1rem',
                      background: '#2D4A3E',
                      color: '#F5F0E8',
                      border: 'none',
                      borderRadius: '2px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      letterSpacing: '0.06em',
                      fontFamily: "'Montserrat', sans-serif",
                    }}>
                      Anfragen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="fade-in-up" style={{
          marginTop: '3rem',
          backgroundColor: '#fff',
          border: '1px solid #EAE3D6',
          borderRadius: '4px',
          padding: '2.5rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#475569', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Möchten Sie ein Tier inserieren? Mitglieder können Inserate kostenlos aufgeben.
          </p>
          <a href="#kontakt" style={{
            textDecoration: 'none',
            padding: '0.75rem 2rem',
            background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
            color: '#1a2e26',
            fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', borderRadius: '2px',
          }}>
            Inserat aufgeben
          </a>
        </div>
      </div>
    </section>
  )
}
