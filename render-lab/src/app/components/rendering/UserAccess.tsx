'use client'
import { useState } from 'react'
import { getRandomNumber } from '../../../util/getRandomNumber'
import Button from '../atomic/Button'
import VisualComponent from '../atomic/VisualComponent'
import { RemoteDesktop } from './RemoteDesktop'

export const UserAccess = () => {
  const [instances, setInstances] = useState(1)

  return (
    <VisualComponent title="User Access" problemNote="Oh no, this component update its child without reason"  >
      <h4 className="-mt-2 mb-1  font-thin"> {instances}</h4>

      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
      <RemoteDesktop />
    </VisualComponent>
  )
}
export default UserAccess
