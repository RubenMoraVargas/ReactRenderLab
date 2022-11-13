import React from 'react'
import { act, render, screen } from '@testing-library/react'
import Storage from './../../../../src/app/components/rendering/Storage'

describe('Storage Component tests', () => {
  it('should render as expected', () => {
    render(<Storage />)
    const title = screen.getByText(/Storage/i)
    expect(title).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()

    const HomeFS = screen.getByText(/Home FS/i)
    expect(HomeFS).toBeVisible()

  })
  it('should update as expected', () => {
    render(<Storage />)

    const updateButtonFound =  screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })

  it('Should problem note when optimizeContextValue is false', () => {
    render(<Storage />)
    const problemNote  = screen.queryByText(/S3 Service generate update these components unnecessarily/i)
    expect(problemNote).toBeVisible()
  })
})
