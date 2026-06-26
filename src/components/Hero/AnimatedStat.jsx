import { useEffect, useRef, useState } from 'react';

// Excludes "1" — it's narrower than the other digits in Fraunces and made
// the stat numbers visibly shuffle sideways as they flickered.
const WIDE_DIGITS = '023456789';

function randomDigit() {
  return WIDE_DIGITS[Math.floor(Math.random() * WIDE_DIGITS.length)];
}

// Each digit gets its own lock time (later digits settle later) and its own
// flicker rate, so digits lock in one by one like a slot machine reel
// instead of the whole string flickering and snapping together at once.
function buildSchedule(value, settleAfter) {
  const chars = value.split('');
  const digitIndices = chars
    .map((char, index) => (/[0-9]/.test(char) ? index : null))
    .filter((index) => index !== null);

  const lockAt = {};
  const flickerMs = {};
  digitIndices.forEach((charIndex, k) => {
    const fraction = (k + 1) / digitIndices.length;
    const jitter = (Math.random() - 0.5) * 0.08 * settleAfter;
    lockAt[charIndex] = Math.max(0, settleAfter * (0.5 + 0.5 * fraction) + jitter);
    flickerMs[charIndex] = 38 + k * 6 + Math.random() * 12;
  });

  return { chars, digitIndices, lockAt, flickerMs };
}

export default function AnimatedStat({ value, settleAfter = 1200 }) {
  const [display, setDisplay] = useState(() => {
    const { chars, digitIndices } = buildSchedule(value, settleAfter);
    const initial = [...chars];
    digitIndices.forEach((i) => {
      initial[i] = randomDigit();
    });
    return initial.join('');
  });
  const rafRef = useRef(null);

  useEffect(() => {
    const { chars, digitIndices, lockAt, flickerMs } = buildSchedule(value, settleAfter);

    const current = [...chars];
    const lastFlicker = {};
    const locked = {};
    digitIndices.forEach((i) => {
      current[i] = randomDigit();
      lastFlicker[i] = 0;
      locked[i] = false;
    });
    setDisplay(current.join(''));

    let startTime = null;

    function frame(now) {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      let changed = false;

      digitIndices.forEach((i) => {
        if (locked[i]) return;
        if (elapsed >= lockAt[i]) {
          current[i] = chars[i];
          locked[i] = true;
          changed = true;
          return;
        }
        if (elapsed - lastFlicker[i] >= flickerMs[i]) {
          current[i] = randomDigit();
          lastFlicker[i] = elapsed;
          changed = true;
        }
      });

      if (changed) {
        setDisplay(current.join(''));
      }

      if (digitIndices.some((i) => !locked[i])) {
        rafRef.current = requestAnimationFrame(frame);
      }
    }

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, settleAfter]);

  return <dd>{display}</dd>;
}
