'use client';

import { skills } from '@/data/content';
import { motion } from 'framer-motion';

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div className="glass relative overflow-hidden rounded-2xl p-6">
    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="pill">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export function Skills() {
  return (
    <section id="skills" className="section-container py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Skills & Stack
          </p>
          <h3 className="font-display text-3xl">Tools that stay in my daily rotation</h3>
        </div>
        <span className="pill hidden md:inline-flex">Focus: quality + velocity</span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <SkillGroup title="Main tools I use daily" items={skills.daily} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <SkillGroup title="Also comfortable with" items={skills.also} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SkillGroup title="Core strengths" items={skills.core} />
        </motion.div>
      </div>
    </section>
  );
}
