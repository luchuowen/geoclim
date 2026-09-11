import type { ReactNode } from 'react';

export interface PillProps {
  icon: ReactNode;
  label: string;
}

/** Hero pill-tag: `.pill-tag` wrapping a small round icon badge + label.
 * Entrance animation and the `.hero-tags` layout wrapper live with the page
 * that composes these (see styles/components/pill.css). */
export default function Pill({ icon, label }: PillProps) {
  return (
    <span className="pill-tag">
      <span className="ic">{icon}</span>
      {label}
    </span>
  );
}
