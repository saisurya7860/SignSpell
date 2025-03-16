import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa6";
import { FaEarDeaf } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
        <aside className='fixed flex flex-col justify-between z-50 top-0 bottom-0 left-0 max-w-[260px] min-h-screen pr-2 border-r-2 border-[#dadada]'>
            <div>
                <div className='mt-4 ml-5 flex items-center gap-1'>
                    <FaEarDeaf className='text-3xl'/>
                    <div className='hidden md:flex text-2xl font-bold text-[#59872f]'>Echohands</div>
                </div>

                <div className='mt-4 ml-5 flex flex-col gap-3 text-[1.13rem]'>
                    <NavLink to="/"  className={({ isActive }) =>`flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                        <FaQuestion />
                        <p className="text-[#cdcdcd] hidden md:flex">Dashboard</p>
                    </NavLink>
                    <NavLink to="/learnsign"  className={({ isActive }) =>`flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                        <FaQuestion />
                        <p className="text-[#cdcdcd] hidden md:flex">Learn Sign</p>
                    </NavLink>
                    <NavLink to="/convertsign"  className={({ isActive }) =>`flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                        <FaQuestion />
                        <p className="text-[#cdcdcd] hidden md:flex">Convert</p>
                    </NavLink>
                    <NavLink to="/docs"  className={({ isActive }) =>`flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                        <FaQuestion />
                        <p className="text-[#cdcdcd] hidden md:flex">Docs</p>
                    </NavLink>
                    <NavLink to="/videoinput"  className={({ isActive }) =>`flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                        <FaQuestion />
                        <p className="text-[#cdcdcd] hidden md:flex">Video Input</p>
                    </NavLink>
                    <NavLink to="/setting"  className={({ isActive }) =>`flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                        <FaQuestion />
                        <p className="text-[#cdcdcd] hidden md:flex">Settings</p>
                    </NavLink>
                </div>
            </div>
            

            <div className='min-w-[200px]   relative bg-[#bdf094] h-35 rounded-xl mb-5 ml-5 mr-4 hidden md:flex'>
                <div className='w-[58px] h-[58px] rounded-4xl bg-[#fff] absolute -translate-y-[30px] translate-x-[70px] '>
                    <div className='w-[38px] h-[38px] rounded-3xl bg-[#aed98a] translate-2.5 cursor-pointer'>
                        <FaQuestion className='translate-x-2 translate-y-2 text-2xl animate-bounce ease-in-out transition-all duration-400'/>
                    </div>
                </div>
                <div className=' mt-10 ml-14 text-lg font-semibold'>
                    <p>Help Center</p>
                </div>
            </div>

            <div className='w-[58px] h-[58px] rounded-4xl bg-[#fff] md:hidden flex'>
                <div className='w-[38px] h-[38px] rounded-3xl bg-[#aed98a] translate-2.5'>
                    <FaQuestion className='translate-x-2 translate-y-2 text-2xl animate-bounce ease-in-out transition-all duration-400'/>
                </div>
            </div>

        </aside>
    </>
  )
}

export default Sidebar
