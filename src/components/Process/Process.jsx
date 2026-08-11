import { useReveal } from '../../hooks/useReveal';
import styles from './Process.module.css';

const STEPS = [
  {
    title: 'Discover',
    copy: 'We map how your business runs today: the tools, the workarounds, the bottlenecks.',
  },
  {
    title: 'Design',
    copy: 'We design the system around your workflow, not a generic template.',
  },
  {
    title: 'Build',
    copy: 'We build and connect every piece (CRM, POS, automation, portals) as one platform.',
  },
  {
    title: 'Launch & Support',
    copy: 'We launch with your team, then stay on to refine and support the system as you grow.',
  },
];

// One class per step, each with its own @keyframes shaped to the real
// overlap window between the traveling dash and that number's position —
// measured against the live stroke-dashoffset animation via getPointAtLength.
// The line moves slowly near the ends of its path and fast through the
// middle (single ease-in-out sweep), so steps 1 & 4 get a long, gentle pulse
// (~1.5s) while steps 2 & 3 get a short, snappy one (~0.65s); a single
// fixed-width pulse reused across all four was either too early or too long.
const LIGHT_CLASSES = ['numberLight1', 'numberLight2', 'numberLight3', 'numberLight4'];

export default function Process() {
  const headRef = useReveal();
  const timelineRef = useReveal();

  return (
    <section id="process" className={styles.process}>
      <div className={styles.waveEdge} aria-hidden="true">
        <svg className={styles.waveShadow} viewBox="0 0 2400 300" preserveAspectRatio="none" fill="none">
          <path
            d="M0,185 C133,150 267,212 400,180 C533,148 667,214 800,178 C933,146 1067,213 1200,180 C1333,150 1467,210 1600,179 C1733,155 1867,206 2000,180 C2133,162 2267,198 2400,181 L2400,300 L0,300 Z"
            fill="#143fc0"
          />
        </svg>
        <svg viewBox="0 0 2400 300" preserveAspectRatio="none" fill="none">
          <path
            d="M0,185 C133,150 267,212 400,180 C533,148 667,214 800,178 C933,146 1067,213 1200,180 C1333,150 1467,210 1600,179 C1733,155 1867,206 2000,180 C2133,162 2267,198 2400,181 L2400,300 L0,300 Z"
            fill="#eef3ff"
          />
        </svg>
      </div>

      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
          <h2 className={styles.heading}>
            From scattered tools to
            <br />
            <span className="serif-italic" style={{ color: '#1f56ea' }}>one system</span>, in four steps.
          </h2>
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
              <div className={`${styles.number} ${styles[LIGHT_CLASSES[index]]}`}>
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
