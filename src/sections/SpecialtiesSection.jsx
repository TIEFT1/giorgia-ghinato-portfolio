import { motion } from 'framer-motion';

const specialties = [
  'Planejamento de mídia on e off-line',
  'Marketing estratégico',
  'Gestão comercial',
  'Negociação com grandes contas',
  'Campanhas e posicionamento',
  'Estratégia para shopping centers',
  'Desenvolvimento de mix e performance',
  'Relacionamento institucional e mercado',
];

function SpecialtiesSection() {
  return (
    <section className="section" id="especialidades">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Especialidades</span>
          <h2 className="section-title specialties-title">
            Competências construídas com profundidade, repertório e experiência real de mercado.
          </h2>
        </motion.div>

        <div className="card-grid">
          {specialties.map((item, index) => (
            <motion.article
              key={item}
              className="premium-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <span className="card-index">0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                Atuação orientada por estratégia, leitura de contexto e capacidade de transformar intenção de negócio em movimento de mercado.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialtiesSection;
