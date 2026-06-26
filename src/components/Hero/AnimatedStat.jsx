import { useEffect, useState } from 'react';

function scramble(value) {
  return value.replace(/[0-9]/g, () => Math.floor(Math.random() * 10));
}

const TICK_MS = 45;

export default function AnimatedStat({ value, settleAfter = 650 }) {
  const [display, setDisplay] = useState(() => scramble(value));

  useEffect(() => {
    const totalTicks = Math.round(settleAfter / TICK_MS);
    let tick = 0;

    const intervalId = setInterval(() => {
      tick += 1;
      if (tick >= totalTicks) {
        clearInterval(intervalId);
        setDisplay(value);
        return;
      }
      setDisplay(scramble(value));
    }, TICK_MS);

    return () => clearInterval(intervalId);
  }, [value, settleAfter]);

  return <dd>{display}</dd>;
}
