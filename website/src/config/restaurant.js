// ============================================================
// LA TABLE DU CHEF — CLIENT CONFIGURATION
// Every piece of editable restaurant information lives HERE.
// Change a value once and it updates across the whole site.
// ============================================================

export const RESTAURANT = {
  // [NAME] — full display name (footer, réservation, legal, meta)
  name: 'La Table du Chef',
  // Elegant lockup used for the header logo and the giant hero typography.
  nameShort: 'La Table du Chef',
  namePrefix: '', // small line above the hero name
  nameSuffix: '', // small line below the hero name

  // [ADDRESS] — street + city, shown in Réservation and the footer
  address: '5 Rue Jean Daumas',
  city: '06400 Cannes',
  // Address link → Google Maps (edit the query if the address changes)
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La+Table+du+Chef+5+Rue+Jean+Daumas+06400+Cannes',

  // [PHONE] — used for the click-to-call button (international format)
  phone: '+33 4 93 68 27 40',

  // [EMAIL] — public contact email. PLACEHOLDER — replace with the real one.
  email: 'contact@latableduchef.fr',

  // [HOURS] — open every day, lunch & dinner service
  hoursDays: 'Tous les jours',
  hoursService: '12h00–13h30 · 19h30–21h00',

  // Identity / rating
  cuisine: 'Gastronomie française, produits du marché',
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
  // While this is empty, the form composes a prefilled reservation
  // email via the guest's mail app (mailto) instead of pretending to send.
  // ------------------------------------------------------------
  formspreeId: '',

  // Future pro booking hookup (TheFork / Zenchef / SevenRooms):
  // paste the widget/booking URL here and the "Réserver" CTAs will
  // link to it instead of scrolling to the form. Leave '' to use
  // the built-in email form.
  bookingUrl: '',
}
