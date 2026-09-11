import Link from 'next/link';
import type { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href: string;
  children: ReactNode;
  className?: string;
}

/** `.btn`/`.btn-primary`/`.btn-secondary` — renders a Next.js `<Link>` for
 * internal routes (href starting with "/") and a plain `<a>` otherwise
 * (external URLs, in-page "#" anchors). */
export default function Button({ variant = 'primary', href, children, className }: ButtonProps) {
  const cls = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ');

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
