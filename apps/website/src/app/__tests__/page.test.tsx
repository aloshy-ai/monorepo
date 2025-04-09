import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders monetize text', () => {
    render(<Home />)
    
    expect(screen.getByText('Monetize')).toBeInTheDocument()
    expect(screen.getByText('your data securely')).toBeInTheDocument()
  })

  it('renders features link', () => {
    render(<Home />)
    
    // Find the Features link within the navigation
    const links = screen.getAllByText('Features')
    const navigationLink = links.find(link => 
      link.closest('nav')?.classList.contains('md:flex')
    )
    
    expect(navigationLink).toBeInTheDocument()
    expect(navigationLink).toHaveAttribute('href', '#features')
  })
}) 