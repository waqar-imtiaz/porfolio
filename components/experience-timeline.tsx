'use client';

import { experiences } from '@/data/content';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-container py-16 md:py-20">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Experience
        </p>
        <h3 className="font-display text-3xl">Recent roles and the impact delivered</h3>
      </div>
      <div className="relative space-y-6">
        <div className="absolute left-4 top-3 bottom-3 hidden w-px bg-slate-200 dark:bg-slate-800 md:block" />
        {experiences.map((role, idx) => (
          <motion.article
            key={role.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-soft dark:border-white/5 dark:bg-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-transparent to-transparent dark:from-white/5" />
            <div className="relative flex gap-4">
              <div className="mt-1 hidden h-3 w-3 rounded-full bg-sky-400 shadow-lg md:block" />
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-display text-xl">{role.company}</h4>
                  <span className="pill">{role.period}</span>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {role.title}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {role.stack}
                </p>
                <ul className="mt-2 space-y-1 text-slate-700 dark:text-slate-200">
                  {role.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <FiArrowUpRight className="mt-1 text-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
