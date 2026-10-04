import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#231F20',
        plum: { DEFAULT: '#9C27B0', dark: '#7B1FA2', light: '#F6E9F9' },
        soft: '#F8F7F9',
        body: '#1D1D1F',
        muted: '#6B6B6B',
        line: '#E8E5EB',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(35,31,32,.04), 0 12px 28px -14px rgba(35,31,32,.18)',
        drawer: '-24px 0 60px -20px rgba(35,31,32,.28)',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'rise': { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'drawer-in': { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
        'drawer-in-left': { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(0)' } },
        'pop': { from: { opacity: '0', transform: 'translateY(10px) scale(.98)' }, to: { opacity: '1', transform: 'translateY(0) scale(1)' } },
        'menu-in': { from: { opacity: '0', transform: 'translateY(-6px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'fade-in': 'fade-in .2s ease-out both',
        'rise': 'rise .8s cubic-bezier(.2,.7,.2,1) both',
        'drawer-in': 'drawer-in .3s cubic-bezier(.2,.7,.2,1) both',
        'drawer-in-left': 'drawer-in-left .3s cubic-bezier(.2,.7,.2,1) both',
        'pop': 'pop .22s ease-out both',
        'menu-in': 'menu-in .18s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
