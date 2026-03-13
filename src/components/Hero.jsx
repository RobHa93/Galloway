import { ChevronDown, Leaf, Shield, Award } from 'lucide-react'
import alpImage from '../assets/img/alp.jpg'

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
        backgroundImage: `url(${alpImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}>
        {/* Decorative pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 25% 60%, rgba(201,168,76,0.12) 0%, transparent 60%), radial-gradient(circle at 75% 30%, rgba(61,107,89,0.35) 0%, transparent 60%)`,
          zIndex: 1,
        }} />
        {/* Top gradient (for nav readability) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(26,46,38,0.82) 0%, rgba(26,46,38,0.52) 35%, rgba(26,46,38,0.58) 70%, rgba(26,46,38,0.9) 100%)',
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
        <div style={{
          maxWidth: '760px',
          backgroundColor: 'rgba(26,46,38,0.58)',
          border: '1px solid rgba(201,168,76,0.22)',
          borderRadius: '6px',
          padding: '1.35rem 1.4rem 1.6rem',
          boxShadow: '0 10px 35px rgba(0,0,0,0.28)',
          backdropFilter: 'blur(1px)',
        }}>
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
              Schweizer Landwirtschaft
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
            Willkommen bei{' '}
            <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #C9A84C, #D4B86A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Henrys Farm
            </span>
          </h1>

          {/* Lead text */}
          <p className="fade-in-up stagger-2" style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.75,
            margin: '0 0 2.5rem',
            maxWidth: '660px',
          }}>
            Auf unserem Hof in Eiken und Münchwilen AG, leben Galloway Rinder, Damhirsche und Weidelämmer. Die Rinder verbringen den Sommer auf der Alp in der welschen Schweiz. Unsere Tiere sind nie angebunden und können sich immer frei bewegen. Sie leben alle in einer Herde und die Jungtiere werden von den Muttertieren grossgezogen. Gras, Heu, Stroh und Silage aus eigener Produktion werden gefüttert, ohne dass Kraftfutter verwendet wird. Unsere Produkte verkaufen wir im Hübelstübli direkt ab Hof. 
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up stagger-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#hofladen"
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
              Produkte
            </a>
            <a
              href="#downloads"
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
              Bestellformular
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
