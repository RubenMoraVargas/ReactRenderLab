import React from 'react'
import { act, render, screen } from '@testing-library/react'
import UserAccessOptimize from './../../../../src/app/components/rendering/UserAccessOptimize'
import RemoteDesktop from './../../../../src/app/components/rendering/RemoteDesktop'

describe('UserAccessOptimize Component tests', () => {
  it('should render as expected', () => {
    render(<UserAccessOptimize child={<RemoteDesktop />} />)
    const title = screen.getByText(/User Access/i)
    expect(title).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const childFound = screen.getByText(/Remote Desktop/i)
    expect(childFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<UserAccessOptimize child={<RemoteDesktop />} />)

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
})
