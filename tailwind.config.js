module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        winter: "url('/public/assets/winter.jpg')",
        city: "url('/public/assets/city.png')",
        banner: "url('/public/assets/banner.png')",
        beach2: "url('/public/assets/beach2.png')",
        road: "url('/public/assets/road.png')",
        wave: "url('/public/assets/wave.png')",
        calm: "url('/public/assets/calm.jpg')",
      },
    },
    colors: {
      pink: '#DBC2CF',
      manatee: '#9FA2B2',
      teal: '#3C7A89',
      charcoal: '#2E4756',
      gunmetal: '#16262E',
      white: '#e2e8f0',
      purewhite: '#ffffff',
      pinkcard: '#F0DEE7',
    },
  },
  plugins: [],
};
