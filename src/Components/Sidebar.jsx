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
        <aside className='hidden md:flex transition-all w-[230px]  px-4 duration-300  flex-col bg-[#f3f4f6] dark:bg-[#333333] dark:border-[#444444] dark:border: 1px solid  justify-between z-50 h-screen border-r border-[#dadada]'>
            <div className=''>
                <Link to='/'>
                    <div className='mt-4 flex items-center gap-2 cursor-pointer'>
                        <img src={sign_spell} className='w-[40px] bold'/>
                        <div className='transition-all duration-300 text-2xl font-bold text-[#5d892c]'>SignSpell</div>
                    </div>
                </Link>
                <div className='mt-8 flex flex-col  gap-1 text-[1.13rem]'>
                    {sidebarData.routesPath.map((route,index) =>{
                        const Icon = sidebarData.icons[index]
                        return (
                            <NavLink to={route} key={route}>{({ isActive }) => (
                                <div className={`flex items-center text-[#364153] gap-x-4 p-2 w-full rounded-md ${isActive ? 'bg-[#b8f278] ' : ''}`}>
                                    <Icon className={`${isActive ? 'text-black' :'text-[#364153] dark:text-[#cccccc] '}text-xl`} />
                                    {/* <Icon className="text-2xl text-gray-600 pr-1" /> */}
                                    <p className={`${isActive ? 'text-black dark:text-[#1e1e1e]' : 'text-[#364153] dark:text-[#cccccc]'}`}>{sidebarData.routesName[index]}</p>
                                </div>
                            )}
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

        </aside>
    </>
  )
}

export default Sidebar
