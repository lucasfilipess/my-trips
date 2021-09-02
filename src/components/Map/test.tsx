import { screen } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import Map, { Place } from '.'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    renderWithTheme(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place: Place = {
      id: '1',
      name: 'Belo Horizonte',
      slug: 'belo horizonte',
      location: {
        latitude: -19.92083,
        longitude: -43.93778
      }
    }
    renderWithTheme(<Map places={[place]} />)
    expect(screen.getByTitle(/belo horizonte/i)).toBeInTheDocument()
  })
})
