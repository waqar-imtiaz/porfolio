'use client';

import { about } from '@/data/content';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="section-container py-16 md:py-20">
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            About
          </p>
          <h3 className="font-display text-3xl">Builder, collaborator, and systems thinker</h3>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">{about.summary}</p>
        </motion.div>
        <motion.div
          className="glass relative overflow-hidden rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.2),transparent_35%),radial-gradient(circle_at_10%_0%,rgba(99,102,241,0.2),transparent_35%)]" />
          <div className="relative space-y-3 text-sm text-slate-800 dark:text-slate-100">
            <p className="font-semibold">How I work</p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              <li>• Shape clear roadmaps, then deliver in small, demonstrable increments.</li>
              <li>• Pair closely with designers and product to keep UX intentional.</li>
              <li>• Leave teams better with docs, guardrails, and repeatable patterns.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
