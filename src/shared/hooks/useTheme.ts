
import { useCallback, useLayoutEffect, useState } from 'react'

export type ThemeType = 'light' | 'dark'
function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  )

  const onChangeTheme = useCallback(() => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme)
  }, [theme])

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme as ThemeType)
      return
    }
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark')
    }
  }, [])

  return {
    theme,
    onChangeTheme
  }
}

export default useTheme

// export function useThemeFillColor() {
//   const { theme } = useContext(ThemeContext)

//   const themeType = theme === 'light' ? themeStyle.light : themeStyle.dark
//   return themeType.text
// }

