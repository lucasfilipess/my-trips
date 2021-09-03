import type { NextPage } from 'next'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  DefaultTheme
} from 'styled-components'
import useTheme from 'hooks/useTheme'
import { lightTheme, darkTheme } from './variants'

export let currentTheme: DefaultTheme = {} as DefaultTheme

const ThemeProvider: NextPage = ({ children }) => {
  const { theme } = useTheme()
  if (theme === 'light') {
    currentTheme = lightTheme
  } else if (theme === 'dark') {
    currentTheme = darkTheme
  }
  return (
    <StyledComponentsThemeProvider theme={currentTheme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
