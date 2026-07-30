import { useState } from 'react';
import { submitContact } from '../../api/submitContact';
import { useReveal } from '../../hooks/useReveal';
import styles from './FinalCTA.module.css';

const SYSTEM_OPTIONS = ['CRM', 'POS', 'Automation', 'Internal Management Tool', 'Voice AI / Chatbot', 'Not sure yet'];

const INITIAL_FIELDS = { name: '', email: '', company: '', industry: '', message: '' };

export default function FinalCTA() {
  const ref = useReveal();
  const [step, setStep] = useState(1);
  const [systems, setSystems] = useState([]);
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleSystem = (label) => {
    setSystems((prev) => (prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]));
  };

  const handleField = (key) => (event) => {
    setFields((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const step1Disabled = systems.length === 0;
  const step2Disabled = !fields.name.trim() || !fields.email.trim();
  const progressPercent = Math.round(((Math.min(step, 3) - 1) / 3) * 100);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await submitContact({ ...fields, systems });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.waveEdge} aria-hidden="true">
        <svg className={styles.waveShadow} viewBox="0 0 2400 300" preserveAspectRatio="none" fill="none">
          <path
            d="M0,178 C133,213 267,148 400,181 C533,215 667,146 800,180 C933,213 1067,148 1200,180 C1333,210 1467,151 1600,180 C1733,206 1867,155 2000,180 C2133,199 2267,162 2400,179 L2400,300 L0,300 Z"
            fill="#143fc0"
          />
        </svg>
        <svg viewBox="0 0 2400 300" preserveAspectRatio="none" fill="none">
          <path
            d="M0,178 C133,213 267,148 400,181 C533,215 667,146 800,180 C933,213 1067,148 1200,180 C1333,210 1467,151 1600,180 C1733,206 1867,155 2000,180 C2133,199 2267,162 2400,179 L2400,300 L0,300 Z"
            fill="#050d29"
          />
        </svg>
      </div>
      <div className={`container ${styles.wrap} reveal`} ref={ref}>
        <div className={styles.intro}>
          <p className="eyebrow">Get started</p>
          <h2 className={styles.heading}>Let's build your system.</h2>
          <p className={styles.sub}>
            Tell us about your business and what's slowing your team down. We'll get back to you
            to schedule a free consultation.
          </p>
        </div>

        <div className={styles.card}>
          {submitted ? (
            <div className={styles.submittedPanel}>
              <div className={styles.submittedIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f56ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className={styles.submittedTitle}>Thanks. Request received.</h3>
              <p className={styles.submittedCopy}>
                We'll review your details and reach out shortly to schedule your free consultation.
              </p>
            </div>
          ) : (
            <>
              <div className={styles.progressHead}>
                <span className={styles.stepLabel}>STEP {Math.min(step, 3)} OF 3</span>
                <span className={styles.percentLabel}>{progressPercent}%</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} style={{ width: `${progressPercent}%` }} />
              </div>

              <form onSubmit={handleSubmit} className={styles.stepBody}>
                {step === 1 && (
                  <>
                    <h3 className={styles.stepTitle}>What are you looking to build?</h3>
                    <p className={styles.stepHint}>Select everything that applies.</p>
                    <div className={styles.optionGrid}>
                      {SYSTEM_OPTIONS.map((label) => {
                        const selected = systems.includes(label);
                        return (
                          <button
                            type="button"
                            key={label}
                            className={`${styles.optionCard} ${selected ? styles.optionSelected : ''}`}
                            onClick={() => toggleSystem(label)}
                          >
                            {label}
                            {selected && (
                              <span className={styles.optionCheck}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f56ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      className={styles.continueBtn}
                      disabled={step1Disabled}
                      onClick={() => setStep(2)}
                    >
                      Continue →
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3 className={styles.stepTitle}>Tell us about your business.</h3>
                    <p className={styles.stepHint}>This helps us tailor the system and get back to you.</p>
                    <div className={styles.formGrid}>
                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label>Name</label>
                          <input type="text" placeholder="Jane Cruz" value={fields.name} onChange={handleField('name')} />
                        </div>
                        <div className={styles.field}>
                          <label>Email</label>
                          <input type="email" placeholder="jane@business.com" value={fields.email} onChange={handleField('email')} />
                        </div>
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label>Company</label>
                          <input type="text" placeholder="Cruz Retail Co." value={fields.company} onChange={handleField('company')} />
                        </div>
                        <div className={styles.field}>
                          <label>Business type / industry</label>
                          <input type="text" placeholder="e.g. Retail, home services" value={fields.industry} onChange={handleField('industry')} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.btnRow}>
                      <button type="button" className={styles.backBtn} onClick={() => setStep(1)}>
                        ← Back
                      </button>
                      <button
                        type="button"
                        className={styles.continueBtn}
                        disabled={step2Disabled}
                        onClick={() => setStep(3)}
                      >
                        Continue →
                      </button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3 className={styles.stepTitle}>Anything else?</h3>
                    <p className={styles.stepHint}>Optional: tell us what's slowing your team down.</p>
                    <textarea
                      className={styles.textarea}
                      rows={4}
                      placeholder="What's slowing your team down right now?"
                      value={fields.message}
                      onChange={handleField('message')}
                    />
                    <div className={styles.btnRow}>
                      <button type="button" className={styles.backBtn} onClick={() => setStep(2)}>
                        ← Back
                      </button>
                      <button type="submit" className={styles.submitBtn} disabled={submitting}>
                        {submitting ? 'Sending…' : 'Book a Free Consultation'}
                      </button>
                    </div>
                    <p className={styles.privacy}>
                      We'll only use your details to reach out about your project. No spam, no
                      sharing with third parties.
                    </p>
                  </>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
