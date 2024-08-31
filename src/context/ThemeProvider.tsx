import { ThemeProvider as StyledThemeProvider } from '@emotion/react'
import { Grommet } from 'grommet'
import React, { type ReactNode } from 'react'

import useTheme, { type ThemeType } from '@/shared/hooks/useTheme'

type Props = {
  children: ReactNode;
}

const defaultValue = {
  theme: 'light' as ThemeType,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChangeTheme: () => {},
}

export const ThemeContext = React.createContext(defaultValue)

import { css, Global } from '@emotion/react'
import { Theme } from '@radix-ui/themes'

import theme, { grometTheme } from '@/styles/theme'

function ThemeProvider({ children }: Props) {
  const themeProps = useTheme()
  return (
    <>
      <Global
        styles={css`
        :root { 
          background: ${themeProps.theme === 'light' ? 'var(--color-light-bg)' : 'var(--color-dark-bg)'}; 
        }
    `}
      />
      <ThemeContext.Provider value={themeProps}>
        {/* SEE: https://www.radix-ui.com/themes/docs/theme/color */}
        <Theme accentColor="gray" appearance={themeProps.theme === 'light' ? 'light' : 'dark'}>
          <StyledThemeProvider theme={theme}>
            {/* <StyledThemeProvider theme={themeProps.theme === 'light' ? theme.light : theme.dark}> */}
            <Grommet theme={grometTheme} themeMode={themeProps.theme}>
              {children}
            </Grommet>
          </StyledThemeProvider>
        </Theme>
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
