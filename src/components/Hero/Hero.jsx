import WaveBackground from '../WaveBackground/WaveBackground';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <WaveBackground tone="dark" />
      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>Custom Software, Built to Flow</p>
        <h1 className={styles.headline}>
          Systems that move <em>as fast</em> as your business
        </h1>
        <p className={styles.subhead}>
          Agos Solutions designs and builds web apps, mobile apps, and automations
          that replace manual busywork with intelligent, seamless systems —
          tailored for growing businesses, not enterprise budgets.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.primaryCta}>
            Start the Conversation
          </a>
          <a href="#process" className={styles.secondaryCta}>
            See how it works ↓
          </a>
        </div>

        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dd>40+</dd>
            <dt>Systems shipped</dt>
          </div>
          <div className={styles.stat}>
            <dd>6 wks</dd>
            <dt>Avg. time to launch</dt>
          </div>
          <div className={styles.stat}>
            <dd>98%</dd>
            <dt>Client retention</dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
