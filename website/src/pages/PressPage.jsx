// LA TABLE D'ANTONIO SALVATORE — Page · Presse
// Sober and prestigious: a discreet press bar of wordmark placeholders, then
// pull-quote article excerpts. Typography-led, minimal imagery.
import PageShell from '../components/PageShell'

export default function PressPage({ tr, lang, setLang }) {
  const c = tr.press

  return (
    <PageShell tr={tr} lang={lang} setLang={setLang}>
      <div className="press-page">
        <header className="section press-hero">
          <div className="section__head" data-reveal>
            <span className="gold-line" data-line />
            <span className="label label--gold">{c.label}</span>
          </div>
          <h1 className="chef-hero__title" data-reveal>{c.title}</h1>
          <p className="chef-hero__intro" data-reveal>{c.intro}</p>
        </header>

        {/* press bar — placeholder wordmarks (no real logos) */}
        <div className="press-bar" data-reveal-group>
          {c.logos.map((name) => (
            <span className="press-logo" key={name}>{name}</span>
          ))}
        </div>

        <div className="press-list">
          {c.articles.map((a, i) => (
            <article className="press-article" key={i} data-reveal>
              <div className="press-article__meta">
                <span className="press-article__source">{a.source}</span>
                <span className="press-article__date">{a.date}</span>
              </div>
              <blockquote className="press-article__quote">«&nbsp;{a.quote}&nbsp;»</blockquote>
              <a className="press-article__link" href="#" onClick={(e) => e.preventDefault()}>
                {c.readCta}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
