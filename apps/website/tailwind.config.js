/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        violet: {
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        orange: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 