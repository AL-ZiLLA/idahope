import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f0f5f1',
          100: '#dce8dc',
          200: '#c5d5c5',
          300: '#a8c0a8',
          400: '#8faa8f',
          500: '#6b8f71',
          600: '#5a7d60',
          700: '#4a6d50',
          800: '#3d5a42',
          900: '#334a37',
        },
        cream: {
          50: '#faf8f5',
          100: '#f5f0ea',
          200: '#ebe7e0',
          300: '#e0d9d0',
          400: '#d4cfc8',
        },
        dark: '#2d2d2d',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-up-delay': 'fadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both',
        'fade-in': 'fadeIn 0.3s ease',
        'breathe': 'breathe 8s ease-in-out infinite',
        'breathe-slow': 'breathe 10s ease-in-out infinite 2s',
        'float': 'gentleFloat 4s ease-in-out infinite',
        'float-slow': 'gentleFloat 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
