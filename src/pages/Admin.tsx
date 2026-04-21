import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEquipos, Equipo } from '../hooks/useEquipos';
import styles from './Admin.module.css';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/admin');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Germont Admin</h1>
        <p className={styles.loginSubtitle}>Ingresa tus credenciales</p>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input
              type="email"
              className={styles.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@germont.mx"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Contraseña</label>
            <input
              type="password"
              className={styles.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Iniciar Sesión
          </button>
        </form>
        
        <a href="/" className={styles.backLink}>← Volver al sitio</a>
      </div>
    </div>
  );
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { equipos, addEquipo, updateEquipo, deleteEquipo, resetEquipos } = useEquipos();
  
  const [formData, setFormData] = useState<Partial<Equipo>>({
    nombre: '',
    tipo: 'Eléctrico',
    capacidad: '',
    altura: '',
    combustible: '',
    precio: '',
    badge: 'Nuevo',
    imagen: '/images/logo.png'
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string>('/images/logo.png');
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    navigate('/admin', { replace: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageSelect = (imagePath: string) => {
    setFormData({ ...formData, imagen: imagePath });
    setPreviewImage(imagePath);
    setShowImageModal(false);
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
      imagen: '/images/logo.png'
    });
    setPreviewImage('/images/logo.png');
  };

  const handleEdit = (equipo: Equipo) => {
    setFormData(equipo);
    setPreviewImage(equipo.imagen);
    setEditingId(equipo.id);
  };

  const handleDelete = (id: number) => {
    if (confirm('¿Estás seguro de eliminar este equipo?')) {
      deleteEquipo(id);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <section className={styles.admin}>
      <div className={styles.adminHeader}>
        <h1 className={styles.adminTitle}>Panel de Administración</h1>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Cerrar Sesión
        </button>
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
                <label className={styles.formLabel}>Estado</label>
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
                <div 
                  className={styles.imagePreview}
                  onClick={() => setShowImageModal(true)}
                >
                  <img src={previewImage} alt="Preview" />
                  <span>Click para cambiar</span>
                </div>
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
                    imagen: '/images/logo.png'
                  });
                  setPreviewImage('/images/logo.png');
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
                <th>Estado</th>
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

      {showImageModal && (
        <div className={styles.modal} onClick={() => setShowImageModal(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h3>Seleccionar Imagen</h3>
            <div className={styles.imageGrid}>
              {['/images/logo.png', '/images/Nissan1.jpg', '/images/Nissan2.jpg', '/images/Nissan3.jpg', '/images/Nissan4.jpg'].map(img => (
                <div 
                  key={img}
                  className={`${styles.imageOption} ${previewImage === img ? styles.selected : ''}`}
                  onClick={() => handleImageSelect(img)}
                >
                  <img src={img} alt={img} />
                </div>
              ))}
            </div>
            <button onClick={() => setShowImageModal(false)} className={styles.closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const Admin = () => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <LoginForm />;
  }
  
  return <AdminPanel />;
};

export default Admin;