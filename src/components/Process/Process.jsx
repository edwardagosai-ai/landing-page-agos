import { useReveal } from '../../hooks/useReveal';
import styles from './Process.module.css';

const STEPS = [
  {
    title: 'Discover',
    copy: 'A short working session to map your current process, pain points, and what "done" actually looks like.',
  },
  {
    title: 'Design',
    copy: 'We sketch the system architecture and key screens so you can see and react before any code is written.',
  },
  {
    title: 'Build',
    copy: 'Short development cycles with regular check-ins — no disappearing for months and resurfacing with surprises.',
  },
  {
    title: 'Launch & Support',
    copy: 'We deploy, train your team, and stay on for fixes and iteration as your business keeps moving.',
  },
];

export default function Process() {
  const headRef = useReveal();
  const timelineRef = useReveal();

  return (
    <section id="process" className={`${styles.process} section-bleed`}>
      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
          <p className="eyebrow">How We Work</p>
          <h2 className={styles.heading}>A clear path from idea to live system</h2>
          <p className={styles.sub}>
            No black-box development. You'll know exactly what's happening at
            every stage.
          </p>
        </div>

        <div ref={timelineRef} className={`${styles.timeline} reveal`}>
          {STEPS.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.number}>{index + 1}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepCopy}>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
