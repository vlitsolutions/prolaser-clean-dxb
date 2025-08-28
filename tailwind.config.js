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
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#0066CC',
            700: '#0052A3',
            800: '#1e40af',
            900: '#1e3a8a',
          },
        },
        fontFamily: {
          sans: ['var(--font-futura)', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif'],
          futura: ['var(--font-futura)', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif'],
          spinnaker: ['var(--font-spinnaker)', 'Spinnaker', 'sans-serif'],
          inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }