import styled, { css } from 'styled-components'

type WrapperProps = {
  position?: 'large' | 'medium'
}

export const Wrapper = styled.div<WrapperProps>`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  position: fixed;
  right: ${({ theme }) => theme.sizes.medium};
  ${(props) =>
    props.position === 'medium'
      ? css`
          top: ${props.theme.sizes.medium};
        `
      : css`
          top: ${props.theme.sizes.large};
        `}
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
