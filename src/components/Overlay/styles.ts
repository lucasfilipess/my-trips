import styled, { css } from 'styled-components'

type Props = {
  open: 'true' | 'false'
}

type IconProps = {
  position: 'start' | 'end'
}

export const Wrapper = styled.div<Props>`
  ${({ open }) =>
    open === 'true'
      ? css`
          background: rgba(0, 0, 0, 0.3);
          bottom: 0;
          color: ${({ theme }) => theme.colors.text};
          height: 100%;
          position: fixed;
          right: 0;
          top: 0;
          width: 100%;
          z-index: 1200;
        `
      : css`
          display: none;
        `};
`
export const Sidebar = styled.div<Props>`
  ${({ open }) =>
    open === 'true'
      ? css`
          background: ${({ theme }) => theme.colors.background};
          bottom: 0;
          color: ${({ theme }) => theme.colors.text};
          height: 100%;
          position: fixed;
          right: 0;
          top: 0;
          width: 300px;
          z-index: 1300;
        `
      : css`
          display: none;
        `};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.sizes.small};
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.sizes.medium};
  width: 100%;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.medium};
  text-align: center;
  width: 100%;
`
export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`

export const MenuButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  right: ${({ theme }) => theme.sizes.medium};
  top: 1rem;
  z-index: 1300;
  svg {
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`

export const Icon = styled.span<IconProps>`
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  height: 26px;
  justify-content: ${({ position }) => `flex-${position}`};
  padding: 5px;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.small};
  width: 100%;
  a,
  p {
    font-size: 1.6rem;
    line-height: 1.3;
  }
`
