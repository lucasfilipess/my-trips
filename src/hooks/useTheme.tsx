import { useContext } from 'react'
import { ThemeContext } from 'context/Theme'

const useTheme = () => {
  const context = useContext(ThemeContext)
  return context
}

export default useTheme
