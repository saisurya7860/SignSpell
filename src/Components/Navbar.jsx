import React from 'react'
import { FaBell } from 'react-icons/fa'
import krishna from '../assets/General/krishna.jpg'

const Navbar = () => {
  return (
    <div className='pl-20 md:pl-80 pt-5'>
        <section className='flex justify-between pr-5'>
            <div className='flex md:hidden text-2xl font-bold text-[#59872f]'>Echohands</div>
            <input
                type="text"
                placeholder='Search'
                className='pl-4 h-[40px] outline-none hidden md:flex w-[300px] rounded-xl active:border-none border-1 focus:ring-2 focus:ring-green-500 border-gray-400'
            />
            <div className='flex gap-3'>
                <div className="relative group cursor-pointer">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-green-500 active:bg-green-700 transition duration-300">
                    <FaBell className="w-5 h-5 text-gray-700 group-hover:text-white group-active:text-white" />
                    </div>
                </div>
                <img src={krishna} alt="" className='w-[40px] sm:flex hidden h-[40px] rounded-3xl border-2 border-green-400'/>
            </div>
        </section>
    </div>
  )
}

export default Navbar
