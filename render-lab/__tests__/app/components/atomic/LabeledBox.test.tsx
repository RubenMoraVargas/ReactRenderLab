import React from 'react'

import { LabeledBox } from './../../../../src/app/components/atomic/LabeledBox'
import { render, screen, waitFor } from '@testing-library/react'

describe('LabeledBox Component tests', () => {
  it('Should render as expected', () => {
    render(<LabeledBox label="test-label" />)
    const labelFound = screen.getByText(/test-label/i)
    expect(labelFound).toBeVisible()
  })

  it('Show button like a child', () => {
    render(
      <LabeledBox label="Test">
        <button>test-button</button>
      </LabeledBox>
    )
    const buttonFound = screen.getByRole('button', {
      name: /test-button/i
    })
    expect(buttonFound).toBeVisible()
  })

  it('Show titles as children ', async () => {
    render(
      <LabeledBox label="Test">
        <h1>test-title-h1</h1>
        <h2>test-title-h2</h2>
      </LabeledBox>
    )

    await waitFor(() => {
      const titleH1Found = screen.queryByText('test-title-h1')
      expect(titleH1Found).not.toBeNull()
      expect(titleH1Found).toBeVisible()

      const titleH2Found = screen.queryByText('test-title-h2')
      expect(titleH2Found).not.toBeNull()
      expect(titleH2Found).toBeVisible()
    })
  })
})
