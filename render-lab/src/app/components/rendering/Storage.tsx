'use client'
import { useState } from 'react'
import { getRandomNumber } from '../../../util/getRandomNumber'
import { VisualComponent, Button } from '../atomic'

import HomeFS from './HomeFS'

export const Storage = () => {
  const [instances, setInstances] = useState(1)

  return (
    <VisualComponent title="Storage" problemNote="S3 Service generate update these components unnecessarily">
      <h4 className="-mt-2 mb-1  font-thin"> {instances}</h4>
      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
      <HomeFS />
    </VisualComponent>
  )
}
export default Storage
