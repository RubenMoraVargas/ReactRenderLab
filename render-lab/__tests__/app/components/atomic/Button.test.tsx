import React from 'react'
import Button from './../../../../src/app/components/atomic/Button'
import { render, screen } from '@testing-library/react'

describe('Button Component tests', () => { 
  it('Expects to find button HTML element in the DOM', () => {
    render(
      <Button
        onClick={() => {
          return
        }}>
        test
      </Button>
    )
    const button = screen.getByRole('button', {
      name: /test/i
    })
    expect(button).toBeVisible()
  })

  it('Expects to run onClick function when button is pressed in the DOM', () => {
    const mockCallBackClick = jest.fn()
    const { container } = render(<Button onClick={mockCallBackClick}>test</Button>)
    const button = container.querySelector('button')
    button?.click()
    expect(mockCallBackClick.mock.calls.length).toEqual(1)
  })
})
