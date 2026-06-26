import { useEffect, useRef } from 'react';
import { useReveal } from '../../hooks/useReveal';
import SectionDivider from '../SectionDivider/SectionDivider';
import buildingsImage from '../../assets/buildings.avif';
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
  const headRef = useReveal();
  const ref = useReveal();
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    let rafId = null;
    let current = 0;
    let target = 0;

    function getTarget() {
      const rect = section.getBoundingClientRect();
      return rect.top * 0.35;
    }

    function tick() {
      current += (target - current) * 0.08;
      bg.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
      if (Math.abs(target - current) > 0.05) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    }

    function onScroll() {
      target = getTarget();
      if (rafId == null) {
        rafId = requestAnimationFrame(tick);
      }
    }

    target = getTarget();
    current = target;
    bg.style.transform = `translate3d(0, ${current}px, 0)`;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className={`${styles.testimonials} section-bleed`}>
      <div ref={bgRef} className={styles.bgImage} style={{ backgroundImage: `url(${buildingsImage})` }} />
      <div className={styles.bgOverlay} />
      <SectionDivider flip />
      <div className="container">
        <div ref={headRef} className={`${styles.head} reveal`}>
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
