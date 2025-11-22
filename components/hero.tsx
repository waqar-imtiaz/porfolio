'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { Button } from './ui/button';
import { profile } from '@/data/content';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas" />
      </div>
      <div className="section-container relative flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <span className="pill inline-flex gap-2 items-center">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for senior roles & select freelance
          </span>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
              {profile.location}
            </p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>
            <h2 className="text-xl text-slate-700 dark:text-slate-200 md:text-2xl">
              {profile.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/waqar-imtiaz-resume.pdf" target="_blank" rel="noreferrer">
                View Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <span className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <FiMapPin /> {profile.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            <Link
              href="mailto:hello@iwaqar.com"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5 dark:text-slate-100"
            >
              <FiMail /> hello@iwaqar.com
            </Link>
            <Link
              href="https://linkedin.com/in/iwaqar"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5 dark:text-slate-100"
            >
              <FiLinkedin /> LinkedIn
            </Link>
            <Link
              href="https://github.com/waqar-imtiaz"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5 dark:text-slate-100"
            >
              <FiGithub /> GitHub
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full max-w-md md:w-1/2"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.15),transparent_25%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
                Build philosophy
              </p>
              <p className="text-lg text-slate-800 dark:text-slate-100">
                Clarity first. Pair clean architecture with thoughtful UI, keep releases small, and
                measure what matters. Ship predictable, maintainable software that feels premium.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/60 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Recent focus</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Healthcare apps</p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Strength</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Data-rich UIs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
