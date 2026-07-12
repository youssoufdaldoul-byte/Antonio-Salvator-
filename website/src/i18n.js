// LA TABLE D'ANTONIO SALVATORE AU RAMPOLDI
// FR primary; EN, IT, RU, DE, ES ready. Every user-facing string lives here.
export const LANGS = ['fr', 'en', 'it', 'ru', 'de', 'es']

// Real guest testimonials — kept in French (as written) and shown in every
// language. Only positive reviews; names reduced to initials / "Client vérifié".
// Edit here to change the testimonials everywhere at once.
const REVIEWS = [
  { name: 'CF A', stars: 5, text: 'Le restaurant est moderne et raffiné. Le service est discret et élégant. Une farandole de plats tout simplement succulents. Cet étoilé est hautement à recommander.' },
  { name: 'Client vérifié', stars: 5, text: "Lieu d'exception, service impeccable, cuisine inventive, rapport qualité-prix raisonnable pour la Principauté. Bravo au Chef et à sa brigade." },
  { name: 'M. L.', stars: 5, text: "Une cuisine italienne d'une finesse rare, sublimée par un cadre feutré et une élégance discrète. Chaque plat raconte une histoire." },
  { name: 'Client vérifié', stars: 5, text: 'Expérience gastronomique mémorable au cœur de Monaco. Le Chef signe une partition italienne précise et généreuse. Un pur moment de grâce.' },
]

export const t = {
  // ==========================================================
  // FRANÇAIS (primary)
  // ==========================================================
  fr: {
    nav: { home: 'Accueil', experience: "L'Expérience", maison: 'La Maison', menu: 'Le Menu', ambiance: 'Ambiance', reserve: 'Réserver', tables: 'Les Tables' , maisons: 'Nos Maisons', boutique: 'La Boutique', events: 'Événements', press: 'Presse' },
    hero: {
      kicker: 'Monaco — Riviera',
      title: 'MAISON LUMIÈRE',
      tagline: "L'art de recevoir.",
      sub: "Une adresse d'exception à Monaco.",
      cta: 'Réserver',
      scroll: 'Faites défiler pour entrer',
      chips: ['Étoilé Michelin', 'Gastronomie italienne', 'Monaco'],
    },
    experience: {
      label: "L'Expérience",
      lines: [
        ['La nuit tombe.', 'La rue brille.', 'Une lumière vous attend.'],
        ['Le feu travaille', 'la matière — ', 'lentement.'],
        ['Chaque assiette,', 'une promesse', 'tenue.'],
      ],
      keywords: ['lumière', 'matière', 'promesse'],
      panel: { title: 'Le passage', body: "Franchir la porte, c'est ralentir. Le temps se pose, la table s'ouvre." },
    },
    maison: {
      label: 'La Maison',
      bigtype: 'LE FEU, LA MATIÈRE',
      intro: "Une cuisine de précision, nourrie par la braise et le produit. Maturé, confit, braisé, affiné — rien d'inutile, rien d'ostentatoire.",
      cards: [
        { num: '01', title: 'CUISINE', text: "Produits d'exception, cuissons justes, saisons respectées." },
        { num: '02', title: 'CAVE', text: 'Sélection rare, flacons patiemment affinés.' },
        { num: '03', title: 'SERVICE', text: "L'art de recevoir, sans cérémonie superflue." },
        { num: '04', title: 'CADRE', text: 'Élégance intemporelle, lumière de bougie.' },
      ],
    },
    menu: {
      label: 'Le Menu',
      title: 'Les Plats Signature',
      sub: 'Six pièces maîtresses, une seule exigence.',
      cta: 'Découvrir',
      dishes: [
        { name: 'Foie gras poêlé', desc: 'Croûte caramélisée, glaçage à la figue, brioche dorée.', price: '68 €' },
        { name: 'Risotto à la truffe noire', desc: 'Truffe du Périgord, voile de parmesan affiné.', price: '84 €' },
        { name: 'Bœuf maturé', desc: 'Maturation longue, jus fumé, échalote confite.', price: '96 €' },
        { name: 'Poisson de ligne', desc: 'Peau croustillante, beurre blanc au safran.', price: '72 €' },
        { name: 'Homard bleu', desc: 'Glacé au corail, fenouil braisé.', price: '110 €' },
        { name: 'Dessert Lumière', desc: 'Sphère de chocolat noir, caramel chaud, feuille d’or.', price: '38 €' },
      ],
    },
    ambiance: {
      label: 'Ambiance',
      words: ['LUMIÈRE', 'BRAISE', 'SILENCE', 'ÉCLAT'],
      tags: ['Bougie — 1800 K', 'Pierre & laiton', 'Brume de nuit', 'Reflets de pluie'],
      line1: 'Une salle qui murmure,', line2: 'une cuisine qui rayonne.',
      note: 'Chaque soir, la même exigence. Jamais la même nuit.',
    },
    reservation: {
      label: 'Réservation', title: "Vivez l'expérience.",
      cta: 'Réserver une table', hoursTitle: 'Horaires', contactTitle: 'Adresse',
      footer: 'Tous droits réservés.',
    },
    form: {
      title: 'Demande de réservation',
      date: 'Date', time: 'Heure', guests: 'Convives', name: 'Nom', phone: 'Téléphone',
      email: 'Email', message: 'Message (optionnel)', messagePlaceholder: 'Allergies, occasion, préférences…',
      submit: 'Envoyer la demande', sending: 'Envoi…',
      success: 'Votre demande a bien été envoyée. La maison vous contactera sous 24 h.',
      error: "L'envoi a échoué. Réessayez ou réservez par téléphone.",
      unconfigured: "Le module d'envoi n'est pas encore connecté. Réservez par téléphone ci-dessous.",
      phoneCta: 'Réserver par téléphone',
      required: 'Champ requis', invalidEmail: 'Email invalide', pastDate: 'Choisissez une date à venir',
      guestsUnit: 'personnes',
    },
    reviews: {
      label: 'Avis', title: 'Ce qu\'ils en disent.', items: REVIEWS,
    },
    legal: {
      link: 'Mentions légales', title: 'Mentions légales',
      body: "La Table d'Antonio Salvatore au Rampoldi — restaurant gastronomique, 3 Avenue des Spélugues, 98000 Monaco. Éditeur : [NOM DE LA SOCIÉTÉ]. Directeur de la publication : [RESPONSABLE]. Contact : [EMAIL] · +377 93 30 70 44. Hébergement : GitHub Pages. Certains visuels sont générés par IA à des fins de présentation.",
      close: 'Fermer',
    },
    menuOverlay: { label: 'Navigation', hint: 'La table vous attend.' },
    compose: {
      title: 'Composez votre plat', base: 'Plat de base', supplements: 'Suppléments',
      total: 'Total', order: 'Réserver ce plat', close: 'Fermer',
      step1: 'Étape 1 — Choisissez votre formule', step2: 'Étape 2 — Ajoutez des suppléments',
      included: 'inclus', yourDish: 'Votre composition',
    },
    chef: {
      label: 'La Maison',
      title: "L'âme de la maison",
      intro: "Derrière chaque assiette, un homme, une brigade, une exigence. Antonio Salvatore signe une cuisine italienne d'auteur, précise et généreuse, au cœur de Monte-Carlo.",
      q1: "La cuisine est une mémoire que l'on sert, encore chaude.",
      q2: "L'étoile n'est pas un trophée. C'est une promesse, renouvelée chaque soir.",
      blocks: [
        { num: '01', title: 'Le Chef', text: "De la Basilicate aux tables de la Principauté : un parcours forgé dans les maisons d'exception, une signature saluée par le Guide Michelin." },
        { num: '02', title: 'La Philosophie', text: 'Le produit d’abord, la saison toujours. Des gestes précis, des cuissons patientes, une élégance sans démonstration.' },
        { num: '03', title: 'La Brigade', text: 'Une équipe soudée, formée aux exigences des grandes maisons, animée par le même feu : recevoir, régaler, émouvoir.' },
      ],
      captions: ['La cuisine, le soir', 'Le geste', 'Le passe'],
    },
    tables: {
      label: 'Les Tables', title: 'Choisissez votre table',
      intro: "Chaque table de la salle a son caractère. Survolez le plan, choisissez votre atmosphère — la maison s'occupe du reste.",
      hint: 'Survolez ou touchez une table',
      capacity: 'couverts', standardLabel: 'Soir ordinaire', gpLabel: 'Grand Prix F1',
      reserveCta: 'Réserver cette table', requestNote: 'Demande envoyée avec votre table en préférence.',
      items: [
        { id: 'alcove', name: "L'Alcôve", desc: 'Un écrin à l’écart, éclairé à la bougie.', ambiance: 'Intime', capacity: 2, standard: 'À la carte', gp: '450 € / pers.' },
        { id: 'rotonde', name: 'La Rotonde', desc: 'Au cœur de la salle, sous le grand lustre.', ambiance: 'Théâtral', capacity: 4, standard: 'À la carte', gp: '550 € / pers.' },
        { id: 'vue', name: 'La Table Vue', desc: 'La baie sur la place, lumières de nuit.', ambiance: 'Panorama', capacity: 4, standard: 'À la carte', gp: '690 € / pers.' },
        { id: 'salon', name: 'Le Salon Privé', desc: 'Un salon fermé, service dédié.', ambiance: 'Confidentiel', capacity: 8, standard: 'Menu Dégustation', gp: 'Sur demande' },
        { id: 'passe', name: 'La Table du Passe', desc: 'Face à la brigade, au plus près du feu.', ambiance: 'Immersif', capacity: 6, standard: 'Menu Dégustation', gp: '590 € / pers.' },
      ],
    },
    maisons: {
      label: 'Nos Maisons', title: 'Deux adresses, une même signature',
      intro: "De la Principauté à Manhattan, la même exigence italienne, deux atmosphères. Choisissez votre soir.",
      hoursLabel: 'Horaires', addressLabel: 'Adresse', reserveCta: 'Réserver',
      houses: [
        { id: 'mc', city: 'Monte-Carlo', name: 'La Maison mère', desc: 'L’écrin historique, face au port. Belle Époque, lumière de bougie, cuisine de feu.', address: '3 Avenue des Spélugues, 98000 Monaco', hours: 'Mardi — Dimanche · dès 19h00', phone: '+377 93 30 70 44' },
        { id: 'ny', city: 'New York', name: 'La Table, Uptown', desc: 'La signature en altitude, au-dessus des lumières de Manhattan. Intime, feutrée, rare.', address: 'Sur réservation privée · Manhattan, NY', hours: 'Du mercredi au samedi · dès 18h30', phone: 'Sur demande' },
      ],
    },
    boutique: {
      label: 'La Boutique', title: 'La maison, à emporter',
      intro: "Quelques objets signés, prolongements de la table. Édités en petites séries, offerts dans un écrin.",
      cta: 'Commander', priceLabel: 'Prix',
      items: [
        { id: 1, name: 'Parfum « Lumière »', desc: 'Ambre, cuir et figue. Eau de parfum, 100 ml.', price: '180 €' },
        { id: 2, name: 'Sauce à la truffe noire', desc: 'Truffe du Périgord, huile d’olive. Édition limitée.', price: '48 €' },
        { id: 3, name: 'Huile d’olive d’exception', desc: 'Première pression à froid, monovariétale.', price: '36 €' },
        { id: 4, name: 'Bougie « Braise »', desc: 'Cire végétale, bois brûlé et ambre. 60 h.', price: '65 €' },
      ],
    },
    events: {
      label: 'Événements', title: "L'année à Monaco",
      intro: "Une saison de rendez-vous d'exception. Pour chacun, une table, un menu, un moment.",
      offerLabel: 'Notre offre',
      items: [
        { key: 'gp', month: 'Mai', name: 'Grand Prix de Monaco', img: 'race', desc: 'La ville retient son souffle. Dîner face à la ferveur, menu en cinq temps.', offer: 'Menu Grand Prix · terrasse privatisée' },
        { key: 'yacht', month: 'Septembre', name: 'Yacht Show', img: 'harbour', desc: "Le port se pare de géants. Une carte iodée, au fil de l'eau.", offer: 'Dîner armateurs · accord champagne' },
        { key: 'fete', month: 'Novembre', name: 'Fête Nationale', img: 'festive', desc: "La Principauté s'illumine. Une soirée de gala, sous les lumières.", offer: "Menu de gala · feux d'artifice" },
        { key: 'nye', month: 'Décembre', name: 'Réveillon', img: 'festive', desc: "Le dernier soir de l'année, célébré comme il se doit.", offer: 'Réveillon 7 services · minuit doré' },
      ],
    },
    press: {
      label: 'Presse', title: 'On en parle',
      intro: "Ce que la critique retient d'Antonio Salvatore et de sa table.",
      readCta: "Lire l'article", logos: ['Riviera Gourmet', 'Le Sel & la Plume', 'Corriere del Gusto', 'Monaco Soir', 'Palais & Papilles', 'La Table Guide'],
      articles: [
        { source: 'Riviera Gourmet', date: '2025', quote: "Une des plus belles tables de la Principauté : précise, généreuse, profondément italienne." },
        { source: 'Le Sel & la Plume', date: '2024', quote: "Antonio Salvatore impose une signature rare, entre mémoire du Sud et rigueur d'étoilé." },
        { source: 'Corriere del Gusto', date: '2024', quote: "Il talento di uno chef che racconta l'Italia con un'eleganza sobria et lumineuse." },
      ],
    },
  },

  // ==========================================================
  // ENGLISH
  // ==========================================================
  en: {
    nav: { home: 'Home', experience: 'The Experience', maison: 'The House', menu: 'The Menu', ambiance: 'Ambiance', reserve: 'Reserve', tables: 'The Tables' , maisons: 'Our Houses', boutique: 'The Boutique', events: 'Events', press: 'Press' },
    hero: {
      kicker: 'Monaco — Riviera', title: 'MAISON LUMIÈRE', tagline: 'The art of hosting.',
      sub: 'An exceptional address in Monaco.', cta: 'Reserve', scroll: 'Scroll to enter',
      chips: ['Michelin-starred', 'Italian gastronomy', 'Monaco'],
    },
    experience: {
      label: 'The Experience',
      lines: [
        ['Night falls.', 'The street glistens.', 'A light awaits you.'],
        ['Fire works', 'the matter — ', 'slowly.'],
        ['Every plate,', 'a promise', 'kept.'],
      ],
      keywords: ['light', 'matter', 'promise'],
      panel: { title: 'The threshold', body: 'To cross the door is to slow down. Time settles, the table opens.' },
    },
    maison: {
      label: 'The House', bigtype: 'FIRE & MATTER',
      intro: 'A cuisine of precision, fed by embers and produce. Aged, confit, braised, refined — nothing needless, nothing loud.',
      cards: [
        { num: '01', title: 'CUISINE', text: 'Exceptional produce, precise cooking, seasons respected.' },
        { num: '02', title: 'CELLAR', text: 'A rare selection, patiently matured bottles.' },
        { num: '03', title: 'SERVICE', text: 'The art of hosting, without needless ceremony.' },
        { num: '04', title: 'SETTING', text: 'Timeless elegance, candlelight.' },
      ],
    },
    menu: {
      label: 'The Menu', title: 'Signature Dishes', sub: 'Six centrepieces, one single standard.', cta: 'Discover',
      dishes: [
        { name: 'Seared foie gras', desc: 'Caramelised crust, fig glaze, golden brioche.', price: '€68' },
        { name: 'Black truffle risotto', desc: 'Périgord truffle, aged parmesan veil.', price: '€84' },
        { name: 'Dry-aged beef', desc: 'Long maturation, smoked jus, shallot confit.', price: '€96' },
        { name: 'Line-caught fish', desc: 'Crisp skin, saffron beurre blanc.', price: '€72' },
        { name: 'Blue lobster', desc: 'Coral glaze, braised fennel.', price: '€110' },
        { name: 'Dessert Lumière', desc: 'Dark chocolate sphere, warm caramel, gold leaf.', price: '€38' },
      ],
    },
    ambiance: {
      label: 'Ambiance', words: ['LIGHT', 'EMBER', 'SILENCE', 'GLOW'],
      tags: ['Candle — 1800 K', 'Stone & brass', 'Night mist', 'Rain reflections'],
      line1: 'A room that whispers,', line2: 'a kitchen that glows.',
      note: 'Every evening, the same standard. Never the same night.',
    },
    reservation: {
      label: 'Reservation', title: 'Live the experience.',
      cta: 'Reserve a table', hoursTitle: 'Hours', contactTitle: 'Address',
      footer: 'All rights reserved.',
    },
    form: {
      title: 'Reservation request',
      date: 'Date', time: 'Time', guests: 'Guests', name: 'Name', phone: 'Phone',
      email: 'Email', message: 'Message (optional)', messagePlaceholder: 'Allergies, occasion, preferences…',
      submit: 'Send request', sending: 'Sending…',
      success: 'Your request has been sent. The restaurant will contact you within 24 hours.',
      error: 'Sending failed. Try again or reserve by phone.',
      unconfigured: 'The sending module is not connected yet. Please reserve by phone below.',
      phoneCta: 'Reserve by phone',
      required: 'Required field', invalidEmail: 'Invalid email', pastDate: 'Choose a future date',
      guestsUnit: 'guests',
    },
    reviews: {
      label: 'Reviews', title: 'What they say.', items: REVIEWS,
    },
    legal: {
      link: 'Legal notice', title: 'Legal notice',
      body: "La Table d'Antonio Salvatore au Rampoldi — fine-dining restaurant, 3 Avenue des Spélugues, 98000 Monaco. Publisher: [COMPANY NAME]. Publication director: [MANAGER]. Contact: [EMAIL] · +377 93 30 70 44. Hosting: GitHub Pages. Some visuals are AI-generated for presentation purposes.",
      close: 'Close',
    },
    menuOverlay: { label: 'Navigation', hint: 'Your table awaits.' },
    compose: {
      title: 'Compose your dish', base: 'Base dish', supplements: 'Supplements',
      total: 'Total', order: 'Reserve this dish', close: 'Close',
      step1: 'Step 1 — Choose your menu', step2: 'Step 2 — Add supplements',
      included: 'included', yourDish: 'Your composition',
    },
    chef: {
      label: 'The House',
      title: 'The soul of the house',
      intro: 'Behind every plate: a man, a brigade, a standard. Antonio Salvatore signs a precise, generous Italian cuisine in the heart of Monte-Carlo.',
      q1: 'Cooking is a memory, served while it is still warm.',
      q2: 'The star is not a trophy. It is a promise, renewed every evening.',
      blocks: [
        { num: '01', title: 'The Chef', text: 'From Basilicata to the tables of the Principality: a journey forged in exceptional houses, a signature recognised by the Michelin Guide.' },
        { num: '02', title: 'The Philosophy', text: 'Produce first, season always. Precise gestures, patient cooking, elegance without display.' },
        { num: '03', title: 'The Brigade', text: 'A close-knit team, trained to the standards of the great houses, driven by the same fire: to host, to delight, to move.' },
      ],
      captions: ['The kitchen at night', 'The gesture', 'The pass'],
    },
    tables: {
      label: 'The Tables', title: 'Choose your table',
      intro: 'Every table in the room has its own character. Hover the plan, choose your atmosphere — the house takes care of the rest.',
      hint: 'Hover or tap a table',
      capacity: 'guests', standardLabel: 'Regular evening', gpLabel: 'F1 Grand Prix',
      reserveCta: 'Reserve this table', requestNote: 'Request sent with your table as preference.',
      items: [
        { id: 'alcove', name: 'The Alcove', desc: 'A secluded nook, lit by candlelight.', ambiance: 'Intimate', capacity: 2, standard: 'À la carte', gp: '€450 / guest' },
        { id: 'rotonde', name: 'The Rotunda', desc: 'At the heart of the room, under the chandelier.', ambiance: 'Theatrical', capacity: 4, standard: 'À la carte', gp: '€550 / guest' },
        { id: 'vue', name: 'The View Table', desc: 'The bay window over the square, night lights.', ambiance: 'Panorama', capacity: 4, standard: 'À la carte', gp: '€690 / guest' },
        { id: 'salon', name: 'The Private Salon', desc: 'A closed salon with dedicated service.', ambiance: 'Confidential', capacity: 8, standard: 'Tasting menu', gp: 'On request' },
        { id: 'passe', name: "The Chef's Pass", desc: 'Facing the brigade, closest to the fire.', ambiance: 'Immersive', capacity: 6, standard: 'Tasting menu', gp: '€590 / guest' },
      ],
    },
    maisons: {
      label: 'Our Houses', title: 'Two addresses, one signature',
      intro: 'From the Principality to Manhattan: the same Italian standard, two atmospheres. Choose your evening.',
      hoursLabel: 'Hours', addressLabel: 'Address', reserveCta: 'Reserve',
      houses: [
        { id: 'mc', city: 'Monte-Carlo', name: 'The Original House', desc: 'The historic setting, facing the harbour. Belle Époque, candlelight, fire-driven cuisine.', address: '3 Avenue des Spélugues, 98000 Monaco', hours: 'Tuesday — Sunday · from 7:00 pm', phone: '+377 93 30 70 44' },
        { id: 'ny', city: 'New York', name: 'The Table, Uptown', desc: 'The signature at altitude, above the lights of Manhattan. Intimate, hushed, rare.', address: 'By private reservation · Manhattan, NY', hours: 'Wednesday — Saturday · from 6:30 pm', phone: 'On request' },
      ],
    },
    boutique: {
      label: 'The Boutique', title: 'The house, to take home',
      intro: 'A few signed objects, extensions of the table. Produced in small series, presented in a case.',
      cta: 'Order', priceLabel: 'Price',
      items: [
        { id: 1, name: 'Parfum “Lumière”', desc: 'Amber, leather and fig. Eau de parfum, 100 ml.', price: '€180' },
        { id: 2, name: 'Black truffle sauce', desc: 'Périgord truffle, olive oil. Limited edition.', price: '€48' },
        { id: 3, name: 'Exceptional olive oil', desc: 'First cold pressing, single variety.', price: '€36' },
        { id: 4, name: 'Candle “Braise”', desc: 'Plant wax, burnt wood and amber. 60 h.', price: '€65' },
      ],
    },
    events: {
      label: 'Events', title: 'The year in Monaco',
      intro: 'A season of exceptional occasions. For each, a table, a menu, a moment.',
      offerLabel: 'Our offer',
      items: [
        { key: 'gp', month: 'May', name: 'Monaco Grand Prix', img: 'race', desc: 'The city holds its breath. Dine facing the fervour, a five-course menu.', offer: 'Grand Prix menu · private terrace' },
        { key: 'yacht', month: 'September', name: 'Yacht Show', img: 'harbour', desc: 'The port dons its giants. A menu from the sea, along the water.', offer: "Owners' dinner · champagne pairing" },
        { key: 'fete', month: 'November', name: 'National Day', img: 'festive', desc: 'The Principality lights up. A gala evening, under the lights.', offer: 'Gala menu · fireworks' },
        { key: 'nye', month: 'December', name: "New Year's Eve", img: 'festive', desc: 'The last night of the year, celebrated as it should be.', offer: '7-course NYE · golden midnight' },
      ],
    },
    press: {
      label: 'Press', title: 'In the press',
      intro: 'What the critics remember of Antonio Salvatore and his table.',
      readCta: 'Read the article', logos: ['Riviera Gourmet', 'Le Sel & la Plume', 'Corriere del Gusto', 'Monaco Soir', 'Palais & Papilles', 'La Table Guide'],
      articles: [
        { source: 'Riviera Gourmet', date: '2025', quote: 'One of the finest tables in the Principality: precise, generous, deeply Italian.' },
        { source: 'Le Sel & la Plume', date: '2024', quote: 'Antonio Salvatore sets a rare signature, between southern memory and starred rigour.' },
        { source: 'Corriere del Gusto', date: '2024', quote: 'The talent of a chef who tells Italy with a sober, luminous elegance.' },
      ],
    },
  },

  // ==========================================================
  // ITALIANO
  // ==========================================================
  it: {
    nav: { home: 'Home', experience: "L'Esperienza", maison: 'La Maison', menu: 'Il Menu', ambiance: 'Atmosfera', reserve: 'Prenotare', tables: 'I Tavoli' , maisons: 'Le Nostre Case', boutique: 'La Boutique', events: 'Eventi', press: 'Stampa' },
    hero: {
      kicker: 'Monaco — Riviera', title: 'MAISON LUMIÈRE', tagline: "L'arte dell'accoglienza.",
      sub: 'Un indirizzo d’eccezione a Monaco.', cta: 'Prenotare', scroll: 'Scorri per entrare',
      chips: ['Stella Michelin', 'Alta cucina italiana', 'Monaco'],
    },
    experience: {
      label: "L'Esperienza",
      lines: [
        ['Scende la notte.', 'La strada brilla.', 'Una luce vi attende.'],
        ['Il fuoco lavora', 'la materia — ', 'lentamente.'],
        ['Ogni piatto,', 'una promessa', 'mantenuta.'],
      ],
      keywords: ['luce', 'materia', 'promessa'],
      panel: { title: 'La soglia', body: 'Varcare la porta è rallentare. Il tempo si posa, la tavola si apre.' },
    },
    maison: {
      label: 'La Maison', bigtype: 'IL FUOCO, LA MATERIA',
      intro: 'Una cucina di precisione, nutrita dalla brace e dal prodotto. Frollato, confit, brasato, affinato — niente di superfluo, niente di ostentato.',
      cards: [
        { num: '01', title: 'CUCINA', text: 'Prodotti d’eccezione, cotture precise, stagioni rispettate.' },
        { num: '02', title: 'CANTINA', text: 'Selezione rara, bottiglie pazientemente affinate.' },
        { num: '03', title: 'SERVIZIO', text: "L'arte dell'accoglienza, senza cerimonie superflue." },
        { num: '04', title: 'CORNICE', text: 'Eleganza senza tempo, luce di candela.' },
      ],
    },
    menu: {
      label: 'Il Menu', title: 'I Piatti Signature', sub: 'Sei capolavori, una sola esigenza.', cta: 'Scoprire',
      dishes: [
        { name: 'Foie gras scottato', desc: 'Crosta caramellata, glassa di fico, brioche dorata.', price: '68 €' },
        { name: 'Risotto al tartufo nero', desc: 'Tartufo del Périgord, velo di parmigiano affinato.', price: '84 €' },
        { name: 'Manzo frollato', desc: 'Lunga frollatura, jus affumicato, scalogno confit.', price: '96 €' },
        { name: 'Pesce di lenza', desc: 'Pelle croccante, beurre blanc allo zafferano.', price: '72 €' },
        { name: 'Astice blu', desc: 'Glassato al corallo, finocchio brasato.', price: '110 €' },
        { name: 'Dessert Lumière', desc: 'Sfera di cioccolato fondente, caramello caldo, foglia d’oro.', price: '38 €' },
      ],
    },
    ambiance: {
      label: 'Atmosfera', words: ['LUCE', 'BRACE', 'SILENZIO', 'BAGLIORE'],
      tags: ['Candela — 1800 K', 'Pietra e ottone', 'Foschia notturna', 'Riflessi di pioggia'],
      line1: 'Una sala che sussurra,', line2: 'una cucina che risplende.',
      note: 'Ogni sera, la stessa esigenza. Mai la stessa notte.',
    },
    reservation: {
      label: 'Prenotazione', title: "Vivete l'esperienza.",
      cta: 'Prenotare un tavolo', hoursTitle: 'Orari', contactTitle: 'Indirizzo',
      footer: 'Tutti i diritti riservati.',
    },
    form: {
      title: 'Richiesta di prenotazione',
      date: 'Data', time: 'Ora', guests: 'Ospiti', name: 'Nome', phone: 'Telefono',
      email: 'Email', message: 'Messaggio (facoltativo)', messagePlaceholder: 'Allergie, occasione, preferenze…',
      submit: 'Invia la richiesta', sending: 'Invio…',
      success: 'La sua richiesta è stata inviata. Il ristorante la contatterà entro 24 ore.',
      error: 'Invio non riuscito. Riprovi o prenoti per telefono.',
      unconfigured: 'Il modulo di invio non è ancora collegato. Prenoti per telefono qui sotto.',
      phoneCta: 'Prenotare per telefono',
      required: 'Campo obbligatorio', invalidEmail: 'Email non valida', pastDate: 'Scegliere una data futura',
      guestsUnit: 'persone',
    },
    reviews: {
      label: 'Recensioni', title: 'Cosa ne dicono.', items: REVIEWS,
    },
    legal: {
      link: 'Note legali', title: 'Note legali',
      body: "La Table d'Antonio Salvatore au Rampoldi — ristorante gastronomico, 3 Avenue des Spélugues, 98000 Monaco. Editore: [NOME SOCIETÀ]. Direttore della pubblicazione: [RESPONSABILE]. Contatto: [EMAIL] · +377 93 30 70 44. Hosting: GitHub Pages. Alcune immagini sono generate con IA a scopo di presentazione.",
      close: 'Chiudere',
    },
    menuOverlay: { label: 'Navigazione', hint: 'La tavola vi attende.' },
    compose: {
      title: 'Componi il tuo piatto', base: 'Piatto base', supplements: 'Supplementi',
      total: 'Totale', order: 'Prenota questo piatto', close: 'Chiudere',
      step1: 'Passo 1 — Scegli il menu', step2: 'Passo 2 — Aggiungi supplementi',
      included: 'incluso', yourDish: 'La tua composizione',
    },
    chef: {
      label: 'La Maison',
      title: "L'anima della casa",
      intro: 'Dietro ogni piatto: un uomo, una brigata, un’esigenza. Antonio Salvatore firma una cucina italiana d’autore, precisa e generosa, nel cuore di Monte-Carlo.',
      q1: 'La cucina è una memoria che si serve ancora calda.',
      q2: 'La stella non è un trofeo. È una promessa, rinnovata ogni sera.',
      blocks: [
        { num: '01', title: 'Lo Chef', text: 'Dalla Basilicata alle tavole del Principato: un percorso forgiato nelle grandi case, una firma riconosciuta dalla Guida Michelin.' },
        { num: '02', title: 'La Filosofia', text: 'Prima il prodotto, sempre la stagione. Gesti precisi, cotture pazienti, eleganza senza ostentazione.' },
        { num: '03', title: 'La Brigata', text: 'Una squadra affiatata, formata alle esigenze delle grandi maison, animata dallo stesso fuoco: accogliere, deliziare, emozionare.' },
      ],
      captions: ['La cucina, la sera', 'Il gesto', 'Il pass'],
    },
    tables: {
      label: 'I Tavoli', title: 'Scegliete il vostro tavolo',
      intro: 'Ogni tavolo della sala ha il suo carattere. Sfiorate la pianta, scegliete la vostra atmosfera — al resto pensa la maison.',
      hint: 'Sfiorate o toccate un tavolo',
      capacity: 'coperti', standardLabel: 'Serata ordinaria', gpLabel: 'Gran Premio F1',
      reserveCta: 'Prenotare questo tavolo', requestNote: 'Richiesta inviata con il tavolo come preferenza.',
      items: [
        { id: 'alcove', name: "L'Alcova", desc: 'Uno scrigno appartato, a lume di candela.', ambiance: 'Intimo', capacity: 2, standard: 'Alla carta', gp: '450 € / pers.' },
        { id: 'rotonde', name: 'La Rotonda', desc: 'Nel cuore della sala, sotto il lampadario.', ambiance: 'Teatrale', capacity: 4, standard: 'Alla carta', gp: '550 € / pers.' },
        { id: 'vue', name: 'Il Tavolo Vista', desc: 'La vetrata sulla piazza, luci notturne.', ambiance: 'Panorama', capacity: 4, standard: 'Alla carta', gp: '690 € / pers.' },
        { id: 'salon', name: 'Il Salotto Privato', desc: 'Un salotto riservato, servizio dedicato.', ambiance: 'Riservato', capacity: 8, standard: 'Menu degustazione', gp: 'Su richiesta' },
        { id: 'passe', name: 'Il Tavolo del Pass', desc: 'Di fronte alla brigata, vicino al fuoco.', ambiance: 'Immersivo', capacity: 6, standard: 'Menu degustazione', gp: '590 € / pers.' },
      ],
    },
    maisons: {
      label: 'Le Nostre Case', title: 'Due indirizzi, una sola firma',
      intro: 'Dal Principato a Manhattan: la stessa esigenza italiana, due atmosfere. Scegliete la vostra sera.',
      hoursLabel: 'Orari', addressLabel: 'Indirizzo', reserveCta: 'Prenotare',
      houses: [
        { id: 'mc', city: 'Monte-Carlo', name: 'La Casa madre', desc: 'Lo scrigno storico, di fronte al porto. Belle Époque, luce di candela, cucina di brace.', address: '3 Avenue des Spélugues, 98000 Monaco', hours: 'Martedì — Domenica · dalle 19:00', phone: '+377 93 30 70 44' },
        { id: 'ny', city: 'New York', name: 'La Table, Uptown', desc: 'La firma in quota, sopra le luci di Manhattan. Intima, ovattata, rara.', address: 'Su prenotazione privata · Manhattan, NY', hours: 'Mercoledì — Sabato · dalle 18:30', phone: 'Su richiesta' },
      ],
    },
    boutique: {
      label: 'La Boutique', title: 'La maison, da portare via',
      intro: 'Pochi oggetti firmati, estensioni della tavola. Prodotti in piccole serie, offerti in uno scrigno.',
      cta: 'Ordinare', priceLabel: 'Prezzo',
      items: [
        { id: 1, name: 'Profumo « Lumière »', desc: 'Ambra, cuoio e fico. Eau de parfum, 100 ml.', price: '180 €' },
        { id: 2, name: 'Salsa al tartufo nero', desc: 'Tartufo del Périgord, olio d’oliva. Edizione limitata.', price: '48 €' },
        { id: 3, name: 'Olio d’oliva d’eccezione', desc: 'Prima spremitura a freddo, monovarietale.', price: '36 €' },
        { id: 4, name: 'Candela « Braise »', desc: 'Cera vegetale, legno bruciato e ambra. 60 h.', price: '65 €' },
      ],
    },
    events: {
      label: 'Eventi', title: "L'anno a Monaco",
      intro: "Una stagione di appuntamenti d'eccezione. Per ciascuno, un tavolo, un menu, un momento.",
      offerLabel: 'La nostra offerta',
      items: [
        { key: 'gp', month: 'Maggio', name: 'Gran Premio di Monaco', img: 'race', desc: 'La città trattiene il respiro. Cena di fronte al fervore, menu in cinque tempi.', offer: 'Menu Gran Premio · terrazza privata' },
        { key: 'yacht', month: 'Settembre', name: 'Yacht Show', img: 'harbour', desc: "Il porto si veste di giganti. Una carta di mare, lungo l'acqua.", offer: 'Cena armatori · abbinamento champagne' },
        { key: 'fete', month: 'Novembre', name: 'Festa Nazionale', img: 'festive', desc: 'Il Principato si illumina. Una serata di gala, sotto le luci.', offer: "Menu di gala · fuochi d'artificio" },
        { key: 'nye', month: 'Dicembre', name: 'Capodanno', img: 'festive', desc: "L'ultima sera dell'anno, celebrata come si deve.", offer: 'Cenone 7 portate · mezzanotte dorata' },
      ],
    },
    press: {
      label: 'Stampa', title: 'Se ne parla',
      intro: "Ciò che la critica ricorda di Antonio Salvatore e della sua tavola.",
      readCta: "Leggi l'articolo", logos: ['Riviera Gourmet', 'Le Sel & la Plume', 'Corriere del Gusto', 'Monaco Soir', 'Palais & Papilles', 'La Table Guide'],
      articles: [
        { source: 'Riviera Gourmet', date: '2025', quote: 'Una delle più belle tavole del Principato: precisa, generosa, profondamente italiana.' },
        { source: 'Le Sel & la Plume', date: '2024', quote: 'Antonio Salvatore impone una firma rara, tra memoria del Sud e rigore da stella.' },
        { source: 'Corriere del Gusto', date: '2024', quote: "Il talento di uno chef che racconta l'Italia con un'eleganza sobria e luminosa." },
      ],
    },
  },

  // ==========================================================
  // РУССКИЙ
  // ==========================================================
  ru: {
    nav: { home: 'Главная', experience: 'Опыт', maison: 'Дом', menu: 'Меню', ambiance: 'Атмосфера', reserve: 'Бронь', tables: 'Столы' , maisons: 'Наши дома', boutique: 'Бутик', events: 'События', press: 'Пресса' },
    hero: {
      kicker: 'Монако — Ривьера', title: 'MAISON LUMIÈRE', tagline: 'Искусство гостеприимства.',
      sub: 'Исключительный адрес в Монако.', cta: 'Забронировать', scroll: 'Листайте, чтобы войти',
      chips: ['Звезда Мишлен', 'Итальянская гастрономия', 'Монако'],
    },
    experience: {
      label: 'Опыт',
      lines: [
        ['Опускается ночь.', 'Улица блестит.', 'Вас ждёт свет.'],
        ['Огонь работает', 'с материей — ', 'медленно.'],
        ['Каждая тарелка —', 'обещание,', 'которое сдержано.'],
      ],
      keywords: ['свет', 'материей', 'обещание'],
      panel: { title: 'Порог', body: 'Переступить порог — значит замедлиться. Время оседает, стол открывается.' },
    },
    maison: {
      label: 'Дом', bigtype: 'ОГОНЬ И МАТЕРИЯ',
      intro: 'Кухня точности, вскормленная углями и продуктом. Выдержанное, конфи, томлёное, утончённое — ничего лишнего, ничего кричащего.',
      cards: [
        { num: '01', title: 'КУХНЯ', text: 'Исключительные продукты, точные техники, уважение к сезону.' },
        { num: '02', title: 'ПОГРЕБ', text: 'Редкая коллекция, терпеливо выдержанные бутылки.' },
        { num: '03', title: 'СЕРВИС', text: 'Искусство приёма — без лишних церемоний.' },
        { num: '04', title: 'ИНТЕРЬЕР', text: 'Вневременная элегантность, свет свечей.' },
      ],
    },
    menu: {
      label: 'Меню', title: 'Фирменные блюда', sub: 'Шесть шедевров, один стандарт.', cta: 'Открыть',
      dishes: [
        { name: 'Фуа-гра', desc: 'Карамельная корочка, инжирная глазурь, золотая бриошь.', price: '68 €' },
        { name: 'Ризотто с чёрным трюфелем', desc: 'Трюфель Перигора, вуаль выдержанного пармезана.', price: '84 €' },
        { name: 'Выдержанная говядина', desc: 'Долгая выдержка, копчёный жю, конфи из лука-шалота.', price: '96 €' },
        { name: 'Рыба на крючке', desc: 'Хрустящая кожа, бёр-блан с шафраном.', price: '72 €' },
        { name: 'Голубой омар', desc: 'Глазурь из кораллов, томлёный фенхель.', price: '110 €' },
        { name: 'Десерт «Люмьер»', desc: 'Сфера тёмного шоколада, тёплая карамель, сусальное золото.', price: '38 €' },
      ],
    },
    ambiance: {
      label: 'Атмосфера', words: ['СВЕТ', 'УГЛИ', 'ТИШИНА', 'СИЯНИЕ'],
      tags: ['Свеча — 1800 K', 'Камень и латунь', 'Ночная дымка', 'Отражения дождя'],
      line1: 'Зал, который шепчет,', line2: 'кухня, которая сияет.',
      note: 'Каждый вечер — тот же стандарт. И никогда — та же ночь.',
    },
    reservation: {
      label: 'Бронирование', title: 'Проживите этот опыт.',
      cta: 'Забронировать стол', hoursTitle: 'Часы работы', contactTitle: 'Адрес',
      footer: 'Все права защищены.',
    },
    form: {
      title: 'Запрос на бронирование',
      date: 'Дата', time: 'Время', guests: 'Гости', name: 'Имя', phone: 'Телефон',
      email: 'Email', message: 'Сообщение (по желанию)', messagePlaceholder: 'Аллергии, повод, пожелания…',
      submit: 'Отправить запрос', sending: 'Отправка…',
      success: 'Ваш запрос отправлен. Ресторан свяжется с вами в течение 24 часов.',
      error: 'Не удалось отправить. Повторите попытку или забронируйте по телефону.',
      unconfigured: 'Модуль отправки ещё не подключён. Забронируйте по телефону ниже.',
      phoneCta: 'Бронь по телефону',
      required: 'Обязательное поле', invalidEmail: 'Неверный email', pastDate: 'Выберите будущую дату',
      guestsUnit: 'гостей',
    },
    reviews: {
      label: 'Отзывы', title: 'Что о нас говорят.', items: REVIEWS,
    },
    legal: {
      link: 'Правовая информация', title: 'Правовая информация',
      body: "La Table d'Antonio Salvatore au Rampoldi — гастрономический ресторан, 3 Avenue des Spélugues, 98000 Monaco. Издатель: [НАЗВАНИЕ КОМПАНИИ]. Ответственный за публикацию: [ОТВЕТСТВЕННЫЙ]. Контакт: [EMAIL] · +377 93 30 70 44. Хостинг: GitHub Pages. Часть изображений создана ИИ в презентационных целях.",
      close: 'Закрыть',
    },
    menuOverlay: { label: 'Навигация', hint: 'Ваш стол ждёт.' },
    compose: {
      title: 'Составьте блюдо', base: 'Основа', supplements: 'Дополнения',
      total: 'Итого', order: 'Забронировать это блюдо', close: 'Закрыть',
      step1: 'Шаг 1 — Выберите меню', step2: 'Шаг 2 — Добавьте дополнения',
      included: 'включено', yourDish: 'Ваша композиция',
    },
    chef: {
      label: 'Дом',
      title: 'Душа этого дома',
      intro: 'За каждой тарелкой — человек, бригада, стандарт. Антонио Сальваторе создаёт авторскую итальянскую кухню, точную и щедрую, в сердце Монте-Карло.',
      q1: 'Кухня — это память, которую подают ещё тёплой.',
      q2: 'Звезда — не трофей. Это обещание, которое даётся заново каждый вечер.',
      blocks: [
        { num: '01', title: 'Шеф', text: 'От Базиликаты до столов Княжества: путь, закалённый в исключительных домах, почерк, отмеченный гидом Michelin.' },
        { num: '02', title: 'Философия', text: 'Сначала продукт, всегда сезон. Точные жесты, терпеливое приготовление, элегантность без показности.' },
        { num: '03', title: 'Бригада', text: 'Сплочённая команда, воспитанная стандартами великих домов и движимая одним огнём: принимать, радовать, волновать.' },
      ],
      captions: ['Кухня вечером', 'Жест', 'Пасс'],
    },
    tables: {
      label: 'Столы', title: 'Выберите свой стол',
      intro: 'У каждого стола в зале свой характер. Наведите курсор на план, выберите атмосферу — об остальном позаботится дом.',
      hint: 'Наведите или коснитесь стола',
      capacity: 'гостей', standardLabel: 'Обычный вечер', gpLabel: 'Гран-при F1',
      reserveCta: 'Забронировать этот стол', requestNote: 'Запрос отправлен с указанием выбранного стола.',
      items: [
        { id: 'alcove', name: 'Альков', desc: 'Уединённый уголок при свечах.', ambiance: 'Интимно', capacity: 2, standard: 'À la carte', gp: '450 € / гость' },
        { id: 'rotonde', name: 'Ротонда', desc: 'В сердце зала, под большой люстрой.', ambiance: 'Театрально', capacity: 4, standard: 'À la carte', gp: '550 € / гость' },
        { id: 'vue', name: 'Стол у окна', desc: 'Витраж на площадь, ночные огни.', ambiance: 'Панорама', capacity: 4, standard: 'À la carte', gp: '690 € / гость' },
        { id: 'salon', name: 'Приватный салон', desc: 'Закрытый салон, персональный сервис.', ambiance: 'Конфиденциально', capacity: 8, standard: 'Дегустационное меню', gp: 'По запросу' },
        { id: 'passe', name: 'Стол у пасса', desc: 'Лицом к бригаде, ближе всех к огню.', ambiance: 'Погружение', capacity: 6, standard: 'Дегустационное меню', gp: '590 € / гость' },
      ],
    },
    maisons: {
      label: 'Наши дома', title: 'Два адреса, одна подпись',
      intro: 'От Княжества до Манхэттена — единый итальянский стандарт, две атмосферы. Выберите свой вечер.',
      hoursLabel: 'Часы', addressLabel: 'Адрес', reserveCta: 'Забронировать',
      houses: [
        { id: 'mc', city: 'Монте-Карло', name: 'Главный дом', desc: 'Исторический ларец напротив порта. Belle Époque, свет свечей, кухня огня.', address: '3 Avenue des Spélugues, 98000 Monaco', hours: 'Вторник — воскресенье · с 19:00', phone: '+377 93 30 70 44' },
        { id: 'ny', city: 'Нью-Йорк', name: 'La Table, Uptown', desc: 'Фирменный стиль на высоте, над огнями Манхэттена. Камерно, тихо, редко.', address: 'По приватному бронированию · Манхэттен, NY', hours: 'Среда — суббота · с 18:30', phone: 'По запросу' },
      ],
    },
    boutique: {
      label: 'Бутик', title: 'Дом — с собой',
      intro: 'Несколько именных предметов, продолжение стола. Малые серии, в подарочном ларце.',
      cta: 'Заказать', priceLabel: 'Цена',
      items: [
        { id: 1, name: 'Парфюм « Lumière »', desc: 'Амбра, кожа и инжир. Eau de parfum, 100 мл.', price: '180 €' },
        { id: 2, name: 'Соус из чёрного трюфеля', desc: 'Трюфель Перигора, оливковое масло. Лимит. серия.', price: '48 €' },
        { id: 3, name: 'Исключительное оливковое масло', desc: 'Первый холодный отжим, моносорт.', price: '36 €' },
        { id: 4, name: 'Свеча « Braise »', desc: 'Растительный воск, жжёное дерево и амбра. 60 ч.', price: '65 €' },
      ],
    },
    events: {
      label: 'События', title: 'Год в Монако',
      intro: 'Сезон исключительных событий. К каждому — стол, меню, момент.',
      offerLabel: 'Наше предложение',
      items: [
        { key: 'gp', month: 'Май', name: 'Гран-при Монако', img: 'race', desc: 'Город затаил дыхание. Ужин напротив накала, меню из пяти подач.', offer: 'Меню Гран-при · приватная терраса' },
        { key: 'yacht', month: 'Сентябрь', name: 'Yacht Show', img: 'harbour', desc: 'Порт наполняется гигантами. Морская карта, у самой воды.', offer: 'Ужин судовладельцев · шампанское' },
        { key: 'fete', month: 'Ноябрь', name: 'Национальный праздник', img: 'festive', desc: 'Княжество сияет. Гала-вечер под огнями.', offer: 'Гала-меню · фейерверк' },
        { key: 'nye', month: 'Декабрь', name: 'Новогодняя ночь', img: 'festive', desc: 'Последний вечер года, отмеченный как подобает.', offer: 'Новый год · 7 подач · золотая полночь' },
      ],
    },
    press: {
      label: 'Пресса', title: 'О нас пишут',
      intro: 'Что критика отмечает в Антонио Сальваторе и его кухне.',
      readCta: 'Читать статью', logos: ['Riviera Gourmet', 'Le Sel & la Plume', 'Corriere del Gusto', 'Monaco Soir', 'Palais & Papilles', 'La Table Guide'],
      articles: [
        { source: 'Riviera Gourmet', date: '2025', quote: 'Один из лучших столов Княжества: точный, щедрый, глубоко итальянский.' },
        { source: 'Le Sel & la Plume', date: '2024', quote: 'Антонио Сальваторе задаёт редкий почерк — память Юга и строгость звезды.' },
        { source: 'Corriere del Gusto', date: '2024', quote: 'Талант шефа, рассказывающего Италию со сдержанной, светлой элегантностью.' },
      ],
    },
  },

  // ==========================================================
  // DEUTSCH
  // ==========================================================
  de: {
    nav: { home: 'Start', experience: 'Das Erlebnis', maison: 'Das Haus', menu: 'Die Karte', ambiance: 'Ambiente', reserve: 'Reservieren', tables: 'Die Tische' , maisons: 'Unsere Häuser', boutique: 'Die Boutique', events: 'Events', press: 'Presse' },
    hero: {
      kicker: 'Monaco — Riviera', title: 'MAISON LUMIÈRE', tagline: 'Die Kunst des Empfangens.',
      sub: 'Eine außergewöhnliche Adresse in Monaco.', cta: 'Reservieren', scroll: 'Scrollen Sie, um einzutreten',
      chips: ['Michelin-Stern', 'Italienische Gastronomie', 'Monaco'],
    },
    experience: {
      label: 'Das Erlebnis',
      lines: [
        ['Die Nacht fällt.', 'Die Straße glänzt.', 'Ein Licht erwartet Sie.'],
        ['Das Feuer formt', 'die Materie — ', 'langsam.'],
        ['Jeder Teller', 'ein Versprechen,', 'das gehalten wird.'],
      ],
      keywords: ['Licht', 'Materie', 'Versprechen'],
      panel: { title: 'Die Schwelle', body: 'Durch die Tür zu treten heißt, langsamer zu werden. Die Zeit setzt sich, der Tisch öffnet sich.' },
    },
    maison: {
      label: 'Das Haus', bigtype: 'FEUER & MATERIE',
      intro: 'Eine Küche der Präzision, genährt von Glut und Produkt. Gereift, confiert, geschmort, verfeinert — nichts Überflüssiges, nichts Lautes.',
      cards: [
        { num: '01', title: 'KÜCHE', text: 'Außergewöhnliche Produkte, präzise Garung, Respekt vor den Jahreszeiten.' },
        { num: '02', title: 'KELLER', text: 'Seltene Auswahl, geduldig gereifte Flaschen.' },
        { num: '03', title: 'SERVICE', text: 'Die Kunst des Empfangens, ohne überflüssige Zeremonie.' },
        { num: '04', title: 'RAHMEN', text: 'Zeitlose Eleganz, Kerzenlicht.' },
      ],
    },
    menu: {
      label: 'Die Karte', title: 'Signature-Gerichte', sub: 'Sechs Meisterstücke, ein einziger Anspruch.', cta: 'Entdecken',
      dishes: [
        { name: 'Gebratene Foie gras', desc: 'Karamellkruste, Feigenglasur, goldene Brioche.', price: '68 €' },
        { name: 'Risotto mit schwarzem Trüffel', desc: 'Périgord-Trüffel, Schleier aus gereiftem Parmesan.', price: '84 €' },
        { name: 'Gereiftes Rind', desc: 'Lange Reifung, geräucherte Jus, Schalotten-Confit.', price: '96 €' },
        { name: 'Leinenfisch', desc: 'Knusprige Haut, Safran-Beurre-blanc.', price: '72 €' },
        { name: 'Blauer Hummer', desc: 'Korallenglasur, geschmorter Fenchel.', price: '110 €' },
        { name: 'Dessert Lumière', desc: 'Zartbitterschokoladensphäre, warmes Karamell, Blattgold.', price: '38 €' },
      ],
    },
    ambiance: {
      label: 'Ambiente', words: ['LICHT', 'GLUT', 'STILLE', 'GLANZ'],
      tags: ['Kerze — 1800 K', 'Stein & Messing', 'Nachtnebel', 'Regenreflexe'],
      line1: 'Ein Saal, der flüstert,', line2: 'eine Küche, die leuchtet.',
      note: 'Jeden Abend derselbe Anspruch. Nie dieselbe Nacht.',
    },
    reservation: {
      label: 'Reservierung', title: 'Erleben Sie es.',
      cta: 'Einen Tisch reservieren', hoursTitle: 'Öffnungszeiten', contactTitle: 'Adresse',
      footer: 'Alle Rechte vorbehalten.',
    },
    form: {
      title: 'Reservierungsanfrage',
      date: 'Datum', time: 'Uhrzeit', guests: 'Gäste', name: 'Name', phone: 'Telefon',
      email: 'E-Mail', message: 'Nachricht (optional)', messagePlaceholder: 'Allergien, Anlass, Wünsche…',
      submit: 'Anfrage senden', sending: 'Senden…',
      success: 'Ihre Anfrage wurde gesendet. Das Haus meldet sich innerhalb von 24 Stunden.',
      error: 'Senden fehlgeschlagen. Versuchen Sie es erneut oder reservieren Sie telefonisch.',
      unconfigured: 'Das Sendemodul ist noch nicht verbunden. Bitte reservieren Sie telefonisch.',
      phoneCta: 'Telefonisch reservieren',
      required: 'Pflichtfeld', invalidEmail: 'Ungültige E-Mail', pastDate: 'Wählen Sie ein zukünftiges Datum',
      guestsUnit: 'Gäste',
    },
    reviews: {
      label: 'Bewertungen', title: 'Was die Gäste sagen.', items: REVIEWS,
    },
    legal: {
      link: 'Impressum', title: 'Impressum',
      body: "La Table d'Antonio Salvatore au Rampoldi — Gourmetrestaurant, 3 Avenue des Spélugues, 98000 Monaco. Herausgeber: [FIRMENNAME]. Verantwortlich: [VERANTWORTLICHER]. Kontakt: [EMAIL] · +377 93 30 70 44. Hosting: GitHub Pages. Einige Bilder sind KI-generiert und dienen Präsentationszwecken.",
      close: 'Schließen',
    },
    menuOverlay: { label: 'Navigation', hint: 'Ihr Tisch erwartet Sie.' },
    compose: {
      title: 'Stellen Sie Ihr Gericht zusammen', base: 'Grundgericht', supplements: 'Ergänzungen',
      total: 'Gesamt', order: 'Dieses Gericht reservieren', close: 'Schließen',
      step1: 'Schritt 1 — Menü wählen', step2: 'Schritt 2 — Ergänzungen hinzufügen',
      included: 'inklusive', yourDish: 'Ihre Komposition',
    },
    chef: {
      label: 'Das Haus',
      title: 'Die Seele des Hauses',
      intro: 'Hinter jedem Teller: ein Mann, eine Brigade, ein Anspruch. Antonio Salvatore steht für eine präzise, großzügige italienische Autorenküche im Herzen von Monte-Carlo.',
      q1: 'Kochen ist Erinnerung, die man noch warm serviert.',
      q2: 'Der Stern ist keine Trophäe. Er ist ein Versprechen, jeden Abend erneuert.',
      blocks: [
        { num: '01', title: 'Der Chef', text: 'Von der Basilikata an die Tische des Fürstentums: ein Weg, geformt in außergewöhnlichen Häusern, eine vom Guide Michelin gewürdigte Handschrift.' },
        { num: '02', title: 'Die Philosophie', text: 'Erst das Produkt, immer die Saison. Präzise Gesten, geduldiges Garen, Eleganz ohne Effekthascherei.' },
        { num: '03', title: 'Die Brigade', text: 'Ein eingespieltes Team, geschult am Anspruch der großen Häuser, getragen vom selben Feuer: empfangen, verwöhnen, berühren.' },
      ],
      captions: ['Die Küche am Abend', 'Die Geste', 'Der Pass'],
    },
    tables: {
      label: 'Die Tische', title: 'Wählen Sie Ihren Tisch',
      intro: 'Jeder Tisch im Saal hat seinen Charakter. Fahren Sie über den Plan, wählen Sie Ihre Atmosphäre — um den Rest kümmert sich das Haus.',
      hint: 'Tisch berühren oder überfahren',
      capacity: 'Gedecke', standardLabel: 'Gewöhnlicher Abend', gpLabel: 'F1 Grand Prix',
      reserveCta: 'Diesen Tisch reservieren', requestNote: 'Anfrage mit Ihrem Wunschtisch gesendet.',
      items: [
        { id: 'alcove', name: 'Die Alkove', desc: 'Ein abgeschiedenes Refugium bei Kerzenlicht.', ambiance: 'Intim', capacity: 2, standard: 'À la carte', gp: '450 € / Gast' },
        { id: 'rotonde', name: 'Die Rotunde', desc: 'Im Herzen des Saals, unter dem Lüster.', ambiance: 'Theatralisch', capacity: 4, standard: 'À la carte', gp: '550 € / Gast' },
        { id: 'vue', name: 'Der Aussichtstisch', desc: 'Das Fenster zum Platz, Lichter der Nacht.', ambiance: 'Panorama', capacity: 4, standard: 'À la carte', gp: '690 € / Gast' },
        { id: 'salon', name: 'Der Private Salon', desc: 'Ein geschlossener Salon, eigener Service.', ambiance: 'Vertraulich', capacity: 8, standard: 'Degustationsmenü', gp: 'Auf Anfrage' },
        { id: 'passe', name: 'Der Tisch am Pass', desc: 'Der Brigade gegenüber, dem Feuer am nächsten.', ambiance: 'Immersiv', capacity: 6, standard: 'Degustationsmenü', gp: '590 € / Gast' },
      ],
    },
    maisons: {
      label: 'Unsere Häuser', title: 'Zwei Adressen, eine Handschrift',
      intro: 'Vom Fürstentum bis Manhattan: derselbe italienische Anspruch, zwei Atmosphären. Wählen Sie Ihren Abend.',
      hoursLabel: 'Öffnungszeiten', addressLabel: 'Adresse', reserveCta: 'Reservieren',
      houses: [
        { id: 'mc', city: 'Monte-Carlo', name: 'Das Stammhaus', desc: 'Das historische Refugium am Hafen. Belle Époque, Kerzenlicht, Küche des Feuers.', address: '3 Avenue des Spélugues, 98000 Monaco', hours: 'Dienstag — Sonntag · ab 19:00', phone: '+377 93 30 70 44' },
        { id: 'ny', city: 'New York', name: 'La Table, Uptown', desc: 'Die Handschrift in der Höhe, über den Lichtern Manhattans. Intim, gedämpft, rar.', address: 'Auf private Reservierung · Manhattan, NY', hours: 'Mittwoch — Samstag · ab 18:30', phone: 'Auf Anfrage' },
      ],
    },
    boutique: {
      label: 'Die Boutique', title: 'Das Haus zum Mitnehmen',
      intro: 'Einige signierte Objekte, Erweiterungen der Tafel. In kleinen Serien, im Etui überreicht.',
      cta: 'Bestellen', priceLabel: 'Preis',
      items: [
        { id: 1, name: 'Parfum „Lumière“', desc: 'Amber, Leder und Feige. Eau de Parfum, 100 ml.', price: '180 €' },
        { id: 2, name: 'Schwarze Trüffelsauce', desc: 'Périgord-Trüffel, Olivenöl. Limitierte Edition.', price: '48 €' },
        { id: 3, name: 'Außergewöhnliches Olivenöl', desc: 'Erste Kaltpressung, sortenrein.', price: '36 €' },
        { id: 4, name: 'Kerze „Braise“', desc: 'Pflanzenwachs, verbranntes Holz und Amber. 60 h.', price: '65 €' },
      ],
    },
    events: {
      label: 'Events', title: 'Das Jahr in Monaco',
      intro: 'Eine Saison außergewöhnlicher Anlässe. Für jeden: ein Tisch, ein Menü, ein Moment.',
      offerLabel: 'Unser Angebot',
      items: [
        { key: 'gp', month: 'Mai', name: 'Grand Prix von Monaco', img: 'race', desc: 'Die Stadt hält den Atem an. Dinieren im Angesicht der Leidenschaft, Fünf-Gänge-Menü.', offer: 'Grand-Prix-Menü · private Terrasse' },
        { key: 'yacht', month: 'September', name: 'Yacht Show', img: 'harbour', desc: 'Der Hafen zeigt seine Giganten. Eine Karte aus dem Meer, am Wasser.', offer: 'Reederessen · Champagner-Begleitung' },
        { key: 'fete', month: 'November', name: 'Nationalfeiertag', img: 'festive', desc: 'Das Fürstentum erstrahlt. Ein Galaabend, unter den Lichtern.', offer: 'Gala-Menü · Feuerwerk' },
        { key: 'nye', month: 'Dezember', name: 'Silvester', img: 'festive', desc: 'Der letzte Abend des Jahres, gefeiert wie es sich gehört.', offer: '7-Gänge-Silvester · goldene Mitternacht' },
      ],
    },
    press: {
      label: 'Presse', title: 'Man spricht darüber',
      intro: 'Was die Kritik an Antonio Salvatore und seiner Tafel hervorhebt.',
      readCta: 'Artikel lesen', logos: ['Riviera Gourmet', 'Le Sel & la Plume', 'Corriere del Gusto', 'Monaco Soir', 'Palais & Papilles', 'La Table Guide'],
      articles: [
        { source: 'Riviera Gourmet', date: '2025', quote: 'Eine der schönsten Tafeln des Fürstentums: präzise, großzügig, zutiefst italienisch.' },
        { source: 'Le Sel & la Plume', date: '2024', quote: 'Antonio Salvatore setzt eine seltene Handschrift, zwischen Erinnerung des Südens und Sternerigor.' },
        { source: 'Corriere del Gusto', date: '2024', quote: 'Das Talent eines Küchenchefs, der Italien mit schlichter, leuchtender Eleganz erzählt.' },
      ],
    },
  },

  // ==========================================================
  // ESPAÑOL
  // ==========================================================
  es: {
    nav: { home: 'Inicio', experience: 'La Experiencia', maison: 'La Casa', menu: 'La Carta', ambiance: 'Ambiente', reserve: 'Reservar', tables: 'Las Mesas' , maisons: 'Nuestras Casas', boutique: 'La Boutique', events: 'Eventos', press: 'Prensa' },
    hero: {
      kicker: 'Mónaco — Riviera', title: 'MAISON LUMIÈRE', tagline: 'El arte de recibir.',
      sub: 'Una dirección excepcional en Mónaco.', cta: 'Reservar', scroll: 'Desplázate para entrar',
      chips: ['Estrella Michelin', 'Gastronomía italiana', 'Mónaco'],
    },
    experience: {
      label: 'La Experiencia',
      lines: [
        ['Cae la noche.', 'La calle brilla.', 'Una luz te espera.'],
        ['El fuego trabaja', 'la materia — ', 'despacio.'],
        ['Cada plato,', 'una promesa', 'cumplida.'],
      ],
      keywords: ['luz', 'materia', 'promesa'],
      panel: { title: 'El umbral', body: 'Cruzar la puerta es ir más despacio. El tiempo se posa, la mesa se abre.' },
    },
    maison: {
      label: 'La Casa', bigtype: 'EL FUEGO, LA MATERIA',
      intro: 'Una cocina de precisión, alimentada por la brasa y el producto. Madurado, confitado, braseado, afinado — nada superfluo, nada estridente.',
      cards: [
        { num: '01', title: 'COCINA', text: 'Productos excepcionales, cocciones precisas, estaciones respetadas.' },
        { num: '02', title: 'BODEGA', text: 'Selección singular, botellas pacientemente afinadas.' },
        { num: '03', title: 'SERVICIO', text: 'El arte de recibir, sin ceremonias superfluas.' },
        { num: '04', title: 'MARCO', text: 'Elegancia intemporal, luz de velas.' },
      ],
    },
    menu: {
      label: 'La Carta', title: 'Platos Insignia', sub: 'Seis obras maestras, una sola exigencia.', cta: 'Descubrir',
      dishes: [
        { name: 'Foie gras sellado', desc: 'Costra caramelizada, glaseado de higo, brioche dorado.', price: '68 €' },
        { name: 'Risotto de trufa negra', desc: 'Trufa del Périgord, velo de parmesano afinado.', price: '84 €' },
        { name: 'Vacuno madurado', desc: 'Larga maduración, jugo ahumado, chalota confitada.', price: '96 €' },
        { name: 'Pescado de anzuelo', desc: 'Piel crujiente, beurre blanc al azafrán.', price: '72 €' },
        { name: 'Bogavante azul', desc: 'Glaseado de coral, hinojo braseado.', price: '110 €' },
        { name: 'Postre Lumière', desc: 'Esfera de chocolate negro, caramelo caliente, pan de oro.', price: '38 €' },
      ],
    },
    ambiance: {
      label: 'Ambiente', words: ['LUZ', 'BRASA', 'SILENCIO', 'BRILLO'],
      tags: ['Vela — 1800 K', 'Piedra y latón', 'Bruma nocturna', 'Reflejos de lluvia'],
      line1: 'Una sala que susurra,', line2: 'una cocina que resplandece.',
      note: 'Cada noche, la misma exigencia. Nunca la misma noche.',
    },
    reservation: {
      label: 'Reserva', title: 'Vive la experiencia.',
      cta: 'Reservar una mesa', hoursTitle: 'Horario', contactTitle: 'Dirección',
      footer: 'Todos los derechos reservados.',
    },
    form: {
      title: 'Solicitud de reserva',
      date: 'Fecha', time: 'Hora', guests: 'Comensales', name: 'Nombre', phone: 'Teléfono',
      email: 'Email', message: 'Mensaje (opcional)', messagePlaceholder: 'Alergias, ocasión, preferencias…',
      submit: 'Enviar solicitud', sending: 'Enviando…',
      success: 'Su solicitud ha sido enviada. El restaurante le contactará en un plazo de 24 horas.',
      error: 'El envío ha fallado. Inténtelo de nuevo o reserve por teléfono.',
      unconfigured: 'El módulo de envío aún no está conectado. Reserve por teléfono más abajo.',
      phoneCta: 'Reservar por teléfono',
      required: 'Campo obligatorio', invalidEmail: 'Email no válido', pastDate: 'Elija una fecha futura',
      guestsUnit: 'personas',
    },
    reviews: {
      label: 'Reseñas', title: 'Lo que dicen.', items: REVIEWS,
    },
    legal: {
      link: 'Aviso legal', title: 'Aviso legal',
      body: "La Table d'Antonio Salvatore au Rampoldi — restaurante gastronómico, 3 Avenue des Spélugues, 98000 Monaco. Editor: [NOMBRE DE LA EMPRESA]. Director de publicación: [RESPONSABLE]. Contacto: [EMAIL] · +377 93 30 70 44. Alojamiento: GitHub Pages. Algunas imágenes están generadas por IA con fines de presentación.",
      close: 'Cerrar',
    },
    menuOverlay: { label: 'Navegación', hint: 'Su mesa le espera.' },
    compose: {
      title: 'Componga su plato', base: 'Plato base', supplements: 'Suplementos',
      total: 'Total', order: 'Reservar este plato', close: 'Cerrar',
      step1: 'Paso 1 — Elija su menú', step2: 'Paso 2 — Añada suplementos',
      included: 'incluido', yourDish: 'Su composición',
    },
    chef: {
      label: 'La Casa',
      title: 'El alma de la casa',
      intro: 'Detrás de cada plato: un hombre, una brigada, una exigencia. Antonio Salvatore firma una cocina italiana de autor, precisa y generosa, en el corazón de Monte-Carlo.',
      q1: 'La cocina es una memoria que se sirve aún caliente.',
      q2: 'La estrella no es un trofeo. Es una promesa, renovada cada noche.',
      blocks: [
        { num: '01', title: 'El Chef', text: 'De Basilicata a las mesas del Principado: una trayectoria forjada en casas excepcionales, una firma reconocida por la Guía Michelin.' },
        { num: '02', title: 'La Filosofía', text: 'Primero el producto, siempre la estación. Gestos precisos, cocciones pacientes, elegancia sin ostentación.' },
        { num: '03', title: 'La Brigada', text: 'Un equipo unido, formado en la exigencia de las grandes casas, movido por el mismo fuego: recibir, deleitar, emocionar.' },
      ],
      captions: ['La cocina, de noche', 'El gesto', 'El pase'],
    },
    tables: {
      label: 'Las Mesas', title: 'Elija su mesa',
      intro: 'Cada mesa de la sala tiene su carácter. Recorra el plano, elija su atmósfera — la casa se ocupa del resto.',
      hint: 'Pase o toque una mesa',
      capacity: 'comensales', standardLabel: 'Noche ordinaria', gpLabel: 'Gran Premio F1',
      reserveCta: 'Reservar esta mesa', requestNote: 'Solicitud enviada con su mesa como preferencia.',
      items: [
        { id: 'alcove', name: 'La Alcoba', desc: 'Un rincón apartado, a la luz de las velas.', ambiance: 'Íntimo', capacity: 2, standard: 'A la carta', gp: '450 € / pers.' },
        { id: 'rotonde', name: 'La Rotonda', desc: 'En el corazón de la sala, bajo la lámpara.', ambiance: 'Teatral', capacity: 4, standard: 'A la carta', gp: '550 € / pers.' },
        { id: 'vue', name: 'La Mesa Vista', desc: 'El ventanal a la plaza, luces nocturnas.', ambiance: 'Panorama', capacity: 4, standard: 'A la carta', gp: '690 € / pers.' },
        { id: 'salon', name: 'El Salón Privado', desc: 'Un salón cerrado, servicio dedicado.', ambiance: 'Confidencial', capacity: 8, standard: 'Menú degustación', gp: 'Bajo petición' },
        { id: 'passe', name: 'La Mesa del Pase', desc: 'Frente a la brigada, junto al fuego.', ambiance: 'Inmersivo', capacity: 6, standard: 'Menú degustación', gp: '590 € / pers.' },
      ],
    },
    maisons: {
      label: 'Nuestras Casas', title: 'Dos direcciones, una firma',
      intro: 'Del Principado a Manhattan: la misma exigencia italiana, dos atmósferas. Elija su noche.',
      hoursLabel: 'Horario', addressLabel: 'Dirección', reserveCta: 'Reservar',
      houses: [
        { id: 'mc', city: 'Monte-Carlo', name: 'La Casa madre', desc: 'El estuche histórico, frente al puerto. Belle Époque, luz de velas, cocina de fuego.', address: '3 Avenue des Spélugues, 98000 Monaco', hours: 'Martes — Domingo · desde las 19:00', phone: '+377 93 30 70 44' },
        { id: 'ny', city: 'Nueva York', name: 'La Table, Uptown', desc: 'La firma en las alturas, sobre las luces de Manhattan. Íntima, silenciosa, singular.', address: 'Reserva privada · Manhattan, NY', hours: 'Miércoles — Sábado · desde las 18:30', phone: 'Bajo petición' },
      ],
    },
    boutique: {
      label: 'La Boutique', title: 'La casa, para llevar',
      intro: 'Unos pocos objetos firmados, prolongaciones de la mesa. Editados en pequeñas series, en su estuche.',
      cta: 'Pedir', priceLabel: 'Precio',
      items: [
        { id: 1, name: 'Perfume « Lumière »', desc: 'Ámbar, cuero e higo. Eau de parfum, 100 ml.', price: '180 €' },
        { id: 2, name: 'Salsa de trufa negra', desc: 'Trufa del Périgord, aceite de oliva. Edición limitada.', price: '48 €' },
        { id: 3, name: 'Aceite de oliva excepcional', desc: 'Primera presión en frío, monovarietal.', price: '36 €' },
        { id: 4, name: 'Vela « Braise »', desc: 'Cera vegetal, madera quemada y ámbar. 60 h.', price: '65 €' },
      ],
    },
    events: {
      label: 'Eventos', title: 'El año en Mónaco',
      intro: 'Una temporada de citas excepcionales. Para cada una, una mesa, un menú, un momento.',
      offerLabel: 'Nuestra oferta',
      items: [
        { key: 'gp', month: 'Mayo', name: 'Gran Premio de Mónaco', img: 'race', desc: 'La ciudad contiene el aliento. Cena frente al fervor, menú en cinco tiempos.', offer: 'Menú Gran Premio · terraza privada' },
        { key: 'yacht', month: 'Septiembre', name: 'Yacht Show', img: 'harbour', desc: 'El puerto se viste de gigantes. Una carta marina, junto al agua.', offer: 'Cena armadores · maridaje champán' },
        { key: 'fete', month: 'Noviembre', name: 'Fiesta Nacional', img: 'festive', desc: 'El Principado se ilumina. Una velada de gala, bajo las luces.', offer: 'Menú de gala · fuegos artificiales' },
        { key: 'nye', month: 'Diciembre', name: 'Nochevieja', img: 'festive', desc: 'La última noche del año, celebrada como se debe.', offer: 'Nochevieja 7 platos · medianoche dorada' },
      ],
    },
    press: {
      label: 'Prensa', title: 'Se habla de ello',
      intro: 'Lo que la crítica retiene de Antonio Salvatore y su mesa.',
      readCta: 'Leer el artículo', logos: ['Riviera Gourmet', 'Le Sel & la Plume', 'Corriere del Gusto', 'Monaco Soir', 'Palais & Papilles', 'La Table Guide'],
      articles: [
        { source: 'Riviera Gourmet', date: '2025', quote: 'Una de las mejores mesas del Principado: precisa, generosa, profundamente italiana.' },
        { source: 'Le Sel & la Plume', date: '2024', quote: 'Antonio Salvatore impone una firma singular, entre memoria del Sur y rigor de estrella.' },
        { source: 'Corriere del Gusto', date: '2024', quote: 'El talento de un chef que narra Italia con una elegancia sobria y luminosa.' },
      ],
    },
  },
}
