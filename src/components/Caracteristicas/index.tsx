import styles from './Caracteristicas.module.css';

const caracteristicas = [
  {
    titulo: 'Equipo Original',
    texto: 'Todos nuestros montacargas son 100% originales con refacciones genuine.',
    icono: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    titulo: 'Servicio Técnico',
    texto: 'Técnicos certificados con más de 10 años de experiencia en mantenimiento y reparación.',
    icono: (
      <svg viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2-7 0l-9.1 9.1c-.4.4-.7 1-.7 1.7V21c0 1.1.9 2 2 2h9.1c.7 0 1.3-.3 1.7-.7l9.1-9.1c.4-.4.4-1.1.2-1.7z"/>
      </svg>
    )
  },
  {
    titulo: 'Financiamiento',
    planes: 'Opciones de financiamiento flexible adaptées a las necesidades de tu empresa.',
    icono: (
      <svg viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    )
  },
  {
    titulo: 'Soporte 24/7',
    texto: 'Atención de emergencias disponible las 24 horas los 365 días del año.',
    icono: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    )
  }
];

const Caracteristicas = () => {
  return (
    <section id="caracteristicas" className={styles.caracteristicas}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>¿Por Qué Elegirnos?</h2>
          <p className={styles.sectionSubtitle}>
            Más de 25 años de experiencia satisfaciendo las necesidades de la industria mexicana.
          </p>
        </div>

        <div className={styles.grid}>
          {caracteristicas.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icono}
              </div>
              <h3 className={styles.cardTitle}>{item.titulo}</h3>
              <p className={styles.cardText}>{item.texto}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>25+</span>
            <span className={styles.statLabel}>Años de Experiencia</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3,200+</span>
            <span className={styles.statLabel}>Empresas Atendidas</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10,000+</span>
            <span className={styles.statLabel}>Equipos Entregados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;