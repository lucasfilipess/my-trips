import type { NextPage } from 'next'
import ThemeProvider from './Theme'

const AppProvider: NextPage = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

export default AppProvider
