import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    highlight: '#0D7445',
    background: '#ececec',
    map: '#75CFF0',
    text: '#444444'
  },
  sizes: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem'
  },
  width: {
    container: '100rem'
  }
}

export const darkTheme: DefaultTheme = {
  colors: {
    highlight: '#83888b',
    background: '#081217',
    map: '#081217',
    text: '#eeeeee'
  },
  sizes: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem'
  },
  width: {
    container: '100rem'
  }
}
