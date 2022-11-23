import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { HomePage, Toggle } from './../../src/app'
import { OptimizeProvider } from './../../src/context'

describe('HomePage Component tests', () => {
  it('should HomePage render as expected', () => {
    render(<HomePage />)

    const awsCloud = screen.getByText(/AWS Cloud/i)
    expect(awsCloud).toBeInTheDocument()

    const optimizeTitle = screen.queryByText(/Separate principal action, prevent cascade update/i)
    expect(optimizeTitle).not.toBeInTheDocument()
  })
  it('Should HomePage render AwsCloudOptimize component as expected', () => {
    render(
      <>
        <OptimizeProvider>
          <Toggle />
          <HomePage />
        </OptimizeProvider>
      </>
    )

    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeVisible()
    act(() => {
      toggle.click()
    })

    const awsCloudComponent = screen.getByText(/AWS Cloud/i)
    expect(awsCloudComponent).toBeInTheDocument()
    const optimizeTitle = screen.queryByText(/Separate principal action, prevent cascade update/i)
    expect(optimizeTitle).toBeInTheDocument()
  })
})
