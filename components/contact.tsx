'use client';

import { FormEvent, useState } from 'react';
import { Button } from './ui/button';
import { contactNote, profile } from '@/data/content';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import Link from 'next/link';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    setStatus('sending');
    const form = new FormData(formEl);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      formEl.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-container py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Contact
          </p>
          <h3 className="font-display text-3xl">Let&apos;s build something valuable</h3>
          <p className="text-slate-700 dark:text-slate-200">{contactNote}</p>
          <div className="space-y-2">
            <Link href={`mailto:${profile.email}`} className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <FiMail /> {profile.email}
            </Link>
            <Link href="https://linkedin.com/in/iwaqar" className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <FiLinkedin /> LinkedIn
            </Link>
            <Link href="https://github.com/waqar-imtiaz" className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <FiGithub /> GitHub
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">Typical response: within one business day.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass space-y-4 rounded-2xl p-6"
          aria-label="Contact form"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
              <span>Name</span>
              <input
                required
                name="name"
                className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus dark:border-slate-800 dark:bg-white/5 dark:text-slate-100"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
              <span>Email</span>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus dark:border-slate-800 dark:bg-white/5 dark:text-slate-100"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
            <span>Company (optional)</span>
            <input
              name="company"
              className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus dark:border-slate-800 dark:bg-white/5 dark:text-slate-100"
              placeholder="Acme Corp"
            />
          </label>
          <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
            <span>Budget / Project type (optional)</span>
            <input
              name="budget"
              className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus dark:border-slate-800 dark:bg-white/5 dark:text-slate-100"
              placeholder="e.g. Web app, dashboard, design system"
            />
          </label>
          <label className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
            <span>Message</span>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus dark:border-slate-800 dark:bg-white/5 dark:text-slate-100"
              placeholder="Project goals, timeline, links..."
            />
          </label>
          <div className="flex items-center gap-3">
            <Button type="submit" className="gap-2" disabled={status === 'sending'}>
              <FiSend />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </Button>
            {status === 'sent' && (
              <span className="text-sm text-emerald-500">Thanks! I&apos;ll reply soon.</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-rose-500">Message failed. Try again or email me.</span>
            )}
          </div>
          
        </form>
      </div>
    </section>
  );
}
