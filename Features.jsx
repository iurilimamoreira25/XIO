// XIO Minimal — Features + Steps
function Features() {
  return (
    <section className="section container" id="metodo">
      <div className="features-head">
        <h2>Tudo que você precisa.<br/>Nada que você não precisa.</h2>
        <p className="muted">
          A XIO foi feita pra quem nunca programou. Sem termos técnicos,
          sem rodeios. Você abre o computador, segue o passo a passo,
          e sai construindo coisas reais.
        </p>
      </div>
      <div className="features-grid">
        <div className="feature">
          <div className="feature-num">01</div>
          <h3>Aulas práticas</h3>
          <p>Aulas curtas, direto ao ponto. Você abre o VS Code junto comigo e a gente constrói lado a lado.</p>
        </div>
        <div className="feature">
          <div className="feature-num">02</div>
          <h3>Projetos reais</h3>
          <p>Nada de "olá mundo". Você sai com landing pages, sites de cliente e apps que dá pra cobrar.</p>
        </div>
        <div className="feature">
          <div className="feature-num">03</div>
          <h3>Claude + VS Code</h3>
          <p>As ferramentas que a gente usa todo dia. Setup zero. Funciona no Mac, no Windows e no Linux.</p>
        </div>
        <div className="feature">
          <div className="feature-num">04</div>
          <h3>Comunidade fechada</h3>
          <p>Discord com os outros alunos e a gente. Tira dúvida, mostra projeto, fecha cliente junto.</p>
        </div>
        <div className="feature">
          <div className="feature-num">05</div>
          <h3>Como cobrar</h3>
          <p>Aula sobre orçamento, contrato, pagamento. Como achar primeiro cliente sem ter portfolio.</p>
        </div>
        <div className="feature">
          <div className="feature-num">06</div>
          <h3>Acesso vitalício</h3>
          <p>Comprou uma vez, é seu. Atualizações grátis. Sem mensalidade depois.</p>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section container">
      <div className="steps">
        <div className="steps-left">
          <h2>Em 3 etapas.<br/><span className="thin">Sem mistério.</span></h2>
          <p>
            A gente foi do zero ao primeiro projeto vendido em semanas.
            Você vai pelo mesmo caminho — só que com a gente puxando você.
          </p>
        </div>
        <div className="steps-list">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-body">
              <h4>Você instala as ferramentas</h4>
              <p>VS Code + Claude. Em 15 minutos você tá com tudo rodando, mesmo nunca tendo programado.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-body">
              <h4>Constrói o primeiro projeto</h4>
              <p>Junto comigo, na primeira aula. Site, app, landing — você escolhe. Sai funcionando de verdade.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-body">
              <h4>Vende</h4>
              <p>A gente te mostra como cobrar, fechar primeiro cliente e tirar isso do papel pra entrar dinheiro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
