import { Download, FileText } from 'lucide-react'
import { downloads } from '../data/content'

export default function Downloads() {
  return (
    <section id="downloads" style={{ backgroundColor: '#EAE3D6', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div className="gold-divider" />
            <span style={{ color: '#B8860B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Dokumente
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
            Downloads & Reglemente
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {downloads.map((doc, i) => (
            <div key={doc.id} className={`fade-in-up stagger-${(i % 4) + 1}`} style={{
              backgroundColor: '#fff',
              border: '1px solid #DDD5C5',
              borderRadius: '4px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              transition: 'box-shadow 0.2s, transform 0.2s',
              cursor: 'pointer',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(45,74,62,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(45,74,62,0.08)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}>
                {doc.icon}
              </div>
              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, color: '#1a2e26', fontSize: '0.9rem', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                  {doc.title}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', marginBottom: '0.6rem' }}>{doc.subtitle}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    backgroundColor: '#F5F0E8',
                    color: '#475569',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '2px',
                    letterSpacing: '0.08em',
                  }}>
                    {doc.type}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{doc.size}</span>
                </div>
              </div>
              {/* Download icon */}
              <div style={{
                width: '36px',
                height: '36px',
                border: '1.5px solid #EAE3D6',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#2D4A3E',
                transition: 'background 0.2s, border-color 0.2s',
              }}>
                <Download size={15} />
              </div>
            </div>
          ))}
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
            Alle Dokumente stehen Mitgliedern kostenlos zur Verfügung.{' '}
            <a href="#kontakt" style={{ color: '#B8860B', fontWeight: 600, textDecoration: 'none' }}>
              Mitglied werden →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
