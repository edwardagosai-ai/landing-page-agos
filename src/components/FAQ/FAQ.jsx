import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import AngleDivider from '../AngleDivider/AngleDivider';
import styles from './FAQ.module.css';

const ITEMS = [
  {
    q: 'How long does a typical project take?',
    a: 'Most engagements run 4 to 10 weeks depending on scope. We break work into short cycles so you see progress every week rather than waiting for one big reveal.',
  },
  {
    q: "What does a project usually cost?",
    a: 'It depends on complexity, but most custom systems for SMBs land between $8K and $35K. We scope and quote before any work begins — no open-ended hourly billing.',
  },
  {
    q: 'What do you mean by "automation"?',
    a: "Anything repetitive your team does by hand — copying data between tools, sending follow-up emails, generating reports. We connect your systems so that work happens on its own.",
  },
  {
    q: 'Do you only work with tech companies?',
    a: "Not at all — most of our clients are service businesses, clinics, logistics teams, and studios with no in-house engineers. That's exactly who we build for.",
  },
  {
    q: 'What happens after the system launches?',
    a: "We don't disappear. Every project includes a support window, and most clients keep us on retainer for ongoing fixes and new features as the business grows.",
  },
  {
    q: 'Can you work with our existing tools?',
    a: 'Yes — we regularly integrate with CRMs, accounting software, and other tools you already rely on rather than asking you to rip everything out.',
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(0);
  const answerRefs = useRef([]);
  const questionRefs = useRef([]);
  const [maxAnswerHeight, setMaxAnswerHeight] = useState(240);
  const [reservedHeight, setReservedHeight] = useState(null);

  useEffect(() => {
    function measure() {
      const answerHeights = answerRefs.current.map((el) => el?.offsetHeight || 0);
      const tallestAnswer = Math.max(...answerHeights, 0) + 4;

      const closedTotal = questionRefs.current.reduce(
        (sum, el) => sum + (el?.offsetHeight || 0) + 1,
        0
      );

      setMaxAnswerHeight(tallestAnswer);
      setReservedHeight(closedTotal + tallestAnswer);
    }

    measure();
    document.fonts?.ready?.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section id="faq" className={`${styles.faq} section-bleed`}>
      <AngleDivider />
      <div className="container">
        <div ref={ref} className={`${styles.wrap} reveal`}>
          <div className={styles.headCol}>
            <p className="eyebrow">Common Questions</p>
            <h2 className={styles.heading}>Still deciding? Here's what people usually ask</h2>
            <svg className={styles.decor} viewBox="0 0 64 64" aria-hidden="true">
              <path d="M8 14h48v28H24l-10 10v-10H8z" />
              <circle cx="22" cy="28" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="32" cy="28" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="42" cy="28" r="1.4" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <div
            className={styles.list}
            style={{
              '--max-answer-height': `${maxAnswerHeight}px`,
              minHeight: reservedHeight != null ? `${reservedHeight}px` : undefined,
            }}
          >
            {ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                  <button
                    type="button"
                    className={styles.question}
                    ref={(el) => (questionRefs.current[index] = el)}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className={`${styles.indicator} ${isOpen ? styles.open : ''}`}>+</span>
                  </button>
                  <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
                    <p className={styles.answerInner} ref={(el) => (answerRefs.current[index] = el)}>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
