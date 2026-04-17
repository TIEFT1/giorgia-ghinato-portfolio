import { motion } from 'framer-motion';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Contato', href: '#contato' },
];

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container header-inner">
        <a href="#top" className="brand-mark" aria-label="Ir para o topo">
          <span className="brand-dot" />
          <div>
            <strong>Giórgia Ghinato</strong>
            <span>Marketing, mídia e gestão comercial</span>
          </div>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="button button-primary button-compact">
          Conectar-se
        </a>
      </div>
    </motion.header>
  );
}

export default Header;
