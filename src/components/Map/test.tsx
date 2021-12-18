import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Pedro',
      slug: 'sao pedro',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Cabo Frio',
      slug: 'Cabo Frio',
      location: {
        latitude: 54,
        longitude: -4
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/são pedro/i))
    expect(screen.getByTitle(/cabo frio/i))
  })
})
