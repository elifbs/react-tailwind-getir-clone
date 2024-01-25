/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'mobile-app': 'url("https://cdn.getir.com/getirweb-images/common/illustration/doodle.png")',
    }
  },
};
export const plugins = [];