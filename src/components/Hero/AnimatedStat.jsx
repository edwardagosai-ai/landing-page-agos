import { useEffect, useState } from 'react';

function scramble(value) {
  return value.replace(/[0-9]/g, () => Math.floor(Math.random() * 10));
}

export default function AnimatedStat({ value, delay = 0 }) {
  const [display, setDisplay] = useState(() => scramble(value));

  useEffect(() => {
    const ticks = 14;
    let tick = 0;
    let intervalId;

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        tick += 1;
        if (tick >= ticks) {
          clearInterval(intervalId);
          setDisplay(value);
          return;
        }
        setDisplay(scramble(value));
      }, 45);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(intervalId);
    };
  }, [value, delay]);

  return <dd>{display}</dd>;
}
