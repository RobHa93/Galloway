import { useState } from 'react'
import { Search, MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import { breeders } from '../data/content'

// Simplified SVG path of Switzerland outline
const SWITZERLAND_PATH = "M 120,60 L 140,55 L 165,58 L 195,52 L 220,48 L 250,50 L 275,45 L 300,48 L 320,55 L 340,60 L 355,70 L 360,85 L 355,100 L 345,115 L 330,125 L 320,140 L 305,150 L 290,158 L 270,160 L 255,170 L 240,175 L 225,170 L 210,165 L 195,170 L 180,175 L 165,170 L 150,162 L 135,155 L 120,145 L 108,130 L 100,115 L 98,100 L 105,85 L 112,72 Z"

export default function ZuechterSuche() {
  const [selected, setSelected] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = breeders.filter((b) =>
    !searchTerm ||
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.canton.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.cantonFull.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const activeBreeder = selected ? breeders.find((b) => b.id === selected) : null

  return (
    <section id="zuechter" style={{ backgroundColor: '#F5F0E8', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div className="gold-divider" />
            <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Mitglieder
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
            Züchter-Suche
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '560px', lineHeight: 1.75 }}>
            Finden Sie Galloway-Züchterinnen und Züchter in Ihrer Nähe. Klicken Sie auf einen Marker oder
            suchen Sie nach Kanton / Name.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Map */}
          <div className="fade-in-up" style={{
            backgroundColor: '#fff',
            border: '1px solid #EAE3D6',
            borderRadius: '4px',
            overflow: 'hidden',
            gridColumn: 'span 1',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #e8f0ec 0%, #d0e4d8 100%)',
              padding: '2rem',
              position: 'relative',
              minHeight: '380px',
            }}>
              <svg
                viewBox="80 35 300 155"
                style={{ width: '100%', height: 'auto' }}
                aria-label="Karte der Schweiz mit Züchter-Markierungen"
              >
                {/* Switzerland outline */}
                <path
                  d={SWITZERLAND_PATH}
                  fill="rgba(45,74,62,0.12)"
                  stroke="#2D4A3E"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* Cantons grid lines */}
                {[
                  "M 120,100 L 360,100",
                  "M 230,35 L 230,195",
                  "M 155,60 L 155,175",
                  "M 300,48 L 300,162",
                ].map((d, i) => (
                  <path key={i} d={d} stroke="rgba(45,74,62,0.08)" strokeWidth="0.5" />
                ))}
                {/* Breeder markers */}
                {breeders.map((breeder) => {
                  const cx = 80 + (breeder.x / 100) * 300
                  const cy = 35 + (breeder.y / 100) * 155
                  const isSelected = selected === breeder.id
                  const isInFilter = filtered.some((b) => b.id === breeder.id)
                  return (
                    <g key={breeder.id} style={{ cursor: 'pointer' }} onClick={() => setSelected(isSelected ? null : breeder.id)}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 8 : 6}
                        fill={isSelected ? '#B8860B' : isInFilter ? '#2D4A3E' : '#94a3b8'}
                        stroke={isSelected ? '#C9A84C' : '#fff'}
                        strokeWidth={isSelected ? 2 : 1.5}
                        style={{ transition: 'all 0.2s' }}
                      />
                      {isSelected && (
                        <circle cx={cx} cy={cy} r={14} fill="rgba(201,168,76,0.2)" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
                      )}
                      <text
                        x={cx}
                        y={cy - 10}
                        textAnchor="middle"
                        style={{ fontSize: '5px', fill: '#1a2e26', fontWeight: 600, fontFamily: 'sans-serif', pointerEvents: 'none' }}
                      >
                        {isSelected ? breeder.canton : ''}
                      </text>
                    </g>
                  )
                })}
                {/* Legend */}
                <g>
                  <circle cx="95" cy="43" r="4" fill="#2D4A3E" />
                  <text x="102" y="46" style={{ fontSize: '5px', fill: '#1a2e26', fontFamily: 'sans-serif' }}>Züchter</text>
                  <circle cx="145" cy="43" r="4" fill="#B8860B" />
                  <text x="152" y="46" style={{ fontSize: '5px', fill: '#1a2e26', fontFamily: 'sans-serif' }}>Ausgewählt</text>
                </g>
              </svg>
            </div>

            {/* Selected breeder detail */}
            {activeBreeder && (
              <div style={{
                padding: '1.25rem 1.5rem',
                borderTop: '2px solid #B8860B',
                backgroundColor: '#FFFDF8',
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, color: '#1a2e26', marginBottom: '0.5rem' }}>
                  {activeBreeder.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                  <MapPin size={12} color="#B8860B" />
                  <span style={{ fontSize: '0.78rem', color: '#475569' }}>{activeBreeder.cantonFull} ({activeBreeder.canton})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                  <Mail size={12} color="#B8860B" />
                  <a href={`mailto:${activeBreeder.contact}`} style={{ fontSize: '0.78rem', color: '#2D4A3E', textDecoration: 'none' }}>{activeBreeder.contact}</a>
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748B' }}>
                  Rassen: {activeBreeder.animals}
                </div>
              </div>
            )}
          </div>

          {/* List */}
          <div className="fade-in-up stagger-2">
            {/* Search */}
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <Search size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Nach Name oder Kanton suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  border: '1.5px solid #EAE3D6',
                  borderRadius: '3px',
                  fontSize: '0.85rem',
                  fontFamily: "'Montserrat', sans-serif",
                  outline: 'none',
                  backgroundColor: '#fff',
                  color: '#1C1C1C',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#B8860B'}
                onBlur={(e) => e.target.style.borderColor = '#EAE3D6'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filtered.map((breeder, i) => (
                <div
                  key={breeder.id}
                  className={`fade-in-up stagger-${(i % 5) + 1}`}
                  onClick={() => setSelected(selected === breeder.id ? null : breeder.id)}
                  style={{
                    backgroundColor: selected === breeder.id ? '#fff' : '#fff',
                    border: selected === breeder.id ? '1.5px solid #B8860B' : '1px solid #EAE3D6',
                    borderRadius: '4px',
                    padding: '1rem 1.25rem',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: selected === breeder.id ? '0 4px 16px rgba(184,134,11,0.1)' : 'none',
                  }}
                  onMouseEnter={(e) => { if (selected !== breeder.id) e.currentTarget.style.borderColor = '#C9A84C' }}
                  onMouseLeave={(e) => { if (selected !== breeder.id) e.currentTarget.style.borderColor = '#EAE3D6' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1a2e26', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{breeder.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <MapPin size={11} color="#B8860B" />
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{breeder.cantonFull}</span>
                      </div>
                    </div>
                    <span style={{
                      backgroundColor: '#F5F0E8',
                      color: '#2D4A3E',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px',
                      letterSpacing: '0.06em',
                    }}>
                      {breeder.canton}
                    </span>
                  </div>
                  {selected === breeder.id && (
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #EAE3D6' }}>
                      <div style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.25rem' }}>
                        📧 {breeder.contact}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.25rem' }}>
                        📞 {breeder.phone}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>🐄 {breeder.animals}</div>
                    </div>
                  )}
                </div>
              ))}
              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                  Kein Züchter gefunden.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
