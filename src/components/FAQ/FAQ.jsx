import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import SectionDivider from '../SectionDivider/SectionDivider';
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

  return (
    <section id="faq" className={`${styles.faq} section-bleed`}>
      <SectionDivider />
      <div className="container">
        <div ref={ref} className={`${styles.wrap} reveal`}>
          <div>
            <p className="eyebrow">Common Questions</p>
            <h2 className={styles.heading}>Still deciding? Here's what people usually ask</h2>
          </div>

          <div className={styles.list}>
            {ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.q} className={styles.item}>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className={`${styles.indicator} ${isOpen ? styles.open : ''}`}>+</span>
                  </button>
                  <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
                    <p className={styles.answerInner}>{item.a}</p>
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
