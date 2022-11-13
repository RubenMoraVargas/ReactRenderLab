'use client'
import { memo, useState } from 'react'
import { getRandomNumber } from '../../../util/getRandomNumber'
import { VisualComponent, Button } from '../atomic'

import HomeFS from './HomeFS'

// eslint-disable-next-line react/display-name
export const StorageOptimize = memo(() => {
  const [instances, setInstances] = useState(1)

  return (
    <VisualComponent title="Storage" optimizationNote="Use memo, prevent parent update">
      <h4 className="-mt-2 mb-1  font-thin"> {instances}</h4>

      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
      <HomeFS />
    </VisualComponent>
  )
})
export default StorageOptimize
