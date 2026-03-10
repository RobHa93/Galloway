import { ChevronDown, Leaf, Shield, Award } from 'lucide-react'

const missions = [
  { icon: Leaf, title: 'Natürliche Haltung', text: 'Ganzjährige Weidehaltung in der Schweizer Hügellandschaft – artgerecht und nachhaltig.' },
  { icon: Shield, title: 'Tierwohl zuerst', text: 'Robuste Rassen für extensiven Anbau, ohne Kraftfutter und chemische Zusätze.' },
  { icon: Award, title: 'Kontrollierte Qualität', text: 'Zertifiziertes Herdebuch, anerkannte Zuchtstandards und transparente Herkunft.' },
]

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #1a2e26 0%, #2D4A3E 40%, #3D6B59 100%)',
        zIndex: 0,
      }}>
        {/* Decorative pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 25% 60%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(circle at 75% 30%, rgba(61,107,89,0.3) 0%, transparent 60%)`,
          zIndex: 1,
        }} />
        {/* Image placeholder - shown as a styled placeholder */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0,
        }}>
          <div style={{
            textAlign: 'center',
            opacity: 0.06,
          }}>
            <div style={{ fontSize: '18rem', lineHeight: 1 }}>🐄</div>
          </div>
        </div>
        {/* Top gradient (for nav readability) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(26,46,38,0.7) 0%, transparent 30%, rgba(26,46,38,0.4) 70%, rgba(26,46,38,0.85) 100%)',
          zIndex: 2,
        }} />
      </div>

      {/* Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        paddingTop: '180px',
        paddingBottom: '80px',
        width: '100%',
      }}>
        <div style={{ maxWidth: '720px' }}>
          {/* Tag line */}
          <div className="fade-in stagger-1" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(201,168,76,0.15)',
            border: '1px solid rgba(201,168,76,0.35)',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: '6px', height: '6px', background: '#C9A84C', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Schweizer Galloway-Verband
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up stagger-1" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            color: '#F5F0E8',
            lineHeight: 1.15,
            margin: '0 0 1.5rem',
            letterSpacing: '-0.01em',
          }}>
            Tradition trifft{' '}
            <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #C9A84C, #D4B86A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Bio-Qualität
            </span>
          </h1>

          {/* Lead text */}
          <p className="fade-in-up stagger-2" style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.75,
            margin: '0 0 2.5rem',
            maxWidth: '560px',
          }}>
            Galloway Schweiz – der Verband für Züchterinnen und Züchter der robusten,
            genügsamen Galloway-Rasse. Seit Jahrzehnten setzen wir uns für artgerechte
            Haltung, nachhaltige Landwirtschaft und transparente Zucht ein.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#verband"
              style={{
                textDecoration: 'none',
                padding: '0.85rem 2rem',
                background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
                color: '#1a2e26',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
              }}
              onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(201,168,76,0.4)' }}
              onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 20px rgba(201,168,76,0.3)' }}
            >
              Über den Verband
            </a>
            <a
              href="#zuechter"
              style={{
                textDecoration: 'none',
                padding: '0.85rem 2rem',
                background: 'transparent',
                color: '#F5F0E8',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                border: '1.5px solid rgba(245,240,232,0.45)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = '#C9A84C'; e.target.style.background = 'rgba(201,168,76,0.08)' }}
              onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.45)'; e.target.style.background = 'transparent' }}
            >
              Züchter finden
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="fade-in stagger-5" style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          opacity: 0.55,
        }}>
          <span style={{ color: '#F5F0E8', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
          <ChevronDown size={16} color="#F5F0E8" style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </div>

      {/* Mission bar */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'rgba(26,46,38,0.95)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0',
        }}>
          {missions.map((m, i) => (
            <div key={i} className={`fade-in stagger-${i + 2}`} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1rem 1.5rem',
              borderRight: i < missions.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(201,168,76,0.12)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <m.icon size={18} color="#C9A84C" />
              </div>
              <div>
                <div style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.25rem', letterSpacing: '0.02em' }}>{m.title}</div>
                <div style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.75rem', lineHeight: 1.6 }}>{m.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
