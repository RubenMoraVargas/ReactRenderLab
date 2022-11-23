import React from 'react'
import { act, render, screen } from '@testing-library/react'
import UserAccess from './../../../../src/app/components/rendering/UserAccess'

describe('UserAccess Component tests', () => {
  it('should render as expected', () => {
    render(<UserAccess />)
    const title = screen.getByText(/User Access/i)
    expect(title).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const s3ServiceFound = screen.getByText(/Remote Desktop/i)
    expect(s3ServiceFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<UserAccess />)

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })

  it('Should problem note when optimizeContextValue is false', () => {
    render(<UserAccess />)
    const problemNote = screen.queryByText(/Oh no, this component update its child without reason/i)
    expect(problemNote).toBeVisible()
  })
})
