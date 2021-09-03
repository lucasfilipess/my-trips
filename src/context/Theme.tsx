import type { NextPage } from 'next'
import { createContext, useState } from 'react'

export type DefaultTheme = 'light' | 'dark'

export type ThemeContextProps = {
  theme: DefaultTheme
  handleSetTheme: (theme: DefaultTheme) => void
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

const ThemeProvider: NextPage = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>('light')

  const handleSetTheme = (selectedTheme: DefaultTheme) =>
    setTheme(selectedTheme)

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
