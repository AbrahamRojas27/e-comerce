/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image": "url('https://img.freepik.com/free-photo/videogamer-winning-first-person-shooter-tournament-using-rgb-keyboard-professional-headphones-pro-player-man-talking-with-other-players-online-game-competition-powerful-computer_482257-3933.jpg?w=1060&t=st=1696614762~exp=1696615362~hmac=ab106aacfa44b87423cf4a6bde9d420ec5394163ef48e6cb3d485aaefc62d7af')",
        "login": "url('https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?w=996&t=st=1696882098~exp=1696882698~hmac=9f8cb51c69923ba5d8e99a38db52e03d5c42f496b1ae48e230109c3bf88e4a90')",
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
