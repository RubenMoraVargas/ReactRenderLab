import React from 'react'
import { render, screen } from '@testing-library/react'
import Toggle from './../../../../src/app/components/atomic/Toggle'
import { OptimizeProvider } from './../../../../src/context/Optimize.context'
import { act } from 'react-dom/test-utils'

describe('Toggle Component tests', () => {
  it('Should render as expected', () => {
    render(
      <OptimizeProvider>
        <Toggle />
      </OptimizeProvider>
    )

    const tagFound = screen.getByText(/optimize/i)
    expect(tagFound).toBeVisible()
  })
  it('should toggle change off to on', () => {
    render(
      <OptimizeProvider>
        <Toggle />
      </OptimizeProvider>
    )

    const toggle = screen.getByRole('checkbox')
    expect(toggle).not.toBeChecked()
    act(() => {
      toggle.click()
    })
    expect(toggle).toBeChecked()
  })

  it('should toggle change off to on to off again', () => {
    render(
      <OptimizeProvider>
        <Toggle />
      </OptimizeProvider>
    )

    const toggle = screen.getByRole('checkbox')
    expect(toggle).not.toBeChecked()
    act(() => {
      toggle.click()
      toggle.click()
    })
    expect(toggle).not.toBeChecked()
  })
})
