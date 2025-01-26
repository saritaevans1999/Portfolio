module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Escanea toda la carpeta app
      "./components/**/*.{js,ts,jsx,tsx}", // Escanea componentes
      "./styles/**/*.css", // Incluye estilos globales
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Mantén Inter como base
          blacker: ['BlackerProDisplay', 'serif'], // Incluye la nueva fuente
        },
      },
    },
    plugins: [],
  };
  