import { motion } from 'framer-motion';

const experiences = [
  {
    phase: 'Início da trajetória',
    title: 'Porto Alegre',
    description:
      'Entrada no mercado com atuação prática em comunicação e relacionamento comercial, desenvolvendo base técnica e repertório de mercado.',
  },
  {
    phase: 'Estruturação profissional',
    title: 'Agência Escala',
    description:
      'Atuação em ambiente de agência, aprofundando conhecimento em planejamento de mídia, dinâmica de contas e construção de raciocínio estratégico.',
  },
  {
    phase: 'Consolidação em agência',
    title: 'Propague',
    description:
      'Participação em diferentes fases da operação, com envolvimento em planejamento, execução de campanhas e relacionamento com clientes.',
  },
  {
    phase: 'Atuação em shopping center',
    title: 'Shopping Itaguaçu',
    description:
      'Foco em comercialização e negociação, com fechamento de contratos relevantes e desenvolvimento do mix de lojas.',
  },
  {
    phase: 'Expansão de resultados',
    title: 'Shopping Iguatemi',
    description:
      'Atuação em estratégias comerciais que contribuíram para crescimento expressivo de vendas e entrada de novas marcas.',
  },
  {
    phase: 'Atuação executiva',
    title: 'Riomar, Balneário, Grupo Fórmula e Dimas',
    description:
      'Participação em operações de maior complexidade, com foco em gestão, negociação e desenvolvimento de resultados sustentáveis.',
  },
];

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="container">
        <div className="experience-top">
          <motion.div
            className="experience-left"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <span className="section-tag">Experiência profissional</span>
            <h2 className="section-title">
              Uma timeline que revela consistência, evolução e relevância no mercado.
            </h2>
            <p className="section-description">
              A carreira de Giórgia é marcada por ambientes exigentes, decisões estratégicas e uma
              presença profissional que se fortaleceu em cada etapa.
            </p>
          </motion.div>

          <motion.div
            className="experience-highlight glass-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="card-label">Resumo</span>

            <h3>Mais de três décadas de atuação estratégica</h3>

            <p>
              Experiência consolidada em marketing, mídia e gestão comercial, com forte atuação em
              grandes contas, shopping centers e negociações de alto impacto.
            </p>

            <div className="highlight-stats">
              <div>
                <strong>30+</strong>
                <span>anos de carreira</span>
              </div>

              <div>
                <strong>+50%</strong>
                <span>crescimento em vendas</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="timeline timeline-premium">
          {experiences.map((item, index) => (
            <motion.article
              key={item.title}
              className="timeline-item glass-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
            >
              <span className="timeline-period">{item.phase}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;