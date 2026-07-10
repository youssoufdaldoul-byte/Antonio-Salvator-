// ============================================================
// LA TABLE D'ANTONIO SALVATORE AU RAMPOLDI — CLIENT CONFIGURATION
// Every piece of editable restaurant information lives HERE.
// Change a value once and it updates across the whole site.
// ============================================================

export const RESTAURANT = {
  // [NAME] — full display name (footer, réservation, legal, meta)
  name: "La Table d'Antonio Salvatore au Rampoldi",
  // Elegant lockup used for the header logo and the giant hero typography.
  nameShort: 'Antonio Salvatore',
  namePrefix: 'La Table de', // small line above the hero name
  nameSuffix: 'au Rampoldi', // small line below the hero name

  // [ADDRESS] — street + city, shown in Réservation and the footer
  address: '3 Avenue des Spélugues',
  city: '98000 Monaco',
  // Address link → Google Maps (edit the query if the address changes)
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La+Table+d%27Antonio+Salvatore+au+Rampoldi+3+Avenue+des+Sp%C3%A9lugues+Monaco',

  // [PHONE] — used for the click-to-call button (international format)
  phone: '+377 93 30 70 44',

  // [EMAIL] — public contact email. PLACEHOLDER — replace with the real one.
  email: 'contact@rampoldi.mc',

  // [HOURS] — dinner service, opens at 19:00
  hoursDays: 'Service du dîner',
  hoursService: 'À partir de 19h00',

  // Identity / rating
  cuisine: 'Gastronomie italienne étoilée',
  rating: 4.6, // out of 5, shown in the Reviews section

  // Social links (leave '' to hide a link in the footer)
  instagram: '',
  facebook: '',

  // ------------------------------------------------------------
  // RESERVATION EMAIL DELIVERY — Formspree
  // 1. Create a free account at https://formspree.io
  // 2. Create a new form; set its destination to the restaurant's
  //    reservation email address ([EMAIL] of the client).
  // 3. Copy the form ID (the part after /f/ in the endpoint URL,
  //    e.g. "mqkvabcd") and paste it below.
  // While this is empty, the form shows a clear "not connected yet"
  // message instead of pretending to send.
  // ------------------------------------------------------------
  formspreeId: '',

  // Future pro booking hookup (TheFork / Zenchef / SevenRooms):
  // paste the widget/booking URL here and the "Réserver" CTAs will
  // link to it instead of scrolling to the form. Leave '' to use
  // the built-in email form.
  bookingUrl: '',
}
