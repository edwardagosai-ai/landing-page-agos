import { useEffect, useState } from 'react';
import logoMark from '../../assets/logo-mark.png';
import styles from './Nav.module.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled || mobileOpen ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.logoBadge}>
            <img src={logoMark} alt="Agos Solutions" className={styles.logoMark} />
          </span>
          <span className={styles.brandName}>Agos Solutions</span>
        </a>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta}>
            Book a Consultation
          </a>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileLinks}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link} onClick={closeMobile}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta} onClick={closeMobile}>
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
