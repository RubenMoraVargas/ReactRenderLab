import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { Instances } from './../../../../src/app/components/atomic/Instances'
import { getRandomNumber } from './../../../../src/util/getRandomNumber'
jest.mock('./../../../../src/util/getRandomNumber')

const randomNumberExpected = 50
const mockGetRandomNumber = getRandomNumber as jest.Mocked<typeof getRandomNumber>
;(mockGetRandomNumber as jest.Mock).mockReturnValue(randomNumberExpected)

describe('Instances Component tests', () => {
  it('Should render as expected', () => {
    const { getByRole } = render(<Instances />)
    const title = getByRole('heading', { level: 4 })
    const updateButton = getByRole('button', { name: /update/i })

    expect(title).toBeInTheDocument()
    expect(updateButton).toBeInTheDocument()
  }),
    it('Update instances when button clicked', async () => {
      const numberNotExpected = randomNumberExpected + 10
      const { getByRole } = render(<Instances />)
      const updateButton = getByRole('button', { name: /update/i })
      act(() => {
        updateButton.click()
      })

      const title = screen.queryByRole('heading', { level: 4 })
      expect(title).not.toBeNull()
      expect(title?.textContent).not.toEqual(numberNotExpected.toString())
      expect(title?.textContent).toEqual(randomNumberExpected.toString())
    })
})
