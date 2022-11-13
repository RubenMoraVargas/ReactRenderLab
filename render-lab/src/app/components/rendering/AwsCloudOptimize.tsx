'use client'
import { Instances, VisualComponent } from '../atomic'
import { S3Service } from './S3Service'

export const AwsCloudOptimize = () => {
  return (
    <div>
      <VisualComponent title="Aws Cloud" optimizationNote="Separate principal action, prevent cascade update">
        <Instances />
        <S3Service />
      </VisualComponent>
    </div>
  )
}
export default AwsCloudOptimize
