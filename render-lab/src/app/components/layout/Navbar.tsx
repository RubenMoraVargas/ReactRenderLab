'use client'

import Link from 'next/link'
import Toggle from '../atomic/Toggle'
import { AiOutlineRead } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

export const menu = [
  { icon: <AiFillGithub className="  mx-1 text-xl" />, title: 'Github', url: 'https://github.com/RubenMoraVargas/ReactRenderLab' },
  { icon: <AiOutlineRead className="  mx-1 text-xl" />, title: 'Read article', url: 'https://rubenmora.com/blog/react-rendering-lab' }
]

export const Navbar = () => {
  return (
    <nav className="  bg-white   sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto w-full max-w-xl">
        <Link href="https://rubenmora.com" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ruben Mora</span>
        </Link>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 items-center content-center rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.url} className="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:p-0 dark:text-white">
                  <span className="flex flex-row content-center"> 
                    {item.icon} {item.title}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Toggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
