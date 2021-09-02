import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      highlight: string
      background: string
      white: string
    }
    sizes: {
      small: string
      medium: string
      large: string
    }
    width: {
      container: string
    }
  }
}
