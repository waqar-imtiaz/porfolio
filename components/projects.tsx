'use client';

import { useMemo, useState } from 'react';
import { projects, type ProjectCategory } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiFilter } from 'react-icons/fi';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const categories: ProjectCategory[] = ['Frontend', 'Full Stack', 'Data Visualization'];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <section id="projects" className="section-container py-16 md:py-20">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Featured Projects
          </p>
          <h3 className="font-display text-3xl">Select work across products and data viz</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <FiFilter /> Filter
        </div>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat as ProjectCategory | 'All')}
            className={cn(
              'rounded-full border px-3 py-1 text-sm transition',
              active === cat
                ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900'
                : 'border-slate-200 bg-white/60 text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-white/5 dark:text-slate-200 dark:hover:border-slate-700',
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.article
              key={project.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass relative flex flex-col justify-between overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(14,165,233,0.08),transparent_25%)]" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-xl">{project.name}</h4>
                  <span className="pill"> {project.category.join(' • ')} </span>
                </div>
                <p className="text-slate-700 dark:text-slate-200">{project.description}</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {project.role}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{project.achievement}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative mt-4">
                <Button variant="ghost" size="sm" className="gap-2 text-slate-700 dark:text-white">
                  <span>{project.link ? 'View' : 'Case study coming soon'}</span>
                  <FiArrowUpRight />
                </Button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
