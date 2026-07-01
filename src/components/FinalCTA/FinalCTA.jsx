import { useState } from 'react';
import { submitContact } from '../../api/submitContact';
import WaveBackground from '../WaveBackground/WaveBackground';
import { useReveal } from '../../hooks/useReveal';
import styles from './FinalCTA.module.css';

const INITIAL_FORM = { name: '', email: '', company: '', message: '' };

export default function FinalCTA() {
  const ref = useReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    await submitContact(form);
    setStatus('submitted');
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className={`${styles.cta} section-bleed`}>
      <WaveBackground tone="dark" />
      <div className={`container ${styles.grid} reveal`} ref={ref}>
        <div>
          <p className="eyebrow">Let's Build It</p>
          <h2 className={styles.heading}>
            Tell us where the busywork is. We'll tell you what to automate.
          </h2>
          <p className={styles.sub}>
            Book a free, no-pressure consultation — we'll look at your current
            process and tell you honestly whether a custom system is worth it.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required value={form.name} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={form.company} onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">What are you trying to fix or build?</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Start the Conversation'}
          </button>
          <p className={styles.privacy}>
            By submitting you agree to our Privacy Policy. We never share your details with third parties.
          </p>

          {status === 'submitted' && (
            <p className={styles.status}>Thanks — we'll be in touch within one business day.</p>
          )}
        </form>
      </div>
    </section>
  );
}
