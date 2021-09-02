import { screen } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import LinkWrapper from '.'

describe('<LinkWrapper/>', () => {
  it('should render link and children', () => {
    renderWithTheme(<LinkWrapper href="/my-link">Anything</LinkWrapper>)
    const children = screen.getByRole('link', { name: /anything/i })
    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
