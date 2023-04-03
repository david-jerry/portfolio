/** @type {import('tailwindcss').Config} */
const Path = require("path");
const pwd = process.env.PWD;

const projectPaths = [
  Path.join(pwd, "./portfolio/templates/**/*.html"),
  Path.join(pwd, "../portfolio/templates/**/*.html"),
  Path.join(pwd, "../../portfolio/templates/**/*.html"),
  // add js file paths if you need
  // Path.join(pwd, "../node_modules/flowbite/**/*.js"),
];

const contentPaths = [...projectPaths];
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: contentPaths,
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xxs: '325px',
        ...defaultTheme.screens
      },
      fontSize: {
        xxs: '0.55rem',
        xs: "0.60rem",
        s: "0.65rem",
      },
      boxShadow: {
        '3xl': '0 -2px 5px 4px rgba(148,148,148,148.014)'
      },
      fontFamily: {
        "poppins": ["'Poppins'", "sans-serif"],
        "p1": ["'Poiret One'", "cursive"],
        "vpro": ["'Be Vietnam Pro'", "sans-serif"],
        "dpuff": ["'DynaPuff'", "cursive"],
        "raleway": ["'Raleway'", "Montserrat", "sans-serif"],
        "slab": ["'Antic Slab'", "serif"]
      },
      colors: {
        light: '#F9F7F0',
        dark: '#343541',
        primary: "#18B7BE",
        secondary: "#178CA4",
        debug: "#636363",
        warning: '#ffab2d',
        info: "#56A4EC",
        danger: '#FF0000',
        success: "#34A853",
      },
      keyframes: {
        wiggle: {
            '0%, 100%': { transform: 'rotate(-9deg)' },
            '50%': { transform: 'rotate(9deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-slow': 'wiggle 2s linear infinite',
        'ping-slow': 'ping 1s linear infinite',
        'ping-slower': 'ping 2s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
    scrollBar: ["rounded"],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    // require("daisyui"),
  ],
};
