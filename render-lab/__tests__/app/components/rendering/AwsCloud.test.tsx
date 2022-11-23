import React from 'react'
import { act, render, screen } from '@testing-library/react'
import AwsCloud from './../../../../src/app/components/rendering/AwsCloud'

describe('AwsCloud Component tests', () => {
  it('should render as expected', () => {
    render(<AwsCloud />)
    const title = screen.getByText(/Aws Cloud/i)
    expect(title).toBeVisible()

    const s3ServiceFound = screen.getAllByText(/S3 Service/i)[0]
    expect(s3ServiceFound).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<AwsCloud />)

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
  it('Should problem note when optimizeContextValue is false', () => {
    render(<AwsCloud />)
    const problemNote = screen.queryByText(/Oh no, this component redraw all children, when your state change!/i)
    expect(problemNote).toBeVisible()
  })
})
