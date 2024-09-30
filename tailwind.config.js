module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quizz-blue': '#3498db',
        'quizz-yellow': '#f1c40f',
        'quizz-green': '#2ecc71',
        'quizz-red': '#e74c3c',
        'quizz-white': '#ffffff',
        'quizz-black': '#000000',
      },
      spacing: {
        'quizz-margin': '20px',
      },
      padding: {
        'quizz-padding': '20px',
      },
      borderRadius: {
        'quizz-radius': '10px',
      },
    },
  },
  plugins: [],
}