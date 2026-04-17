import { motion } from 'framer-motion';

const highlights = [
  '13 contratos fechados no Shopping Itaguaçu',
  'Marcas como Petz, Giraffas e Havanna no radar de negociação e resultado',
  '+50% em vendas no Iguatemi',
  '+30 marcas incorporadas ao mix em operação estratégica',
];

function ResultsSection() {
  return (
    <section className="section accent-section" id="resultados">
      <div className="container results-layout">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-tag">Resultados</span>
          <h2 className="section-title">Resultado percebido, valor concreto e credibilidade construída no mercado.</h2>
          <p className="section-description">
            Mais do que presença institucional, a atuação de Giórgia demonstra impacto mensurável. Seu trabalho se conecta a contratos,
            vendas, qualificação de mix e decisões que reposicionam operações com inteligência e retorno.
          </p>
        </motion.div>

        <motion.div
          className="results-card glass-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          <div className="metric-grid">
            <div className="metric-box">
              <strong>13</strong>
              <span>contratos fechados</span>
            </div>
            <div className="metric-box">
              <strong>+50%</strong>
              <span>crescimento em vendas</span>
            </div>
            <div className="metric-box">
              <strong>+30</strong>
              <span>novas marcas no mix</span>
            </div>
            <div className="metric-box">
              <strong>Alta</strong>
              <span>capacidade de negociação</span>
            </div>
          </div>

          <div className="result-points">
            {highlights.map((item) => (
              <div key={item} className="result-point">
                <span className="result-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResultsSection;
