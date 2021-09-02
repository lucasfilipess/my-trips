import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  svg {
    fill: ${({ theme }) => theme.colors.highlight};
  }
`
