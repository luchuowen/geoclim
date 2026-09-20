'use client';

import { useEffect, useState } from 'react';

const SLIDES = ['/images/hero-home-1.jpg', '/images/hero-home-2.jpg', '/images/hero-home-3.jpg'];
const SLIDE_DURATION_MS = 8000;

/** Home hero background: three premium aerial photographs cross-fading in a
 * slow, continuous loop, sharing one Ken Burns drift so the motion reads as
 * one continuous shot rather than a slideshow. All three images are mounted
 * (and therefore preloaded) on first render — only opacity changes on
 * transition, so there is never a blank or flickering frame. Respects
 * prefers-reduced-motion via the .hero-photo-carousel-slide rules in
 * globals.css (drift disabled, crossfade shortened). */
export default function HeroImageCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="hero-photo-carousel" aria-hidden="true">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`hero-photo-carousel-slide${i === active ? ' is-active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}
