'use client'

import { Button } from './Button'
import { useState } from 'react'
import { getRandomNumber } from '../../../util/getRandomNumber'

export const Instances = () => {
  const [instances, setInstances] = useState(1)
  return (
    <>
      <h4 className="-mt-2 mb-1  font-thin">{instances}</h4>

      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
    </>
  )
}
export default Instances
