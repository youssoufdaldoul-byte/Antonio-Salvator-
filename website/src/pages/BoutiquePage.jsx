// LA TABLE D'ANTONIO SALVATORE — Page · La Boutique
// A gallery of objets d'art (not an e-commerce grid): each product floats
// and rotates in 3D, presented on generous dark space with an elegant
// description, discreet price and an order CTA.
import PageShell from '../components/PageShell'
import ProductObject from '../components/ProductObject'

export default function BoutiquePage({ tr, lang, setLang, onReserve }) {
  const c = tr.boutique

  return (
    <PageShell tr={tr} lang={lang} setLang={setLang}>
      <div className="boutique-page">
        <header className="section boutique-hero">
          <div className="section__head" data-reveal>
            <span className="gold-line" data-line />
            <span className="label label--gold">{c.label}</span>
          </div>
          <h1 className="chef-hero__title" data-reveal>{c.title}</h1>
          <p className="chef-hero__intro" data-reveal>{c.intro}</p>
        </header>

        <div className="boutique-list">
          {c.items.map((p, i) => (
            <article className={`product-row ${i % 2 ? 'product-row--rev' : ''}`} key={p.id} data-reveal>
              <ProductObject index={p.id} name={p.name} />
              <div className="product-info">
                <span className="product-info__index label label--gold">0{i + 1}</span>
                <h2 className="product-info__name">{p.name}</h2>
                <p className="product-info__desc">{p.desc}</p>
                <div className="product-info__foot">
                  <span className="product-info__price">
                    <span className="label">{c.priceLabel}</span>
                    {p.price}
                  </span>
                  <button className="btn" onClick={onReserve}>{c.cta}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
