import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa'
import krishna from '../assets/General/krishna.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";
import { FaChartBar, FaSignLanguage, FaExchangeAlt, FaFileAlt, FaCog } from 'react-icons/fa';
import { FaCameraRetro } from 'react-icons/fa';
import sign_spell from '../assets/General/logo.png'



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
  return (
    <div className=''>
        <section className='flex w-full items-center bg-[#f3f4f6] justify-between z-20 p-3 border-b border-gray-300'>
            <Link to='/'>
                <div className='flex items-center gap-1 md:hidden cursor-pointer'>
                    <img src={sign_spell} className='w-[50px] bold'/>
                    <div className='flex text-2xl font-bold text-[#59872f]'>SignSpell</div>
                </div>
            </Link>
            
            <div className='flex gap-3 items-center'>
                <div className="relative group cursor-pointer">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-[#59872f] active:bg-green-700 transition duration-300">
                    <FaBell className="w-5 h-5 text-gray-700 group-hover:text-white group-active:text-white" />
                    </div>
                </div>
                <FaBars className='text-2xl md:hidden flex' onClick={toggleSidebar}/>
                <img src={krishna} onClick={() => navigate('/profile')} alt="" className='cursor-pointer w-[45px] md:flex hidden h-[45px] rounded-3xl border-3 border-[#b2f094]'/>
            </div>
        </section>

        {openSidebar ? (
            <aside className='fixed flex flex-col md:hidden bg-white justify-between z-50 top-0 bottom-0 right-0 max-w-[400px] min-h-screen pr-2 border-l border-[#dadada]'>
                <div className='flex flex-col gap-4'>
                    <div className='border-b flex items-center justify-between p-[11.5px]  border-[#dadada]'>
                        <div className='flex items-center gap-3'>
                            <img src={krishna} onClick={() => navigate('/profile')} alt="" className='cursor-pointer w-[45px] md:hidden flex h-[45px] rounded-3xl border-3 border-[#b2f094]'/>
                            <p className='text-xl '>User Name</p>
                        </div>
                        <IoMdCloseCircle className='text-3xl ' onClick={toggleSidebar}/>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder='Search'
                            className='ml-2 pl-4 h-[43px]  outline-none flex md:hidden w-[230px] rounded-xl active:border-none  focus:ring-3 border-1 focus:ring-[#59872f] border-gray-400'
                        />
                        <div className='mt-6 ml-5 flex flex-col gap-3 text-[1.13rem]'>
                            {navSidebarData.routesPath.map((route,index) =>{
                                const Icon = navSidebarData.icons[index]
                                return (
                                    <NavLink to={route} key={route} className={({isActive})=> `flex items-center gap-2 p-1.5 rounded-md ${isActive ? 'bg-[#bdf094]' : ''}`}>
                                    <Icon className="text-2xl text-gray-600 pr-1" />
                                    <p>{navSidebarData.routesName[index]}</p>
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
