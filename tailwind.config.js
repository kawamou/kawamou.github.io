/** @type {import('tailwindcss').Config} */ // 型補完

const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'Avenir',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Noto Sans JP',
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'YuGothic',
          'Yu Gothic',
          'メイリオ',
          'Meiryo',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
        ],
      },
    },
    // boxShadow: {
    //   sm: '0 2px 4px 0 rgb(0 0 0 / 0.05)',
    //   // rest of the box shadow values
    // },
  },
  plugins: [],
})
