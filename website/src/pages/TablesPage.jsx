// LA TABLE D'ANTONIO SALVATORE — Page · Les Tables (interactive floor plan)
// A jewel-case plan of the dining room: hovering/tapping a table lights it
// gold and reveals its story, capacity, ambiance and pricing (incl. Grand
// Prix F1). Reserving carries the chosen table into the reservation form.
import { useState } from 'react'
import PageShell from '../components/PageShell'
import CineImage from '../components/CineImage'

// table id → ambiance visual (generated) + existing fallback
const TABLE_IMAGES = {
  alcove: { src: '/images/table-alcove.webp', fallback: '/images/detail-table.webp' },
  rotonde: { src: '/images/table-salle.webp', fallback: '/images/interior-hall.webp' },
  vue: { src: '/images/table-vue.webp', fallback: '/images/terrace-night.webp' },
  salon: { src: '/images/table-salle.webp', fallback: '/images/interior-hall.webp' },
  passe: { src: '/images/table-salle.webp', fallback: '/images/interior-hall.webp' },
}

// Positions on the 840×560 plan; shape: circle {cx,cy,r} or rect {x,y,w,h,rx}
const SPOTS = {
  alcove: { type: 'circle', cx: 150, cy: 150, r: 30, seats: [[110, 150], [190, 150]] },
  rotonde: { type: 'circle', cx: 430, cy: 300, r: 48, seats: [[430, 230], [430, 370], [360, 300], [500, 300]] },
  vue: { type: 'rect', x: 660, y: 200, w: 96, h: 60, rx: 12, seats: [[708, 180], [708, 280]] },
  salon: { type: 'rect', x: 610, y: 70, w: 150, h: 84, rx: 14, seats: [] },
  passe: { type: 'rect', x: 120, y: 420, w: 170, h: 56, rx: 12, seats: [[150, 400], [205, 400], [260, 400]] },
}

export default function TablesPage({ tr, lang, setLang, onReserveTable }) {
  const c = tr.tables
  const [activeId, setActiveId] = useState('rotonde')
  const active = c.items.find((i) => i.id === activeId)
  const img = TABLE_IMAGES[activeId]

  return (
    <PageShell tr={tr} lang={lang} setLang={setLang}>
      <div className="tables-page">
        <header className="section tables-hero">
          <div className="section__head" data-reveal>
            <span className="gold-line" data-line />
            <span className="label label--gold">{c.label}</span>
          </div>
          <h1 className="chef-hero__title" data-reveal>{c.title}</h1>
          <p className="chef-hero__intro" data-reveal>{c.intro}</p>
        </header>

        <div className="tables-layout">
          {/* the plan */}
          <div className="tables-plan glass" data-reveal>
            <svg viewBox="0 0 840 560" className="plan-svg" aria-label={c.hint} role="group">
              {/* room shell */}
              <rect x="40" y="30" width="760" height="500" rx="26" className="plan-room" />
              {/* window band (right) + kitchen band (bottom-left) + bar (left) */}
              <line x1="800" y1="120" x2="800" y2="440" className="plan-window" />
              <rect x="52" y="500" width="300" height="8" rx="4" className="plan-kitchen" />
              <rect x="52" y="230" width="26" height="160" rx="8" className="plan-bar" />
              {/* entrance */}
              <path d="M 560 530 A 40 40 0 0 1 600 490" className="plan-door" />

              {c.items.map((t, i) => {
                const s = SPOTS[t.id]
                const isOn = activeId === t.id
                return (
                  <g
                    key={t.id}
                    className={`plan-table ${isOn ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveId(t.id)}
                    onClick={() => setActiveId(t.id)}
                    tabIndex={0}
                    onFocus={() => setActiveId(t.id)}
                    role="button"
                    aria-label={`${t.name} — ${t.capacity} ${c.capacity}`}
                  >
                    {s.type === 'circle' ? (
                      <circle cx={s.cx} cy={s.cy} r={s.r} className="plan-table__shape" />
                    ) : (
                      <rect x={s.x} y={s.y} width={s.w} height={s.h} rx={s.rx} className="plan-table__shape" />
                    )}
                    {s.seats.map(([x, y], j) => (
                      <circle key={j} cx={x} cy={y} r={5} className="plan-table__seat" />
                    ))}
                    <text
                      x={s.type === 'circle' ? s.cx : s.x + s.w / 2}
                      y={(s.type === 'circle' ? s.cy : s.y + s.h / 2) + 4}
                      className="plan-table__num"
                      textAnchor="middle"
                    >
                      0{i + 1}
                    </text>
                  </g>
                )
              })}
            </svg>
            <p className="tables-hint label">{c.hint}</p>
          </div>

          {/* the panel */}
          <aside className="tables-panel glass" data-reveal aria-live="polite">
            <div className="tables-panel__visual">
              <CineImage src={img.src} fallback={img.fallback} alt={active.name} className="tables-panel__img" />
              <span className="tables-panel__veil" aria-hidden="true" />
              <span className="chip tables-panel__tag">{active.ambiance}</span>
            </div>
            <div className="tables-panel__body">
              <h3 className="tables-panel__name">{active.name}</h3>
              <p className="tables-panel__desc">{active.desc}</p>
              <p className="tables-panel__cap">
                {active.capacity} {c.capacity}
              </p>
              <dl className="tables-pricing">
                <div>
                  <dt>{c.standardLabel}</dt>
                  <dd>{active.standard}</dd>
                </div>
                <div className="tables-pricing__gp">
                  <dt>{c.gpLabel}</dt>
                  <dd>{active.gp}</dd>
                </div>
              </dl>
              <button className="btn tables-panel__cta" onClick={() => onReserveTable(active.name)}>
                {c.reserveCta}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  )
}
