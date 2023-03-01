import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('should render app component', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
