import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: {
          DEFAULT: 'rgb(var(--color-canvas) / <alpha-value>)',
          muted: 'rgb(var(--color-canvas-muted) / <alpha-value>)',
        },
        focus: 'rgb(var(--color-focus) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 15px 60px rgba(0,0,0,0.08)',
        glass: '0 8px 32px rgba(15, 23, 42, 0.16)',
      },
      animation: {
        'slow-pulse': 'slow-pulse 12s ease-in-out infinite',
      },
      keyframes: {
        'slow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-slate': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.25) 1px, transparent 0)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};

export default config;
