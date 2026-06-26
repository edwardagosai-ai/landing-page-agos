import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import SectionDivider from '../SectionDivider/SectionDivider';
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
  const lastNumberRef = useRef(null);
  const [mobileLineHeight, setMobileLineHeight] = useState(null);

  useEffect(() => {
    function measure() {
      const timeline = timelineRef.current;
      const lastNumber = lastNumberRef.current;
      if (!timeline || !lastNumber) return;
      const timelineTop = timeline.getBoundingClientRect().top;
      const rect = lastNumber.getBoundingClientRect();
      setMobileLineHeight((rect.top + rect.bottom) / 2 - timelineTop);
    }

    measure();
    document.fonts?.ready?.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section id="process" className={`${styles.process} section-bleed`}>
      <SectionDivider />
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
          <svg
            className={styles.squiggleDesktop}
            viewBox="0 0 100 30"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className={styles.track}
              d="M0,15 C12,2 21,28 33.33,15 C45,2 54,28 66.67,15 C78,2 87,28 100,15"
            />
            <path
              className={styles.pulse}
              d="M0,15 C12,2 21,28 33.33,15 C45,2 54,28 66.67,15 C78,2 87,28 100,15"
              pathLength="100"
            />
          </svg>
          <svg
            className={styles.squiggleMobile}
            viewBox="0 0 30 100"
            preserveAspectRatio="none"
            style={mobileLineHeight != null ? { height: `${mobileLineHeight}px` } : undefined}
            aria-hidden="true"
          >
            <path
              className={styles.track}
              d="M15,0 C2,12 28,21 15,33.33 C2,45 28,54 15,66.67 C2,78 28,87 15,100"
            />
            <path
              className={styles.pulse}
              d="M15,0 C2,12 28,21 15,33.33 C2,45 28,54 15,66.67 C2,78 28,87 15,100"
              pathLength="100"
            />
          </svg>
          {STEPS.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <div
                className={styles.number}
                ref={index === STEPS.length - 1 ? lastNumberRef : undefined}
              >
                {index + 1}
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
