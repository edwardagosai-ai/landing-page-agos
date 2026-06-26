import { useId } from 'react';
import styles from './SectionDivider.module.css';

export default function SectionDivider({ flip = false }) {
  const gradId = useId();

  return (
    <svg
      className={`${styles.divider} ${flip ? styles.flip : ''}`}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--bleed-from)" />
          <stop offset="100%" stopColor="var(--bleed-from)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,0 H1440 V36 C1080,90 480,10 0,64 Z" fill={`url(#${gradId})`} />
    </svg>
  );
}
