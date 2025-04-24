import React, { useState,useContext } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi';
import krishna from '../assets/General/krishna.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";
import { FaChartBar, FaSignLanguage, FaExchangeAlt, FaFileAlt, FaCog } from 'react-icons/fa';
import { FaCameraRetro } from 'react-icons/fa';
import sign_spell from '../assets/General/logo.png';
import { ThemeContext } from '../Context/ThemeContext.jsx';

const Navbar = () => {
    const navigate = useNavigate();
    const [openSidebar,setOpenSidebar] = useState(false);
    const toggleSidebar = () =>{
        setOpenSidebar(!openSidebar);
    }
    const navSidebarData = {   
        routesPath:['/','/learnsign','/convertsign','/docs','/videoinput','/setting'],
        routesName:['Dashboard','Learn Sign','Convert','Docs','WebCam','Settings'],
        icons:[FaChartBar,FaSignLanguage,FaExchangeAlt,FaFileAlt,FaCameraRetro,FaCog]
    }

    const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className=''>
        <section className='flex w-full items-center bg-[#f3f4f6] dark:bg-[#333333] dark:border-[#444444] justify-between z-20 p-3 border-b border-gray-300'>
            <Link to='/'>
                <div className='flex items-center gap-1 md:hidden cursor-pointer'>
                    <img src={sign_spell} className='w-[50px] bold'/>
                    <div className='flex text-2xl font-bold text-[#59872f]'>SignSpell</div>
                </div>
            </Link>
            
            <div className='flex gap-3 items-center'>
                <div className="relative group cursor-pointer">
                    <button onClick={() => setDarkMode(d => !d)}
                        className="w-9 cursor-pointer h-9 flex items-center justify-center p-2 rounded-full bg-[#dadada] text-[#515a5f]
                                dark:bg-[#5e5e5e] dark:text-[#dadada] transition-colors duration-200"
                    >
                        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                    </button>
                </div>
                <FaBars className='text-2xl text-[#364153] dark:text-[#cccccc] md:hidden flex' onClick={toggleSidebar}/>
                <img src={krishna} onClick={() => navigate('/profile')} alt="" className='cursor-pointer w-[45px] md:flex hidden h-[45px] rounded-3xl border-2 border-[#b2f094] dark:border-[#b8f278]'/>
            </div>
        </section>

        {openSidebar ? (
            <aside className='fixed flex flex-col md:hidden bg-[#f3f4f6] dark:bg-[#333333] dark:border-[#444444] justify-between z-50 top-0 bottom-0 right-0 w-[230px] h-screen pr-2 border-l  border-[#dadada]'>
                <div className='h-full flex flex-col gap-4'>
                    <div className='border-b flex items-center justify-between p-3 dark:border-[#444444]   border-[#dadada]'>
                        <div className='flex items-center gap-3'>
                            <img src={krishna} onClick={() => navigate('/profile')} alt="" className='cursor-pointer w-[45px] md:hidden flex h-[45px] rounded-3xl border-2 border-[#5d892c]'/>
                            <p className='text-xl dark:text-[#cccccc]'>User Name</p>
                        </div>
                        <IoMdCloseCircle className='text-3xl text-[#364153] dark:text-[#cccccc]' onClick={toggleSidebar}/>
                    </div>
                    <div>
                        <div className='ml-5 flex flex-col gap-3 text-[1.13rem]'>
                            {navSidebarData.routesPath.map((route,index) =>{
                                const Icon = navSidebarData.icons[index]
                                return (
                                    <NavLink to={route} key={route}>{({ isActive }) => (
                                        <div className={`flex items-center text-[#364153] gap-x-4 p-2 w-full rounded-md ${isActive ? 'bg-[#bdf094] dark:bg-[#b8f278]' : ''}`}>
                                            <Icon className={`${isActive ? 'text-black' :'text-[#364153] dark:text-[#cccccc]  '}text-xl`} />
                                            {/* <Icon className="text-2xl text-gray-600 pr-1" /> */}
                                            <p className={`${isActive ? 'text-black dark:text-[#1e1e1e]' : 'text-[#364153] dark:text-[#cccccc]'}`}>{navSidebarData.routesName[index]}</p>
                                        </div>
                                    )}
                                    </NavLink>
        
                                )})}
                        </div>
                    </div>
                </div>
            </aside>): null}
    </div>
  )
}

export default Navbar
