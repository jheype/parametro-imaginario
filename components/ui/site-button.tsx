import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SiteButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  external?: boolean;
  className?: string;
};

export function SiteButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
}: SiteButtonProps) {
  const styles = {
    primary:
      'bg-brand-text text-white hover:bg-black',
    secondary:
      'bg-brand-accent text-white hover:bg-brand-accent-strong',
    outline:
      'border border-brand-line bg-white text-brand-text hover:border-brand-accent hover:text-brand-accent',
  };

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}