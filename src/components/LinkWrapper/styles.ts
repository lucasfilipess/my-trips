import styled from 'styled-components'

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: fixed;
  right: ${({ theme }) => theme.sizes.medium};
  top: ${({ theme }) => theme.sizes.medium};
  z-index: 1100;
  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`
