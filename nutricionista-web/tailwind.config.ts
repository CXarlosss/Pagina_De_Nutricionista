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
          DEFAULT: '#5ac062', // Tu verde principal
          light: '#88d98e',   // Una variante más clara del verde
          dark: '#4a9c52',    // Una variante más oscura del verde
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
    },
  },
  plugins: [],
  darkMode: 'class', // Asegúrate de que el modo oscuro esté habilitado por clase
}
