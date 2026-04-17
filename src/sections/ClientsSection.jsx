import { motion } from 'framer-motion';

const clients = [
  'Governo do Estado',
  'Sesc / Senac',
  'BRDE',
  'Intelbrás',
  'Engie',
  'Portobello',
  'FIESC',
  'Bunge',
  'Toyota',
  'Entre outros grandes players',
];

function ClientsSection() {
  return (
    <section className="section">
      <div className="container section-grid clients-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Clientes e contas</span>
          <h2 className="section-title">Relacionamento com marcas, instituições e contas de peso no mercado.</h2>
          <p className="section-description">
            O histórico de atuação de Giórgia passa por organizações reconhecidas, reforçando sua credibilidade e a confiança conquistada ao longo dos anos.
          </p>
        </motion.div>

        <motion.div
          className="logo-cloud glass-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          {clients.map((item) => (
            <span key={item} className="logo-pill">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ClientsSection;
