import { useReveal } from '../../hooks/useReveal';
import AngleDivider from '../AngleDivider/AngleDivider';
import styles from './About.module.css';

const TEAM = [
  { initials: 'JB', name: 'Joshua Barrios', role: 'Director of Operations' },
  { initials: 'HB', name: 'Howell Bautista', role: 'CTO' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className={`${styles.about} section-bleed`}>
      <AngleDivider />
      <div className="container">
        <div ref={ref} className={`${styles.grid} reveal`}>
          <div>
            <p className="eyebrow">About Agos</p>
            <h2 className={styles.heading}>
              We build the systems behind businesses that outgrow spreadsheets
            </h2>
            <p className={styles.copy}>
              Agos Solutions started with a simple frustration: most small and
              mid-sized businesses are stuck stitching together tools that
              were never meant to talk to each other. We design and build
              custom web apps, mobile apps, and automations that actually fit
              how your team works — not the other way around.
            </p>
            <p className={styles.copy} style={{ marginTop: '1rem' }}>
              No bloated enterprise contracts, no off-the-shelf templates
              pretending to be custom. Just a small, senior team that ships
              fast and sticks around after launch.
            </p>
          </div>

          <div className={styles.team}>
            {TEAM.map((member) => (
              <div key={member.name} className={styles.member}>
                <div className={styles.rod} />
                <div className={styles.banner}>
                  <span className={`${styles.ring} ${styles.ringLeft}`} />
                  <span className={`${styles.ring} ${styles.ringRight}`} />
                  <div className={styles.bannerFrame}>
                    <div className={styles.photoPlaceholder}>{member.initials}</div>
                    <div className={styles.memberName}>{member.name}</div>
                    <div className={styles.memberRole}>{member.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
