import styled from 'styled-components'

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: auto;
  max-width: ${({ theme }) => theme.width.container};
  text-align: center;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.large};
`

export const Body = styled.div`
  p {
    font-size: ${({ theme }) => theme.sizes.medium};
    line-height: ${({ theme }) => theme.sizes.medium};
  }
`
