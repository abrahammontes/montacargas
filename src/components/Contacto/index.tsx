import { useState } from 'react';
import styles from './Contacto.module.css';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  tipo: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
}

const Contacto = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipo: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSending(false);
    setSubmitted(true);
    
    const mensaje = `
Nuevo contacto desde Germont Montacargas:
- Nombre: ${formData.nombre}
- Empresa: ${formData.empresa}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}
-Tipo: ${formData.tipo}
- Mensaje: ${formData.mensaje}
    `.trim();
    
    console.log('Form submitted:', mensaje);
    setFormData({ nombre: '', empresa: '', email: '', telefono: '', tipo: '', mensaje: '' });
  };

  if (submitted) {
    return (
      <section id="contacto" className={styles.contacto}>
        <div className="container">
          <div className={styles.formCard} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-gray-800)' }}>
              ¡Gracias por tu cotización!
            </h3>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: '2rem' }}>
              Nuestro equipo te contactará en menos de 24 horas.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn btn-primary"
            >
              Enviar Otra Cotización
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className={styles.contacto}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Cotiza Tu Montacargas</h2>
          <p className={styles.sectionSubtitle}>
            Contáctanos para una cotización personalizada. Nuestro equipo te responderá en menos de 24 horas.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nombre Completo *</label>
                <input
                  type="text"
                  name="nombre"
                  className={styles.formInput}
                  value={formData.nombre}
                  onChange={handleChange}
                  style={errors.nombre ? { borderColor: '#dc2626' } : {}}
                />
                {errors.nombre && (
                  <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>{errors.nombre}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  className={styles.formInput}
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email *</label>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleChange}
                  style={errors.email ? { borderColor: '#dc2626' } : {}}
                />
                {errors.email && (
                  <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>{errors.email}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  className={styles.formInput}
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tipo de Equipo</label>
                <select
                  name="tipo"
                  className={styles.formSelect}
                  value={formData.tipo}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="compra">Compra</option>
                  <option value="renta">Renta</option>
                  <option value="servicio">Servicio Técnico</option>
                  <option value="refacciones">Refacciones</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mensaje</label>
                <textarea
                  name="mensaje"
                  className={styles.formTextarea}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Describe el equipo que necesitas..."
                />
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary ${styles.formSubmit}`}
                disabled={sending}
              >
                {sending ? 'Enviando...' : 'Enviar Cotización'}
              </button>
            </form>
          </div>

          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Información de Contacto</h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h4>Dirección</h4>
                  <p>Av. Principal #123, Zona Industrial<br />Ciudad de México, CDMX</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h4>Teléfono</h4>
                  <p>+52 (55) 1234-5678<br />+52 (55) 9876-5432</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h4>Email</h4>
                  <p>contacto@nissanforklift.com.mx<br />servicio@nissanforklift.com.mx</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h4>Horario</h4>
                  <p>Lunes a Viernes: 8:00 - 18:00<br />Sábado: 8:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;