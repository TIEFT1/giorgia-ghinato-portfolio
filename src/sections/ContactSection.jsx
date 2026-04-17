import { motion } from 'framer-motion';

function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-layout">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-tag">Contato</span>
          <h2 className="section-title">Vamos abrir uma conversa de alto nível.</h2>
          <p className="section-description">
            Para projetos, consultorias, oportunidades estratégicas ou conexões profissionais, este é o ponto de partida para um relacionamento relevante.
          </p>
        </motion.div>

        <motion.div
          className="contact-card glass-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.08 }}
        >
          <div className="contact-card glass-card">
            <div className="contact-list">

              <div className="contact-item">
                <span>Email</span>
                <strong>g.ghinato@gmail.com</strong>
              </div>

              <div className="contact-item">
                <span>Localização</span>
                <strong>Santa Catarina, Brasil</strong>
              </div>

            </div>

            <div className="contact-divider" />

            <div className="contact-actions">
              <a href="mailto:g.ghinato@gmail.com" className="button button-primary">
                Entrar em contato
              </a>

              <a href="#" className="button button-secondary">
                Conectar-se profissionalmente
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
