'use client';

import { highlights } from '@/data/content';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

export function Highlights() {
  return (
    <section className="section-container py-16 md:py-20">
      <div className="grid items-center gap-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Strengths
          </p>
          <h3 className="font-display text-3xl">How I keep teams moving forward</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            From architecture to UX polish, I like owning the path to production. Expect candid
            communication, fast feedback cycles, and measurable wins.
          </p>
        </div>
        <div className="space-y-3">
          {highlights.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass flex items-start gap-3 rounded-2xl p-4"
            >
              <FiCheckCircle className="mt-1 text-emerald-400" />
              <p className="text-slate-800 dark:text-slate-100">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
