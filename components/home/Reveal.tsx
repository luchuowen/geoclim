'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** CSS transition-delay value, e.g. "0.08s" — for staggering a list of
   * reveal items exactly as the reference mockup's inline style delays. */
  delay?: string;
}

/** Client-side port of the reference mockup's scroll-reveal
 * IntersectionObserver: wraps content in `.reveal`, adds `.in-view` the
 * first time it enters the viewport. Respects `prefers-reduced-motion`
 * and the no-IntersectionObserver fallback by rendering already-visible,
 * matching reference behaviour exactly (design-tokens.md). */
export default function Reveal({ children, className, delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay ? { transitionDelay: delay } : undefined;

  return (
    <div ref={ref} className={['reveal', inView ? 'in-view' : '', className].filter(Boolean).join(' ')} style={style}>
      {children}
    </div>
  );
}
