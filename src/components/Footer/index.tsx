import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="Germont Montacargas" />
          </div>
          <p className={styles.brandText}>
            Líderes en venta y renta de montacargas en México. 
            Más de 25 años de experiencia satisfaciendo las necesidades de la industria.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.268 2.268 0 0 0-1.591-1.591c-1.426-.378-7.148-.378-7.148-.378s-5.722 0-7.148.378a2.268 2.268 0 0 0-1.591 1.591c-.378 1.426-.378 4.458-.378 4.458s0 3.032.378 4.458a2.268 2.268 0 0 0 1.591 1.591c1.426.378 7.148.378 7.148.378s5.722 0 7.148-.378a2.268 2.268 0 0 0 1.591-1.591c.378-1.426.378-4.458.378-4.458s0-3.032-.378-4.458zM9.818 15.114V8.526l5.409 3.294-5.409 3.294z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Equipos</h4>
          <ul>
            <li><a href="#equipos">Eléctricos</a></li>
            <li><a href="#equipos">Combustión</a></li>
            <li><a href="#equipos">Pasillo Angosto</a></li>
            <li><a href="#equipos">Reach Trucks</a></li>
            <li><a href="#equipos">En Renta</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Servicios</h4>
          <ul>
            <li><a href="#contacto">Venta</a></li>
            <li><a href="#contacto">Renta</a></li>
            <li><a href="#contacto">Mantenimiento</a></li>
            <li><a href="#contacto">Refacciones</a></li>
            <li><a href="#contacto">Capacitación</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contacto</h4>
          <ul>
            <li><a href="tel:+523328747228">+52 33 2874 7228</a></li>
            <li><a href="mailto:contacto@germont.mx">contacto@germont.mx</a></li>
            <li><a href="#">Marcelino Rentería #4097, Guadalajara, Jalisco, Mexico, CP 44820</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © 2025 Germont Montacargas México. Todos los derechos reservados.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Aviso de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;