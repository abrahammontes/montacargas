import { useState } from 'react';
import { useEquipos, Equipo } from '../hooks/useEquipos';
import styles from './Admin.module.css';

const Admin = () => {
  const { equipos, addEquipo, updateEquipo, deleteEquipo, resetEquipos } = useEquipos();
  const [formData, setFormData] = useState<Partial<Equipo>>({
    nombre: '',
    tipo: 'Eléctrico',
    capacidad: '',
    altura: '',
    combustible: '',
    precio: '',
    badge: 'Nuevo',
    imagen: '/images/logo.jpg'
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.capacidad || !formData.precio) return;

    if (editingId) {
      updateEquipo(editingId, formData);
      setEditingId(null);
    } else {
      addEquipo(formData as Omit<Equipo, 'id'>);
    }
    setFormData({
      nombre: '',
      tipo: 'Eléctrico',
      capacidad: '',
      altura: '',
      combustible: '',
      precio: '',
      badge: 'Nuevo',
      imagen: '/images/logo.jpg'
    });
  };

  const handleEdit = (equipo: Equipo) => {
    setFormData(equipo);
    setEditingId(equipo.id);
  };

  const handleDelete = (id: number) => {
    if (confirm('¿Estás seguro de eliminar este equipo?')) {
      deleteEquipo(id);
    }
  };

  return (
    <section className={styles.admin}>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Panel de Administración</h1>
        <a href="/" className={styles.backBtn}>← Volver al sitio</a>
      </div>

      <div className={styles.content}>
        <div className={styles.addForm}>
          <h2 className={styles.formTitle}>
            {editingId ? 'Editar Equipo' : 'Agregar Nuevo Equipo'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  className={styles.formInput}
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Germont E25"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tipo</label>
                <select
                  name="tipo"
                  className={styles.formSelect}
                  value={formData.tipo}
                  onChange={handleChange}
                >
                  <option value="Eléctrico">Eléctrico</option>
                  <option value="Combustión">Combustión</option>
                  <option value="Pasillo Angosto">Pasillo Angosto</option>
                  <option value="Reach">Reach</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Capacidad *</label>
                <input
                  type="text"
                  name="capacidad"
                  className={styles.formInput}
                  value={formData.capacidad}
                  onChange={handleChange}
                  placeholder="Ej: 2,500 kg"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Altura</label>
                <input
                  type="text"
                  name="altura"
                  className={styles.formInput}
                  value={formData.altura}
                  onChange={handleChange}
                  placeholder="Ej: 4.5 m"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Combustible</label>
                <input
                  type="text"
                  name="combustible"
                  className={styles.formInput}
                  value={formData.combustible}
                  onChange={handleChange}
                  placeholder="Ej: Eléctrico 48V"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Precio *</label>
                <input
                  type="text"
                  name="precio"
                  className={styles.formInput}
                  value={formData.precio}
                  onChange={handleChange}
                  placeholder="Desde $450,000"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Badge</label>
                <select
                  name="badge"
                  className={styles.formSelect}
                  value={formData.badge}
                  onChange={handleChange}
                >
                  <option value="Nuevo">Nuevo</option>
                  <option value="Renta">Renta</option>
                  <option value="Usado">Usado</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Imagen</label>
                <select
                  name="imagen"
                  className={styles.formSelect}
                  value={formData.imagen}
                  onChange={handleChange}
                >
                  <option value="/images/logo.jpg">Imagen 1</option>
                  <option value="/images/Nissan2.jpg">Imagen 2</option>
                  <option value="/images/Nissan3.jpg">Imagen 3</option>
                  <option value="/images/Nissan4.jpg">Imagen 4</option>
                </select>
              </div>
            </div>
            <button type="submit" className={styles.submitBtn}>
              {editingId ? 'Actualizar Equipo' : 'Agregar Equipo'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormData({
                    nombre: '',
                    tipo: 'Eléctrico',
                    capacidad: '',
                    altura: '',
                    combustible: '',
                    precio: '',
                    badge: 'Nuevo',
                    imagen: '/images/logo.jpg'
                  });
                }}
                className={styles.submitBtn}
                style={{ marginLeft: '1rem', background: '#757575' }}
              >
                Cancelar
              </button>
            )}
          </form>
        </div>

        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Capacidad</th>
                <th>Precio</th>
                <th>Status</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {equipos.map((equipo) => (
                <tr key={equipo.id}>
                  <td><img src={equipo.imagen} alt={equipo.nombre} /></td>
                  <td>{equipo.nombre}</td>
                  <td>{equipo.tipo}</td>
                  <td>{equipo.capacidad}</td>
                  <td>{equipo.precio}</td>
                  <td>
                    <span className={`${styles.badge} ${equipo.badge === 'Nuevo' ? styles.badgeNuevo : equipo.badge === 'Renta' ? styles.badgeRenta : styles.badgeUsado}`}>
                      {equipo.badge}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.editBtn}
                        onClick={() => handleEdit(equipo)}
                      >
                        Editar
                      </button>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(equipo.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={resetEquipos}
          className={styles.submitBtn}
          style={{ marginTop: '2rem', background: '#dc2626' }}
        >
          Restablecer Equipos por Defecto
        </button>
      </div>
    </section>
  );
};

export default Admin;