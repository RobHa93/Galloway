export const breeders = [
  { id: 1, name: 'Hof Waldbach', canton: 'BE', cantonFull: 'Bern', x: 48, y: 52, contact: 'info@hofwaldbach.ch', phone: '+41 31 123 45 67', animals: 'Belted Galloway, Black Galloway' },
  { id: 2, name: 'Alp Sonnenhügel', canton: 'LU', cantonFull: 'Luzern', x: 52, y: 45, contact: 'alp@sonnenhügel.ch', phone: '+41 41 234 56 78', animals: 'Riggit Galloway' },
  { id: 3, name: 'Bergbauernhof Tanner', canton: 'SG', cantonFull: 'St. Gallen', x: 75, y: 38, contact: 'tanner@bergbauernhof.ch', phone: '+41 71 345 67 89', animals: 'Black Galloway' },
  { id: 4, name: 'Biohof Lehmann', canton: 'ZH', cantonFull: 'Zürich', x: 65, y: 32, contact: 'info@biohof-lehmann.ch', phone: '+41 44 456 78 90', animals: 'Belted Galloway' },
  { id: 5, name: 'Weidehof Freiburg', canton: 'FR', cantonFull: 'Freiburg', x: 35, y: 55, contact: 'weidehof@fr.ch', phone: '+41 26 567 89 01', animals: 'Black Galloway, Belted Galloway' },
  { id: 6, name: 'Alpentier Graubünden', canton: 'GR', cantonFull: 'Graubünden', x: 78, y: 58, contact: 'info@alpentier-gr.ch', phone: '+41 81 678 90 12', animals: 'Blue Galloway' },
  { id: 7, name: 'Naturbauernhof Wallis', canton: 'VS', cantonFull: 'Wallis', x: 42, y: 68, contact: 'natur@wallis-farm.ch', phone: '+41 27 789 01 23', animals: 'Black Galloway' },
  { id: 8, name: 'Herdenbuch Aargau', canton: 'AG', cantonFull: 'Aargau', x: 57, y: 36, contact: 'info@herdenbuch-ag.ch', phone: '+41 62 890 12 34', animals: 'Belted Galloway' },
]

export const marketplaceListings = [
  { id: 1, type: 'Stier', breed: 'Black Galloway', age: '18 Monate', canton: 'BE', herdno: 'CH-1234-5678', price: 'Auf Anfrage', premium: true },
  { id: 2, type: 'Kuh mit Kalb', breed: 'Belted Galloway', age: '4 Jahre', canton: 'ZH', herdno: 'CH-2345-6789', price: 'Auf Anfrage', premium: true },
  { id: 3, type: 'Färsen (3)', breed: 'Black Galloway', age: '12 Monate', canton: 'LU', herdno: 'CH-3456-7890', price: 'Auf Anfrage', premium: false },
  { id: 4, type: 'Mutterkuh', breed: 'Riggit Galloway', age: '5 Jahre', canton: 'SG', herdno: 'CH-4567-8901', price: 'Auf Anfrage', premium: false },
  { id: 5, type: 'Zuchtbulle', breed: 'Blue Galloway', age: '2 Jahre', canton: 'GR', herdno: 'CH-5678-9012', price: 'Auf Anfrage', premium: true },
  { id: 6, type: 'Absetzer (5)', breed: 'Black Galloway', age: '6 Monate', canton: 'VS', herdno: 'CH-6789-0123', price: 'Auf Anfrage', premium: false },
]

export const newsItems = [
  {
    id: 1,
    date: '2026-03-01',
    dateStr: '1. März 2026',
    category: 'Veranstaltung',
    title: 'Frühjahrsausstellung – Galloway-Tage Bern 2026',
    excerpt: 'Die jährliche Galloway-Schau findet dieses Jahr in Bern statt. Alle Mitglieder sind herzlich eingeladen, ihre Tiere anzumelden.',
    image: null,
  },
  {
    id: 2,
    date: '2026-02-15',
    dateStr: '15. Februar 2026',
    category: 'Züchtung',
    title: 'Neue Herdebuch-Richtlinien 2026 verabschiedet',
    excerpt: 'Der Vorstand hat in seiner Sitzung vom 10. Februar die aktualisierten Herdebuch-Richtlinien einstimmig verabschiedet.',
    image: null,
  },
  {
    id: 3,
    date: '2026-01-20',
    dateStr: '20. Januar 2026',
    category: 'Nachhaltigkeit',
    title: 'Galloway-Rinder im Biodiversitätsförderprogramm des Bundes',
    excerpt: 'Das BAFU hat Galloway-Weidehaltung als förderwürdige Extensivbewirtschaftung anerkannt. Was bedeutet das für Züchter?',
    image: null,
  },
]

export const downloads = [
  { id: 1, title: 'Statuten Galloway Schweiz', subtitle: 'Gültig ab 2024', size: '420 KB', type: 'PDF', icon: '📄' },
  { id: 2, title: 'Herdebuch-Reglement', subtitle: 'Version 3.2 – 2025', size: '1.2 MB', type: 'PDF', icon: '📋' },
  { id: 3, title: 'Rassenstandard Galloway', subtitle: 'Offizieller Standard', size: '860 KB', type: 'PDF', icon: '🐄' },
  { id: 4, title: 'Zuchtprogramm 2024–2028', subtitle: 'Strategische Ziele', size: '2.1 MB', type: 'PDF', icon: '📊' },
  { id: 5, title: 'Anmeldeformular Herdebuch', subtitle: 'Neueintragung / Mutation', size: '180 KB', type: 'PDF', icon: '📝' },
  { id: 6, title: 'Züchter-Handbuch', subtitle: 'Praxis & Empfehlungen', size: '3.4 MB', type: 'PDF', icon: '📚' },
]

export const vorstand = [
  { name: 'Werner Schärer', role: 'Präsident', canton: 'BE', email: 'praesident@galloway-schweiz.ch' },
  { name: 'Brigitte Müller', role: 'Vizepräsidentin', canton: 'ZH', email: 'vize@galloway-schweiz.ch' },
  { name: 'Hans-Peter Leuenberger', role: 'Kassier', canton: 'LU', email: 'kassier@galloway-schweiz.ch' },
  { name: 'Ursula Kammermann', role: 'Herdebuchführerin', canton: 'BE', email: 'herdebuch@galloway-schweiz.ch' },
  { name: 'Markus Frei', role: 'Zuchtkommission', canton: 'SG', email: 'zucht@galloway-schweiz.ch' },
]
