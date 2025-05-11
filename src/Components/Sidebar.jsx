import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sign_spell from '../assets/General/logo.png'
import { FaChartBar, FaSignLanguage, FaExchangeAlt, FaFileAlt, FaCog } from 'react-icons/fa';
import { FaCameraRetro } from 'react-icons/fa';
import { userAuth } from '../Context/AuthContext.jsx';

const Sidebar = () => {
    const sidebarData = {   
        routesPath:['/','/learnsign','/convertsign','/docs','/setting',],
        routesName:['Dashboard','Learn Sign','Convert','Docs','Settings',],
        icons:[FaChartBar,FaSignLanguage,FaExchangeAlt,FaFileAlt,FaCameraRetro,FaCog,]
    }
    // const {logout} = userAuth();
    //     const handleLogOut =()=>{
    //         logout(null);
    //         navigate('/register');
    //     }
  return (
    <>
        <aside className='hidden md:flex transition-all w-[230px]  px-4 duration-300  flex-col bg-gray-50 justify-between z-50 h-screen border-r border-gray-200'>
            <div className=''>
                <Link to='/'>
                    <div className='mt-4 flex items-center gap-2 cursor-pointer'>
                        <div className='dark:bg-white dark:rounded-full'>
                            <img src={sign_spell} className='w-[40px] h-[40px] bold'/>
                        </div>
                        <div className='transition-all duration-300 text-2xl font-bold  text-green-600'>SignSpell</div>
                    </div>
                </Link>
                <div className='mt-8 flex flex-col  gap-1 text-[1.13rem]'>
                    {sidebarData.routesPath.map((route,index) =>{
                        const Icon = sidebarData.icons[index]
                        return (
                            <NavLink to={route} key={route}>{({ isActive }) => (
                                <div className={`flex items-center gap-x-4 p-2 w-full rounded-md ${isActive ? 'bg-green-500' : ''}`}>
                                    <Icon className={`${isActive ? 'text-neutral-100  text-xl' :'text-gray-500 text-xl'}`} />
                                    {/* <Icon className="text-2xl text-gray-600 pr-1" /> */}
                                    <p className={`${isActive ? 'text-white' : ''}`}>{sidebarData.routesName[index]}</p>
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
