import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Accounts from '../Components/Accounts';


const Profile = () => {
  const navigate = useNavigate();
  return (

    <div className='p-3 min-h-screen '>
        <p className='text-2xl font-semibold dark:text-gray-300 text-gray-700'>Profile Page</p>
        <div className='m-1 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 text-gray-700 border border-gray-300'>
          <div className='flex items-center justify-between font-semibold p-10'>
            <div className='flex items-center gap-1 cursor-pointer' onClick={()=> navigate('/')}>
              <p className='dark:text-gray-300 text-gray-700 font-light text-sm flex items-center'><FaChevronLeft/></p>
              <p className='dark:text-gray-300 text-gray-800 text-lg  flex items-center'>Back </p>
            </div>
            <p className='dark:text-gray-300 text-gray-800 text-lg '>  User Profile </p>
          </div>

          {/* user profile contents div */}
          <Accounts/>
        </div>
    </div>
    
  )
}

export default Profile
