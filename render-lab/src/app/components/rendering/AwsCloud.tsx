'use client'
import { useState } from 'react'
import { S3Service } from './S3Service'
import { Button } from '../atomic/Button'
import VisualComponent from '../atomic/VisualComponent'
import { getRandomNumber } from '../../../util/getRandomNumber'

export const AwsCloud = () => {
  const [instances, setInstances] = useState(1)
  return (
    <VisualComponent title="Aws Cloud"  problemNote="Oh no, this component redraw all children, when your state change!">
      <h4 className="-mt-2 mb-1  font-thin"> {instances}</h4>
      <Button onClick={() => setInstances(getRandomNumber(100))}>Update</Button>
      <S3Service />
    </VisualComponent>
  )
}
export default AwsCloud
