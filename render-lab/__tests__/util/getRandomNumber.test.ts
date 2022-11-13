import { getRandomNumber } from '../../src/util/getRandomNumber'

const dataForTest = [1, 5, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000]
const randomNumberExpected = 0.123456789

describe('GetRandomNumber function tests', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(randomNumberExpected)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  test('Return a valid integer number', () => {
    dataForTest.forEach(item => {
      const result = getRandomNumber(item)
      expect(Number.isInteger(result)).toBe(true)
    })
  })

  test('Use Math Random function', () => {
    expect(getRandomNumber(100)).toBe(12)
    expect(Math.random).toHaveBeenCalled()
  })

  test('Number is less or equal than his max param expected', () => {
    dataForTest.forEach(item => {
      const result = getRandomNumber(item)
      expect(result <= item).toBe(true)
    })
  })
})
