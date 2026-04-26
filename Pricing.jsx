// XIO Minimal — Pricing + FAQ + Final CTA + Footer
function Pricing() {
  const Check = () => (
    <svg className="check" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5L6.5 12L13 4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <section className="section container" id="preco">
      <div className="pricing-wrap">
        <div className="pricing-left">
          <div className="eyebrow" style={{marginBottom: 16}}>Investimento</div>
          <h2>Menos do que <span className="thin">você imagina.</span></h2>
          <p>Sem mensalidade. Sem surpresa. Pagou uma vez, é seu pra sempre. Atualizações inclusas.</p>
        </div>
        <div className="pricing-card">
          <div className="pricing-eyebrow">Plano único · Acesso vitalício</div>
          <div className="pricing-was">de R$ 89,90</div>
          <div className="pricing-now">
            <span className="currency">R$</span>
            <span className="amount">49,90</span>
          </div>
          <div className="pricing-tagline">à vista · Pix, cartão ou boleto</div>
          <div className="pricing-divider"></div>
          <div className="pricing-bullets">
            <div className="pricing-bullet"><Check/>Curso completo + projetos práticos</div>
            <div className="pricing-bullet"><Check/>Comunidade fechada no Discord</div>
            <div className="pricing-bullet"><Check/>Aula de como cobrar e achar cliente</div>
            <div className="pricing-bullet"><Check/>Atualizações vitalícias</div>
            <div className="pricing-bullet"><Check/>Garantia de 7 dias</div>
          </div>
          <a href="#" className="pricing-cta">Garantir minha vaga</a>
          <div className="pricing-fine">Pagamento 100% seguro · Cartão / Pix / Boleto</div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {q: 'Preciso saber programar antes?', a: 'Não. A XIO foi feita pra quem nunca abriu um editor de código. A gente começa do zero junto.'},
    {q: 'Quanto tempo leva pra ver resultado?', a: 'Depende da sua dedicação. A maioria dos alunos termina o primeiro projeto em 1-2 semanas e fecha o primeiro freela em 4-6 semanas.'},
    {q: 'Funciona em qualquer computador?', a: 'Sim. Mac, Windows ou Linux. As ferramentas (VS Code + Claude) são gratuitas e leves.'},
    {q: 'Vou conseguir mesmo cobrar por isso?', a: 'A gente tem aula específica sobre orçamento, contrato e como achar primeiro cliente. E a comunidade ajuda muito nessa parte.'},
    {q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia. Se não rolar, devolvemos 100% do valor sem perguntar nada.'},
    {q: 'Como funciona o suporte?', a: 'Discord ativo todos os dias. A gente, mentores e a turma toda. Dúvida sua é dúvida de mais 10 pessoas, então sempre tem resposta.'},
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section container" id="faq">
      <div className="faq-wrap">
        <div className="faq-head">
          <div className="eyebrow">FAQ</div>
          <h2>Perguntas que a gente sempre escuta.</h2>
        </div>
        {items.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              {item.q}
              <svg className="faq-icon" viewBox="0 0 18 18" fill="none">
                <path d="M9 4V14M4 9H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta container" id="cta">
      <h2>Bora?<br/><span style={{fontWeight: 300, color: 'var(--muted-2)'}}>Clica aí.</span></h2>
      <p>Se você chegou até aqui é porque tá interessado. Faz o cadastro e a gente se vê do outro lado.</p>
      <a href="#" className="btn btn-primary btn-lg">Quero entrar pra XIO</a>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo">XIO</div>
            <p>Programar do zero, com IA. De Belém pro mundo.</p>
          </div>
          <div className="footer-col">
            <h5>Curso</h5>
            <ul>
              <li><a href="#metodo">Método</a></li>
              <li><a href="#preco">Preço</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Sobre</h5>
            <ul>
              <li><a href="#fundadores">Fundadores</a></li>
              <li><a href="https://instagram.com/iurimoreiral">Instagram</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Termos</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="mailto:contato@xio.com.br">contato@xio.com.br</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 XIO · Pará, Brasil</div>
          <div>Feito com Claude + VS Code</div>
        </div>
      </div>
    </footer>
  );
}
