import logoMark from '../../assets/logo-mark.png';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className={styles.brand}>
              <span className={styles.logoBadge}>
                <img src={logoMark} alt="Agos Solutions" className={styles.logoMark} />
              </span>
              <span className={styles.brandName}>Agos Solutions</span>
            </div>
            <p className={styles.tagline}>Intelligent solutions. Seamless flow.</p>
          </div>

          <div className={styles.cols}>
            <div>
              <div className={styles.colTitle}>Site</div>
              <div className={styles.colLinks}>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#process">Process</a>
                <a href="#faq">FAQ</a>
              </div>
            </div>
            <div>
              <div className={styles.colTitle}>Contact</div>
              <div className={styles.colLinks}>
                <a href="mailto:hello@agossolutions.com">hello@agossolutions.com</a>
                <a href="#contact">Book a Consultation</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Agos Solutions. All rights reserved.</span>
          <span>Built in-house, naturally.</span>
        </div>
      </div>
    </footer>
  );
}
