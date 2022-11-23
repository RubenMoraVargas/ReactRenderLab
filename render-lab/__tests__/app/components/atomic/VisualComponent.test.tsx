import React from 'react'
import { render, screen } from '@testing-library/react'
import { VisualComponent } from './../../../../src/app/components/atomic'

describe('VisualComponent Component tests', () => {
  it('should render as expected', () => {
    render(<VisualComponent title="Test title" />)
    const title = screen.getByText(/Test title/i)
    expect(title).toBeVisible()
  })
  it('should title and optimizationNote', () => {
    render(<VisualComponent title="Test title" optimizationNote="Test optimizationNote" />)
    const title = screen.getByText(/Test title/i)
    const optimizationNote = screen.getByText(/Test optimizationNote/i)
    expect(title).toBeVisible()
    expect(optimizationNote).toBeVisible()
  })
  it('Show button like a child', () => {
    render(
      <VisualComponent title="Test">
        <button>test-button</button>
      </VisualComponent>
    )
    const buttonFound = screen.getByRole('button', {
      name: /test-button/i
    })
    expect(buttonFound).toBeVisible()
  })
})
