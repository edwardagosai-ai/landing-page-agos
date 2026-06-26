import { useEffect, useRef } from 'react';

export function useReveal({ threshold = 0.3, delay = 200 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            node.classList.add('is-visible');
          }, delay);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [threshold, delay]);

  return ref;
}
