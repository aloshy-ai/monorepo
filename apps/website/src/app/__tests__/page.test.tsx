import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders welcome message', () => {
    render(<Home />)
    
    expect(screen.getByText('Welcome to Aloshy AI')).toBeInTheDocument()
    expect(screen.getByText('Your next-generation AI platform')).toBeInTheDocument()
  })

  it('renders documentation link', () => {
    render(<Home />)
    
    const link = screen.getByText('View Documentation')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'http://localhost:3001')
  })
}) 