
import { ThemeProvider as StyledThemeProvider } from '@emotion/react'
import { Grommet, grommet } from 'grommet'
import React, { ReactNode } from 'react'

import useTheme, { ThemeType } from '@/shared/hooks/useTheme'

import theme from '../styles/theme'

type Props = {
  children: ReactNode;
};

const defaultValue = {
  theme: 'light' as ThemeType,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChangeTheme: () => {}
}

export const ThemeContext = React.createContext(defaultValue)

const myTheme = {
  global: {
    font: { family: 'Roboto', },
    colors: {
      header: {
        dark: theme.dark.background,
        light: theme.light.background
      },
      background: {
        dark: theme.dark.background,
        light: theme.light.background
      },
      focus: '#4397af' // added focus color
    }
  },
}

import { deepMerge } from 'grommet/utils'

const xTheme = deepMerge(grommet, myTheme)

function ThemeProvider({ children }: Props) {
  const themeProps = useTheme()
  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.theme === 'light' ? theme.light : theme.dark}>
        <Grommet theme={xTheme} themeMode={themeProps.theme}>
          {children}
        </Grommet>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

