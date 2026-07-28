import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <svg className={styles.glow} viewBox="0 0 900 900" fill="none" aria-hidden="true">
        <circle cx="450" cy="450" r="420" fill="url(#heroGlow)" />
        <defs>
          <radialGradient id="heroGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#c9daff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c9daff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className={styles.waves} aria-hidden="true">
        <svg className={styles.wave1} viewBox="0 0 2400 400" preserveAspectRatio="none" fill="none">
          <path
            d="M0,220 C100,180 200,180 300,220 C400,260 500,260 600,220 C700,180 800,180 900,220 C1000,260 1100,260 1200,220 C1300,180 1400,180 1500,220 C1600,260 1700,260 1800,220 C1900,180 2000,180 2100,220 C2200,260 2300,260 2400,220 L2400,400 L0,400 Z"
            fill="#e4ecff"
          />
        </svg>
        <svg className={styles.wave2} viewBox="0 0 2400 300" preserveAspectRatio="none" fill="none">
          <path
            d="M0,160 C100,120 200,120 300,160 C400,200 500,200 600,160 C700,120 800,120 900,160 C1000,200 1100,200 1200,160 C1300,120 1400,120 1500,160 C1600,200 1700,200 1800,160 C1900,120 2000,120 2100,160 C2200,200 2300,200 2400,160"
            stroke="#9fbdff"
            strokeWidth="2.5"
          />
        </svg>
        <svg className={styles.wave3} viewBox="0 0 2400 260" preserveAspectRatio="none" fill="none">
          <path
            d="M0,140 C100,100 200,100 300,140 C400,180 500,180 600,140 C700,100 800,100 900,140 C1000,180 1100,180 1200,140 C1300,100 1400,100 1500,140 C1600,180 1700,180 1800,140 C1900,100 2000,100 2100,140 C2200,180 2300,180 2400,140"
            stroke="#1f56ea"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">One system. Zero busywork.</p>
          <h1 className={styles.headline}>
            Every part of your business,
            <br />
            <span className={styles.gradientText}>running as one system.</span>
          </h1>
          <p className={styles.subhead}>
            CRM, POS, automation, and staff tools — connected as one system, so your team spends
            less time on busywork.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={`${styles.primaryCta} cta-outline`}>
              Book a Free Consultation
            </a>
            <a href="#process" className={styles.secondaryCta}>
              See how it works ↓
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.mockCard}>
            <div className={styles.mockDots}>
              <span style={{ background: '#ffb4a8' }} />
              <span style={{ background: '#ffe19c' }} />
              <span style={{ background: '#adf0c3' }} />
            </div>
            <div className={styles.mockScreen} />
          </div>
          <div className={`${styles.chip} ${styles.chipTop}`}>
            <span className={styles.chipIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f56ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 12a8.5 8.5 0 0 1 14.5-6" />
                <path d="M14.5 3.5h3.5V7" />
                <path d="M20.5 12a8.5 8.5 0 0 1-14.5 6" />
                <path d="M9.5 20.5H6V17" />
              </svg>
            </span>
            <div>
              <div className={styles.chipTitle}>Automation running</div>
              <div className={styles.chipSub}>Manual process eliminated</div>
            </div>
          </div>
          <div className={`${styles.chip} ${styles.chipBottom}`}>
            <span className={styles.chipIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1f56ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <div className={styles.chipTitle}>Manual work, automated</div>
              <div className={styles.chipSub}>More time back for your team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
