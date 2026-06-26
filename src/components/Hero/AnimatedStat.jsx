import { useEffect, useState } from 'react';

// Excludes "1" — it's narrow compared to the other glyphs in this font and
// makes the digits visibly shuffle left/right as they scramble.
const WIDE_DIGITS = '023456789';

function scramble(value) {
  return value.replace(/[0-9]/g, () => WIDE_DIGITS[Math.floor(Math.random() * WIDE_DIGITS.length)]);
}

const TOTAL_TICKS = 18;

// Ease-in weighting: early gaps are tiny (fast flicker), later gaps grow
// (visibly slowing down) right before landing on the real value.
function buildDelays(totalDuration, totalTicks) {
  const weights = Array.from({ length: totalTicks }, (_, i) => (i + 1) ** 2);
  const weightSum = weights.reduce((sum, w) => sum + w, 0);
  return weights.map((w) => (w / weightSum) * totalDuration);
}

export default function AnimatedStat({ value, settleAfter = 900 }) {
  const [display, setDisplay] = useState(() => scramble(value));

  useEffect(() => {
    const delays = buildDelays(settleAfter, TOTAL_TICKS);
    let tick = 0;
    let timeoutId;

    function schedule() {
      timeoutId = setTimeout(() => {
        tick += 1;
        if (tick >= TOTAL_TICKS) {
          setDisplay(value);
          return;
        }
        setDisplay(scramble(value));
        schedule();
      }, delays[tick]);
    }

    schedule();

    return () => clearTimeout(timeoutId);
  }, [value, settleAfter]);

  return <dd>{display}</dd>;
}
