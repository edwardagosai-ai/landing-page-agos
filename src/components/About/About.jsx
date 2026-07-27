import { useReveal } from '../../hooks/useReveal';
import styles from './About.module.css';

const PILLARS = [
  {
    title: 'Unified',
    copy: 'CRM, POS, storage, and staff tools in one place — not five different logins.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    title: 'Automated',
    copy: 'Repetitive admin work runs quietly in the background, so your team can focus on customers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 12a8.5 8.5 0 0 1 14.5-6" />
        <path d="M14.5 3.5h3.5V7" />
        <path d="M20.5 12a8.5 8.5 0 0 1-14.5 6" />
        <path d="M9.5 20.5H6V17" />
      </svg>
    ),
  },
  {
    title: 'Supported',
    copy: 'We stay on as your systems partner — not a one-time developer who disappears at launch.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div ref={ref} className={`${styles.grid} reveal`}>
          <div>
            <p className="eyebrow">About Agos</p>
            <h2 className={styles.heading}>We build the operating system behind your business.</h2>
            <p className={styles.copy}>
              One connected system, built around how your business actually works — not the other
              way around.
            </p>
          </div>

          <div className={styles.pillars}>
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className={styles.pillar}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <div>
                  <div className={styles.pillarTitle}>{pillar.title}</div>
                  <div className={styles.pillarCopy}>{pillar.copy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
