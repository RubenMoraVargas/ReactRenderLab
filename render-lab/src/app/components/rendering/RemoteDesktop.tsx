'use client'

import { useState } from 'react'
import { getRandomNumber } from '../../../util/getRandomNumber'
import { Button, VisualComponent } from '../atomic'

export const RemoteDesktop = () => {
  const [instances, setInstances] = useState(1)

  return (
    <VisualComponent title="Remote Desktop">
      <h4 className="-mt-2 mb-1  font-thin"> {instances}</h4>

      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
    </VisualComponent>
  )
}
export default RemoteDesktop
