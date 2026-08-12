import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import logoMark from '../../assets/logo-mark.png';
import Magnetic from '../Magnetic';
import styles from './Nav.module.css';

const LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#process', label: 'Process', id: 'process' },
  { href: '#faq', label: 'FAQ', id: 'faq' },
];

const SECTION_IDS = ['about', 'services', 'process', 'faq', 'contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  /* One scroll subscription doing both jobs (hide-on-scroll-down, scrolled
     background) instead of a second, redundant native scroll listener
     running alongside framer-motion's own. */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > 120 && latest > previous);
    setScrolled(latest > 32);
  });

  /* Scroll-spy: track active section */
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-30% 0px -50% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className={styles.navWrap}>
      <motion.header
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "-140%", opacity: 0 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.inner}>
          <a href="#top" className={styles.brand}>
            <img src={logoMark} alt="Agos Solutions" className={styles.logoMark} />
            <span className={styles.brandName}>
              <span className={styles.brandAgos}>Agos</span>
              <span className={styles.brandSolutions}>Solutions</span>
            </span>
          </a>

          <nav className={styles.links}>
            {LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                >
                  <span className={styles.linkLabel}>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActivePill"
                      className={styles.activePill}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Magnetic>
              <a href="#contact" className={`cta-blob cta-blob--sm ${styles.navCta}`}>
                Book a Free Consultation
                <span className="cta-blob-inner">
                  <span className="cta-blob-blobs">
                    <span className="cta-blob-blob" />
                    <span className="cta-blob-blob" />
                    <span className="cta-blob-blob" />
                    <span className="cta-blob-blob" />
                  </span>
                </span>
              </a>
            </Magnetic>
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
      </motion.header>
    </div>
  );
}
