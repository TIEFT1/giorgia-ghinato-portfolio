import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <section className="section" id="sobre">
      <div className="container section-grid about-grid">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Sobre</span>
          <h2 className="section-title">Uma trajetória construída com presença, repertório e visão de negócio.</h2>
        </motion.div>

        <motion.div
          className="about-copy glass-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          <p>
            Giórgia Ghinato desenvolveu sua carreira com base em algo raro no mercado: a capacidade de unir leitura estratégica,
            sensibilidade comercial e execução consistente. Ao longo de mais de 30 anos, esteve à frente de negociações,
            planejamentos de mídia, campanhas e operações que exigiam não apenas experiência, mas maturidade para entender pessoas,
            marcas, oportunidades e timing de mercado.
          </p>
          <p>
            Sua atuação transita com naturalidade entre o marketing, a gestão comercial e o relacionamento com grandes contas,
            sempre com foco em construir valor real. Em ambientes como agências, grupos empresariais e shopping centers,
            consolidou uma reputação ligada à credibilidade, à inteligência estratégica e à entrega de resultados sustentáveis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;