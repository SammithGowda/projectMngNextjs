import React from 'react'
import {Menu, Moon, Search, Settings, Sun} from "lucide-react"
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from 'src/app/redux'
import { setIsDarkMode, setIsSidebarCollapsed } from 'src/state'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state)=>state.global.isDarkMode);

  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black '>
      <div className='flex items-center gap-8'>
        {!isSidebarCollapsed ? null : (
          <button onClick={()=> dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
            <Menu className='h-8 w-8 dark:text-white'/>
          </button>
        )}
        <div className='relative flex h-min w-[200]'>
          <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
          <input className='w-full border-2 p-1 pl-8 bg-gray-100 placeholder-gray-500 focus:border-transparent border-none focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white' 
            type='search'
            placeholder='Search...'
          />
        </div>
      </div>

      {/* Icons */}
      <div className='flex items-center border-2 border-red-500'>
        <button
          className={
            isDarkMode 
              ? `rounded p-2 dark:hover:bg-gray-700`
              :`rounded p-2 dark:hover:bg-gry-100`
          }
          onClick={()=> dispatch(setIsDarkMode(!isDarkMode))}
          >
          {isDarkMode?(<Sun className='h-6 w-6 cursor-pointer dark:text-white'/>):(<Moon className='h-6 w-6 cursor-pointer dark:text-white'/>)}
        </button>
        <Link
          href="/Settings"
          className={ isDarkMode ? 'h-min w-min rounded p-2 hover:bg-gray-700':'h-min w-min rounded p-2 hover:bg-gray-100'}
        >
          <Settings className='h-6 w-6 cursor-pointer dark:text-white'/>
        </Link>
        <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'></div>
      </div>
    </div>
  )
}

export default Navbar