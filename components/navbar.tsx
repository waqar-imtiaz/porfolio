'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navItems = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [activeId, setActiveId] = useState<string>('#top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 },
    );

    navItems.forEach((item) => {
      const target = document.querySelector(item.href);
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg border-b border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-950/70">
      <div className="section-container flex items-center justify-between py-3">
        <Link href="#top" className="font-display text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            WI / Portfolio
          </span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-3 py-1 text-sm font-medium transition-colors',
                activeId === item.href
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white',
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button asChild size="sm" variant="solid">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
