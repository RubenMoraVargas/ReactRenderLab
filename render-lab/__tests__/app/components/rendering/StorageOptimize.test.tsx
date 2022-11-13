import React from 'react'
import { act, render, screen } from '@testing-library/react'
import StorageOptimize from './../../../../src/app/components/rendering/StorageOptimize'

describe('StorageOptimize Component tests', () => {
  it('should render as expected', () => {
    render(<StorageOptimize />)
    const title = screen.getByText(/Storage/i)
    expect(title).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const s3ServiceFound = screen.getByText(/Home FS/i)
    expect(s3ServiceFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<StorageOptimize />)

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
})
