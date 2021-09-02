import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './variants'

export const currentTheme = defaultTheme

const Theme: NextPage = ({ children }) => {
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default Theme
