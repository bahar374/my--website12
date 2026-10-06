/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A3A',
          dark: '#0F1A2A',
          light: '#2A3F54',
          50: '#F0F3F6',
          100: '#D9E0E8',
          200: '#B3C1D1',
          300: '#8DA3BA',
          400: '#6785A3',
          500: '#4A6B8A',
          600: '#345574',
          700: '#243D5A',
          800: '#1B2A3A',
          900: '#0F1A2A',
        },
        ivory: '#F8F5F0',
        champagne: {
          DEFAULT: '#C4A06A',
          light: '#D4B884',
          dark: '#A88550',
        },
        warm: {
          gray: '#F5F2ED',
          white: '#FAFAF8',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', fontWeight: '700' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 7rem)',
      },
      borderRadius: {
        'card': '1rem',
        'lg-card': '1.5rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'scale-in': 'scaleIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
