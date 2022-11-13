module.exports = {
  content: ['./src/**/*.{tsx,ts,html,js}'],  
  variants: {
  extend: {},
  },
  plugins: [require('flowbite/plugin')],
  theme: {
    colors: {
      dark: "#1a191f"
    }
  }
};