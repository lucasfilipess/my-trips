import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      highlight: string
      background: string
      map: string
      text: string
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
