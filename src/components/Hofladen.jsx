import { useState } from 'react'

const products = [
  {
    id: 'rindfleisch',
    tab: 'Rindfleisch',
    title: 'Galloway Rindfleisch',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Einkaufen-Degustieren/IMG_2556__FocusFillWyIwLjAwIiwiMC4wMCIsMTAyNCw1MTJd.jpg',
    description:
      'Unser Rindfleisch stammt aus Freilandhaltung mit Futter aus eigener Produktion: Gras, Heu und Silage. Ohne Kraftfutter entsteht langsam gewachsenes, feinfasriges und zart marmoriertes Fleisch.',
    facts: [
      { label: 'Pakete', value: '1/8, 1/4, 1/2 oder ganzes Rind' },
      { label: 'Für wen', value: 'Privathaushalte, Gastro, Grossfamilien' },
      { label: 'Im Hofladen', value: 'Edle Stücke, Wurstwaren, Grilladen' },
      { label: 'Bestellung', value: 'Auch individuelle Zuschnitte möglich' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/galloway-rindfleisch/',
  },
  {
    id: 'hirschfleisch',
    tab: 'Hirschfleisch',
    title: 'Damhirschfleisch',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Startseite/IMG_0797__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
    description:
      'Damhirschfleisch ist rotbraun, fein in der Struktur sowie gleichzeitig mager und saftig. Es eignet sich fuer vielseitige Gerichte mit charaktervollem Geschmack.',
    facts: [
      { label: 'Pakete', value: 'Halber oder ganzer Damhirsch' },
      { label: 'Saison', value: 'Vorwiegend Oktober bis Dezember' },
      { label: 'Qualitaet', value: 'Feine Faserung, mager und aromatisch' },
      { label: 'Verkauf', value: 'Direkt ab Hof auf Vorbestellung' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/damhirschfleisch/',
  },
  {
    id: 'lammfleisch',
    tab: 'Lammfleisch',
    title: 'Weidelamm',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Einkaufen-Degustieren/IMG_2586__FocusFillWyIwLjAwIiwiMC4wMCIsMTAyNCw1MTJd.jpg',
    description:
      'Unsere Laemmer verbringen etwa 6 bis 8 Monate mit den Muettern auf den Weiden. Dadurch entsteht feines Weidelammfleisch mit natuerlichem Geschmack.',
    facts: [
      { label: 'Pakete', value: 'Ganzes oder halbes Lamm' },
      { label: 'Verfuegbarkeit', value: 'Vorwiegend Juli bis Oktober' },
      { label: 'Aufzucht', value: 'Muttergebunden auf der Weide' },
      { label: 'Verkauf', value: 'Direktvermarktung ab Hof' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/weidelamm/',
  },
  {
    id: 'wildfleisch',
    tab: 'Wildfleisch',
    title: 'Rehwild & Wildschwein',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Reh-II__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
    description:
      'In der Wildsaison bieten wir Rehwild- und Wildschweinfleisch an. Das Angebot erfolgt auf Anfrage und nach aktueller Verfuegbarkeit.',
    facts: [
      { label: 'Produkte', value: 'Rehwild und Wildschwein' },
      { label: 'Saison', value: 'Wildsaison und auf Anfrage' },
      { label: 'Verfuegbarkeit', value: 'Je nach Bestand' },
      { label: 'Bestellung', value: 'Fruehzeitige Anfrage empfohlen' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/rehwild-and-wildschwein/',
  },
  {
    id: 'forellen',
    tab: 'Forellen',
    title: 'Quellwasserforellen',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Einkaufen-Degustieren/1b6341be-5d57-460e-a484-99019258f867__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
    description:
      'Unsere Forellen verkaufen wir jeweils als ganze oder filetierte Forelle direkt ab Weiher in Kaisten. Die Ausgabe findet traditionell rund um Gruendonnerstag statt.',
    facts: [
      { label: 'Form', value: 'Ganz oder filetiert' },
      { label: 'Ausgabe', value: 'Direkt ab Weiher in Kaisten' },
      { label: 'Termin', value: 'Rund um Gruendonnerstag' },
      { label: 'Hinweis', value: 'Vorbestellung willkommen' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/forellen/',
  },
  {
    id: 'eier',
    tab: 'Eier',
    title: 'Hofeier',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Eier__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
    description:
      'Auf dem Hof leben eigene Huehner, deren Eier wir direkt ab Hof verkaufen. Frisch, regional und unkompliziert in der Direktvermarktung.',
    facts: [
      { label: 'Herkunft', value: 'Von hofeigenen Huehnern' },
      { label: 'Verkauf', value: 'Direkt ab Hof' },
      { label: 'Regional', value: 'Kurze Wege und frisch verfuegbar' },
      { label: 'Bezug', value: 'Solange Vorrat' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/eier/',
  },
  {
    id: 'brot',
    tab: 'Brot',
    title: 'Frisches Hofbrot',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Einkaufen-Degustieren/image1__FocusFillWyIwLjAwIiwiMC4wMCIsMTAyNCw1MTJd.jpeg',
    description:
      'Aus Getreide von unseren Feldern wird in der Region frisches Brot gebacken. Das Brot bieten wir auf Vorbestellung direkt in der Hofvermarktung an.',
    facts: [
      { label: 'Grundlage', value: 'Getreide von eigenen Feldern' },
      { label: 'Verarbeitung', value: 'Regional vermahlen und gebacken' },
      { label: 'Verkauf', value: 'Frisch auf Vorbestellung' },
      { label: 'Anlass', value: 'Auch ideal fuer Apéroplatten' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/brot/',
  },
  {
    id: 'suessmost',
    tab: 'Suessmost',
    title: 'Suessmost',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Einkaufen-Degustieren/Dear-Kathie-Fotografie-Hochzeit-Rheinfelden-Loerrach-720__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
    description:
      'In der Mostsaison werden die Aepfel in Kaisten zu frischem und pasteurisiertem Suessmost gepresst. Verkauft wird der Most in praktischen 10-Liter-Packungen.',
    facts: [
      { label: 'Saison', value: 'Mostsaison im Herbst' },
      { label: 'Produktion', value: 'Frisch und pasteurisiert' },
      { label: 'Gebinde', value: '10-Liter-Packungen' },
      { label: 'Region', value: 'Gepresst in Kaisten' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/suessmost/',
  },
  {
    id: 'brennholz',
    tab: 'Brennholz',
    title: 'Brennholz',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Brennholz__FocusFillWyIwLjAwIiwiMC4wMCIsMTM2Niw2ODNd.jpg',
    description:
      'Unser Kaminholz stammt aus der Umgebung, ist gespalten, brennbereit und mindestens zwei Jahre getrocknet. Lieferung oder Abholung sind je nach Wunsch moeglich.',
    facts: [
      { label: 'Qualitaet', value: 'Mindestens 2 Jahre getrocknet' },
      { label: 'Aufbereitung', value: 'Gespalten und brennbereit' },
      { label: 'Herkunft', value: 'Holz aus der Region' },
      { label: 'Service', value: 'Lieferung oder Selbstabholung' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/brennholz/',
  },
  {
    id: 'geschenke',
    tab: 'Geschenke',
    title: 'Geschenke & Gutscheine',
    image: 'https://www.galloway-schweiz.ch/assets/Images/Geschenke-und-Gutscheine/IMG_7002__FocusFillWyItMC4zMyIsIi0wLjI1IiwxMzY2LDY4M10.jpg',
    description:
      'Wir stellen Geschenkkisten nach Wunsch mit Wurstwaren, Fleischspezialitaeten und weiteren Hofprodukten zusammen. Gutscheine mit frei waehlbarem Betrag sind ebenfalls erhaeltlich.',
    facts: [
      { label: 'Geschenkkorb', value: 'Individuell nach Wunsch' },
      { label: 'Inhalt', value: 'Wurstwaren und Hofspezialitaeten' },
      { label: 'Gutscheine', value: 'Freier Betrag moeglich' },
      { label: 'Versand', value: 'Auf Rechnung nach Hause' },
    ],
    link: 'https://www.galloway-schweiz.ch/huebelstuebli/geschenke-and-gutscheine/',
  },
]

const shopHighlights = [
  { icon: '🏠', title: 'Hofladen', text: 'Unser Huebelstuebli ist freitags ab 16 Uhr geoeffnet oder nach telefonischer Vereinbarung.' },
  { icon: '🍽️', title: 'Degustation', text: 'Im Degustationsraum servieren wir saisonale Spezialitaeten direkt vom Hof.' },
  { icon: '📝', title: 'Vorbestellung', text: 'Viele Produkte sind saisonal. Eine fruehe Anfrage hilft bei Planung und Verfuegbarkeit.' },
]

export default function Hofladen() {
  const [selected, setSelected] = useState('rindfleisch')
  const product = products.find((item) => item.id === selected)

  return (
    <section id="hofladen" style={{ backgroundColor: '#1a2e26', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #D4B86A)' }} />
            <span style={{ color: '#C9A84C', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Hofladen & Direktverkauf
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
            Unsere Hofladenprodukte
          </h2>
        </div>

        {/* Product Selector */}
        <div className="fade-in-up" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {products.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              style={{
                padding: '0.55rem 1.25rem',
                border: selected === item.id ? '1.5px solid #C9A84C' : '1.5px solid rgba(245,240,232,0.2)',
                background: selected === item.id ? 'rgba(201,168,76,0.12)' : 'transparent',
                color: selected === item.id ? '#C9A84C' : 'rgba(245,240,232,0.65)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Product Detail */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          {/* Product image */}
          <div className="fade-in-up" style={{
            aspectRatio: '4/3',
            background: 'linear-gradient(135deg, #2D4A3E, #3D6B59)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.15)',
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
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
              {product.tab}
            </div>
          </div>

          {/* Product info */}
          <div className="fade-in-up stagger-2">
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#F5F0E8', fontSize: '1.75rem', marginTop: 0, marginBottom: '1rem' }}>
              {product.title}
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.75)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              {product.description}
            </p>
            {/* Product facts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {product.facts.map((item) => (
                <div key={item.label} style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '3px',
                  padding: '0.85rem',
                }}>
                  <div style={{ color: '#C9A84C', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ color: '#F5F0E8', fontSize: '0.85rem', fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <a
              href="https://www.galloway-schweiz.ch/assets/Files/fleisch_bestellung.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                textDecoration: 'none',
                padding: '0.6rem 1.2rem',
                background: 'linear-gradient(135deg, #C9A84C, #B8860B)',
                color: '#1a2e26',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '2px',
              }}
            >
              Bestellen
            </a>
          </div>
        </div>

        {/* Shop highlights */}
        <div>
          <h3 className="fade-in-up" style={{
            fontFamily: "'Playfair Display', serif",
            color: '#F5F0E8',
            fontSize: '1.6rem',
            marginBottom: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            Im Huebelstuebli
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {shopHighlights.map((item, i) => (
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
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.title}</div>
                <div style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.82rem', lineHeight: 1.65 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
