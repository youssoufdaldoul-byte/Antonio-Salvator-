// ============================================================
// MAISON LUMIÈRE — "Composez votre plat" supplement options
// ------------------------------------------------------------
// EDIT HERE: prices are in euros; `label` is keyed by language
// (fr/en/it/ru/de/es). A missing language falls back to French.
// Add / remove entries freely — the module updates automatically.
// `dish` = 1..6 restricts a supplement to a dish; omit `dish`
// (or use 0) to offer it on every dish.
// ============================================================

export const COMPOSE_OPTIONS = [
  {
    id: 'truffe',
    price: 12,
    label: {
      fr: 'Truffe noire du Périgord', en: 'Black Périgord truffle', it: 'Tartufo nero del Périgord',
      ru: 'Чёрный трюфель Перигора', de: 'Schwarze Périgord-Trüffel', es: 'Trufa negra del Périgord',
    },
  },
  {
    id: 'foie',
    price: 14,
    label: {
      fr: 'Escalope de foie gras poêlé', en: 'Seared foie gras escalope', it: 'Scaloppa di foie gras',
      ru: 'Эскалоп из фуа-гра', de: 'Gebratene Foie-gras-Scheibe', es: 'Escalope de foie gras',
    },
  },
  {
    id: 'caviar',
    price: 22,
    label: {
      fr: 'Caviar Osciètre (10 g)', en: 'Oscietra caviar (10 g)', it: 'Caviale Oscietra (10 g)',
      ru: 'Икра осетра (10 г)', de: 'Oscietra-Kaviar (10 g)', es: 'Caviar Oscietra (10 g)',
    },
  },
  {
    id: 'homard',
    price: 18,
    label: {
      fr: 'Médaillon de homard bleu', en: 'Blue lobster medallion', it: 'Medaglione di astice blu',
      ru: 'Медальон из голубого омара', de: 'Blaue-Hummer-Medaillon', es: 'Medallón de bogavante azul',
    },
  },
  {
    id: 'or',
    price: 8,
    label: {
      fr: "Feuille d'or comestible", en: 'Edible gold leaf', it: "Foglia d'oro commestibile",
      ru: 'Съедобное сусальное золото', de: 'Essbares Blattgold', es: 'Pan de oro comestible',
    },
  },
  {
    id: 'accord',
    price: 16,
    label: {
      fr: 'Accord mets & vin (2 verres)', en: 'Wine pairing (2 glasses)', it: 'Abbinamento vini (2 calici)',
      ru: 'Винное сопровождение (2 бокала)', de: 'Weinbegleitung (2 Gläser)', es: 'Maridaje de vinos (2 copas)',
    },
  },
]

// Parse a display price like "68 €" / "€68" into a number for live totals.
export function basePriceNumber(priceString) {
  const n = parseFloat(String(priceString).replace(/[^0-9.,]/g, '').replace(',', '.'))
  return Number.isFinite(n) ? n : 0
}
