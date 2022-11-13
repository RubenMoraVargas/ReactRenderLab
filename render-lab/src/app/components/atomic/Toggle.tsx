'use client'

import { useOptimizeContext } from '../../../context/Optimize.context'

export const Toggle = () => {
  const { setOptimizeContextValue, optimizeContextValue } = useOptimizeContext()
  const isOptimize = optimizeContextValue
  return (
    <label htmlFor="teal-toggle" className="mt-1 ml-10 inline-flex relative items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        value="toggle"
        id="teal-toggle"
        className="sr-only peer"
        checked={optimizeContextValue}
        onChange={() => {
          setOptimizeContextValue((isOptimize: boolean) => !isOptimize)
        }}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-red-700 peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
      {isOptimize ? (
        <span className="ml-8 text-sm font-medium text-gray-900 dark:text-gray-300">Optimize</span>
      ) : (
        <span className="ml-2  text-sm font-medium text-gray-900 dark:text-gray-300">No Optimize</span>
      )}
    </label>
  )
}

export default Toggle
