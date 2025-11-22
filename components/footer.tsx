import Link from 'next/link';
import { profile, skills } from '@/data/content';

export function Footer() {
  const year = new Date().getFullYear();
  const quickSkills = skills.core.slice(0, 4);
  return (
    <footer className="mt-10 border-t border-slate-200/70 bg-white/60 py-8 dark:border-white/10 dark:bg-slate-950/60">
      <div className="section-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-display text-xl">Waqar Imtiaz</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {profile.title} · {profile.location}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {year} Waqar Imtiaz. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {quickSkills.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/waqar-imtiaz-resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </Link>
          <Link href="mailto:hello@iwaqar.com">Email</Link>
          <Link href="https://linkedin.com/in/iwaqar">LinkedIn</Link>
          <Link href="https://github.com/waqar-imtiaz">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}
