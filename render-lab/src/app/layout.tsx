'use client'
import Navbar from './components/layout/Navbar'
import { OptimizeProvider } from '../context/Optimize.context'
import './../../styles/main.css'
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <title>React.js lab to show and fix rendering problems</title>
        <meta name="description" content="React Typescript with Vite.js lab to show rendering problems and solutions" />
        <meta name="keywords" content="React.js, Vite.js, Frontend developer, Typescript, HTML, CSS, JavaScript" />
        <meta name="author" content="Ruben Mora Vargas" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark">
        <OptimizeProvider>
          <div className="p-6 bg-slate-800 min-h-screen text-white">
            <Navbar />
            <div className="pt-16 max-w-2xl mx-auto">
              <header className="text-center">
                <h1 className="text-center font-bold text-2xl mb-4 md:text-4xl md:mt-6">React.js Rendering lab testing</h1>
                <p className="mb-8 leading-tight">Custom sample to learn about sides effects with render components in react</p>
              </header>
              {children}
            </div>
          </div>
        </OptimizeProvider>
      </body>
    </html>
  )
}
export default RootLayout
