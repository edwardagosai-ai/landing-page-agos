import { useEffect, useState } from 'react';
import logoMark from '../../assets/logo-mark.png';
import styles from './Nav.module.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <img src={logoMark} alt="Agos Solutions" className={styles.logoMark} />
          <span className={styles.brandName}>
            <span className={styles.brandAgos}>Agos</span>
            <span className={styles.brandSolutions}>Solutions</span>
          </span>
        </a>

        <nav className={styles.links}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={`${styles.cta} cta-outline`}>
            Book a Free Consultation
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileLinks}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link} onClick={closeMobile}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`${styles.mobileCta} cta-outline`} onClick={closeMobile}>
            Book a Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
