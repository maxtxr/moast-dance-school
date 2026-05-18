/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'moast-off-white': '#f5f5f5',
        'moast-magenta': '#DA86D4',
        'moast-dark-magenta': '#985A7C',
        'moast-pink': '#FFBFD5',
        'moast-light-pink': '#FEBFD4',
        'moast-dark-pink': '#ff2a6d',
        'moast-teal': '#70ECDF',
        'moast-purple': '#7c3aed',
        'moast-black': '#111111',
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutalist-lg': '6px 6px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        'serif': ['"TAN Buster"', 'serif'],
        'sans': ['"Futura"', 'sans-serif'], 
      },
      backgroundImage: {
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};