/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        forest: {
          DEFAULT: '#104C36',
          deep: '#073D2C',
          soft: '#1C6B4C',
          50: '#F2F7F4',
          100: '#DCEBE2',
        },
        honey: {
          DEFAULT: '#F5AC18',
          light: '#FBC85C',
          soft: '#FFF3D6',
          dark: '#D98F0A',
        },
        cream: '#FFF9ED',
        warm: '#FFFDF7',
        mint: '#F2F7F1',
        ink: '#243E32',
        line: '#E9DFC9',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Tahoma', 'system-ui', 'sans-serif'],
        display: ['Vazirmatn', 'Tahoma', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.25', fontWeight: '800' }],
        section: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.4', fontWeight: '800' }],
      },
      borderRadius: {
        card: '1rem',
        xl2: '1.75rem',
      },
      boxShadow: {
        soft: '0 10px 30px -18px rgba(16, 76, 54, 0.35)',
        card: '0 18px 40px -24px rgba(16, 76, 54, 0.45)',
        honey: '0 18px 40px -22px rgba(217, 143, 10, 0.55)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        beeFloat: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -12px, 0) rotate(6deg)' },
        },
        beeDrift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-4deg)' },
          '50%': { transform: 'translate3d(-14px, -14px, 0) rotate(6deg)' },
        },
        dash: {
          to: { strokeDashoffset: '-60' },
        },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'bee-float': 'beeFloat 6s ease-in-out infinite',
        'bee-drift': 'beeDrift 9s ease-in-out infinite',
        dash: 'dash 6s linear infinite',
        'rise-in': 'riseIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
