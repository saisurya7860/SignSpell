import React, { useState,useContext } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import krishna from '../assets/General/krishna.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBars, FaChevronUp } from "react-icons/fa6";
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
    // Drakmode setting
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [openProfile,setOpenProfile] = useState(false);
  return (
    <div className=''>
        <section className='flex w-full items-center bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 justify-between z-20 p-2 border-b border-gray-200'>
            <Link to='/'>
                <div className='flex items-center gap-1 md:hidden cursor-pointer'>
                    <div className='dark:bg-white dark:rounded-full'>
                        <img src={sign_spell} className='w-[40px] h-[40px] bold'/>
                    </div>
                    <div className='flex text-2xl font-bold  text-blue-600'>SignSpell</div>
                </div>
            </Link>
            
            <div className='flex gap-3 items-center'>
                <div className="relative group cursor-pointer">
                    <button onClick={() => setDarkMode(d => !d)}
                        className="w-9 cursor-pointer h-9 flex items-center justify-center p-2 rounded-full bg-gray-200 
                                dark:bg-gray-300 text-gray-500 dark:text-gray-600 transition-colors duration-200"
                    >
                        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                    </button>
                </div>
                <FaBars className='text-2xl text-gray-600 dark:text-gray-300 md:hidden flex' onClick={toggleSidebar}/>
                
                <div className='cursor-pointer hidden border border-transparent md:flex items-center gap-1 hover:border-gray-200 hover:bg-blue-300 rounded p-0.5 dark:hover:bg-gray-600 dark:hover:border-blue-500 transition-all' title='Profile page' onClick={() => {setOpenProfile(!openProfile); navigate('/profile')}}>
                    <img src={krishna} alt="" className='cursor-pointer w-[45px] md:flex hidden h-[45px] rounded-3xl border-2 border-blue-600'/>
                    <div className='hidden md:flex flex-col  text-md  font-medium'>
                        <div className='text-gray-700 dark:text-gray-300 '>Username</div>
                        <div className='text-xs text-gray-600 dark:text-gray-400 '>User</div>
                    </div>
                    <p className='hidden md:flex text-md relative top-[-3px] font-extralight text-gray-600 dark:text-gray-300'>{openProfile ? <FaChevronDown/> :  <FaChevronUp/>}</p>
                </div>
                
            </div>
        </section>

        {openSidebar ? (
            <aside className='fixed flex flex-col md:hidden bg-gray-50 dark:bg-gray-700 border dark:border-gray-600  justify-between z-50 top-0 bottom-0 right-0 w-[230px] h-screen pr-2 border-l  border-[#dadada]'>
                <div className='h-full flex flex-col gap-4'>
                    <div className='border-b flex items-center justify-between p-3 dark:border-gray-600   border-[#dadada]'>
                        <div className='flex items-center gap-3'>
                            <img src={krishna} title='Profile page' onClick={() => navigate('/profile')} alt="" className='cursor-pointer w-[45px] md:hidden flex h-[45px] rounded-3xl border-2 border-blue-600'/>
                            <p className='text-xl dark:text-[#cccccc]'>User Name</p>
                        </div>
                        <IoMdCloseCircle className='text-3xl text-gray-600 dark:text-gray-300' onClick={toggleSidebar}/>
                    </div>
                    <div>
                        <div className='ml-5 flex flex-col gap-3 text-[1.13rem]'>
                            {navSidebarData.routesPath.map((route,index) =>{
                                const Icon = navSidebarData.icons[index]
                                return (
                                    <NavLink to={route} key={route}>{({ isActive }) => (
                                        <div className={`flex items-center gap-x-4 p-2 w-full rounded-md ${isActive ? 'bg-blue-500 dark:bg-blue-400' : ''}`}>
                                            <Icon className={`${isActive ? 'text-neutral-900' :'text-gray-700 dark:text-gray-300 text-xl'}`} />
                                            {/* <Icon className="text-2xl text-gray-600 pr-1" /> */}
                                            <p className={`${isActive ? 'text-white dark:text-gray-800' : 'text-gray-800 dark:text-gray-300'}`}>{navSidebarData.routesName[index]}</p>
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
