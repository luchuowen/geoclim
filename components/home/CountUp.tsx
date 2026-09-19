'use client';

import { useEffect, useRef, useState } from 'react';

export interface CountUpProps {
  target: number;
  className?: string;
}

/** Client-side port of the reference mockup's country-count-up: eases from
 * 0 to `target` over 900ms once scrolled into view, respecting
 * `prefers-reduced-motion` by rendering the target immediately
 * (design-tokens.md). */
export default function CountUp({ target, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setValue(target);
      return;
    }

    let started = false;
    function run() {
      if (started) return;
      started = true;
      const dur = 900;
      let startTs: number | null = null;
      function step(ts: number) {
        if (startTs === null) startTs = ts;
        const p = Math.min(1, (ts - startTs) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
