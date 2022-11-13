import React from 'react'
import { act, render, screen } from '@testing-library/react'
import S3Service from './../../../../src/app/components/rendering/S3Service'
import { Toggle } from './../../../../src/app/components/atomic/Toggle'
import { OptimizeProvider } from './../../../../src/context/Optimize.context'

describe('S3Service Component tests', () => {
  it('should render as expected', () => {
    render(<S3Service />)
    const title = screen.getAllByText(/S3 Service/i)[0]

    expect(title).toBeVisible()

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()

    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
  it('should update as expected', () => {
    render(<S3Service />)

    const updateButtonFound = screen.getAllByText(/Update/i)[0]
    expect(updateButtonFound).toBeVisible()
    act(() => {
      updateButtonFound.click()
    })
    const instancesHeaderFound = screen.getAllByRole('heading')[0]
    expect(instancesHeaderFound).toBeVisible()
  })
  it('Not show in child\'s the optimization titles when optimizeContextValue is false', () => {
    render(
      <OptimizeProvider>
        <S3Service />
      </OptimizeProvider>
    )
    const UserAccessOptimize = screen.queryByText(/Use Props, prevent cascade update/i)
    expect(UserAccessOptimize).not.toBeInTheDocument()

    const StorageOptimize = screen.queryByText(/Use memo, prevent parent update/i)
    expect(StorageOptimize).not.toBeInTheDocument()
  })
  it('Show in child\'s the optimization when optimizeContextValue is true', () => {
    render(
      <OptimizeProvider>
        <Toggle />
        <S3Service />
      </OptimizeProvider>
    )

    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeVisible()
    act(() => {
      toggle.click()
    })

    const UserAccessOptimize = screen.queryByText(/Use Props, prevent cascade update/i)
    expect(UserAccessOptimize).toBeVisible()

    const StorageOptimize = screen.queryByText(/Use memo, prevent parent update/i)
    expect(StorageOptimize).toBeVisible()
  })
})
