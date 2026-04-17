import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Executiva sênior em marketing, mídia e negócios</span>
          <h1>
            <span className="hero-name">Giórgia Ghinato</span>
            <span className="hero-title">
              conecta inteligência de mercado à execução comercial com consistência e precisão.
            </span>
          </h1>

          <p className="hero-description">
            Mais de três décadas conduzindo operações, negociando grandes contas, planejando mídia on e off-line e
            impulsionando marcas, campanhas e mix comercial com consistência, sofisticação e leitura real de negócio.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="button button-primary">
              Entrar em contato
            </a>
            <a href="#experiencia" className="button button-secondary">
              Ver trajetória
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>30+</strong>
              <span>Anos de experiência</span>
            </div>
            <div>
              <strong>13</strong>
              <span>Contratos fechados em operação estratégica</span>
            </div>
            <div>
              <strong>+50%</strong>
              <span>Crescimento em vendas em case de shopping center</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-wrapper glass-card">
            <img
              src="/images/giorgia.jpeg"
              alt="Giórgia Ghinato"
              className="hero-image"
            />

            <div className="hero-image-overlay">
              <span className="card-label">Perfil executivo</span>
              <h2>Presença, estratégia e experiência que se traduzem em resultado.</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;