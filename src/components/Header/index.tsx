import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          <a href="/" className={styles.logo}>
            <img src="/images/logo.jpg" alt="Nissan Forklift" />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              <li><a href="#equipos" className={styles.navLink} onClick={handleNavClick}>Equipos</a></li>
              <li><a href="#caracteristicas" className={styles.navLink} onClick={handleNavClick}>Características</a></li>
              <li><a href="#contacto" className={styles.navLink} onClick={handleNavClick}>Contacto</a></li>
            </ul>
            <a href="#contacto" className={`btn btn-primary ${styles.ctaBtn}`}>
              Cotizar
            </a>
            <button 
              className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      {mobileOpen && (
        <div className={styles.mobileNav}>
          <ul className={styles.mobileNavLinks}>
            <li><a href="#equipos" onClick={handleNavClick}>Equipos</a></li>
            <li><a href="#caracteristicas" onClick={handleNavClick}>Características</a></li>
            <li><a href="#contacto" onClick={handleNavClick}>Contacto</a></li>
            <li><a href="#contacto" onClick={handleNavClick} className={styles.mobileCta}>Cotizar</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;