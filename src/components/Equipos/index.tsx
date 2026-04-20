import { useEquipos } from '../../hooks/useEquipos';
import styles from './Equipos.module.css';

const Equipos = () => {
  const { equipos, loading } = useEquipos();

  if (loading) {
    return (
      <section id="equipos" className={styles.equipos}>
        <div className="container">
          <p>Cargando...</p>
        </div>
      </section>
    );
  }

  const tipos = ['Todos', 'Eléctrico', 'Combustión', 'Pasillo Angosto', 'Reach'];

  return (
    <section id="equipos" className={styles.equipos}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestros Equipos</h2>
          <p className={styles.sectionSubtitle}>
            Montacargas de alta calidad para cada necesidad
          </p>
        </div>

        <div className={styles.filterTabs}>
          {tipos.map(tipo => (
            <button key={tipo} className={styles.filterTab}>
              {tipo}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {equipos.map(equipo => (
            <div key={equipo.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={equipo.imagen} alt={equipo.nombre} />
                <span className={`${styles.badge} ${styles[equipo.badge.toLowerCase()]}`}>
                  {equipo.badge}
                </span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTipo}>{equipo.tipo}</span>
                <h3 className={styles.cardNombre}>{equipo.nombre}</h3>
                <div className={styles.cardSpecs}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Capacidad</span>
                    <span className={styles.specValue}>{equipo.capacidad}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Altura</span>
                    <span className={styles.specValue}>{equipo.altura}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Combustible</span>
                    <span className={styles.specValue}>{equipo.combustible}</span>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.precio}>{equipo.precio}</span>
                  <a 
                    href={`https://wa.me/523311436802?text=Hola,%20me%20interesa%20el%20${equipo.nombre}`}
                    className="btn btn-primary"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipos;