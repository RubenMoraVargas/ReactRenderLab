'use client'
import { ReactNode } from 'react'
import { BiRefresh } from 'react-icons/bi'
interface ButtonProps {
  children: ReactNode
  onClick: () => void
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="px-4 py-2 rounded bg-teal-800 hover:bg-teal-700 active:outline text-sm">
      <span className="flex flex-row content-center">
        <BiRefresh className="  mx-1 text-xl" />
        {children}
      </span>
    </button>
  )
}
export default Button
