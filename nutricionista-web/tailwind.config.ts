/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-primary',
    // 'dark:bg-primary', // 👈 ELIMINAR ESTA LÍNEA
    'bg-primary-500',
    // 'dark:bg-primary-500', // 👈 ELIMINAR ESTA LÍNEA
    'text-primary',
    // 'dark:text-primary', // 👈 ELIMINAR ESTA LÍNEA
    'bg-white',
    'text-gray-900',
    // 'dark:bg-neutral-950', // 👈 ELIMINAR ESTA LÍNEA
    // 'dark:text-white', // 👈 ELIMINAR ESTA LÍNEA
    {
      pattern:
        // ELIMINAR 'dark:bg|dark:text' del patrón de REGEX 
        /(bg|text|border|hover:bg|hover:text|after:bg|after:text|from|to)-(primary|secondary)(-(50|100|200|300|400|500|600|700|800|900|dark))?/,
    },
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efad',
          400: '#4ade80',
          500: '#22c55e',
          DEFAULT: '#5ac062',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          dark: '#4a9c52', // 👈 OPCIONAL: Si no usas "primary-dark", puedes quitar esta entrada también.
        },
        secondary: {
          DEFAULT: '#33b7b7',
          light: '#66d1d1',
          dark: '#2a9e9e', // 👈 OPCIONAL: Si no usas "secondary-dark", puedes quitar esta entrada también.
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow:
              '0 0 5px rgba(90, 192, 98, 0.5), 0 0 10px rgba(90, 192, 98, 0.4)',
          },
          '50%': {
            textShadow:
              '0 0 10px rgba(90, 192, 98, 0.8), 0 0 20px rgba(90, 192, 98, 0.6)',
          },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
      },
    },
  },
  plugins: [],
  // 👈 ELIMINAR ESTA LÍNEA ENTERA
  // darkMode: 'class', 
};