import React from 'react'
import { render, screen } from '@testing-library/react'
import { OptimizeProvider } from './../../src/context'
import { act } from 'react-dom/test-utils'
import Toggle from './../../src/app/components/atomic/Toggle'

describe('Optimize.context function tests', () => {
  it('should useOptimizeContext work with toggle value', () => {
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
})
