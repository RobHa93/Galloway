import { Mail, Phone, MapPin, Facebook, Instagram, Clock3 } from 'lucide-react'

const footerLinks = {
  Hof: [
    { label: 'Unser Betrieb', href: '#verband' },
    { label: 'Hofladen', href: '#hofladen' },
    { label: 'Feiern im Huebelstuebli', href: '#aktuelles' },
    { label: 'Auszeichnungen', href: '#zuechter' },
  ],
  Produkte: [
    { label: 'Hofladenprodukte', href: 'https://www.galloway-schweiz.ch/huebelstuebli/' },
    { label: 'Rindfleisch', href: 'https://www.galloway-schweiz.ch/huebelstuebli/galloway-rindfleisch/' },
    { label: 'Hirschfleisch', href: 'https://www.galloway-schweiz.ch/huebelstuebli/damhirschfleisch/' },
    { label: 'Lammfleisch', href: 'https://www.galloway-schweiz.ch/huebelstuebli/weidelamm/' },
  ],
  Mehr: [
    { label: 'Wildfleisch', href: 'https://www.galloway-schweiz.ch/huebelstuebli/rehwild-and-wildschwein/' },
    { label: 'Forellen', href: 'https://www.galloway-schweiz.ch/huebelstuebli/forellen/' },
    { label: 'Partner', href: 'https://www.galloway-schweiz.ch/partner/' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
}

export default function Footer() {
  return (
    <footer id="kontakt" style={{ backgroundColor: '#111c16', color: 'rgba(245,240,232,0.7)' }}>
      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px', height: '40px',
                background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem',
              }}>
                🐄
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: '#F5F0E8', lineHeight: 1.2 }}>Henrys Farm</div>
                <div style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>Galloway, Hirsch & Lammzucht</div>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'rgba(245,240,232,0.6)' }}>
              Auf unserem Hof in Eiken und Muenchwilen AG leben Galloway Rinder,
              Damhirsche und Weidelaemmer. Unsere Produkte verkaufen wir direkt ab Hof
              im Huebelstuebli.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/gallowayschweiz' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/rita_und_heiner_schwarb/' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={label === 'Facebook' ? 'https://www.facebook.com/gallowayschweiz' : 'https://www.instagram.com/rita_und_heiner_schwarb/'}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  style={{
                    width: '36px', height: '36px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '50%',
                    background: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'rgba(245,240,232,0.6)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(245,240,232,0.6)' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                color: '#F5F0E8',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                marginTop: 0,
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: '0.6rem' }}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      style={{
                        color: 'rgba(245,240,232,0.55)',
                        textDecoration: 'none',
                        fontSize: '0.82rem',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#C9A84C'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(245,240,232,0.55)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact and map */}
          <div style={{ gridColumn: 'span 1' }}>
            <h4 style={{
              color: '#F5F0E8',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              marginTop: 0,
            }}>
              Kontakt & Anfahrt
            </h4>
            {[
              { icon: MapPin, text: 'Huebel 20\n4333 Muenchwilen / AG\nSchweiz' },
              { icon: Phone, text: '+41 62 873 29 68', href: 'tel:+41628732968' },
              { icon: Mail, text: 'rita.schwarb@gmail.com', href: 'mailto:rita.schwarb@gmail.com' },
              { icon: Clock3, text: 'Huebelstuebli: Freitag ab 16:00 Uhr\noder nach telefonischer Vereinbarung' },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                <Icon size={13} color="#C9A84C" style={{ flexShrink: 0, marginTop: '2px' }} />
                {href ? (
                  <a href={href} style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', textDecoration: 'none', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{text}</a>
                ) : (
                  <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{text}</span>
                )}
              </div>
            ))}

            <div style={{
              marginTop: '0.75rem',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}>
              <iframe
                title="Anfahrt Henrys Farm"
                src="https://www.google.com/maps?q=H%C3%BCbel%2020%2C%204333%20M%C3%BCnchwilen%20AG%2C%20Schweiz&output=embed"
                width="100%"
                height="180"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', margin: '0 0 1.5rem' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)' }}>
            © {new Date().getFullYear()} Henrys Farm. Alle Rechte vorbehalten.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'Impressum', href: 'https://www.galloway-schweiz.ch/impressum/' },
              { label: 'Datenschutz', href: 'https://www.galloway-schweiz.ch/datenschutzerklaerung/' },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(245,240,232,0.65)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(245,240,232,0.35)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
