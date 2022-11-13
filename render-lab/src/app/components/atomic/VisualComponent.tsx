'use client'

import { ReactNode } from 'react'

export interface VisualComponentProps {
  title: string
  optimizationNote?: string
  problemNote?: string
  children?: ReactNode
}
export const VisualComponent = ({ title = 'Component', optimizationNote, problemNote, children }: VisualComponentProps) => {
  return (
    <div className={'text-center component bg-slate-800 rounded-md text-white p-4 border border-slate-700 relative mt-4 '}>
      <span key={`${title}-${Math.random()}`} className="rerender absolute left-3 top-2 text-xs font-bold text-teal-50">
        Rendering
      </span>

      <div className="flex  flex-col justify-center w-full ">
        <h2 className="mt-2 font-bold text-lg ">{title}</h2>
        {optimizationNote && <h3 className="  font-thin text-md mb-2 text-teal-400">{optimizationNote}</h3>}
        {problemNote && <h3 className="  font-thin text-md mb-2 text-red-600">{problemNote}</h3>}
      </div>
      {children}
    </div>
  )
}
export default VisualComponent
