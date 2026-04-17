import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Venta y Renta de Montacargas</p>
        <h1 className={styles.heroTitle}>
          Potencia tu operación con <span>Nissan Forklift</span>
        </h1>
        <p className={styles.heroText}>
          Equipos de alta calidad para manejo de materiales. 
          Contamos con montacargas eléctricos y de combustión, servicio técnico especializado y refacciones originales.
        </p>
        <div className={styles.heroButtons}>
          <a href="#equipos" className="btn btn-primary">
            Ver Equipos
          </a>
          <a href="#contacto" className="btn btn-outline">
            Cotizar Ahora
          </a>
        </div>
      </div>
      <div className={styles.scrollDown}>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;