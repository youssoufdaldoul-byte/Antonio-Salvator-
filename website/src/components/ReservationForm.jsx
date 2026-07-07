// MAISON LUMIÈRE — reservation request form
// Real email delivery via Formspree (config/restaurant.js → formspreeId).
// No faking: while formspreeId is empty the form says so explicitly and
// directs guests to the click-to-call phone button.
import { useMemo, useState } from 'react'
import { RESTAURANT } from '../config/restaurant'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function ReservationForm({ tr }) {
  const f = tr.form
  const [values, setValues] = useState({
    date: '', time: '19:30', guests: '2', name: '', phone: '', email: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error | unconfigured

  const todayISO = useMemo(() => {
    const d = new Date()
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0, 10)
  }, [])

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    setErrors((err) => ({ ...err, [k]: undefined }))
  }

  const validate = () => {
    const err = {}
    for (const k of ['date', 'time', 'guests', 'name', 'phone', 'email']) {
      if (!values[k].trim()) err[k] = f.required
    }
    if (values.email && !EMAIL_RE.test(values.email)) err.email = f.invalidEmail
    if (values.date && values.date < todayISO) err.date = f.pastDate
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    if (!RESTAURANT.formspreeId) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${RESTAURANT.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Réservation — ${values.name} · ${values.date} ${values.time} · ${values.guests} couverts`,
          ...values,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="resa-form glass resa-form--confirm" role="status">
        <span className="resa-form__check" aria-hidden="true">✓</span>
        <p>{f.success}</p>
      </div>
    )
  }

  return (
    <form className="resa-form glass" onSubmit={onSubmit} noValidate>
      <h3 className="resa-form__title">{f.title}</h3>

      <div className="resa-form__grid">
        <label className="resa-field">
          <span>{f.date}</span>
          <input type="date" min={todayISO} value={values.date} onChange={set('date')}
            aria-invalid={!!errors.date} required />
          {errors.date && <em className="resa-field__err">{errors.date}</em>}
        </label>
        <label className="resa-field">
          <span>{f.time}</span>
          <input type="time" min="12:00" max="23:00" value={values.time} onChange={set('time')}
            aria-invalid={!!errors.time} required />
          {errors.time && <em className="resa-field__err">{errors.time}</em>}
        </label>
        <label className="resa-field">
          <span>{f.guests}</span>
          <select value={values.guests} onChange={set('guests')}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
              <option key={n} value={n}>{n} {f.guestsUnit}</option>
            ))}
          </select>
        </label>
        <label className="resa-field">
          <span>{f.name}</span>
          <input type="text" autoComplete="name" value={values.name} onChange={set('name')}
            aria-invalid={!!errors.name} required />
          {errors.name && <em className="resa-field__err">{errors.name}</em>}
        </label>
        <label className="resa-field">
          <span>{f.phone}</span>
          <input type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')}
            aria-invalid={!!errors.phone} required />
          {errors.phone && <em className="resa-field__err">{errors.phone}</em>}
        </label>
        <label className="resa-field">
          <span>{f.email}</span>
          <input type="email" autoComplete="email" value={values.email} onChange={set('email')}
            aria-invalid={!!errors.email} required />
          {errors.email && <em className="resa-field__err">{errors.email}</em>}
        </label>
        <label className="resa-field resa-field--full">
          <span>{f.message}</span>
          <textarea rows={3} placeholder={f.messagePlaceholder}
            value={values.message} onChange={set('message')} />
        </label>
      </div>

      {status === 'error' && <p className="resa-form__notice resa-form__notice--err" role="alert">{f.error}</p>}
      {status === 'unconfigured' && <p className="resa-form__notice" role="alert">{f.unconfigured}</p>}

      <div className="resa-form__actions">
        <button type="submit" className="btn" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </button>
        <a className="btn btn--ghost" href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`}>
          ☏&nbsp;{f.phoneCta} · {RESTAURANT.phone}
        </a>
      </div>
    </form>
  )
}
