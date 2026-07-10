// MAISON LUMIÈRE — Section 4 · Le Menu / Les Plats (dish catalog)
// One of the only sections where dish imagery is allowed.
import { useState } from 'react'
import DishCard from './DishCard'
import ComposeModal from './ComposeModal'

export default function MenuSection({ tr, lang }) {
  // Which dish's "Composez votre plat" module is open (index 1..6, or null).
  const [active, setActive] = useState(null)

  return (
    <section id="menu" className="section menu-section">
      <div className="section__head" data-reveal>
        <span className="gold-line" data-line />
        <span className="label label--gold">{tr.menu.label}</span>
      </div>
      <h2 className="menu-section__title" data-reveal>
        {tr.menu.title}
      </h2>
      <p className="menu-section__sub" data-reveal>
        {tr.menu.sub}
      </p>
      <div className="dish-grid" data-reveal-batch>
        {tr.menu.dishes.map((dish, i) => (
          <DishCard
            key={i}
            index={i + 1}
            dish={dish}
            cta={tr.menu.cta}
            onDiscover={() => setActive(i + 1)}
          />
        ))}
      </div>

      {active !== null && (
        <ComposeModal
          dish={tr.menu.dishes[active - 1]}
          index={active}
          lang={lang}
          tr={tr}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  )
}
