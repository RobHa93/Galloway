import { Calendar, Tag, ArrowRight, MapPin } from 'lucide-react'

const hubelstuebliNews = [
  {
    id: 1,
    category: 'Eventlocation',
    dateStr: 'Ganzjährig buchbar',
    title: 'Feiern im Hübelstübli',
    excerpt:
      'Unser Hübelstübli ist die passende Location für kleine Anlässe bis 35 Personen. Ob Geburtstagsfeier, Weihnachtsanlass, Apéro oder Generalversammlung: Wir begleiten Ihren Anlass persönlich und unkompliziert.',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Einkaufen-Degustieren/IMG_6437__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
  },
  {
    id: 2,
    category: 'Business',
    dateStr: 'Nach Vereinbarung',
    title: 'Seminare & Firmenanlässe',
    excerpt:
      'Für Teams und Unternehmen bietet das Hübelstübli einen ruhigen, ländlichen Rahmen für Sitzungen, Workshops und kleinere Seminare mit regionaler Verpflegung.',
    image: 'https://plus.unsplash.com/premium_photo-1667514668700-9be133c3dc20?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    category: 'Privat',
    dateStr: 'Wochenende & Abendtermine',
    title: 'Private Feiern mit Hofcharakter',
    excerpt:
      'Von der kleinen Familienfeier bis zum Apéro mit Freunden: Das Hübelstübli verbindet gemütliche Atmosphäre mit Produkten direkt vom Hof.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const categoryColor = {
  Eventlocation: '#2D4A3E',
  Business: '#B8860B',
  Privat: '#3D6B59',
}

const upcomingEvents = [
  { date: '18. Apr 2026', title: 'Frühlings-Apéro im Hübelstübli', location: 'Hübelstübli, Münchwilen AG' },
  { date: '22. Mai 2026', title: 'After-Work Degustation', location: 'Hübelstübli, Münchwilen AG' },
  { date: '11. Jul 2026', title: 'Sommerabend mit Hofspezialitäten', location: 'Hübelstübli, Münchwilen AG' },
  { date: '26. Sep 2026', title: 'Herbstgenuss & Most', location: 'Hübelstübli, Münchwilen AG' },
]

export default function Aktuelles() {
  return (
    <section id="aktuelles" style={{ backgroundColor: '#1a2e26', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #D4B86A)' }} />
            <span style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Hübelstübli & Events
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
            Feiern im Hübelstübli
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {/* News Articles */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {hubelstuebliNews.map((item, i) => (
                <article key={item.id} className={`fade-in-up stagger-${i + 1}`} style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {/* Image */}
                  <div style={{
                    height: '180px',
                    backgroundImage: `linear-gradient(135deg, rgba(26,46,38,0.45), rgba(26,46,38,0.65)), url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <div style={{ opacity: 0.35, fontSize: '3.2rem' }}>🍽️</div>
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      backgroundColor: categoryColor[item.category] || '#2D4A3E',
                      border: `1px solid rgba(201,168,76,0.3)`,
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      padding: '0.25rem 0.65rem', borderRadius: '2px',
                    }}>
                      <Tag size={10} color="#C9A84C" />
                      <span style={{ color: '#C9A84C', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                      <Calendar size={12} color="#C9A84C" />
                      <span style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.72rem', letterSpacing: '0.04em' }}>{item.dateStr}</span>
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#F5F0E8',
                      fontSize: '1.05rem',
                      lineHeight: 1.4,
                      margin: '0 0 0.75rem',
                      fontWeight: 600,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.82rem', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
                      {item.excerpt}
                    </p>
                    <button style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      background: 'none', border: 'none', padding: 0,
                      color: '#C9A84C', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 700,
                      letterSpacing: '0.06em', fontFamily: "'Montserrat', sans-serif",
                    }}>
                      Weiterlesen <ArrowRight size={13} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar: Events */}
          <div>
            <div className="fade-in-up" style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '4px',
              padding: '1.75rem',
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#F5F0E8', fontSize: '1.2rem', marginTop: 0, marginBottom: '1.5rem' }}>
                Kommende Termine
              </h3>
              {upcomingEvents.map((ev, i) => (
                <div key={i} style={{
                  paddingBottom: '1.25rem',
                  marginBottom: '1.25rem',
                  borderBottom: i < upcomingEvents.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '50px',
                    flexShrink: 0,
                    backgroundColor: 'rgba(201,168,76,0.1)',
                    borderRadius: '3px',
                    padding: '0.5rem 0.25rem',
                    textAlign: 'center',
                  }}>
                    <div style={{ color: '#C9A84C', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                      {ev.date.split(' ')[1]}
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", color: '#F5F0E8', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1 }}>
                      {ev.date.split(' ')[0]}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#F5F0E8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.2rem', lineHeight: 1.4 }}>
                      {ev.title}
                    </div>
                    <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={10} />
                      {ev.location}
                    </div>
                  </div>
                </div>
              ))}
              <a href="#kontakt" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', padding: '0.65rem',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#C9A84C', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                borderRadius: '2px', transition: 'background 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Alle Termine ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
