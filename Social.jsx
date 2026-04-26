// XIO Minimal — Tweet wall + Founders
function TweetWall() {
  const tweets = [
    {name: 'Lucas P.', handle: '@lucasprgr', initial: 'L',
     body: <>Comecei do zero, sem nunca ter visto código. Em <b>3 semanas</b> tava entregando primeiro freela. A XIO me destravou.</>},
    {name: 'Mariana S.', handle: '@maris.dev', initial: 'M',
     body: <>Tava perdida tentando aprender programação por conta. Aqui é direto, sem rodeio. <b>Cobrei meu primeiro cliente</b> mês passado.</>},
    {name: 'Ricardo M.', handle: '@ricamds', initial: 'R',
     body: <>Cara, achei que IA era só hype. Aí entrei na XIO e vi que dá pra <b>construir coisa séria</b>. Mudou minha cabeça.</>},
    {name: 'Julia T.', handle: '@juliacode', initial: 'J',
     body: <>Saí da odonto pra programação no fim do ano passado. <b>Comunidade da XIO me carregou</b>. Hoje vivo só de projeto.</>},
    {name: 'Pedro H.', handle: '@phenrique', initial: 'P',
     body: <>O método é simples: faz junto. Não tem aula chata, não tem teoria. <b>Primeiro projeto na primeira semana.</b></>},
    {name: 'Camila R.', handle: '@camirochaa', initial: 'C',
     body: <>Tinha medo de IA tirar emprego. Agora uso ela como funcionária. <b>Triplicou minha velocidade.</b></>},
  ];
  return (
    <section className="section container">
      <div className="tweets-head">
        <div className="eyebrow">Quem já passou</div>
        <h2>Histórias reais de quem fez o curso.</h2>
      </div>
      <div className="tweets">
        {tweets.map((t, i) => (
          <div key={i} className="tweet">
            <div className="tweet-head">
              <div className="tweet-avatar">{t.initial}</div>
              <div>
                <div className="tweet-name">{t.name}</div>
                <div className="tweet-handle">{t.handle}</div>
              </div>
            </div>
            <div className="tweet-body">{t.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="section container" id="fundadores">
      <div className="founders">
        <div className="founders-photos">
          <div className="founder-photo"><img src="../../assets/iuri-portrait.jpeg" alt="Iuri"/></div>
          <div className="founder-photo"><img src="../../assets/octavio-portrait.jpeg" alt="Octavio"/></div>
        </div>
        <div className="founders-text">
          <div className="eyebrow" style={{marginBottom: 16}}>Os fundadores</div>
          <h2>Iuri & Octavio.<br/>Paraenses, 21.</h2>
          <p>
            <b>Octavio</b> mora no Canadá e me ensinou a programar usando IA.
            Eu, <b>Iuri</b>, vinha da odontologia — nunca tinha tocado em código.
          </p>
          <p>
            Foi muito mais fácil do que eu imaginava. Em pouco tempo já tava criando coisas
            que valiam dinheiro de verdade. A XIO é isso: a gente te ensina o caminho que a gente fez.
          </p>
          <div className="founders-meta">
            <div className="founder-tag">
              <div className="founder-tag-name">Iuri Moreira</div>
              <div className="founder-tag-role">Brasil · ex-odontologia</div>
            </div>
            <div className="founder-tag">
              <div className="founder-tag-name">Octavio</div>
              <div className="founder-tag-role">Canadá · mentor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
