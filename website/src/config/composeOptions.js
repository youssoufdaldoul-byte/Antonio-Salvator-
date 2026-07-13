// ============================================================
// LA TABLE D'ANTONIO SALVATORE — "Composez votre plat" builder
// ------------------------------------------------------------
// EDIT HERE. Two groups:
//   COMPOSE_BASES   — Step 1 formules (choose one). `delta` € is added
//                     to the dish's base price. `thumbDish:true` uses the
//                     clicked dish image; otherwise `thumb` is an image path.
//   COMPOSE_OPTIONS — Step 2 supplements (toggle). `price` € each.
//                     `thumb` is an image path; missing images fall back
//                     to an elegant monogram placeholder automatically.
// `label` is keyed by language (fr/en/it/ru/de/es); missing → French.
// ============================================================

// Generated ingredient thumbnails (Nano Banana Pro, dark/amber family) served
// from the Higgsfield CDN. asset() passes absolute URLs through untouched; a
// missing image still falls back to the elegant monogram placeholder.
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3FzneIW6DeCzXNNc7KNNfmQuLKf'
const ING = {
  truffe: `${CDN}/hf_20260713_205054_e2a70c50-b962-4415-b463-55faa13cd11b_min.webp`,
  foie: `${CDN}/hf_20260713_205107_966b45bc-5b72-44e7-9d87-1864f0dcdd0c_min.webp`,
  caviar: `${CDN}/hf_20260713_205114_85eeb6da-dfbe-4094-aa6a-4212926c1f43_min.webp`,
  homard: `${CDN}/hf_20260713_205129_9b178cc0-d9dd-48f6-92b8-d03120bcdd48_min.webp`,
  or: `${CDN}/hf_20260713_205142_c62b01de-10c8-41f3-b6b9-679077efc354_min.webp`,
  accord: `${CDN}/hf_20260713_205149_3870fc63-43c5-490b-b7e8-9bf6c16ef336_min.webp`,
}

export const COMPOSE_BASES = [
  {
    id: 'carte', delta: 0, thumbDish: true,
    label: {
      fr: 'À la carte', en: 'À la carte', it: 'Alla carta',
      ru: 'À la carte', de: 'À la carte', es: 'A la carta',
    },
  },
  {
    id: 'menu3', delta: 30, thumb: '/images/detail-table.webp',
    label: {
      fr: 'Menu 3 services', en: '3-course menu', it: 'Menu 3 portate',
      ru: 'Меню из 3 блюд', de: '3-Gänge-Menü', es: 'Menú 3 platos',
    },
  },
  {
    id: 'menu5', delta: 60, thumb: '/images/detail-bar.webp',
    label: {
      fr: 'Menu 5 services', en: '5-course menu', it: 'Menu 5 portate',
      ru: 'Меню из 5 блюд', de: '5-Gänge-Menü', es: 'Menú 5 platos',
    },
  },
  {
    id: 'degustation', delta: 95, thumb: '/images/interior-hall.webp',
    label: {
      fr: 'Menu Dégustation', en: 'Tasting menu', it: 'Menu degustazione',
      ru: 'Дегустационное меню', de: 'Degustationsmenü', es: 'Menú degustación',
    },
  },
]

export const COMPOSE_OPTIONS = [
  {
    id: 'truffe', price: 12, thumb: ING.truffe,
    label: {
      fr: 'Truffe noire du Périgord', en: 'Black Périgord truffle', it: 'Tartufo nero del Périgord',
      ru: 'Чёрный трюфель Перигора', de: 'Schwarze Périgord-Trüffel', es: 'Trufa negra del Périgord',
    },
  },
  {
    id: 'foie', price: 14, thumb: ING.foie,
    label: {
      fr: 'Escalope de foie gras poêlé', en: 'Seared foie gras escalope', it: 'Scaloppa di foie gras',
      ru: 'Эскалоп из фуа-гра', de: 'Gebratene Foie-gras-Scheibe', es: 'Escalope de foie gras',
    },
  },
  {
    id: 'caviar', price: 22, thumb: ING.caviar,
    label: {
      fr: 'Caviar Osciètre (10 g)', en: 'Oscietra caviar (10 g)', it: 'Caviale Oscietra (10 g)',
      ru: 'Икра осетра (10 г)', de: 'Oscietra-Kaviar (10 g)', es: 'Caviar Oscietra (10 g)',
    },
  },
  {
    id: 'homard', price: 18, thumb: ING.homard,
    label: {
      fr: 'Médaillon de homard bleu', en: 'Blue lobster medallion', it: 'Medaglione di astice blu',
      ru: 'Медальон из голубого омара', de: 'Blaue-Hummer-Medaillon', es: 'Medallón de bogavante azul',
    },
  },
  {
    id: 'or', price: 8, thumb: ING.or,
    label: {
      fr: "Feuille d'or comestible", en: 'Edible gold leaf', it: "Foglia d'oro commestibile",
      ru: 'Съедобное сусальное золото', de: 'Essbares Blattgold', es: 'Pan de oro comestible',
    },
  },
  {
    id: 'accord', price: 16, thumb: ING.accord,
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
