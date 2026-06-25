import styles from './WaveBackground.module.css';

const WAVE_BACK =
  'M0 140 C100 90,200 190,300 140 C400 90,500 190,600 140 C700 90,750 115,800 140';
const WAVE_MID =
  'M0 170 C90 130,180 210,270 170 C360 130,450 210,540 170 C630 130,720 210,800 170';
const WAVE_FRONT =
  'M0 195 C70 165,140 225,210 195 C280 165,350 225,420 195 C490 165,560 225,630 195 C700 165,760 185,800 195';

function WaveLayer({ d, layerClass, color, width }) {
  return (
    <svg
      className={`${styles.svg} ${layerClass}`}
      viewBox="0 0 1600 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke={color} strokeWidth={width} />
      <path d={d} fill="none" stroke={color} strokeWidth={width} transform="translate(800,0)" />
    </svg>
  );
}

export default function WaveBackground({ tone = 'dark' }) {
  const colors =
    tone === 'dark'
      ? ['#2c4a85', '#3f64b8', '#4779ff']
      : ['#b9c8f5', '#9fb4ee', '#1e5bff'];

  return (
    <div className={styles.wrap}>
      <WaveLayer d={WAVE_BACK} layerClass={styles.layerBack} color={colors[0]} width={1} />
      <WaveLayer d={WAVE_MID} layerClass={styles.layerMid} color={colors[1]} width={1.1} />
      <WaveLayer d={WAVE_FRONT} layerClass={styles.layerFront} color={colors[2]} width={1.3} />
      <span className={styles.dot} style={{ top: '34%', left: '26%', width: 5, height: 5 }} />
      <span className={styles.dot} style={{ top: '18%', left: '63%', width: 4, height: 4 }} />
      <span className={styles.dot} style={{ top: '47%', left: '84%', width: 3, height: 3 }} />
    </div>
  );
}
