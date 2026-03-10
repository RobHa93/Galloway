import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#verband', label: 'Verband' },
  { href: '#zucht', label: 'Zucht' },
  { href: '#marktplatz', label: 'Marktplatz' },
  { href: '#aktuelles', label: 'Aktuelles' },
  { href: '#zuechter', label: 'Züchter' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    setActive(href)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(29, 51, 41, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '68px' : '84px', transition: 'height 0.3s ease' }}>
          {/* Logo */}
          <a
            href="#home"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            onClick={() => handleNav('#home')}
          >
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              flexShrink: 0,
            }}>
              🐄
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#F5F0E8', letterSpacing: '0.02em', lineHeight: 1.2 }}>
                Galloway
              </div>
              <div style={{ fontSize: '0.62rem', color: '#C9A84C', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
                Schweiz
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '0.25rem' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  textDecoration: 'none',
                  padding: '0.5rem 0.85rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: active === link.href ? '#C9A84C' : '#F5F0E8',
                  borderBottom: active === link.href ? '2px solid #C9A84C' : '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => { if (active !== link.href) e.target.style.color = '#C9A84C' }}
                onMouseLeave={(e) => { if (active !== link.href) e.target.style.color = '#F5F0E8' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#kontakt"
            onClick={() => handleNav('#kontakt')}
            className="hidden-mobile"
            style={{
              textDecoration: 'none',
              padding: '0.55rem 1.25rem',
              background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
              color: '#1a2e26',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.85'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Mitglied werden
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              color: '#F5F0E8',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Menü öffnen"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '400px' : '0',
        transition: 'max-height 0.35s ease',
        backgroundColor: 'rgba(29, 51, 41, 0.98)',
        borderTop: open ? '1px solid rgba(201,168,76,0.2)' : 'none',
      }}>
        <nav style={{ padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                display: 'block',
                textDecoration: 'none',
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: 600,
                color: active === link.href ? '#C9A84C' : '#F5F0E8',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                letterSpacing: '0.04em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => handleNav('#kontakt')}
            style={{
              display: 'block',
              textDecoration: 'none',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
              color: '#1a2e26',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
            }}
          >
            Mitglied werden
          </a>
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
