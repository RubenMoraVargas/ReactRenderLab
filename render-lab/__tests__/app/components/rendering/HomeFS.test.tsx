import React from 'react'
import { act, render, screen } from '@testing-library/react'
import HomeFS from './../../../../src/app/components/rendering/HomeFS'

describe('HomeFS Component tests', () => {
  it('should render as expected', () => {
    render(<HomeFS />)
    const title = screen.getByText(/Home FS/i)
    expect(title).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<HomeFS />)

    const updateButtonFound =  screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
})
