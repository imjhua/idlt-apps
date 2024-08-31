// import { ThemeProvider as StyledThemeProvider } from '@emotion/react'
// import { Grommet, grommet, ThemeType as GloblThemeType } from 'grommet'
import React, { type ReactNode } from 'react'

import useTheme, { type ThemeType } from '@/shared/hooks/useTheme'

// import theme from '../styles/theme'

type Props = {
  children: ReactNode;
}

const defaultValue = {
  theme: 'light' as ThemeType,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChangeTheme: () => {},
}

export const ThemeContext = React.createContext(defaultValue)

// const myTheme: GloblThemeType = {
//   global: {
//     // backgrounds: {
//     //   main: {
//     //     dark: 'blue',
//     //     light: 'red'
//     //   }
//     // },
//     font: { family: 'Roboto' },
//     colors: {
//       // background: {
//       //   dark: theme.dark.background,
//       //   light: theme.light.background
//       // },
//       // text: {
//       //   dark: 'red',
//       //   light: 'blue',
//       // },
//       // 'background-back': {
//       //   dark: 'red',
//       //   light: 'blue',
//       // },
//       // 'background-front': {
//       //   dark: 'red',
//       //   light: 'blue',
//       // },
//       // 'background-contrast': {
//       //   dark: 'red',
//       //   light: 'blue',
//       // },
//       // header: {
//       //   dark: theme.dark.background,
//       //   light: theme.light.background
//       // },
//       // main: {
//       //   dark: theme.dark.background,
//       //   light: theme.light.background
//       // },
//       // background: {
//       //   dark: theme.dark.background,
//       //   light: theme.light.background
//       // },
//       // focus: '#4397af' // added focus color
//     },
//     focus: { outline: { color: 'none' } },
//   },
// }

import { Theme } from '@radix-ui/themes'
// import { deepMerge } from 'grommet/utils'

// const xTheme = deepMerge(grommet, myTheme)

function ThemeProvider({ children }: Props) {
  const themeProps = useTheme()
  return (
    <ThemeContext.Provider value={themeProps}>
      {/* SEE: https://www.radix-ui.com/themes/docs/theme/color */}
      <Theme accentColor={themeProps.theme === 'light' ? 'indigo' : 'gray'}>
        {children}
      </Theme>
      {/* <StyledThemeProvider theme={themeProps.theme === 'light' ? theme.light : theme.dark}> */}

      {/* <Grommet theme={xTheme} themeMode={themeProps.theme}>
          {children}
        </Grommet> */}
      {/* </StyledThemeProvider> */}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
