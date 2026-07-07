// ============================================================
// MAISON LUMIÈRE — CLIENT CONFIGURATION
// Every piece of editable restaurant information lives HERE.
// Change a value once and it updates across the whole site.
// ============================================================

export const RESTAURANT = {
  // [NAME] — the restaurant's display name
  name: 'MAISON LUMIÈRE',

  // [ADDRESS] — street + city, shown in Réservation and the footer
  address: '3 Place des Moulins',
  city: '98000 Monaco',

  // [PHONE] — used for the click-to-call "Réserver par téléphone" button.
  // Keep the international format (+377 …).
  phone: '+377 93 00 00 00',

  // [EMAIL] — public contact email, shown in the legal notice
  email: 'contact@maison-lumiere.mc',

  // [HOURS] — shown as-is in Réservation (adapt wording to the client)
  hoursDays: 'Mardi — Samedi',
  hoursService: 'Dîner · 19h00 — 23h00',

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
