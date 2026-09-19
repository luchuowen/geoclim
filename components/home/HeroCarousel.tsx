'use client';

import { useEffect, useState } from 'react';
import { HERO_SLIDES } from '@/content/hero-carousel';

const SLIDE_DURATION_MS = 6000;

/** Hero content carousel: three slides summarizing GeoClim's platform
 * (spatial intelligence / enterprise integration / AI & automation),
 * grounded in the same copy already used in the Home page's .triad
 * section. Auto-advances on a per-slide progress bar (pauses on
 * hover/focus), with clickable indicators for direct navigation. */
export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = HERO_SLIDES.length;

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % count);
    }, SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [active, paused, count]);

  function goTo(i: number) {
    setActive(i);
  }

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-carousel-track">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-carousel-slide${i === active ? ' is-active' : ''}`}
            aria-hidden={i !== active}
          >
            <span className="hero-carousel-kicker">{slide.kicker}</span>
            <h3>{slide.heading}</h3>
            <p>{slide.body}</p>
          </div>
        ))}
      </div>
      <div className="hero-carousel-nav" role="tablist" aria-label="Platform overview">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}: ${slide.heading}`}
            className={`hero-carousel-dot${i === active ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          >
            {i === active && !paused && (
              <span
                key={`${slide.id}-${active}`}
                className="hero-carousel-progress"
                style={{ animationDuration: `${SLIDE_DURATION_MS}ms` }}
              />
            )}
            {i === active && paused && <span className="hero-carousel-progress is-paused" />}
          </button>
        ))}
      </div>
    </div>
  );
}
