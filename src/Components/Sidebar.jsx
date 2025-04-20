import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import sign_spell from '../assets/General/logo.png'
import { FaChartBar, FaSignLanguage, FaExchangeAlt, FaFileAlt, FaCog } from 'react-icons/fa';
import { FaCameraRetro } from 'react-icons/fa';






const Sidebar = () => {
    const sidebarData = {   
        routesPath:['/','/learnsign','/convertsign','/docs','/videoinput','/setting'],
        routesName:['Dashboard','Learn Sign','Convert','Docs','WebCam','Settings'],
        icons:[FaChartBar,FaSignLanguage,FaExchangeAlt,FaFileAlt,FaCameraRetro,FaCog]
    }
  return (
    <>
        <aside className='fixed hidden md:flex flex-col bg-white justify-between z-50 top-0 bottom-0 left-0 max-w-[260px] min-h-screen pr-2 border-r border-[#dadada]'>
            <div>
                <Link to='/'>
                    <div className='mt-4 ml-5 flex items-center gap-1 cursor-pointer'>
                        <img src={sign_spell} className='w-[50px] bold'/>
                        <div className='hidden md:flex text-2xl font-bold text-[#59872f]'>SignSpell</div>
                    </div>
                </Link>
                <div className='mt-8 ml-5 flex flex-col gap-3 text-[1.13rem]'>
                    {sidebarData.routesPath.map((route,index) =>{
                        const Icon = sidebarData.icons[index]
                        return (
                            <NavLink to={route} key={route} className={({isActive})=> `flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                            <Icon className="text-2xl text-gray-600 pr-1" />
                            <p>{sidebarData.routesName[index]}</p>
                            </NavLink>

                        )})}

                    {/* {sidebarData.routesPath.map((route,index) =>(
                        <NavLink to={route} key={index} className={({ isActive }) =>`flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                            <FaQuestion />
                            <p className="">{sidebarData.routesName[index]}</p>
                        </NavLink>
                    ))} */}
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
        </aside>
    </>
  )
}

export default Sidebar
