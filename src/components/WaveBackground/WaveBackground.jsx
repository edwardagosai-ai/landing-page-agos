import styles from './WaveBackground.module.css';

const WAVE_BACK =
  'M0 120 C 100 60, 200 180, 320 110 C 440 40, 540 160, 660 100 C 780 40, 880 150, 800 120 L 800 400 L 0 400 Z';
const WAVE_MID =
  'M0 160 C 90 220, 220 90, 340 150 C 460 210, 560 80, 680 140 C 760 180, 800 150, 800 160 L 800 400 L 0 400 Z';
const WAVE_FRONT =
  'M0 210 C 110 150, 230 250, 360 200 C 480 155, 600 240, 720 195 C 770 175, 800 195, 800 200 L 800 400 L 0 400 Z';

function WaveLayer({ d, layerClass, color }) {
  return (
    <svg
      className={`${styles.svg} ${layerClass}`}
      viewBox="0 0 1600 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} fill={color} transform="translate(0,0)" />
      <path d={d} fill={color} transform="translate(800,0)" />
    </svg>
  );
}

export default function WaveBackground({ tone = 'dark' }) {
  const colors =
    tone === 'dark'
      ? ['#0f2247', '#16336b', '#1e5bff']
      : ['#dfe7ff', '#c4d3ff', '#1e5bff'];

  return (
    <div className={styles.wrap}>
      <WaveLayer d={WAVE_BACK} layerClass={styles.layerBack} color={colors[0]} />
      <WaveLayer d={WAVE_MID} layerClass={styles.layerMid} color={colors[1]} />
      <WaveLayer d={WAVE_FRONT} layerClass={styles.layerFront} color={colors[2]} />
      <span className={styles.dot} style={{ top: '18%', left: '62%', width: 6, height: 6 }} />
      <span className={styles.dot} style={{ top: '32%', left: '22%', width: 4, height: 4 }} />
      <span className={styles.dot} style={{ top: '12%', left: '85%', width: 5, height: 5 }} />
    </div>
  );
}
