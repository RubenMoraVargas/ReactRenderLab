import React from 'react'
import { act, render, screen } from '@testing-library/react'
import AwsCloudOptimize from './../../../../src/app/components/rendering/AwsCloudOptimize'

describe('AwsCloudOptimize Component tests', () => {
  it('should render as expected', () => {
    render(<AwsCloudOptimize />)
    const title = screen.getByText(/Aws Cloud/i)
    expect(title).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const s3ServiceFound = screen.getAllByText(/S3 Service/i)[0]
    expect(s3ServiceFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<AwsCloudOptimize />)

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
})
