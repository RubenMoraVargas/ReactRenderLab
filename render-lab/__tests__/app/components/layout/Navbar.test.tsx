import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from './../../../../src/app/components/layout/Navbar'

describe('Navbar Component tests', () => {
  it('should render as expected', () => {
    render(<Navbar />)

    const linkFound = screen.getByText(/Ruben Mora/i)
    expect(linkFound).toBeVisible()

    const githubLinkFound = screen.getByText(/Github/i)
    expect(githubLinkFound).toBeVisible()

    const readArticleLinkFound = screen.getByText(/Read article/i)
    expect(readArticleLinkFound).toBeVisible()

    const toggleFound = screen.getByRole('checkbox', {
      name: /optimize/i
    })
    expect(toggleFound).toBeVisible()
  })
})
