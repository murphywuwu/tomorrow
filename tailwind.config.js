/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-100': 'var(--primary-color-light-100)',
        'primary-200': 'var(--primary-color-light-200)',
        'primary-300': 'var(--primary-color-light-300)',
        'primary-400': 'var(--primary-color-light-400)',
        'primary-500': 'var(--primary-color-light-500)',
        'primary-600': 'var(--primary-color-light-600)',
        'primary-700': 'var(--primary-color-light-700)',
        'primary-800': 'var(--primary-color-light-800)',
        'primary-900': 'var(--primary-color-light-900)',
        secondary: 'var(--secondary-color)',
        'secondary-100': 'var(--secondary-color-light-100)',
        'secondary-200': 'var(--secondary-color-light-200)',
        'secondary-300': 'var(--secondary-color-light-300)',
        'secondary-400': 'var(--secondary-color-light-400)',
        'secondary-500': 'var(--secondary-color-light-500)',
        'secondary-600': 'var(--secondary-color-light-600)',
        'secondary-700': 'var(--secondary-color-light-700)',
        'secondary-800': 'var(--secondary-color-light-800)',
        'secondary-900': 'var(--secondary-color-light-900)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
