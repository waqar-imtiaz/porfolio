'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { FiMoon, FiSun } from 'react-icons/fi';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = theme === 'system' ? systemTheme : theme;
  const resolvedTheme = current ?? 'light';

  if (!mounted) {
    return (
      <Button aria-label="Toggle theme" variant="ghost" size="sm" className="gap-2" disabled>
        <FiMoon />
        <span className="hidden sm:inline">Theme</span>
      </Button>
    );
  }

  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      size="sm"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="gap-2"
    >
      {resolvedTheme === 'dark' ? <FiSun /> : <FiMoon />}
      <span className="hidden sm:inline">
        {resolvedTheme === 'dark' ? 'Light' : 'Dark'} mode
      </span>
    </Button>
  );
}
