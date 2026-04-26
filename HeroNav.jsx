// XIO Minimal — Nav + Hero
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">XIO</div>
        <div className="nav-links">
          <a href="#metodo">Método</a>
          <a href="#fundadores">Fundadores</a>
          <a href="#preco">Preço</a>
          <a href="#faq">FAQ</a>
          <a href="#cta" className="btn btn-primary">Começar</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero container">
      <div className="eyebrow">XIO · Programar com IA</div>
      <h1>
        Programa do zero.<br/>
        <span className="thin">Com inteligência artificial.</span>
      </h1>
      <p className="hero-sub">
        Sem faculdade. Sem rodeios. Sem precisar saber código antes.
        A gente te ensina a construir e vender — em semanas, não anos.
      </p>
      <div className="hero-cta">
        <a href="#cta" className="btn btn-primary btn-lg">Quero começar</a>
        <a href="#metodo" className="btn btn-ghost btn-lg">Como funciona</a>
      </div>
      <div className="hero-meta">
        <div className="hero-meta-item"><strong>+200</strong> alunos ativos</div>
        <div className="hero-meta-divider"></div>
        <div className="hero-meta-item"><strong>2</strong> fundadores · paraenses</div>
        <div className="hero-meta-divider"></div>
        <div className="hero-meta-item">100% online</div>
      </div>
    </section>
  );
}

function StatRow() {
  return (
    <div className="container">
      <div className="stat-row">
        <div className="stat-cell">
          <div className="stat-num">21</div>
          <div className="stat-label">anos — idade dos fundadores quando criaram a XIO</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">0</div>
          <div className="stat-label">faculdade necessária pra começar</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">~6</div>
          <div className="stat-label">semanas até seu primeiro projeto vendido</div>
        </div>
      </div>
    </div>
  );
}
