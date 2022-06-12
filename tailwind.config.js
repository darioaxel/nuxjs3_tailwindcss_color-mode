/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'app.vue',
    'plugins/**/*.{js,ts}',
    'nuxt.config.{js,ts}',
  ],
  darkMode: "class",
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: [
      "dark", 
      "dark-focus", 
      "dark-focus-within"],
    textColor: [
      "dark", 
      "dark-hover", 
      "dark-active"]
  }
};