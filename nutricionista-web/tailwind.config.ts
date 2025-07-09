/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Asegúrate de que esta ruta incluya todos tus archivos
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',   // Muy claro
          100: '#dcfce7',  // Más claro
          200: '#bbf7d0',
          300: '#86efad',
          400: '#4ade80',
          500: '#22c55e',  // Verde medio
          DEFAULT: '#5ac062', // Tu verde principal actual
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',  // Un verde oscuro bonito
          dark: '#4a9c52', // Tu variante oscura actual
        },
        secondary: {
          DEFAULT: '#33b7b7', // Tu azulito
          light: '#66d1d1',
          dark: '#2a9e9e',
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      // Añade estas propiedades para el efecto glow
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(90, 192, 98, 0.5), 0 0 10px rgba(90, 192, 98, 0.4)' }, // Usando el DEFAULT primary
          '50%': { textShadow: '0 0 10px rgba(90, 192, 98, 0.8), 0 0 20px rgba(90, 192, 98, 0.6)' }, // Usando el DEFAULT primary
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      // Añade estas propiedades para las duraciones de transición personalizadas
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
        '1500': '1500ms', // Duración personalizada de 1.5 segundos
      }
    },
  },
  plugins: [],
  darkMode: 'class', // Asegúrate de que el modo oscuro esté habilitado por clase
}
