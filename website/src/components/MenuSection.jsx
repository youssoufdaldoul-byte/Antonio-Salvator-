// MAISON LUMIÈRE — Section 4 · Le Menu / Les Plats (dish catalog)
// One of the only sections where dish imagery is allowed.
import DishCard from './DishCard'

export default function MenuSection({ tr }) {
  return (
    <section id="menu" className="section menu-section">
      <div className="section__head">
        <span className="gold-line" data-line />
        <span className="label label--gold">{tr.menu.label}</span>
      </div>
      <h2 className="menu-section__title" data-reveal>
        {tr.menu.title}
      </h2>
      <p className="menu-section__sub" data-reveal>
        {tr.menu.sub}
      </p>
      <div className="dish-grid" data-reveal-group>
        {tr.menu.dishes.map((dish, i) => (
          <DishCard key={i} index={i + 1} dish={dish} cta={tr.menu.cta} />
        ))}
      </div>
    </section>
  )
}
