import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { currentTheme } from '../theme'

const renderWithTheme = (component: ReactNode) => {
  const Wrapper: NextPage = () => (
    <ThemeProvider theme={currentTheme}>{component}</ThemeProvider>
  )

  return render(<Wrapper />)
}

export default renderWithTheme
