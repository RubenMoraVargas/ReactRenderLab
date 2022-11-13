'use client'
import { useState } from 'react'
import { getRandomNumber } from '../../../util/getRandomNumber'
import { VisualComponent, Button } from '../atomic'

export const HomeFS = () => {
  const [instances, setInstances] = useState(1)
  return (
    <VisualComponent title="Home FS">
      <h4 className="-mt-2 mb-1  font-thin">
        {instances}
      </h4>

      <Button onClick={() => setInstances(getRandomNumber(100))}>
        Update
      </Button>
    </VisualComponent>
  )
}
export default HomeFS
