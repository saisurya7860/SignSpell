import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='flex flex-row max-h-screen max-w-screen bg-gray-200 dark:bg-gray-900'>

      <div>
        <Sidebar/>
      </div>

      <div className='w-full flex flex-col'>
        <Navbar/>
        <div className='p-2  overflow-y-auto'>
            <Outlet/>
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default Layout
