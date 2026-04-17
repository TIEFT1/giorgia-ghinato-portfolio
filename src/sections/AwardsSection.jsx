import { motion } from 'framer-motion';

function AwardsSection() {
  return (
    <section className="section">
      <div className="container awards-grid">
        <motion.article
          className="glass-card award-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Premiações</span>
          <h2 className="section-title">Reconhecimento que reforça autoridade.</h2>
          <p>
            Entre os marcos de sua trajetória, destaca-se o reconhecimento como <strong>Profissional de Mídia do Ano</strong> pela ARP,
            refletindo não apenas excelência técnica, mas relevância efetiva dentro do mercado.
          </p>
          <p>
            A presença em eventos como <strong>MaxiMídia</strong> e <strong>Latam Retail Show</strong> também evidencia atualização contínua,
            repertório e conexão com as transformações do setor.
          </p>
        </motion.article>

        <motion.article
          className="glass-card award-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          <span className="section-tag">Formação</span>
          <h2 className="section-title">Formação construída junto da prática.</h2>
          <p>
            Com formação técnica em publicidade e graduação em <strong>Administração em andamento</strong>, Giórgia amplia sua experiência de mercado com fundamentos sólidos de gestão, estratégia e tomada de decisão.
          </p>
          <p>
            Essa combinação entre prática consolidada e desenvolvimento acadêmico fortalece ainda mais sua visão executiva.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

export default AwardsSection;
