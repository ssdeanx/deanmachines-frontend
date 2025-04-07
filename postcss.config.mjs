/** @type {import('postcss').Config} */
const config = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
};

export default config;
