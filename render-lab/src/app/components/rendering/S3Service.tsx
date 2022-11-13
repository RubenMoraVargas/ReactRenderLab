'use client'

import { RemoteDesktop } from './RemoteDesktop'
import { useState } from 'react'

import { useOptimizeContext } from '../../../context'
import Button from '../atomic/Button'
import VisualComponent from '../atomic/VisualComponent'
import UserAccessOptimize from './UserAccessOptimize'
import StorageOptimize from './StorageOptimize'
import Storage from './Storage'
import UserAccess from './UserAccess'
import { getRandomNumber } from '../../../util/getRandomNumber'

export const S3Service = () => {
  const [instances, setInstances] = useState(1)
  const { optimizeContextValue } = useOptimizeContext()

  return (
    <VisualComponent title="S3 Service">
      <h4 className="-mt-2 mb-1  font-thin"> {instances}</h4> 
      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        {optimizeContextValue ? <UserAccessOptimize child={<RemoteDesktop />} /> : <UserAccess />}
        {optimizeContextValue ? <StorageOptimize /> : <Storage />}
      </div>
    </VisualComponent>
  )
}
export default S3Service
