/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          50: '#EEF3F8',
          100: '#D6E2EE',
          700: '#123253',
          800: '#0C2A47',
          900: '#0A2540',
          950: '#061829',
        },
        ink: {
          DEFAULT: '#0B1B2B',
          soft: '#334155',
        },
        champagne: {
          DEFAULT: '#C5A059',
          light: '#D9BC85',
          dark: '#A6813D',
        },
        ivory: '#F7F5F0',
        sand: '#EFEAE1',
        stone: '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: [
          '"Plus Jakarta Sans"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      letterSpacing: {
        label: '0.22em',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(10, 37, 64, 0.35)',
        lift: '0 28px 60px -28px rgba(10, 37, 64, 0.45)',
        soft: '0 10px 30px -18px rgba(10, 37, 64, 0.3)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'hero-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1s ease-out both',
        'hero-zoom': 'hero-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
