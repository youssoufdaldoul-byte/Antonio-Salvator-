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
    nav: { home: 'Accueil', experience: "L'Expérience", maison: 'La Maison', menu: 'Le Menu', ambiance: 'Ambiance', reserve: 'Réserver' },
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
    },
  },

  // ==========================================================
  // ENGLISH
  // ==========================================================
  en: {
    nav: { home: 'Home', experience: 'The Experience', maison: 'The House', menu: 'The Menu', ambiance: 'Ambiance', reserve: 'Reserve' },
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
    },
  },

  // ==========================================================
  // ITALIANO
  // ==========================================================
  it: {
    nav: { home: 'Home', experience: "L'Esperienza", maison: 'La Maison', menu: 'Il Menu', ambiance: 'Atmosfera', reserve: 'Prenotare' },
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
    },
  },

  // ==========================================================
  // РУССКИЙ
  // ==========================================================
  ru: {
    nav: { home: 'Главная', experience: 'Опыт', maison: 'Дом', menu: 'Меню', ambiance: 'Атмосфера', reserve: 'Бронь' },
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
    },
  },

  // ==========================================================
  // DEUTSCH
  // ==========================================================
  de: {
    nav: { home: 'Start', experience: 'Das Erlebnis', maison: 'Das Haus', menu: 'Die Karte', ambiance: 'Ambiente', reserve: 'Reservieren' },
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
    },
  },

  // ==========================================================
  // ESPAÑOL
  // ==========================================================
  es: {
    nav: { home: 'Inicio', experience: 'La Experiencia', maison: 'La Casa', menu: 'La Carta', ambiance: 'Ambiente', reserve: 'Reservar' },
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
    },
  },
}
