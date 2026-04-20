import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/523311436802?text=Hola,%20me%20interesa%20una%20cotizacion!" 
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <img src="/images/Android_App_Icon_2026.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;