import React from 'react'
import { FaBell } from 'react-icons/fa'
import krishna from '../assets/General/krishna.jpg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='pl-20 md:pl-61'>
        <section className='flex fixed top-0 right-0 left-61 bg-white justify-between pl-10 pr-5 p-3 border-b border-gray-300'>
            <div className='flex md:hidden text-2xl font-bold text-[#59872f]'>Echohands</div>
            <input
                type="text"
                placeholder='Search'
                className='pl-4 h-[43px] outline-none hidden md:flex w-[300px] rounded-xl active:border-none  focus:ring-3 border-1 focus:ring-[#59872f] border-gray-400'
            />
            <div className='flex gap-3'>
                <div className="relative group cursor-pointer">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-[#59872f] active:bg-green-700 transition duration-300">
                    <FaBell className="w-5 h-5 text-gray-700 group-hover:text-white group-active:text-white" />
                    </div>
                </div>
                <img src={krishna} onClick={() => navigate('/profile')} alt="" className='cursor-pointer w-[45px] sm:flex hidden h-[45px] rounded-3xl border-3 border-[#b2f094]'/>
            </div>
        </section>
    </div>
  )
}

export default Navbar
