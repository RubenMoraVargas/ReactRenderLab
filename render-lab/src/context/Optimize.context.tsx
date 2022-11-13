import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
 
export interface ContextState {
  optimizeContextValue: boolean
  setOptimizeContextValue: Dispatch<SetStateAction<boolean>>
}
export const OptimizeContext = createContext<ContextState>({} as ContextState)

export const OptimizeProvider = ({ children }: { children: any }) => {
  const [optimizeContextValue, setOptimizeContextValue] = useState<boolean>(false)
  return <OptimizeContext.Provider value={{ optimizeContextValue, setOptimizeContextValue }}>{children}</OptimizeContext.Provider>
}

export const useOptimizeContext = () => {
  const context = useContext(OptimizeContext)
  if (context === undefined) {
    throw new Error('OptimizeContext must be used within a OptimizeProvider')
  }
  return context
}
