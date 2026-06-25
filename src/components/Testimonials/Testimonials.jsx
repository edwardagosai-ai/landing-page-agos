import { useReveal } from '../../hooks/useReveal';
import styles from './Testimonials.module.css';

const QUOTES = [
  {
    initials: 'RC',
    quote:
      "Agos rebuilt our scheduling process from a tangle of spreadsheets into something our dispatchers actually enjoy using. It just works.",
    name: 'Renee Castillo',
    role: 'Operations Lead, Bramwell Logistics',
  },
  {
    initials: 'DP',
    quote:
      "They didn't just build what we asked for — they pushed back on a few things and the final system is simpler because of it.",
    name: 'Devon Park',
    role: 'Founder, Park & Co. Studio',
  },
  {
    initials: 'IR',
    quote:
      "Six weeks from kickoff to a live client portal. Communication the entire way was better than agencies twice their size.",
    name: 'Imani Reyes',
    role: 'Director, Northfield Clinic Group',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section id="testimonials" className={`${styles.testimonials} section-bleed`}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">In Their Words</p>
          <h2 className={styles.heading}>Trusted by teams who needed it done right</h2>
        </div>

        <div ref={ref} className={`${styles.row} reveal`}>
          {QUOTES.map((item, index) => (
            <div
              key={item.name}
              className={index === 0 ? `${styles.card} ${styles.featured}` : styles.card}
            >
              <div className={styles.mark}>"</div>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.person}>
                <div className={styles.avatar}>{item.initials}</div>
                <div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.role}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
