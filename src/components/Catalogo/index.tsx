import { useState, useMemo } from 'react';
import { useEquipos } from '../../hooks/useEquipos';
import styles from './Catalogo.module.css';

const Catalogo = () => {
  const { equipos } = useEquipos();
  const [filtro, setFiltro] = useState('todos');

  const equiposFiltrados = useMemo(() => {
    if (filtro === 'todos') return equipos;
    if (filtro === 'electrico') return equipos.filter(e => e.tipo === 'Eléctrico');
    if (filtro === 'combustion') return equipos.filter(e => e.tipo === 'Combustión');
    if (filtro === 'renta') return equipos.filter(e => e.badge === 'Renta');
    return equipos;
  }, [equipos, filtro]);

  return (
    <section id="equipos" className={styles.catalogo}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestros Equipos</h2>
          <p className={styles.sectionSubtitle}>
            Encuentra el montacargas ideal para tu operación. Contamos con equipos nuevos y en renta.
          </p>
        </div>

        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${filtro === 'todos' ? styles.active : ''}`}
            onClick={() => setFiltro('todos')}
          >
            Todos
          </button>
          <button
            className={`${styles.filterBtn} ${filtro === 'electrico' ? styles.active : ''}`}
            onClick={() => setFiltro('electrico')}
          >
            Eléctricos
          </button>
          <button
            className={`${styles.filterBtn} ${filtro === 'combustion' ? styles.active : ''}`}
            onClick={() => setFiltro('combustion')}
          >
            Combustión
          </button>
          <button
            className={`${styles.filterBtn} ${filtro === 'renta' ? styles.active : ''}`}
            onClick={() => setFiltro('renta')}
          >
            En Renta
          </button>
        </div>

        <div className={styles.grid}>
          {equiposFiltrados.map((equipo) => (
            <div key={equipo.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={equipo.imagen} alt={equipo.nombre} />
                <span className={`${styles.cardBadge} ${equipo.badge === 'Nuevo' ? styles.badgeNuevo : styles.badgeRenta}`}>
                  {equipo.badge}
                </span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{equipo.nombre}</h3>
                <div className={styles.cardSpecs}>
                  <span className={styles.spec}>
                    <svg className={styles.specIcon} viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {equipo.capacidad}
                  </span>
                  <span className={styles.spec}>
                    <svg className={styles.specIcon} viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    {equipo.tipo}
                  </span>
                </div>
                <p className={styles.cardPrice}>
                  {equipo.precio} <span>+IVA</span>
                </p>
                <div className={styles.cardActions}>
                  <a href="#contacto" className={`${styles.cardBtn} ${styles.cardBtnPrimary}`}>
                    Cotizar
                  </a>
                  <button className={`${styles.cardBtn} ${styles.cardBtnSecondary}`}>
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {equiposFiltrados.length === 0 && (
          <p style={{ textAlign: 'center', padding: '2rem', color: '#757575' }}>
            No se encontraron equipos con ese filtro.
          </p>
        )}
      </div>
    </section>
  );
};

export default Catalogo;