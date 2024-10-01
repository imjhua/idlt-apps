declare module '@emotion/react' {
  export interface Theme {
    background: string;
    border: string;
    highlight: string;
    /* TODO: 사용하지 않는 프롭 확인 */
    /** @deprecated */
    color: string;
    /** @deprecated */
    divider: string;
    /** @deprecated */
    primary: string;
  }
}

// SEE: https://www.radix-ui.com/themes/docs/theme/color
const theme = {
  background: 'var(--accent-2)',
  border: 'var(--accent-6)',
  highlight: '#ffe58f',

  // light: {
  //   color: '#444',
  //   border: '#dcdddf',
  //   divider: 'rgba(38, 45, 57, .32)',
  //   background: '#fff',
  //   primary: '#7d4cdb',
  //   highlight: '#ffe58f',
  // },
  // dark: {
  //   color: '#eee',
  //   border: '#333',
  //   divider: '#dcdddf',
  //   background: '#222',
  //   primary: '#7d4cdb',
  //   highlight: '#a59b79',
  // }
}
export default theme

import { grommet, type ThemeType as GloblThemeType } from 'grommet'
import { deepMerge } from 'grommet/utils'

const myTheme: GloblThemeType = {
  global: {
    // backgrounds: {
    //   main: {
    //     dark: 'blue',
    //     light: 'red'
    //   }
    // },
    font: { family: 'Roboto' },
    colors: {
      // background: {
      //   dark: theme.dark.background,
      //   light: theme.light.background
      // },
      // text: {
      //   dark: 'red',
      //   light: 'blue',
      // },
      // 'background-back': {
      //   dark: 'red',
      //   light: 'blue',
      // },
      // 'background-front': {
      //   dark: 'red',
      //   light: 'blue',
      // },
      // 'background-contrast': {
      //   dark: 'red',
      //   light: 'blue',
      // },
      // header: {
      //   dark: theme.dark.background,
      //   light: theme.light.background
      // },
      // main: {
      //   dark: theme.dark.background,
      //   light: theme.light.background
      // },
      // background: {
      //   dark: theme.dark.background,
      //   light: theme.light.background
      // },
      focus: '#4397af', // added focus color
    },
    focus: { outline: { color: 'none' } },
  },
}

export const grometTheme = deepMerge(grommet, myTheme)
