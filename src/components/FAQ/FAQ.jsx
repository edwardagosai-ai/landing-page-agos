import { useRef, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import styles from './FAQ.module.css';

const ITEMS = [
  {
    q: 'What kind of businesses do you work with?',
    a: 'Small and medium businesses across retail, hospitality, home services, and other operations-heavy industries. Every system is custom-built around your workflow, not sold off the shelf.',
  },
  {
    q: 'What exactly do you build?',
    a: 'CRM, POS, automation, cloud storage, admin and staff dashboards, voice AI and chatbots, and custom integrations — all connected as one system rather than separate tools.',
  },
  {
    q: 'How long does a project take?',
    a: "It depends on scope. Most projects move from discovery to launch in a matter of weeks, not months. We'll give you a realistic timeline after your free consultation.",
  },
  {
    q: 'Do you offer support after launch?',
    a: "Yes. We stay on as your systems partner to refine, support, and grow the platform as your business changes — we don't disappear after handoff.",
  },
  {
    q: 'Will it connect to tools we already use?',
    a: 'In most cases, yes. We integrate with the tools and platforms your business already relies on wherever it makes sense, rather than forcing a full switch.',
  },
  {
    q: 'How is pricing structured?',
    a: "Every project is scoped individually after a discovery call, based on which systems you need. Book a free consultation and we'll walk you through a quote.",
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(-1);
  const answerRefs = useRef([]);

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div ref={ref} className={`${styles.wrap} reveal`}>
          <div className={styles.head}>
            <span className={styles.tag}>FAQ</span>
            <h2 className={styles.heading}>Questions, Answered.</h2>
            <p className={styles.sub}>
              Can't find what you're looking for? Reach out and we'll walk you through it on a
              free consultation call.
            </p>
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
                    <span>{item.q}</span>
                    <span className={`${styles.indicator} ${isOpen ? styles.open : ''}`}>+</span>
                  </button>
                  <div
                    className={`${styles.answer} ${isOpen ? styles.open : ''}`}
                    style={{
                      maxHeight: isOpen ? `${answerRefs.current[index]?.offsetHeight ?? 220}px` : '0px',
                    }}
                  >
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
