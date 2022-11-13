'use client'

import { useOptimizeContext } from '../context/Optimize.context'
import { AwsCloud, AwsCloudOptimize } from './components'

export const HomePage = () => {
  const { optimizeContextValue } = useOptimizeContext()
  return <>{optimizeContextValue ? <AwsCloudOptimize /> : <AwsCloud />}</>
}
export default HomePage
