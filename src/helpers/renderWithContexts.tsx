import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { currentTheme } from '../theme'
import AppProvider from '../context'

const renderWithContexts = (component: ReactNode) => {
  const Wrapper: NextPage = () => (
    <AppProvider>
      <ThemeProvider theme={currentTheme}>{component}</ThemeProvider>
    </AppProvider>
  )

  return render(<Wrapper />)
}

export default renderWithContexts
