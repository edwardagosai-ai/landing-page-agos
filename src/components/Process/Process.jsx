import { useReveal } from '../../hooks/useReveal';
import styles from './Process.module.css';

const STEPS = [
  {
    title: 'Discover',
    copy: 'We map how your business runs today — the tools, the workarounds, the bottlenecks.',
  },
  {
    title: 'Design',
    copy: 'We design the system around your workflow — not a generic template.',
  },
  {
    title: 'Build',
    copy: 'We build and connect every piece — CRM, POS, automation, portals — as one platform.',
  },
  {
    title: 'Launch & Support',
    copy: 'We launch with your team, then stay on to refine and support the system as you grow.',
  },
];

// Matches the 6s agosLineTravel loop on the connector line — each delay is
// measured (via getPointAtLength against the animated stroke-dashoffset) so
// the number lights up exactly when the traveling dash reaches its position.
const LIGHT_DELAYS = ['3s', '5.25s', '0.3s', '1.55s'];

export default function Process() {
  const headRef = useReveal();
  const timelineRef = useReveal();

  return (
    <section id="process" className={styles.process}>
      <div className={styles.waveEdge} aria-hidden="true">
        <svg viewBox="0 0 2400 300" preserveAspectRatio="none" fill="none">
          <path
            d="M0,180 C100,140 200,140 300,180 C400,220 500,220 600,180 C700,140 800,140 900,180 C1000,220 1100,220 1200,180 C1300,140 1400,140 1500,180 C1600,220 1700,220 1800,180 C1900,140 2000,140 2100,180 C2200,220 2300,220 2400,180 L2400,300 L0,300 Z"
            fill="#eef3ff"
          />
        </svg>
      </div>

      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
          <p className="eyebrow">How we work</p>
          <h2 className={styles.heading}>From scattered tools to one system, in four steps.</h2>
        </div>

        <div ref={timelineRef} className={`${styles.timeline} reveal`}>
          <div className={styles.line} aria-hidden="true">
            <svg viewBox="0 0 1000 30" preserveAspectRatio="none" fill="none">
              <path d="M0,15 Q250,27 500,15 T1000,15" stroke="#c7d8ff" strokeWidth="2" fill="none" />
              <path
                d="M0,15 Q250,27 500,15 T1000,15"
                pathLength="100"
                stroke="#1f56ea"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="14 300"
                className={styles.linePulse}
              />
            </svg>
          </div>

          {STEPS.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.number} style={{ animationDelay: LIGHT_DELAYS[index] }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepCopy}>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
