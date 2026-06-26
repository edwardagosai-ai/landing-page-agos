import { useId } from 'react';
import styles from './AngleDivider.module.css';

export default function AngleDivider({ flip = false }) {
  const gradId = useId();

  return (
    <svg
      className={`${styles.divider} ${flip ? styles.flip : ''}`}
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--bleed-from)" />
          <stop offset="100%" stopColor="var(--bleed-from)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,0 L100,0 L100,22 L0,8 Z" fill={`url(#${gradId})`} />
      <line x1="0" y1="8" x2="100" y2="22" className={styles.edge} />
    </svg>
  );
}
