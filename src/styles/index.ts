import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      grey900: '#121214',
      grey800: '#202024',
      grey300: '#c4c4cc',
      grey100: '#e1e1e6',

      grenn500: '#00875f',
      green300: '#00b37e',
    },
  },
})
