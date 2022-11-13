'use client'
import { ReactNode, useState } from 'react'
import { getRandomNumber } from '../../../util/getRandomNumber'
import { Button, VisualComponent } from '../atomic'

interface FetchProps {
  child: ReactNode
}
export const UserAccessOptimize = ({ child }: FetchProps) => {
  const [instances, setInstances] = useState(1)

  return (
    <VisualComponent title="User Access" optimizationNote="Use Props, prevent cascade update">
      <h4 className="-mt-2 mb-1  font-thin"> {instances}</h4>
      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
      {child}
    </VisualComponent>
  )
}
export default UserAccessOptimize
