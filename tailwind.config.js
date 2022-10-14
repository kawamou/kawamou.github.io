/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
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
  },
  plugins: [],
}
