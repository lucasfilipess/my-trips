import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{ 
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  a, p{
    font-size: 2rem;
    line-height: ${({ theme }) => theme.sizes.medium};
  }

  a{
    color: ${({ theme }) => theme.colors.highlight};
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(221, 221, 221, 0.3);
    background-clip: padding-box;
    border: 5px solid transparent;
    border-radius: 10px;
  }

`

export default GlobalStyle
