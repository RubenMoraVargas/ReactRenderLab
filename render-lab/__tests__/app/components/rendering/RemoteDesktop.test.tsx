import React from 'react'
import { act, render, screen } from '@testing-library/react'
import RemoteDesktop from './../../../../src/app/components/rendering/RemoteDesktop'

describe('RemoteDesktop Component tests', () => {
  it('should render as expected', () => {
    render(<RemoteDesktop />)
    const title = screen.getByText(/Remote Desktop/i)
    expect(title).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<RemoteDesktop />)

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
})
